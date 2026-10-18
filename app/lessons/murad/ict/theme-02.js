/* Murad · Primary 6 ICT · first term booklet 2025-2026 · Theme 2.
   Every fact and every check question comes from the booklet. The check keeps the booklet's exact wording.
   Safety rules that the booklet writes as "Don't…" are taught on the cards as what to do. */
(function () {
  "use strict";
  var tf = Q.tf, mcq = Q.mcq;

  /* ---------------- Lesson 1 · How to Deal with Electronic Games ---------------- */
  murad({
    id: "murad-t2-l1", order: 21, where: "Theme 2 · Lesson 1", title: "How to Deal with Electronic Games", doLabel: "Sort and plan",
    facts: [
      { id: "good", term: "The good side", icon: "game",
        lines: ["Online games with friends can be a lot of fun.", "They can help **critical and creative thinking**.", "They can encourage **teamwork**."],
        pick: { prompt: "Games can encourage…", answer: 0, right: "Games can encourage **teamwork**.",
          options: [{ label: "Teamwork", icon: "person" }, { label: "Headaches only", icon: "cross" }] } },
      { id: "body", term: "Dangers to the body", icon: "body",
        lines: ["Too much gaming can affect your **sleep**.", "It can **strain your eyes** and cause **back problems** and **headaches**.", "It can make you **gain weight** if you do not exercise or eat well."],
        pick: { prompt: "Which one is a danger to the body?", answer: 0, right: "A **headache** is a danger to the body.",
          options: [{ label: "Headache", icon: "body" }, { label: "Viruses", icon: "virus" }] } },
      { id: "mind", term: "Dangers to feelings", icon: "heart",
        lines: ["You may feel **anxious** or **depressed** if you feel **lonely** in the real world, or if you are bullied online.", "Some games can make people **aggressive**.", "Gaming can hurt your relationship with **family and friends**."],
        pick: { prompt: "Feeling lonely can make you…", answer: 0, right: "You may feel **depressed**.",
          options: [{ label: "Depressed", icon: "heart" }, { label: "Faster", icon: "star" }] } },
      { id: "security", term: "Dangers to security", icon: "shield",
        lines: ["**Multiplayer games** can put your security at risk.", "If you share too much personal information, strangers may find your **name, email, phone number and address**.", "Hackers can leak your information, and viruses spread easily."],
        pick: { prompt: "Multiplayer games can put your … at risk.", answer: 0, right: "They can put your **security** at risk.",
          options: [{ label: "Security", icon: "shield" }, { label: "Printer", icon: "printer" }] } },
      { id: "safe", term: "Responsible gaming", icon: "checkbox",
        lines: ["Play and chat only with **people you know and trust**.", "Keep personal information **out of** your username and password. Keep the webcam off.", "**Accept the limits** your parents set.", "Keep doing **real-life activities**.", "If something feels wrong, **tell your parents**."],
        pick: { prompt: "Play and chat only with…", answer: 0, right: "Only with **people you know and trust**.",
          options: [{ label: "People you know and trust", icon: "person" }, { label: "Strangers", icon: "warning" }] } }
    ],
    activities: [
      { type: "sort", kind: "Sort", title: "Which kind of danger?",
        hint: "Look again. **Body** is sleep, eyes, back, head, weight. **Feelings** is lonely, anxious, angry. **Security** is information, hackers, viruses.",
        done: "Body, feelings and security: three kinds of danger.",
        boxes: [{ id: "body", label: "Body", icon: "body" }, { id: "mind", label: "Feelings", icon: "heart" }, { id: "security", label: "Security", icon: "shield" }],
        cards: [
          { label: "Bad sleep", box: "body" }, { label: "Tired eyes", box: "body" }, { label: "Back problems", box: "body" }, { label: "Headaches", box: "body" },
          { label: "Feeling lonely", box: "mind" }, { label: "Feeling anxious", box: "mind" }, { label: "Becoming aggressive", box: "mind" },
          { label: "Strangers see your address", box: "security" }, { label: "Hackers leak your information", box: "security" }, { label: "Viruses spread", box: "security" }
        ] },
      { type: "steps", kind: "With your parent", title: "My gaming plan", icon: "game", device: "Murad and his parent together",
        intro: "Read each rule with your parent. Tap Done when you agree.",
        steps: ["I play Minecraft and Roblox only with people I know and trust.", "My username and password have no personal information in them.", "I keep the webcam off.",
          "I stop when my parent's time limit ends.", "I do real-life activities every day too.", "If something feels wrong, I tell my parents."],
        parent: "Parent: agree the time limit with Murad now, and show it on a timer he can see.",
        skipLabel: "Do this another day",
        done: "This is your gaming plan." }
    ],
    checks: [
      tf("There are no good sides to playing electronic games.", false, "good", "It is false. Games can help **thinking and teamwork**."),
      tf("Electronic games don't encourage teamwork.", false, "good", "It is false. Games can encourage **teamwork**."),
      tf("Electronic games may cause back problems.", true, "body", "It is true."),
      tf("If you share too much personal information, strangers may be able to access your name, email, phone number, and address.", true, "security", "It is true."),
      tf("Multiplayer games can put your security at risk.", true, "security", "It is true."),
      tf("It is OK to use personal information in your username and passwords.", false, "safe", "It is false. Keep personal information **out of** them."),
      tf("Don't accept limits that your parents set to prevent unhealthy gaming habits.", false, "safe", "It is false. **Accept the limits** your parents set."),
      tf("Make sure that gaming does not replace real-life activities.", true, "safe", "It is true."),
      mcq("One of the electronic games' physical dangers is _____.", ["headache", "becoming anxious", "viruses"], 0, "body", "A **headache** is a danger to the body."),
      mcq("Affecting your sleep cycle is one of the dangers of the electronic _____.", ["commerce", "mail", "gaming"], 2, "body", "It is a danger of **gaming**."),
      mcq("Electronic gaming may let you become _____ because you feel lonely in the real world.", ["depressed", "happy", "aggressive"], 0, "mind", "You may feel **depressed**."),
      mcq("Only play games and chat with _____.", ["strangers", "people you know and trust", "hackers"], 1, "safe", "Only with **people you know and trust**."),
      mcq("When you do encounter dangers, don't be afraid to tell your _____.", ["neighbors", "friends", "parents"], 2, "safe", "Tell your **parents**.")
    ]
  });

  /* ---------------- Lesson 2 · Protecting Yourself from Digital Theft ---------------- */
  murad({
    id: "murad-t2-l2", order: 22, where: "Theme 2 · Lesson 2", title: "Protecting Yourself from Digital Theft", doLabel: "Lock it",
    facts: [
      { id: "risk", term: "Keep devices safe", icon: "shield",
        lines: ["Leaving your devices at risk, without safety steps, is **irresponsible**.", "There are **five** ways to protect your devices from theft."],
        pick: { prompt: "Leaving devices at risk is…", answer: 0, right: "It is **irresponsible**.",
          options: [{ label: "Irresponsible", icon: "warning" }, { label: "Fine", icon: "tick" }] } },
      { id: "password", term: "1. Passwords", icon: "key",
        lines: ["The most secure passwords have **at least 8** random **letters, numbers and symbols**."],
        pick: { prompt: "A secure password has at least…", answer: 1, right: "At least **8** letters, numbers and symbols.",
          options: [{ label: "5", icon: "key" }, { label: "8", icon: "key" }, { label: "3", icon: "key" }] } },
      { id: "mfa", term: "2. Multi-Factor Authentication (MFA)", icon: "lock",
        lines: ["**MFA** means **Multi-Factor Authentication**.", "It needs **at least two ways** to show who you are.", "For example **passwords, PINs, security codes or personal questions**."],
        pick: { prompt: "MFA needs at least…", answer: 0, right: "MFA needs **at least two ways**.",
          options: [{ label: "Two ways", icon: "lock" }, { label: "One way", icon: "key" }] } },
      { id: "body", term: "3. Fingerprint and 4. Face", icon: "fingerprint",
        lines: ["**Fingerprint authentication** scans your **finger**.", "**Facial recognition** scans your **face** with the device's **camera**. Only your face can open your device."],
        pick: { prompt: "Facial recognition uses the…", answer: 0, right: "It uses the **camera**.",
          options: [{ label: "Camera", icon: "camera" }, { label: "Microphone", icon: "speech" }, { label: "Screen", icon: "tablet" }] } },
      { id: "encrypt", term: "5. Full encryption", icon: "lock",
        lines: ["**Encryption** protects your information so **only you** can open it on your device, once you have set your password."],
        pick: { prompt: "Encryption means…", answer: 0, right: "**Only you** can open your information.",
          options: [{ label: "Only you can open it", icon: "lock" }, { label: "Everyone can open it", icon: "share" }] } },
      { id: "law", term: "The Data Protection Law", icon: "shield",
        lines: ["Companies **must protect** their websites and their customers' information.", "Egypt's **Data Protection Law** asks companies for strict security. They must report data theft at once and tell their customers.", "If your data is stolen, **tell a parent or trusted adult**. Tell the friends you talk to online too."],
        pick: { prompt: "If your data is stolen, you should…", answer: 0, right: "**Report it** to a parent or trusted adult.",
          options: [{ label: "Report it", icon: "speech" }, { label: "Keep it secret", icon: "lock" }] } }
    ],
    activities: [
      { type: "sort", kind: "Match", title: "Match each lock to what it does",
        hint: "Read the box again, then look at the lock cards.",
        done: "You know the five ways to protect your device.",
        boxes: [
          { id: "p", label: "At least 8 letters, numbers and symbols" }, { id: "m", label: "At least two ways to show who you are" },
          { id: "f", label: "Scans your finger" }, { id: "c", label: "Scans your face with the camera" }, { id: "e", label: "Only you can open your information" }
        ],
        cards: [
          { label: "Password", icon: "key", box: "p" }, { label: "MFA", icon: "lock", box: "m" }, { label: "Fingerprint", icon: "fingerprint", box: "f" },
          { label: "Facial recognition", icon: "face", box: "c" }, { label: "Full encryption", icon: "shield", box: "e" }
        ] },
      Q.practice("Which password is the most secure?", ["cat12", "minecraft", "R7#kq2!Lm"], 2,
        "**R7#kq2!Lm** has more than 8 random letters, numbers and symbols.", "Count the characters. Look for letters, numbers **and** symbols."),
      { type: "steps", kind: "Real device", title: "Look at your tablet's locks", icon: "lock", device: "the Android tablet",
        steps: ["With your parent, open **Settings**.", "Find **Security** or **Lock screen**.", "Look at the lock types: PIN, password, pattern, fingerprint or face. **Look only. Do not change anything.**"],
        parent: "Parent: menu names are different on each tablet. Make sure nothing is changed.",
        done: "You saw the locks that protect your tablet." }
    ],
    checks: [
      tf("It is irresponsible to leave your devices at risk by not taking proper safety precautions.", true, "risk", "It is true."),
      tf("MFA requires at least two ways of identifying yourself.", true, "mfa", "It is true."),
      tf("Fingerprint authentication will scan your face.", false, "body", "It is false. It scans your **finger**."),
      tf("Encryption protects your information so only you can access it on your device.", true, "encrypt", "It is true."),
      tf("Companies don't need to protect their websites or their customers' information.", false, "law", "It is false. Companies **must protect** it."),
      tf("You should report data theft.", true, "law", "It is true."),
      mcq("MFA stands for _____.", ["Multi-Files Authentication", "Multi-Factor Authentication", "Many-Factor Authentication"], 1, "mfa", "MFA means **Multi-Factor Authentication**."),
      mcq("MFA could be through _____.", ["passwords and pins", "security codes or personal question", "all the previous"], 2, "mfa", "All of them: **all the previous**."),
      mcq("Facial recognition software will scan your face using your device's _____.", ["camera", "microphone", "screen"], 0, "body", "It uses the **camera**."),
      mcq("Passwords with at least _____ random letters, numbers, and symbols are the most secure.", ["5", "8", "3"], 1, "password", "At least **8**.")
    ]
  });

  /* ---------------- Lesson 3 · Cyber Security ---------------- */
  murad({
    id: "murad-t2-l3", order: 23, where: "Theme 2 · Lesson 3", title: "Cyber Security", doLabel: "Spot the threat",
    facts: [
      { id: "habits", term: "Staying safe online", icon: "shield",
        lines: ["Use **safe web browsers** and **antivirus** protection.", "Let only friends and family see your social media.", "Talk only with **people you know**. Keep personal information private.",
          "Use **strong passwords** and change them **every three months**.", "Check that websites are **real, safe** and right for your age. Check that information is **accurate**."],
        pick: { prompt: "Change your passwords every three…", answer: 1, right: "Every three **months**.",
          options: [{ label: "Days", icon: "list" }, { label: "Months", icon: "list" }, { label: "Years", icon: "list" }] } },
      { id: "cyber", term: "Cyber security", icon: "shield",
        lines: ["**Cyber security** means protecting **systems, networks, devices and data** from electronic attacks."],
        pick: { prompt: "Cyber security protects…", answer: 0, right: "It protects systems, networks, devices and data.",
          options: [{ label: "Devices and data", icon: "shield" }, { label: "Buildings", icon: "home" }] } },
      { id: "malware", term: "Malware", icon: "virus",
        lines: ["**Malware** is the **greatest** cyber security threat.", "**Shareware** is malware that **pretends to be a virus alert**. It asks you to click a link, but the link is the virus.", "**Unsecured Wi-Fi** can let malware in."],
        pick: { prompt: "A fake virus alert is called…", answer: 0, right: "It is **shareware**.",
          options: [{ label: "Shareware", icon: "virus" }, { label: "E-mail", icon: "mail" }] } },
      { id: "spoof", term: "Spoofing", icon: "mail",
        lines: ["In **spoofing**, criminals **pretend** to be a business or a person you know.", "Examples: a **fake website name**, or an **email with the name of a trusted service** or person.", "Clicking unsafe links can let them steal information or **money**, or put viruses on your device."],
        pick: { prompt: "An email pretending to be from a trusted service is…", answer: 0, right: "That is **spoofing**.",
          options: [{ label: "Spoofing", icon: "mail" }, { label: "Antivirus", icon: "shield" }] } },
      { id: "act", term: "What to do after an attack", icon: "list",
        lines: ["1. **Tell your contacts** at once.", "2. Run **antivirus** to find and remove viruses.", "3. Make sure **security settings are up to date**.", "4. **Change all your passwords**.", "5. **Report it to a trusted adult**. They may tell the internet service provider or the authorities."],
        pick: { prompt: "Who do you report a threat to?", answer: 0, right: "Report it to a **trusted adult**.",
          options: [{ label: "A trusted adult", icon: "person" }, { label: "Nobody", icon: "cross" }] } }
    ],
    activities: [
      { type: "sort", kind: "Sort", title: "Shareware or spoofing?",
        hint: "**Shareware** pretends to be a virus alert. **Spoofing** pretends to be a business or a person you know.",
        done: "Both are threats. Do not click. Tell a trusted adult.",
        boxes: [{ id: "share", label: "Shareware: a fake virus alert", icon: "virus" }, { id: "spoof", label: "Spoofing: pretends to be someone", icon: "mail" }],
        cards: [
          { label: "Pop-up: \"Virus found! Click here to remove it.\"", box: "share" }, { label: "Message: \"Your device is infected. Tap this link.\"", box: "share" },
          { label: "Email from \"Y0uTube Support\" with a zero", box: "spoof" }, { label: "A shop website with its name spelled wrong", box: "spoof" },
          { label: "Email that uses your friend's name but asks for your password", box: "spoof" }
        ] },
      { type: "sort", kind: "Order", title: "What to do after an attack",
        hint: "Look at the card about what to do. Start with telling your contacts.",
        done: "Tell contacts, run antivirus, update settings, change passwords, report to a trusted adult.",
        boxes: [{ id: "s1", label: "1" }, { id: "s2", label: "2" }, { id: "s3", label: "3" }, { id: "s4", label: "4" }, { id: "s5", label: "5" }],
        cards: [
          { label: "Tell your contacts", box: "s1" }, { label: "Run antivirus", box: "s2" }, { label: "Update security settings", box: "s3" },
          { label: "Change all passwords", box: "s4" }, { label: "Report to a trusted adult", box: "s5" }
        ] },
      { type: "steps", kind: "Real device", title: "Find the security settings", icon: "shield", device: "the Android tablet",
        steps: ["With your parent, open **Settings**.", "Find **Security** or **Security and privacy**.", "Look for **security update** or **system update**. **Look only.**"],
        parent: "Parent: menu names are different on each tablet. If an update is waiting, you decide when to install it.",
        done: "You know where the tablet's security settings are." }
    ],
    checks: [
      tf("You should use safe web browsers and install antivirus protection on your devices.", true, "habits", "It is true."),
      tf("Do not communicate with people you don't know.", true, "habits", "It is true. Talk only with people you know."),
      tf("Share personal information online.", false, "habits", "It is false. Keep personal information **private**."),
      tf("Verify websites are real and safe.", true, "habits", "It is true."),
      tf("Malware is the greatest cyber security threat.", true, "malware", "It is true."),
      tf("Secured Wi-Fi can subject you to malware threats.", false, "malware", "It is false. **Unsecured** Wi-Fi can let malware in."),
      tf("You should confirm your security settings are up-to-date.", true, "act", "It is true."),
      tf("Use antivirus software to do a sweep of your computer and remove any viruses.", true, "act", "It is true."),
      tf("If you click on unsafe links, you are in danger of having your money stolen.", true, "spoof", "It is true."),
      tf("Adults could report cyber security threats to the internet service provider.", true, "act", "It is true."),
      mcq("Choose _____ passwords for your accounts.", ["strong", "weak", "simple"], 0, "habits", "Choose **strong** passwords."),
      mcq("Change your passwords every three _____.", ["days", "months", "years"], 1, "habits", "Every three **months**."),
      mcq("Verify information you find to make sure it is _____.", ["wrong", "accurate", "old"], 1, "habits", "Make sure it is **accurate**."),
      mcq("_____ means the protection of systems, networks, devices and data from electronic attacks.", ["Cyber security", "Building's security", "Antivirus"], 0, "cyber", "That is **cyber security**."),
      mcq("_____ is a type of malware that pretends to be a virus alert.", ["E-mail", "Hacking", "Shareware"], 2, "malware", "That is **shareware**."),
      mcq("_____ could be an email account that has the name of a trusted service.", ["Virus", "Antivirus", "Spoofing"], 2, "spoof", "That is **spoofing**."),
      mcq("_____ the threat to a trusted adult.", ["Copy", "Report", "Send"], 1, "act", "**Report** it.")
    ]
  });

  /* ---------------- Lesson 4 · Copyright and Electronic Financial Trading ---------------- */
  murad({
    id: "murad-t2-l4", order: 24, where: "Theme 2 · Lesson 4", title: "Copyright and Electronic Financial Trading", doLabel: "Sort and trade",
    facts: [
      { id: "copyright", term: "Copyright", icon: "copyright",
        lines: ["**Copyright** means someone's invention, creation or idea is **protected by law** from being copied.", "It covers **written, visual, audio, video and web** material."],
        pick: { prompt: "Copyright protects…", answer: 0, right: "Copyright protects someone's **creation**.",
          options: [{ label: "Someone's creation", icon: "copyright" }, { label: "Only videos", icon: "video" }] } },
      { id: "free", term: "When you can share", icon: "share",
        lines: ["**Creative Commons** means the creator has **given permission** to share the work.", "Work in data libraries like the **EKB** is **already approved** for use.", "In Egypt, no permission is needed if the creator died **at least 50 years** ago."],
        pick: { prompt: "In Egypt, a creator must have died at least … years ago.", answer: 1, right: "At least **50** years.",
          options: [{ label: "10", icon: "list" }, { label: "50", icon: "list" }, { label: "100", icon: "list" }] } },
      { id: "stock", term: "The stock exchange", icon: "chart",
        lines: ["A **stock exchange** is a market where people **buy and sell** units of company stock, called **shares**.", "The Egyptian stock exchange lets citizens invest in **any market sector**."],
        pick: { prompt: "Units of company stock are called…", answer: 0, right: "They are called **shares**.",
          options: [{ label: "Shares", icon: "chart" }, { label: "Cables", icon: "cable" }] } },
      { id: "etrade", term: "E-trading", icon: "coins",
        lines: ["In the past, a **broker** bought and sold shares for the investor.", "With the internet, **e-trading platforms** are now common.", "E-trading lets you trade **by yourself** in websites or apps. **Robo-advisors** are apps that give money advice.", "More people can invest, and companies can trade faster from anywhere."],
        pick: { prompt: "With e-trading you can trade…", answer: 0, right: "You can trade **by yourself**.",
          options: [{ label: "By yourself in an app", icon: "phone" }, { label: "Only by letter", icon: "mail" }] } }
    ],
    activities: [
      { type: "sort", kind: "Sort", title: "Can I use it?",
        hint: "Look at the cards about copyright. EKB, Creative Commons and very old work are free to use. Other work needs permission.",
        done: "Free to use: EKB, Creative Commons, and work by creators who died 50 or more years ago. Everything else: ask first.",
        boxes: [{ id: "use", label: "Use it", icon: "tick" }, { id: "ask", label: "Ask the creator first", icon: "speech" }],
        cards: [
          { label: "An article from the EKB", box: "use" }, { label: "A photo with a Creative Commons licence", box: "use" },
          { label: "A book by a writer who died 60 years ago", box: "use" }, { label: "Your friend's drawing", box: "ask" },
          { label: "A song by a living singer", box: "ask" }, { label: "A video someone made last week", box: "ask" }
        ] },
      { type: "trade", kind: "Game", title: "Buy and sell shares",
        intro: "This is a pretend game. Buy shares in a pretend company called **Block Builders**.",
        coins: 100, company: "Block Builders", price: 20,
        parent: "Parent: you play the **broker**. When Murad asks the broker, wait a moment, then tap the broker button.",
        done: "With a broker you wait. With e-trading you trade by yourself, faster." }
    ],
    checks: [
      tf("Copyright means someone's invention, creation, or idea that is protected by law from being copied by someone else.", true, "copyright", "It is true."),
      tf("Copyright includes video and web material only.", false, "copyright", "It is false. It covers **written, visual, audio, video and web** material."),
      tf("Work in data libraries, such as (EKB) is approved for use.", true, "free", "It is true."),
      tf("A stock exchange is a market where buyers and sellers deal in units of company stock.", true, "stock", "It is true."),
      tf("The Egyptian stock exchange allows citizens to invest in a few market sectors.", false, "stock", "It is false. They can invest in **any** market sector."),
      mcq("\"_____\" refers to work that has been granted permission to share by the creator.", ["Creative Commons", "Copyright", "Facts"], 0, "free", "That is **Creative Commons**."),
      mcq("Egypt states that no creator permission is needed in the public domain if the creator has been deceased for at least _____ years.", ["10", "50", "100"], 1, "free", "At least **50** years."),
      mcq("With the spread of the internet, _____ platforms are now commonplace.", ["shops", "games", "e-trading"], 2, "etrade", "**E-trading** platforms.")
    ]
  });

  /* ---------------- Lesson 5 · Cloud Storage of Files ---------------- */
  murad({
    id: "murad-t2-l5", order: 25, where: "Theme 2 · Lesson 5", title: "Cloud Storage of Files", doLabel: "Sort and make folders",
    facts: [
      { id: "cloud", term: "Cloud computing", icon: "cloud",
        lines: ["**Cloud computing** means storing and opening data and programs on **remote servers** on the internet.", "You can reach your files **from anywhere, at any time**.", "Remote servers connect users who are **not** on the local area network (LAN).", "Examples: **OneDrive** in Microsoft 365, and **Google Drive**."],
        pick: { prompt: "Microsoft 365's cloud app is…", answer: 0, right: "It is **OneDrive**.",
          options: [{ label: "OneDrive", icon: "cloud" }, { label: "OneNote", icon: "note" }] } },
      { id: "good", term: "Good things about the cloud", icon: "tick",
        lines: ["It **frees up space** on your devices.", "You can open your files from **many devices**, if you have internet.", "It gives a **backup** of your files.", "It adds **security** with passwords and **data encryption**.", "You can **share** files with people you allow."],
        pick: { prompt: "The cloud gives you…", answer: 0, right: "A **backup** and extra **security**.",
          options: [{ label: "A backup and security", icon: "shield" }, { label: "A printer", icon: "printer" }] } },
      { id: "bad", term: "Problems with the cloud", icon: "warning",
        lines: ["You need an **internet connection**. Without it, you cannot open files that are only in the cloud.", "Cloud storage is often **paid**. More space costs more.", "A **data breach** is when people without permission get secret data. If your cloud service has one, your data may be at risk. Cloud services are still very safe overall."],
        pick: { prompt: "Cloud storage needs…", answer: 0, right: "It needs **internet**.",
          options: [{ label: "Internet", icon: "wifi" }, { label: "Nothing", icon: "cross" }] } },
      { id: "folders", term: "Organising files in the cloud", icon: "folder",
        lines: ["1. Make **separate folders** for photos, videos, audio and documents.", "2. Keep **school** and **personal** files in separate folders.", "3. **Label folders** and subfolders clearly.", "4. Use **strong passwords**.", "5. Use **MFA** too. All large, trusted cloud services **offer MFA**."],
        pick: { prompt: "Keep school and personal files…", answer: 0, right: "In **separate** folders.",
          options: [{ label: "In separate folders", icon: "folder" }, { label: "Mixed together", icon: "cross" }] } }
    ],
    activities: [
      { type: "sort", kind: "Sort", title: "Good thing or problem?",
        hint: "Look at the two cards about the cloud again.",
        done: "The cloud has good things and problems.",
        boxes: [{ id: "good", label: "Good thing", icon: "tick" }, { id: "bad", label: "Problem", icon: "warning" }],
        cards: [
          { label: "Frees up space on your device", box: "good" }, { label: "Open files from many devices", box: "good" }, { label: "Gives a backup", box: "good" },
          { label: "Share files with people you allow", box: "good" }, { label: "Needs internet", box: "bad" }, { label: "Often costs money", box: "bad" },
          { label: "Data breach risk", box: "bad" }
        ] },
      { type: "sort", kind: "Sort", title: "Put each file in the right folder",
        hint: "Look at the kind of file: photo, video, audio or document.",
        done: "Separate folders make files quick and easy to find.",
        boxes: [{ id: "ph", label: "Photos", icon: "image" }, { id: "vi", label: "Videos", icon: "video" }, { id: "au", label: "Audio", icon: "music" }, { id: "do", label: "Documents", icon: "file" }],
        cards: [
          { label: "minecraft-house.jpg", icon: "image", box: "ph" }, { label: "roblox-game.mp4", icon: "video", box: "vi" },
          { label: "favourite-song.mp3", icon: "music", box: "au" }, { label: "ict-homework.docx", icon: "file", box: "do" }
        ] },
      { type: "steps", kind: "Real device", title: "Make your folders", icon: "folder", device: "the laptop",
        steps: ["Open the **Files** app (the file manager).", "Make a folder called **School** and a folder called **Personal**.", "Inside **Personal**, make folders called **Photos**, **Videos**, **Audio** and **Documents**.", "Move one file into the right folder."],
        parent: "Parent: on the laptop, right-click in the folder window and choose New Folder, or the Files app's own new-folder button.",
        done: "Your files now have clear, labelled folders." }
    ],
    checks: [
      tf("Cloud computing enables users to access files easily from anywhere and at any time.", true, "cloud", "It is true."),
      tf("Remote servers connect users who are on the local area network (LAN) to access data via the internet.", false, "cloud", "It is false. They connect users who are **not** on the LAN."),
      tf("One of the advantages of cloud computing is that it frees up space on your devices.", true, "good", "It is true."),
      tf("Cloud computing allows you to log in and access your files from one device only.", false, "good", "It is false. You can use **many devices**."),
      tf("Cloud computing doesn't require you to have an internet connection.", false, "bad", "It is false. It **needs internet**."),
      tf("Cloud storage is often a free service.", false, "bad", "It is false. It is often **paid**."),
      tf("If the cloud service you are using is a victim of a data breach, you may become a victim too.", true, "bad", "It is true."),
      tf("Having a document management system allows you to organize your documents.", true, "folders", "It is true."),
      tf("Separate school and personal information with one folder for each.", true, "folders", "It is true."),
      tf("All the large and reputable cloud storage services don't offer MFA.", false, "folders", "It is false. They all **offer MFA**."),
      tf("Keep separate folders depending on the file type.", true, "folders", "It is true."),
      tf("Be sure to use a strong password for any account you have on a cloud storage platform.", true, "folders", "It is true."),
      mcq("The cloud computing used in Microsoft 365 is _____ application.", ["OneNote", "OneDrive", "Google Drive"], 1, "cloud", "It is **OneDrive**."),
      mcq("Cloud computing provides _____.", ["a backup for your files", "an extra layer of security", "(a & b)"], 2, "good", "Both: **(a & b)**."),
      mcq("Data encryption converts data into a code to prevent _____ user access.", ["all", "unauthorized", "authorized"], 1, "good", "It stops **unauthorized** access."),
      mcq("A _____ occurs when unauthorized parties gain access to confidential data and information.", ["data breach", "data encryption", "database"], 0, "bad", "That is a **data breach**."),
      mcq("Label _____ and subfolders clearly, so it's easy to find what you are looking for.", ["programs", "folders", "applications"], 1, "folders", "Label **folders**."),
      mcq("Create _____ passwords for files.", ["easy", "weak", "strong"], 2, "folders", "Create **strong** passwords.")
    ]
  });

  /* ---------------- Lesson 6 · Cloud Computing Applications ---------------- */
  murad({
    id: "murad-t2-l6", order: 26, where: "Theme 2 · Lesson 6", title: "Cloud Computing Applications", doLabel: "Match and upload",
    notes: ["The real OneDrive step needs a Microsoft account. If there is none, skip it: the on-screen ordering activity covers the same steps."],
    facts: [
      { id: "suites", term: "Two big app suites", icon: "cloud",
        lines: ["**Microsoft 365** and **Google Workspace** are the most popular cloud computing software.", "Microsoft 365 has **Teams, Word, Excel, PowerPoint**, the email app **Outlook**, and the storage app **OneDrive**."],
        pick: { prompt: "Microsoft's email app is…", answer: 0, right: "It is **Outlook**.",
          options: [{ label: "Outlook", icon: "mail" }, { label: "Gmail", icon: "mail" }] } },
      { id: "apps", term: "What each app does", icon: "list",
        lines: ["**Word** opens a blank document to write ideas, a story or an assignment.", "**PowerPoint** helps you make a **presentation**.", "**OneDrive** helps you **share** work with your friends."],
        pick: { prompt: "PowerPoint helps you make a…", answer: 1, right: "A **presentation**.",
          options: [{ label: "Mail", icon: "mail" }, { label: "Presentation", icon: "slides" }, { label: "Folder", icon: "folder" }] } },
      { id: "onedrive", term: "OneDrive", icon: "cloud",
        lines: ["**OneDrive** lets you **store, share and open files from any device**. It is easy to use.", "Upload files, then click **Share** to share them.", "You decide each person's access: **view only** or **edit**."],
        pick: { prompt: "To share in OneDrive, click…", answer: 0, right: "Click **Share**.",
          options: [{ label: "Share", icon: "share" }, { label: "Save", icon: "file" }, { label: "Open", icon: "folder" }] } },
      { id: "upload", term: "Upload to OneDrive", icon: "upload",
        lines: ["1. In Chrome, **sign in** to Microsoft Office.", "2. Select **OneDrive**.", "3. Select **Upload Files** or **Upload Folder**.", "4. Select the files or folder.", "5. Select **Open** or **Folder**."],
        pick: { prompt: "Can you upload a whole folder?", answer: 0, right: "Yes: **Upload Folder**.",
          options: [{ label: "Yes", icon: "folder" }, { label: "No, files only", icon: "file" }] } },
      { id: "save", term: "Save to OneDrive", icon: "file",
        lines: ["1. Select **File**, then **Save a Copy**, then **OneDrive**.", "2. Type a name for the file.", "3. Select **Save**.", "Next time you open the Office app, the file is in your OneDrive."],
        pick: { prompt: "The first step to save is…", answer: 0, right: "**File**, then Save a Copy.",
          options: [{ label: "File", icon: "file" }, { label: "Delete", icon: "cross" }] } }
    ],
    activities: [
      { type: "sort", kind: "Match", title: "Which app does this job?",
        hint: "Look at the card about what each app does.",
        done: "Each Microsoft 365 app has its own job.",
        boxes: [{ id: "w", label: "Write a story or assignment" }, { id: "p", label: "Make a presentation" }, { id: "o", label: "Send email" }, { id: "d", label: "Store and share files" }],
        cards: [{ label: "Word", icon: "doc", box: "w" }, { label: "PowerPoint", icon: "slides", box: "p" }, { label: "Outlook", icon: "mail", box: "o" }, { label: "OneDrive", icon: "cloud", box: "d" }] },
      { type: "sort", kind: "Order", title: "Put the upload steps in order",
        hint: "Look at the upload card again. You sign in first.",
        done: "Sign in, OneDrive, Upload, choose files, Open.",
        boxes: [{ id: "u1", label: "1" }, { id: "u2", label: "2" }, { id: "u3", label: "3" }, { id: "u4", label: "4" }, { id: "u5", label: "5" }],
        cards: [
          { label: "Sign in to Microsoft Office", box: "u1" }, { label: "Select OneDrive", box: "u2" }, { label: "Select Upload Files", box: "u3" },
          { label: "Select the files", box: "u4" }, { label: "Select Open", box: "u5" }
        ] },
      { type: "steps", kind: "Real device", title: "Upload one file to OneDrive", icon: "upload", device: "the laptop, with a Microsoft account",
        steps: ["Open the web browser and sign in to Microsoft Office.", "Select **OneDrive**.", "Select **Upload Files**.", "Choose one file, then select **Open**.", "Find your file in OneDrive."],
        parent: "Parent: this needs a Microsoft account. If there is none, skip this step.",
        done: "Your file is in the cloud." }
    ],
    checks: [
      tf("Google offers a whole suite of productivity apps such as Teams and Word.", false, "suites", "It is false. **Microsoft 365** has Teams and Word."),
      tf("Microsoft 365 and Google Workspace are the most popular software that deal with cloud computing applications.", true, "suites", "It is true."),
      tf("The Paint program allows you to store, share, and access files from any device.", false, "onedrive", "It is false. **OneDrive** does that."),
      tf("You can't decide what level of access each person you share with will get.", false, "onedrive", "It is false. You choose **view only** or **edit**."),
      tf("We can upload files to OneDrive only.", false, "upload", "It is false. You can also **upload folders**."),
      mcq("Microsoft e-mail platform is _____.", ["Outlook", "Gmail", "Yahoo mail"], 0, "suites", "It is **Outlook**."),
      mcq("Microsoft _____ lets you open a blank document that allows you to draft ideas, a story, or an assignment.", ["Excel", "Teams", "Word"], 2, "apps", "That is **Word**."),
      mcq("PowerPoint helps you create a _____.", ["mail", "presentation", "folder"], 1, "apps", "A **presentation**."),
      mcq("_____ helps you share work with your friends.", ["Website", "OneDrive", "PowerPoint"], 1, "apps", "**OneDrive**."),
      mcq("In OneDrive, upload your files and then click on the _____ option to share with others.", ["share", "save", "open"], 0, "onedrive", "Click **Share**.")
    ]
  });
})();
