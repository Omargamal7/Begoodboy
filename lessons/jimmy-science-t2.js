/* Chapter 2 assessment revision, Jimmy. All facts and model answers are from
   the five supplied school screenshots, received 14 October 2026.
   The full Chapter 2 booklet is not in the repository or these attachments. */
(function(){
 'use strict';
 var id='jimmy-science-t2-l1';
 function fact(id,term,lines,prompt,options,answer,right,figure){return {id:id,term:term,icon:'book',lines:lines,pick:{prompt:prompt,options:options.map(function(label){return {label:label,icon:'book'};}),answer:answer,right:right},figure:{src:'assets/jimmy-science-ch2/'+figure,alt:term+' illustrated using the supplied answer text.',caption:'Picture reminder · '+term}};}
 function recall(test,n,stem,answer,fact){var q=Q.recall(stem,answer,fact);q.kind='School Test '+test+' · Question '+n+' · say your answer';q.test=test;q.number=n;return q;}
 var tests=[
  [
   recall(1,1,'Complete: Some animals enter the _____ state, to conserve their energy in cold weather.','**Hibernation.**','hibernation'),
   recall(1,2,'What the following sentence indicates: The set of stages that the plant goes through during a complete year, affected by the change of seasons and temperature to ensure its survival.',"**A plant's yearly cycle.**",'cycle'),
   recall(1,3,'Give a reason: Luffa plants wilt at the end of the growing season.','Because the weather becomes slightly cold and then extremely cold, so the luffa leaves wither and the fruits start to dry out.','cold-plants'),
   recall(1,4,'What happens if: Shadows and rock cracks disappear from the desert environment in the summer season?','Lizards will be exposed to direct sunlight and will not have rock cracks to hide in when needed.','shelter'),
   recall(1,5,'Correct the following sentence: Plants die completely in the winter season and leave no trace of life for the next year.','Their **seeds remain dormant and safe** until warmth returns in the next spring.','seeds')
  ],
  [
   recall(2,1,'Complete: The luffa plant does not die completely in winter, but leaves _____ inside the fruit to ensure the survival of its life in the next year.','**Seeds.**','seeds'),
   recall(2,2,'What the following sentence indicates: The main factor in the different seasons of the year that changes the appearance of plants and the activities of animals (such as lizards and frogs).','**Temperature.**','temperature'),
   recall(2,3,'Give a reason: Some animals, like lizards, remain dormant in rock cracks or under the soil during the winter season.','To **conserve energy** and **avoid low temperature** until the weather improves.','hibernation'),
   recall(2,4,'What happens if: The temperature in the environment surrounding the tomato plant decreases.','The activity and growth of the tomato plant decrease, and it may completely wither and die in winter.','cold-plants'),
   recall(2,5,'Correct the following sentence: Summer plants need very low temperatures to start germination and growth.','Summer plants need **warm temperatures** to start germination and growth.','temperature')
  ],
  [
   recall(3,1,'Complete: the process by which plants grow and change throughout the year according to seasonal changes is known as _____.',"**A plant's yearly cycle.**",'cycle'),
   recall(3,2,'What following sentence indicates: A period of time spent by animals in complete dormancy to conserve energy during winter.','**Hibernation.**','hibernation'),
   recall(3,3,'Give a reason: Plants start to bud and grow rapidly at the beginning of the spring and summer seasons.','Because the weather becomes **warm**, which increases the activity and growth of plants.','temperature'),
   recall(3,4,'What happens if: Migratory birds faced extreme winter in their original regions?','They migrate to **warmer places** where **food and water** are available.','shelter'),
   recall(3,5,'Correct the following sentence: In the winter, plants begin to wilt, but they make flowers at the next generation.','In **warm seasons**, plants grow and produce flowers, while in **cold seasons**, their leaves may wilt and fruits may dry out.','cold-plants')
  ]
 ];
 jimmy({id:id,order:21,subject:'Science',where:'Chapter 2 · supplied weekly assessment · Tests 1–3',title:'Seasonal changes: plants and animals',
  notes:[
   'This is **focused assessment revision** from the five supplied screenshots. The complete Chapter 2 booklet was not found in Jimmy’s GitHub source folders.',
   'All **15 original question parts** and their supplied answers are included, in Test 1, Test 2 and Test 3 order. Dotted blanks are shown as _____.',
   'First learn the six picture cards and do the three activities. Then practise one five-question test at a time.',
   'Jimmy says the answer **before** you reveal it. Mark it after checking its meaning. Practise written answers in the school booklet if required.',
   'The word **hibernation** follows the school answer key for winter dormancy. These cards stay within the supplied assessment wording.',
   'The plant statements describe the luffa, tomato and seasonal examples in these pages. They are not a claim that every plant behaves this way.'
  ],
  facts:[
   fact('temperature','Temperature: the main factor',[
    '**Temperature** changes the appearance of plants and the activity of animals.',
    'In the school examples, **warm weather** increases plant activity and growth.',
    'Plants start to **bud and grow rapidly** in spring and summer.',
    '**Summer plants** need warmth to start germination and growth.'
   ],'What is the main factor in these seasonal changes?',['Temperature','The name of the plant'],0,'**Temperature** affects plant growth and animal activity.','temperature.svg'),
   fact('cycle',"A plant's yearly cycle",[
    "**A plant's yearly cycle** is the set of stages a plant goes through during a complete year.",
    'The stages are affected by **seasons and temperature**.',
    'Follow the picture: warm growth → cold-season changes → dormant seeds → warmth returns.'
   ],'Which term means plant stages throughout a complete year?',["A plant's yearly cycle",'Hibernation'],0,"**A plant's yearly cycle** describes the plant’s stages through the year.",'yearly-cycle.svg'),
   fact('cold-plants','When the weather becomes cold',[
    'At the end of the growing season, the weather becomes **cold**, then very cold.',
    'Luffa leaves **wither** and the fruits start to **dry out**.',
    'In cold seasons, leaves may **wilt**; in warm seasons, plants grow and produce **flowers**.',
    'If a tomato plant’s surroundings become colder, its **activity and growth decrease**. It may wither and die in winter.'
   ],'What happens to the luffa plant as the growing season ends?',['Leaves wither and fruit dries','The cold makes it grow rapidly'],0,'**Cold weather** causes the luffa leaves to wither and fruit to dry.','cold-plants.svg'),
   fact('seeds','Seeds keep the cycle going',[
    'The luffa leaves **seeds inside its fruit** for the next year.',
    'The seeds remain **dormant and safe** through the cold season.',
    'They remain until **warmth returns next spring**.',
    'Memory phrase: **cold → dormant seeds; warmth returns → next growing season**.'
   ],'What remains inside the luffa fruit for the next year?',['Flowers','Seeds'],1,'**Seeds** remain inside the fruit.','seeds.svg'),
   fact('hibernation','Hibernation: saving energy in winter',[
    '**Hibernation** is the school term here for a period of winter dormancy.',
    'Some animals, such as lizards in the question, remain dormant in **rock cracks or under the soil**.',
    'They **conserve energy** and **avoid low temperature** until the weather improves.'
   ],'Why do the animals remain dormant in winter?',['To conserve energy and avoid the cold','To grow flowers'],0,'Dormancy helps them **conserve energy** and **avoid low temperature**.','hibernation.svg'),
   fact('shelter','Shelter in summer; migration in winter',[
    'Lizards need **shadows and rock cracks** in the desert in summer.',
    'If these disappear, lizards are exposed to **direct sunlight** and lose cracks to hide in.',
    'When migratory birds face extreme winter, they **migrate to warmer places**.',
    'The warmer places have **food and water** available.'
   ],'Where do migratory birds go when their original regions become extremely cold?',['Warmer places with food and water','Places with no food or water'],0,'Birds migrate to **warmer places with food and water**.','shelter-migration.svg')
  ],
  activities:[
   {type:'sort',kind:'Match',title:'Match the science terms',intro:'Say the term, then tap its definition.',hint:'Yearly cycle = plant stages. Hibernation = winter dormancy. Temperature = the main changing factor.',done:'Say each term once more without looking at its box.',boxes:[{id:'cycle',label:"A plant's yearly cycle",icon:'book'},{id:'hibernation',label:'Hibernation',icon:'book'},{id:'temperature',label:'Temperature',icon:'book'}],cards:[{label:'Plant stages throughout a complete year',box:'cycle'},{label:'Winter dormancy to conserve energy',box:'hibernation'},{label:'The main factor affecting plant appearance and animal activity',box:'temperature'}]},
   {type:'sort',kind:'Order',title:'Follow the luffa through the year',intro:'Put the four reminders in order, beginning with warm-season growth.',hint:'Warm growth first. Cold changes next. Seeds stay dormant. Warmth returns.',done:'Warm growth → cold changes → dormant seeds → warmth returns.',boxes:[{id:'1',label:'1 · Warm season',icon:'book'},{id:'2',label:'2 · Growing season ends',icon:'book'},{id:'3',label:'3 · Cold season',icon:'book'},{id:'4',label:'4 · Next spring',icon:'book'}],cards:[{label:'Plants bud, grow and produce flowers',box:'1'},{label:'Leaves wither and fruit starts to dry',box:'2'},{label:'Seeds remain dormant and safe',box:'3'},{label:'Warmth returns for the next growing season',box:'4'}]},
   {type:'sort',kind:'Match',title:'Find the survival response',intro:'Match the situation to the response in the school answers.',hint:'Look for seeds, energy, shelter, and warmer places.',done:'Plants and animals respond to seasonal conditions.',boxes:[{id:'seed',label:'Dormant seeds',icon:'book'},{id:'rest',label:'Winter dormancy',icon:'book'},{id:'shade',label:'Shadows and rock cracks',icon:'book'},{id:'birds',label:'Migration to warmer places',icon:'book'}],cards:[{label:'Luffa life continues into the next year',box:'seed'},{label:'An animal conserves energy and avoids low temperature',box:'rest'},{label:'A lizard needs somewhere to hide in summer',box:'shade'},{label:'Birds face extreme winter and need food and water',box:'birds'}]}
  ],checks:tests[0].concat(tests[1],tests[2])
 });
 var L=window.LESSONS[id];
 L.homework='Parent: these are the supplied school assessment questions. After Jimmy practises speaking, help him write the required answers in his school material. The app checks spoken meaning with your help; it does not assess handwriting.';
 L.parentNotes[0]='Learn and do for about **15 minutes**, then take a break. Each original test has **five questions** and can be practised separately.';
 L.sittingMinutes=15;
 L.sittings=[L.sittings[0]].concat(tests.map(function(t,i){return {label:'School Test '+(i+1)+' · five questions',icon:'checkbox',parts:[1,2,5,6],screens:t};}));
 L.source={type:'School answer screenshots',received:'2026-10-14',fullChapterAvailable:false,questionCount:15};
 L.references=[1,2,3,4,5].map(function(n){return {src:'assets/jimmy-science-ch2/source-'+n+'.jpg',alt:'Original supplied school answer screenshot '+n,caption:['Test 1: questions 4–5; Test 2 begins','Test 1: questions 1–3 · printed page 14','Test 2: all five questions','Test 3: questions 4–5','Test 3: questions 1–3 · printed page 15'][n-1]};});
})();
