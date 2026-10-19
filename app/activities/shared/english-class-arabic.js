  const AR_LABELS={
    'Start a short round ↗':'ابدأ تدريبًا قصيرًا', 'Continue my work':'أكمل تدريبي', 'Choose a unit':'اختر وحدة',
    'Choose another model':'اختر نموذجًا آخر', 'Back to my fieldbook':'العودة للرئيسية',
    'Check my answer':'تحقق من إجابتي', 'Ready for parent check':'جاهز للمراجعة مع ولي الأمر',
    'A small hint':'تلميح صغير', 'Show worked answer':'اعرض الإجابة والشرح',
    'Next question →':'السؤال التالي', 'Finish this round ↗':'أنهِ هذا التدريب',
    '← Previous':'السؤال السابق', '← Back':'رجوع', 'Save & leave':'احفظ واخرج',
    'View school page ↗':'شاهد صفحة الكتاب', 'School page':'صفحة الكتاب',
    'Type instead':'اكتب بدلًا من ترتيب البطاقات', 'Parent: checked':'ولي الأمر: تمت المراجعة',
    'Parent: reviewed issue':'ولي الأمر: تمت مناقشة الملاحظة', 'Practise again later':'أعد التدريب لاحقًا',
    'Parent: accept another correct answer':'ولي الأمر: قبول إجابة صحيحة أخرى',
    'See all models':'اعرض النماذج', 'Open section ↗':'افتح التدريب', 'Open review ↗':'افتح المراجعة',
    'Start writing ↗':'ابدأ الكتابة', 'Continue draft ↗':'أكمل المسودة', 'Try this one':'جرّب هذا السؤال',
    'Export progress & drafts':'تنزيل نسخة من تقدمي ومسوداتي', 'Reset this revision':'مسح تقدم هذه المراجعة',
    'Fit / enlarge page':'تكبير الصفحة أو تصغيرها', 'Yes, clear this revision':'نعم، امسح التقدم'
  };
  const OPERATION_AR={
    choice:'اقرأ السؤال والاختيارات. اختر الإجابة التي تكمل المعنى، ثم اضغط «تحقق من إجابتي».',
    gap:'اقرأ الجملة كاملة. اكتب الكلمة أو الكلمات الناقصة أو المصححة فقط. إذا طلب السؤال جملة كاملة، اتبع هذا الطلب.',
    order:'اضغط بطاقات الكلمات بالترتيب لتكوين جملة مفهومة. اضغط الكلمة المختارة لإعادتها، أو اختر الكتابة بدلًا من البطاقات.',
    punctuation:'اكتب الجملة كاملة بالإنجليزية. راجع الحرف الكبير في البداية والأسماء وعلامة النهاية، وأضف الفواصل عند الحاجة.',
    open:'ارجع إلى قطعة القراءة وابحث عن المعلومة المطلوبة. اكتب إجابتك بالإنجليزية بمعناك الصحيح؛ لا تحتاج إلى حفظ جملة واحدة.',
    writing:'فكّر في أفكارك أولًا، ثم اكتب جملًا قصيرة مترابطة بالإنجليزية. غطِّ النقاط المطلوبة، وراجع الكلمات والحروف الكبيرة وعلامات الترقيم.',
    task:'افتح صفحة الكتاب وشاهد الصورة أو المشروع. نفّذ المطلوب على ورقة أو مع ولي الأمر. يمكنك كتابة ملاحظات هنا.'
  };
  const RULES_AR={
    frequency:{title:'كم مرة يحدث الفعل؟',body:'كلمات التكرار تصف عدد مرات حدوث شيء. ابحث عن دليل في المعنى مثل «كل يوم» أو «نادرًا». غالبًا تأتي قبل الفعل الرئيسي، وبعد فعل be. قد يسمح السياق بأكثر من إجابة.',example:'She usually reads. / She is usually happy.'},
    articles:{title:'a أم an؟',body:'اختر حسب الصوت في أول الكلمة، وليس اسم الحرف فقط. نستخدم a قبل صوت ساكن، وan قبل صوت متحرك. نستخدمهما مع اسم مفرد معدود.',example:'a book / an umbrella'},
    quantity:{title:'some وany',body:'نستخدم some غالبًا في الجمل المثبتة، وany في النفي والأسئلة المحايدة. قد تأتي some في عرض أو طلب أو سؤال نتوقع إجابته بنعم؛ المعنى مهم.',example:'I have some rice. / I do not have any rice.'},
    past:{title:'الماضي وdid',body:'ابحث عن كلمات تدل على الماضي. في الجملة المثبتة نستخدم صيغة الماضي. بعد did أو didn’t نستخدم الفعل في صورته الأساسية، ولا نضع علامة الماضي عليه مرة ثانية.',example:'They visited. / Did they visit? / They did not visit.'},
    simple:{title:'العادة والمضارع البسيط',body:'للعادات والحقائق نستخدم المضارع البسيط. مع he أو she أو it نضيف عادةً s أو es للفعل. في السؤال والنفي مع does نعيد الفعل إلى صورته الأساسية.',example:'She plays. / Does she play? / She does not play.'},
    continuous:{title:'حدث يجري الآن',body:'نستخدم am أو is أو are ثم فعلًا ينتهي بـ ing. اختر الفعل المساعد المناسب للفاعل. في السؤال نضع الفعل المساعد قبل الفاعل.',example:'I am reading. / Are they reading?'},
    ability:{title:'التعبير عن القدرة',body:'بعد can أو cannot يأتي الفعل في صورته الأساسية. مع able to نحتاج إلى am أو is أو are حسب الفاعل، ثم الفعل الأساسي بعد to.',example:'She can swim. / She is able to swim.'},
    reading:{title:'ابحث عن الدليل في القطعة',body:'حدّد المطلوب: من؟ أين؟ لماذا؟ كيف؟ ارجع إلى الجملة المناسبة، ولا تعتمد على معلومة من خارج القطعة. عند سؤال الضمير، ابحث عمن أو عما يعود عليه في السياق.',example:'Where? → a place. / Why? → a reason.'},
    order:{title:'كوّن معنى واضحًا',body:'ابحث عن الفاعل والفعل ثم بقية المعنى. في السؤال قد يتقدم الفعل المساعد على الفاعل. استخدم كل بطاقة مرة واحدة، ثم اقرأ الجملة للتأكد من معناها.',example:'The children play outside. / Do the children play outside?'},
    phonics:{title:'انظر إلى الحروف واستمع إلى الأصوات',body:'عند اجتماع حرفين ساكنين قد نسمع صوت كل منهما. وقد يعمل حرفان متحركان معًا لتمثيل صوت واحد. ركّز على الجزء المطلوب من الكلمة.',example:'black → bl / rain → ai'},
    syllables:{title:'المقاطع الصوتية',body:'قل الكلمة ببطء، وعدّ دفعات الصوت فيها. المقطع الصوتي جزء منطوق، وليس حرفًا مكتوبًا. يمكن أن تساعدك حركة تصفيق خفيفة مع كل مقطع.',example:'cat → 1 / tiger → 2'},
    writing:{title:'خطة صغيرة قبل الكتابة',body:'ابدأ بجملة تقدم الفكرة، ثم أضف تفاصيل تغطي النقاط المطلوبة، وأنهِ الفقرة. في البريد أضف التحية والرسالة والتوقيع. اقرأ كتابتك وعدّلها قبل عرضها للمراجعة.',example:'Opening → details → ending'},
    context:{title:'اختر الكلمة من المعنى',body:'اقرأ ما قبل الفراغ وما بعده. فكّر في نوع الكلمة ومعناها، واستعن بصندوق الكلمات إن وُجد. بعد الاختيار اقرأ الجملة مرة أخرى لتتأكد أنها مفهومة.',example:'Read → think → choose → check'}
  };
  const arOn=()=>state.arabicHelp===true;
  function arText(t){return '<span lang="ar" dir="rtl">'+escape(t)+'</span>';}
  function arabicUnit(id){return DATA.arabicSupport.units.find(u=>u.id===id);}
  function ruleFor(q){
    const p=q.prompt.toLowerCase();
    if(q.type==='writing')return RULES_AR.writing;
    if(q.arRule&&RULES_AR[q.arRule])return RULES_AR[q.arRule];
    if(/syllab|syllabus/.test(p))return RULES_AR.syllables;
    if(/cluster|digraph|syllab|syllab|phonics/.test(p))return RULES_AR.phonics;
    if(q.type==='punctuation')return {title:'الحروف الكبيرة وعلامات الترقيم',body:OPERATION_AR.punctuation,example:'Where is the library? / The library is in Cairo.'};
    if(q.type==='order')return RULES_AR.order;
    if(q.type==='open'||q.passage||q.section.passage)return RULES_AR.reading;
    if(q.type==='gap'&&/\((never|rarely|sometimes|often|usually|sometime)\)/.test(p))return RULES_AR.frequency;
    if(DATA.level===5&&q.section.unit==='u2'&&/\((an?|some)\)|\b(any|some)\b/.test(p))return /\b(some|any)\b/.test(p)?RULES_AR.quantity:RULES_AR.articles;
    if(DATA.level===6&&q.section.unit==='u1'&&(q.section.lesson==='l2'&&/grammar/.test(q.id)||/weekly|review-form/.test(q.id)))return RULES_AR.simple;
    if(DATA.level===6&&q.section.unit==='u2'&&(/form|weekly/.test(q.id))&&/\b(read|readi|reading|running|washing|writing|play|wear|visit|clean|wait|water|fly|shine|close|study|celebrat|moment|now|lying|put)/.test(p))return RULES_AR.continuous;
    if(DATA.level===6&&/\b(can|cannot|able)\b/.test(p))return RULES_AR.ability;
    if(DATA.level===5&&q.section.unit==='u3'&&q.type==='gap'&&/\b(yesterday|did|didn|was|were|past|ago)|\((go|do|build|flood|can.t)\)/.test(p))return RULES_AR.past;
    return RULES_AR.context;
  }
  function ruleHTML(rule,opened=false){return '<details class="ar-rule" '+(opened?'open':'')+'><summary>'+arText(rule.title)+'</summary><p lang="ar" dir="rtl">'+escape(rule.body)+'</p><p class="ar-example" lang="en" dir="ltr">'+escape(rule.example)+'</p></details>';}
  function questionArabic(q){
    if(!arOn())return '';
    const vocab=arabicUnit(q.section.unit)?.glossary||[];
    const text=(q.prompt+' '+(q.passage||q.section.passage||'')).toLowerCase();
    const matches=vocab.filter(w=>new RegExp('\\b'+w.en.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?:s|es|ed|ing)?\\b','i').test(text)).sort((a,b)=>b.en.length-a.en.length).slice(0,5);
    const points=(q.targetPoints||[]).map(p=>DATA.arabicSupport.writingPoints[p]).filter(Boolean);
    return '<aside class="arabic-box" aria-label="Optional Arabic help"><div class="ar-heading"><strong lang="ar" dir="rtl">مساعدة للفهم</strong><span>Optional Arabic help</span></div><p lang="ar" dir="rtl">'+escape(OPERATION_AR[q.type]||OPERATION_AR.gap)+'</p>'+(q.issue?'<p class="ar-book-note" lang="ar" dir="rtl">ملاحظة: هذا السؤال به غموض أو ملاحظة في المصدر. ناقشه مع ولي الأمر؛ لا يُحتسب خطأً آليًا.</p>':'')+ruleHTML(ruleFor(q),answerOpen)+(points.length?'<details class="ar-rule"><summary>'+arText('النقاط المطلوبة في الكتابة أو المشروع')+'</summary><ul lang="ar" dir="rtl">'+points.map(p=>'<li>'+escape(p)+'</li>').join('')+'</ul></details>':'')+(matches.length?'<details class="ar-rule"><summary>'+arText('كلمات تساعدك على الفهم')+'</summary><dl class="mini-glossary">'+matches.map(w=>'<div><dt lang="en" dir="ltr">'+escape(w.en)+'</dt><dd lang="ar" dir="rtl">'+escape(w.ar)+'</dd></div>').join('')+'</dl></details>':'')+'<p class="ar-reminder" lang="ar" dir="rtl">استعن بالشرح عند الحاجة، ثم حاول الإجابة بالإنجليزية بنفسك.</p></aside>';
  }
  function unitArabic(u){if(!arOn())return '';const a=arabicUnit(u.id);return '<section class="unit-arabic"><p class="eyebrow">OPTIONAL ARABIC GUIDE</p><h2 lang="ar" dir="rtl">'+escape(a.titleAr)+'</h2><p lang="ar" dir="rtl">'+escape(a.introAr)+'</p><div class="tip-grid">'+a.tips.map(t=>'<details class="tip-card ar-tip"><summary lang="ar" dir="rtl">'+escape(t.titleAr)+'</summary><p lang="ar" dir="rtl">'+escape(t.bodyAr)+'</p><p class="example" lang="en" dir="ltr">'+escape(t.example)+'</p></details>').join('')+'</div></section>';}
  let wordQuery='';
  function wordRows(){const rows=arabicUnit(unit).glossary.filter(w=>(w.en+' '+w.ar).toLowerCase().includes(wordQuery.toLowerCase().trim()));return rows.length?rows.map(w=>'<article class="word-card"><strong lang="en" dir="ltr">'+escape(w.en)+'</strong><span lang="ar" dir="rtl">'+escape(w.ar)+'</span></article>').join(''):'<p lang="ar" dir="rtl">لا توجد كلمة مطابقة. جرّب كلمة أقصر أو اختر وحدة أخرى.</p>';}
  function words(){return header('A little word help.','Short meanings for important words. Read the English word, use the meaning, then return to the task.','garden')+unitTabs()+'<section class="word-tools"><label for="word-search">Find a word · <span lang="ar" dir="rtl">ابحث بالإنجليزية أو العربية</span></label><input id="word-search" type="search" value="'+escape(wordQuery)+'" autocomplete="off" placeholder="Search words / ابحث عن كلمة"><p lang="ar" dir="rtl">هذا قاموس صغير للمساعدة، وليس ترجمة كاملة للقطعة أو مفتاح الإجابة.</p></section><div class="word-grid" id="word-list">'+wordRows()+'</div>';}
  function updateLanguageUI(){document.body.classList.toggle('arabic-help',arOn());const b=document.getElementById('arabic-toggle');b.setAttribute('aria-pressed',String(arOn()));b.textContent=arOn()?'عربي ✓ · English only':'عربي للمساعدة';}
  function classIntro(){return '<section class="class-intro"><div><strong>One question at a time.</strong><p>English practice with optional Arabic instructions, rule reminders and word meanings. Use the <span lang="ar" dir="rtl">عربي للمساعدة</span> button whenever you need it.</p>'+(arOn()?'<p lang="ar" dir="rtl">اقرأ السؤال بالإنجليزية، واستعن بالمساعدة عند الحاجة، ثم اكتب إجابتك بالإنجليزية. يمكنك إيقاف المساعدة في أي وقت.</p>':'')+'</div><span class="tag green">Class edition · Units 1–3</span></section>';}
  function arabicFeedback(q){if(!arOn()||!feedback)return '';return '<p class="ar-feedback" lang="ar" dir="rtl">'+(feedback.kind==='good'?'أحسنت! يمكنك الانتقال للسؤال التالي.':feedback.kind==='note'?'راجع الإجابة مع ولي الأمر. توجد إجابة إرشادية وصفحة الكتاب للمساعدة.':'حاول مرة أخرى. اقرأ التلميح والجملة كاملة قبل تعديل إجابتك.')+'</p>';}
  function classParent(){
    const issues=all.filter(q=>q.issue);
    document.getElementById('parent-content').innerHTML='<p><strong>Grade '+DATA.level+' · Class edition · Units 1–3</strong></p><div class="parent-note"><strong>Independent revision resource.</strong> This is not an official school handout or marking scheme. Check the teacher’s current exam notice for the exact coverage. Grade 6 later Unit 3 work is labelled extra practice.</div><div class="parent-grid"><div><h3>Arabic as a little help</h3><p>The Arabic button adds task instructions, grammar reminders, guiding points and word meanings. Questions, reading passages and answers stay in English.</p><p lang="ar" dir="rtl">العربية للمساعدة على الفهم، وليست ترجمة كاملة للقطعة أو بديلًا عن التدريب بالإنجليزية. شجّع الطفل على المحاولة قبل عرض الإجابة.</p></div><div><h3>Check meaning together</h3><p>Writing and open answers need a parent or teacher. The word counter measures length, not quality. Accept different correct wording. Source defects and ambiguous questions stay unscored.</p><p lang="ar" dir="rtl">راجع المعنى والنقاط المطلوبة، ثم الإملاء وعلامات الترقيم. توجد أسئلة بها أخطاء أو غموض في الكتاب؛ ناقشها ولا تعتبرها خطأ على الطفل.</p></div></div><table class="coverage-table"><thead><tr><th>Unit</th><th>Items</th><th>A/B/C models</th></tr></thead><tbody>'+DATA.units.map((u,i)=>'<tr><td>'+(i+1)+' · '+escape(u.title)+'</td><td>'+all.filter(q=>q.section.unit===u.id).length+'</td><td>'+groups.filter(s=>s.unit===u.id).length+'</td></tr>').join('')+'</tbody></table><details class="parent-details"><summary>Sharing and saved progress · <span lang="ar" dir="rtl">المشاركة والتقدم</span></summary><p>Share the clean HTML file as a WhatsApp document. Recipients should download it and open it in a browser. Some in-app attachment previews do not run interactive HTML.</p><p>No account or pupil name is requested. Answers and drafts save only in the browser on that device. The grade editions use separate progress. Use Save HTML to get another clean copy; it does not include saved answers or drafts. Progress exports are personal backups and should not be shared as the class resource.</p><p lang="ar" dir="rtl">نزّل ملف HTML وافتحه في المتصفح. إذا ظهرت معاينة فقط داخل تطبيق الرسائل، افتح الملف من التنزيلات بمتصفح يدعم JavaScript. التقدم محفوظ على جهازك، ولا يُرسل إلى المجموعة.</p></details><details class="parent-details"><summary>Source and coverage notes</summary><ul>'+DATA.notes.map(n=>'<li>'+escape(n)+'</li>').join('')+'</ul></details><details class="parent-details"><summary>'+issues.length+' source notes · <span lang="ar" dir="rtl">ملاحظات الكتاب</span></summary><div class="issue-list">'+issues.map(q=>'<article><strong>Page '+q.source.printedPage+' · '+escape(q.source.question)+'</strong><p>'+escape(q.prompt)+'</p><p>'+escape(q.issue)+'</p>'+btn('View original page','data-source="'+q.source.pdfPage+'"','small')+'</article>').join('')+'</div></details><details class="parent-details"><summary>Original book pages</summary><div class="source-buttons">'+Object.keys(PAGES).sort((a,b)=>a-b).map(n=>btn('p. '+(DATA.level===6?n-1:n),'data-source="'+n+'"','small')).join('')+'</div></details><div class="actions">'+btn('Export progress & drafts','data-action="export"','secondary')+btn('Reset this revision','data-action="ask-reset"','small')+'</div><div id="reset-confirm"></div>';
    document.getElementById('parent-dialog').showModal();
  }
