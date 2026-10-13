/* Verify every independent lesson offline at phone/tablet/laptop widths. */
'use strict';
const fs=require('fs'),path=require('path'),{chromium}=require('playwright');
const root=path.resolve(__dirname,'..'),pack=path.join(root,'science-pack');
const links=JSON.parse(fs.readFileSync(path.join(pack,'lesson-list.json'),'utf8'));
(async()=>{
 const browser=await chromium.launch(process.env.CHROMIUM?{executablePath:process.env.CHROMIUM}:{});
 const page=await browser.newPage(),errors=[],requests=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url());});await page.route(/^https?:/,r=>r.abort());
 const assert=(ok,message)=>{if(!ok)throw Error(message);};
 const fits=async name=>assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Overflow '+name);
 const qa=path.join(root,'qa-output');fs.mkdirSync(qa,{recursive:true});
 for(const width of [360,768,1280]){
  await page.setViewportSize({width,height:900});await page.goto('file://'+path.join(pack,'START_HERE.html'));await fits('menu '+width);
  if(width===360)await page.screenshot({path:path.join(qa,'all-lessons-menu.png'),fullPage:true});
  for(const x of links){
   const file='file://'+path.join(pack,x.file);await page.goto(file+'#'+x.id);await page.waitForSelector('#sit-1');await fits(x.id+' start '+width);
   assert((await page.evaluate(()=>Object.keys(window.LESSONS))).length===1,'Standalone has more than one lesson');
   const L=await page.evaluate(id=>JSON.parse(JSON.stringify(window.LESSONS[id])),x.id);
   assert(L.references.length===x.pages.length+x.exercisePages.length,'Missing book pages');
   await page.click('.source-pages summary');await page.locator('.source-pages img').evaluateAll(async imgs=>{for(const img of imgs){await img.decode();if(!img.naturalWidth)throw Error('Broken original page');}});await fits(x.id+' references');await page.click('.source-pages summary');
   for(let n=0;n<L.sittings.length;n++)if(L.sittings[n].parts.includes(3)){
    await page.click('#sit-'+(n+1));await page.click('#go');
    for(const sc of L.sittings[n].screens){const f=L.facts.find(z=>z.id===sc.id);await fits(x.id+' '+f.id+' '+width);await page.locator('.lesson-figure img').evaluateAll(async imgs=>{for(const img of imgs)await img.decode();});if(width===360&&f.figure)await page.screenshot({path:path.join(qa,x.id+'-figure.png'),fullPage:true});await page.click('#go');await page.click('#opt-'+f.pick.answer);await page.click('#fb #go');}
    await page.click('#card #go');
   }
   if(width===360){
    let recallShot=false,multiShot=false;
    for(let n=0;n<L.sittings.length;n++){
     const screens=L.sittings[n].screens;if(!screens.some(s=>['recall','multi'].includes(s.type)))continue;
     await page.click('#sit-'+(n+1));await page.click('#go');
     for(const sc of screens){
      if(sc.type==='recall'){await page.click('#reveal');if(!recallShot){await page.screenshot({path:path.join(qa,'recall-answer.png'),fullPage:true});await page.click('#retry');await page.click('#go');await page.click('#reveal');recallShot=true;}await page.click('#matched');}
      else if(sc.type==='multi'){if(!multiShot){await page.click('#answer');assert(/again/i.test(await page.textContent('.eyebrow')),'Empty multi did not retry');await page.click('#go');multiShot=true;}for(const i of sc.answer)await page.click('#opt-'+i);await page.click('#answer');await page.screenshot({path:path.join(qa,'choose-all.png'),fullPage:true});}
      else await page.click('#opt-'+(sc.answer===null?0:sc.type==='tf'?(sc.answer?0:1):sc.answer));
      await fits(x.id+' question');await page.click('#fb #go');
     }await page.click('#card #go');
    }
   }
  }
 }
 assert(!errors.length,errors.join('\n'));assert(!requests.length,'External requests '+requests.length);
 console.log('Standalone lessons checked: '+links.length+'; widths: 360, 768, 1280; external requests: 0; problems: 0');await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
