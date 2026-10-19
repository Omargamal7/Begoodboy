'use strict';
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'../..'),shared=path.join(root,'app/activities/shared');
const base=path.join(shared,'english-revision');
const write=(p,s)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,s);};
const replace=(s,a,b)=>{if(!s.includes(a))throw Error('Missing class build anchor: '+a.slice(0,80));return s.replace(a,b);};
const css=fs.readFileSync(path.join(base,'app.css'),'utf8')+'\n'+fs.readFileSync(path.join(shared,'english-class-arabic.css'),'utf8');
const helpers=fs.readFileSync(path.join(shared,'english-class-arabic.js'),'utf8');
let js=fs.readFileSync(path.join(base,'app.js'),'utf8').replaceAll("DATA.slug==='murad'","DATA.level===6").replaceAll('English O-Level','English revision');
js=replace(js,'  function scene(',helpers+'\n  function scene(');
js=replace(js,'  function btn(label,attr=\'\',cls=\'\'){return','  function btn(label,attr=\'\',cls=\'\'){if(arOn()&&AR_LABELS[label])label=\'<span class="btn-en">\'+label+\'</span><small class="btn-ar" lang="ar" dir="rtl">\'+escape(AR_LABELS[label])+\'</small>\';return');
js=replace(js,"Ready, '+escape(DATA.child)+'?",'Ready to practise?');
js=replace(js,'</div></div></section><section class="today-strip">',"</div></div></section>'+classIntro()+'<section class=\"today-strip\">");
js=replace(js,"+unitTabs()+'<div class=\"tip-grid\">'","+unitTabs()+unitArabic(u)+'<div class=\"tip-grid\">'");
js=replace(js,"+input+'<div class=\"work-actions\">'","+questionArabic(q)+input+'<div class=\"work-actions\">'");
js=replace(js,'+feedbackHTML(q)+','+feedbackHTML(q)+arabicFeedback(q)+');
js=js.replace(/  function openParent\(\)\{[\s\S]*?\n  function download/,'  function openParent(){classParent();}\n  function download');
if(js.includes('Toddle'))throw Error('Private source-label prose remains in class JS');
js=replace(js,"Extra practice beyond the last uploaded answer-key boundary.",'Extra practice · confirm current exam coverage with your teacher.');
js=replace(js,"view==='retry'?retryView():practice()","view==='retry'?retryView():view==='words'?words():practice()");
js=replace(js,"function render(){root.innerHTML=","function render(){updateLanguageUI();root.innerHTML=");
js=replace(js,"document.addEventListener('input',e=>{if(e.target.dataset.answer)","document.addEventListener('input',e=>{if(e.target.id==='word-search'){wordQuery=e.target.value;document.getElementById('word-list').innerHTML=wordRows();return;}if(e.target.dataset.answer)");
js=replace(js,"if(b.dataset.view){nav(b.dataset.view);return;}","if(b.dataset.view){if(b.dataset.view==='words'&&view==='practice'&&current())unit=current().section.unit;nav(b.dataset.view);return;}");
js=replace(js,"if(b.dataset.unit){unit=b.dataset.unit;render();return;}","if(b.dataset.unit){unit=b.dataset.unit;wordQuery='';render();return;}");
js=replace(js,"const action=b.dataset.action;const q=current();if(action==='quick')","const action=b.dataset.action;const q=current();if(action==='toggle-arabic'){state.arabicHelp=!arOn();save();render();return;}if(action==='quick')");
js=replace(js,"Round complete,<br>'+escape(DATA.child)+'.",'Round complete.');
write(path.join(shared,'english-class/app.js'),js);
write(path.join(shared,'english-class/app.css'),css);

let template=fs.readFileSync(path.join(base,'app.html'),'utf8');
template=template.replace('A personal English revision fieldbook with every assessment model, clear feedback and original school pages.','Class English revision for Units 1–3, with optional Arabic instructions and grammar help.');
template=template.replace('__CHILD__’s personal fieldbook · Primary __GRADE__','Grade __GRADE__ · Class edition · Units 1–3');
template=template.replace('<button class="small" data-action="parent">Parent guide</button>','<button class="small arabic-toggle" id="arabic-toggle" data-action="toggle-arabic" aria-pressed="false" lang="ar" dir="rtl">عربي للمساعدة</button><button class="small" data-action="parent">Help &amp; sources</button>');
template=template.replace('A small plan. Every model.','Class revision · Help &amp; sources');
const nav=[['home','⌂','Home','الرئيسية'],['learn','▦','Explore','الدروس'],['models','▤','All models','النماذج'],['writing','✎','Notebook','الكتابة'],['words','Aa','Words','الكلمات'],['retry','↺','Try again','حاول ثانية']];
template=template.replace(/<nav class="bottom-nav"[\s\S]*?<\/nav>/,'<nav class="bottom-nav" aria-label="Revision activities">'+nav.map(([v,icon,en,ar])=>'<button data-view="'+v+'"><span aria-hidden="true">'+icon+'</span><span class="nav-en">'+en+'</span><span class="ar-nav" lang="ar" dir="rtl">'+ar+'</span></button>').join('')+'</nav>');
write(path.join(shared,'english-class/app.html'),template);

for(const [level,folder] of [[5,'gamal'],[6,'murad']]){
 const d=JSON.parse(fs.readFileSync(path.join(root,'app/activities',folder,'english-revision/data.json'),'utf8'));
 const support=JSON.parse(fs.readFileSync(path.join(root,'app/activities/class','grade'+level,'arabic-support.json'),'utf8'));
 d.child='Grade '+level;d.grade=String(level);d.level=level;d.slug='grade'+level+'-class';d.classEdition=true;d.arabicSupport=support;
 d.source={filename:'Primary '+level+' assessment book · Units 1–3'};
 d.notes=[
  'Independent revision compiled from the supplied assessment book. It is not an official school publication, exam notice or marking key.',
  'All numbered classwork/homework items, weekly A/B/C models and reviews in Units 1–3 are retained. Some optional oral warmups are omitted.',
  'Grade 6 Unit 3 Lessons 4/5 and its review are included as extra practice. Confirm the exact exam coverage with the teacher.',
  'Arabic help is optional: instructions, rule reminders, guiding points and selected vocabulary. English questions and reading passages are preserved.',
  'Writing and open answers require parent or teacher review. Examples are illustrative; use your own ideas and accept other correct wording.',
  'Some source questions are ambiguous, defective or depend on an absent story text. Their notes remain unscored; check the class text where needed.',
  'Source-page images are embedded for reference. Some printed headings do not match their passages; the actual passage governs the reading questions.',
  'Answers and drafts remain on the device. The clean class HTML contains no pupil account, family details or saved progress.'
 ];
 for(const s of d.sections)for(const q of s.items){
  if(q.type==='writing')q.modelAnswer=q.modelAnswer.replace(/\bMurad\b/g,'Alex');
  if(level===5){
   if(/^u1-l2-05|^u1-weekly1-(10|11|12)-q0[12]|^u1-l5-18-q0[345]/.test(q.id))q.arRule='frequency';
   if(/^u2-l2-26-q0[23]|^u2-l2-27-q0[135]/.test(q.id))q.arRule='articles';
   if(/^u2-l2-26-q0[145]|^u2-l2-27-q0[24]/.test(q.id))q.arRule='quantity';
  }else{
   if(/u1-l2-grammar|u1-weekly|u1-review-form/.test(q.id))q.arRule='simple';
   if(/u2-l2-form|u2-weekly|u2-review-form/.test(q.id))q.arRule='continuous';
   if(/u3-l2-form/.test(q.id))q.arRule='ability';
  }
 }
 const text=JSON.stringify(d);if(/\b(Jimmy|Murad|Gamal|Toddle|5A|6G)\b/i.test(text))throw Error('Personal label remains in grade '+level);
 write(path.join(root,'app/activities/class','grade'+level,'data.json'),JSON.stringify(d,null,2)+'\n');
 const pages=JSON.parse(fs.readFileSync(path.join(root,'app/assets',folder,'english/assessment-pages.json'),'utf8'));
 const json=x=>JSON.stringify(x).replace(/</g,'\\u003c');
 const html=template.replaceAll('__CHILD__',d.child).replaceAll('__GRADE__',d.grade).replace('/*__STYLE__*/',css).replace('/*__DATA__*/',json(d)).replace('/*__ASSETS__*/',json(pages)).replace('/*__APP__*/',js);
 write(path.join(root,'packs/class','grade'+level,'english/october-arabic-help.html'),html);
 console.log(JSON.stringify({grade:level,items:d.sections.reduce((n,s)=>n+s.items.length,0),models:d.sections.filter(s=>s.kind==='model').length,arabicTips:support.units.reduce((n,u)=>n+u.tips.length,0),vocabulary:support.units.reduce((n,u)=>n+u.glossary.length,0),bytes:Buffer.byteLength(html)}));
}
