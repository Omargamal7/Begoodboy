import concurrent.futures, hashlib, json, pathlib, subprocess, urllib.request, time
root=pathlib.Path.cwd()
plan_path=root/'sync/2026-10-25-ministry-books/ingest-plan.json'
plan=json.loads(plan_path.read_text())
large_path=root/'sources/large-originals.json';large=json.loads(large_path.read_text())
changed=[]
def sha(data):return hashlib.sha256(data).hexdigest()
def fetch(b):
 for attempt in range(3):
  try:
   data=urllib.request.urlopen(b['source_url'],timeout=180).read()
   assert len(data)==b['bytes'] and sha(data)==b['sha256'] and data.startswith(b'%PDF'), 'Checksum/format mismatch: '+b['path']
   print('Verified',b['path'],flush=True);return b,data
  except Exception:
   if attempt==2:raise
   time.sleep(2)
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:
 for b,data in ex.map(fetch,plan['books']):
  target=root/b['path'];assert not target.exists(), 'Refusing replacement '+b['path']
  if len(data)>8*1024*1024:
   item={'path':b['path'],'bytes':len(data),'sha256':sha(data),'parts':[]}
   assert not any(x['sha256']==item['sha256'] for x in large['files']), 'Duplicate full hash'
   for i,offset in enumerate(range(0,len(data),8*1024*1024),1):
    block=data[offset:offset+8*1024*1024];rel=f"sources/.parts/{item['sha256']}/{i:04}.bin";p=root/rel;p.parent.mkdir(parents=True,exist_ok=True)
    if p.exists():assert p.read_bytes()==block
    else:p.write_bytes(block)
    blob=hashlib.sha1(b'blob '+str(len(block)).encode()+b'\0'+block).hexdigest()
    item['parts'].append({'path':rel,'bytes':len(block),'sha256':sha(block),'git_blob_sha':blob});changed.append(rel)
   assert sha(b''.join((root/x['path']).read_bytes() for x in item['parts']))==b['sha256']
   large['files'].append(item)
  else:
   target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(data);assert sha(target.read_bytes())==b['sha256'];changed.append(b['path'])
large_path.write_text(json.dumps(large,ensure_ascii=False,indent=2)+'\n');changed.append('sources/large-originals.json')
for rel,contents in plan['text_files'].items():
 assert rel in ['docs/ministry-book-coverage.md','sync/2026-10-25-ministry-books/books.json','sync/2026-10-25-ministry-books/catalogues.json']
 p=root/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(contents);changed.append(rel)
p=root/'sources/README.md';p.write_text(p.read_text()+'\n## Ministry books audit — 25 October 2026\n\n[Coverage and remaining gaps](../docs/ministry-book-coverage.md) · [Official book URLs and SHA-256 manifest](../sync/2026-10-25-ministry-books/books.json). Reuse adequate school binders. Restore large original PDFs with `python3 tools/source/restore-originals.py`. No lesson HTMLs changed.\n');changed.append('sources/README.md')
# Restore every new PDF and verify once more through the repository's existing tool.
subprocess.run(['python3','tools/source/restore-originals.py'],check=True)
for b in plan['books']:
 p=root/b['path'];assert p.stat().st_size==b['bytes'] and sha(p.read_bytes())==b['sha256']
subprocess.run(['git','add','--',*changed],check=True)
# The one-shot transport files are removed from the final tree after ingestion.
subprocess.run(['git','rm','--','.github/workflows/book-archive-job1.yml','tools/source/ingest-job1-20261025.py','sync/2026-10-25-ministry-books/ingest-plan.json'],check=True)
staged=subprocess.check_output(['git','diff','--cached','--name-only'],text=True).splitlines()
assert not any(p.endswith(('.html','.js','.tsx','.jsx')) for p in staged)
subprocess.run(['git','config','user.name','github-actions[bot]'],check=True)
subprocess.run(['git','config','user.email','41898282+github-actions[bot]@users.noreply.github.com'],check=True)
subprocess.run(['git','commit','-m','Archive 17 verified Ministry books and reconcile MLS coverage'],check=True)
subprocess.run(['git','push','origin','HEAD:main'],check=True)
print('ARCHIVE_COMMIT',subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip(),flush=True)
