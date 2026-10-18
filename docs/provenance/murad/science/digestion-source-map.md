# Murad: Chapter 3, lessons 3-1 and 3-2

Source: `murad-science-primary-6-first-term-binder.pdf` in the existing
`school-term1-2026` release, SHA-256
`25336920caa1d2c7e9fd2c65265dd2fd54f789909d39593bd550b5d878f4f999`.
Printed page numbers and PDF page numbers agree.

The school's notice of 12 October 2026 specifies pages 20-23 plus a separate
Toddle activity. That separate activity has not been retrieved.

## Coverage

| Lesson | Explanation pages | Exercise pages | Check items |
| --- | --- | --- | --- |
| 3-1: Digestion and How Does It Work? | 20-22 | 86-87 | 30 |
| 3-2: The Function of the Saliva | 23 | 88-89 | 19 |

Lesson 3-1 includes A1-A5, B1-B5, C1-C5, D1-D5, E1-E5 and F1-F5,
in that order. Lesson 3-2 includes Try 1(1), all four blanks in Try 1(2),
Exercise 1(1), 1(2), 2(1), 2(2), A1-A5 and B1-B5, in that order.
There are 49 answer steps for 46 source questions: the four-blank sentence
becomes four steps. There are 46 scored steps and three unscored steps.

The question stems retain the binder's wording. Underlined blanks are rendered
as five underscores. Line breaks, graphic numbering and typography are normalized.
For the written-answer items, tap choices are added as an accessibility support;
Murad says the answer first. Existing multiple-choice options, odd-one-out groups
and the page 88 word bank retain their source order. The source's wording
"What is the part of food from the mouth to the anus called?" is retained.

## Answer sources

| Check group | Supporting cards and source |
| --- | --- |
| 3-1 A, B, D and E | Digestion and organ functions: p. 20; locations: p. 21; cat/fish: p. 22 |
| 3-1 C | Digestive organs: pp. 20-22; solar power/photo of panels: p. 12; inhalation: p. 14; trachea/lungs/alveoli: p. 16; absorption definition: p. 24 |
| 3-1 F1, F2, F4, F5 | Nutrients/body use: p. 20; stomach/intestine teamwork: p. 21; water/waste: p. 20; same jobs in cat/fish: p. 22 |
| 3-2 Try and Exercise 1 | Digestion and digestive-system diagram: p. 20; saliva and simple food: p. 23; matching food-pipe word bank: p. 88 |
| 3-2 A and B | First digestion step, watery saliva, starch to simple sugar and digestive juices: p. 23 |

The small-intestine length statement on p. 86 is checked against the long,
coiled intestine described and pictured on p. 21. The odd-one-out checks use the
source's classifications and diagrams. No outside scientific facts are added.

## Questions shown without scoring

1. Page 87, F3: "The small intestine is long and coiled inside the abdomen."
   The binder describes the shape on p. 21 but does not explicitly give the
   requested reason for that shape.
2. Page 88, Exercise 2(1): "In the experiment to check the function of saliva,
   why do you warm the test tubes in hot water of about 40 degrees Celsius?
   Choose the correct answer from below."
3. Page 88, Exercise 2(2): "After mixing saliva and starch and warming it,
   did the color change when you added the iodine solution? Choose the correct
   answer from below."

The last two items refer to an investigation whose instructions and observations
are not explained in the binder. They retain the original choices but use
`Q.open` pending the separate Toddle activity or teacher confirmation.

## Borrowed material

- The final Lesson 3-1 vocabulary card uses pp. 12, 14 and 16 to teach the
  terms tested by the odd-one-out questions.
- The Lesson 3-1 intestine card adds the absorption definition from p. 24,
  also required by an odd-one-out question.
- The Lesson 3-2 food-path card uses the diagram and organ functions from p. 20.
- The food pipe/esophagus terminology follows the p. 20 diagram and p. 88
  exercise sequence, which describe the same mouth-to-stomach tube.

## Interaction and deliverables

The existing engine, rewards and spoken-answer support are reused. Each lesson
has Learn, Do, and two shorter check sittings, with a reward after each sitting.
Diagrams are crops from the source pages, with text alternatives. The shared
engine adds optional diagram display and highlights the active blank in the
four-blank sentence; other lessons keep their usual flow.

`packs/murad/science/digestion.html` contains all code, styles and diagram images in
one offline file. Rebuild with `node tools/build/digestion.js`.
The usual repository menu also loads `app/lessons/murad/science/chapter-03.js`.

Validation: `node --check lessons/murad-science-t3.js`, the repository's complete
`node tools/check/lessons.js`, and `node tools/check/digestion.js` for phone/tablet/laptop
widths, source-image loading, the active blank and offline requests.
