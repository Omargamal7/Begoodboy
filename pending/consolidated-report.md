# November report on orchestrators, skills and study HTML

**19 November 2026 · Begoodboy**

The strongest local result is a Gemini → Codex handoff that produced and verified one real file. The phone also has four named OpenRouter models pinned plus the free router. The HTML workflow is further along: it has twelve defined stages, seven pinned third-party skill folders, a working lesson example and a source-checked design guide. A three-provider acceptance run, a scored lead-model comparison and a fully documented review of one lesson against the combined research are still open.

**Jump to** [model tests](#model-tests-and-inventories) · [skills](#skills-and-their-test-status) · [HTML stages](#building-the-html) · [design disagreements](#where-the-design-reports-disagree) · [checklist coverage](#coverage-of-all-three-checklists) · [open work](#what-remains-open).

## Model tests and inventories

### What ran locally

| Date and evidence | What the run established | Scope |
| --- | --- | --- |
| 2 Nov · Arena design investigation | Codex, Gemini 3.8 Flash through `agy`, and Claude contributed independently. Later critique rounds ran sequentially. The retained Codex research headers identify `gpt-6.1-sol` and report reasoning effort `none`. | Participation in a design review. The recorded effort belongs to these sessions. |
| 2 Nov · repaired Arena controller | `gemini-3.8-flash-low` wrote `answer.json` containing `{"sum":42,"status":"ok"}`. A deterministic file check passed. Codex approved the matching file manifest on the first review. The state file says `done`. Two generation calls took **77.78 seconds** end to end. | One live two-provider task. The acceptance record names the Codex CLI and leaves its backend model and effort unspecified. The controller’s default `gemini-3.8-flash-high` is a separate configuration. |
| 2 Nov · controller tests | The repair notes record **19 offline tests passing** on both the local machine and Termux. The Claude adapter passed offline tests. The design report also records a standalone Claude CLI response. | A live Claude task through this repaired three-provider workflow still needs a receipt. |
| 18–19 Nov · OpenRouter on the phone | The 18 Nov session reported responses through Ori/Pi/OpenCode and a failed Inkling request. On 19 Nov the Pi settings confirmed the five pins below and Lightning as the default. | Settings verify configuration. The historical phone session supplies the request outcomes. The independent 20-request results have their own column below. |

The Arena evidence comes from `arena-plurilog/RESULT.md`, `arena-plurilog/REPAIR_NOTES.md`, research-session headers, and the 2 November run’s saved configuration, final artifact, manifest and verdict. The phone’s `~/.pi/agent/settings.json` supplied the selected model IDs and default. Its `~/.pi/agent/models-store.json` supplied the separate catalog snapshot. These were inspected without rerunning the models. The repair used `agy` 1.3.0, Codex 0.164.0 and Claude Code 2.1.307. Codex 0.167.2 belongs to the later inventory. [Arena handoff](orchestration/agent-handoffs.md) · [Dated model inventory](orchestration/model-comparison-prompt.txt)

### OpenRouter pins and test outcomes

TeamDay sent 282 requests across 16 free endpoints from 28 October through 6 November. It tested JSON, tool calls and coding, and distinguished an endpoint returning an answer from that answer passing its check. AY Automate’s 3 November test asked for one short reply in three sweeps. A phone launch, an external response check and a correct task result answer different questions. [TeamDay’s measured results and method](https://www.teamday.ai/blog/free-openrouter-models-benchmark-2026) · [AY Automate’s three-sweep test](https://www.ayautomate.com/blog/openrouter-free-models)

| Exact ID | Phone evidence | Published evidence and interpretation |
| --- | --- | --- |
| `nvidia/nemotron-3.5-lightning:free` | **Pinned, default.** The Ori and OpenCode widget entries select it. A response was reported on 18 Nov. | Responded to all 20 TeamDay requests, but passed 12. Its seven strict JSON checks failed. A working default for a quick response still needs validation for structured handoffs. |
| `nvidia/nemotron-3.5-super-vl:free` | **Pinned.** A phone response was reported. | Passed all 20 TeamDay requests. Image or school-PDF extraction accuracy was outside that benchmark. |
| `nvidia/nemotron-3-ultra-550b-a55b:free` | **Pinned.** A phone response was reported. | Also passed all 20. TeamDay measured 29 output tokens/s for Ultra and 106 for Super VL on its workload. A broader reasoning comparison remains open. |
| `cohere/north-mini-code:free` | **Pinned.** The 18 Nov session recorded that the coding route accepted the request. | Answered all 20 and passed 18, including 5 of 7 code cases. The educational HTML task still needs its own test. |
| `openrouter/free` | **Pinned.** A phone response was reported. | This is OpenRouter’s routing alias. Without the returned model ID, the underlying model for an individual reply is unknown. [OpenRouter’s routing description](https://openrouter.ai/collections/free-models/) |
| `thinkingmachines/inkling-2-small:free` | **Attempted, HTTP 403, omitted from pins.** The phone cache still lists it. | “Needs testing” in the earlier shortlist and the later 403 describe different times. Quality is unmeasured. TeamDay’s earlier Inkling tests used different IDs. |
| `google/gemma-4-31b-it:free`, `google/gemma-4-26b-a4b-it:free` | Both appeared in the phone cache. No local response was documented. | Both returned zero answers in 20 TeamDay attempts each because the upstream route returned 429. AY Automate likewise saw 429s. These observations establish access failures during those windows. |
| `dots-studio/dots-3-note-preview:free`, `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free` | Cached. No local task result was located for either. | Dots passed 13 of 20 despite answering all 20. Nano passed each of the 17 requests it answered. Both answered all three of AY Automate’s short probes. |
| `recursive/flint-v1.0:free` | Cached. No local run was located. | AY Automate saw zero replies on 3 Nov. TeamDay observed recovery on 4 Nov and eight successful answers across its longer window. The dates explain the apparent disagreement. |

**Other entries in the phone’s model cache.** The 19 November read returned **19 named `:free` IDs and the routing alias**. For the nine IDs below, the reviewed phone records and the two cited benchmarks provide no completed task result. Each is a candidate for future evaluation.

| Provider | Exact IDs |
| --- | --- |
| Baidu, InclusionAI, Liquid | `baidu/ernie-5.5-flash-preview:free`, `inclusionai/ling-3.2-flash:free`, `liquid/lfm-3-1.7b:free` |
| Parallel, Particle AI | `parallel/decisions-fast:free`, `particle-ai/particle-1:free` |
| Perplexity | `perplexity/pplx-decider-flash-v1.3:free`, `perplexity/pplx-decider-v1.3:free` |
| Recraft, Respan | `recraft/recraft-v4.1-flash-v2:free`, `respan/span-01-lite:free` |

The independent November benchmark also covered seven IDs outside that phone snapshot: `liquid/lfm-2.5-2.6b:free`, `xingchen-agi/xing4.0-29b-a4b:free`, `nvidia/nemotron-3.5-content-safety:free`, `poolside/laguna-xs-2.1:free`, `poolside/laguna-s-2.1:free`, `thinkingmachines/inkling:free` and `thinkingmachines/inkling-small:free`. Some were withdrawn during the test. Keep their results attached to those exact versions. The phone cache is a dated observation, and free-route availability can change. [TeamDay’s endpoint history](https://www.teamday.ai/blog/free-openrouter-models-benchmark-2026)

### Lead-orchestrator candidates

The 14 November inventory recorded **17 Antigravity model/effort combinations** across six models and **ten Codex catalog entries**. Claude Code exposed five global effort flags. A scored comparison on the same three coordination tasks was not located. The research providers’ names on the three design reports also do not identify an underlying CLI model or effort level. [Original inventory and evaluation prompt](orchestration/model-comparison-prompt.txt)

| Runtime | Model IDs | Effort or test evidence |
| --- | --- | --- |
| Antigravity | `gemini-4-argon`, `claude-opus-5-5`, `claude-sonnet-5-5` | Each listed low, medium and high. Leadership performance remains unmeasured. |
| Antigravity | `gemini-4-hydrogen` | Listed low, medium, high and xhigh. |
| Antigravity | `gemini-3.8-flash` | Listed low, medium and high. Low is the confirmed live Arena acceptance. High appears in the controller configuration. |
| Antigravity | `gpt-oss-120b` | Listed at medium. |
| Codex CLI cache | `gpt-6.1-sol`, `gpt-6-astra`, `gpt-6.1-terra`, `gpt-6-sol`, `gpt-5.6-sol`, `gpt-5.6-terra` | Each listed low, medium, high, xhigh, max and ultra. `gpt-6.1-sol` appears in actual Arena research logs. The six effort settings have no comparative scores. |
| Codex CLI cache | `gpt-reserve`, `gpt-6-luna`, `gpt-5.6-luna`, `codex-auto-review` | Each listed low, medium, high, xhigh and max. Cache presence gives catalog evidence only. |
| Claude Code | `claude-sonnet-5-5`, `claude-opus-5-5`, `claude-fable-5-1`, `claude-haiku-5-5` | Sonnet was the session’s self-reported active model on 14 Nov. The other names were reported conversationally. The repository’s 19 Nov skill commit credits Opus 5.5. Per-model support for the global low, medium, high, xhigh and max flags remains unverified. [Skill commit](https://github.com/Omargamal7/Begoodboy/commit/c459891d9f31125716d8e29b25e9d0a37bf1661d) |

**What would support a ranking.** The existing rubric gives planning and delegation 20% each, tool reliability 15%, state tracking, recovery, conflict resolution and long-horizon autonomy 10% each, and latency/token efficiency 5%. Give the finalists the same source-to-brief task, missing-source recovery and review dispute. Keep the model, effort, framework capabilities, permissions, evidence and elapsed time. The Codex `ultra` catalog description by itself establishes no performance gain. The free-specialist comparison has a separate remit: source extraction, explanation, HTML and review, with a preferred maximum of 12 pins. [Evaluation brief](orchestration/model-evaluation.md)

## Orchestration findings

| Question | What the records support | What to use or verify |
| --- | --- | --- |
| Who writes and who reviews? | Arena’s measured route uses Gemini as worker and Codex as reviewer. The earlier Begoodboy plan assigns Claude to implementation and Codex to review. Orca proposes Gemini for research, Codex for implementation, Claude for review and independent verification. | Choose one writer per artifact and identify its independent reviewer. Record the actual route for each test. Only the two-provider Arena receipt above supports an end-to-end claim. |
| How is a verdict tied to a file? | The worker supplies a scoped brief, criteria, files, source evidence and uncertainties. A read-only reviewer checks a snapshot. Its structured verdict identifies the artifact manifest by SHA-256. | A changed artifact needs a fresh verdict. The controller permits one correction and one re-review, then escalates unresolved findings. An explicit file-content test or browser check identifies what was exercised. |
| How much isolation is needed? | Gemini favored workspace isolation immediately. Codex ranked it lower. The Arena design settled on a per-task snapshot directory. | Keep one writer on the mutable work and have the reviewer read the frozen version. The reviewer reads the frozen files. Access to other readable files on the host depends on the runtime. |
| Does a browser coordinate the agents? | Plurilog’s public material supported turn-taking. Its signed-in models, context transfer and memory remained unknown. The local controller was tested using CLIs. The AionUi investigation recommended Team Mode’s board and teammate messages. | Use the user-started browser for the Toddle intake when required. Its source packet and a full two-learner collection still need separate verification. Orca’s proposed runtime grants are unverified. |
| Were the latency reports contradictory? | The design notes distinguish short, uncontended CLI probes from overlapping and much larger prompts. The measured 77.78 s includes the actual two-call task, controller overhead and verification. | Keep request size, concurrency, role and checks with any timing comparison. |

Sources for these decisions are the [November Arena and Orca handoffs](orchestration/agent-handoffs.md), the [model-evaluation brief](orchestration/model-evaluation.md), and the dated local run records described above.

## Skills and their test status

The repository’s `study-page-pipeline` is the local coordinating skill. The seven vendored folders below were pinned on 19 November. A folder in Git establishes its version and licence. A recorded run establishes what that version or tool actually did. [Third-party skill register and exact commits](../.claude/THIRD_PARTY_SKILLS.md) · [Active pipeline](../.claude/skills/study-page-pipeline/SKILL.md)

| Skill | Job | Strongest evidence found |
| --- | --- | --- |
| `universal-exam-cram-coach` | Extract book content and look up answer evidence. | Pinned, MIT. The pipeline includes a reproducible book search and the missing-term behavior. A saved outcome tying this skill to a complete lesson was not located. |
| `explicit-instruction-sequence-builder` | Sequence worked example, guided practice and independent work. | Pinned, CC BY-SA 4.0. The sequence is visible in lesson design. A separate invocation record was not located. |
| `dual-coding-designer` | Pair a key idea with a relevant visual. | Pinned, CC BY-SA 4.0. Its role is documented. A dated page-level execution record was not located. |
| `playwright-skill` | Test the page on phone and tablet viewports. | Pinned, MIT. The pipeline records headless Chrome rendering Summit Words at 390 × 844 and 820 × 1180 with no console errors. A separate merged review below records specific tab and retry tests. A full keyboard and accessibility pass was not located. |
| `cognitive-accessibility` | Manually review language, interactions and cognitive accessibility. | Pinned, MIT. The pipeline specifies a manual reading. A completed skill-specific page audit was not located. |
| `a11y-core`, `kb-cognitive-accessibility` | Supporting references for cognitive-accessibility review. | Both pinned, MIT. They are dependencies of the preceding reviewer. |

**Account and runtime skills.** `pdf`, `deep-research`, `agent-protocols` and `agentic-council` are account-provided. Three research outputs exist. The stage table below identifies the exact protocol assigned to each stage. Runtime availability and a per-stage execution receipt are separate fields. A missing helper can be replaced by the procedure written in the active pipeline. Artifact publication uses the runtime’s built-in publisher.

**Investigated alternatives.** The skill hunt left out `pda-reframing` because of its unsourced, indirect wording, `artifact-design` because the search did not identify a suitable reusable distribution, and `bloom-taxonomy-quiz-builder-skill` because its repository lacked a licence. For Orca, `aionui-troubleshooting` was recommended, with `verification-before-completion` and `dispatching-parallel-agents` for suitable work. Those were read-only recommendations. A production Orca execution record for them was not located. [Selection notes](../.claude/THIRD_PARTY_SKILLS.md) · [Orca recommendations](orchestration/agent-handoffs.md)

**Toddle intake.** The saved `toddle-homework` skill covers assignments, announcements, inbox, relevant course plans and attachments. A focused one-learner check succeeded. An earlier two-learner dashboard check covered assignments only. For a full intake, record the requested sections for each learner, distinguish post dates from due dates and return the source file/page for the HTML author. A live browser-to-controller handoff and an unattended two-learner collection remain separately unverified. [Toddle acceptance criteria](orchestration/agent-handoffs.md#toddle-source-intake)

## Building the HTML

### The twelve stages

| Stage | Work and assigned skill | Evidence to keep |
| ---: | --- | --- |
| 1 | Extract the school lesson with `pdf` and `universal-exam-cram-coach`. | The actual source file, printed/PDF page, question wording and relevant figure. |
| 2 | Apply the current design guide. | Applicable rules for this lesson. The active guide is required for Grade 6 and optional for Grade 5. Revisit the research each term or when the inclusion team supplies feedback. |
| 3 | Build the answer key with `universal-exam-cram-coach`. | Per-item ID, source/page and status: school key, worked out from a book definition, or parent check. |
| 4 | Specify the page with `explicit-instruction-sequence-builder` and `agent-protocols:spec-driven-development`. | One learning goal, one worked example, guided booklet practice, independent checks and completion criteria. |
| 5 | Plan with `agent-protocols:planning-and-task-breakdown`. | Buildable parts for content, teaching, exercises, scoring, visuals, read-aloud, saving and parent notes. |
| 6 | Build with `agent-protocols:frontend-ui-engineering` and `dual-coding-designer`. | An offline page, purposeful visuals, user-started read-aloud and guarded browser-local progress. |
| 7 | Verify items with `agent-protocols:test-driven-development`. | Write the checker before the interface and rerun it during the build. Assert unique items, one valid correct choice per scored item, source/page, unscored parent checks and no answer leakage. |
| 8 | Exercise the page with `playwright-skill`. | At both target sizes, exercise every step, correct and incorrect answers, retry, reload, overflow and console errors. |
| 9 | Review with `agent-protocols:code-review-and-quality`, `agentic-council:a11y-audit` and `cognitive-accessibility`. | Inspect keys and scoring, keyboard/focus, accessible names and the applicable design checklist. Record failed checks, fixes and reruns. |
| 10 | Write provenance. | A dated source map under `docs/provenance/<child>/<subject>/`, including original and converted questions, key status, parent checks and review findings. |
| 11 | Register and commit with `agent-protocols:git-workflow-and-versioning`. | Engine lessons appear in `index.html`. Standalone packs appear in `docs/study-packs.md`. Record the `main` commit. |
| 12 | Publish the private learner Artifact using the built-in publisher. | Confirm the actual shareable link. Track its status separately from the Git commit. |

### What the learner sees and where the files go

1. **Start.** Show the lesson goal and a predictable step sequence. Use the learner’s existing engine profile and subject language.
2. **Learn.** Explain the sourced concept and show a worked example. Teach the meaning before asking the learner to recognize a false version of it.
3. **Practise with help.** Present the booklet exercises in order. A hint, review link or worked answer can help after an error. Save the first attempt before retrying.
4. **Check independently.** Present one MCQ or True/False item at a time. Use a school-keyed answer or a clearly documented answer derived from the book. A `Q.open` item stays visible for parent review and is excluded from both the score and its denominator.
5. **Finish or resume.** Show the independent result and what to revisit. Keep guided attempts separate, restore the correct step after a reload and keep source or parent notes away from the active question.

Shared-engine lessons live in `app/lessons/<child>/<subject>/`. The Grade 6 helper creates three sittings and the Grade 5 helper creates two. Standalone files go under `<child>/<subject>/packs/` or a dated assessment folder. `localStorage` access is guarded with `try`/`catch`. Arabic subject pages use the appropriate language and right-to-left direction. Engine checks include `node --check` on the lesson and `node tools/check/lessons.js <child>-<subject>`, with `problems: 0`. [Page structure and working examples](html/page-structure.md) · [Stage details and checks](html/workflow.md) · [Summit Words](../murad/english/assessments/2026-11-17-vocabulary-quiz/summit-words.html)

**Browser and scoring checks with actual results.** The merged vocabulary review records two fixes in `de0abb3`. Only the selected tab stayed visible, and a wrong first answer followed by a correct retry still produced 15/16 on the first-try summary. The Grade 5 science review separately records fixes for switching timed mock papers, persisting a wrong pick before quitting, detecting two rapid wrong picks, and logging new attempts after the parent log was cleared. Those cases are reusable regression checks. The timed mock belongs to a different pack from the untimed Grade 6 practice workflow. [Vocabulary review](https://github.com/Omargamal7/Begoodboy/pull/6) · [Science assessment review](https://github.com/Omargamal7/Begoodboy/pull/7)

## Where the design reports disagree

All three design reports were produced on 17 November. ChatGPT has **42** checklist items, Gemini **51**, and Claude **76**. The repository uses Claude’s guide for Grade 6. Its 19 November source check records corrections and exceptions: the search-period detail in Gunn & Delafield-Butt, a secondary Egyptian news reference and Ringland were not rechecked. Two blocked abstracts were excluded as support. The earlier note that Gemini had not been supplied describes the state before the archive was assembled. A comparable independent source audit of the ChatGPT and Gemini reports was not found. [ChatGPT](research/chatgpt-study-page-design.md) · [Gemini with its figure and bibliography](research/gemini-study-page-design.md) · [Claude’s checked guide](../docs/design/murad-design-guide.md)

| Decision | What differs in the sources | How to handle it in this repository |
| --- | --- | --- |
| Strength of the evidence | Claude rates interest-based teaching and reinforcement as its strongest child-study findings. ChatGPT gives broad practice-level support to visual supports or prompting while qualifying the implementation. Gemini applies stronger labels to several specific layout, language and interaction rules. | Identify what was studied: a broad teaching practice, a measured interface feature, a general standard or an individual preference. A rating for visual supports does not validate a particular diagram, border width or token animation. [NCAEP evidence summary](https://ncaep.fpg.unc.edu/sites/ncaep.fpg.unc.edu/files/imce/documents/EBP%20Executive%20Summary.pdf) |
| Page layout, text and target size | Gemini proposes 18 pt body text, 1–2 px borders, prescribed spacing, a single screenful and 44 px targets. ChatGPT and Claude emphasize readable text, predictable controls, one task and access across viewports. | Use readable, resizable type, reflow and large labelled controls. Treat exact dimensions as design choices. WCAG 2.2 AA target size is 24 × 24 CSS px with exceptions. A 44 px target is a reasonable larger design choice. The Ministry’s printed examination specifications and web accessibility requirements apply to different media. [W3C target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) |
| Palette and colour control | Gemini asks for two or three tints and gives specific colour exclusions. Claude check 17 requires an alternative theme. ChatGPT asks whether the palette works for this learner. | Keep an alternative theme as the active guide specifies. Test contrast in each theme and communicate states in text or icons. Additional tints and colour preferences can be tried individually. [WCAG contrast](https://www.w3.org/TR/WCAG22/#contrast-minimum) |
| Lesson length and timing | Gemini suggests 5–15 minutes and also asks for individual confirmation. ChatGPT and Claude leave duration and breaks to the learner. The repository already documents approximate durations for each profile. | Use the existing profiles, allow stopping and resuming, and keep practice untimed. Actual school assessments may have separate timing rules. |
| Read-aloud, languages and highlighting | Claude asks for on-demand audio, highlighting and language tags. Gemini adds speed presets and a highlighting toggle. ChatGPT conditions quiz read-aloud on the assessment goal and the learner’s accommodations. | Use user-started audio during teaching, keep written text visible, mark language changes, and preserve the exact question. For independent work, follow the applicable school rule, especially when reading itself is assessed. Voice, speed and highlighting preferences need individual evidence. |
| Themes, rewards and illustration | Gemini proposes awarding a crafting token for each completed card or item. Claude recommends predictable reinforcement with reward screens between sections. ChatGPT makes theme intensity and reward type replaceable. | Keep the lesson understandable without game knowledge. Tie rewards to a defined learning action and keep the independent score intact. Use a picture when it teaches a relationship. A per-item token bar needs its own trial. |
| Error feedback and independent scores | Claude gives the answer, a reason and a route back to the lesson. Gemini proposes disabling an incorrect MCQ option and giving a worked answer immediately for True/False. ChatGPT favors a useful cue and retry during practice. | During guided work, use calm feedback and preserve the first attempt. During independent checks, record that attempt before revealing help. Any later supported answer is a retry. |
| Question format and sequence | Gemini favors a short quiz beside each concept, positive stems, and usually three choices. Claude allows a necessary **NOT/EXCEPT** in bold capitals, while ChatGPT allows an exception when it is the learning objective. General test-writing sources differ on three or four options. | Keep the source booklet’s scope and order. Guided checks may follow a concept. Use a separate independent check with the school’s option count and one supported answer. Keep True/False to a single fact and remove double negatives and “all/none of the above.” |
| Printed inclusion exam versus the practice site | The reports describe Egyptian objective papers with different levels of detail. The Ministry’s primary maths specification also lists simple completion and matching alongside MCQ and True/False. A prescribed paper format alone cannot establish a website-wide font or layout. | The project’s scored pages use the requested **MCQ and True/False** formats. Matching can remain a guided activity. Document any conversion in the source map. [Ministry primary mathematics paper specification](https://moe.gov.eg/media/viajrb3x/math.pdf) |
| Visible reference material | Gemini suggests exposing formulas, definitions or diagrams alongside checks. The pipeline requires questions to avoid leaking their own answers. | Show relevant support during teaching and guided practice. On an independent question, inspect each visible aid for whether it gives away the answer being tested. |
| Book wording versus answer certainty | The older authoring instructions emphasize exact wording and `Q.open` when no key is written. The pinned pipeline explicitly permits a worked-out answer based on the book and conversion to the required response format. | Preserve the original wording in provenance. Score an official key or a uniquely supported deduction with file/page and reasoning. Send unresolved or ambiguous items to parent check. [Authoring guide](../docs/authoring.md) · [Pinned rule for keys](../.claude/skills/study-page-pipeline/SKILL.md) |

Gemini’s figure combines reaction times and standardized effects from different populations. Its metaphor figures, 985 ms versus 198 ms, came from an **adult** study first published online in 2024 and printed in 2026. The outcome was extra time for metaphorical versus literal sentences. Claude separately reports a pooled figurative-language comprehension effect of *g* = −0.57. Neither measure establishes an interface response time or an effect in this particular learner. [Original adult study](https://link.springer.com/article/10.1007/s10803-024-06562-5) · [Gemini figure](research/gemini-evidence-figure.png) · [Research comparison](research/README.md)

## Coverage of all three checklists

This table maps every source check to a practical review topic. Identifiers are local to each report: for example, ChatGPT L1 and Gemini L1 describe different checks. The **169 source entries** overlap, and mapped entries remain untested on a given lesson until someone exercises that lesson. The active Grade 6 review still uses Claude’s checklist. [ChatGPT checklist](research/chatgpt-study-page-design.md#combined-page-review-checklist) · [Gemini checklist](research/gemini-study-page-design.md#combined-yesno-page-review-checklist) · [Claude checklist](../docs/design/murad-design-guide.md#combined-page-review-checklist-every-yes--pass)

| Review topic and what to check | ChatGPT · 42 | Gemini · 51 | Claude · 76 |
| --- | --- | --- | --- |
| Navigation and type. Keep the goal, current step, headings and controls predictable. Check typography, resizing and explicit labels. | L1–L4 | L1–L5 | 1–5, 76 |
| Language. Teach terminology in short, literal steps. Preserve exact curriculum vocabulary and clarify unfamiliar terms. | G1–G3 | LG1–LG5 | 6–9, 66 |
| Instructional visuals. Put a relevant diagram close to its explanation, label it, supply a text alternative and remove decorative distractions. | V1–V3 | V1–V5 | 10–13, 75 |
| Colour. Verify contrast, a second cue for each state and a usable theme choice. | C1–C3, D6 | C1–C4 | 14–17, 65, 69 |
| Sound and movement. Start quiet, let the learner control playback and motion, and test that controls respond once per activation. | M1–M3 | MS1–MS4 | 18–21, 63–64 |
| Feedback. Try correct, wrong, assisted and retried answers. Check the first-attempt record, feedback position and review path. | F1–F3, D5 | FB1–FB4 | 22–26, 68 |
| Motivation. Keep the optional theme relevant, rewards predictable and the scoring independent of game knowledge. | R1–R3, D3 | RW1–RW4 | 27–30 |
| Read-aloud. Verify learner control, visible text, pronunciation, language changes and assessment permissions. | A1–A2 | RA1–RA4 | 31–35 |
| Pacing. Verify the roadmap, absence of forced time pressure, a break point and accurate resume. | B1–B2, D2 | SL1–SL4 | 36–39, 67 |
| Questions. Check positive stems, one keyed answer, credible distractors, one idea per True/False item and consistent selection/submission. Record unavoidable exceptions. | Q1–Q4, T1–T3 | Q1–Q7 | 40–51, 70–74 |
| Cognitive load. Keep one primary task visible. Put essential reference material within reach and protect the answer on independent items. | O1–O3 | OV1–OV4 | 52–55 |
| Bilingual and right-to-left behavior. Check document and passage language, reading order and the language required for the subject. | Individual-decision section | Team-review section | 56–58 |
| Keyboard, pointer and screen reader. Reach each control, see focus, select with the keyboard and hear an accurate accessible name. | Covered indirectly | L6 | 59–61 |
| Evidence and individual needs. Document preferences, avoid learning-style labels and keep unsupported treatment claims out of lesson design. | D1, D4 | Practices-to-avoid section | 62 |

## What remains open

| Open question | Evidence that would close it |
| --- | --- |
| Does the repaired controller complete a three-provider task? | A live run with Claude participating, actual role/model receipts, a matching reviewed manifest and a deterministic artifact check. |
| Which coordinator and effort perform best? | The same three tasks and weighted rubric for each finalist, with calls, permissions, failures and elapsed time. A ranked result must identify whether the difference came from the model, CLI or framework. |
| Which free specialists deserve pins by task? | A dated free-route inventory and comparable extraction, explanation, HTML and review cases. Record first-try response, correctness, model returned and failure reason. Configuration and a single “OK” response alone cannot supply those scores. |
| Can the source intake feed the author reliably? | A full scoped two-learner Toddle run and, independently, a user-started browser packet handed to the controller with an attachment and a verified source page. |
| Which design choices work on a real lesson? | A dated source map, item audit, both viewport interactions, independent accessibility review and observed results for disputed choices. Record the applicable school format and individual settings alongside the commit and publication status. |

The source reports, skill register and run records have been reconciled here. The experiments and learner-specific decisions above still require their own evidence.
