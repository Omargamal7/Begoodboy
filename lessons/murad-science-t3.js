/* Murad · Primary 6 Science · Chapter 3 · lessons 3-1 and 3-2.
   Source: primary 6 first term binder.pdf, pp. 20-23 and 86-89.
   Check stems retain the binder's wording; free-response items get tap choices
   after Murad says his answer. The source map records every adapted option set.
   Q.open preserves three questions whose answers are not explained in the binder. */
(function () {
  "use strict";
  var mcq = Q.mcq, tf = Q.tf;

  function check(section, number, stem, options, answer, fact, right) {
    var q = mcq(stem, options, answer, fact, right);
    q.kind = section + " · " + number;
    return q;
  }
  function statement(number, stem, answer, fact, right) {
    var q = tf(stem, answer, fact, right);
    q.kind = "Write True (T) or False (F) · " + number;
    return q;
  }
  function pending(section, number, stem, options) {
    var q = Q.open("mcq", stem, options || ["I said my answer to my parent"]);
    q.kind = section + " · " + number + " · Parent checks";
    return q;
  }

  var digestiveTerms = ["Digestion", "Stomach", "Small intestine", "Large intestine", "Anus"];
  var digestionChecks = [
    check("A. Complete the Following", 1, "Digestion changes the food we eat into simple _____ that the body can absorb.", ["nutrients", "waste", "air"], 0, "digestion", "**Nutrients** are the simple substances the body absorbs."),
    check("A. Complete the Following", 2, "Food moves from the mouth to the stomach through a tube called the _____.", ["large intestine", "esophagus", "anus"], 1, "mouth-stomach", "The **esophagus** moves food from the mouth to the stomach."),
    check("A. Complete the Following", 3, "The stomach is located mainly in the _____ abdomen.", ["lower-right", "middle", "upper-left"], 2, "location", "The **stomach** is mainly in the **upper-left abdomen**."),
    check("A. Complete the Following", 4, "In a cat, waste is stored in the _____ before leaving the body.", ["rectum", "mouth", "stomach"], 0, "waste", "The **rectum** stores waste before it leaves through the anus."),
    check("A. Complete the Following", 5, "In a fish, food passes from the mouth to the esophagus and then reaches the _____.", ["anus", "stomach", "mouth"], 1, "animals", "In a **fish**, food goes from the mouth through the esophagus to the **stomach**."),

    statement(1, "Teeth start breaking down food in the mouth.", true, "mouth-stomach", "**Teeth** chew food in the **mouth**."),
    statement(2, "The small intestine is shorter than the stomach.", false, "intestines", "The **small intestine** is **long and coiled** below the stomach."),
    statement(3, "The large intestine surrounds the small intestine in the human digestive system.", true, "location", "The **large intestine surrounds the small intestine**."),
    statement(4, "Cats and fish both have digestive systems, although their digestive organs are arranged differently.", true, "animals", "Cats and fish **digest food and absorb nutrients**. Their organs are arranged differently."),
    statement(5, "All animals need food to live and grow.", true, "animals", "**All animals need food** to live and grow."),

    check("C. Cross Out the Odd One", 1, "In each group, one word does not belong. Cross it out.", ["Mouth", "Esophagus", "Stomach", "Trachea"], 3, "other-words", "**Trachea** carries air to the lungs. Mouth, esophagus and stomach are in the food path."),
    check("C. Cross Out the Odd One", 2, "In each group, one word does not belong. Cross it out.", ["Stomach", "Small intestine", "Large intestine", "Lungs"], 3, "other-words", "**Lungs** are breathing organs. The other three are digestive organs."),
    check("C. Cross Out the Odd One", 3, "In each group, one word does not belong. Cross it out.", ["Chest", "Upper abdomen", "Middle abdomen", "Alveoli"], 3, "other-words", "**Alveoli** are tiny air sacs. Chest, upper abdomen and middle abdomen name body areas."),
    check("C. Cross Out the Odd One", 4, "In each group, one word does not belong. Cross it out.", ["Cat", "Fish", "Human", "Solar panel"], 3, "other-words", "A **solar panel** is part of a solar power plant. Cat, fish and human are living things."),
    check("C. Cross Out the Odd One", 5, "In each group, one word does not belong. Cross it out.", ["Digestion", "Absorption", "Removal of waste", "Inhalation"], 3, "other-words", "**Inhalation** means breathing in. The other three describe digestive-system jobs."),

    check("D. Write the Scientific Term", 1, "The process of breaking down food into smaller substances that the body can absorb.", digestiveTerms, 0, "digestion", "**Digestion** breaks food into smaller substances that the body can absorb."),
    check("D. Write the Scientific Term", 2, "The organ that stores food and mixes it with strong digestive juices.", digestiveTerms, 1, "mouth-stomach", "The **stomach** stores food and mixes it with strong digestive juices."),
    check("D. Write the Scientific Term", 3, "The organ where most nutrients from digested food are absorbed into the blood.", digestiveTerms, 2, "intestines", "The **small intestine** absorbs most nutrients into the blood."),
    check("D. Write the Scientific Term", 4, "The organ that absorbs water from leftover food and helps form waste.", digestiveTerms, 3, "intestines", "The **large intestine** absorbs water and forms waste."),
    check("D. Write the Scientific Term", 5, "The opening through which solid waste leaves the digestive system.", digestiveTerms, 4, "waste", "The **anus** is the opening where waste leaves the body."),

    check("E. What Happens When...?", 1, "Food enters the mouth?", ["Teeth chew it and saliva starts breaking it down.", "The rectum stores it.", "The large intestine absorbs its water."], 0, "mouth-stomach", "**Teeth chew food** and **saliva starts to break it down** in the mouth."),
    check("E. What Happens When...?", 2, "Food reaches the stomach?", ["It leaves the body.", "It is stored and mixed with digestive juices.", "It enters the lungs."], 1, "mouth-stomach", "The **stomach stores and mixes food** with digestive juices."),
    check("E. What Happens When...?", 3, "Digested food reaches the small intestine?", ["It is chewed by teeth.", "It is stored in the rectum.", "Most nutrients are absorbed into the blood."], 2, "intestines", "The **small intestine absorbs most nutrients** into the blood."),
    check("E. What Happens When...?", 4, "Leftover food enters the large intestine?", ["Water is absorbed and waste is formed.", "It moves back to the mouth.", "It enters the esophagus."], 0, "intestines", "The **large intestine absorbs water** and forms waste."),
    check("E. What Happens When...?", 5, "Food passes through the digestive system of a fish and reaches the end of its intestine?", ["It is chewed again.", "Waste leaves through the anus.", "It returns to the stomach."], 1, "animals", "In a **fish**, waste leaves the body through the **anus**."),

    check("F. Give Reasons for the Following", 1, "Food must be digested before the body can make full use of its nutrients.", ["Food must become small and simple so its nutrients can be absorbed.", "All food is waste.", "Food has to go into the lungs."], 0, "digestion", "**Digestion** makes food small and simple so the body can **absorb its nutrients**."),
    check("F. Give Reasons for the Following", 2, "The stomach and intestines are important parts of the digestive system.", ["They carry air.", "They digest food and absorb nutrients.", "They chew food with teeth."], 1, "location", "The **stomach and intestines** work together to **digest food and absorb nutrients**."),
    pending("F. Give Reasons for the Following", 3, "The small intestine is long and coiled inside the abdomen."),
    check("F. Give Reasons for the Following", 4, "The large intestine is important even though most nutrient absorption occurs in the small intestine.", ["It chews food.", "It stores food before the esophagus.", "It absorbs water and forms waste."], 2, "intestines", "The **large intestine** has another job: it **absorbs water and forms waste**."),
    check("F. Give Reasons for the Following", 5, "A cat and a fish can digest food even though their digestive systems are not arranged in exactly the same way.", ["Both systems break down food, absorb nutrients and get rid of waste.", "Neither animal needs food.", "Both animals use lungs to digest food."], 0, "animals", "The organs are arranged differently, but **both systems do the same jobs**: digest food, absorb nutrients and remove waste.")
  ];

  murad({
    id: "murad-science-t3-l1", order: 31, subject: "Science",
    where: "Chapter 3 · Lesson 3-1 · Binder pp. 20-22 / exercises pp. 86-87",
    title: "Digestion and How Does It Work?", doLabel: "Follow and match",
    notes: [
      "Study source: **binder pages 20-22**. Every check is from **pages 86-87**, in binder order.",
      "The written-answer questions use added tap choices. Murad **says his answer first**, then taps. The question wording is unchanged.",
      "The final vocabulary card borrows **solar power** from page 12, **inhalation** from page 14, and **trachea, lungs and alveoli** from page 16. The odd-one-out questions use these words.",
      "The word **absorption** is defined on page 24. It is added to the intestine card because the odd-one-out questions use it.",
      "Page 87, F3 asks why the small intestine is long and coiled. Page 21 describes its shape, but does not explain that reason. This question is **shown without a score**; check it with the teacher.",
      "The checks are divided into **two short sittings**: A-C, then D-F. Give the usual reward after each sitting.",
      "The separate digestion activity mentioned in the 12 October Toddle notice has not been supplied."
    ],
    facts: [
      { id: "digestion", term: "Digestion", icon: "snack",
        lines: ["**Digestion** breaks food into smaller, simple **nutrients**.", "The body absorbs the nutrients into the **blood**.", "The body uses them for **energy, growth and repair**."],
        pick: { prompt: "What does digestion do?", answer: 1, right: "**Digestion** breaks food into nutrients the body can absorb.", options: [{ label: "Stores all food as waste", icon: "folder" }, { label: "Breaks food into nutrients", icon: "snack" }] } },
      { id: "mouth-stomach", term: "Mouth, esophagus and stomach", icon: "body",
        figure: { src: "assets/science/food-path.jpg", alt: "Binder diagram showing the mouth, esophagus, stomach, small intestine, large intestine, rectum and anus.", caption: "Food path · binder page 20" },
        lines: ["In the **mouth**, teeth chew food. **Saliva** starts breaking it down.", "The **esophagus** is a tube from the mouth to the stomach.", "The **stomach** stores food and mixes it with strong digestive juices."],
        pick: { prompt: "Which tube moves food from the mouth to the stomach?", answer: 0, right: "The **esophagus** carries food to the stomach.", options: [{ label: "Esophagus", icon: "body" }, { label: "Large intestine", icon: "body" }] } },
      { id: "intestines", term: "Small and large intestines", icon: "body",
        lines: ["The **small intestine** is long and coiled below the stomach.", "It absorbs **most nutrients** into the **blood**.", "**Absorption** means nutrients and water pass from the intestine into the blood.", "The **large intestine** absorbs **water** from leftover food and forms **waste**."],
        pick: { prompt: "Which intestine absorbs most nutrients?", answer: 1, right: "The **small intestine** absorbs most nutrients.", options: [{ label: "Large intestine", icon: "body" }, { label: "Small intestine", icon: "body" }] } },
      { id: "waste", term: "Rectum and anus", icon: "body",
        lines: ["The **rectum** stores waste.", "The **anus** is the opening where waste leaves the body.", "A **cat** also stores waste in the rectum before it leaves through the anus."],
        pick: { prompt: "Where is waste stored before it leaves?", answer: 0, right: "The **rectum** stores waste.", options: [{ label: "Rectum", icon: "body" }, { label: "Esophagus", icon: "body" }] } },
      { id: "location", term: "Where the organs are", icon: "body",
        figure: { src: "assets/science/organ-location.jpg", alt: "Front view of the binder's body diagram: stomach on the person's upper left, small intestine below, large intestine around it.", caption: "The person's left is on your right · binder page 21" },
        lines: ["The **abdomen** is between the chest and the hips.", "The **stomach** is mainly in the **upper-left abdomen**, below the ribs.", "The **small intestine** is in the **middle and lower abdomen**.", "The **large intestine surrounds the small intestine**.", "The stomach and intestines work together to **digest food and absorb nutrients**."],
        pick: { prompt: "Where is the stomach mainly?", answer: 1, right: "The stomach is mainly in the **upper-left abdomen**.", options: [{ label: "Lower-right abdomen", icon: "body" }, { label: "Upper-left abdomen", icon: "body" }] } },
      { id: "animals", term: "A cat and a fish", icon: "body",
        figures: [
          { src: "assets/science/cat-digestion.jpg", alt: "Cat digestive system from the binder, with mouth, esophagus, stomach, small and large intestines, and rectum/anus.", caption: "Cat · binder page 22" },
          { src: "assets/science/fish-digestion.jpg", alt: "Fish digestive system from the binder, with mouth, esophagus, stomach, intestine and anus.", caption: "Fish · binder page 22" }
        ],
        lines: ["**All animals need food** to live and grow.", "Cats and fish both **break down food, absorb nutrients and remove waste**.", "Their organs are **arranged differently**.", "A **cat** has a long small intestine and a large intestine.", "A **fish** has a shorter intestine. Food goes mouth → esophagus → stomach → intestine → anus.", "A fish's **pyloric ceca** help digest food."],
        pick: { prompt: "What do cats and fish both do?", answer: 0, right: "Both **digest food and absorb nutrients**.", options: [{ label: "Digest food and absorb nutrients", icon: "snack" }, { label: "Use the same arrangement of organs", icon: "body" }] } },
      { id: "other-words", term: "Words for the odd-one-out questions", icon: "book",
        lines: ["The **trachea** carries **air** to the **lungs**.", "The **lungs** are breathing organs. **Alveoli** are tiny air sacs in the lungs.", "**Inhalation** means breathing in.", "The **chest**, **upper abdomen** and **middle abdomen** are body areas.", "The binder shows **solar panels** in a solar power plant. It uses **sunlight** to generate electricity."],
        pick: { prompt: "Which word means breathing in?", answer: 1, right: "**Inhalation** means breathing in.", options: [{ label: "Digestion", icon: "snack" }, { label: "Inhalation", icon: "body" }] } }
    ],
    activities: [
      { type: "sort", kind: "Order", title: "Follow the food path", intro: "Say the next organ. Then move its card to its number.",
        hint: "Start at the **mouth**. Then follow the binder diagram.", done: "Mouth → esophagus → stomach → small intestine → large intestine → rectum → anus.",
        boxes: [{ id: "1", label: "1 · Start", icon: "face" }, { id: "2", label: "2", icon: "body" }, { id: "3", label: "3", icon: "body" }, { id: "4", label: "4", icon: "body" }, { id: "5", label: "5", icon: "body" }, { id: "6", label: "6", icon: "body" }, { id: "7", label: "7 · Exit", icon: "body" }],
        cards: [{ label: "Stomach", box: "3" }, { label: "Anus", box: "7" }, { label: "Mouth", box: "1" }, { label: "Large intestine", box: "5" }, { label: "Esophagus", box: "2" }, { label: "Rectum", box: "6" }, { label: "Small intestine", box: "4" }] },
      { type: "sort", kind: "Match", title: "Match each organ to its job",
        hint: "Say the organ's job before you tap its place.", done: "Stomach: mix food. Small intestine: absorb nutrients. Large intestine: absorb water. Rectum: store waste.",
        boxes: [{ id: "mix", label: "Mix food with juices", icon: "snack" }, { id: "nutrients", label: "Absorb most nutrients", icon: "body" }, { id: "water", label: "Absorb water", icon: "snack" }, { id: "store", label: "Store waste", icon: "folder" }],
        cards: [{ label: "Large intestine", box: "water" }, { label: "Rectum", box: "store" }, { label: "Stomach", box: "mix" }, { label: "Small intestine", box: "nutrients" }] },
      { type: "sort", kind: "Match", title: "Cat, fish, or both?",
        hint: "Both animals digest food. Look for the words that describe their different intestines.", done: "Both animals digest food. The cat has small and large intestines. The fish has a shorter intestine and pyloric ceca.",
        boxes: [{ id: "cat", label: "Cat", icon: "body" }, { id: "fish", label: "Fish", icon: "body" }, { id: "both", label: "Both", icon: "tick" }],
        cards: [{ label: "Digest food and absorb nutrients", box: "both" }, { label: "Long small intestine and large intestine", box: "cat" }, { label: "Shorter intestine and pyloric ceca", box: "fish" }] }
    ],
    checks: digestionChecks
  });

  /* Thirty binder questions need two short check sittings. Keep the child's
     settings, reward, and usual teaching/retry behaviour; only split the queue. */
  var lesson1 = window.LESSONS["murad-science-t3-l1"];
  lesson1.sittings[2].label = "Booklet questions · A-C";
  lesson1.sittings[2].screens = digestionChecks.slice(0, 15);
  lesson1.sittings.push({ label: "Booklet questions · D-F", icon: "checkbox", parts: [1, 2, 5, 6], screens: digestionChecks.slice(15) });

  var pathStem = "Food that enters from the mouth is carried in the order of Mouth → (① _____) → (② _____) → (③ _____) → (④ _____), and comes out from the anus.";
  var pathBank = ["Large intestine", "Stomach", "Food pipe", "Lungs", "Small intestine"];
  var salivaChecks = [
    check("Try", "1 (1)", "What do we call the process of changing food into a form that is easy to absorb into the body?", ["Digestion", "Inhalation", "Removal of waste"], 0, "start", "**Digestion** changes food into a form the body can absorb."),
    check("Try · choose the correct words · blank ①", "1 (2)", pathStem, pathBank, 2, "path", "Blank **①** is **Food pipe**. It carries food from the mouth to the stomach."),
    check("Try · choose the correct words · blank ②", "1 (2)", pathStem, pathBank, 1, "path", "Blank **②** is **Stomach**."),
    check("Try · choose the correct words · blank ③", "1 (2)", pathStem, pathBank, 4, "path", "Blank **③** is **Small intestine**."),
    check("Try · choose the correct words · blank ④", "1 (2)", pathStem, pathBank, 0, "path", "Blank **④** is **Large intestine**."),
    check("Exercise", "1 (1)", "What is the correct order that food passes through? Choose the correct answer from below.", ["Mouth → Stomach → Food pipe → Small intestine → Large intestine", "Mouth → Food pipe → Stomach → Large intestine → Small intestine", "Mouth → Food pipe → Stomach → Small intestine → Large intestine", "Mouth → Food pipe → Large intestine → Small intestine → Stomach"], 2, "path", "Mouth → **food pipe** → **stomach** → **small intestine** → **large intestine**."),
    check("Exercise", "1 (2)", "What is the part of food from the mouth to the anus called?", ["Digestive system", "Respiratory system", "Blood"], 0, "path", "The organs from the **mouth to the anus** make the **digestive system**."),
    pending("Exercise", "2 (1)", "In the experiment to check the function of saliva, why do you warm the test tubes in hot water of about 40 degrees Celsius? Choose the correct answer from below.", ["To disinfect.", "To evaporate the water.", "To make it about the same temperature as inside the body."]),
    pending("Exercise", "2 (2)", "After mixing saliva and starch and warming it, did the color change when you added the iodine solution? Choose the correct answer from below.", ["It turned blue-black.", "It did not change."]),
    check("A. Complete the Following", 1, "The first step of digestion takes place in the _____.", ["stomach", "mouth", "large intestine"], 1, "start", "The **first step of digestion** takes place in the **mouth**."),
    check("A. Complete the Following", 2, "Saliva is a _____ secretion found in the mouth.", ["watery", "solid", "dry"], 0, "saliva", "**Saliva** is a **watery secretion**."),
    check("A. Complete the Following", 3, "Saliva helps break down _____ found in food.", ["water", "waste", "starch"], 2, "starch", "Saliva helps break down **starch**."),
    check("A. Complete the Following", 4, "Starch is changed into a simple _____ that can be easily absorbed by the body.", ["sugar", "starch", "waste"], 0, "starch", "Starch changes into a simple **sugar**."),
    check("A. Complete the Following", 5, "A liquid that helps digest food is called a digestive _____.", ["organ", "juice", "pipe"], 1, "juices", "A liquid that helps digest food is a **digestive juice**."),
    statement(1, "Digestion begins only after food reaches the stomach.", false, "start", "Digestion **starts in the mouth**."),
    statement(2, "Food begins to change from a complex form into a simpler form in the mouth.", true, "start", "In the **mouth**, food starts changing from complex to simple."),
    statement(3, "Saliva helps the body digest some of the food we eat.", true, "saliva", "**Saliva** helps break down **starch** in food."),
    statement(4, "Digestive juices are produced only in the mouth.", false, "juices", "The **mouth, stomach and intestines** produce digestive juices."),
    statement(5, "The stomach and intestines also produce digestive juices.", true, "juices", "The **stomach and intestines** also produce digestive juices.")
  ];

  salivaChecks[1].blankIndex = 0;
  salivaChecks[2].blankIndex = 1;
  salivaChecks[3].blankIndex = 2;
  salivaChecks[4].blankIndex = 3;

  murad({
    id: "murad-science-t3-l2", order: 32, subject: "Science",
    where: "Chapter 3 · Lesson 3-2 · Binder p. 23 / exercises pp. 88-89",
    title: "The Function of the Saliva", doLabel: "Sort and follow",
    notes: [
      "Study source: **binder page 23**. Every check is from **pages 88-89**, in binder order.",
      "The four blanks in Try 1 (2) are checked one at a time with the binder's original word bank. Its full sentence is repeated, and the blank number is shown above it.",
      "Exercise 1 (2) says **part of food** in the binder. That wording is retained. The expected term is supported by the page 20 heading and its mouth-to-anus diagram.",
      "Exercise 2 (1) and 2 (2) refer to a saliva/starch/iodine experiment. Its method and results are not explained in the binder. They are **shown without scores**; obtain the separate Toddle activity to check the answers.",
      "The food-path card borrows the digestive-system diagram and organ order from **page 20**, as required by the page 88 questions.",
      "The checks are divided into **two short sittings**: Try/Exercise, then A/B. Give the usual reward after each sitting."
    ],
    facts: [
      { id: "start", term: "Digestion starts in the mouth", icon: "face",
        lines: ["The **first step of digestion** happens in the **mouth**.", "Food starts changing from a **complex** form into a **simple** form.", "Simple food can be **absorbed** by the body."],
        pick: { prompt: "Where does digestion start?", answer: 0, right: "Digestion starts in the **mouth**.", options: [{ label: "Mouth", icon: "face" }, { label: "Stomach", icon: "body" }] } },
      { id: "saliva", term: "Saliva", icon: "snack",
        lines: ["The **mouth** contains **saliva**.", "Saliva is a **watery secretion**.", "It helps break down **starch** in food."],
        pick: { prompt: "What is saliva?", answer: 1, right: "Saliva is a **watery secretion** in the mouth.", options: [{ label: "A solid organ", icon: "body" }, { label: "A watery secretion", icon: "snack" }] } },
      { id: "starch", term: "Starch becomes simple sugar", icon: "snack",
        figure: { src: "assets/science/saliva-starch.jpg", alt: "Binder picture showing complex starch in food, saliva, and simple sugar after saliva acts.", caption: "Starch → simple sugar · binder page 23" },
        lines: ["**Starch** is complex.", "**Saliva** helps break starch down into **simple sugar**.", "The body can easily **absorb** simple sugar."],
        pick: { prompt: "What does starch change into?", answer: 0, right: "Starch changes into **simple sugar**.", options: [{ label: "Simple sugar", icon: "snack" }, { label: "Waste in the rectum", icon: "folder" }] } },
      { id: "juices", term: "Digestive juices", icon: "snack",
        lines: ["A liquid that helps digest food is a **digestive juice**.", "**Saliva** is a digestive juice.", "The **mouth, stomach and intestines** produce digestive juices."],
        pick: { prompt: "Where are digestive juices produced?", answer: 1, right: "Digestive juices are produced in the **mouth, stomach and intestines**.", options: [{ label: "Only in the mouth", icon: "face" }, { label: "Mouth, stomach and intestines", icon: "body" }] } },
      { id: "path", term: "The digestive system and food path", icon: "body",
        figure: { src: "assets/science/food-path.jpg", alt: "The binder's digestive-system diagram, showing food's path from mouth through the organs to the anus.", caption: "Food pipe is the esophagus · binder pages 20 and 88" },
        lines: ["The **digestive system** includes the organs from the **mouth to the anus**.", "The **food pipe**, or **esophagus**, connects mouth to stomach.", "Food goes mouth → **food pipe** → **stomach** → **small intestine** → **large intestine**.", "Waste is stored in the **rectum**, then leaves through the **anus**."],
        pick: { prompt: "Which organ follows the food pipe?", answer: 1, right: "The **stomach** follows the food pipe.", options: [{ label: "Large intestine", icon: "body" }, { label: "Stomach", icon: "body" }] } }
    ],
    activities: [
      { type: "sort", kind: "Order", title: "Follow the binder's food path", intro: "Build the sequence used in the questions on page 88.",
        hint: "The **food pipe** comes between the mouth and stomach.", done: "Mouth → food pipe → stomach → small intestine → large intestine.",
        boxes: [{ id: "1", label: "1 · Mouth", icon: "face" }, { id: "2", label: "2", icon: "body" }, { id: "3", label: "3", icon: "body" }, { id: "4", label: "4", icon: "body" }, { id: "5", label: "5", icon: "body" }],
        cards: [{ label: "Stomach", box: "3" }, { label: "Large intestine", box: "5" }, { label: "Food pipe", box: "2" }, { label: "Mouth", box: "1" }, { label: "Small intestine", box: "4" }] },
      { type: "sort", kind: "Match", title: "Before and after saliva acts", hint: "**Starch** is complex. Saliva helps change it into **simple sugar**.", done: "Complex starch becomes simple sugar with the help of saliva.",
        boxes: [{ id: "before", label: "Before saliva acts", icon: "snack" }, { id: "after", label: "After saliva acts", icon: "snack" }],
        cards: [{ label: "Simple sugar", box: "after" }, { label: "Complex starch", box: "before" }] },
      { type: "sort", kind: "Match", title: "Match the lesson words", hint: "Read the meaning first. Then say the matching word.", done: "Saliva: watery secretion. Digestion: breaking food down. Digestive juice: liquid that helps digest food.",
        boxes: [{ id: "saliva", label: "Watery secretion in the mouth", icon: "face" }, { id: "digestion", label: "Breaking food into a simple form", icon: "snack" }, { id: "juice", label: "Liquid that helps digest food", icon: "snack" }],
        cards: [{ label: "Digestive juice", box: "juice" }, { label: "Saliva", box: "saliva" }, { label: "Digestion", box: "digestion" }] }
    ],
    checks: salivaChecks
  });
  var lesson2 = window.LESSONS["murad-science-t3-l2"];
  lesson2.sittings[2].label = "Booklet questions · Try / Exercise";
  lesson2.sittings[2].screens = salivaChecks.slice(0, 9);
  lesson2.sittings.push({ label: "Booklet questions · A / B", icon: "checkbox", parts: [1, 2, 5, 6], screens: salivaChecks.slice(9) });
})();
