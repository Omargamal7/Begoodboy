/* Grade 5 Social Studies starter. Ministry reference edition: 2025-26.
   Printed pp. 8-11 (PDF pp. 9-12). English explanations and original practice.
   Jimmy's 2026-27 school booklet has not been supplied: these are not its questions. */
(function(){
 'use strict';
 var id='jimmy-social-studies-t1-l1';
 function fact(id,term,lines,prompt,options,answer,right,figure){return {id:id,term:term,icon:'book',lines:lines,pick:{prompt:prompt,options:options.map(function(label){return {label:label,icon:'book'};}),answer:answer,right:right},figure:figure};}
 function question(stem,options,answer,fact,right){var q=Q.mcq(stem,options,answer,fact,right);q.kind='Practice · say it, then tap';return q;}
 jimmy({id:id,order:11,subject:'Social Studies',dir:'ltr',
  where:'Unit 1 · Lesson 1 · Ministry reference 2025–26 · pp. 8–11',
  title:'Egypt’s coordinates · موقع مصر الفلكي',
  notes:[
   'This starter uses the **2025–26 Ministry reference book**, printed pages **8–11**. It has not yet been matched to Jimmy’s 2026–27 school booklet.',
   'The explanations are in **English**, with the important **Arabic terms** alongside them.',
   'These are **new practice questions**. Jimmy’s exact school questions will be added when the school pages are supplied.',
   'The time activity uses the book’s **simplified longitude model**. It does not show today’s clock times or daylight-saving changes.',
   'The Ministry preface says numbers, dates and enrichment activities are illustrative rather than examination targets. Use the teacher’s instructions to set the assessment scope.'
  ],
  facts:[
   fact('grid','Coordinate grid · شبكة الإحداثيات',[
    '**Latitude and longitude** form an imaginary coordinate grid.',
    'Together, they locate places.',
    '**Astronomical location · الموقع الفلكي** means location using these coordinates.'
   ],'Which two measurements locate a place?',['Latitude and longitude','Latitude only'],0,'Use **latitude and longitude** together.'),
   fact('longitude','Longitude · خطوط الطول',[
    '**Longitude** lines connect the North and South Poles.',
    'The **Greenwich / prime meridian** is **0°**.',
    'Longitude locates places **east or west** and helps compare time.',
    'The book counts **360** longitude lines.'
   ],'Longitude measures which direction?',['North or south','East or west'],1,'Longitude measures **east or west** of Greenwich.'),
   fact('latitude','Latitude · دوائر العرض',[
    '**Latitude** circles run across the globe. Their lengths differ.',
    'Latitude locates places **north or south**.',
    'It helps explain **climate**.',
    'The book counts **180** latitude circles.'
   ],'Latitude helps us locate places…',['North or south','East or west'],0,'Latitude locates places **north or south** of the Equator.'),
   fact('circles','Important latitude circles',[
    '**Equator · دائرة الاستواء:** 0°; divides Earth into northern and southern halves.',
    '**Cancer · مدار السرطان:** 23.5°N.',
    '**Capricorn · مدار الجدي:** 23.5°S.',
    '**Arctic Circle:** 66.5°N. **Antarctic Circle:** 66.5°S.'
   ],'Which line is zero latitude?',['Equator','Greenwich'],0,'The **Equator** is **0° latitude**.',{src:'assets/social-studies/coordinates.svg',alt:'Schematic globe showing the Equator, important latitude circles and pole-to-pole longitude lines.',caption:'Latitude and longitude · schematic globe'}),
   fact('egypt','Egypt · مصر',[
    '**Egypt** is north of the Equator and east of Greenwich.',
    'The book places Egypt between **22°N and 31°36′N**, and **25°E and 37°E**.',
    'The **Tropic of Cancer** crosses southern Egypt.'
   ],'Which pair describes Egypt?',['South and west','North and east'],1,'Egypt is **north of the Equator** and **east of Greenwich**.'),
   fact('time','Longitude and time',[
    'Earth rotates **west to east**, once in **24 hours**.',
    'Eastern places see sunrise before western places.',
    'In the book’s model, **1° longitude = 4 minutes**; **15° = 1 hour**.',
    'For this model: **east is ahead**, **west is behind**.'
   ],'In the book’s model, 15° of longitude equals…',['One hour','Four hours'],0,'15 × 4 minutes = **60 minutes = one hour**.')
  ],
  activities:[
   {type:'sort',kind:'Match',title:'Latitude or longitude?',intro:'Say which measurement fits. Tap the card, then tap its place.',hint:'Latitude: north/south and climate. Longitude: east/west and time.',done:'Latitude describes north/south. Longitude describes east/west.',
    boxes:[{id:'lat',label:'Latitude · دوائر العرض',icon:'book'},{id:'lon',label:'Longitude · خطوط الطول',icon:'book'}],
    cards:[{label:'East or west',box:'lon'},{label:'North or south',box:'lat'},{label:'Equator · 0°',box:'lat'},{label:'Greenwich · 0°',box:'lon'},{label:'Climate',box:'lat'},{label:'Time difference',box:'lon'}]},
   {type:'sort',kind:'Order',title:'From north to south',intro:'Put these latitude circles in order. Start in the far north.',hint:'Find each circle on the diagram you learned.',done:'Arctic Circle → Cancer → Equator → Capricorn → Antarctic Circle.',
    boxes:[{id:'1',label:'1 · Far north',icon:'book'},{id:'2',label:'2',icon:'book'},{id:'3',label:'3 · Centre',icon:'book'},{id:'4',label:'4',icon:'book'},{id:'5',label:'5 · Far south',icon:'book'}],
    cards:[{label:'Equator',box:'3'},{label:'Antarctic Circle',box:'5'},{label:'Cancer',box:'2'},{label:'Arctic Circle',box:'1'},{label:'Capricorn',box:'4'}]},
   {type:'sort',kind:'Match',title:'A football match: book’s time model',intro:'A practice football match starts at 6 pm at 0°. Match each invented location to its time.',hint:'Each 15° is one hour. Add time eastwards and subtract time westwards.',done:'15°W: 5 pm. 15°E: 7 pm. 30°E: 8 pm. These are book-model examples.',
    boxes:[{id:'5',label:'5 pm',icon:'book'},{id:'7',label:'7 pm',icon:'book'},{id:'8',label:'8 pm',icon:'book'}],
    cards:[{label:'30° east',box:'8'},{label:'15° west',box:'5'},{label:'15° east',box:'7'}]}
  ],
  checks:[
   question('What forms the coordinate grid?',['Latitude and longitude','Rivers and roads'],0,'grid','A coordinate grid uses **latitude and longitude**.'),
   question('Which lines connect the two poles?',['Longitude','Latitude'],0,'longitude','**Longitude** lines connect the poles.'),
   question('What is zero longitude called?',['Equator','Greenwich / prime meridian'],1,'longitude','**Greenwich** is **0° longitude**.'),
   question('Which measurement describes north or south?',['Latitude','Longitude'],0,'latitude','**Latitude** measures north or south.'),
   question('What is zero latitude called?',['Greenwich','Equator'],1,'circles','The **Equator** is **0° latitude**.'),
   question('Which circle is 23.5° south?',['Cancer','Capricorn'],1,'circles','**Capricorn** is **23.5°S**.'),
   question('Which circle is 66.5° north?',['Arctic Circle','Antarctic Circle'],0,'circles','The **Arctic Circle** is **66.5°N**.'),
   question('Egypt is in which half relative to the Equator?',['Northern','Southern'],0,'egypt','Egypt is in the **northern** half.'),
   question('Egypt is east or west of Greenwich?',['East','West'],0,'egypt','Egypt is **east** of Greenwich.'),
   question('Which latitude circle crosses southern Egypt?',['Tropic of Capricorn','Tropic of Cancer'],1,'egypt','The **Tropic of Cancer** crosses southern Egypt.'),
   question('Which measurement helps study climate?',['Latitude','Longitude'],0,'latitude','**Latitude** helps explain climate.'),
   question('Which measurement helps compare time?',['Latitude','Longitude'],1,'longitude','**Longitude** helps compare time.'),
   question('In the book model, how much time is 15°?',['One hour','Fifteen hours'],0,'time','15° × 4 minutes = **one hour**.'),
   question('A place is 15° east of the reference. Is its model time ahead or behind?',['Ahead','Behind'],0,'time','Places **east** are **ahead** in the book model.'),
   question('What does astronomical location describe?',['Position using latitude and longitude','A country’s population'],0,'grid','It describes position using **latitude and longitude**.')
  ]
 });
 var L=window.LESSONS[id];
 L.sittings[1].label='Practice and review';
 L.homework='Parent: ask Jimmy to explain one latitude fact and one longitude fact. Match this reference lesson with his school worksheet when that worksheet is supplied.';
 L.source={edition:'2025–26 reference; school year 2026–27 not yet matched',printedPages:[8,9,10,11],pdfPages:[9,10,11,12],url:'https://elearnningcontent.blob.core.windows.net/elearnningcontent/2026/Primary/Primary5/Term1/StudentBook/Social_prim5_T1.pdf',sha256:'d2712bc7be89d5a70f5dfd0b62bc1025504be36fc874ff8949e9835fe202b580',practice:'Original questions, not copied school exercises'};
})();
