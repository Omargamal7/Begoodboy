/* Murad · Primary 6 ICT · first term booklet 2025-2026 · Theme 1.
   Every fact and every check question comes from the booklet. The check keeps the booklet's exact wording.
   Q.open marks a question whose answer is not written in the booklet text. */
(function () {
  "use strict";
  var tf = Q.tf, mcq = Q.mcq, match = Q.match;

  /* ---------------- Lesson 1 · Computer Network Devices ---------------- */
  murad({
    id: "murad-t1-l1", order: 11, where: "Theme 1 · Lesson 1", title: "Computer Network Devices", doLabel: "Build and sort",
    notes: ["Sitting 2 has one real-device step: Murad takes photos of devices at home with the tablet camera."],
    facts: [
      { id: "network", term: "Network", icon: "network",
        lines: ["A **network** is a group of devices that are connected to each other.", "They are connected for a common purpose."],
        pick: { prompt: "Tap the network.", answer: 0, right: "A **network** is devices connected to each other.",
          options: [{ label: "Network", icon: "network" }, { label: "One computer", icon: "desktop" }, { label: "One phone", icon: "phone" }] } },
      { id: "wired", term: "Wired and wireless", icon: "wifi",
        lines: ["A **wired** network uses cables. The cables plug into **ports** on the devices.", "A **wireless** network has no wires. It uses **Wi-Fi**."],
        pick: { prompt: "Tap the picture for wireless.", answer: 1, right: "**Wireless** means no wires. It uses **Wi-Fi**.",
          options: [{ label: "Cable", icon: "cable" }, { label: "Wi-Fi", icon: "wifi" }, { label: "Printer", icon: "printer" }] } },
      { id: "modem", term: "Modem", icon: "modem",
        lines: ["A **modem** connects a local area network (**LAN**) to the internet.", "It changes the signal from the internet service provider (**ISP**) into a digital signal that devices can read."],
        pick: { prompt: "Tap the modem.", answer: 0, right: "The **modem** connects the LAN to the internet.",
          options: [{ label: "Modem", icon: "modem" }, { label: "Switch", icon: "switch" }, { label: "Router", icon: "router" }] } },
      { id: "switch", term: "Switch", icon: "switch",
        lines: ["A **switch** sends data to a specific device on a network.", "It makes connections **easier and faster**."],
        pick: { prompt: "Tap the switch.", answer: 1, right: "The **switch** sends data to a specific device.",
          options: [{ label: "Modem", icon: "modem" }, { label: "Switch", icon: "switch" }, { label: "Computer", icon: "desktop" }] } },
      { id: "ai", term: "Artificial Intelligence (AI)", icon: "ai",
        lines: ["**AI** means **artificial intelligence**.", "AI is a computer program that does hard jobs by copying how people think.", "AI can copy the sound of a real person's voice."],
        pick: { prompt: "Tap the picture for AI.", answer: 2, right: "**AI** means **artificial intelligence**.",
          options: [{ label: "Router", icon: "router" }, { label: "Cable", icon: "cable" }, { label: "AI", icon: "ai" }] } }
    ],
    activities: [
      { type: "builder", kind: "Build", title: "Build the network",
        intro: "This is the network picture from your booklet. Put each device in its place.",
        parent: "Parent: if Murad is stuck, tap **Show the names of the places**. The booklet order is internet, modem, router, then the devices.",
        chain: [{ id: "internet", label: "Internet" }, { id: "modem", label: "Modem" }, { id: "router", label: "Router" }],
        devices: ["desktop", "switch", "tablet"],
        cards: [
          { id: "tablet", label: "Tablet or phone", icon: "tablet" }, { id: "router", label: "Router", icon: "router" },
          { id: "internet", label: "Internet", icon: "internet" }, { id: "switch", label: "Switch", icon: "switch" },
          { id: "modem", label: "Modem", icon: "modem" }, { id: "desktop", label: "Desktop computer", icon: "desktop" }
        ],
        right: {
          internet: "The **internet** is at the top.", modem: "The **modem** connects the network to the internet.",
          router: "The **router** is under the modem.", desktop: "The **desktop computer** connects to the router.",
          "switch": "The **switch** connects to the router.", tablet: "The **tablet or phone** connects to the router."
        },
        hints: { internet: "The internet goes at the very top.", modem: "The modem goes between the internet and the router.", router: "The router goes under the modem.", any: "Devices go in the bottom row, under the router." },
        done: "Internet, modem, router, and three devices. This is the picture in your booklet." },
      { type: "sort", kind: "Sort", title: "Wired or wireless?",
        hint: "Look at the words on the card. **Cable** means wired. **Wi-Fi** means wireless.",
        done: "Cables mean **wired**. Wi-Fi means **wireless**.",
        boxes: [{ id: "wired", label: "Wired (cable)", icon: "cable" }, { id: "wireless", label: "Wireless (Wi-Fi)", icon: "wifi" }],
        cards: [
          { label: "Computer with a cable in its port", icon: "desktop", box: "wired" }, { label: "Tablet on Wi-Fi", icon: "tablet", box: "wireless" },
          { label: "Switch with cables in its ports", icon: "switch", box: "wired" }, { label: "Laptop on Wi-Fi", icon: "laptop", box: "wireless" },
          { label: "Printer with a cable in its port", icon: "printer", box: "wired" }, { label: "Phone on Wi-Fi", icon: "phone", box: "wireless" }
        ] },
      { type: "photosort", kind: "Real device", title: "Find devices at home",
        steps: ["Use the tablet camera. Take a photo of a device at home.", "Take up to **4** photos.", "Put each photo in **Wired** or **Wireless**."],
        maxPhotos: 4,
        parent: "Parent: help Murad look for a cable. If the device uses a cable for the network, it is wired. If it uses Wi-Fi, it is wireless. When all photos are in a box, tap **Parent: checked**.",
        boxes: [{ id: "wired", label: "Wired (cable)", icon: "cable" }, { id: "wireless", label: "Wireless (Wi-Fi)", icon: "wifi" }] }
    ],
    checks: [
      tf("Computer networks connect computers with each other.", true, "network", "It is true. A **network** connects devices to each other."),
      tf("Wireless networks use physical wiring and cables.", false, "wired", "It is false. **Wired** networks use cables. **Wireless** networks use Wi-Fi."),
      tf("Devices can be connected without wiring (Wireless or Wi-Fi).", true, "wired", "It is true. **Wireless** means no wires."),
      tf("A switch is a device that connects a local area network to the internet.", false, "modem", "It is false. A **modem** connects a LAN to the internet. A switch sends data to a specific device."),
      tf("Switches help to make connections easier and faster.", true, "switch", "It is true. A **switch** makes connections easier and faster."),
      mcq("_____ are groups of devices that are connected to each other.", ["Keyboards", "Networks", "Computers"], 1, "network", "**Networks** are groups of connected devices."),
      mcq("A _____ converts the signals from the internet service provider (ISP) into digital signals.", ["modem", "port", "router"], 0, "modem", "The **modem** changes the ISP signal into a digital signal."),
      mcq("_____ performs complex tasks that simulate the thinking of the human element.", ["AI", "IoT", "ICT"], 0, "ai", "**AI** copies how people think."),
      mcq("AI stands for _____.", ["artificial information", "electronic intelligence", "artificial intelligence"], 2, "ai", "AI stands for **artificial intelligence**."),
      mcq("_____ networks connect devices with wires and cables.", ["Wired", "Wireless", "Wi-Fi"], 0, "wired", "**Wired** networks use wires and cables.")
    ]
  });

  /* ---------------- Lesson 2 · Future Technology ---------------- */
  murad({
    id: "murad-t1-l2", order: 12, where: "Theme 1 · Lesson 2", title: "Future Technology", doLabel: "Sort and find",
    facts: [
      { id: "now", term: "Already here", icon: "star",
        lines: ["**Augmented reality**, **virtual reality** and **artificial intelligence** may seem like the future.", "But they are **already used in everyday life**."],
        pick: { prompt: "Are AR, VR and AI used in everyday life now?", answer: 0, right: "They are **already used in everyday life**.",
          options: [{ label: "Yes, already now", icon: "tick" }, { label: "No, not yet", icon: "cross" }] } },
      { id: "vr", term: "Virtual Reality (VR)", icon: "vr",
        lines: ["**VR** is a virtual **3-D** world. You can explore it and move around in it as if it were real.", "You often wear a **VR headset**. It blocks out the real world.", "In class, VR can take you to a world where insects are **bigger than you**, or to a museum far away."],
        pick: { prompt: "Tap the VR headset.", answer: 1, right: "A **VR headset** blocks out the real world.",
          options: [{ label: "Phone", icon: "phone" }, { label: "VR headset", icon: "vr" }, { label: "Router", icon: "router" }] } },
      { id: "ar", term: "Augmented Reality (AR)", icon: "ar",
        lines: ["**AR** mixes the real world with a virtual world. A computer adds images.", "You can use AR with a **smartphone camera** or a **tablet**.", "AR shows a **3-D model**. It helps students take an active part in learning."],
        pick: { prompt: "Tap the picture for AR.", answer: 0, right: "**AR** adds images to the real world through a phone or tablet camera.",
          options: [{ label: "Phone showing a 3-D shape", icon: "ar" }, { label: "Cable", icon: "cable" }, { label: "Printer", icon: "printer" }] } },
      { id: "ai", term: "Artificial Intelligence (AI)", icon: "ai",
        lines: ["**AI** is the computer's ability to **think, learn and deduce**.", "AI learns from examples. It can guess the next word you will write.", "AI unlocks your phone with **facial recognition**."],
        pick: { prompt: "Tap the picture for AI.", answer: 2, right: "**AI** can think, learn and deduce.",
          options: [{ label: "VR headset", icon: "vr" }, { label: "Switch", icon: "switch" }, { label: "AI", icon: "ai" }] } },
      { id: "help", term: "Helping people of determination", icon: "person",
        lines: ["Future technology can make everyday life better for **people of determination**.", "They can use **virtual assistants** powered by AI.", "A virtual assistant can make **phone calls**, or move around the computer using the voice or sign language."],
        pick: { prompt: "What can a virtual assistant do?", answer: 1, right: "A **virtual assistant** can make phone calls.",
          options: [{ label: "Print a page", icon: "printer" }, { label: "Make a phone call", icon: "phone" }, { label: "Plug in a cable", icon: "cable" }] } }
    ],
    activities: [
      { type: "sort", kind: "Sort", title: "VR, AR or AI?",
        hint: "Look again. **VR** uses a headset. **AR** adds images through a camera. **AI** thinks and learns.",
        done: "VR takes you to another world. AR adds images to the real world. AI thinks and learns.",
        boxes: [{ id: "vr", label: "VR", icon: "vr" }, { id: "ar", label: "AR", icon: "ar" }, { id: "ai", label: "AI", icon: "ai" }],
        cards: [
          { label: "Insects bigger than you", icon: "vr", box: "vr" }, { label: "A museum thousands of miles away", icon: "vr", box: "vr" },
          { label: "A headset that blocks out the real world", icon: "vr", box: "vr" },
          { label: "A 3-D shape on a flat table, seen through the phone camera", icon: "ar", box: "ar" },
          { label: "A 3-D model in maths class through a tablet", icon: "ar", box: "ar" },
          { label: "Guessing the next word you will write", icon: "ai", box: "ai" }, { label: "Unlocking a phone with your face", icon: "ai", box: "ai" },
          { label: "A virtual assistant making a phone call", icon: "ai", box: "ai" }
        ] },
      { type: "steps", kind: "Real device", title: "Find AI on your tablet", icon: "ai", device: "the Android tablet",
        intro: "AI is already on your tablet. Find one example from your booklet.",
        steps: ["Open any app where you type, for example Messages or Notes.", "Type the first word of a sentence. Look above the keyboard for **suggested next words**. That is AI guessing your next word.",
          "With your parent, open **Settings** and look for **face unlock** or **face recognition**. Look only. Do not change anything."],
        parent: "Parent: the names of the menus are different on each tablet. Help Murad find them. If the tablet has no face unlock, tap Done after looking.",
        done: "You found AI on your own tablet." }
    ],
    checks: [
      tf("AR, VR, and AI are not used in our lives yet.", false, "now", "It is false. They are **already used in everyday life**."),
      tf("In the classroom, VR can take you to a world where insects are smaller than you.", false, "vr", "It is false. Insects are **bigger than you** in VR."),
      tf("AR helps students become active participants in learning.", true, "ar", "It is true. AR helps students take an active part."),
      tf("AR shows a 2D model of what the real world looks like.", false, "ar", "It is false. AR shows a **3-D model**."),
      tf("AI is the ability of the computer to think, learn, and deduce.", true, "ai", "It is true. AI can **think, learn and deduce**."),
      tf("People of determination can use virtual assistants to make phone calls.", true, "help", "It is true. Virtual assistants can make **phone calls**."),
      tf("VR stands for Visual Router.", false, "vr", "It is false. VR stands for **Virtual Reality**."),
      mcq("_____ is a virtual 3-D environment that allows users to explore and interact with the surroundings, as if it were reality.", ["VR", "AR", "AI"], 0, "vr", "**VR** is a virtual 3-D world."),
      mcq("_____ combines the real world with a virtual world by adding images using computers.", ["Internet", "ICT", "AR"], 2, "ar", "**AR** adds images to the real world."),
      mcq("Augmented reality can be done through _____.", ["smartphone cameras", "tablets", "(a and b)"], 2, "ar", "AR works with **smartphone cameras and tablets**."),
      mcq("AR shows a _____ of what the real world looks like.", ["3-D model", "picture", "video"], 0, "ar", "AR shows a **3-D model**."),
      mcq("_____ is used to unlock your phone with facial recognition.", ["EKB", "IoT", "AI"], 2, "ai", "**AI** unlocks your phone with your face.")
    ]
  });

  /* ---------------- Lesson 3 · Assistive Technology for People with Special Needs ---------------- */
  var ux = ["Credible", "Usable", "Useful", "Accessible", "Desirable", "Valuable", "Findable"];
  murad({
    id: "murad-t1-l3", order: 13, where: "Theme 1 · Lesson 3", title: "Assistive Technology", doLabel: "Try and match",
    facts: [
      { id: "edge", term: "Cutting-edge technology", icon: "star",
        lines: ["**Cutting-edge** technology is the **latest** and most advanced version of a service or a product.", "Examples: **AI**, **AR** and **VR**."],
        pick: { prompt: "Cutting-edge means…", answer: 0, right: "Cutting-edge means the **latest** and most advanced.",
          options: [{ label: "The latest", icon: "star" }, { label: "The oldest", icon: "book" }] } },
      { id: "assist", term: "Assistive technology", icon: "person",
        lines: ["**Assistive technology** helps **people of determination**.", "Examples: **screen magnification** software, **hearing aids**, and programs that turn **speech to text** and **text to speech**.", "**Smart gloves** help deaf people turn their signs into speech or text."],
        pick: { prompt: "Tap the hearing aid.", answer: 1, right: "A **hearing aid** is assistive technology.",
          options: [{ label: "Router", icon: "router" }, { label: "Hearing aid", icon: "ear" }, { label: "Printer", icon: "printer" }] } },
      { id: "evaluate", term: "Evaluating technology", icon: "checkbox",
        lines: ["It is important to **evaluate** new technology.", "When we evaluate, society is better informed to **make decisions**."],
        pick: { prompt: "Evaluating helps us to…", answer: 0, right: "Evaluating helps us **make decisions**.",
          options: [{ label: "Make decisions", icon: "checkbox" }, { label: "Break devices", icon: "cross" }] } },
      { id: "ux", term: "User experience words", icon: "list",
        lines: ["**Accessible**: Is it available for people of determination?", "**Credible**: Are the company and its products trustworthy?", "**Desirable**: Does it meet your needs?",
          "**Findable**: If there is a problem, can I find the solution?", "**Usable**: Is it easy to use?", "**Useful**: Is it practical?", "**Valuable**: Does it improve my life or help me learn?"],
        pick: { prompt: "Which word means \"Is it easy to use?\"", answer: 1, right: "**Usable** means easy to use.",
          options: [{ label: "Credible", icon: "shield" }, { label: "Usable", icon: "tick" }, { label: "Findable", icon: "search" }] } },
      { id: "goal", term: "One goal", icon: "heart",
        lines: ["Assistive technology comes in many kinds.", "But the **goal is the same**: to help people be more **independent** and part of society."],
        pick: { prompt: "Assistive technology has…", answer: 0, right: "Assistive technology has **one goal**.",
          options: [{ label: "The same goal", icon: "heart" }, { label: "Different goals", icon: "cross" }] } }
    ],
    notes: ["The match question \"Valuable\" is not explained in the lesson text. It is the only word left over in the booklet's match, so its card uses the booklet's own question."],
    activities: [
      { type: "sort", kind: "Sort", title: "Cutting-edge or assistive?",
        intro: "These are the two lists from your booklet.",
        hint: "Look again. AI, AR and VR are the **cutting-edge** examples. The others help people of determination.",
        done: "AI, AR and VR are cutting-edge. Magnifiers, hearing aids and speech programs are assistive technology.",
        boxes: [{ id: "edge", label: "Cutting-edge examples", icon: "star" }, { id: "assist", label: "Assistive technology", icon: "person" }],
        cards: [
          { label: "AI", icon: "ai", box: "edge" }, { label: "AR", icon: "ar", box: "edge" }, { label: "VR", icon: "vr", box: "edge" },
          { label: "Screen magnification", icon: "magnifier", box: "assist" }, { label: "Hearing aids", icon: "ear", box: "assist" },
          { label: "Speech to text", icon: "speech", box: "assist" }, { label: "Text to speech", icon: "speech", box: "assist" }
        ] },
      { type: "steps", kind: "Real device", title: "Try assistive technology", icon: "magnifier", device: "the Android tablet",
        intro: "Your tablet has assistive technology inside it.",
        steps: ["With your parent, open **Settings**, then **Accessibility**.", "Find **Magnification**. Turn it on and zoom in on the screen.", "Turn Magnification off again.",
          "Find a **text to speech** or **read aloud** option. Listen to the tablet read some words.", "Turn it off again."],
        parent: "Parent: menu names are different on each tablet. Help Murad find them, and make sure both options are off at the end.",
        done: "You used screen magnification and text to speech." },
      { type: "sort", kind: "Match", title: "Match the question to its word",
        hint: "Look at the word card again. Read the question in the box.",
        done: "You matched all seven user experience words.",
        boxes: [
          { id: "acc", label: "Is it available for people of determination?" }, { id: "cre", label: "Are the company and its products trustworthy?" },
          { id: "des", label: "Does the product meet your needs?" }, { id: "fin", label: "If there is a problem, can I find a solution?" },
          { id: "usa", label: "Is it easy to use?" }, { id: "use", label: "Is it practical?" }, { id: "val", label: "Does it improve my life or help me learn?" }
        ],
        cards: [
          { label: "Accessible", box: "acc" }, { label: "Credible", box: "cre" }, { label: "Desirable", box: "des" }, { label: "Findable", box: "fin" },
          { label: "Usable", box: "usa" }, { label: "Useful", box: "use" }, { label: "Valuable", box: "val" }
        ] }
    ],
    checks: [
      tf("Cutting-edge technology is the oldest and most advanced version of a service or a product.", false, "edge", "It is false. Cutting-edge is the **latest**."),
      tf("Assistive technology helps people of determination.", true, "assist", "It is true."),
      tf("Hearing aids are types of assistive technology for people of determination.", true, "assist", "It is true. **Hearing aids** are assistive technology."),
      tf("Through evaluation, the community will be better informed to make decisions.", true, "evaluate", "It is true."),
      tf("Advanced assistive technology has different goals.", false, "goal", "It is false. The **goal is the same**."),
      mcq("_____ technology is the latest and most advanced version of a service or a product.", ["Cutting-edge", "Smart", "Application"], 0, "edge", "**Cutting-edge** means the latest."),
      mcq("Examples of cutting-edge technology: _____", ["AI", "AR", "VR", "all the previous"], 3, "edge", "AI, AR and VR are **all** cutting-edge."),
      mcq("_____ enable deaf people to translate their signals into text or spoken output.", ["Screen magnification software", "Smart gloves", "Hearing aids"], 1, "assist", "**Smart gloves** turn signs into speech or text."),
      match("Match: Is this technology available for people of determination?", ux, 3, "ux", "**Accessible**."),
      match("Match: Are the company and its products trustworthy?", ux, 0, "ux", "**Credible**."),
      match("Match: Does the product meet your needs?", ux, 4, "ux", "**Desirable**."),
      match("Match: If there is a problem with the project or service, can I find a solution?", ux, 6, "ux", "**Findable**."),
      match("Match: Is it easy to use?", ux, 1, "ux", "**Usable**."),
      match("Match: Is this technology practical?", ux, 2, "ux", "**Useful**."),
      match("Match: Does this technology improve my life or help me learn?", ux, 5, "ux", "**Valuable**.")
    ]
  });

  /* ---------------- Lesson 4 · Digital Search Tools ---------------- */
  murad({
    id: "murad-t1-l4", order: 14, where: "Theme 1 · Lesson 4", title: "Digital Search Tools", doLabel: "Copy, paste and search",
    facts: [
      { id: "copy", term: "Copy, paste and cut", icon: "copy",
        lines: ["**Copy**, **paste** and **cut** are some of the most used word processing commands.", "They work for **information or images**."],
        pick: { prompt: "Copy and paste work for…", answer: 0, right: "They work for **information and images**.",
          options: [{ label: "Words and images", icon: "copy" }, { label: "Images only", icon: "image" }] } },
      { id: "tools", term: "Different search tools", icon: "search",
        lines: ["Internet searches, special search engines and online libraries all search for information.", "But the **results will be different**.", "Knowing the results you need helps you **choose the search tool**."],
        pick: { prompt: "Do all search tools give the same results?", answer: 1, right: "The results are **different**.",
          options: [{ label: "Yes, the same", icon: "tick" }, { label: "No, different", icon: "cross" }] } },
      { id: "engine", term: "Search engines", icon: "search",
        lines: ["**Search engines** find websites from **keywords** and phrases.", "They are easy to use, very fast, and give several results.", "Use your **evaluation skills** to make sure what you pick is credible and accurate."],
        pick: { prompt: "Search engines search with…", answer: 0, right: "Search engines use **keywords**.",
          options: [{ label: "Keywords", icon: "search" }, { label: "Cables", icon: "cable" }] } },
      { id: "db", term: "Databases", icon: "database",
        lines: ["A **database** is a collection of **information** stored in a computer system.", "You can use it **free** through your school, including magazines and newspapers.", "**EKB** is a general database about many subjects. Its results are credible and accurate."],
        pick: { prompt: "Tap the example of a database.", answer: 1, right: "**EKB** is a database.",
          options: [{ label: "Printer", icon: "printer" }, { label: "EKB", icon: "database" }, { label: "Modem", icon: "modem" }] } },
      { id: "catalog", term: "Library catalogs", icon: "library",
        lines: ["A **library catalog** is a database of **all the items a library owns**.", "The **Library of Alexandria** has a catalog on its website: **www.bibalex.org**."],
        pick: { prompt: "The Library of Alexandria website is…", answer: 0, right: "It is **www.bibalex.org**.",
          options: [{ label: "www.bibalex.org", icon: "library" }, { label: "www.ekb.eg", icon: "database" }] } },
      { id: "dbsearch", term: "Searching a database", icon: "list",
        lines: ["Search a database with a **keyword**.", "Look at the subject headings in the results, then search again with them.", "Use the **author's name** or a **journal title** to narrow it down.", "Choose **dates** to find the most up-to-date research."],
        pick: { prompt: "To find the newest research, choose…", answer: 0, right: "Choose **dates**.",
          options: [{ label: "Dates", icon: "list" }, { label: "Colours", icon: "image" }] } }
    ],
    activities: [
      { type: "textpractice", kind: "Real device", title: "Copy and paste",
        steps: ["Press and hold on the sentence (on the laptop: select it with the mouse).", "Choose **Copy**.", "Press and hold in the box (on the laptop: right-click).", "Choose **Paste**."],
        sentence: "Minecraft and Roblox are my favourite games.",
        parent: "Parent: on the tablet, press and hold to see Copy and Paste. On the laptop, right-click to see them.",
        done: "You copied and pasted. **Cut** works the same way, but it takes the words away from where they were." },
      { type: "sort", kind: "Sort", title: "Which search tool?",
        hint: "Look again. A **search engine** finds websites fast. A **database** like EKB gives articles through school. A **library catalog** lists what the library owns.",
        done: "Each search tool gives different results.",
        boxes: [{ id: "engine", label: "Search engine", icon: "search" }, { id: "db", label: "Database (EKB)", icon: "database" }, { id: "catalog", label: "Library catalog", icon: "library" }],
        cards: [
          { label: "Find websites fast with a keyword", box: "engine" }, { label: "Get several results very quickly", box: "engine" },
          { label: "Read a magazine or newspaper article through school", box: "db" }, { label: "Credible, accurate results about many subjects", box: "db" },
          { label: "See all the books a library owns", box: "catalog" }, { label: "Find a new e-book in the Library of Alexandria", box: "catalog" }
        ] },
      { type: "steps", kind: "Real device", title: "Visit the Library of Alexandria", icon: "library", device: "the laptop or tablet, with your parent",
        steps: ["Open the web browser.", "Type **www.bibalex.org** in the address bar.", "Look at the website. Find where you can search."],
        parent: "Parent: stay beside Murad on the internet.",
        done: "You opened the Library of Alexandria website." }
    ],
    checks: [
      tf("Copy, paste, and cut are some of the most commonly used word processing commands.", true, "copy", "It is true."),
      tf("Copy and paste commands are used for images only.", false, "copy", "It is false. They work for **information and images**."),
      tf("Knowing the results that you need helps in determining the search tools you could use.", true, "tools", "It is true."),
      tf("Internet searches, specialized search engines, and verified online libraries all search for information, and the results will be the same.", false, "tools", "It is false. The results are **different**."),
      tf("The library catalog is a database that includes all the items owned by a library.", true, "catalog", "It is true."),
      tf("You can't search for information from magazines or newspapers.", false, "db", "It is false. School databases have **magazines and newspapers**."),
      tf("Search engines are user-friendly, very fast, and often provide several results.", true, "engine", "It is true."),
      tf("Limiting a search range by specifying dates helps you find the most up-to-date research.", true, "dbsearch", "It is true."),
      mcq("Search engines help people to search the internet websites based on the _____ and phrases.", ["comments", "hints", "keywords"], 2, "engine", "Search engines use **keywords**."),
      mcq("Databases are a collection of _____.", ["information", "photos", "websites"], 0, "db", "A database is a collection of **information**."),
      mcq("_____ is an example of a general database that covers many subjects.", ["WWW", "EKB", "ICT"], 1, "db", "**EKB** is a general database."),
      mcq("Use your _____ to ensure the content you select is credible and accurate.", ["evaluation skills", "Facebook account", "e-mail"], 0, "engine", "Use your **evaluation skills**."),
      mcq("_____ is one of the library catalogs.", ["EKB", "Library of Alexandria", "Google"], 1, "catalog", "The **Library of Alexandria** has a catalog."),
      mcq("The URL of The Library of Alexandria is _____.", ["www.h5b.org", "www.ekb.eg", "www.bibalex.org"], 2, "catalog", "It is **www.bibalex.org**.")
    ]
  });

  /* ---------------- Lesson 5 · How Operating Systems Work ---------------- */
  murad({
    id: "murad-t1-l5", order: 15, where: "Theme 1 · Lesson 5", title: "How Operating Systems Work", doLabel: "Find and sort",
    notes: ["Two questions (\"Programming languages are usually open-source\" and \"Programming languages are instructions given in…\") are not answered in the lesson text. The sheet shows them but does not score them. Please check them with the teacher."],
    facts: [
      { id: "os", term: "Operating system (OS)", icon: "window",
        lines: ["An **operating system** is the software that **manages the computer's functions**: **memory, drives, printers** and other devices.", "It runs the software and hardware, and helps you talk to the computer easily.", "It includes accessible tools such as screen readers and magnifiers."],
        pick: { prompt: "An operating system…", answer: 0, right: "An OS **manages the computer**.",
          options: [{ label: "Manages the computer", icon: "window" }, { label: "Is a cable", icon: "cable" }] } },
      { id: "pc", term: "Windows and Mac OS", icon: "desktop",
        lines: ["Most computers come with an operating system already on them.", "**Microsoft Windows** is on **most computers** in the world.", "**Mac OS** runs on **Apple computers**."],
        pick: { prompt: "Which OS is on most computers in the world?", answer: 0, right: "**Windows** is on most computers.",
          options: [{ label: "Windows", icon: "desktop" }, { label: "Mac OS", icon: "laptop" }] } },
      { id: "mobile", term: "Android and Apple iOS", icon: "tablet",
        lines: ["The most popular mobile operating systems are **Android** and **Apple iOS**.", "Android is **open-source**: people can read and change its programming code.", "Apple iOS is **closed**: the public cannot see or change its code.", "Both do the **same basic jobs**: messages, the web, video chat and touch."],
        pick: { prompt: "Which one is open-source?", answer: 0, right: "**Android** is open-source.",
          options: [{ label: "Android", icon: "tablet" }, { label: "Apple iOS", icon: "phone" }] } },
      { id: "edge", term: "OS for robots and cars", icon: "robot",
        lines: ["The **Robot Operating System (ROS)** is open-source software for building **robot** applications.", "**Many operating systems** run **self-driving cars**."],
        pick: { prompt: "ROS is used to build…", answer: 0, right: "ROS builds **robot** applications.",
          options: [{ label: "Robots", icon: "robot" }, { label: "Printers", icon: "printer" }] } },
      { id: "html", term: "HTML", icon: "code",
        lines: ["**HTML** means **Hypertext** Markup Language. People use it to make **web pages**.", "It is **easy to learn and use**.", "You can add **text, links, images, audio and videos**. It works in all the main web browsers."],
        pick: { prompt: "HTML is used to make…", answer: 1, right: "HTML makes **web pages**.",
          options: [{ label: "Presentations", icon: "slides" }, { label: "Web pages", icon: "code" }] } }
    ],
    activities: [
      { type: "steps", kind: "Real device", title: "Find the OS on your tablet", icon: "tablet", device: "the Android tablet",
        steps: ["Open **Settings**.", "Find **About tablet** or **About phone**. It is often near the bottom.", "Find the words **Android version**. Read the number."],
        parent: "Parent: the menu names are different on each tablet. Help Murad find the Android version.",
        done: "Your tablet's operating system is **Android**." },
      { type: "sort", kind: "Sort", title: "Which operating system?",
        hint: "Look at the cards again. **Windows** is on most computers. **Mac OS** is on Apple computers. **ROS** is for robots.",
        done: "Each device has its own operating system.",
        boxes: [{ id: "win", label: "Windows", icon: "desktop" }, { id: "mac", label: "Mac OS", icon: "laptop" }, { id: "and", label: "Android", icon: "tablet" }, { id: "ios", label: "Apple iOS", icon: "phone" }, { id: "ros", label: "ROS", icon: "robot" }],
        cards: [
          { label: "Most computers in the world", icon: "desktop", box: "win" }, { label: "An Apple computer", icon: "laptop", box: "mac" },
          { label: "Murad's tablet", icon: "tablet", box: "and" }, { label: "An iPhone", icon: "phone", box: "ios" }, { label: "A robot application", icon: "robot", box: "ros" }
        ] },
      { type: "sort", kind: "Sort", title: "Open or closed?",
        hint: "**Open-source** means people can read and change the code. **Closed** means they cannot.",
        done: "Android and ROS are open-source. Apple iOS is closed.",
        boxes: [{ id: "open", label: "Open-source: you can read and change the code", icon: "book" }, { id: "closed", label: "Closed: the code is locked", icon: "lock" }],
        cards: [{ label: "Android", icon: "tablet", box: "open" }, { label: "ROS", icon: "robot", box: "open" }, { label: "Apple iOS", icon: "phone", box: "closed" }] }
    ],
    checks: [
      tf("An operating system is a program that controls computer functions.", true, "os", "It is true. An OS manages the computer's functions."),
      tf("Mac OS is on most computers worldwide.", false, "pc", "It is false. **Windows** is on most computers."),
      tf("Closed-source software allows anyone to easily read or change the programming code.", false, "mobile", "It is false. Closed code **cannot** be seen or changed."),
      tf("Both Android and IOS perform the same basic functions.", true, "mobile", "It is true."),
      tf("There are multiple operating systems powering self-driving cars.", true, "edge", "It is true."),
      Q.open("tf", "Programming languages are usually open-source."),
      tf("HTML allows creators to add text, links, and images only.", false, "html", "It is false. HTML also adds **audio and videos**."),
      tf("HTML is easy to learn and use.", true, "html", "It is true."),
      mcq("Computer functions could be _____, and other devices.", ["memory", "drives and printers", "all the previous"], 2, "os", "Memory, drives and printers: **all the previous**."),
      mcq("_____ runs only on the Apple computers.", ["Windows", "Mac OS", "Android"], 1, "pc", "**Mac OS** runs on Apple computers."),
      mcq("_____ is used on iPhones and iPads.", ["ROS", "Windows", "Apple IOS"], 2, "mobile", "**Apple iOS** is Apple's mobile OS."),
      mcq("Android uses \"_____\" software.", ["open-source", "closed-source", "free source"], 0, "mobile", "Android is **open-source**."),
      mcq("ROS is an open-source software used for building _____ applications.", ["robot", "smartphone", "laptop"], 0, "edge", "ROS builds **robot** applications."),
      Q.open("mcq", "Programming languages are instructions to a computer given in _____.", ["questions", "codes", "pictures"]),
      mcq("Programmers use (HTML) to create _____.", ["presentations", "videos", "web pages"], 2, "html", "HTML makes **web pages**."),
      mcq("HTML stands for _____ Markup Language.", ["Hypertext", "Hyperlink", "Hyperwords"], 0, "html", "HTML means **Hypertext** Markup Language.")
    ]
  });

  /* ---------------- Lesson 6 · I Am a Web Designer ---------------- */
  murad({
    id: "murad-t1-l6", order: 16, where: "Theme 1 · Lesson 6", title: "I Am a Web Designer", doLabel: "Make a web page",
    facts: [
      { id: "html", term: "HTML", icon: "code",
        lines: ["**HTML** is the standard language for making **web pages**.", "It is made of elements such as **headings, paragraphs, links and images**.", "**Web browsers read HTML** and show the page."],
        pick: { prompt: "Who reads HTML documents?", answer: 0, right: "**Web browsers** read HTML.",
          options: [{ label: "Web browsers", icon: "window" }, { label: "Printers", icon: "printer" }] } },
      { id: "parts", term: "A tag has three parts", icon: "tag",
        lines: ["A tag has **three parts**:", "1. the **opening tag**, like <p>", "2. the **content**", "3. the **closing tag**, like </p>"],
        pick: { prompt: "How many parts does a tag have?", answer: 1, right: "A tag has **three** parts.",
          options: [{ label: "Two", icon: "list" }, { label: "Three", icon: "tag" }, { label: "Four", icon: "list" }] } },
      { id: "tags", term: "Tags and their jobs", icon: "list",
        lines: ["**<h1>** is the **largest** heading. **<h2>** is a **subheading**. **<h6>** is a smaller subheading.", "**<p>** makes a paragraph.", "**<a href=\"…\">** makes a link.", "**<i>** makes italics. **<strong>** makes bold text."],
        pick: { prompt: "Which tag is the largest heading?", answer: 0, right: "**<h1>** is the largest heading.",
          options: [{ label: "<h1>", icon: "tag" }, { label: "<h6>", icon: "tag" }, { label: "<p>", icon: "tag" }] } },
      { id: "design", term: "Website design", icon: "window",
        lines: ["HTML elements break a page into parts. This makes it easier to **scan, read and move around**.", "**Subheadings** make the text easy to scan.", "HTML also helps people with **low vision** tell the parts of a page apart."],
        pick: { prompt: "Subheadings make the text…", answer: 0, right: "Subheadings make text **easy to scan**.",
          options: [{ label: "Easy to scan", icon: "search" }, { label: "Hard to read", icon: "cross" }] } }
    ],
    activities: [
      { type: "sort", kind: "Order", title: "Build a tag sandwich",
        intro: "Put the three parts of a paragraph tag in order.",
        hint: "A tag starts with the **opening tag**, then the **content**, then the **closing tag**.",
        done: "Opening tag, content, closing tag: <p>I love Minecraft</p>",
        boxes: [{ id: "b1", label: "1. Opening tag" }, { id: "b2", label: "2. Content" }, { id: "b3", label: "3. Closing tag" }],
        cards: [{ label: "<p>", box: "b1" }, { label: "I love Minecraft", box: "b2" }, { label: "</p>", box: "b3" }] },
      { type: "sort", kind: "Match", title: "What does each tag do?",
        hint: "Look at the tag card again. Read the job in the box.",
        done: "You know the jobs of eight tags from your booklet.",
        boxes: [
          { id: "h1", label: "Largest heading" }, { id: "h2", label: "Subheading" }, { id: "h6", label: "Smaller subheading" }, { id: "p", label: "Paragraph" },
          { id: "a", label: "Link" }, { id: "i", label: "Italics" }, { id: "s", label: "Bold text" }, { id: "f", label: "Font size and colour" }
        ],
        cards: [
          { label: "<h1>", box: "h1" }, { label: "<h2>", box: "h2" }, { label: "<h6>", box: "h6" }, { label: "<p>", box: "p" },
          { label: "<a href>", box: "a" }, { label: "<i>", box: "i" }, { label: "<strong>", box: "s" }, { label: "<font>", box: "f" }
        ] },
      { type: "htmleditor", kind: "Make", title: "Make your own web page",
        intro: "Type HTML in the box. Your page appears underneath as you type. Do each task in the list.",
        starter: "<h1>My Minecraft page</h1>\n",
        tasks: [
          { label: "Write an **<h1>** heading. (It is already started for you.)", test: "<h1>[\\s\\S]+</h1>" },
          { label: "Write a paragraph with **<p>** and **</p>**.", test: "<p>[\\s\\S]+</p>" },
          { label: "Make one word bold with **<strong>** and **</strong>**.", test: "<strong>[\\s\\S]+</strong>" },
          { label: "Add a link to EKB: **<a href=\"https://www.ekb.eg\">EKB</a>**", test: "<a\\s+href=\"https?://[^\"]+\"[^>]*>[\\s\\S]+</a>" }
        ],
        parent: "Parent: this works on the tablet and the laptop. On the laptop, Murad can also type the same HTML in a text editor, save it as **mypage.html**, and open it in the web browser.",
        testInput: "<h1>My Minecraft page</h1>\n<p>I like <strong>building</strong>.</p>\n<a href=\"https://www.ekb.eg\">EKB</a>",
        done: "You are a web designer. Your page has a heading, a paragraph, bold text and a link." }
    ],
    checks: [
      tf("HTML is used to create presentations.", false, "html", "It is false. HTML makes **web pages**."),
      tf("Web browsers can't read HTML documents.", false, "html", "It is false. **Web browsers read HTML**."),
      tf("An HTML code helps people with low vision to distinguish between parts of a web page.", true, "design", "It is true."),
      tf("The tag <h1> is used for the smallest heading.", false, "tags", "It is false. **<h1>** is the **largest** heading."),
      tf("Subheadings make the text easy to scan.", true, "design", "It is true."),
      mcq("_____ is the standard programming language used to create web pages.", ["HTML", "Java", "Visual basic"], 0, "html", "**HTML** makes web pages."),
      mcq("HTML consists of a series of elements such as _____.", ["headings and paragraphs", "links and images", "all the previous"], 2, "html", "Headings, paragraphs, links and images: **all the previous**."),
      mcq("Tags have _____ main parts.", ["two", "three", "four"], 1, "parts", "A tag has **three** parts."),
      mcq("The tag _____ is used for a subheading.", ["<h1>", "<h2>", "<h6>"], 1, "tags", "**<h2>** is a subheading."),
      mcq("To add a link use the following tag _____.", ["p", "a href", "strong"], 1, "tags", "**a href** makes a link.")
    ]
  });
})();
