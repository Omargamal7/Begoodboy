# Murad Grade 6 English: Grammar Blocks for the November test (26/11/2026)

Built 21 November 2026 with `.claude/skills/study-page-pipeline` (first full pipeline run). Page: [grammar-blocks.html](../../../../murad/english/assessments/2026-11-26-grammar-test/grammar-blocks.html).

## Scope

The school's revision list for the Primary 6 English A Level November test on 26/11/2026 (published on Toddle 18 Nov 2026, photo supplied by the parent) lists these grammar pages: Present Simple p. 10–13, Present Continuous p. 14–16, If Conditional Type 0 p. 26, Type 1 p. 27, Stative Verbs p. 28, Will + Be Going to p. 31, plus a "Revision sheet".

Pages 29 and 30 are included because the stative-verbs lesson that starts on p. 28 continues there (exercises C and D on p. 29, homework on p. 30). The list names p. 28 only, so these two parts are extra practice for the same lesson.

**Not covered:** the grammar "Revision sheet" (not in this repository), the reading section (Wonders Nonfiction Booklet p. 5–9 and 16–28) and argumentative writing.

## Sources

| Role | File | Pages |
|---|---|---|
| Book (rules and questions) | `murad/english/sources/booklets/Gr. 6 Grammar and Sentence Structure 2026-2027.pdf` | printed 10–16 and 26–31 (PDF page = printed page + 4) |
| Answers | `murad/english/sources/model-answers/Gr. 6 Grammar and Sentence Structure 2026-2027-- Model Answers- up to p. 33.pdf` | same numbering; covers every page used |

Every rule card quotes or closely shortens the book's own rule box on the cited page. Example sentences are the book's.

## How the answers were checked

- `python3 -I tools/check/grammar-blocks-key.py` fills each question's blanks with the page's answer, removes the key's "(verb)" hints and finds the filled sentence on the matching model-answer page: **148 items found, problems: 0**. A mutation test (three answers changed to wrong forms) made it report all three.
- p. 28 exercise A shows the answers only in red on the key page, so those five items (p28-A1 to A5) were checked by eye on the rendered page image: 1a, 2a, 3b, 4a, 5a.
- Wrong choices are other forms of the same verb (missing "s", wrong "be", missing "ing", wrong helping verb). Where the book's context could also allow the other tense, the wrong choices are form errors only, so each item has exactly one correct choice under the book's rules.

## Parent check (shown, not scored)

- **p31-12** "It's very late. We ___ miss the bus!" The model answer says "will". The book's rule on p. 31 says predictions based on evidence use "be going to". Ask the teacher which answer the test expects.

## Changes to the book's question types

- Fill-in "Correct the verbs between brackets" items became 3-choice items. Two-blank items show both parts in one choice, e.g. "do … leave".
- p. 26 B (open answers) and p. 27 B (join two clauses) became 3-choice items built from the model answer. One wrong choice on p. 27 B puts a comma before "if", which the book's rule on p. 27 forbids.
- p. 28 A keeps the book's own two choices. p. 28 B ("Correct the mistakes") became 2-choice items (corrected vs. original). B4, whose key is "No mistake", became True/False.
- Passage pages (p. 16, p. 29 D, p. 30 B) became one question per blank. Some questions repeat the passage's sentence before the blank, with earlier blanks filled from the key, so the time words stay visible.

## Checks

- `python3 -I tools/grammar-blocks/build.py`, then `CHROMIUM=/usr/bin/google-chrome NODE_PATH=.claude/skills/playwright-skill/node_modules node tools/check/grammar-blocks.js`: 154 items (153 scored, 1 parent check). It checked option count, one correct answer, no answer leaks, no "all/none of the above" and the True/False wording. In headless Chrome at 390×844 and 820×1180, a full run (`FULL=1`) walked every part and every question before the last change (a Read button on the feedback box). After that change, the default run walked parts 1 and 12. It tried one wrong answer per part, then retried and reloaded mid-part, and checked the review score, the theme switch kept after reload, and the page working with browser storage blocked. Result: no console errors, no network requests, no sideways scroll, **problems: 0**.
- Colour contrast (WCAG 1.4.3) of every text/background pair in both themes: lowest 5.92:1 (light theme, "Correct" text on its green box).

## Design guide checklist (`docs/design/murad-design-guide.md`)

Passed: 1–7, 10–20, 22–25, 28, 29, 31, 33, 36–38, 42–45, 47–55, 59–76.

