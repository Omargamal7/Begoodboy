# Design Guide: Interactive Lesson-and-Quiz Pages for a Grade 6 Autistic Learner (Egypt, Language School, Inclusion Division)

> **Status, 19 Nov 2026.** Written by claude.ai Research on 17 Nov 2026 (chat "Autism study pages design guide"). Source-checked on 19 Nov 2026: each cited source was opened again and the rules that cite it were compared with it, except two abstracts the guide does not use as support (NASEN 2025 and the Taylor & Francis 2026 pilot; both sites blocked automated reading). Not merged with the Gemini Deep Research run, whose report was not supplied. Refresh each school term, or when his inclusion team gives feedback.
>
> **Applies to:** pages under `grade-6/`. Stage 6 of `.claude/skills/study-page-pipeline` follows this guide, and stage 9 answers its combined checklist. Where `docs/authoring.md` already records the parent's answers (a sitting of about 10 minutes, the rewards, no sounds, animations or red crosses, no known sensory sensitivities), use them for the matching "check with his inclusion team" items; raise the rest with the team.
>
> **Corrected on 19 Nov 2026**
> - Home Office autism poster: the heading reads "Write in plain English" (was quoted as "write in plain language").
> - COGA: persona Sam struggled with text in the passive voice; the page does not say he "prefers active voice". Persona Tal cannot speed up text-to-speech because of impaired auditory processing.
> - Gunn & Delafield-Butt 2016: ages 2–21 is the review's inclusion range, not a description of the 91 children. The quoted sentence ends "…in educational attainment and/or social engagement". Difficulty moving away from interests comes from other sources in the review's discussion, not from its 20 studies.
> - Haladyna et al. 2002, Guideline 7 reads "Avoid trick items."
> - Illinois CITL: the page does not attribute its true/false suggestions to Ebel (1972); only its objective-versus-essay guidance is.
> - Egypt: added a Ministry of Education page (moe.gov.eg) on exam papers for included primary pupils. For autism it lists 100% objective questions (simple completion, true/false, multiple choice, matching) and the same answer time as other pupils.
>
> **Confirmed on 19 Nov 2026, no change:** WCAG 2.2 (W3C Recommendation, 12 December 2024) criterion numbers and names; NCAEP 2020 (28 practices, studies 1990–2017, qualifying criteria); W3C COGA quotes (checked in the editor's draft source, w3c/coga on GitHub); UK Home Office poster quotes; CAST UDL Guidelines 3.0 (released 30 July 2024) consideration names; Kalandadze et al. 2018 (g = −0.57, 95% CI −0.72 to −0.41, in the full text); Pashler et al. 2008; Rodriguez 2005; Haladyna et al. 2002 Guidelines 9, 17, 18 and 23–30; CITL true/false suggestions 1, 3, 6 and 8 and its four-option advice; Knight et al. 2015; Williams et al. 2023; Decree 252/2017 Articles 1, 5, 7, 9 and 10 as reproduced on specialegypt.com; W3C guidance on dir="rtl".
>
> **Not re-checked:** the 1990–2014 window of Gunn & Delafield-Butt; the Masrawy 2025 report in Key Finding 6 (the Ministry page above supports the same point); Ringland et al. 2016.

**Bottom line:** Build every page around predictability, literal language, one idea per screen, calm visuals, no autoplay or timers, optional read-aloud, and calm "here is the right answer and why" feedback. Write quiz items with positive stems, no "all/none of the above", and single-idea True/False statements. Use his Minecraft interest as a light visual frame and reward, not as quiz content. Only a few of these rules rest on studies with autistic learners: interest-based instruction and reinforcement. Most are standards or expert consensus, and the Minecraft theme itself is rated WEAK.

## TL;DR
- **Evidence-based core is small.** Only two rules here are backed by studies with autistic children: using his special interest, and reinforcing correct answers. The interest evidence comes from a 2016 review of 20 small studies; reinforcement is an NCAEP 2020 evidence-based practice. Everything else (layout, language, colour, motion, feedback style, read-aloud, question writing) is CONSENSUS from WCAG 2.2, W3C COGA, the UK Home Office autism poster, CAST UDL 3.0 and item-writing research. That consensus is still strong and safe to follow, but it is not autism-tested.
- **Minecraft-style theme = WEAK; Egyptian Ministry guidance = partially found.** I found no opened study testing Minecraft themes on academic quiz pages. The Minecraft studies located concern social skills or therapy. Egypt's Ministerial Decree 252/2017 (issued 5 August 2017) on inclusion was read only through a non-government reproduction. It requires fully objective (choice-type) exams for autistic students, gives the same exam time as peers, and allows exemptions relevant to bilingual schooling. No Ministry design guidance for digital study materials was found.
- **Many settings must be personalised, not ruled.** Autistic children vary widely in sensory reactivity (a 2023 analysis of 3,868 autistic youth). Colour, contrast, sound, animation, read-aloud voice and speed, break length and reward type therefore go to his inclusion team as decisions, not defaults.

---

## Sources and limitations note (read first)

**Rating key**
- **EVIDENCE-BASED** = supported by intervention studies that included autistic learners.
- **CONSENSUS** = expert or standards guidance (W3C, GOV.UK/Home Office, CAST, item-writing reviews), or research done with non-autistic populations.
- **WEAK** = little or indirect evidence, or only snippets/abstracts found.

**Older-but-current versions (stated explicitly)**
- **NCAEP 2020** (Steinbrenner et al.) is still the current NCAEP evidence-based practice report. It is the third review, covering studies published 1990–2017. It lists 28 evidence-based practices.
- **W3C COGA "Making Content Usable"** was published as a W3C Working Group Note on 29 April 2021 and remains the current Note. I could not open the w3.org/TR copy (blocked by the fetch tool). I read the W3C editor's draft at w3c.github.io/coga/content-usable/, which now references WCAG 2.2. In my copy the "Design Guide" pattern section came through empty. COGA citations below therefore come from its summary, user stories, user needs and personas, not the pattern pages.
- **Haladyna, Downing & Rodriguez 2002** (31 multiple-choice item-writing guidelines) and **Rodriguez 2005** (three-option meta-analysis) are older. They are still the standard references in their field; no newer replacement was opened.
- **UK Home Office "Designing for users on the autistic spectrum" poster** is undated on the page I opened. The GOV.UK accessibility blog post introducing the series is dated 2 September 2016 (seen in the post URL in search results).

**Newer sources used (2023+):** WCAG 2.2 (W3C Recommendation, version dated 12 December 2024); CAST UDL Guidelines 3.0 (released 30 July 2024); Williams et al. 2023 (sensory reactivity, Molecular Autism).

**How each source was accessed**
- **Read directly by me:** NCAEP 2020 Executive Summary; COGA editor's draft; UK Home Office poster set (PDF and web page); WCAG 2.2 (header, abstract and success-criterion list); Gunn & Delafield-Butt 2016 (full PDF, first ~12 pages); Pashler et al. 2008 (PubMed abstract); Rodriguez 2005 (University of Minnesota record with abstract); Knight et al. 2015 (ERIC PDF, first pages); Williams et al. 2023 (article page and abstract); CAST UDL 3.0 pages; Decree 252/2017 text (reproduced on specialegypt.com).
- **Read by my research sub-agent:** Haladyna et al. 2002 (full PDF hosted at site.ufvjm.edu.br) and the University of Illinois CITL true/false guidance page. The sub-agent reported exact guideline wording.
- **Known only from search-result text (abstract or snippet), not opened in full:** Kalandadze et al. 2018 meta-analysis (ERIC abstract record text); the W3C Internationalization page on dir="rtl"; WCAG 2.2 wording for SC 2.2.2 and 2.3.1; CAST UDL 7.2 page text; Egyptian news reports on 2025/2026 exam specifications.

**Could not open:** w3.org/TR/coga-usable (fetch tool restriction); Taylor & Francis 2026 Minecraft social-collaboration pilot (bot block); the Egyptian Cabinet news page on inclusion (robots block); a Springer item-writing appendix.

**Not found:** Any Egyptian Ministry of Education (moe.gov.eg) document on designing study materials or digital content for autistic students, in English or Arabic. What exists online is Decree 252/2017 on admission and exam accommodations, reproduced by third-party sites and news outlets. I did not find it on a Ministry domain. Also not found: any peer-reviewed study of Minecraft-themed academic quizzes for autistic children, and any autism-specific study on session or break length for on-screen study.

**How to read the WCAG tests:** For WCAG success criteria I mostly read the official names; the full wording was read only for 2.2.2 and 2.3.1. The yes/no tests below are phrased from those names. Run an automated WCAG checker plus a manual keyboard test to confirm them.

---

## Key Findings

1. **Interest-based instruction is the best-supported "motivation" rule, but the base is thin.** Gunn & Delafield-Butt reviewed all peer-reviewed studies from 1990–2014: "Of 20 published studies that examined 91 children, all reported gains in educational attainment and/or social engagement." The studies were mostly small single-case or descriptive designs. Negatives were limited: a transient rise in perseverative behaviour in two children, and a performance drop in one.
2. **Reinforcement, prompting, visual supports and technology-aided instruction are on NCAEP's 2020 list of 28 evidence-based practices.** NCAEP's threshold is at least 2 high-quality group studies, or at least 5 single-case studies by 3 research groups with 20+ participants, or a combination. The list does not tell you how to build a quiz page, so applying these categories to page design is an extrapolation.
3. **Literal language matters for this population.** In the Kalandadze et al. 2018 meta-analysis (41 studies, 45 effect sizes), autistic individuals showed poorer figurative-language comprehension than typically developing peers (Hedges' g = −0.57, 95% CI −0.72 to −0.41). Metaphors were harder than irony and sarcasm. The gap became small and non-significant when groups were matched on language ability. For a high-functioning Grade 6 pupil, idioms are a risk factor, not a certainty. Avoiding them costs nothing.
4. **Learning-styles matching has no support.** Pashler et al. 2008 found "virtually no evidence for the interaction pattern" needed to justify it.
5. **Three answer options are enough in general testing research.** Rodriguez 2005 meta-analysis: 3-option items work "without detrimental effects on psychometric quality of test scores". Haladyna et al. 2002 agree ("three is adequate"). One university guide (Illinois CITL) still recommends four options, so match whatever his school's exam paper uses.
6. **Egypt's Decree 252/2017** (issued 5 August 2017; as reproduced) does six relevant things:
   - It covers official language schools (المدارس الرسمية للغات).
   - It sets 100% objective questions for autistic students.
   - It keeps exam time the same as for non-disabled peers.
   - It allows an educational companion for autism.
   - It exempts autistic students from a second foreign language.
   - In schools teaching special or international curricula, it can exempt autistic students from Arabic-taught subjects if a medical report says they cannot study in two languages.

   Egyptian news reports of the 2025/2026 Ministry exam specifications for inclusion students (e.g., Masrawy, 2025) restate that autism exams use 100% objective questions with no essay questions.

---

## Details: rule tables by topic

### 1. Layout and predictability

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Use one simple, consistent layout: title, content area and buttons in the same place on every page. | CONSENSUS. Government poster and standards; no autism intervention study. | UK Home Office poster ("build simple and consistent layouts"), https://ukhomeoffice.github.io/accessibility-posters/posters/accessibility-posters.pdf (undated; series introduced 2016); WCAG 2.2 SC 3.2.3 Consistent Navigation and 3.2.4 Consistent Identification, https://www.w3.org/TR/WCAG22/ (2024); COGA user need "controls to be consistently positioned", https://w3c.github.io/coga/content-usable/ (Note 2021, current) | Are the title, content area and Back/Next buttons in the same position, with the same labels, as on every other page? |
| Nothing changes until he asks for it (selecting an answer does not auto-advance or reload). | CONSENSUS. Standards. | WCAG 2.2 SC 3.2.1 On Focus, 3.2.2 On Input (2024); COGA ("Controls and content do not move unexpectedly") (2021) | After he selects an option, does the page stay still until he presses a clearly labelled button? |
| Show where he is in the task. | CONSENSUS. COGA user need. | COGA, Objective 5 user needs ("know where I am in a process") (2021); WCAG 2.2 SC 2.4.8 Location (2024) | Does every screen show "Part X of Y" or "Question X of Y"? |
| Tell him at the start what will happen and how much there is. | CONSENSUS. | COGA Task Management user need (steps involved, time estimate) (2021); Home Office anxiety poster ("explain what will happen") (undated) | Does the first screen list the lesson parts and the number of questions? |
| Buttons say exactly what they do. | CONSENSUS. | Home Office autism poster ("make buttons descriptive"; don't make them "vague and unpredictable"); WCAG 2.2 SC 2.4.6 Headings and Labels (2024) | Does every button name its action (e.g., "Check my answer", "Next question"), with no "Click here"? |

### 2. Language (literal, short)

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Write literally: no idioms, metaphors, sarcasm or jokes. | CONSENSUS. Supported by meta-analytic evidence of a comprehension gap in autistic groups (41 studies, 45 effect sizes; g = −0.57). The rule itself has not been tested as an intervention, and the gap shrinks when language ability is matched. | Home Office autism poster ("Write in plain English"; don't "use figures of speech and idioms") (undated); COGA ("may not understand metaphors or non-literal text") (2021); Kalandadze et al. 2018, Autism 22(2):99–117, ERIC record https://eric.ed.gov/?id=EJ1171347; full text https://pmc.ncbi.nlm.nih.gov/articles/PMC5843023 | Is the page free of idioms, metaphors, sarcasm and jokes? |
| Use short, simple sentences and bullet points; no wall of text. Prefer active voice. | CONSENSUS. | Home Office autism poster ("use simple sentences and bullets"; don't "create a wall of text"); COGA (short sentences and blocks of text; persona Sam struggled with text written in the passive voice) (2021) | Is every paragraph three sentences or fewer, with lists used for steps? |
| Define new or unusual words where they appear. | CONSENSUS. | WCAG 2.2 SC 3.1.3 Unusual Words (2024); CAST UDL 3.0 Consideration 2.1 "Clarify vocabulary, symbols, and language structures", https://udlguidelines.cast.org/ (2024) | Does every new subject word have a short definition or glossary pop-up on the same screen? |
| State everything explicitly; no implied or ambiguous meaning. | CONSENSUS. | COGA user need ("I do not want unexplained, implied or ambiguous information") (2021) | Can each sentence be read only one way (checked by a second adult reader)? |

### 3. Visuals and dual coding

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Pair each key idea with a clear, relevant picture or diagram. | CONSENSUS. NCAEP lists "Visual Supports" as an evidence-based practice. I read only the category list, not its definition or studies, so applying it to lesson illustrations is an extrapolation. Dual-coding theory itself was not sourced. | NCAEP 2020 Executive Summary (Visual Supports on EBP list), https://ncaep.fpg.unc.edu/wp-content/uploads/EBP-Executive-Summary_Accessible.pdf (2020, current); COGA user need ("images, diagrams, or video clips to help me understand") (2021) | Does each key idea have one directly related picture or diagram next to it? |
| Images must show the real thing, not abstract or decorative imagery. | CONSENSUS. | COGA persona Amy (abstract imagery causes unease; prefers images that directly represent something) (2021) | Does every image directly show the object or idea named in the text? |
| Every informative image has a text alternative. | CONSENSUS. Standard. | WCAG 2.2 SC 1.1.1 Non-text Content (2024) | Does every informative image have alt text that states what it shows? |
| Use familiar icons, always with a text label. | CONSENSUS. | COGA (use familiar icons and symbols; add icons to headings) (2021) | Does every icon have a visible text label next to it? |

### 4. Colour

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Use a simple, calm colour palette. | CONSENSUS, with individual variation; see the inclusion-team list. The Home Office blog itself noted some autistic users prefer differently. | Home Office autism poster ("use simple colours"; don't "use bright contrasting colours") (undated; blog 2016) | Does the page use no more than a few calm colours, with no neon or saturated colour blocks? |
| Text must still be readable: meet minimum contrast. | CONSENSUS. Standard. | WCAG 2.2 SC 1.4.3 Contrast (Minimum) (2024) | Does all text pass an automated WCAG 1.4.3 contrast check? |
| Never use colour alone to show right/wrong. | CONSENSUS. Standard. | WCAG 2.2 SC 1.4.1 Use of Color (2024); Home Office low-vision poster (don't "only use colour to convey meaning") | Is right/wrong also shown with a word (e.g., "Correct") and a shape or icon? |
| Let him change background/text contrast. | CONSENSUS. | Home Office dyslexia poster ("let users change the contrast") (undated); CAST UDL 3.0 Consideration 1.1 "Support opportunities to customize the display of information" (2024) | Is there a visible control to switch to at least one alternative colour theme? |

### 5. Motion and sound

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Nothing moves, blinks or plays automatically; any motion longer than 5 seconds can be paused, stopped or hidden. | CONSENSUS. Standard (Level A). | WCAG 2.2 SC 2.2.2 Pause, Stop, Hide (2024); COGA persona Amy (autoplay animations and videos distracting; sounds alarming) (2021) | Is the page free of any animation, video or sound that starts by itself? |
| No flashing more than three times per second. | CONSENSUS. Standard (Level A, safety). | WCAG 2.2 SC 2.3.1 Three Flashes or Below Threshold (2024) | Is the page free of anything that flashes more than three times in one second? |
| Any sound is user-started, with a visible stop and volume control. | CONSENSUS. Standard. | WCAG 2.2 SC 1.4.2 Audio Control (2024); COGA ("sudden noises" a problem for Amy) (2021) | Does every sound start only when he presses a button, with a visible stop control? |
| Decorative motion triggered by interactions can be turned off. | CONSENSUS. | WCAG 2.2 SC 2.3.3 Animation from Interactions (2024); COGA persona Yuki ("less movement" option) (2021) | Is there a setting that turns off all non-essential animation (and is it honoured)? |

### 6. Feedback after wrong answers

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| After a wrong answer, show calm, specific feedback: the correct answer, one short reason, and a link back to that lesson part. | CONSENSUS. UDL and COGA guidance; WCAG error criteria are written for forms and extrapolated here. No autism-specific study of quiz feedback wording was opened. | CAST UDL 3.0 Consideration 8.5 "Offer action-oriented feedback" (2024); COGA ("clear error messages, so I know exactly what to do") (2021); WCAG 2.2 SC 3.3.1 Error Identification, 3.3.3 Error Suggestion (2024) | Does the wrong-answer message state the correct answer, give one reason, and link to the lesson section? |
| Let him retry or review without penalty. | CONSENSUS. Prompting is an NCAEP evidence-based practice, but its use in quiz retries is extrapolated. | COGA Undo user need ("go back without losing the work") (2021); NCAEP 2020 (Prompting on EBP list) | Can he return to the lesson and try the question again without losing points or progress? |
| Reinforce correct answers immediately and consistently. | EVIDENCE-BASED as a practice category (NCAEP Reinforcement met its EBP criteria). The specific on-screen form has not been tested. | NCAEP 2020 Executive Summary (Reinforcement), link above (2020, current) | Does every correct answer get immediate positive feedback in the same place and style? |
| Feedback appears in the same place and format every time. | CONSENSUS. | COGA (rapid feedback or visual cues when an event happens) (2021); WCAG 2.2 SC 3.2.4 Consistent Identification (2024) | Does feedback always appear in the same screen location with the same layout? |
| Let him check his answers before final submission, and show what he answered. | CONSENSUS. | Home Office anxiety poster ("let users check their answers"; don't "leave users questioning what answers they gave") (undated) | Is there a review screen listing his answers before he finishes? |

### 7. Rewards and interest-based themes

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Build his special interest into the material to raise engagement. | EVIDENCE-BASED (limited). Review of 20 peer-reviewed studies with 91 autistic children (ages 2–21 was the review's inclusion range). Mostly small single-case or descriptive designs, many on social outcomes; 6 showed improved task performance. | Gunn & Delafield-Butt, Review of Educational Research 86(2):408–430 (2016; online 2015), https://journals.sagepub.com/stoken/default+domain/WDv8PECTeJc3ZyBUXVzM/pdf; CAST UDL 3.0 Consideration 7.2 "Optimize relevance, value, and authenticity" (2024) | Does the page include his chosen interest in a way he has confirmed he likes? |
| Use rewards (reinforcement) after correct work. | EVIDENCE-BASED as a practice category (NCAEP). In Gunn & Delafield-Butt, interest items used as token reinforcers raised correct responses in a small study. | NCAEP 2020 (Reinforcement); Gunn & Delafield-Butt 2016 (Charlop-Christy & Haymes 1998, as summarised) | Is there a predictable reward (e.g., a block added to a build) after correct answers or completed sections? |
| Keep the theme from competing with the learning: rewards at section ends; no game knowledge needed to answer questions. | CONSENSUS/WEAK. Within its 20 studies, two children showed a small, temporary rise in perseverative behaviour. The review's discussion, citing other sources, also notes distress when access to an interest is limited. | Gunn & Delafield-Butt 2016; COGA ("I need tasks to not have distractions") (2021) | Can every question be answered without any Minecraft knowledge, with reward screens appearing only between sections? |
| **5a. Minecraft-style theme specifically** (blocky visual frame, block-collecting rewards). | **WEAK.** No opened study tests Minecraft-themed academic pages for autistic children. The Minecraft studies found address social skills or therapy: a 2025 case study of 3 autistic pupils; a 2026 pilot with 11 autistic pre-teens, full text blocked; and Ringland et al.'s ASSETS 2016 digital ethnography of the Autcraft server, which studied assistive uses of the game, not academic quizzes. They were seen only as search abstracts or snippets, so they support no rule here. The general interest-based evidence above is the only real support. | Indirect: Gunn & Delafield-Butt 2016. Not used as support (abstract/snippet only): Stone et al. 2025, J. Research in Special Educational Needs, https://nasenjournals.onlinelibrary.wiley.com/doi/10.1111/1471-3802.70007; T&F 2026 pilot, https://www.tandfonline.com/doi/full/10.1080/17549507.2026.2630836 | Is the Minecraft-style theme limited to the frame and rewards, and has his inclusion team agreed it? |

### 8. Read-aloud / text-to-speech

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Offer optional, user-started read-aloud for all lesson text, questions and options. | CONSENSUS. The one autism study read (Knight et al. 2015) was an exploratory pilot: 4 middle-school students with autism and intellectual disability. Text-to-speech was present in all conditions, so its effect cannot be isolated. That study alone is WEAK. | COGA user need ("text-to-speech support, with synchronized highlighting") (2021); Knight et al., Focus on Autism and Other Developmental Disabilities 30(2):86–99 (2015), https://files.eric.ed.gov/fulltext/EJ1059869.pdf | Does every text block, question and answer option have a "Read aloud" button that only plays when pressed? |
| Highlight words as they are read. | CONSENSUS. | COGA (synchronized highlighting) (2021) | Does the read-aloud highlight each word or sentence as it is spoken? |
| Mark the language of the page and of any mixed-language parts so the correct voice is used. | CONSENSUS. Standard. | WCAG 2.2 SC 3.1.1 Language of Page, 3.1.2 Language of Parts (2024) | Does the page declare its language, and is every Arabic or English passage inside the other language marked with its own language? |
| For Arabic text read aloud, include the diacritics (tashkeel) needed for correct pronunciation. | CONSENSUS. | COGA user need (diacritics "often needed for speech synthesis" in Arabic) (2021) | Do key Arabic words that read-aloud must pronounce carry diacritics? |
| Voice and speed can be changed. | CONSENSUS; preference varies (see inclusion-team list). | COGA personas Sam (dislikes synthesized speech) and Tal (cannot speed up text-to-speech (impaired auditory processing)) (2021) | Are there visible voice and speed controls for read-aloud? |

### 9. Session length and breaks

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| No time limits on study or practice pages (or, if any, he can turn them off or extend them). | CONSENSUS. Standards and government poster. | WCAG 2.2 SC 2.2.1 Timing Adjustable, 2.2.6 Timeouts (2024); Home Office anxiety poster (don't "rush users or set impractical time limits") | Is the page free of any countdown, timer or automatic timeout? |
| Split the lesson into short parts with clear stopping points, and save progress. | CONSENSUS. | COGA (take breaks; "small segments"; "save my work as I go") (2021) | Can he stop after any part and return later to the same place without losing answers? |
| Show how many parts or questions remain. | CONSENSUS. | COGA (time estimate and steps before starting) (2021) | Is a progress indicator visible on every screen? |
| Exact session and break length. | WEAK. No source found; must be set individually. | None found; see inclusion-team list | Has the session and break length been set using his inclusion team's recommendation? |

### 10. Question design: multiple choice and True/False

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Use only choice-type (objective) items matching his school's format. | CONSENSUS (official Egyptian policy, not efficacy evidence). | Ministerial Decree 252/2017, Art. 5 (100% objective questions for autism), reproduced at https://www.specialegypt.com/2022/08/Inclusion-resolution-no-252-2017.html (2017; page updated 2025); Ministry of Education exam-paper specification for included primary pupils (Mathematics, grades 2–6, undated): autism 100% objective, using simple completion, true/false, multiple choice and matching, same answer time as other pupils, https://moe.gov.eg/media/viajrb3x/math.pdf | Are all items multiple choice or True/False, in the same layout as his school's papers? |
| Three options (1 correct + 2 distractors) are enough. If his school's exams use four, match the school. | CONSENSUS. Meta-analysis of general test-takers, not autistic learners. Illinois CITL recommends at least four, so sources conflict. | Rodriguez, Educational Measurement: Issues and Practice 24(2):3–13 (2005), https://experts.umn.edu/en/publications/three-options-are-optimal-for-multiple-choice-items-a-meta-analys/; Haladyna et al. 2002 Guideline 18 | Does each MCQ have the agreed number of options (3, or the school's number), used consistently? |
| Word stems positively: no NOT or EXCEPT. If one is unavoidable, show it in bold capitals. | CONSENSUS (item-writing review: 27 textbooks + 27 studies). | Haladyna, Downing & Rodriguez, Applied Measurement in Education 15(3):309–334 (2002), Guideline 17, PDF read by sub-agent: https://site.ufvjm.edu.br/fammuc/files/2016/05/item-writing-guidelines.pdf | Is every stem free of NOT/EXCEPT (or, if present, is it in **BOLD CAPITALS**)? |
| Do not use "all of the above"; avoid "none of the above". | CONSENSUS. | Haladyna et al. 2002, Guidelines 25 ("used carefully") and 26 ("Avoid All-of-the-above") | Is every item free of "all of the above" and "none of the above"? |
| Distractors are plausible and based on typical student errors. | CONSENSUS. | Haladyna et al. 2002, Guidelines 29–30 | Is each wrong option a mistake a Grade 6 student could realistically make? |
| Options are similar in length and grammar. | CONSENSUS. | Haladyna et al. 2002, Guidelines 23–24 | Are all options of one item roughly the same length and grammatical form? |
| No trick items. | CONSENSUS. | Haladyna et al. 2002, Guideline 7 ("Avoid trick items.") | Would a second adult agree no item is designed to mislead? |
| True/False: one idea per statement; the statement is absolutely true or absolutely false. | CONSENSUS (university teaching-centre guidance; not peer-reviewed). | University of Illinois CITL, "Improving Your Test Questions", https://citl.illinois.edu/improving-your-test-questions (undated), suggestions 1 and 3 | Does each True/False statement test exactly one fact that is fully true or fully false? |
| True/False: no absolute words (always, never, all, none) used as clues. | CONSENSUS. | CITL suggestion 8; Haladyna et al. 2002 Guideline 28a ("always, never, completely, and absolutely") | Is every True/False statement free of always/never/all/none (unless they appear equally in true and false items)? |
| True/False: no negative or double-negative statements. | CONSENSUS. | CITL suggestion 6 ("Avoid using negatively stated item statements"); Haladyna et al. 2002 Guidelines 17 and 27 | Is every True/False statement free of "not", "no" and double negatives? |
| Avoid complex "combination" multiple choice (Type K, e.g., "A and C only"). | CONSENSUS. | Haladyna et al. 2002, Guideline 9 | Is every item free of combination options like "1 and 3 only"? |
| Large, clearly separated answer buttons that work by keyboard. | CONSENSUS. Standard. | WCAG 2.2 SC 2.5.8 Target Size (Minimum), 2.1.1 Keyboard (2024) | Can each option be selected with a large tap target and with the keyboard? |

### 11. Avoiding overload (cognitive load, chunking, one idea per screen)

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| One idea (lesson) or one question (quiz) per screen. | CONSENSUS. | COGA ("small or short chunks of content"; some people can hold only one to three items in working memory) (2021); Home Office dyslexia poster (don't "put too much information in one place") | Does each screen present only one lesson idea or one question? |
| Generous white space and clear headings. | CONSENSUS. | COGA ("good use of white space") (2021); WCAG 2.2 SC 2.4.6 Headings and Labels, 2.4.10 Section Headings (2024) | Does each section have a heading and visible space separating it from the next? |
| Instructions and options stay visible with the question (no remembering process steps across screens). | CONSENSUS. | COGA Objective 6 "Ensure processes do not rely on memory" (2021); Home Office dyslexia poster (give reminders and prompts) | Are the instruction, question and all options visible together on one screen? |
| Remove or let him hide anything not needed for the task. | CONSENSUS. | COGA ("turn distractions off easily") (2021); CAST UDL 3.0 Consideration 7.4 "Address biases, threats, and distractions" (2024) | Is the screen free of ads, side panels, pop-ups and unrelated links? |

### 12. Bilingual / right-to-left (language-school context; sourced items only)

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Arabic pages set right-to-left direction on the html element; English pages left-to-right. | CONSENSUS. W3C internationalisation guidance. | W3C Internationalization, "Structural markup and right-to-left text in HTML", https://www.w3.org/International/questions/qa-html-dir (undated; opened 19 Nov 2026) | Do Arabic pages have dir="rtl" and lang="ar" on the html tag, and render text, buttons and tables right-to-left? |
| Mixed-language passages are marked with their language. | CONSENSUS. Standard. | WCAG 2.2 SC 3.1.2 Language of Parts (2024) | Is every embedded English phrase in Arabic text (and vice versa) marked with its language? |
| Confirm which subjects he studies and is examined in, in each language. | CONSENSUS (official policy). | Decree 252/2017, Art. 9 (possible exemption from Arabic-taught subjects in special-curriculum schools, on medical report) and Art. 10 (exemption from second foreign language), reproduced at specialegypt.com (2017) | Has the inclusion team confirmed which language(s) each lesson page should use for him? |

### 13. Keyboard and screen-reader basics (WCAG 2.2, only where relevant)

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Everything works by keyboard. | CONSENSUS. Standard (Level A). | WCAG 2.2 SC 2.1.1 Keyboard, 2.1.2 No Keyboard Trap (2024) | Can the whole lesson and quiz be completed using only Tab, Enter/Space and arrow keys? |
| The keyboard focus is always visible. | CONSENSUS. Standard. | WCAG 2.2 SC 2.4.7 Focus Visible (2024) | Is there a clearly visible outline on whichever control has focus? |
| Answer choices are real, labelled form controls grouped with their question. | CONSENSUS. Standard. | WCAG 2.2 SC 1.3.1 Info and Relationships, 3.3.2 Labels or Instructions (2024) | Does a screen reader announce the question and each option's label when tabbing through? |

---

## "Do NOT do" table

| Practice | Evidence status | Source (with link and year) | Yes/no test that the page avoids it |
|---|---|---|---|
| Matching content to a "learning style" (e.g., "visual learner" version) | **No supporting evidence.** The review found almost no properly designed studies, and of those that used an appropriate method, several found results that flatly contradict the matching ("meshing") hypothesis. | Pashler, McDaniel, Rohrer & Bjork, Psychol Sci Public Interest 9(3):105–119 (2008), https://pubmed.ncbi.nlm.nih.gov/26162104/ | Is the page free of any learning-style label or style-matched version? |
| Autoplaying animation, video or sound | Negative (standards; COGA persona reports distress) | WCAG 2.2 SC 2.2.2, 1.4.2 (2024); COGA (2021) | Is the page free of anything that plays or moves by itself? |
| Flashing content | Negative (safety standard) | WCAG 2.2 SC 2.3.1 (2024) | Is the page free of flashing above three times per second? |
| Bright, contrasting colour schemes and cluttered, decorative layouts | Negative (government consensus) | Home Office autism poster (undated; 2016 series) | Is the page free of neon colours, busy backgrounds and decorative clutter? |
| Idioms, metaphors, sarcasm, figurative language | Negative (consensus plus meta-analytic comprehension gap) | Home Office autism poster; COGA (2021); Kalandadze et al. 2018 (abstract) | Is the page free of idioms and figurative language? |
| Timers, countdowns, "hurry" messages, auto-timeouts on practice | Negative (standards and government consensus) | WCAG 2.2 SC 2.2.1, 2.2.6 (2024); Home Office anxiety poster | Is the page free of timers and time pressure? |
| Punishing feedback: buzzers, red flashing X, "Wrong!", losing lives or points | Negative (consensus only; no autism study of quiz-feedback sounds was opened) | COGA (sudden noises "alarming"; content with "loud noises") (2021); CAST UDL 3.0 Consideration 7.4 (2024) | Is wrong-answer feedback silent (or a soft, user-enabled sound) and free of penalties and alarm imagery? |
| Colour-only right/wrong signals | Negative (standard) | WCAG 2.2 SC 1.4.1 (2024) | Is every right/wrong signal shown with text plus an icon, not colour alone? |
| "All of the above" / "none of the above" | Negative (item-writing consensus) | Haladyna et al. 2002, Guidelines 25–26 | Is every item free of these options? |
| Negative or double-negative stems and statements | Negative (item-writing consensus) | Haladyna et al. 2002, Guidelines 17 and 27; CITL suggestion 6 | Is every stem and statement free of negatives (or are unavoidable ones in bold capitals)? |
| Trick items | Negative (item-writing consensus) | Haladyna et al. 2002, Guideline 7 | Is every item free of deliberately misleading wording? |
| Absolute words in True/False (always, never, all, none) | Negative (item-writing consensus) | CITL suggestion 8; Haladyna et al. 2002, Guideline 28a | Is every True/False statement free of absolute words used as clues? |
| Complex combination MCQs ("A and C only") | Negative (item-writing consensus) | Haladyna et al. 2002, Guideline 9 | Is every item free of combination options? |
| Abstract or metaphorical images | Negative (COGA consensus) | COGA persona Amy (2021) | Does every image literally show what the text says? |
| Vague buttons ("Click here", unlabeled icons) | Negative (government consensus) | Home Office autism poster | Is every button labelled with its action in words? |

---

## Check with his inclusion team (varies between autistic children; do not hard-code)

1. **Overall sensory profile (sound, light, motion).** Why it varies: sensory hyper-reactivity, hypo-reactivity and sensory seeking differ across individuals and senses. Williams et al. analysed caregiver reports on 3,868 autistic youth aged 3–18 from 12 data sources. Source: Molecular Autism 14:31 (2023), https://molecularautism.biomedcentral.com/articles/10.1186/s13229-023-00563-4.
2. **Colour and contrast preference.** Why it varies: the Home Office advises against bright contrasting colours. Its blog post noted bright contrast helps some users (e.g., low vision) while some autistic users "would prefer differently". WCAG minimum contrast must still be met. Sources: Home Office posters (undated; blog 2016); WCAG 2.2 SC 1.4.3.
3. **Any use of sound (reward chimes, read-aloud default on/off).** Why it varies: auditory reactivity differs between children (Williams et al. 2023), and COGA describes sudden sounds as alarming for some autistic users (2021).
4. **Animation tolerance (e.g., a block "pop" when he earns a reward).** Why it varies: same sensory variability (Williams et al. 2023); COGA lists turning distractions off as a user need.
5. **Read-aloud voice, speed and language (Arabic/English).** Why it varies: COGA personas show opposite needs. One dislikes synthesized speech; another cannot speed up text-to-speech (impaired auditory processing) (2021). For Arabic, diacritics affect the quality of synthesized speech (COGA 2021).
6. **Session and break length.** Why it varies: no study found; COGA frames breaks and fatigue as individual needs (2021).
7. **Reward type, frequency and the Minecraft theme's intensity.** Why it varies: in Gunn & Delafield-Butt (2016), interests differ by child. In its studies, two children showed a small, temporary rise in perseveration, and one child's task performance dropped (66% to 60%; the authors linked this to wider non-response). The review's discussion, citing other sources, notes distress when access to an interest is limited. Ask whether Minecraft visuals should be in the lesson, only in rewards, or kept off quiz screens.
8. **Number of MCQ options and exam layout.** Why it varies: the school's exam specification governs; Rodriguez (2005) supports 3, CITL suggests 4. Match his school papers.
9. **Timing for real exams versus practice.** Why it varies: Decree 252/2017 (as reproduced) gives inclusion students the same exam time as peers, while practice pages should be untimed (WCAG 2.2.1; Home Office anxiety poster). Ask the team whether any timed rehearsal is wanted closer to exams.
10. **Language exemptions and companion support.** Why it varies: under Decree 252/2017, exemption from a second foreign language (Art. 10), possible exemption from Arabic-taught subjects in special-curriculum schools (Art. 9), and an educational companion (Art. 7) each depend on his medical report and school decisions.

---

## Recommendations (build order)

1. Build one page template that passes sections 1, 4, 5, 11 and 13. Freeze it, and change only the content after that.
2. Write lesson text to sections 2 and 3. Have a second adult check for idioms and ambiguity.
3. Write quiz items to section 10. Check each item against the Do-NOT table before publishing.
4. Add a settings panel covering colour theme, animation on/off, sound on/off, and read-aloud voice and speed. Set the defaults with his inclusion team (list above).
5. Add the Minecraft-style layer last, as a frame plus section-end rewards. After two weeks, review engagement and any difficulty switching back to work with the team.

## Caveats
- Most rules are CONSENSUS. They are low-risk and standards-based, but untested with autistic Grade 6 pupils.
- NCAEP evidence-based practices are broad categories from clinical and educational intervention studies; mapping them to web-page design is my inference.
- The Decree 252/2017 text came from a third-party Egyptian special-education site, not a Ministry domain. Confirm the current version with the school's inclusion division.
- Item-writing research (Haladyna, Rodriguez, CITL) was done with general test-takers, and CITL is not peer-reviewed.

---

## Combined page-review checklist (every "yes" = pass)

1. Are the title, content area and Back/Next buttons in the same position, with the same labels, as on every other page?
2. After he selects an option, does the page stay still until he presses a clearly labelled button?
3. Does every screen show "Part X of Y" or "Question X of Y"?
4. Does the first screen list the lesson parts and the number of questions?
5. Does every button name its action (e.g., "Check my answer", "Next question"), with no "Click here"?
6. Is the page free of idioms, metaphors, sarcasm and jokes?
7. Is every paragraph three sentences or fewer, with lists used for steps?
8. Does every new subject word have a short definition or glossary pop-up on the same screen?
9. Can each sentence be read only one way (checked by a second adult reader)?
10. Does each key idea have one directly related picture or diagram next to it?
11. Does every image directly show the object or idea named in the text?
12. Does every informative image have alt text that states what it shows?
13. Does every icon have a visible text label next to it?
14. Does the page use no more than a few calm colours, with no neon or saturated colour blocks?
15. Does all text pass an automated WCAG 1.4.3 contrast check?
16. Is right/wrong also shown with a word (e.g., "Correct") and a shape or icon?
17. Is there a visible control to switch to at least one alternative colour theme?
18. Is the page free of any animation, video or sound that starts by itself?
19. Is the page free of anything that flashes more than three times in one second?
20. Does every sound start only when he presses a button, with a visible stop control?
21. Is there a setting that turns off all non-essential animation (and is it honoured)?
22. Does the wrong-answer message state the correct answer, give one reason, and link to the lesson section?
23. Can he return to the lesson and try the question again without losing points or progress?
24. Does every correct answer get immediate positive feedback in the same place and style?
25. Does feedback always appear in the same screen location with the same layout?
26. Is there a review screen listing his answers before he finishes?
27. Does the page include his chosen interest in a way he has confirmed he likes?
28. Is there a predictable reward (e.g., a block added to a build) after correct answers or completed sections?
29. Can every question be answered without any Minecraft knowledge, with reward screens appearing only between sections?
30. Is the Minecraft-style theme limited to the frame and rewards, and has his inclusion team agreed it?
31. Does every text block, question and answer option have a "Read aloud" button that only plays when pressed?
32. Does the read-aloud highlight each word or sentence as it is spoken?
33. Does the page declare its language, and is every Arabic or English passage inside the other language marked with its own language?
34. Do key Arabic words that read-aloud must pronounce carry diacritics?
35. Are there visible voice and speed controls for read-aloud?
36. Is the page free of any countdown, timer or automatic timeout?
37. Can he stop after any part and return later to the same place without losing answers?
38. Is a progress indicator visible on every screen?
39. Has the session and break length been set using his inclusion team's recommendation?
40. Are all items multiple choice or True/False, in the same layout as his school's papers?
41. Does each MCQ have the agreed number of options (3, or the school's number), used consistently?
42. Is every stem free of NOT/EXCEPT (or, if present, is it in bold capitals)?
43. Is every item free of "all of the above" and "none of the above"?
44. Is each wrong option a mistake a Grade 6 student could realistically make?
45. Are all options of one item roughly the same length and grammatical form?
46. Would a second adult agree no item is designed to mislead?
47. Does each True/False statement test exactly one fact that is fully true or fully false?
48. Is every True/False statement free of always/never/all/none (unless they appear equally in true and false items)?
49. Is every True/False statement free of "not", "no" and double negatives?
50. Is every item free of combination options like "1 and 3 only"?
51. Can each option be selected with a large tap target and with the keyboard?
52. Does each screen present only one lesson idea or one question?
53. Does each section have a heading and visible space separating it from the next?
54. Are the instruction, question and all options visible together on one screen?
55. Is the screen free of ads, side panels, pop-ups and unrelated links?
56. Do Arabic pages have dir="rtl" and lang="ar" on the html tag, and render text, buttons and tables right-to-left?
57. Is every embedded English phrase in Arabic text (and vice versa) marked with its language?
58. Has the inclusion team confirmed which language(s) each lesson page should use for him?
59. Can the whole lesson and quiz be completed using only Tab, Enter/Space and arrow keys?
60. Is there a clearly visible outline on whichever control has focus?
61. Does a screen reader announce the question and each option's label when tabbing through?
62. Is the page free of any learning-style label or style-matched version?
63. Is the page free of anything that plays or moves by itself?
64. Is the page free of flashing above three times per second?
65. Is the page free of neon colours, busy backgrounds and decorative clutter?
66. Is the page free of idioms and figurative language?
67. Is the page free of timers and time pressure?
68. Is wrong-answer feedback silent (or a soft, user-enabled sound) and free of penalties and alarm imagery?
69. Is every right/wrong signal shown with text plus an icon, not colour alone?
70. Is every item free of "all of the above" and "none of the above" options?
71. Is every stem and statement free of negatives (or are unavoidable ones in bold capitals)?
72. Is every item free of deliberately misleading wording?
73. Is every True/False statement free of absolute words used as clues?
74. Is every item free of combination options?
75. Does every image literally show what the text says?
76. Is every button labelled with its action in words?