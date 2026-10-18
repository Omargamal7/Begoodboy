#!/usr/bin/env python3
"""Restore original school files stored as verified binary parts."""
from pathlib import Path
import argparse, hashlib, json, os, tempfile

def digest(path):
    h=hashlib.sha256()
    with path.open('rb') as f:
        for block in iter(lambda:f.read(1024*1024),b''):h.update(block)
    return h.hexdigest()

def restore(root):
    root=root.resolve()
    manifest=json.loads((root/'sources/large-originals.json').read_text())
    for item in manifest['files']:
        target=(root/item['path']).resolve()
        if not target.is_relative_to(root):raise ValueError('Invalid destination')
        if target.exists():
            if target.stat().st_size==item['bytes'] and digest(target)==item['sha256']:
                print('Verified existing:',item['path']);continue
            raise ValueError('Refusing to replace a different file: '+item['path'])
        target.parent.mkdir(parents=True,exist_ok=True)
        temp=None
        try:
            with tempfile.NamedTemporaryFile(dir=target.parent,delete=False) as out:
                temp=Path(out.name)
                for part in item['parts']:
                    src=(root/part['path']).resolve()
                    if not src.is_relative_to(root):raise ValueError('Invalid part path')
                    if src.stat().st_size!=part['bytes'] or digest(src)!=part['sha256']:
                        raise ValueError('Corrupt part: '+part['path'])
                    with src.open('rb') as f:
                        for block in iter(lambda:f.read(1024*1024),b''):out.write(block)
            if temp.stat().st_size!=item['bytes'] or digest(temp)!=item['sha256']:
                raise ValueError('Original checksum mismatch: '+item['path'])
            os.replace(temp,target)
            print('Restored and verified:',item['path'])
        finally:
            if temp is not None and temp.exists():temp.unlink()

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root',type=Path,default=Path(__file__).resolve().parents[2])
    restore(parser.parse_args().root)
