/* Shared settings for each child, from the parent's answers (see the plan docs),
   and small helpers so each lesson file only holds that lesson's content. */
(function () {
  "use strict";
  window.LESSONS = window.LESSONS || {};

  var TF = "Put ✓ or ✗";
  var MC = "Choose the correct answer";
  var CW = "Complete from the words between brackets";
  var MA = "Match";

  window.Q = {
    tf: function (stem, answer, fact, right) { return { type: "tf", kind: TF, stem: stem, answer: answer, fact: fact, right: right }; },
    mcq: function (stem, options, answer, fact, right) { return { type: "mcq", kind: MC, stem: stem, options: options, answer: answer, fact: fact, right: right }; },
    word: function (stem, bank, answer, fact, right) { return { type: "mcq", kind: CW, stem: stem, options: bank, answer: answer, fact: fact, right: right }; },
    match: function (stem, options, answer, fact, right) { return { type: "mcq", kind: MA, stem: stem, options: options, answer: answer, fact: fact, right: right }; },
    /* a question whose answer is not written in the booklet: shown, never scored */
    open: function (kind, stem, options) {
      return { type: kind === "tf" ? "tf" : "mcq", kind: kind === "tf" ? TF : MC, stem: stem, options: options, answer: null };
    },
    practice: function (stem, options, answer, right, hint) { return { type: "mcq", practice: true, kind: "Practice", stem: stem, options: options, answer: answer, right: right, hint: hint }; }
  };

  /* Murad: Primary 6, autistic, about 10 minutes a sitting, speaks his answers.
     Three sittings per lesson: learn the cards, do the activities, answer the booklet questions. */
  window.murad = function (d) {
    window.LESSONS[d.id] = {
      id: d.id, order: d.order, child: "Murad", grade: "Primary 6", where: d.where, title: d.title,
      sittingMinutes: 10,
      rewards: [
        { id: "game", label: "Minecraft or Roblox time", icon: "game" },
        { id: "snack", label: "Favourite snack or drink", icon: "snack" }
      ],
      answerHint: "Say your answer. Then tap it.",
      homework: "Parent: now Murad writes the same answers in the Questions part of this lesson in his booklet. The school test uses the same questions.",
      parentNotes: [
        "One sitting is about **10 minutes**. Do one sitting, then give the reward.",
        "Read each card aloud. **Wait 10 seconds.** If you repeat, use **the same words**.",
        "Murad **says** his answer first, then taps it.",
        "A wrong answer shows the card again, then the same question again. There is no red cross and no sound.",
        "Real-device steps are done with you beside him. Every real step also has an on-screen version, so a skipped step is still covered.",
        "The surprise card is for days when the plan changes."
      ].concat(d.notes || []),
      facts: d.facts,
      sittings: [
        { label: "Learn the words", icon: "book", parts: [1, 2, 3], screens: d.facts.map(function (f) { return { type: "fact", id: f.id }; }) },
        { label: d.doLabel || "Do the activities", icon: "blocks", parts: [1, 2, 4], screens: d.activities },
        { label: "Answer the booklet questions", icon: "checkbox", parts: [1, 2, 5, 6], screens: d.checks }
      ]
    };
  };

  /* Jimmy: Primary 5, reads very well, 15 to 20 minutes a sitting, answers on screen then in his binder.
     Two sittings per lesson. They can be done back to back in one go. */
  window.jimmy = function (d) {
    window.LESSONS[d.id] = {
      id: d.id, order: d.order, child: "Jimmy", grade: "Primary 5", where: d.where, title: d.title,
      sittingMinutes: 20,
      rewards: [{ id: "game", label: "Game or screen time", icon: "game" }],
      answerHint: "Read the question. Tap your answer.",
      homework: "Parent: now Jimmy writes the same answers in the Questions part of this lesson in his binder. The school test uses the same questions.",
      parentNotes: [
        "One sitting is **15 to 20 minutes**. Both sittings can be done in one go: tap **Start sitting 2** at the end of sitting 1.",
        "Wait **10 seconds** after each question. If you repeat, use **the same words**.",
        "A wrong answer shows the card again, then the same question again.",
        "Real-device steps are done with you beside him. Every real step also has an on-screen version, so a skipped step is still covered."
      ].concat(d.notes || []),
      facts: d.facts,
      sittings: [
        { label: "Learn and do", icon: "book", parts: [1, 2, 3, 4], screens: d.facts.map(function (f) { return { type: "fact", id: f.id }; }).concat(d.activities) },
        { label: "Answer the binder questions", icon: "checkbox", parts: [1, 2, 5, 6], screens: d.checks }
      ]
    };
  };
})();
