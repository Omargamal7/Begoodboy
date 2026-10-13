'use strict';
const fs=require('fs'),path=require('path'),{chromium}=require('playwright');
const root=path.resolve(__dirname,'..'),file='file://'+path.join(root,'jimmy-social-studies-01-egypt-coordinates.html'),id='jimmy-social-studies-t1-l1';
(async()=>{
 const browser=await chromium.launch(process.env.CHROMIUM?{executablePath:process.env.CHROMIUM}:{}),p=await browser.newPage();
 const errors=[],requests=[];p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url());});await p.route(/^https?:/,r=>r.abort());
 const qa=path.join(root,'qa-ss');fs.mkdirSync(qa,{recursive:true});
 const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
 const fits=async()=>assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Horizontal overflow');
 for(const width of [360,768,1280]){
  await p.setViewportSize({width,height:900});await p.goto(file+'#'+id);await p.waitForSelector('#sit-1');await fits();
  const L=await p.evaluate(id=>JSON.parse(JSON.stringify(window.LESSONS[id])),id);assert(Object.keys(await p.evaluate(()=>window.LESSONS)).length===1,'Extra lesson in independent file');assert(L.source.edition.includes('2025'),'Missing reference edition');
  if(width===360)await p.screenshot({path:path.join(qa,'start-phone.png'),fullPage:true});
  for(let n=0;n<L.sittings.length;n++){
   await p.click('#sit-'+(n+1));await p.click('#go');
   for(const sc of L.sittings[n].screens){
    await fits();
    if(sc.type==='fact'){
     const f=L.facts.find(x=>x.id===sc.id);await p.locator('.lesson-figure img').evaluateAll(async imgs=>{for(const img of imgs)await img.decode();});
     if(width===360&&f.figure)await p.screenshot({path:path.join(qa,'globe-phone.png'),fullPage:true});
     await p.click('#go');await p.click('#opt-'+f.pick.answer);await p.click('#fb #go');
    }else if(sc.type==='sort'){
     for(let k=0;k<sc.cards.length;k++){await p.click('.chip[data-card="c'+k+'"]');await p.click('.dropbox[data-target="'+sc.cards[k].box+'"] h3');}
     assert(await p.isVisible('#go'),'Activity did not finish');if(width===360)await p.screenshot({path:path.join(qa,'activity-'+sc.title.replace(/[^a-z0-9]+/gi,'-')+'.png'),fullPage:true});await p.click('#go');
    }else if(sc.type==='mcq'){
     if(width===360&&sc.fact==='longitude'){await p.click('#opt-'+(sc.answer?0:1));assert(/again/i.test(await p.textContent('.eyebrow')),'Wrong answer did not reteach');await p.click('#go');}
     await p.click('#opt-'+sc.answer);if(width===360&&sc.fact==='time')await p.screenshot({path:path.join(qa,'time-practice.png'),fullPage:true});await fits();await p.click('#fb #go');
    }else throw Error('Unhandled screen '+sc.type);
   }
   assert(/You finished/.test(await p.textContent('#card')),'Sitting incomplete');await p.click('#card #go');
  }
 }
 await p.emulateMedia({colorScheme:'dark'});await p.setViewportSize({width:360,height:900});await p.goto(file+'#'+id);await p.waitForSelector('#sit-1');await fits();await p.screenshot({path:path.join(qa,'dark-phone.png'),fullPage:true});
 assert(!errors.length,errors.join('\n'));assert(!requests.length,'Offline copy used the network');
 console.log('Social Studies standalone: 360, 768, 1280; all activities and practice completed; retry works; external requests: 0; problems: 0');await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
