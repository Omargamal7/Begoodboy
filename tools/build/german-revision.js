'use strict';
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'../..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),bank=JSON.parse(read('app/activities/gamal/german-revision/data.json')),lessons=JSON.parse(read('app/activities/gamal/german-revision/lessons.json'));
const template=read('app/activities/shared/german-revision/template.html'),css=read('app/activities/shared/german-revision/style.css')+'\n'+read('app/activities/shared/german-revision/german.css')+'\n[hidden]{display:none!important}',js=read('app/activities/shared/german-revision/app.js'),pages=JSON.parse(read('app/assets/gamal/german/assessment-pages.json'));
const json=x=>JSON.stringify(x).replace(/</g,'\\u003c');
for(const [edition,title,classEdition,file] of [['jimmy','Jimmy · Primary 5A',false,'packs/gamal/german/october-revision.html'],['class-grade5','Primary 5 · class edition',true,'packs/class/grade5/german/october-arabic-help.html']]){
 const data={...bank,lessons,edition,title,classEdition};delete data.student;
 const html=template.replaceAll('__TITLE__',title).replace('/*__STYLE__*/',css).replace('/*__DATA__*/',json(data)).replace('/*__PAGES__*/',json(pages)).replace('/*__APP__*/',js);
 fs.mkdirSync(path.dirname(path.join(root,file)),{recursive:true});fs.writeFileSync(path.join(root,file),html);console.log(JSON.stringify({file,bytes:Buffer.byteLength(html),groups:data.groups.length,questions:data.groups.reduce((n,g)=>n+g.questions.length,0)}));
}
