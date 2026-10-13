'use strict';
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),base=path.join(root,'assets/jimmy-climate');
const data=fs.readFileSync(path.join(root,'lessons/jimmy-climate-quiz-data.js'),'utf8');
const assets={};
for(const [key,name,mime] of [['art','season-scenes.webp','image/webp'],...Array.from({length:4},(_,i)=>['school'+(i+1),'school-page-'+(i+1)+'.jpg','image/jpeg'])]){
 assets[key]='data:'+mime+';base64,'+fs.readFileSync(path.join(base,name)).toString('base64');
}
let html=fs.readFileSync(path.join(base,'app.html'),'utf8');
for(const [placeholder,value] of [['/*__STYLE__*/',fs.readFileSync(path.join(base,'app.css'),'utf8')],['/*__DATA__*/',data],['/*__ASSETS__*/','window.CLIMATE_ASSETS = '+JSON.stringify(assets)+';'],['/*__APP__*/',fs.readFileSync(path.join(base,'app.js'),'utf8')]])html=html.replace(placeholder,()=>value);
const out=path.join(root,'jimmy-climate-quest.html');fs.writeFileSync(out,html);console.log('Built '+path.basename(out)+' · '+fs.statSync(out).size+' bytes · all artwork and school pages embedded');
