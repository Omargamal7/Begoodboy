'use strict';
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'../..'),base=path.join(root,'app/assets/gamal/social-studies/climate');
const data=fs.readFileSync(path.join(root,'app/activities/gamal/climate-quest/data.js'),'utf8');
const assets={};
for(const [key,name,mime] of [['art','season-scenes.webp','image/webp'],...Array.from({length:4},(_,i)=>['school'+(i+1),'school-page-'+(i+1)+'.jpg','image/jpeg'])]){
 assets[key]='data:'+mime+';base64,'+fs.readFileSync(path.join(root,name.startsWith('school-page-')?'sources/gamal/social-studies/assessments/climate':'app/assets/gamal/social-studies/climate',name)).toString('base64');
}
let html=fs.readFileSync(path.join(root,'app/activities/gamal/climate-quest/app.html'),'utf8');
for(const [placeholder,value] of [['/*__STYLE__*/',fs.readFileSync(path.join(root,'app/activities/gamal/climate-quest/app.css'),'utf8')],['/*__DATA__*/',data],['/*__ASSETS__*/','window.CLIMATE_ASSETS = '+JSON.stringify(assets)+';'],['/*__APP__*/',fs.readFileSync(path.join(root,'app/activities/gamal/climate-quest/app.js'),'utf8')]])html=html.replace(placeholder,()=>value);
const out=path.join(root,'packs/gamal/social-studies/climate-quest.html');fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,html);console.log('Built '+path.basename(out)+' · '+fs.statSync(out).size+' bytes · all artwork and school pages embedded');