| # | Result | Note or fix |
|---|---|---|
| 8 | Partly | "Stative" and "dynamic" are defined on the rule card as the book defines them. The book uses "CVC" (p. 14) without defining it; a parent should explain it. |
| 9, 46 | Open | Needs a second adult reader. |
| 26 | Partly | The answer list appears at the end of each part, not before it. |
| 27, 30, 39 | Open | The block theme is limited to the frame and the reward strip, using the Minecraft interest from `docs/authoring.md`. The inclusion team has not confirmed the theme or the session length. Parts are 8–22 questions, and he can stop after any question. |
| 32 | Partly | The question or choice being read is outlined. Word-by-word highlighting is not built. |
| 34, 56–58 | Not applicable | The page is English only, as his profile says. |
| 35 | Partly | Speed (normal or slow) and Stop controls. The device's English voice is used. There is no voice picker. |
| 21 | Not applicable | Nothing on the page moves; the page also follows the device's reduce-motion setting. |
| 40 | Open | Multiple choice and True/False only. Whether this matches the school's paper layout is not known. |
| 41 | Partly | 3 choices everywhere except p. 28, which keeps the book's own 2 choices. |
| 71 | Kept as in the book | Negative verb forms (doesn't, isn't, "not/be") are the grammar being taught, so the book's wording stays. |

`tools/readaloud/add-readaloud.py` was not used. It adds an Arabic button label, and Murad's profile says no Arabic labels. The page has its own "Read" buttons for the rule, the question and each choice. It loads no web fonts, so it works fully offline.

## Answer key, item by item

