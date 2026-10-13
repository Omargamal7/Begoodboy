# Jimmy · Climate Quest · quiz on 14 October 2026

Scope comes from the four school photographs supplied on 13 October 2026, not from the earlier coordinates reference lesson. Models A, B and C contain **15 question parts**: two parts of question 1 and questions 2–4 in each model. They are preserved in order in the speaking round. Choice options and phrase builders are added practice supports, not a claim that the school quiz will be multiple choice or oral.

## Supplied source pages

- `assets/jimmy-climate/school-page-1.jpg`: answer sheet, models A and B, printed page 14.
- `assets/jimmy-climate/school-page-2.jpg`: another answer sheet, models A and B and the beginning of C, printed page 13. Includes an answer that differs from the first sheet for B4.
- `assets/jimmy-climate/school-page-3.jpg`: question page, model C.
- `assets/jimmy-climate/school-page-4.jpg`: question page, models A and B.

Original photographs are embedded in the standalone file. The season pictures shown in the school-question round are viewport crops of the supplied question photographs, without altering their pixels.

| App ID | School item | Answer source |
|---|---|---|
| a1 | A1(a), winter | Both supplied answer sheets |
| a2 | A1(b), 21 December | Both supplied answer sheets |
| a3 | A2, weather definition | Both sheets; fuller day/week/month wording on sheet 1 |
| a4 | A3, winter snow on Saint Catherine | Both sheets: reduced temperature at higher altitude |
| a5 | A4, Earth stops spinning | Both sheets: no alternation of day and night; school model |
| b1 | B1(a), summer | Both sheets |
| b2 | B1(b), 21 June | Both sheets |
| b3 | B2, climate definition | Both sheets; season/year wording on sheet 1 |
| b4 | B3, varying climate in Egypt | Both sheets: location, water proximity and landforms |
| b5 | B4, all land flat | Sheet 1 landforms/climate answer; conflicting sheet 2 answer retained only in parent notes |
| c1 | C1(a), spring | Sheet 2 |
| c2 | C1(b), 21 March | Sheet 2 |
| c3 | C2, climatic region | Supplement: Ministry reference printed page 26 |
| c4 | C3, most of Egypt in hot desert | Supplement: Ministry reference printed page 23 |
| c5 | C4, Sun over Cancer on 21 March | **Unscored**; teacher answer not supplied. Reasoning is explicitly an inference from Ministry reference printed page 24. |

The Ministry reference was retrieved earlier in this session from:
https://elearnningcontent.blob.core.windows.net/elearnningcontent/2026/Primary/Primary5/Term1/StudentBook/Social_prim5_T1.pdf

Its printed edition is **2025–26**; its upload path is not evidence that it is the school's current 2026–27 booklet. PDF page 2 verifies the edition. SHA-256: `d2712bc7be89d5a70f5dfd0b62bc1025504be36fc874ff8949e9835fe202b580`.

Printed pages 22–27 (PDF 23–28) teach weather/climate, climate factors, dates, season characteristics and climatic regions. Printed page 24 (PDF 25) was visually verified for 21 December, 21 June and 21 March and the Sun at Cancer in summer. Printed page 26 (PDF 27) was visually verified for the climatic-region definition. No extra lesson questions or additional season dates were added to this quiz pack.

## Source differences and marking

For B4, sheet 1 says: «سيؤدي إلى عدم تنوع مظاهر السطح وبالتالي يتأثر مناخها بمظاهر السطح». Sheet 2 instead says: «زادت التربة الخصبة — زاد الإنتاج الزراعي». The game uses the landform/climate concept, and the parent's guide retains both original answers. It does not score the agricultural claim as a geographical fact. The short memory anchor «عدم تنوع مظاهر السطح» is not promised to earn full marks. Other climate factors would still exist if all land were flat.

For C4, the teacher's hypothetical answer is missing. The reasoning «يبدأ الصيف يوم ٢١ مارس بدلًا من ٢١ يونيو» follows the book's link between Cancer and summer, but is labelled an inference and never automatically scored. The **actual book date stays 21 June**. This avoids teaching 21 March as a normal summer date.

Tap practice scores recognition only. The final round hides answers until a parent reveals them after Jimmy speaks. Parent ratings record recall, not automatically measured speech accuracy or writing ability. All 15 parts are shown, including the unscored hypothetical. Two missing answers supported by the Ministry book are labelled supplementary.

## Visuals and learning method

Three season dioramas were generated with the built-in image-generation tool for this project: rain/umbrella, beach/sun, green trees/flowers. They are mnemonic illustrations, not maps or the original exam pictures. The full prompt was: a wide, three-panel toy-block illustration with these three distinct scenes, plain separators, no text, numbers, maps, dates, logos or watermarks. The generated PNG is retained at its generation path; a format-converted WebP is used by the app.

The other diagrams are deterministic SVG: short versus long calendars, matching climatic characteristics, temperature and altitude, the three climate factors, day/night in the school model, flat versus varied terrain, a location/desert concept, and real versus imagined Cancer dates. They have no invented numeric temperature scales or geographical boundaries.

Practice moves from picture recognition with English/approximate pronunciation clues, to Arabic phrase building, to spoken recall without answer choices. Missed tap answers return after the remaining questions; a last-question retry may be immediate. Parent-flagged recall questions can be repeated as their own round. Progress uses browser storage when available. No forced sound, motion, microphone, external fonts, login or network requests are needed.

## Build and verification

`node tools/build-climate-quiz.js` produces `jimmy-climate-quest.html` with the data, CSS, JavaScript, artwork and all four original school pages embedded. The app sources live under `assets/jimmy-climate/`, the content under `lessons/jimmy-climate-quiz-data.js`, and the browser check in `tools/check-climate-quiz.js`.

The shared sheet engine and previously delivered science and coordinates lessons are not changed. Work is committed directly to main as requested by the parent.

Verification passed on 13 October 2026: 360, 412, 768 and 1280 pixel widths; every card, interactive diagram control, phrase builder and question part; wrong-answer retry; parent-marked targeted recall; storage persistence and denied-storage fallback; all four embedded sources; English clue removal; no horizontal overflow, JavaScript errors or external runtime requests. Phone screenshots were visually inspected, including the revised original-picture crop. Final code verification: GitHub Actions run `38441622214`, job `115449372255`, commit `4bf682a681dc262a9ecc961de70d542da511213b`.
