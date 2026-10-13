"""Render verified binder pages and crop original lesson diagrams."""
import hashlib,sys,json
from pathlib import Path
import fitz
from PIL import Image
root=Path(__file__).resolve().parent.parent
pdf=Path(sys.argv[1])
assert hashlib.sha256(pdf.read_bytes()).hexdigest()=='25336920caa1d2c7e9fd2c65265dd2fd54f789909d39593bd550b5d878f4f999'
doc=fitz.open(pdf)
manifest=json.loads((root/'lessons/science-data/manifest.json').read_text())
pages={70,71}
for lesson in manifest:pages.update(lesson['pages']);pages.update(lesson['exercisePages'])
dest=root/'assets/science/pages';dest.mkdir(parents=True,exist_ok=True)
images={}
for n in sorted(pages):
 pix=doc[n-1].get_pixmap(matrix=fitz.Matrix(1.5,1.5),alpha=False)
 img=Image.frombytes('RGB',(pix.width,pix.height),pix.samples)
 images[n]=img;img.save(dest/f'page-{n}.jpg',quality=88,optimize=True)
crops={'closed-jar.jpg':(3,(440,570,845,860)),'air-mixture.jpg':(5,(415,170,835,410)),'limewater.jpg':(7,(110,745,820,990)),'breathing.jpg':(14,(80,670,845,940)),'alveoli.jpg':(17,(340,218,668,506)),'villi.jpg':(24,(75,510,825,795)),'blood-cycle.jpg':(28,(80,210,850,855)),'urinary-system.jpg':(31,(530,310,835,915)),'body-organs.jpg':(33,(130,605,850,1075)),'starch-test.jpg':(38,(65,310,835,945)),'plant-gas-readings.jpg':(41,(70,250,850,990)),'transpiration-test.jpg':(44,(65,225,850,900)),'xylem.jpg':(45,(430,170,855,980)),'food-chain.jpg':(51,(60,810,855,1090)),'water-cycle.jpg':(52,(480,405,842,720)),'nile-chain.jpg':(54,(55,320,855,655)),'litmus-results.jpg':(59,(60,755,850,1025)),'evaporation.jpg':(60,(65,570,850,870)),'metal-reaction.jpg':(66,(60,660,850,955)),'white-powder.jpg':(67,(460,228,818,508))}
for name,(n,box) in crops.items():images[n].crop(box).save(root/'assets/science'/name,quality=90,optimize=True)
print(f'Rendered {len(pages)} original pages and {len(crops)} diagrams from verified PDF')
