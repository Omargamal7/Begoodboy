'use strict';
const fs=require('fs'),path=require('path');const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const script=s=>'<script>\n'+s.replace(/<\/script/gi,'<\\/script')+'\n</script>';
const svg='data:image/svg+xml;base64,'+fs.readFileSync(path.join(root,'assets/social-studies/coordinates.svg')).toString('base64');
const lesson=read('lessons/jimmy-social-studies-t1.js').replace("'assets/social-studies/coordinates.svg'",JSON.stringify(svg));
const html='<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>Jimmy · Social Studies · Egypt’s coordinates</title><style>'+read('assets/sheet.css')+'</style></head><body><div id="app"></div>'+script(read('assets/sheet.js'))+script(read('lessons/_common.js'))+script(lesson)+script('SheetEngine.boot(document.getElementById("app"));')+'</body></html>\n';
fs.writeFileSync(path.join(root,'jimmy-social-studies-01-egypt-coordinates.html'),html);
console.log('Built independent Social Studies reference lesson ('+Buffer.byteLength(html)+' bytes)');
