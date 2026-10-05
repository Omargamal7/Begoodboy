/* Jimmy · Primary 5 ICT · first term binder 2025-2026 · Theme 2.
   Every fact and every check question comes from the binder. The check keeps the binder's exact wording.
   Q.open marks a question whose answer is not written in the binder text. */
(function () {
  "use strict";
  var tf = Q.tf, mcq = Q.mcq, word = Q.word;

  /* ---------------- Lesson 1 · Methods of Protecting Data and Information ---------------- */
  var bank1 = ["Antivirus software", "hacker", "address", "your passwords", "protect"];
  jimmy({
    id: "jimmy-t2-l1", order: 21, where: "Theme 2 · Lesson 1", title: "Methods of Protecting Data and Information",
    notes: ["One question (\"One of the ways to protect your files is to limit the personal information you share online\") mixes two different lists in the binder, so its answer is unclear. The sheet shows it but does not score it."],
    facts: [
      { id: "pii", term: "Stolen data", icon: "person",
        lines: ["**Hackers** use the internet to break into computers and steal personal information: your **name, address, date of birth and passwords**.", "This is called **PII**: Personally Identifiable Information.", "A hacker can use someone's email and password to send a **virus** to all their contacts, or use an adult's bank account number to **take money**."],
        pick: { prompt: "Hackers can send a…", answer: 1, right: "A **virus**.",
          options: [{ label: "Gift", icon: "star" }, { label: "Virus", icon: "virus" }, { label: "Reward", icon: "coins" }] } },
      { id: "safe", term: "Keep your PII safe", icon: "shield",
        lines: ["**Share little** personal information online.", "If a website asks for **too much** personal information, **do not sign up**.", "Use **different strong passwords** with letters, numbers and special signs.", "Use **antivirus software** on all your devices.", "**Update** your devices regularly."],
        pick: { prompt: "Use … passwords for different sites.", answer: 2, right: "**Different** passwords.",
          options: [{ label: "The same", icon: "key" }, { label: "Weak", icon: "key" }, { label: "Different", icon: "key" }] } },
      { id: "backup", term: "Protect the files", icon: "harddrive",
        lines: ["Some apps and programs **back up data automatically**.", "A storage device you attach to your computer, like a **flash drive** or an **external hard drive**, is a **hybrid backup**.", "An external hard disk saves your files securely and keeps **backup copies**.", "The **hard disk has more space** than flash memory."],
        pick: { prompt: "Which has more space?", answer: 0, right: "The **hard disk**.",
          options: [{ label: "Hard disk", icon: "harddrive" }, { label: "Flash memory", icon: "flash" }] } }
    ],
    activities: [
      { type: "sort", kind: "Sort", title: "Private or OK to share?",
        hint: "Look at the stolen data card. Name, address, date of birth and passwords are PII.",
        done: "Keep PII private. Some things are fine to share.",
        boxes: [{ id: "pii", label: "PII: keep it private", icon: "lock" }, { id: "ok", label: "OK to share", icon: "tick" }],
        cards: [
          { label: "Your full name", box: "pii" }, { label: "Your home address", box: "pii" }, { label: "Your date of birth", box: "pii" }, { label: "Your passwords", box: "pii" },
          { label: "Your favourite football team", box: "ok" }, { label: "Your favourite colour", box: "ok" }
        ] },
      { type: "steps", kind: "Real device", title: "Make a backup copy", icon: "flash", device: "the laptop and a flash drive or external hard drive",
        steps: ["Plug the flash drive or external hard drive into the laptop.", "Open the **Files** app.", "Copy one of your files onto the drive.", "Open the drive and check the copy is there."],
        parent: "Parent: if there is no flash drive or external drive at home, skip this step.",
        done: "This is a **hybrid backup**." }
    ],
    checks: [
      tf("Antivirus software must be installed on your device.", true, "safe", "It is true."),
      tf("Limit the personal information you share online.", true, "safe", "It is true."),
      tf("Don't sign up for a website if it asks for too much personal information.", true, "safe", "It is true."),
      tf("The storage space of the hard disk is always smaller than the flash memory.", false, "backup", "It is false. The hard disk has **more** space."),
      tf("It is not recommended to use antivirus software on your device.", false, "safe", "It is false. Use **antivirus** on all devices."),
      tf("Some apps and software programs back up data automatically.", true, "backup", "It is true."),
      tf("It is necessary to sign up for websites that ask for a lot of personal information.", false, "safe", "It is false. **Do not sign up.**"),
      tf("We cannot keep our Personally Identifiable Information (PII) secure.", false, "safe", "It is false. There are ways to keep PII safe."),
      tf("There is no way to create a backup of your files.", false, "backup", "It is false. Use a **flash drive or external hard drive**."),
      Q.open("tf", "One of the ways to protect your files is to limit the personal information you share online."),
      mcq("Hackers can send a _____.", ["gift", "virus", "reward"], 1, "pii", "A **virus**."),
      mcq("Use _____ passwords for different sites to keep your information safe.", ["the same", "weak", "different"], 2, "safe", "**Different** passwords."),
      mcq("Backup copies of files are created on _____.", ["flash memory", "external hard disk", "both of them"], 2, "backup", "**Both of them**."),
      mcq("Using a data-storage device that you attach to your computer is called _____.", ["hybrid backup", "copying files", "storing data"], 0, "backup", "A **hybrid backup**."),
      mcq("The _____ has more space than the Flash Memory.", ["router", "hard disk", "cable"], 1, "backup", "The **hard disk**."),
      word("Personal information means, your name, date of birth, and _____.", bank1, 2, "pii", "**address**."),
      word("You should know how to _____ the files that you create or store on a device.", bank1, 4, "backup", "**protect**."),
      word("Hackers use the Internet to break into computer systems and steal _____.", bank1, 3, "pii", "**your passwords**."),
      word("Using _____ on all of your devices keeps your personal information safe.", bank1, 0, "safe", "**Antivirus software**."),
      word("A _____ can use an adult's bank account number to steal his money.", bank1, 1, "pii", "A **hacker**.")
    ]
  });

  /* ---------------- Lesson 2 · Managing Passwords ---------------- */
  var bank2 = ["grammar errors", "stolen online", "Phishing", "password manager"];
  jimmy({
    id: "jimmy-t2-l2", order: 22, where: "Theme 2 · Lesson 2", title: "Managing Passwords",
    notes: ["One question (\"The password manager program allows users to provide user passwords\") is unclear in the binder. The sheet shows it but does not score it."],
    facts: [
      { id: "phish", term: "Phishing and smishing", icon: "hook",
        lines: ["Hackers have many ways to get your password. One is **phishing**.", "**Phishing** is a message by email or social media that **looks real but is not**. It tries to steal your data.", "One kind says you **won a prize** but asks for bank details. Another tells you to **act quickly**.", "**Smishing** is the same thing by **text message**."],
        pick: { prompt: "Smishing uses a…", answer: 2, right: "A **text message**.",
          options: [{ label: "Picture", icon: "image" }, { label: "Video", icon: "video" }, { label: "Text message", icon: "phone" }] } },
      { id: "spot", term: "Spot a phishing message", icon: "search",
        lines: ["Look for **misspelled words**.", "Look for **grammar errors**.", "Look for **requests for too much personal data**."],
        pick: { prompt: "Phishing messages often have…", answer: 0, right: "**Grammar errors** and misspelled words.",
          options: [{ label: "Grammar errors", icon: "warning" }, { label: "Perfect spelling", icon: "tick" }] } },
      { id: "manager", term: "Password managers", icon: "key",
        lines: ["You need **strong passwords** to protect your data from hackers. Strong passwords use letters, numbers and special signs.", "A **password manager** creates a **strong, unique password** for each account.", "It tells you if a password is **too weak** or **reused**.", "It can tell you if a password has been **stolen online**."],
        pick: { prompt: "A password manager creates…", answer: 0, right: "**Strong, unique** passwords.",
          options: [{ label: "Strong passwords", icon: "key" }, { label: "Viruses", icon: "virus" }] } },
      { id: "mfa", term: "Multi-factor authentication (MFA)", icon: "lock",
        lines: ["**MFA** makes your password **stronger**.", "It checks who you are in **at least two ways**.", "It joins your **password or PIN** with an **email** or a **one-time code** (verification code)."],
        pick: { prompt: "MFA uses at least…", answer: 0, right: "**Two ways**.",
          options: [{ label: "Two ways", icon: "lock" }, { label: "One way", icon: "key" }] } }
    ],
    activities: [
      Q.practice("Message: \"Congradulations! You won a prize. Send you're bank number now.\" Which sign shows it is fake?", ["Misspelled words and grammar errors", "It is short", "It has a full stop"], 0,
        "**Congradulations** and **you're** are mistakes, and it asks for bank details.", "Look for misspelled words, grammar errors, or a request for personal data."),
      Q.practice("Message: \"Act quickly! Tell us your name, address, date of birth and password to keep your account.\" Which sign shows it is fake?", ["It asks for too much personal data", "It uses capital letters", "It is in English"], 0,
        "It asks for **too much personal data**.", "Look at what the message asks you to give."),
      { type: "sort", kind: "Sort", title: "Build the two locks of MFA",
        hint: "Lock 1 is a password or PIN. Lock 2 is an email or one-time code.",
        done: "Two locks together: that is multi-factor authentication.",
        boxes: [{ id: "l1", label: "Lock 1: password or PIN", icon: "key" }, { id: "l2", label: "Lock 2: email or one-time code", icon: "mail" }],
        cards: [{ label: "Your password", box: "l1" }, { label: "Your PIN", box: "l1" }, { label: "A one-time code sent to you", box: "l2" }, { label: "An email to check it is you", box: "l2" }] },
      { type: "steps", kind: "Real device", title: "Look at your passwords settings", icon: "key", device: "the tablet",
        steps: ["With your parent, open **Settings**.", "Find **Passwords**, **Password manager** or **Google** settings.", "Look at the list of options. **Look only. Do not open any saved passwords.**"],
        parent: "Parent: menu names differ by device. Keep saved passwords closed.",
        done: "Devices have password managers built in." }
    ],
    checks: [
      tf("Password manager software is used to create strong passwords.", true, "manager", "It is true."),
      Q.open("tf", "The password manager program allows users to provide user passwords."),
      tf("Strong passwords must contain only letters and numbers.", false, "manager", "It is false. Strong passwords also use **special signs**."),
      tf("The password mustn't be more than 4 numbers.", false, "manager", "It is false. Strong passwords are long and mix letters, numbers and signs."),
      tf("The password must be strong.", true, "manager", "It is true."),
      tf("You do not need strong passwords to protect your personal data from hackers.", false, "manager", "It is false. You **need** strong passwords."),
      tf("A password manager can tell you if one of your passwords has been stolen online.", true, "manager", "It is true."),
      tf("There are many ways hackers can get your passwords; one way is called phishing.", true, "phish", "It is true."),
      tf("You can recognize phishing messages as they contain grammatical errors.", true, "spot", "It is true."),
      tf("Passwords can be strengthened through Multi-Factor Authentication.", true, "mfa", "It is true."),
      mcq("One of the forms of _____ is the arrival of a message from an unknown person asking you for your data to obtain a prize.", ["Internet", "phishing", "password manager"], 1, "phish", "**Phishing**."),
      mcq("Smishing means sending a _____ says that you have won a prize.", ["pictures", "video", "text message"], 2, "phish", "A **text message**."),
      mcq("The _____ tries to obtain the bank account number of an adult to steal his money.", ["programmer", "hacker", "password manager"], 1, "phish", "The **hacker**."),
      mcq("An example of phishing is the arrival of a message _____ from an unknown person.", ["to shut down your computer", "that you won a prize", "to call someone"], 1, "phish", "A message **that you won a prize**."),
      word("A _____ creates a strong unique password for each of your accounts.", bank2, 3, "manager", "A **password manager**."),
      word("_____ is sending a message via e-mail or social media applications, that looks real, but isn't.", bank2, 2, "phish", "**Phishing**."),
      word("You can identify phishing messages, they contain a lot of _____, or request too much personal data.", bank2, 0, "spot", "**grammar errors**."),
      word("A password manager can tell you if one of your passwords has been _____.", bank2, 1, "manager", "**stolen online**.")
    ]
  });

  /* ---------------- Lesson 3 · Dealing with Official Electronic Websites ---------------- */
  jimmy({
    id: "jimmy-t2-l3", order: 23, where: "Theme 2 · Lesson 3", title: "Dealing with Official Electronic Websites",
    notes: ["One question (\"All scam sites operate the same way\") is unclear in the binder. The sheet shows it but does not score it."],
    facts: [
      { id: "scam", term: "Scam websites", icon: "warning",
        lines: ["**Some** websites are scam websites. They can be **phishing websites** with fake situations to get your information.", "**Shopping sites** that never send the right items you bought.", "**Scareware** sites that say your computer has a problem and you must download something.", "**Sweepstakes** scams that offer a prize that never comes."],
        pick: { prompt: "A prize that never comes is a…", answer: 1, right: "A **sweepstakes** scam.",
          options: [{ label: "Shopping site", icon: "cart" }, { label: "Sweepstakes", icon: "star" }] } },
      { id: "how", term: "How scam websites work", icon: "list",
        lines: ["1. They **bait** you: they try to get you excited and **draw your attention**.", "2. They take your **privacy**: your personal information or your device.", "3. They **use your information in a bad way**, or hack your device for money."],
        pick: { prompt: "Scam websites use your information in a…", answer: 1, right: "In a **bad** way.",
          options: [{ label: "Good way", icon: "tick" }, { label: "Bad way", icon: "cross" }] } },
      { id: "avoid", term: "Avoiding scam websites", icon: "search",
        lines: ["Check that the **URL** is **credible**.", "Check for **misspellings and bad grammar**. A reliable site does not have many mistakes.", "**Search online** to see if it is a known scam.", "Always **check the sites** you visit."],
        pick: { prompt: "A reliable website has…", answer: 1, right: "**Few or no** mistakes.",
          options: [{ label: "Many spelling mistakes", icon: "warning" }, { label: "Few or no mistakes", icon: "tick" }] } },
      { id: "url", term: "The three parts of a URL", icon: "link",
        lines: ["**URL** means **Uniform Resource Locator**. It is the website address.", "Every URL has **three** parts. In **https://www.ekb.com/index.html**:", "1. **Protocol** (first): how information moves, like **http** or **https**.", "2. **Resource name** (second): the site, often ending **.com, .net, .org, .gov or .edu**.", "3. **File path**: the exact page, like **index.html**."],
        pick: { prompt: "The first part of a URL is the…", answer: 0, right: "The **protocol**.",
          options: [{ label: "Protocol", icon: "link" }, { label: "File path", icon: "file" }] } },
      { id: "report", term: "If you meet a scam website", icon: "person",
        lines: ["**Tell a trusted adult**, like your parents or teacher.", "Contact the **child helpline** or the **General Department for Combating Internet Crimes**.", "**Report** the scam website to the service provider, the shop and the bank, with help from your teacher or family."],
        pick: { prompt: "If you find a scam website, you should…", answer: 0, right: "**Report it** and tell a trusted adult.",
          options: [{ label: "Report it", icon: "speech" }, { label: "Give your data", icon: "cross" }] } }
    ],
    activities: [
      { type: "sort", kind: "Sort", title: "Split the URL",
        intro: "Put each part of **https://www.ekb.com/index.html** in its place.",
        hint: "The protocol comes first, the resource name is the site, and the file path is the page.",
        done: "Protocol, resource name, file path.",
        boxes: [{ id: "p", label: "1. Protocol", icon: "link" }, { id: "r", label: "2. Resource name", icon: "internet" }, { id: "f", label: "3. File path", icon: "file" }],
        cards: [{ label: "https://", box: "p" }, { label: "www.ekb.com", box: "r" }, { label: "/index.html", box: "f" }] },
      { type: "sort", kind: "Sort", title: "Which scam is it?",
        hint: "Look at the scam websites card again.",
        done: "Shopping scams, scareware and sweepstakes: three kinds of scam website.",
        boxes: [{ id: "shop", label: "Shopping scam", icon: "cart" }, { id: "scare", label: "Scareware", icon: "warning" }, { id: "sweep", label: "Sweepstakes", icon: "star" }],
        cards: [
          { label: "You paid for football boots but they never came", box: "shop" }, { label: "\"Your computer has a problem! Download this now!\"", box: "scare" },
          { label: "\"You won a Real Madrid shirt! Enter your details.\" It never comes.", box: "sweep" }
        ] },
      { type: "steps", kind: "Real device", title: "Read a real URL", icon: "link", device: "the laptop or tablet, with your parent",
        steps: ["Open the web browser and go to **www.ekb.eg**.", "Tap the address bar to see the full URL.", "Find the **protocol** (https), then the **resource name**."],
        parent: "Parent: stay beside Jimmy on the internet.",
        done: "You found the parts of a real URL." }
    ],
    checks: [
      tf("All websites are fake, including online shopping sites.", false, "scam", "It is false. Only **some** websites are scams."),
      tf("The website address (URL) enables you to access the site that you want.", true, "url", "It is true."),
      tf("A reliable source may include many spelling mistakes and grammatical errors.", false, "avoid", "It is false. Many mistakes are a sign of a scam."),
      tf("You must check the sites that you visit on the Internet.", true, "avoid", "It is true."),
      tf("Some websites are scam websites.", true, "scam", "It is true."),
      tf("There is no helpline for helping the child.", false, "report", "It is false. There is a **child helpline**."),
      tf("Scareware websites say your device has a problem and you need to download something.", true, "scam", "It is true."),
      Q.open("tf", "All scam sites operate the same way."),
      tf("If you are a victim of a website, don't report it.", false, "report", "It is false. **Report it.**"),
      tf("Scam websites try to draw your attention to it.", true, "how", "It is true."),
      tf("Scam websites use your information in a good way.", false, "how", "It is false. They use it in a **bad** way."),
      tf("The protocol of the URL is the last part.", false, "url", "It is false. The protocol is the **first** part."),
      mcq("If you find a _____, contact the Child Helpline.", ["scam website", "government website", "educational website"], 0, "report", "A **scam website**."),
      mcq("If you fall victim to a scam website, you should _____.", ["report the site", "give your personal data", "give your parents' data"], 0, "report", "**Report the site**."),
      mcq("URL stands for _____.", ["Uniform Reliable Locator", "Uniform Resource Locator", "United Resource Locator"], 1, "url", "**Uniform Resource Locator**."),
      mcq("Some websites maybe _____ that present fake situations to get our information.", ["online website", "free websites", "phishing websites"], 2, "scam", "**Phishing websites**."),
      mcq("_____ are scam websites that offers you a prize that never comes.", ["Online website", "Sweepstakes", "Shopping websites"], 1, "scam", "**Sweepstakes**."),
      mcq("Some _____ are scam websites that never send you the correct items you bought.", ["shopping sites", "programs", "operating systems"], 0, "scam", "**Shopping sites**."),
      mcq("If you are a victim of a website, you can contact _____.", ["child helpline", "your parents or teacher", "all the previous"], 2, "report", "**All the previous**."),
      mcq("All URLs are made up of _____ main parts.", ["three", "two", "four"], 0, "url", "**Three** parts."),
      mcq("The resource name often ends with _____.", [".com or .net", ".org or .gov", "all the previous"], 2, "url", "**All the previous**."),
      mcq("The second part of the URL is the _____.", ["protocol", "resource name", "file path"], 1, "url", "The **resource name**.")
    ]
  });

  /* ---------------- Lesson 4 · Publishing Rights ---------------- */
  var bank4 = ["Facts and discoveries", "permission", "websites", "bottom", "Copyright"];
  jimmy({
    id: "jimmy-t2-l4", order: 24, where: "Theme 2 · Lesson 4", title: "Publishing Rights",
    notes: ["Murad's Primary 6 booklet (same school) says copyright covers audio material, which supports the music question.",
      "One question (\"You can use … to find out if one of your photos has been used without your permission\") is not answered in the binder. The sheet shows it but does not score it.",
      "The words \"bottom\" and \"Facts and discoveries\" in the complete-the-sentence question are not in the lesson text. They are the only two words left over, and only \"Facts and discoveries\" fits \"… are not covered\"."],
    facts: [
      { id: "law", term: "Copyright", icon: "copyright",
        lines: ["**Copyright law** protects **print and digital** content.", "It gives creators **legal protection** for what they create.", "The international symbol is **©**.", "It covers **books, images, games, movies, computer software and websites**. Murad's booklet adds **audio**, such as music."],
        pick: { prompt: "The copyright symbol is…", answer: 2, right: "**©**.",
          options: [{ label: "☺", icon: "face" }, { label: "£", icon: "coins" }, { label: "©", icon: "copyright" }] } },
      { id: "fair", term: "Using others' work fairly", icon: "heart",
        lines: ["**Respect** the creator's work and use it fairly.", "**Ask for permission** and **give credit** to the creator.", "Never take someone's work and put **your** name on it."],
        pick: { prompt: "Before you use copyrighted work, ask for…", answer: 0, right: "Ask for **permission**.",
          options: [{ label: "Permission", icon: "speech" }, { label: "Nothing", icon: "cross" }] } },
      { id: "free", term: "Free to use", icon: "share",
        lines: ["**Creative Commons**: the creator lets you reuse the work **anytime, anywhere**.", "The **public domain** is all creative work **not covered** by copyright.", "Egyptian law lets you use a creator's work freely **50 years** after the creator's death."],
        pick: { prompt: "Egyptian law: … years after the creator's death.", answer: 1, right: "**50** years.",
          options: [{ label: "20", icon: "list" }, { label: "50", icon: "list" }] } },
      { id: "writing", term: "Writing and images", icon: "note",
        lines: ["Use only **a small part** of someone's writing in a research paper.", "Use the **exact words**, or **paraphrase** the ideas in your own style. Always **name the writers**.", "Protected images show the title, the artist's or photographer's name, or a link.", "You can always **make or take your own** photos instead."],
        pick: { prompt: "Instead of asking for a photo, you can…", answer: 0, right: "**Take your own** photo.",
          options: [{ label: "Take your own", icon: "camera" }, { label: "Copy it secretly", icon: "cross" }] } }
    ],
    activities: [
      { type: "sort", kind: "Sort", title: "Can I use it?",
        hint: "Creative Commons, public domain and very old work are free. Other work needs permission and credit.",
        done: "Free: Creative Commons, public domain, your own work. Others: ask and give credit.",
        boxes: [{ id: "free", label: "Use freely", icon: "tick" }, { id: "ask", label: "Ask permission and give credit", icon: "speech" }, { id: "own", label: "Make my own instead", icon: "camera" }],
        cards: [
          { label: "A photo with a Creative Commons licence", box: "free" }, { label: "A story by a writer who died 60 years ago", box: "free" },
          { label: "A photo marked ©", box: "ask" }, { label: "A paragraph from a website for your research", box: "ask" },
          { label: "You need a photo of a football but cannot get permission", box: "own" }
        ] },
      { type: "steps", kind: "Real device", title: "Find a copyright notice", icon: "copyright", device: "the laptop or tablet, with your parent",
        steps: ["Open the web browser and go to **www.ekb.eg**.", "Scroll down to the **bottom** of the home page.", "Look for the **©** symbol."],
        parent: "Parent: many websites put their copyright notice at the bottom of the home page.",
        done: "You found where websites show copyright." }
    ],
    checks: [
      tf("Copyright law protects both print and digital content.", true, "law", "It is true."),
      tf("Copyright law protects images, music, movies, games, and programs.", true, "law", "It is true."),
      tf("Copyright law doesn't protect images and artworks.", false, "law", "It is false. It **protects images**."),
      tf("You can take the work of others and write your name on it.", false, "fair", "It is false. Never put your name on someone's work."),
      tf("Copyright law gives creators legal protection for the things they create.", true, "law", "It is true."),
      tf("Works in the public domain are not covered by Copyright.", true, "free", "It is true."),
      tf("Egyptian law gives freedom to use a creator's creative work 20 years after their death.", false, "free", "It is false. It is **50** years."),
      tf("When you use copyrighted content, you should not respect the creator's work.", false, "fair", "It is false. **Respect** the creator's work."),
      mcq("The international copyright symbol is _____.", ["☺", "£", "©"], 2, "law", "**©**."),
      Q.open("mcq", "You can use _____ to find out if one of your photos has been used without your permission.", ["searching through images", "Facebook", "video programs"]),
      mcq("Sometimes the owner of a creative work permits to reuse of his work at any time and any place, and this is called _____.", ["Creative Commons", "copyright", "trademark"], 0, "free", "**Creative Commons**."),
      word("_____ law protects print and digital content.", bank4, 4, "law", "**Copyright** law."),
      word("Copyright laws cover many kinds of creations such as computer software and _____.", bank4, 2, "law", "**websites**."),
      word("The copyright of a website is usually at the _____ of the home page.", bank4, 3, "law", "At the **bottom**."),
      word("_____ are not covered by Copyright.", bank4, 0, "free", "**Facts and discoveries**."),
      word("When you use copyrighted content, ask for _____ to use it first.", bank4, 1, "fair", "Ask for **permission**.")
    ]
  });

  /* ---------------- Lesson 5 · Selecting Digital Resources ---------------- */
  jimmy({
    id: "jimmy-t2-l5", order: 25, where: "Theme 2 · Lesson 5", title: "Selecting Digital Resources",
    notes: ["One question (\"Pictures help to get information by …\") is not answered in the binder. The sheet shows it but does not score it."],
    facts: [
      { id: "reliable", term: "Using reliable sources", icon: "checkbox",
        lines: ["First, **identify reliable digital sources** for your research.", "Go to a site by typing its **URL** in the search engine.", "**Ask your teacher or a family member** for help the first time you visit a site."],
        pick: { prompt: "The first step is to select…", answer: 0, right: "**Reliable sources**.",
          options: [{ label: "Reliable sources", icon: "checkbox" }, { label: "Any website", icon: "cross" }] } },
      { id: "fact", term: "Facts and opinions", icon: "quote",
        lines: ["**Facts** come from research and observation. They **can be proven**. They are true for everyone.", "**Opinions** come from someone's views and experience. They **cannot be proven**, but can be debated. They are not true for everyone."],
        pick: { prompt: "Which one can be proven?", answer: 0, right: "A **fact**.",
          options: [{ label: "Fact", icon: "tick" }, { label: "Opinion", icon: "speech" }] } },
      { id: "multi", term: "Use multiple sources", icon: "list",
        lines: ["**Multiple sources** help you know all the important facts.", "If two reliable websites say the same thing, the facts are probably **true**.", "**Write notes** from the first source, then add new facts from the next.", "If two sources disagree, check both are reliable. Follow **copyright rules**."],
        pick: { prompt: "Two reliable sites say the same thing. The fact is probably…", answer: 1, right: "Probably **true**.",
          options: [{ label: "Not true", icon: "cross" }, { label: "True", icon: "tick" }] } },
      { id: "types", term: "Reliable sources", icon: "library",
        lines: ["Encyclopedias.", "Maps, graphs, infographics and charts.", "**Pictures and videos**.", "**Archives and databases**. The **Egyptian Knowledge Bank is an archive**.", "Books, articles, diaries, letters and photographs."],
        pick: { prompt: "The EKB is an example of an…", answer: 0, right: "An **archive**.",
          options: [{ label: "Archive", icon: "database" }, { label: "Opinion", icon: "speech" }] } }
    ],
    activities: [
      { type: "sort", kind: "Sort", title: "Fact or opinion?",
        hint: "A fact can be proven, for example with a score or a date. An opinion is what someone thinks.",
        done: "Facts can be proven. Opinions cannot.",
        boxes: [{ id: "f", label: "Fact", icon: "tick" }, { id: "o", label: "Opinion", icon: "speech" }],
        cards: [
          { label: "Al Ahly is a football club in Egypt.", box: "f" }, { label: "Real Madrid is a football club in Spain.", box: "f" },
          { label: "A football team has 11 players on the pitch.", box: "f" }, { label: "Minecraft is the most fun game ever.", box: "o" },
          { label: "Real Madrid has the best kit.", box: "o" }, { label: "Roblox is better than every other game.", box: "o" }
        ] },
      { type: "steps", kind: "Real device", title: "Check two sources", icon: "search", device: "the laptop or tablet, with your parent",
        steps: ["Open the web browser and type **www.ekb.eg**.", "Find one fact about a topic you like.", "Find the same fact on a second reliable source with your parent.", "Do both sources say the same? Then the fact is probably true."],
        parent: "Parent: help choose reliable sources, and stay beside Jimmy on the internet.",
        done: "You checked a fact in two sources." }
    ],
    checks: [
      tf("Facts are based on a person's opinions and experiences.", false, "fact", "It is false. **Opinions** are based on views and experience."),
      tf("The Egyptian Knowledge Bank is an example of an archive.", true, "types", "It is true."),
      tf("Taking notes when writing a research paper is important.", true, "multi", "It is true."),
      tf("To open a website, type the URL in the search engine.", true, "reliable", "It is true."),
      tf("Following copyright rules and laws is a bad decision.", false, "multi", "It is false. **Follow copyright rules.**"),
      tf("Pictures and videos cannot be reliable sources.", false, "types", "It is false. **Pictures and videos** are reliable sources."),
      tf("You can ask your teacher for help while browsing a site for the first time.", true, "reliable", "It is true."),
      mcq("_____ are results from research and observation and can be proven.", ["Fake information", "Facts", "Opinions"], 1, "fact", "**Facts**."),
      mcq("You can check websites by _____, which is the address of the website.", ["facts", "URL", "blogs"], 1, "reliable", "The **URL**."),
      mcq("Selecting _____ is the first step in searching for information.", ["reliable sources", "files and records", "database"], 0, "reliable", "**Reliable sources**."),
      mcq("_____ can't be proved.", ["Facts", "Opinions", "Problems"], 1, "fact", "**Opinions**."),
      mcq("It is important to identify _____ sources to make a search.", ["unreliable", "reliable", "informal"], 1, "reliable", "**Reliable** sources."),
      Q.open("mcq", "Pictures help to get information by _____.", ["watching", "reading", "writing"]),
      mcq("Using _____ in research, helps make sure you know all the important facts about a topic.", ["Multiple sources", "Information", "Facts"], 0, "multi", "**Multiple sources**."),
      mcq("If two reliable websites include the same information, it means that the facts are _____.", ["not true", "incorrect", "true"], 2, "multi", "**True**.")
    ]
  });

  /* ---------------- Lesson 6 · Documenting Information ---------------- */
  jimmy({
    id: "jimmy-t2-l6", order: 26, where: "Theme 2 · Lesson 6", title: "Documenting Information",
    facts: [
      { id: "notes", term: "Taking notes", icon: "note",
        lines: ["A research paper is written **in your own words**.", "For each source, put the **URL and the author's name at the top** of your notes.", "**Reread** each note. If something is missing, **go back to the source**.", "For important exact words, use **quotation marks**."],
        pick: { prompt: "Put the URL and author's name at the … of your notes.", answer: 0, right: "At the **top**.",
          options: [{ label: "Top", icon: "note" }, { label: "Bottom", icon: "note" }] } },
      { id: "find", term: "Search by keyword", icon: "search",
        lines: ["Press **CTRL + F** and type the word in the search box.", "The keyword is **highlighted** everywhere it appears on the page."],
        pick: { prompt: "To search a page by keyword, press…", answer: 1, right: "**CTRL + F**.",
          options: [{ label: "ALT + F", icon: "search" }, { label: "CTRL + F", icon: "search" }, { label: "Shift + F", icon: "search" }] } },
      { id: "para", term: "Paraphrasing and quotes", icon: "quote",
        lines: ["**Paraphrasing** means explaining the writer's ideas **in your own words**.", "Change some **words**, the **order** of the ideas and the **sentence structure**. This shows respect for the author.", "**Quotes** support your ideas. Say where the quote came from and why you use it, for example: \"According to (author's name)…\"."],
        pick: { prompt: "What supports your ideas?", answer: 1, right: "**Quotes**.",
          options: [{ label: "Posts", icon: "image" }, { label: "Quotes", icon: "quote" }] } },
      { id: "cite", term: "Citing sources", icon: "list",
        lines: ["List your sources on a **Works Cited** page at the **end** of the report.", "Put them in **alphabetical order** by the author's last name, or by the title if there is no author. Then add the source, the date and the URL.", "A **permalink** is a permanent link. Look for a **share** or **cite this** button.", "For a YouTube video: the uploader, the date, the title and the word \"video\", the site name, and the URL."],
        pick: { prompt: "Citations go in … order.", answer: 0, right: "**Alphabetical** order.",
          options: [{ label: "Alphabetical", icon: "list" }, { label: "Numerical", icon: "list" }] } }
    ],
    activities: [
      { type: "sort", kind: "Order", title: "Rebuild the citation",
        intro: "This citation is from your binder. Put its parts back in order.",
        hint: "Look at the citing card: title (when there is no author), then dates and source, then the URL.",
        done: "Egypt beach resorts fight global scourge of plastic trash. (2019, December 21). Arab News. Retrieved August 12, 2022, https://arab.news/pwhre",
        boxes: [{ id: "c1", label: "1" }, { id: "c2", label: "2" }, { id: "c3", label: "3" }, { id: "c4", label: "4" }, { id: "c5", label: "5" }],
        cards: [
          { label: "Egypt beach resorts fight global scourge of plastic trash.", box: "c1" }, { label: "(2019, December 21).", box: "c2" },
          { label: "Arab News.", box: "c3" }, { label: "Retrieved August 12, 2022,", box: "c4" }, { label: "https://arab.news/pwhre", box: "c5" }
        ] },
      Q.practice("Which one is paraphrasing \"Football is played by two teams of eleven players\"?", ["Football is played by two teams of eleven players", "Two teams, each with eleven players, play a football match", "Football"], 1,
        "It keeps the idea but changes the **words**, **order** and **sentence structure**.", "Paraphrasing changes the words and the order, but keeps the idea."),
      { type: "steps", kind: "Real device", title: "Find a keyword with CTRL + F", icon: "search", device: "the laptop, with your parent",
        steps: ["Open the web browser and open a page about Al Ahly or Real Madrid.", "Press **CTRL + F**.", "Type one word, for example **goal**.", "Count how many times it is highlighted."],
        parent: "Parent: stay beside Jimmy on the internet.",
        done: "CTRL + F highlights every place the keyword appears." }
    ],
    checks: [
      tf("When paraphrasing a text, use your own words to explain the writer's idea.", true, "para", "It is true."),
      tf("Re-read each note you took, and if you find that information is missing, go back to the source and look for it.", true, "notes", "It is true."),
      tf("When paraphrasing a text, use the same vocabulary words, the order of the ideas, and the sentence structure.", false, "para", "It is false. **Change** the words, order and structure."),
      tf("When you cite a source, you should put the citations in alphabetical order by the author's last name or the title of the article.", true, "cite", "It is true."),
      tf("For each source, add the URL and the author's name at the bottom of your notes.", false, "notes", "It is false. Put them at the **top**."),
      mcq("_____ support your ideas and arguments.", ["Pictures", "Quotes", "Posts"], 1, "para", "**Quotes**."),
      mcq("We should put the citations in _____ order.", ["alphabetical", "logical", "numerical"], 0, "cite", "**Alphabetical** order."),
      mcq("At the _____ of a research report, you list your sources on a Works Cited page.", ["middle", "end", "beginning"], 1, "cite", "At the **end**."),
      mcq("When the author's quotes are important, use _____ to add them to your notes.", ["quotation marks", "question mark", "comma"], 0, "notes", "**Quotation marks**."),
      mcq("To search an online source by keyword, type _____ and enter the term in the search box.", ["ALT+ F", "CTRL+F", "Shift +F"], 1, "find", "**CTRL+F**.")
    ]
  });
})();
