"""Read the public Ministry Grade 5 Social Studies reference for authoring."""
import sys,json,urllib.request,hashlib
from pathlib import Path
import fitz
from PIL import Image
url=sys.argv[1];dest=Path(sys.argv[2]);dest.mkdir(parents=True,exist_ok=True)
pdf=dest/'social-studies-grade5-ministry.pdf'
with urllib.request.urlopen(url) as src,pdf.open('wb') as out:
 while chunk:=src.read(1024*1024):out.write(chunk)
doc=fitz.open(pdf)
texts=[]
for i,page in enumerate(doc):
 texts.append({'pdfPage':i+1,'text':page.get_text()})
 if i<20:
  pix=page.get_pixmap(matrix=fitz.Matrix(1.5,1.5),alpha=False)
  im=Image.frombytes('RGB',(pix.width,pix.height),pix.samples)
  im.save(dest/f'page-{i+1}.jpg',quality=90,optimize=True)
(dest/'pages.json').write_text(json.dumps(texts,ensure_ascii=False,indent=2))
(dest/'source.json').write_text(json.dumps({'url':url,'sha256':hashlib.sha256(pdf.read_bytes()).hexdigest(),'bytes':pdf.stat().st_size,'pages':len(doc)},indent=2))
print((dest/'source.json').read_text())
print(json.dumps(texts[:8],ensure_ascii=False))
