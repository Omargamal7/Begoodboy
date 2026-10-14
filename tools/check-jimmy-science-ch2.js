'use strict';
const fs=require('fs'),path=require('path'),{chromium}=require('playwright');
const root=path.resolve(__dirname,'..'),file='file://'+path.join(root,'jimmy-science-chapter-02.html'),id='jimmy-science-t2-l1';
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
(async()=>{
 const browser=await chromium.launch(process.env.CHROMIUM?{executablePath:process.env.CHROMIUM}:{}),qa=path.join(root,'qa-jimmy-science-ch2');fs.mkdirSync(qa,{recursive:true});
 const errors=[],requests=[];
 for(const width of [360,412,768,1280]){
  const p=await browser.newPage({viewport:{width,height:900}});p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url());});await p.route(/^https?:/,r=>r.abort());
  const fits=async label=>assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Overflow '+width+' '+label);
  await p.goto(file);await p.waitForSelector('#sit-1');await fits('start');
  const L=await p.evaluate(id=>JSON.parse(JSON.stringify(window.LESSONS[id])),id);
  assert((await p.evaluate(()=>Object.keys(window.LESSONS))).length===1,'Extra lesson in standalone');assert(L.child==='Jimmy','Wrong child');assert(L.facts.length===6&&L.sittings.length===4&&L.references.length===5,'Coverage counts');assert(L.source.fullChapterAvailable===false,'Unseen chapter claimed');
  const questions=L.sittings.slice(1).flatMap(s=>s.screens);assert(questions.length===15,'Missing school question');assert(questions.every((q,i)=>q.test===Math.floor(i/5)+1&&q.number===i%5+1),'Original test order changed');assert(questions.every(q=>L.facts.some(f=>f.id===q.fact)&&q.answer),'Missing teaching card or supplied answer');
  await p.click('.source-pages summary');await p.locator('.source-pages img').evaluateAll(async imgs=>{for(const img of imgs){await img.decode();if(!img.naturalWidth)throw Error('Source photo missing');}});await fits('sources');await p.click('.source-pages summary');
  if(width===360)await p.screenshot({path:path.join(qa,'start-phone.png'),fullPage:true});
  for(let n=0;n<L.sittings.length;n++){
   await p.click('#sit-'+(n+1));await p.click('#go');
   for(const sc of L.sittings[n].screens){
    await fits(sc.type);
    if(sc.type==='fact'){
     const f=L.facts.find(x=>x.id===sc.id);await p.locator('.lesson-figure img').evaluateAll(async imgs=>{for(const img of imgs)await img.decode();});if(width===360&&['cycle','seeds','hibernation'].includes(sc.id))await p.screenshot({path:path.join(qa,sc.id+'-phone.png'),fullPage:true});await p.click('#go');
     if(sc.id==='temperature'){await p.click('#opt-1');assert(/again/i.test(await p.textContent('.eyebrow')),'Wrong picture answer did not reteach');await p.click('#go');}
     await p.click('#opt-'+f.pick.answer);await p.click('#fb #go');
    }else if(sc.type==='sort'){
     if(sc.kind==='Order'){await p.click('.chip[data-card="c0"]');await p.click('.dropbox[data-target="4"] h3');assert(await p.locator('.chip[data-card="c0"]').getAttribute('class').then(x=>!x.includes('placed')),'Incorrect order accepted');}
     for(let k=0;k<sc.cards.length;k++){await p.click('.chip[data-card="c'+k+'"]');await p.click('.dropbox[data-target="'+sc.cards[k].box+'"] h3');}
     assert(await p.isVisible('#go'),'Activity unfinished');if(width===360&&sc.kind==='Order')await p.screenshot({path:path.join(qa,'order-phone.png'),fullPage:true});await p.click('#go');
    }else if(sc.type==='recall'){
     assert(await p.locator('#matched').count()===0,'Answer marked before reveal');assert(!(await p.textContent('#card')).includes(sc.answer.replace(/\*\*/g,'')),'Answer visible before recall');await p.click('#reveal');assert(!(await p.textContent('#fb')).includes('Murad'),'Wrong child in recall feedback');assert((await p.textContent('#fb')).includes(sc.answer.replace(/\*\*/g,'')),'Model answer missing');
     if(n===1&&sc.number===3){await p.click('#retry');assert(/again/i.test(await p.textContent('.eyebrow')),'Recall retry failed');await p.click('#go');await p.click('#reveal');if(width===360)await p.screenshot({path:path.join(qa,'recall-phone.png'),fullPage:true});}
     await fits('revealed answer');await p.click('#matched');await p.click('#fb #go');
    }else throw Error('Unexpected screen '+sc.type);
   }
   assert(/You finished/.test(await p.textContent('#card')),'Sitting incomplete');await p.click('#card #go');
  }
  await p.reload();await p.waitForSelector('#sit-1');
  assert(await p.locator('[id^="sit-"]').evaluateAll(bs=>bs.length===4&&bs.every(b=>b.textContent.includes('Done'))),'Progress did not persist');await p.close();
  console.log('Jimmy Science Chapter 2 '+width+'px: six cards, three activities, 15 original questions, both retry paths, five sources, persistence and layout OK');
 }
 assert(!errors.length,errors.join('\n'));assert(!requests.length,'Offline network requests');console.log('Jimmy Science Chapter 2: widths 360,412,768,1280; external requests: 0; problems: 0');await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
