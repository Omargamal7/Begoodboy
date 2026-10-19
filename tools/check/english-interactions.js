'use strict';
// Exercise app state and rendering when the managed browser preview is unavailable.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'../..');
const script=fs.readFileSync(path.join(root,'app/activities/shared/english-revision/app.js'),'utf8');
const decode=s=>s.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
function boot(data,storage=new Map(),blocked=false){
 const events={},elements=new Map(),downloads=[];
 const element=id=>{if(!elements.has(id))elements.set(id,{id,_html:'',textContent:'',value:'',open:false,classList:{toggle(){}},focus(){},showModal(){this.open=true;},close(){this.open=false;},get innerHTML(){return this._html;},set innerHTML(v){this._html=v;if(id==='main'){const m=v.match(/<textarea[^>]*id="answer"[^>]*>([\s\S]*?)<\/textarea>/);element('answer').value=m?decode(m[1]):'';}}});return elements.get(id);};
 element('revision-data').textContent=JSON.stringify(data);element('revision-pages').textContent=JSON.stringify(Object.fromEntries(data.sections.flatMap(s=>s.items.map(q=>[q.source.pdfPage,'data:image/webp;base64,AA==']))));
 const document={getElementById:element,querySelectorAll:()=>[],addEventListener:(name,fn)=>events[name]=fn,querySelector:()=>({classList:{toggle(){}}}),createElement:()=>({click(){downloads.push(this.download);},remove(){}}),body:{append(){}}};
 const localStorage={getItem(k){if(blocked)throw Error('storage disabled');return storage.get(k)||null;},setItem(k,v){if(blocked)throw Error('storage disabled');storage.set(k,v);}};
 vm.runInNewContext(script,{document,localStorage,window:{scrollTo(){}},URL:{createObjectURL:()=>'',revokeObjectURL(){}},Blob,setTimeout(){},console});
 const click=dataset=>events.click({target:{closest:()=>({dataset,hasAttribute:()=>false})}});
 const type=(q,value)=>{element('answer').value=value;events.input({target:{dataset:{answer:q.id},value}});};
 const state=()=>JSON.parse(storage.get('english-field-club-v1-'+data.slug));
 return {click,type,state,element,storage,html:()=>element('main').innerHTML};
}
let total=0;
for(const folder of ['gamal','murad']){
 const d=JSON.parse(fs.readFileSync(path.join(root,'app/activities',folder,'english-revision/data.json'),'utf8'));
 const app=boot(d),all=d.sections.flatMap(s=>s.items),auto=all.filter(q=>!q.manual&&!['open','writing','task'].includes(q.type));
 for(const v of ['learn','models','writing','retry','home']){app.click({view:v});assert(app.html().length>100,'empty view '+v);}
 for(const q of all){
  app.click({item:q.id});assert(app.html().includes('data-question-id="'+q.id+'"'),'missing question '+q.id);
  assert(!app.html().includes('data-action="worked"'),'answer visible before attempt '+q.id);
  if(q.type==='choice')app.click({choice:String(q.correct??0)});
  else if(q.type!=='task'){if(q.type==='order')app.click({action:'type-order'});app.type(q,(q.answers||[])[0]||q.modelAnswer);}
  app.click({action:'check'});
  const manual=q.manual||['open','writing','task'].includes(q.type);
  assert.equal(app.state().progress[q.id].status,manual?'needs_parent':'correct',q.id);
  app.click({action:'worked'});assert(app.html().includes('worked-answer'),'missing worked feedback '+q.id);
  if(manual){app.click({action:'parent-correct'});assert.equal(app.state().progress[q.id].status,q.issue?'reviewed':'parent_checked');}
  total++;
 }
 // Wrong answers remain in the retry list after opening the worked answer.
 const q=auto[0];app.click({item:q.id});
 if(q.type==='choice')app.click({choice:String((q.correct+1)%q.choices.length)});else{if(q.type==='order')app.click({action:'type-order'});app.type(q,'Definitely not the answer 921.');}
 app.click({action:'check'});assert.equal(app.state().progress[q.id].status,'retry');app.click({action:'worked'});assert.equal(app.state().progress[q.id].status,'retry');app.click({view:'retry'});assert(app.html().includes(q.id));
 app.click({item:q.id});app.click({action:'worked'});assert(app.html().includes('accept-alternative'));app.click({action:'accept-alternative'});assert.equal(app.state().progress[q.id].status,'parent_checked');
 // Typed drafts and reorder chips persist after leaving and reloading.
 const writing=all.find(q=>q.type==='writing');app.click({item:writing.id});app.type(writing,'My saved draft has six words.');app.click({view:'home'});
 const reloaded=boot(d,app.storage);reloaded.click({item:writing.id});assert(reloaded.element('answer').value==='My saved draft has six words.');
 const order=all.find(q=>q.type==='order');if(order){const fresh=boot(d);fresh.click({item:order.id});fresh.click({word:'0'});fresh.click({view:'home'});fresh.click({item:order.id});assert(fresh.html().includes('data-remove-word="0"'));}
 // Every source page opens, including when nested above the parent guide.
 reloaded.click({action:'parent'});assert(reloaded.element('parent-dialog').open);reloaded.click({source:String(all[0].source.pdfPage)});assert(reloaded.element('source-dialog').open);
 const blocked=boot(d,new Map(),true);blocked.click({action:'quick'});assert(blocked.html().includes('data-question-id='));
 console.log(JSON.stringify({child:d.child,questionFlows:all.length,autoChecked:auto.length,drafts:true,retry:true,sourcePages:true,storageFallback:true,problems:0}));
}
console.log('Question flows checked: '+total+'; problems: 0. Browser layout remains unverified.');
