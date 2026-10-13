'use strict';
const fs=require('fs'),path=require('path'),{chromium}=require('playwright');
const root=path.resolve(__dirname,'..'),url='file://'+path.join(root,'jimmy-climate-quest.html');
const qa=path.join(root,'qa-climate');fs.mkdirSync(qa,{recursive:true});
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
(async()=>{
 const browser=await chromium.launch(process.env.CHROMIUM?{executablePath:process.env.CHROMIUM}:{});
 const errors=[],requests=[];
 for(const width of [360,412,768,1280]){
  const p=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
  p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url());});await p.route(/^https?:/,r=>r.abort());
  const fits=async(label)=>assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`Overflow at ${width}: ${label}`);
  const snap=async(name)=>{if(width===360)await p.screenshot({path:path.join(qa,name+'.png'),fullPage:true});};
  await p.goto(url);await p.waitForSelector('[data-go="learn"]');await fits('home');await snap('home-phone');
  const D=await p.evaluate(()=>JSON.parse(JSON.stringify(window.CLIMATE_DATA)));
  assert(D.terms.length===12&&D.questions.length===15&&D.builders.length===7,'Coverage count changed');assert(D.questions.filter(x=>!x.unscored).length===14,'What-if must remain unscored');
  assert(D.questions.find(x=>x.id==='c5').answer===null,'Invented teacher answer for C5');
  assert(D.questions.map(q=>q.id).join(',')==='a1,a2,a3,a4,a5,b1,b2,b3,b4,b5,c1,c2,c3,c4,c5','School order changed');
  await p.locator('.hero [data-go="learn"]').click();
  for(let i=0;i<D.terms.length;i++){
   await p.locator(`.lesson-strip [data-learn="${i}"]`).click();await fits('learn '+D.terms[i].id);
   assert((await p.locator('.content-panel').innerText()).includes(D.terms[i].ar),'Arabic term missing');
   if(i===0)await snap('winter-phone');if(i===3)await snap('weather-phone');if(i===5)await snap('region-phone');
   if(D.terms[i].id==='snow'){await p.click('[data-value="low"]');await p.click('[data-value="high"]');}
   if(D.terms[i].id==='factors'){for(const v of ['location','water','land'])await p.click(`[data-value="${v}"]`);}
   if(D.terms[i].id==='rotation'){await p.click('[data-demo="turn"]');assert(/NIGHT/.test(await p.locator('.visual-panel').innerText()),'Rotation did not change day/night');await p.click('[data-demo="stop"]');assert(await p.locator('[data-demo="turn"]').isDisabled(),'Stop did not stop');await p.click('[data-demo="stop"]');}
   if(D.terms[i].id==='flat'){await p.click('[data-demo="flat"]');assert(/ALL FLAT/.test(await p.locator('.visual-panel').innerText()),'Terrain control failed');await p.click('[data-demo="flat"]');}
   if(D.terms[i].id==='sun'){await p.click('[data-demo="sun"]');assert(/WHAT IF: 21 MARCH/.test(await p.locator('.visual-panel').innerText()),'What-if flag missing');await p.click('[data-demo="sun"]');}
  }
  await p.locator('.lesson-strip [data-learn="0"]').click();await p.click('#clue-toggle');assert(await p.locator('.pronounce').count()===0,'Pronunciation still shown when English help off');await p.click('#clue-toggle');
  await p.locator('.bottom-nav [data-route="play"]').click();
  let n=0;
  while(!(await p.evaluate(()=>window.CLIMATE_TEST.play.finished))){
   const s=await p.evaluate(()=>window.CLIMATE_TEST.play);const q=D.questions.find(x=>x.id===s.deck[s.at]);
   if(n===0){await p.click(`[data-choice="${q.correct===0?1:0}"]`);assert((await p.locator('.feedback').innerText()).includes('come back'),'Wrong answer did not schedule retry');assert(await p.locator('[data-choice]').first().isDisabled(),'Double-answer possible');await snap('retry-phone');}
   else await p.click(`[data-choice="${q.correct}"]`);
   await fits('play '+q.id);await p.click('[data-next-play]');n++;assert(n<35,'Retry loop never finished');
  }
  assert(n===15,'A missed main question was not revisited once');assert((await p.evaluate(()=>window.CLIMATE_TEST.play.success)).length===14,'Recognised answers missing');
  await p.locator('.bottom-nav [data-route="build"]').click();
  for(let i=0;i<D.builders.length;i++){
   const t=D.terms.find(x=>x.id===D.builders[i]);
   if(i===0){await p.click('[data-word="1"]');assert((await p.locator('.feedback').innerText()).includes('opening phrase'),'Out-of-order phrase incorrectly accepted');assert((await p.evaluate(()=>window.CLIMATE_TEST.build.words)).length===0,'Incorrect phrase changed answer');await p.click('[data-build-hint]');assert(await p.locator('#build-clue').isVisible(),'Clue did not open');await p.click('[data-word="0"]');await p.click('[data-undo]');assert((await p.evaluate(()=>window.CLIMATE_TEST.build.words)).length===0,'Undo failed');}
   for(let k=0;k<t.chunks.length;k++)await p.click(`[data-word="${k}"]`);
   assert(await p.evaluate(()=>window.CLIMATE_TEST.build.done),'Builder did not complete');assert((await p.locator('.build-target').innerText()).replace(/\s+/g,' ').trim()===t.chunks.join(' '),'Arabic phrase order changed');await fits('builder '+t.id);if(i===0)await snap('builder-phone');await p.click('[data-next-build]');
  }
  assert((await p.evaluate(()=>window.CLIMATE_TEST.progress.built)).length===7,'Builder progress missing');
  await p.locator('.bottom-nav [data-route="quiz"]').click();
  for(let i=0;i<D.questions.length;i++){
   const q=D.questions[i];assert((await p.locator('.quiz-stem').innerText())===q.stem,'School stem changed: '+q.id);assert(await p.locator('[data-rating]').count()===0,'Parent can mark before compare');assert(await p.locator('.choices').count()===0,'Choices leaked into recall');
   if(!q.picture&&q.answer)assert(!(await p.locator('#app').innerText()).includes(q.answer),'Answer leaked before recall');
   if(i===0)await snap('school-picture-phone');if(i===2)await snap('recall-phone');
   await p.click('[data-translate]');assert((await p.locator('.english').innerText())===q.en,'Question translation missing');
   await p.click('[data-reveal]');
   if(q.unscored){assert(await p.locator('[data-rating="remembered"]').count()===0,'What-if scored');assert((await p.locator('#app').innerText()).includes('teacher answer'),'What-if source limitation missing');await snap('hypothesis-phone');await p.click('[data-rating="discussed"]');}
   else{assert((await p.locator('.model-answer').innerText()).includes(q.answer),'Model answer missing');await p.click(`[data-rating="${i===2?'again':'remembered'}"]`);}
   await fits('quiz '+q.id);
  }
  assert((await p.evaluate(()=>window.CLIMATE_TEST.quiz.ratings.c5))==='discussed','Unscored question not retained');assert(await p.locator('[data-retry="quiz"]').count()===1,'Targeted recall retry missing');await p.click('[data-retry="quiz"]');assert((await p.evaluate(()=>window.CLIMATE_TEST.quiz.deck)).join(',')==='a3','Targeted retry included unwanted questions');await p.click('[data-reveal]');await p.click('[data-rating="remembered"]');
  await p.locator('.bottom-nav [data-route="home"]').click();await p.reload();await p.waitForSelector('.hero');assert((await p.evaluate(()=>window.CLIMATE_TEST.progress.built)).length===7,'Progress did not survive reload');assert(await p.evaluate(()=>Object.values(window.CLIMATE_TEST.progress.oral).filter(x=>x==='remembered').length===14),'Recall progress incorrect');
  await p.locator('.hero [data-go="wall"]').click();await fits('memory wall');await snap('wall-phone');
  await p.click('#parent-open');await p.waitForSelector('#parent-dialog[open]');await fits('parent dialog');assert((await p.locator('#parent-content').innerText()).includes('زادت التربة الخصبة'),'Conflicting answer not disclosed');await p.click('[data-reset-progress]');await p.click('[data-reset-cancel]');assert((await p.evaluate(()=>window.CLIMATE_TEST.progress.built)).length===7,'Cancel reset cleared work');
  await p.locator('#parent-dialog [data-sources]').click();await p.locator('#source-dialog img').evaluateAll(async imgs=>{await Promise.all(imgs.map(i=>i.decode()));});assert(await p.locator('#source-dialog img').count()===4,'Original sources missing');await p.locator('#source-dialog [data-close]').click();await p.locator('#parent-dialog [data-close]').click();
  await p.close();
  console.log(`Climate Quest ${width}px: 12 cards; controls; 15 tap attempts; 7 phrase builders; 15 school parts; targeted oral retry; original sources; persisted progress; layout OK`);
 }
 assert(!errors.length,errors.join('\n'));assert(!requests.length,'Offline copy used network: '+requests.join('\n'));
 // Storage denial must leave the lesson usable.
 const p=await browser.newPage();await p.addInitScript(()=>{Storage.prototype.setItem=function(){throw Error('No storage');};});await p.goto(url);await p.locator('.hero [data-go="learn"]').click();await p.locator('.bottom-nav [data-route="home"]').click();assert((await p.locator('.status').innerText()).includes('not saving'),'Storage-denied fallback missing');await p.close();
 console.log('Climate Quest: 360, 412, 768, 1280; offline requests: 0; JS errors: 0; storage fallback OK; problems: 0');await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
