# Design Guide for Interactive Study Web Pages for One Grade 6 Autistic Learner

> ChatGPT Deep Research, 17 November 2026. Research copy with the report’s original evidence labels and 42 review questions. List formatting and the Home Office poster link have been corrected in this export. See the [research index](README.md) for its review status.

## Evidence framework and scope

This guide is for **one Grade 6 learner in an Egyptian language school with an inclusion division**, using lesson-explanation pages followed only by **multiple-choice and True/False questions**, with a possible Minecraft-style visual theme. It deliberately separates three kinds of claims:

- **EVIDENCE-BASED** means the recommendation is supported by research conducted with autistic learners, principally the National Clearinghouse on Autism Evidence and Practice review and, where available, recent peer-reviewed studies involving autistic students.
- **CONSENSUS** means the recommendation comes from accessibility or instructional-design standards/guidance such as W3C COGA, WCAG 2.2, CAST UDL 3.0, or government accessibility guidance. These recommendations may be very strong design requirements, but they are **not autism-treatment evidence**.
- **WEAK** means the evidence is indirect, limited, based on non-autistic samples, or does not isolate the exact feature being recommended.

The most recent NCAEP review I could verify is **Steinbrenner et al. 2020**. It synthesized 972 autism intervention studies published through 2017 and identified 28 evidence-based practices, including visual supports, reinforcement, prompting, direct instruction, technology-aided instruction/intervention, task analysis, and antecedent-based intervention. Because no later NCAEP replacement review was found, the 2020 report remains the current NCAEP evidence base used here. W3C's **Making Content Usable for People with Cognitive and Learning Disabilities** remains the current COGA Working Group Note from **2021**; its publication-history page shows no later Note. CAST's current UDL version is **3.0 (2024)**, and W3C's current WCAG 2.2 Recommendation was republished on **December 12, 2024**. The Egyptian Ministry of Education and Technical Education's **2024–2029 Strategic Plan** explicitly includes students with disabilities within its fairness-and-inclusivity priority, refers to integrating students with mild disabilities into mainstream schools, and cites Ministerial Resolution 252/2017 on educational inclusion. The Ministry also publishes teacher material that explicitly lists autism spectrum disorder among inclusion categories. These sources establish the Egyptian inclusion context, but I did **not** find an official Egyptian source giving sufficiently specific web-interface design rules for autistic Grade 6 learners; therefore, none are invented here. The evidence also has an important generalization limitation: NCAEP reports that most autism intervention studies were delivered individually, with relatively few in ordinary whole-class settings, and the evidence spans ages from childhood through young adulthood rather than specifically Egyptian Grade 6 language-school students. Consequently, individual sensory, motivational, reading, pacing, and reward decisions should be validated with this child's inclusion team rather than inferred from diagnosis alone.

## Structure, language, and cognitive load

