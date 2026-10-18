# Reusable prompt: interactive lesson sheets for Murad and Jimmy

Use this to turn any school booklet (any subject) into interactive sheets, with any model, without re-planning.

**How to use it**

1. Read [the repository structure](structure.md), then start a session that has this repository (`Omargamal7/Begoodboy`). If the model cannot use the repository, it still works: the model returns one file, and you add it yourself (see "No repository access" at the end).
2. Attach the booklet (Word or PDF).
3. Copy everything inside the box below, fill in the three lines marked **FILL IN**, and send it.

---

```text
You are building interactive lesson sheets from a school booklet, for one of two brothers.
Everything you need is in this prompt and in the repository. Do not re-plan, do not redesign,
do not ask about design. Follow the steps exactly.

FILL IN: CHILD = Murad | Jimmy
FILL IN: SUBJECT = (for example: Science, Maths, English, Arabic)
FILL IN: BOOKLET = (the attached file name)

==================================================================
1. THE GOAL
==================================================================
Rewrite every lesson in the booklet as one interactive sheet that is easy and interesting for
the child, and that prepares him for the school's homework and test, which use the booklet's
own questions. Every lesson in the booklet gets a sheet. Nothing is printed: the sheets are web
pages that run in a browser on an Android tablet or a Linux laptop.

THE ONE RULE ABOVE ALL: zero guessing. Every fact on a card and every answer in a check must be
written in the booklet (text or pictures). If a booklet question's answer is not written in the
booklet, you must not invent it: mark it with Q.open (it is shown, not scored, and the parent is
told to check it with the teacher). Never add facts from your own knowledge. Plain everyday
example sentences are allowed only in practice activities, never as lesson facts.

==================================================================
2. THE TWO CHILDREN (from the parent's own answers; do not change)
==================================================================
MURAD: Primary 6, age 11, autistic. Interests: Minecraft and Roblox. Answers best by speaking.
Reads English sentences alone; English is his mother tongue; no Arabic labels. No known sensory
sensitivities. Reward: Minecraft or Roblox time, or a favourite snack or drink. One sitting is
about 10 minutes. A parent sits with him. Homework and a test use the booklet questions.

JIMMY: Primary 5, age 10, no diagnosis (the parent keeps the same supports as Murad anyway).
Interests: Minecraft, Roblox, football (Al Ahly and Real Madrid). Answers by speaking, writing or
on screen. Reads very well; English is his mother tongue. Reward: game or screen time. One
sitting is 15 to 20 minutes. A parent sits with him. Homework and a test use the booklet questions.

SHARED: devices are an Android tablet or phone and a MacBook Air running Linux, with NO Ethernet
port. Internet is allowed with a parent beside the child. The brothers work apart.
Every real-device step must ALSO have an on-screen version in the same sheet ("both directions").

==================================================================
3. DESIGN RULES (already built into the engine; your content must respect them)
==================================================================
Sources: National Autistic Society "Tips for effective communication with autistic pupils";
UK Home Office poster "Designing for users on the autistic spectrum"; NCAEP 2020 evidence-based
practices (visual supports, reinforcement, task analysis, prompting, self-management); Autism
Speaks/Vanderbilt visual supports toolkit (First-Then board); CAST UDL Guidelines 3.0.

Write content that follows these rules:
- One idea per card line. Short, literal, plain English (or plain Arabic). No idioms.
- Every key term is in **bold** on its card and has an icon.
- Say what TO do. Booklet rules written as "Don't…" are rewritten as "Do…" on the cards.
  The check questions keep the booklet's exact wording, including its "Don't…".
- The check never asks about a term that no fact card taught. If a booklet question tests
  something its own lesson does not explain, find it elsewhere in the same booklet and add a
  fact card for it (say where it came from in the lesson notes). If it is nowhere in the
  booklet, use Q.open.
- Teach the correct fact on a card before its false twin appears in a true/false question.
- Use the child's interests in examples where the booklet allows (practice sentences, file
  names, sort cards, the HTML page heading). Never turn an interest into a lesson fact.
- No sounds, no animations, no red crosses. The engine already handles this.

==================================================================
4. WHAT ALREADY EXISTS (do not rebuild it)
==================================================================
index.html            home page; lists every lesson; loads every lesson file with <script> tags
app/engine/sheet.js       the engine (schedule strip, First-Then box, cards, activities, checks)
app/engine/sheet.css      the look
app/engine/common.js    each child's settings and the helpers murad({...}), jimmy({...}), Q.*
app/lessons/murad/ict/theme-01.js   WORKED EXAMPLE: 6 finished ICT lessons for Murad. Copy its style.
app/lessons/gamal/ict/theme-01.js   WORKED EXAMPLE: 6 finished ICT lessons for Jimmy. Copy its style.
tools/check/lessons.js        automatic test: clicks through every sitting and reports problems

The helpers build the sittings for you:
- murad({...}) makes 3 sittings: Learn the words (fact cards), Do the activities, Answer the
  booklet questions. Each about 10 minutes.
- jimmy({...}) makes 2 sittings: Learn and do (fact cards + activities), Answer the binder
  questions. They can run back to back.
You only write content.

==================================================================
5. STEPS (do them in this order, all of them)
==================================================================
1. Read the whole booklet, including text inside pictures and tables. Extract the pictures
   from the file if needed (a .docx is a zip: word/media/*). List every lesson with its title,
   its facts, and every question exactly as written.
2. For every question, find its answer in the booklet. Write down where. If the answer is not
   written anywhere in the booklet, it becomes Q.open. True/false symbols in these booklets are
   a tick and a cross (Put ✓ or ✗).
3. Create ONE file per theme: app/lessons/<child>/<subject>/theme-<theme>.js
   (all lower case, no spaces; science chapters use chapter-01.js).
   Lesson ids: <child>-<subject>-t<theme>-l<lesson>, for example "murad-science-t1-l3".
   order: theme*10 + lesson (Theme 1 Lesson 3 = 13). Add subject: "<SUBJECT>" to every lesson.
   For a subject taught in Arabic, also add dir: "rtl" and write all text in Arabic.
4. For every lesson write: 3 to 6 fact cards, 2 or 3 activities (at least one on-screen sort,
   match or order; plus a real-device "steps" activity when the lesson has something to do on a
   device), and every booklet question as a check, in booklet order, exact wording.
5. Add one <script src="app/lessons/<child>/<subject>/<file>.js"></script> line per new file in index.html, after
   app/engine/common.js and before the line that calls SheetEngine.boot.
6. Run: node --check app/lessons/<child>/<subject>/<file>.js   then   node tools/check/lessons.js <child>-<subject>
   (first time only: npm install playwright, then npx playwright install chromium if no browser is found)
   It must end with "problems: 0" and print no "note:" lines. Fix every problem and run it again.
   If it says no lessons match, the file is missing from index.html or the ids do not match.
7. Open index.html in a browser at phone width and look at one sheet of each activity type.
8. Commit and push directly to main. Do not create a branch or pull request for this educational
   repository. In the commit or source notes, list every Q.open question and every fact card
   that came from a different lesson than the question.

==================================================================
6. LESSON FILE FORMAT (copy this shape exactly)
==================================================================
(function () {
  "use strict";
  var tf = Q.tf, mcq = Q.mcq, match = Q.match, word = Q.word;

  murad({                                   // or jimmy({ ... })
    id: "murad-science-t1-l1", order: 11, subject: "Science",
    where: "Theme 1 · Lesson 1", title: "Living Things",   // booklet's lesson title
    doLabel: "Sort and find",               // Murad only: name of sitting 2
    notes: ["Parent notes for this lesson, e.g. which questions are Q.open and why."],
    facts: [
      { id: "cells", term: "Cells", icon: "book",
        lines: ["All living things are made of **cells**.", "Second short line."],
        pick: { prompt: "Tap the picture for cells.", answer: 0,
                right: "Living things are made of **cells**.",
                options: [{ label: "Cells", icon: "book" }, { label: "Rock", icon: "cross" }] } }
    ],
    activities: [ /* see section 7 */ ],
    checks: [
      tf("Booklet statement, exact wording.", true, "cells", "It is true. Short reason from the card."),
      mcq("Booklet stem with the blank as _____ (five underscores).", ["a", "b", "c"], 1, "cells", "**b**."),
      word("Complete-the-sentence stem _____.", ["word1", "word2"], 0, "cells", "**word1**."),
      match("Match: the booklet's description.", ["Option A", "Option B"], 1, "cells", "**Option B**."),
      Q.open("tf", "A booklet statement whose answer is not in the booklet."),
      Q.open("mcq", "A booklet stem _____ with no answer in the booklet.", ["a", "b", "c"])
    ]
  });
})();

Field rules:
- tf(stem, true|false, factId, rightText). mcq/word/match(stem, options, indexOfAnswer, factId,
  rightText). The answer index starts at 0. factId is the card shown again after a wrong answer.
- Every fact needs a pick (a tap-the-picture check with 2 or 3 options).
- rightText starts with the reason, uses ** for bold, and never says "Wrong".
- For a booklet "Match" question with N items, write N match(...) questions that share one
  options list (see murad-t1.js Lesson 3).
- For "Complete from the words between brackets", use word(...) with the bracket words as the
  options, the same list for every sentence (see jimmy-t2.js Lesson 1).
- Never put a bold multiply sign (** * **) in text; write "the star sign ( * )".

Icons available (anything else falls back to a file icon):
internet modem router switch desktop tablet phone laptop printer wifi cable network ai vr ar
person magnifier ear speech glove copy search database library window robot car code tag game
snack body heart shield lock key fingerprint face virus mail link copyright coins chart cloud
folder file image video music upload share doc slides bits harddrive flash hdmi bluetooth home
cart wrench scanner grid hook warning note quote list tick cross camera plan book blocks
checkbox star surprise isp

==================================================================
7. ACTIVITY TYPES (pick what fits the lesson; examples are in the worked lesson files)
==================================================================
SORT (also used for MATCH and ORDER): cards go into boxes.
  { type: "sort", kind: "Sort" | "Match" | "Order", title: "...", intro: "optional",
    hint: "shown when a card goes in the wrong box", done: "shown when all are placed",
    boxes: [{ id: "a", label: "Box name", icon: "tick" }, ...],
    cards: [{ label: "Card text", icon: "optional", box: "a" }, ...] }
  ORDER: boxes are "1", "2", "3"... and each card's box is its position.

STEPS (a real-device task; the child taps Done for each step; there is a Skip button):
  { type: "steps", kind: "Real device", title: "...", icon: "tablet", device: "the Android tablet",
    intro: "optional", steps: ["Step one.", "Step two."], parent: "Parent: ...", done: "..." }
  Device menus differ between tablets: never name an exact menu path you have not verified.
  Write "With your parent, open Settings and find X" and say in parent: that names differ.
  Never ask the child to change settings; "Look only" for anything security-related.

PRACTICE question (not scored): Q.practice(stem, options, answerIndex, rightText, hintText)

PHOTOSORT (photos from the tablet camera, then sorted; parent checks):
  { type: "photosort", kind: "Real device", title: "...", steps: [...], maxPhotos: 4,
    parent: "...", boxes: [...] }

TEXTPRACTICE (copy and paste a sentence into a box):
  { type: "textpractice", title: "...", steps: [...], sentence: "...", parent: "...", done: "..." }

BUILDER (put devices or things in a chain from top to bottom, then a row underneath):
  see murad-t1.js Lesson 1 and jimmy-t1.js Lesson 2.

HTMLEDITOR, GRID (spreadsheet), TRADE (pretend buying and selling):
  see murad-t1.js Lesson 6, jimmy-t1.js Lesson 6, murad-t2.js Lesson 4.
  HTMLEDITOR and GRID must include testInput, so tools/check/lessons.js can finish them:
  - htmleditor: testInput: "<the HTML a child would type that completes every task>"
  - grid: testInput: { cells: { A4: "3", A7: "=A4+A5" }, sort: true|false,
                       expect: { A7: "the value the cell must show" } }
  Without testInput the checker skips that activity and prints a note.

Good activity choices by subject (use only facts from the booklet):
- Science: sort living / non-living; order the stages of a cycle; photo sort of things at home.
- Maths: Q.practice with worked numbers; order steps of a method; sort shapes by property;
  the GRID type for tables of numbers.
- English / Arabic language: match word to meaning; order words into a sentence; sort by
  word type; textpractice for copying a correct sentence.
- Social studies: order events on a timeline; match place to fact; sort into categories.

==================================================================
8. DONE MEANS ALL OF THIS IS TRUE
==================================================================
[ ] Every lesson in the booklet has a sheet. Every booklet question is in a check, exact wording.
[ ] Every scored answer is written in the booklet; every other question is Q.open.
[ ] Every check question's factId points to a card that teaches it.
[ ] Every real-device step also has an on-screen activity in the same lesson.
[ ] node tools/check/lessons.js <child>-<subject> ends with "problems: 0".
[ ] index.html loads the new file(s), and the home page shows the new subject.
[ ] The source notes list the Q.open questions and any borrowed fact cards.

==================================================================
9. DO NOT
==================================================================
- Do not change app/engine/sheet.js, app/engine/sheet.css or app/engine/common.js unless an activity
  truly cannot be expressed with the existing types. If you must, keep the change small,
  run tools/check/lessons.js on ALL lessons, and say why in the source notes.
- Do not add sounds, timers that beep, animations, or new colours.
- Do not invent facts, answers, menu names, or statistics.
- Do not merge questions, skip questions, or reword the booklet's questions.
- Do not ask the parent questions that this prompt already answers.

NO REPOSITORY ACCESS: if you cannot use the repository, return the complete lesson file(s) in
the format of section 6, plus the exact <script> line(s) to add to index.html, and the list of
Q.open questions. Do not return anything else.
```

---

**Why this keeps cost low**

- The engine, design and child profiles are already decided, so the model only writes content.
- The worked example files show every activity type, so the model copies a pattern instead of designing one.
- `tools/check/lessons.js` replaces long manual testing: one command finds broken answers, unfinished activities and layout problems.
