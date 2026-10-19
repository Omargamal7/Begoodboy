'use strict';
const fs=require('fs'),path=require('path'),assert=require('assert'),vm=require('vm');
const root=path.resolve(__dirname,'../..');
let total=0;
for(const [slug,folder,models,first,last] of [['jimmy','gamal',18,4,35],['murad','murad',9,5,31]]){
 const d=JSON.parse(fs.readFileSync(path.join(root,'app/activities',folder,'english-revision/data.json'),'utf8'));
 const pages=JSON.parse(fs.readFileSync(path.join(root,'app/assets',folder,'english/assessment-pages.json'),'utf8'));
 const ids=new Set(),sections=new Set(),usedPages=new Set();let items=0;
 assert.equal(d.units.length,3);assert.equal(d.sections.filter(s=>s.kind==='model').length,models);
 for(const s of d.sections){assert(!sections.has(s.id),'duplicate section '+s.id);sections.add(s.id);assert(s.items.length,'empty section '+s.id);assert(d.units.some(u=>u.id===s.unit),'unknown unit '+s.id);
  for(const q of s.items){assert(!ids.has(q.id),'duplicate item '+q.id);ids.add(q.id);items++;assert(q.prompt&&q.source,'missing prompt/source '+q.id);assert(pages[q.source.pdfPage],'missing page '+q.id);usedPages.add(q.source.pdfPage);
   assert(q.explanation&&q.hint,'missing feedback '+q.id);assert(q.modelAnswer,'missing worked answer '+q.id);
   assert(!q.issue||q.manual,'issue is being scored '+q.id);
   if(!q.manual&&!['open','writing','task'].includes(q.type)){if(q.type==='choice')assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.choices.length,'invalid choice '+q.id);else assert(q.answers?.length,'missing accepted answers '+q.id);}
   if(q.type==='order')assert(q.tokens?.length,'missing word tokens '+q.id);
   if(q.type==='writing')assert(q.manual&&(!q.wordTarget||(Number.isInteger(q.wordTarget)&&q.wordTarget>0)),'writing must be parent checked with a valid optional target '+q.id);
  }
 }
 for(let n=first;n<=last;n++)assert(pages[n],'page image absent '+n);
 const trios=new Map();for(const s of d.sections.filter(s=>s.kind==='model')){if(!trios.has(s.series))trios.set(s.series,[]);trios.get(s.series).push(s.model);}
 for(const [series,abc] of trios)assert.deepEqual(abc.sort(),['A','B','C'],'incomplete model trio '+series);
 const html=fs.readFileSync(path.join(root,'packs',folder,'english/october-revision.html'),'utf8');
 assert(!html.includes('/*__'),'unfilled template');assert(!/\b(?:src|href)="https?:/.test(html),'external runtime dependency');
 const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(x=>x[1]);assert.equal(scripts.length,3);JSON.parse(scripts[0]);JSON.parse(scripts[1]);new vm.Script(scripts[2]);
 assert(!/\b(?:fetch|XMLHttpRequest|WebSocket|Audio)\s*\(/.test(scripts[2]),'runtime network/sound dependency');
 console.log(JSON.stringify({child:d.child,items,models,modelTrios:trios.size,pageImages:Object.keys(pages).length,questionSourcePages:usedPages.size,unscoredIssues:d.sections.flatMap(s=>s.items).filter(q=>q.issue).length,bytes:Buffer.byteLength(html),problems:0}));total+=items;
}
console.log('Total questions/tasks: '+total+'; problems: 0');