| Item | Book page | Answer | Status | Converted from |
|---|---:|---|---|---|
| p11-1 | 11 | goes | school key | fill-in → 3 choices |
| p11-2 | 11 | is | school key | fill-in → 3 choices |
| p11-3 | 11 | rises | school key | fill-in → 3 choices |
| p11-4 | 11 | study | school key | fill-in → 3 choices |
| p11-5 | 11 | flows | school key | fill-in → 3 choices |
| p11-6 | 11 | has | school key | fill-in → 3 choices |
| p11-7 | 11 | washes | school key | fill-in → 3 choices |
| p11-8 | 11 | collect | school key | fill-in → 3 choices |
| p11-9 | 11 | erupts | school key | fill-in → 3 choices |
| p11-10 | 11 | has | school key | fill-in → 3 choices |
| p11-11 | 11 | moves | school key | fill-in → 3 choices |
| p11-12 | 11 | fixes | school key | fill-in → 3 choices |
| p11-13 | 11 | boils | school key | fill-in → 3 choices |
| p11-14 | 11 | travel | school key | fill-in → 3 choices |
| p11-15 | 11 | write | school key | fill-in → 3 choices |
| p12-1 | 12 | doesn't usually go | school key | fill-in → 3 choices |
| p12-2 | 12 | isn't | school key | fill-in → 3 choices |
| p12-3 | 12 | doesn't rise | school key | fill-in → 3 choices |
| p12-4 | 12 | doesn't have | school key | fill-in → 3 choices |
| p12-5 | 12 | doesn't wash | school key | fill-in → 3 choices |
| p12-6 | 12 | don't open | school key | fill-in → 3 choices |
| p12-7 | 12 | doesn't have | school key | fill-in → 3 choices |
| p12-8 | 12 | doesn't move | school key | fill-in → 3 choices |
| p12-9 | 12 | don't play | school key | fill-in → 3 choices |
| p12-10 | 12 | doesn't watch | school key | fill-in → 3 choices |
| p12-11 | 12 | doesn't live | school key | fill-in → 3 choices |
| p12-12 | 12 | don't fly | school key | fill-in → 3 choices |
| p13-1 | 13 | does Tammy go | school key | fill-in → 3 choices |
| p13-2 | 13 | Is | school key | fill-in → 3 choices |
| p13-3 | 13 | does Lina live | school key | fill-in → 3 choices |
| p13-4 | 13 | Does John play | school key | fill-in → 3 choices |
| p13-5 | 13 | do … leave | school key | fill-in → 3 choices |
| p13-6 | 13 | Do … study | school key | fill-in → 3 choices |
| p13-7 | 13 | does … arrive | school key | fill-in → 3 choices |
| p13-8 | 13 | Does your sister like | school key | fill-in → 3 choices |
| p13-9 | 13 | do … visit | school key | fill-in → 3 choices |
| p13-10 | 13 | Does … teach | school key | fill-in → 3 choices |
| p13-11 | 13 | do the shops open | school key | fill-in → 3 choices |
| p13-12 | 13 | Does … sleep | school key | fill-in → 3 choices |
| p14-1 | 14 | am doing | school key | fill-in → 3 choices |
| p14-2 | 14 | are playing | school key | fill-in → 3 choices |
| p14-3 | 14 | is studying | school key | fill-in → 3 choices |
| p14-4 | 14 | are making | school key | fill-in → 3 choices |
| p14-5 | 14 | is sleeping | school key | fill-in → 3 choices |
| p14-6 | 14 | isn't paying attention | school key | fill-in → 3 choices |
| p14-7 | 14 | are you crying | school key | fill-in → 3 choices |
| p14-8 | 14 | are coming | school key | fill-in → 3 choices |
| p14-9 | 14 | are writing | school key | fill-in → 3 choices |
| p14-10 | 14 | is raining | school key | fill-in → 3 choices |
| p15-1 | 15 | Are … watching | school key | fill-in → 3 choices |
| p15-2 | 15 | isn't doing | school key | fill-in → 3 choices |
| p15-3 | 15 | Is … travelling | school key | fill-in → 3 choices |
| p15-4 | 15 | isn't getting | school key | fill-in → 3 choices |
| p15-5 | 15 | Are … meeting | school key | fill-in → 3 choices |
| p15-6 | 15 | aren't staying | school key | fill-in → 3 choices |
| p15-7 | 15 | Is … becoming | school key | fill-in → 3 choices |
| p15-8 | 15 | am not using | school key | fill-in → 3 choices |
| p15-9 | 15 | Is … taking | school key | fill-in → 3 choices |
| p15-10 | 15 | aren't improving | school key | fill-in → 3 choices |
| p16-1 | 16 | visit | school key | fill-in → 3 choices |
| p16-2 | 16 | plants | school key | fill-in → 3 choices |
| p16-3 | 16 | waters | school key | fill-in → 3 choices |
| p16-4 | 16 | pulls | school key | fill-in → 3 choices |
| p16-5 | 16 | enjoys | school key | fill-in → 3 choices |
| p16-6 | 16 | grow | school key | fill-in → 3 choices |
| p16-7 | 16 | are planting | school key | fill-in → 3 choices |
| p16-8 | 16 | is watering | school key | fill-in → 3 choices |
| p16-9 | 16 | is picking | school key | fill-in → 3 choices |
| p16-10 | 16 | are singing | school key | fill-in → 3 choices |
| p16-11 | 16 | is working | school key | fill-in → 3 choices |
| p16-12 | 16 | enjoy | school key | fill-in → 3 choices |
| p16-13 | 16 | is | school key | fill-in → 3 choices |
| p26-A1 | 26 | touch … burns | school key | fill-in → 3 choices |
| p26-A2 | 26 | mix … get | school key | fill-in → 3 choices |
| p26-A3 | 26 | rains … gets | school key | fill-in → 3 choices |
| p26-A4 | 26 | sets … becomes | school key | fill-in → 3 choices |
| p26-B1 | 26 | If you drink too much water, you feel sick. | school key | open answer → 3 choices |
| p26-B2 | 26 | If you drop a glass vase, it breaks. | school key | open answer → 3 choices |
| p26-B3 | 26 | If you don't water plants, they die. | school key | open answer → 3 choices |
| p26-B4 | 26 | If you heat ice, it melts. | school key | open answer → 3 choices |
| p27-A1 | 27 | study … will pass | school key | fill-in → 3 choices |
| p27-A2 | 27 | will feel … eat | school key | fill-in → 3 choices |
| p27-A3 | 27 | calls … will answer | school key | fill-in → 3 choices |
| p27-A4 | 27 | will see … go | school key | fill-in → 3 choices |
| p27-A5 | 27 | read … will understand | school key | fill-in → 3 choices |
| p27-B1 | 27 | If you work nonstop, you will eventually burn out. | school key | join sentences → 3 choices |
| p27-B2 | 27 | If he hurries, he will catch the train. | school key | join sentences → 3 choices |
| p27-B3 | 27 | If they forget their lunch, they will buy food at school. | school key | join sentences → 3 choices |
| p27-B4 | 27 | If she goes to work late, she won't attend the meeting. | school key | join sentences → 3 choices |
| p28-A1 | 28 | The flower smells nice. | school key, checked on the key page image | book's own 2 choices |
| p28-A2 | 28 | I am having pizza for dinner tonight. | school key, checked on the key page image | book's own 2 choices |
| p28-A3 | 28 | I see a bird on the tree branch. | school key, checked on the key page image | book's own 2 choices |
| p28-A4 | 28 | I believe that fresh juice is better than fizzy drinks. | school key, checked on the key page image | book's own 2 choices |
| p28-A5 | 28 | They are seeing their best friends at the pizza shop after work. | school key, checked on the key page image | book's own 2 choices |
| p28-B1 | 28 | I think she's a good person. | school key | 2 choices: corrected vs original sentence |
| p28-B2 | 28 | Mum always makes excellent mushroom soup. It tastes amazing. | school key | 2 choices: corrected vs original sentence |
| p28-B3 | 28 | I seriously doubt it. | school key | 2 choices: corrected vs original sentence |
| p28-B4 | 28 | True | school key | True/False from "Correct the mistakes" |
| p28-B5 | 28 | I love this new book you gave me. | school key | 2 choices: corrected vs original sentence |
| p29-C1 | 29 | are having | school key | fill-in → 3 choices |
| p29-C2 | 29 | are | school key | fill-in → 3 choices |
| p29-C3 | 29 | is appearing | school key | fill-in → 3 choices |
| p29-C4 | 29 | are thinking | school key | fill-in → 3 choices |
| p29-C5 | 29 | Do … see | school key | fill-in → 3 choices |
| p29-C6 | 29 | am seeing | school key | fill-in → 3 choices |
| p29-C7 | 29 | do … have | school key | fill-in → 3 choices |
| p29-C8 | 29 | think | school key | fill-in → 3 choices |
| p29-C9 | 29 | appears | school key | fill-in → 3 choices |
| p29-C10 | 29 | is being | school key | fill-in → 3 choices |
| p29-D1 | 29 | visit | school key | fill-in → 3 choices |
| p29-D2 | 29 | is watching | school key | fill-in → 3 choices |
| p29-D3 | 29 | doesn't like | school key | fill-in → 3 choices |
| p29-D4 | 29 | are talking | school key | fill-in → 3 choices |
| p29-D5 | 29 | is playing | school key | fill-in → 3 choices |
| p29-D6 | 29 | is thinking | school key | fill-in → 3 choices |
| p29-D7 | 29 | prefers | school key | fill-in → 3 choices |
| p29-D8 | 29 | is tasting | school key | fill-in → 3 choices |
| p29-D9 | 29 | needs | school key | fill-in → 3 choices |
| p29-D10 | 29 | are waiting | school key | fill-in → 3 choices |
| p29-D11 | 29 | feel | school key | fill-in → 3 choices |
| p29-D12 | 29 | have | school key | fill-in → 3 choices |
| p30-A1 | 30 | am having | school key | fill-in → 3 choices |
| p30-A2 | 30 | tastes | school key | fill-in → 3 choices |
| p30-A3 | 30 | think | school key | fill-in → 3 choices |
| p30-A4 | 30 | looks | school key | fill-in → 3 choices |
| p30-A5 | 30 | is considering | school key | fill-in → 3 choices |
| p30-A6 | 30 | seems | school key | fill-in → 3 choices |
| p30-A7 | 30 | feel | school key | fill-in → 3 choices |
| p30-A8 | 30 | is | school key | fill-in → 3 choices |
| p30-A9 | 30 | see | school key | fill-in → 3 choices |
| p30-A10 | 30 | are … smelling | school key | fill-in → 3 choices |
| p30-B1 | 30 | go | school key | fill-in → 3 choices |
| p30-B2 | 30 | is riding | school key | fill-in → 3 choices |
| p30-B3 | 30 | don't want | school key | fill-in → 3 choices |
| p30-B4 | 30 | are sitting | school key | fill-in → 3 choices |
| p30-B5 | 30 | is running | school key | fill-in → 3 choices |
| p30-B6 | 30 | believes | school key | fill-in → 3 choices |
| p30-B7 | 30 | needs | school key | fill-in → 3 choices |
| p30-B8 | 30 | am smelling | school key | fill-in → 3 choices |
| p30-B9 | 30 | thinking | school key | fill-in → 3 choices |
| p30-B10 | 30 | enjoy | school key | fill-in → 3 choices |
| p30-B11 | 30 | are having | school key | fill-in → 3 choices |
| p31-1 | 31 | will | school key | fill-in → 3 choices |
| p31-2 | 31 | is going to | school key | fill-in → 3 choices |
| p31-3 | 31 | is going to | school key | fill-in → 3 choices |
| p31-4 | 31 | are going to | school key | fill-in → 3 choices |
| p31-5 | 31 | will | school key | fill-in → 3 choices |
| p31-6 | 31 | are going to | school key | fill-in → 3 choices |
| p31-7 | 31 | are going to | school key | fill-in → 3 choices |
| p31-8 | 31 | will | school key | fill-in → 3 choices |
| p31-9 | 31 | is going to | school key | fill-in → 3 choices |
| p31-10 | 31 | will | school key | fill-in → 3 choices |
| p31-11 | 31 | going to | school key | fill-in → 3 choices |
| p31-12 | 31 | will | parent check (not scored) | fill-in → 3 choices |
