# Jimmy · Science · Chapter 2 assessment revision

The parent supplied five answer screenshots on 14 October 2026 and requested Chapter 2 preparation. The complete Chapter 2 booklet was **not found** in Jimmy's (`gamal`) source folders in `Omargamal7/Begoodboy` at main commit `0347cf2e40db86e149a2bd726353130c55737401`. Murad's Science Chapter 2 covers different material and is not used here.

This focused pack covers all **15 supplied assessment questions**, with six explanation cards, six newly drawn concept diagrams, three activities and the three original five-question tests. It is not presented as coverage of unseen pages from the full chapter. English is used for Jimmy's Science preparation.

## Source files

The screenshots are saved unchanged under `assets/jimmy-science-ch2/` and embedded in the standalone HTML:

1. `source-1.jpg` = `2a5ec3c1-e0cd-4a91-890d-ec5bc3cae176.jpeg`: Test 1 questions 4–5 and the beginning of Test 2.
2. `source-2.jpg` = `dd558548-3b88-4ed9-8dad-729be1078807.jpeg`: Test 1 questions 1–3, printed page 14.
3. `source-3.jpg` = `ba905db7-bbf6-47a3-a6bb-d7c4df5feef1.jpeg`: all five Test 2 questions.
4. `source-4.jpg` = `b42f65b4-184e-4fff-bbe3-9a223d239ac0.jpeg`: Test 3 questions 4–5.
5. `source-5.jpg` = `fd925ed6-1331-4063-bab7-5d076f873b47.jpeg`: Test 3 questions 1–3, printed page 15.

| School item | Answer and explanation card | Source |
|---|---|---|
| Test 1 Q1 | Hibernation; `hibernation` | source 2 |
| Test 1 Q2 | A plant's yearly cycle; `cycle` | source 2 |
| Test 1 Q3 | Cold causes luffa leaves to wither and fruit to dry; `cold-plants` | source 2 |
| Test 1 Q4 | Lizards exposed to direct sunlight and lose rock cracks for hiding; `shelter` | source 1 |
| Test 1 Q5 | Seeds remain dormant and safe until warmth returns next spring; `seeds` | source 1 |
| Test 2 Q1 | Seeds inside the luffa fruit; `seeds` | sources 1 and 3 |
| Test 2 Q2 | Temperature; `temperature` | sources 1 and 3 |
| Test 2 Q3 | Conserve energy and avoid low temperature until weather improves; `hibernation` | sources 1 and 3 |
| Test 2 Q4 | Tomato activity/growth decreases; may wither and die in winter; `cold-plants` | source 3 |
| Test 2 Q5 | Warm temperatures for summer-plant germination/growth; `temperature` | source 3; the warm correction is also visible at the top of source 5 |
| Test 3 Q1 | A plant's yearly cycle; `cycle` | source 5 |
| Test 3 Q2 | Hibernation; `hibernation` | source 5 |
| Test 3 Q3 | Warm weather increases plant activity and growth; `temperature` | source 5 |
| Test 3 Q4 | Migrate to warmer places with food and water; `shelter` | source 4 |
| Test 3 Q5 | Warm seasons: grow/flower; cold seasons: leaves may wilt and fruit may dry; `cold-plants` | source 4 |

All 15 answers are supplied, so there are no unanswered teacher-check questions. Original question wording is retained, including grammatical irregularities; dotted blanks are normalised to `_____`. Answers have minor punctuation/capitalisation cleanup and bold key words. For Test 2 Q5, the red replacement word **warm** is written into the full corrected sentence.

## Interpretation and practice

The word **hibernation** follows this school's answer key for winter dormancy. No extra animal classification is taught. The plant cards describe the seasonal luffa and tomato examples, without generalising their behaviour to every plant. Illustrations show only concepts supported by the answer text; there are no invented dates, temperatures, migration routes or geographic locations.

The cycle activity begins with warm-season growth, then cold-season withering/drying, dormant seeds and warmth returning. This sequence is assembled from the supplied answer statements and labelled as a picture reminder, not an additional unseen book diagram.

Each original test is a separate sitting. Jimmy speaks before a parent reveals and compares the model answer. Parent-confirmed scores are not automatic speech or handwriting assessment. Incorrect or incomplete recall returns to the relevant explanation card. A parent can then help Jimmy practise any writing required by school.

`jimmy-science-chapter-02.html` embeds the engine, styles, lesson data, six SVG diagrams and all five original screenshots. It needs no internet or installation. Rebuild with `node tools/build-jimmy-science-ch2.js`.

The shared engine has two copy-only corrections: the source-page label now says “school pages” and the recall prompt says “spoken answer” instead of hard-coding Murad's name. The full lesson regression check is required for that shared change. Work is committed directly to main as the parent requested; no new branch or PR is used.