**Topic: Layout and predictability**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Keep the same basic page structure from lesson to lesson: e.g. title → goal → explanation → example → quiz → result. Controls that perform the same job should stay in the same location and use the same label. | CONSENSUS | [W3C COGA, 2021](https://www.w3.org/TR/coga-usable/), which recommends clear hierarchy, logical sections and predictable interfaces; WCAG 2.2 requires predictable operation. | **L1.** Does this page follow the same agreed section order, control positions and control labels as the other study pages? |
| Do not let buttons, questions or explanatory content shift position unexpectedly while the learner is reading or about to click. | CONSENSUS | [W3C COGA, 2021](https://www.w3.org/TR/coga-usable/), “Ensure Controls and Content Do Not Move Unexpectedly.” | **L2.** After the page has become usable, does every important control remain stationary unless the learner deliberately causes a change? |
| Show where the learner is in the activity, preferably with a simple persistent indicator such as “Lesson → Practice → Quiz → Finish,” rather than requiring him to remember the sequence. | CONSENSUS | [W3C COGA, 2021](https://www.w3.org/TR/coga-usable/) recommends clear hierarchy and user-action feedback that helps users reorient; CAST also recommends schedules and cues for predictability. | **L3.** Can the learner tell the current stage and what comes next without remembering a previous screen? |
| Divide content into clearly separated sections using headings, spacing, borders or cards rather than one continuous dense block. | CONSENSUS | [W3C COGA, 2021](https://www.w3.org/TR/coga-usable/) recommends clear regions, white space and visually differentiated sections. | **L4.** Is every major content chunk visually separated and headed, with no large undifferentiated wall of content? |

**Topic: Language — literal and short**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Use literal wording for instructions, labels, questions and feedback; avoid idioms, sarcasm, figurative commands and jokes whose meaning is needed to complete the task. | CONSENSUS | [W3C COGA, 2021](https://www.w3.org/TR/coga-usable/) explicitly recommends literal text for headings, labels, instructions and error messages; [GOV.UK autism accessibility poster, 2016](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/) similarly advises against figures of speech and idioms. | **G1.** Can every instruction and question be interpreted correctly without understanding an idiom, metaphor, sarcasm or implied meaning? |
| Keep sentences short and make each sentence express one main point. | CONSENSUS | [W3C COGA, 2021](https://www.w3.org/TR/coga-usable/) says to use short sentences with one point per sentence and short blocks of text. | **G2.** Does each instructional sentence contain only one main idea or action? |
| Define unfamiliar academic terms when first used rather than simplifying away vocabulary the school actually expects him to learn. | CONSENSUS | [WCAG 2.2, 2024](https://www.w3.org/TR/wcag/) provides mechanisms for unusual words and jargon; CAST UDL 3.0 calls for clarifying vocabulary and symbols. | **G3.** Is every unfamiliar term needed for the lesson either already taught or defined at first use? |

**Topic: Avoiding overload**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Keep only information and controls needed for the current learning task visible; remove ads, decorative widgets, unrelated counters, social elements and unnecessary sidebars. | CONSENSUS | [W3C COGA, 2021](https://www.w3.org/TR/coga-usable/) says distractions can prevent completion and recommends removing unnecessary content and limiting interruptions. | **O1.** Can every visible non-navigation element be justified as helping the current lesson, question, feedback or learner-selected theme? |
| Break long procedures or explanations into explicit steps instead of requiring the learner to hold several instructions in working memory. | CONSENSUS | [W3C COGA, 2021](https://www.w3.org/TR/coga-usable/) recommends separating every instruction and including all necessary steps; NCAEP identifies **task analysis** as an evidence-based autism practice, although that evidence does not specifically establish a particular webpage layout. | **O2.** Where the learner must perform more than one action, are the required actions presented as separate, ordered steps? |
| Prefer one clearly defined learning task at a time rather than simultaneously presenting explanation, animation, rewards, countdowns and several navigation choices. | CONSENSUS | [W3C COGA, 2021](https://www.w3.org/TR/coga-usable/) recommends minimizing interruptions and unnecessary workflow steps; CAST UDL 3.0 recommends varying the number of features/items presented at once to reduce distraction. | **O3.** At the learner's main point of attention, is there only one primary task competing for action? |

## Visual presentation, colour, motion, and audio

**Topic: Visuals and dual representation**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Use a relevant visual when it explains structure, sequence, location, relationship or vocabulary; do not add pictures merely because autistic learners are assumed to be “visual learners.” | EVIDENCE-BASED for **visual supports as an autism intervention**; the specific webpage implementation remains an inference | NCAEP's current 2020 review classifies **Visual Supports** as an autism evidence-based practice, supported by 65 studies through 2017. [NCAEP Table 3.1, 2020](https://ncaep.fpg.unc.edu/sites/ncaep.fpg.unc.edu/files/imce/documents/NCAEP%20Report%20-%20Table%203.1%20-%20EBP%20list.pdf). CAST 3.0 also recommends multiple media. | **V1.** Does each instructional visual have a specific teaching purpose that can be stated in one sentence? |
| Pair important icons with text rather than relying on an icon alone, and keep icon meanings consistent. | CONSENSUS | [W3C COGA, 2021](https://www.w3.org/TR/coga-usable/) recommends familiar icons next to related content but warns that too many icons can create cognitive load and notes that some people have difficulty remembering icons. | **V2.** Does every important icon have an adjacent text label, and is the same icon used for the same meaning throughout the page set? |
| Do not encode essential information only in an image; provide equivalent text or an accessible label. | CONSENSUS / universal accessibility | [WCAG 2.2, 2024](https://www.w3.org/TR/wcag/), Success Criterion 1.1.1 requires text alternatives for non-text content. | **V3.** If all instructional images disappeared, would equivalent essential information still be available in text or accessible alternatives? |

**Topic: Colour**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Meet WCAG AA contrast: ordinary text at least 4.5:1; large text at least 3:1. | CONSENSUS / universal accessibility requirement | [WCAG 2.2, 2024](https://www.w3.org/TR/wcag/), SC 1.4.3. | **C1.** Do automated/manual contrast checks confirm at least 4.5:1 for normal text and 3:1 for large text? |
| Never use colour alone to mean “correct,” “wrong,” “selected,” “important,” or to distinguish answer choices; add text, shape, icon or state information. | CONSENSUS / universal accessibility requirement | [WCAG 2.2, 2024](https://www.w3.org/TR/wcag/), SC 1.4.1 says colour must not be the only visual means of conveying information or prompting a response. | **C2.** If the page were viewed in grayscale, would correct/wrong/selected/important states remain unambiguous? |
| Treat preferred saturation, brightness and Minecraft palette as an individual setting, not an autism rule. A subdued default is reasonable, but the child's preference should decide the final palette while preserving contrast. | CONSENSUS, with individual variability | The GOV.UK autism poster recommends simple colours and avoiding bright contrasting colours but explicitly describes its poster as general guidance and urges user testing where needs conflict; CAST UDL 3.0 recommends customizable background/text colours and display features. [GOV.UK, 2016](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/); [CAST UDL 3.0, 2024](https://udlguidelines.cast.org/representation/perception/customize-display/). | **C3.** Is the chosen theme palette documented as acceptable to this learner/inclusion team and does it still pass contrast requirements? |

**Topic: Motion and sound**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Do not start decorative animation automatically; if any nonessential movement lasts more than five seconds, it must be pausable, stoppable or hideable. | CONSENSUS / universal accessibility requirement | [WCAG 2.2, 2024](https://www.w3.org/TR/wcag/), SC 2.2.2; COGA also recommends allowing users to control moving and distracting content. | **M1.** Is there no unavoidable, nonessential auto-running movement lasting more than five seconds? |
| Do not autoplay speech, music, Minecraft sounds or celebration audio. If audio can play, make it user-initiated and give an obvious stop/mute control. | CONSENSUS | WCAG requires independent pause/stop/volume control when autoplayed audio exceeds three seconds; COGA recommends control over distracting sounds. [WCAG 2.2, 2024](https://www.w3.org/TR/wcag/). | **M2.** On page load, is the page silent until the learner deliberately starts audio, and is an obvious stop/mute control available afterward? |
| Do not assume an autistic child needs either more or less sensory stimulation. Make animation/sound intensity optional and confirm the preferred setting with his inclusion team. | CONSENSUS, individual variability | CAST UDL 3.0 explicitly recommends varying sensory stimulation and notes that what is distracting depends on individual needs. [CAST UDL 3.0, 2024](https://udlguidelines.cast.org/engagement/interests-identities/biases-threats-distractions/). | **M3.** Is the agreed sensory setting documented and can optional motion/sound be disabled without losing lesson content? |

## Teaching, feedback, and motivation

**Topic: Feedback after wrong answers**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| After an incorrect answer, state clearly that it is incorrect and provide a short, specific cue or explanation that helps the learner make progress; do not give only “Wrong.” | CONSENSUS; indirect autism support from prompting | CAST UDL 3.0 recommends timely, specific, substantive and action-oriented feedback. COGA recommends easily recognizable success/failure feedback. NCAEP classifies **prompting** as evidence-based for autistic learners, but this does not by itself prove that one specific digital corrective-feedback format is superior. [CAST, 2024](https://udlguidelines.cast.org/engagement/effort-persistence/feedback/); [NCAEP, 2020](https://ncaep.fpg.unc.edu/sites/ncaep.fpg.unc.edu/files/imce/documents/NCAEP%20Report%20-%20Table%203.1%20-%20EBP%20list.pdf). | **F1.** Does every wrong-answer state tell the learner what was wrong or give a concrete cue for the next attempt? |
| Allow another attempt after corrective feedback when the purpose is practice rather than a locked summative score. | EVIDENCE-BASED at the level of **prompting/reinforcement instructional practice**, not proven as a unique webpage feature | NCAEP identifies prompting and reinforcement as evidence-based practices with autistic learners; reinforcement had 106 supporting studies and prompting 140 in the review database. | **F2.** In practice mode, can the learner try again after receiving corrective information instead of being forced immediately to the next item? |
| Keep feedback neutral and task-focused; avoid shame, alarming sounds, punitive graphics or labels about intelligence/ability. | CONSENSUS | CAST UDL 3.0 recommends feedback emphasizing effort, improvement and strategy rather than inherent ability or comparative performance, and recommends treating mistakes as part of learning. | **F3.** Is every error message free of shaming language, ability labels, punitive sound effects and humiliating visuals? |

**Topic: Rewards and interest-based themes**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| If rewards are used, make them contingent on a defined learning behaviour such as completing a question set or using a strategy, rather than giving random rewards disconnected from the goal. | EVIDENCE-BASED for reinforcement with autistic learners; digital reward implementation must still be individualized | NCAEP classifies **reinforcement** as an autism evidence-based practice and defines it as a consequence following a response/skill that increases future likelihood of that response. [NCAEP, 2020](https://ncaep.fpg.unc.edu/sites/ncaep.fpg.unc.edu/files/imce/documents/NCAEP%20Report%20-%20Table%203.1%20-%20EBP%20list.pdf). | **R1.** Can every reward on this page be traced to a clearly defined learning action rather than random activity? |
| Use Minecraft-style art as an **optional relevance/engagement layer**, not as evidence that Minecraft improves autism learning. Keep the academic content intact if the theme is turned off. | WEAK for Minecraft specifically; CONSENSUS for interest/relevance | CAST UDL 3.0 recommends personalizing context to learner interests and making choices relevant, but no strong peer-reviewed evidence located establishes Minecraft-themed study pages as superior for autistic Grade 6 learners. [CAST UDL 3.0, 2024](https://udlguidelines.cast.org/engagement/interests-identities/relevance-value-authenticity/). | **R2.** If the Minecraft theme is disabled, does the full lesson and quiz remain complete, understandable and equally assessable? |
| Let reward type or theme be changed if it stops being motivating; do not assume a favorite interest will always function as a reward. | CONSENSUS, individual variability | CAST UDL 3.0 explicitly says learners differ in what and how much choice they prefer and includes reward type and graphics among possible learner choices. [CAST UDL 3.0, 2024](https://udlguidelines.cast.org/engagement/interests-identities/choice-autonomy/). | **R3.** Is the current reward/theme preference documented and replaceable without rebuilding the learning content? |

**Topic: Read-aloud**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Offer optional text-to-speech/read-aloud when decoding itself is not the skill being assessed; do not force it on. | CONSENSUS; emerging autism-specific support | CAST UDL 3.0 explicitly recommends allowing text-to-speech when decoding is not the instructional target. A 2024 single-case study with autistic high-school students used adapted science eBooks combining TTS, summarized sentences and highlighted keywords and examined comprehension/engagement, but because features were bundled it cannot establish a TTS-only effect. [CAST, 2024](https://udlguidelines.cast.org/representation/language-symbols/text-notation-symbols/); [study, 2024](https://pubmed.ncbi.nlm.nih.gov/39230781/). | **A1.** When decoding is not being tested, is read-aloud available as an optional control rather than forced playback? |
| Read-aloud must not reveal the answer, alter the wording of options, or become mandatory during a school-style assessment unless the inclusion plan permits it. | CONSENSUS / assessment-validity safeguard | CAST supports multiple ways of perceiving information but treats supports as options, while the child's school/inclusion accommodation plan must determine whether TTS is permitted during assessment. [CAST UDL 3.0, 2024](https://udlguidelines.cast.org/representation/perception/ways-perceive-information/). | **A2.** Does read-aloud preserve the exact question/options and follow the documented school/inclusion-team rule for whether it may be used in quiz mode? |

**Topic: Session length and breaks**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Do not impose an arbitrary “autism session length.” Let the learner pause and resume without losing work, and set work/break duration from his actual observed needs. | CONSENSUS, individual variability | COGA advises avoiding timeouts and notes that users with cognitive/learning disabilities may need breaks without losing their place. CAST UDL 3.0 explicitly recommends varying work-session length, pace and break availability according to learner needs. [COGA, 2021](https://www.w3.org/TR/coga-usable/); [CAST, 2024](https://udlguidelines.cast.org/engagement/interests-identities/biases-threats-distractions/). | **B1.** Can the learner pause and resume the page without losing completed lesson or quiz progress? |
| If a break reminder or timer is used, it should follow a team-agreed schedule and remain adjustable rather than being presented as a universal autism requirement. | CONSENSUS, individual variability | CAST UDL 3.0 recommends schedules/timers for predictability while also explicitly recommending variation in pace, session length and breaks. | **B2.** Is any break/timer schedule adjustable and documented as agreed for this learner rather than hard-coded from a generic autism recommendation? |

## Quiz design for the school's MCQ and True/False format

**Topic: Multiple-choice questions**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Write a focused stem containing only information needed to answer the question. | WEAK for autism specifically; supported by general assessment research | A 2024 study of 928 MCQs identified unfocused stems and implausible distractors among the most common item-writing flaws; this evidence comes from pharmacy education, not autistic Grade 6 learners. [American Journal of Pharmaceutical Education, 2024](https://www.sciencedirect.com/science/article/abs/pii/S0002945924104767). COGA independently supports short, single-point sentences. | **Q1.** Does the stem contain only information necessary to identify the intended answer? |
| Use exactly one unambiguously best answer unless the school explicitly uses another MCQ convention. | WEAK for autism specifically; general assessment-design rule | Recent MCQ research and item-quality literature treat multiple-correct ambiguity as an item-writing flaw; evidence is not autism-specific. | **Q2.** Can a subject teacher identify exactly one intended best answer without needing to infer what the writer meant? |
| Make distractors plausible enough to test the lesson but not deliberately tricky, linguistically confusing, or unrelated. | WEAK for autism specifically | A 2024 item-analysis study examined distractor efficiency and shows that distractor quality is a material psychometric property; a 2026 randomized study found that fewer well-constructed distractors can perform as well as more distractors and reduce writing flaws, but these studies involve medical learners rather than autistic children. | **Q3.** Is each distractor plausible for someone who misunderstood the lesson, while still being clearly wrong from the taught content? |
| Avoid negatively phrased stems such as “Which is NOT…?” unless the school lesson genuinely requires identifying an exception; never use a double negative. | WEAK for autism specifically; general item-writing evidence | Recent MCQ studies continue to identify negative stems as a common item-writing problem, and COGA recommends literal, simple language. | **Q4.** Is the question phrased positively, with no double negative, unless identifying an exception is the explicit learning objective? |

**Topic: True/False questions**

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| Each True/False item should contain one proposition only; do not join two claims with “and” if one could be true and the other false. | CONSENSUS for language clarity; not autism-specific experimental evidence | COGA recommends one point per sentence and short, clear wording. [W3C COGA, 2021](https://www.w3.org/TR/coga-usable/). | **T1.** Can the whole statement receive one True/False value without splitting it into two independently judgeable claims? |
| Avoid trick wording, hidden exceptions and double negatives. | CONSENSUS for cognitive accessibility; WEAK as a psychometric autism-specific claim | COGA recommends literal, easy-to-understand language; recent assessment literature identifies negative wording as a recurring item-writing flaw, but the data are not autism-specific. | **T2.** Can the item be answered from the taught fact or concept without decoding a linguistic trick or double negative? |
| Use “True” and “False” in the same order and visual position throughout the quiz unless the school's exact format requires otherwise. | CONSENSUS | WCAG's predictability principle and COGA's emphasis on consistent familiar controls support stable response patterns; this is not an autism-specific intervention finding. | **T3.** Are the True and False controls presented in the same order and style on every T/F item? |

## Practices to avoid and decisions that must remain individualized

### Do NOT do

| Rule | Strength | Source (with link and year) | How to check it on a page (a yes/no test) |
|---|---|---|---|
| **Do NOT classify him as a “visual learner,” “auditory learner,” etc. and then match instruction to that supposed learning style.** Preferences can be honored, but that is different from claiming better learning from modality matching. | WEAK/unsupported practice; evidence does **not** justify implementation | A 2024 meta-analysis found only a small aggregate effect with high heterogeneity, while only about one quarter of outcomes showed the crossover interaction required to support the matching hypothesis; most supportive studies failed quality standards, and the authors conclude the evidence is too inconsistent to justify widespread adoption. A 2024 adequately powered experiment likewise found no matching advantage. [Clinton-Lisell & Litzinger, 2024](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1428732/full); [Krätzig et al.-type prospective-teacher study, 2024](https://link.springer.com/article/10.1007/s11251-024-09689-1). | **D1.** Is there no feature or lesson decision justified solely by labeling the child a visual/auditory/kinesthetic “learner type”? |
| **Do NOT assume all autistic learners prefer muted colours, silence, animation-free pages, short sessions, TTS, or frequent breaks.** | CONSENSUS against universalization | CAST UDL 3.0 repeatedly emphasizes learner variability and customizable sensory stimulation, pacing and breaks; GOV.UK's autism poster explicitly says its recommendations are general guidance and should be tested with users when preferences differ. | **D2.** Is every sensory/pacing preference either adjustable or backed by documented agreement for this specific learner? |
| **Do NOT turn every fact into a Minecraft reference merely because Minecraft is a preferred interest.** Theme relevance is not evidence that Minecraft-themed instruction improves autism learning, and excessive theme material can itself become distraction. | WEAK | CAST supports relevance and learner interests but also recommends controlling distraction and acknowledges individual variability; no direct strong evidence was found for Minecraft-themed academic webpages for autistic Grade 6 learners. | **D3.** Are Minecraft elements omitted wherever they do not support motivation, orientation or the lesson concept? |
| **Do NOT use sensory “treatments” such as weighted items, brushing protocols, generic sensory diets, or auditory-integration claims as part of the web-page design.** | Evidence against treating these as established autism EBPs | NCAEP's companion guidance states that these sensory-based practices did not meet its evidence criteria and warns that Ayres Sensory Integration is a specialist intervention rather than a generic classroom strategy. [NCAEP companion, current with 2020 review](https://ncaep.fpg.unc.edu/sites/ncaep.fpg.unc.edu/files/resources/Sensory%20Integration_A%20Companion%20to%20the%20NCAEP%20Report.pdf). | **D4.** Does the page avoid making unverified sensory-treatment claims or prescribing sensory interventions outside the inclusion/clinical team's plan? |
| **Do NOT punish incorrect answers with lost points during ordinary practice unless the school assessment rules specifically require scoring that way.** Corrective practice should make the next action clear. | CONSENSUS | CAST emphasizes constructive, action-oriented feedback and a learning environment in which mistakes are part of learning; COGA emphasizes recoverable errors and clear feedback. | **D5.** In practice mode, does a wrong answer lead to informative feedback rather than an arbitrary penalty or punitive interaction? |
| **Do NOT use colour as the sole indication of correctness, autoplay sound as the sole feedback, or unavoidable moving celebrations.** | CONSENSUS / WCAG requirement | WCAG 2.2 SC 1.4.1, 1.4.2 and 2.2.2. | **D6.** Can correctness and completion be understood with colour, sound and animation all turned off? |

### Check with his inclusion team

The following should **not** be hard-coded as autism rules. They should be documented for this particular child and reviewed if his response changes:

- Preferred **Minecraft intensity**: full page skin, occasional block-style borders/icons, reward imagery only, or no theme. CAST supports interest relevance but not Minecraft specifically.
- Preferred **colour palette, saturation and contrast comfort**, while always preserving WCAG minimum contrast.
- Whether **motion**, particle effects, animated success indicators or sound are pleasant, neutral or distracting, and whether they should default off.
- Whether **read-aloud/TTS** helps lesson access, and whether it is permitted during school-style quizzes or only during teaching/revision.
- His useful **work duration, break frequency, break duration and pace**. There is no defensible universal “autism session length.”
- What counts as a motivating **reward** and when the reward has stopped functioning as one. NCAEP supports reinforcement as a practice, not any particular reward for every autistic learner.
- Whether first-attempt errors should receive a **hint, explanation, worked example or immediate retry**, and how much prompting should be faded over time.
- Exact **school assessment conventions**: number of MCQ options, whether TTS is permitted, whether answers may be retried, whether feedback appears immediately or only after submission, and whether school exams use negative stems. The practice pages should prepare him for the real school format rather than inventing a different testing system.
- Whether English-only text is appropriate for every subject or whether a limited **Arabic clarification option** is part of his inclusion plan. The Ministry's inclusion framework supports adaptation to learner needs, but the retrieved Ministry material does not prescribe a specific bilingual web design.
- Any sensory, language or assessment accommodation recorded in his **individual educational/inclusion plan** should override generic design assumptions where compatible with accessibility requirements. Egypt's current strategic framework emphasizes inclusive educational environments and curriculum adaptation for students with disabilities.

## Combined page-review checklist

Use this checklist on **every page**. Each item below corresponds one-to-one with a rule above; no page-review test is omitted or repeated.

- [ ] **L1** — Does this page follow the same agreed section order, control positions and control labels as the other study pages?
- [ ] **L2** — After the page has become usable, does every important control remain stationary unless the learner deliberately causes a change?
- [ ] **L3** — Can the learner tell the current stage and what comes next without remembering a previous screen?
- [ ] **L4** — Is every major content chunk visually separated and headed, with no large undifferentiated wall of content?
- [ ] **G1** — Can every instruction and question be interpreted correctly without understanding an idiom, metaphor, sarcasm or implied meaning?
- [ ] **G2** — Does each instructional sentence contain only one main idea or action?
- [ ] **G3** — Is every unfamiliar term needed for the lesson either already taught or defined at first use?
- [ ] **O1** — Can every visible non-navigation element be justified as helping the current lesson, question, feedback or learner-selected theme?
- [ ] **O2** — Where the learner must perform more than one action, are the required actions presented as separate, ordered steps?
- [ ] **O3** — At the learner's main point of attention, is there only one primary task competing for action?
- [ ] **V1** — Does each instructional visual have a specific teaching purpose that can be stated in one sentence?
- [ ] **V2** — Does every important icon have an adjacent text label, and is the same icon used for the same meaning throughout the page set?
- [ ] **V3** — If all instructional images disappeared, would equivalent essential information still be available in text or accessible alternatives?
- [ ] **C1** — Do automated/manual contrast checks confirm at least 4.5:1 for normal text and 3:1 for large text?
- [ ] **C2** — If the page were viewed in grayscale, would correct/wrong/selected/important states remain unambiguous?
- [ ] **C3** — Is the chosen theme palette documented as acceptable to this learner/inclusion team and does it still pass contrast requirements?
- [ ] **M1** — Is there no unavoidable, nonessential auto-running movement lasting more than five seconds?
- [ ] **M2** — On page load, is the page silent until the learner deliberately starts audio, and is an obvious stop/mute control available afterward?
- [ ] **M3** — Is the agreed sensory setting documented and can optional motion/sound be disabled without losing lesson content?
- [ ] **F1** — Does every wrong-answer state tell the learner what was wrong or give a concrete cue for the next attempt?
- [ ] **F2** — In practice mode, can the learner try again after receiving corrective information instead of being forced immediately to the next item?
- [ ] **F3** — Is every error message free of shaming language, ability labels, punitive sound effects and humiliating visuals?
- [ ] **R1** — Can every reward on this page be traced to a clearly defined learning action rather than random activity?
- [ ] **R2** — If the Minecraft theme is disabled, does the full lesson and quiz remain complete, understandable and equally assessable?
- [ ] **R3** — Is the current reward/theme preference documented and replaceable without rebuilding the learning content?
- [ ] **A1** — When decoding is not being tested, is read-aloud available as an optional control rather than forced playback?
- [ ] **A2** — Does read-aloud preserve the exact question/options and follow the documented school/inclusion-team rule for whether it may be used in quiz mode?
- [ ] **B1** — Can the learner pause and resume the page without losing completed lesson or quiz progress?
- [ ] **B2** — Is any break/timer schedule adjustable and documented as agreed for this learner rather than hard-coded from a generic autism recommendation?
- [ ] **Q1** — Does the stem contain only information necessary to identify the intended answer?
- [ ] **Q2** — Can a subject teacher identify exactly one intended best answer without needing to infer what the writer meant?
- [ ] **Q3** — Is each distractor plausible for someone who misunderstood the lesson, while still being clearly wrong from the taught content?
- [ ] **Q4** — Is the question phrased positively, with no double negative, unless identifying an exception is the explicit learning objective?
- [ ] **T1** — Can the whole statement receive one True/False value without splitting it into two independently judgeable claims?
- [ ] **T2** — Can the item be answered from the taught fact or concept without decoding a linguistic trick or double negative?
- [ ] **T3** — Are the True and False controls presented in the same order and style on every T/F item?
- [ ] **D1** — Is there no feature or lesson decision justified solely by labeling the child a visual/auditory/kinesthetic “learner type”?
- [ ] **D2** — Is every sensory/pacing preference either adjustable or backed by documented agreement for this specific learner?
- [ ] **D3** — Are Minecraft elements omitted wherever they do not support motivation, orientation or the lesson concept?
- [ ] **D4** — Does the page avoid making unverified sensory-treatment claims or prescribing sensory interventions outside the inclusion/clinical team's plan?
- [ ] **D5** — In practice mode, does a wrong answer lead to informative feedback rather than an arbitrary penalty or punitive interaction?
- [ ] **D6** — Can correctness and completion be understood with colour, sound and animation all turned off?
