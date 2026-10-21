# Usage: python3 -I inject_ra.py file.html ...  (idempotent: replaces an existing READ-ALOUD block)
import sys,re,os
ra=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),"readaloud-snippet.html"),encoding="utf-8").read()
for p in sys.argv[1:]:
    h=open(p,encoding="utf-8").read()
    h=re.sub(r"<!-- READ-ALOUD v\d+.*?<!-- /READ-ALOUD -->\n?","",h,flags=re.S)
    h=h.replace("</body>",ra+"</body>",1) if "</body>" in h else h+ra
    open(p,"w",encoding="utf-8").write(h);print("ok",os.path.basename(p))
