'use strict';
const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'../..');
const shared=path.join(root,'app/activities/shared/english-revision');
const template=fs.readFileSync(path.join(shared,'app.html'),'utf8');
const css=fs.readFileSync(path.join(shared,'app.css'),'utf8');
const js=fs.readFileSync(path.join(shared,'app.js'),'utf8');
const safeJSON=x=>JSON.stringify(x).replace(/</g,'\\u003c');
for(const [slug,folder] of [['jimmy','gamal'],['murad','murad']]){
  const bank=JSON.parse(fs.readFileSync(path.join(root,'app/activities',folder,'english-revision/data.json'),'utf8'));
  const pages=JSON.parse(fs.readFileSync(path.join(root,'app/assets',folder,'english/assessment-pages.json'),'utf8'));
  const html=template.replaceAll('__CHILD__',bank.child).replaceAll('__GRADE__',bank.grade).replace('/*__STYLE__*/',css).replace('/*__DATA__*/',safeJSON(bank)).replace('/*__ASSETS__*/',safeJSON(pages)).replace('/*__APP__*/',js);
  const out=path.join(root,'packs',folder,'english/october-revision.html');
  fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,html);
  console.log(JSON.stringify({child:bank.child,file:path.relative(root,out),bytes:Buffer.byteLength(html),sections:bank.sections.length,items:bank.sections.reduce((n,s)=>n+s.items.length,0),models:bank.sections.filter(s=>s.kind==='model').length}));
}
