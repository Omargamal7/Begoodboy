/* Jimmy · Primary 5 ICT · first term binder 2025-2026 · Theme 1.
   Every fact and every check question comes from the binder. The check keeps the binder's exact wording.
   Q.open marks a question whose answer is not written in the binder text. */
(function () {
  "use strict";
  var tf = Q.tf, mcq = Q.mcq, match = Q.match;

  /* ---------------- Lesson 1 · Computer Accessories ---------------- */
  jimmy({
    id: "jimmy-t1-l1", order: 11, where: "Theme 1 · Lesson 1", title: "Computer Accessories",
    notes: ["Four questions in this lesson use facts from Lesson 4 (restart, delete unwanted apps, check Wi-Fi, define the problem). The last card covers them."],
    facts: [
      { id: "connect", term: "Connecting accessories", icon: "router",
        lines: ["A **router** connects a computer to the internet by **Wi-Fi** or **Ethernet**.", "An **Ethernet cable** connects a computer or laptop **to a router**.", "An **Ethernet port** is where the Ethernet cable plugs in. Ethernet is **more stable and faster** than Wi-Fi."],
        pick: { prompt: "An Ethernet cable connects a computer to…", answer: 0, right: "To a **router**.",
          options: [{ label: "A router", icon: "router" }, { label: "Wi-Fi", icon: "wifi" }] } },
      { id: "store", term: "Storage and display accessories", icon: "harddrive",
        lines: ["An **external hard drive** is like an HDD but much faster. It stores files with **large space** and keeps **backup copies**.", "**Flash memory** is a small accessory for **storage**.", "**HDMI** (high-definition multimedia interface) is a **cable** that sends **audio and video** between devices."],
        pick: { prompt: "Which one is used for storage?", answer: 1, right: "**Flash memory** stores files.",
          options: [{ label: "HDMI", icon: "hdmi" }, { label: "Flash memory", icon: "flash" }, { label: "Router", icon: "router" }] } },
      { id: "units", term: "Units of measurement", icon: "bits",
        lines: ["A **bit** is the **smallest** unit of data.", "**1 byte = 8 bits** = 1 character. The word \"cat\" needs 3 bytes.", "**1 KB = 1,024 bytes**. **1 MB = 1,024 KB**. **1 GB = 1,024 MB**. **1 TB = 1,024 GB**.",
          "**Mbps** measures network speed. **GHz** measures how fast the CPU works. Higher is faster."],
        pick: { prompt: "1 GB is…", answer: 0, right: "**1 GB = 1,024 MB**.",
          options: [{ label: "1,024 MB", icon: "bits" }, { label: "1,029 MB", icon: "bits" }, { label: "1,030 MB", icon: "bits" }] } },
      { id: "problems", term: "Problems and solutions", icon: "wrench",
        lines: ["Trouble with **large files**: not enough graphics storage. **Shut down some programs.**", "**Poor video call**: slow Wi-Fi. **Try an Ethernet connection.**", "**Cannot store files**: not enough space. **Move old files to an external drive.**", "**Home internet not working**: **use Ethernet or contact the ISP.**"],
        pick: { prompt: "Not enough space to store files? Move old files to…", answer: 0, right: "An **external drive**.",
          options: [{ label: "An external drive", icon: "harddrive" }, { label: "The printer", icon: "printer" }] } },
      { id: "lesson4", term: "From Lesson 4: fixing a slow computer", icon: "list",
        lines: ["The first step to solve a problem is to **define** (identify) the problem.", "Slow computer: **shut down and restart**, **update** apps, **delete unwanted apps** so it works faster.", "Slow internet: **check the Wi-Fi**."],
        pick: { prompt: "The first step to solve a problem is to…", answer: 2, right: "**Define** the problem.",
          options: [{ label: "Ignore it", icon: "cross" }, { label: "Cancel it", icon: "cross" }, { label: "Define it", icon: "search" }] } }
    ],
    activities: [
      { type: "sort", kind: "Match", title: "Name the accessory",
        hint: "Read the job in the box again, then look at the cards.",
        done: "You know six accessories from your binder.",
        boxes: [
          { id: "r", label: "Connects a computer to the internet by Wi-Fi or Ethernet" }, { id: "e", label: "Connects a computer to a router" },
          { id: "p", label: "Where the Ethernet cable plugs in" }, { id: "h", label: "Stores large files and backup copies" },
          { id: "f", label: "Small accessory for storage" }, { id: "d", label: "Sends audio and video between devices" }
        ],
        cards: [
          { label: "Router", icon: "router", box: "r" }, { label: "Ethernet cable", icon: "cable", box: "e" }, { label: "Ethernet port", icon: "cable", box: "p" },
          { label: "External hard drive", icon: "harddrive", box: "h" }, { label: "Flash memory", icon: "flash", box: "f" }, { label: "HDMI", icon: "hdmi", box: "d" }
        ] },
      { type: "sort", kind: "Order", title: "Build the unit ladder",
        intro: "Put the units in order, from smallest to largest.",
        hint: "The **bit** is the smallest. Each next unit is bigger.",
        done: "bit, byte (8 bits), KB, MB, GB, TB. From byte upward, each step is 1,024.",
        boxes: [{ id: "u1", label: "1 (smallest)" }, { id: "u2", label: "2" }, { id: "u3", label: "3" }, { id: "u4", label: "4" }, { id: "u5", label: "5" }, { id: "u6", label: "6 (largest)" }],
        cards: [{ label: "bit", box: "u1" }, { label: "byte", box: "u2" }, { label: "Kilobyte (KB)", box: "u3" }, { label: "Megabyte (MB)", box: "u4" }, { label: "Gigabyte (GB)", box: "u5" }, { label: "Terabyte (TB)", box: "u6" }] },
      { type: "steps", kind: "Real device", title: "Find accessories and file sizes", icon: "laptop", device: "the laptop",
        steps: ["Look at the sides of the laptop with your parent. Find where a **flash memory** can plug in.", "Open the **Files** app. Look at the size of three files.", "Say which unit each size uses: **KB**, **MB** or **GB**."],
        parent: "Parent: the laptop has no Ethernet port, so the Ethernet cards are learned from the binder pictures.",
        done: "You found a port and read real file sizes." }
    ],
    checks: [
      tf("Bit is the smallest measuring unit for storing data.", true, "units", "It is true."),
      tf("When there is a problem in processing large files, some programs should be closed.", true, "problems", "It is true. **Shut down some programs.**"),
      tf("The external hard disk is used to store files with large space.", true, "store", "It is true."),
      tf("You can't create backup copies of files.", false, "store", "It is false. An external hard drive keeps **backup copies**."),
      tf("1 Terabyte = 1029 Megabytes.", false, "units", "It is false. **1 TB = 1,024 GB**."),
      tf("1 Kilobyte = 1030 Bytes.", false, "units", "It is false. **1 KB = 1,024 bytes**."),
      tf("1 Gigabyte = 1024 Megabytes.", true, "units", "It is true."),
      tf("An ethernet cable is a device that connects a computer to the Internet via Wi-Fi.", false, "connect", "It is false. An Ethernet cable connects a computer **to a router**."),
      tf("A flash memory is a wire that connects the computer to the router.", false, "store", "It is false. Flash memory is for **storage**."),
      tf("There are no solutions to the problems that you may face while using the computer.", false, "problems", "It is false. Each problem has **solutions**."),
      mcq("To solve the problem of slowing down your computer, _____ then restart it.", ["update apps", "turn off the device", "check the Wi-Fi"], 1, "lesson4", "**Shut down** (turn off), then restart."),
      mcq("When deleting some unwanted applications, it leads to _____.", ["device slowness", "speed of device performance", "software update"], 1, "lesson4", "Deleting unwanted apps makes the device **faster**."),
      mcq("If the Internet is running slowly, check _____.", ["connecting to Wi-Fi", "connecting the printer", "connecting the monitor"], 0, "lesson4", "Check the **Wi-Fi**."),
      mcq("_____ is one of the electronic accessories that are used for storage.", ["Printer", "Wi-Fi", "Flash Memory"], 2, "store", "**Flash memory** is for storage."),
      mcq("One of the steps to solve the problem is to _____ the problem.", ["ignore", "cancel", "define"], 2, "lesson4", "**Define** the problem.")
    ]
  });

  /* ---------------- Lesson 2 · Networks ---------------- */
  jimmy({
    id: "jimmy-t1-l2", order: 12, where: "Theme 1 · Lesson 2", title: "Networks",
    facts: [
      { id: "network", term: "Networks", icon: "network",
        lines: ["A **network** is a group of people or things connected for a common purpose.", "**Computer networks** connect computers to **share information and data**.", "A computer connected to another device, such as a printer or a router, is a **LAN** (Local Area Network)."],
        pick: { prompt: "A computer connected to a printer at home is a…", answer: 0, right: "It is a **LAN**.",
          options: [{ label: "LAN", icon: "network" }, { label: "Cable", icon: "cable" }] } },
      { id: "internet", term: "Internet and WWW", icon: "internet",
        lines: ["The **Internet** connects computers and people **all over the world**. It is an **open** network.", "The **World Wide Web (WWW)** is a part of the Internet. It is made of **web pages** people can move around.", "The **EKB** website is part of the WWW. It is **free** for all Egyptians who register."],
        pick: { prompt: "WWW stands for…", answer: 1, right: "**World Wide Web**.",
          options: [{ label: "World Wide Wi-Fi", icon: "wifi" }, { label: "World Wide Web", icon: "internet" }] } },
      { id: "gateway", term: "Gateway and ISP", icon: "router",
        lines: ["You need a **gateway**, such as a **router**, to connect the computer to the **ISP**.", "The **ISP** (Internet Service Provider) is the company that gives people internet service."],
        pick: { prompt: "A gateway is, for example, a…", answer: 1, right: "A **router**.",
          options: [{ label: "Scanner", icon: "scanner" }, { label: "Router", icon: "router" }, { label: "Printer", icon: "printer" }] } },
      { id: "intranet", term: "Intranet", icon: "lock",
        lines: ["An **intranet** is a **private** network.", "Only people who work in the **same organisation** can use it, such as a school's computer lab network.", "Sharing on the Internet is **less secure**. Sharing on an intranet is **more secure**."],
        pick: { prompt: "An intranet is…", answer: 0, right: "An intranet is **private**.",
          options: [{ label: "Private", icon: "lock" }, { label: "Worldwide", icon: "internet" }] } }
    ],
    activities: [
      { type: "builder", kind: "Build", title: "Map your home network",
        intro: "Put each part in its place, from the Internet down to the devices at home.",
        parent: "Parent: the laptop joins by Wi-Fi, because it has no Ethernet port.",
        chain: [{ id: "internet", label: "Internet" }, { id: "isp", label: "ISP" }, { id: "router", label: "Router (gateway)" }],
        devices: ["laptop", "tablet", "phone"],
        cards: [
          { id: "internet", label: "Internet", icon: "internet" }, { id: "isp", label: "ISP company", icon: "isp" }, { id: "router", label: "Router", icon: "router" },
          { id: "laptop", label: "Laptop (Wi-Fi)", icon: "laptop" }, { id: "tablet", label: "Tablet (Wi-Fi)", icon: "tablet" }, { id: "phone", label: "Phone (Wi-Fi)", icon: "phone" }
        ],
        right: { internet: "The **Internet** connects the whole world.", isp: "The **ISP** gives the internet service.", router: "The **router** is the gateway to the ISP.",
          laptop: "The **laptop** joins the router by Wi-Fi.", tablet: "The **tablet** joins the router.", phone: "The **phone** joins the router." },
        hints: { internet: "The Internet goes at the top.", isp: "The ISP goes between the Internet and the router.", router: "The router goes under the ISP.", any: "Devices go in the bottom row, under the router." },
        done: "Internet, ISP, router, and your devices: this is your LAN joining the Internet." },
      { type: "sort", kind: "Sort", title: "Internet or intranet?",
        hint: "The **Internet** is open and worldwide. An **intranet** is private, for one organisation.",
        done: "The Internet is open. An intranet is closed and private.",
        boxes: [{ id: "inter", label: "Internet", icon: "internet" }, { id: "intra", label: "Intranet", icon: "lock" }],
        cards: [
          { label: "Connects people all over the world", box: "inter" }, { label: "Open network", box: "inter" }, { label: "Less secure for sharing", box: "inter" },
          { label: "Private network", box: "intra" }, { label: "A school computer lab network", box: "intra" }, { label: "Only for people in one organisation", box: "intra" }
        ] },
      { type: "steps", kind: "Real device", title: "Visit the EKB website", icon: "internet", device: "the laptop or tablet, with your parent",
        steps: ["Open the web browser.", "Type **www.ekb.eg** in the address bar.", "Look at the page. The EKB is part of the World Wide Web."],
        parent: "Parent: stay beside Jimmy on the internet.",
        done: "You visited a web page on the WWW." }
    ],
    checks: [
      tf("An intranet network connects computers and people who use that network from all over the world.", false, "intranet", "It is false. That is the **Internet**. An intranet is private."),
      tf("The Internet is a private network that is restricted to the people you connect with within a specific institution.", false, "intranet", "It is false. That is an **intranet**."),
      tf("The World Wide Web is the gateway that connects a computer to the Internet.", false, "gateway", "It is false. A **router** is the gateway."),
      tf("Gateway is used to connect a computer to the Internet.", true, "gateway", "It is true."),
      tf("The closed network is the one that may belong to the computer lab in a school.", true, "intranet", "It is true. A school lab network is a closed, private network."),
      tf("The Egyptian Knowledge Bank does not exist on the World Wide Web.", false, "internet", "It is false. The EKB **is part of the WWW**."),
      tf("The Egyptian Knowledge Bank is available for free to Egyptians.", true, "internet", "It is true."),
      tf("The router connects the computer to the Internet service provider (ISP).", true, "gateway", "It is true."),
      tf("The Internet is a limited network.", false, "internet", "It is false. The Internet reaches **all over the world**."),
      tf("WWW is made up of webpages that people can navigate.", true, "internet", "It is true."),
      mcq("The Internet is _____ computer network.", ["a closed", "an open", "a limited"], 1, "internet", "The Internet is **open**."),
      mcq("_____ is a network used to share information and is less secure.", ["E-mail", "Intranet", "Internet"], 2, "intranet", "The **Internet** is less secure."),
      mcq("WWW stands for _____.", ["World Wide Wi-Fi", "World Wide Web", "World White Web"], 1, "internet", "**World Wide Web**."),
      mcq("To connect your computer to the Internet, you need a gateway such as a _____.", ["scanner", "router", "printer"], 1, "gateway", "A **router**."),
      mcq("A _____ is a long connector that transmits data or power between devices.", ["flash memory", "Bluetooth", "cable"], 2, "gateway", "A **cable** connects devices. Flash memory stores, and Bluetooth has no wire.")
    ]
  });

  /* ---------------- Lesson 3 · Smart Communication System ---------------- */
  jimmy({
    id: "jimmy-t1-l3", order: 13, where: "Theme 1 · Lesson 3", title: "Smart Communication System",
    notes: ["One question (\"We communicate using … every day\") is not answered in the lesson text. The sheet shows it but does not score it."],
    facts: [
      { id: "iot", term: "Internet of Things (IoT)", icon: "home",
        lines: ["A smart system is devices **linked to the internet by Wi-Fi**.", "You can control them from the **same room or another city**.", "Examples: **Bluetooth speakers**, a **fridge** or **washing machine** turned on and off with an app.", "Household items in a network are called the **Internet of Things (IoT)**."],
        pick: { prompt: "Household items in a network are called…", answer: 0, right: "The **Internet of Things**.",
          options: [{ label: "Internet of Things", icon: "home" }, { label: "Tools", icon: "wrench" }] } },
      { id: "bt", term: "Bluetooth", icon: "bluetooth",
        lines: ["**Bluetooth** connects wireless mobile devices over a **short range** to send data.", "For example, you can send **photos** from your **mobile phone** to a friend's phone."],
        pick: { prompt: "Bluetooth works over a…", answer: 0, right: "A **short range**.",
          options: [{ label: "Short range", icon: "bluetooth" }, { label: "Long range", icon: "internet" }] } },
      { id: "pod", term: "Networks and people of determination", icon: "person",
        lines: ["Computer networks give **people of determination independence**, at home or in public places.", "They save **money and time** and build **self-confidence**.", "ICT tools help them do their **daily tasks** more easily."],
        pick: { prompt: "Networks give people of determination…", answer: 0, right: "**Independence**.",
          options: [{ label: "Independence", icon: "person" }, { label: "Headaches", icon: "cross" }] } },
      { id: "reader", term: "Screen readers", icon: "speech",
        lines: ["**Screen readers** give **audio feedback** and help with reading **braille**.", "They help visually impaired people **write papers** and **open documents** on laptops."],
        pick: { prompt: "Screen readers give…", answer: 0, right: "**Audio feedback**.",
          options: [{ label: "Audio feedback", icon: "speech" }, { label: "Printed pages", icon: "printer" }] } },
      { id: "shop", term: "E-commerce and the Internet", icon: "cart",
        lines: ["**E-commerce** is buying and selling **online**.", "Get your **parents' permission** before buying anything online.", "Be careful when giving your information to anyone. This is **digital privacy**.", "Through the Internet you can reach the **largest number of people**.", "The **Egyptian Knowledge Bank** is a big collection of information."],
        pick: { prompt: "Before buying online, you need…", answer: 0, right: "Your **parents' permission**.",
          options: [{ label: "Parents' permission", icon: "person" }, { label: "Nothing", icon: "cross" }] } }
    ],
    activities: [
      { type: "sort", kind: "Sort", title: "Can it join a network?",
        hint: "Look at the IoT card. Smart devices link to the internet by Wi-Fi or Bluetooth.",
        done: "Smart devices can join a network. That is the Internet of Things.",
        boxes: [{ id: "yes", label: "Can join a network", icon: "wifi" }, { id: "no", label: "Cannot join a network", icon: "cross" }],
        cards: [
          { label: "Smart fridge with an app", box: "yes" }, { label: "Washing machine with an app", box: "yes" }, { label: "Bluetooth speaker", box: "yes" }, { label: "Mobile phone", box: "yes" },
          { label: "A paper book", box: "no" }, { label: "A wooden chair", box: "no" }, { label: "A pencil", box: "no" }
        ] },
      { type: "steps", kind: "Real device", title: "Test the Bluetooth range", icon: "bluetooth", device: "the tablet and one Bluetooth device at home",
        steps: ["With your parent, turn on **Bluetooth** on the tablet.", "Connect it to a Bluetooth speaker or headphones, if you have one.", "Play a sound. Walk away step by step until it stops.", "Count your steps. That is the **short range**.", "Turn Bluetooth off again."],
        parent: "Parent: if there is no Bluetooth device at home, skip this step.",
        done: "Bluetooth only works over a short range." },
      { type: "steps", kind: "Real device", title: "Hear a screen reader", icon: "speech", device: "the tablet",
        steps: ["With your parent, open **Settings**, then **Accessibility**.", "Turn on the **screen reader** (on Android it is often called TalkBack).", "Listen to it read one item, then turn it off again."],
        parent: "Parent: a screen reader changes how taps work. Turn it off yourself if needed.",
        done: "You heard audio feedback from a screen reader." }
    ],
    checks: [
      tf("You can share photos with colleagues using your mobile phone.", true, "bt", "It is true. You can send photos from your **mobile phone**."),
      tf("The Internet connects wireless mobile devices over a short range.", false, "bt", "It is false. **Bluetooth** works over a short range."),
      tf("Braille makes it difficult to read for people of determination.", false, "reader", "It is false. Screen readers **help** with braille."),
      tf("ICT tools help people of determination accomplish their daily tasks easily.", true, "pod", "It is true."),
      tf("There are no household gadgets that can connect to the Internet.", false, "iot", "It is false. The **Internet of Things** is household gadgets on the internet."),
      tf("Screen readers help people of determination to read research papers.", true, "reader", "It is true. They help with papers and documents."),
      tf("Bluetooth is a network technology that works over long ranges.", false, "bt", "It is false. Bluetooth works over a **short range**."),
      tf("Through the Internet, the largest number of people can be reached.", true, "shop", "It is true."),
      tf("The Egyptian Knowledge Bank contains a lot of interesting information.", true, "shop", "It is true. The EKB is a big collection of information."),
      tf("Screen readers are used to obtain audio feedback.", true, "reader", "It is true."),
      mcq("You can share photos with your friends using _____.", ["mobile phones", "earphones", "microphones"], 0, "bt", "With **mobile phones**."),
      mcq("Household items can be a part of a network and this is called the _____.", ["Internet of Things", "Gadgets", "Tools"], 0, "iot", "The **Internet of Things**."),
      mcq("The IoT consists of devices linked to the Internet via _____.", ["e-mail", "Wi-Fi", "Intranet"], 1, "iot", "By **Wi-Fi**."),
      mcq("_____ is a network technology that connects wireless mobile devices over a short range to form a network.", ["Internet", "Wi-Fi", "Bluetooth"], 2, "bt", "**Bluetooth**."),
      Q.open("mcq", "We communicate using _____ every day.", ["websites", "e-mail", "computer networks"])
    ]
  });

  /* ---------------- Lesson 4 · Internet Connection Problems and Solutions ---------------- */
  var fixes = ["Shut down and restart; check for software updates; delete unwanted apps.", "Use the software to troubleshoot your Wi-Fi connection; check that the router is connected and restart it.", "Restart the computer and router; check the internet speed.", "Check Wi-Fi signal; make sure to update the apps on your device."];
  jimmy({
    id: "jimmy-t1-l4", order: 14, where: "Theme 1 · Lesson 4", title: "Internet Connection Problems and Solutions",
    notes: ["Word and PowerPoint are not explained in Jimmy's binder. Their card uses Murad's Primary 6 booklet from the same school: Word drafts documents, PowerPoint makes presentations.",
      "One question (\"Video conferencing is used to share videos with others\") is not answered in the binder. The sheet shows it but does not score it."],
    facts: [
      { id: "steps", term: "Five steps to solve a problem", icon: "list",
        lines: ["1. **Identify (define) the problem.** Is it hardware or software? Did you make a mistake?", "2. **Plan** different ways to solve it.", "3. **Try** each solution.", "4. Which solutions **worked**? What did you **learn**?", "5. **Ask your teacher or a family member** for help."],
        pick: { prompt: "The first step is to…", answer: 0, right: "**Define** the problem.",
          options: [{ label: "Define the problem", icon: "search" }, { label: "Ask for help", icon: "person" }] } },
      { id: "slowpc", term: "Slow computer", icon: "laptop",
        lines: ["The computer slows down when opening an app:", "**Shut down and restart.** **Check for software updates.** **Delete unwanted apps.**", "Apps on your computer should always be **updated**."],
        pick: { prompt: "A slow computer? First…", answer: 0, right: "**Shut down and restart.**",
          options: [{ label: "Shut down and restart", icon: "laptop" }, { label: "Buy a printer", icon: "printer" }] } },
      { id: "net", term: "Internet problems", icon: "wifi",
        lines: ["**Slow browser**: check the **Wi-Fi signal** and **update the apps**.", "**No internet**: use the software to troubleshoot Wi-Fi, check the **router** is connected, **restart the router**, try a new **Ethernet cable**, or contact your **ISP**.", "**Slow download**: **restart the computer and router**, and **check the internet speed**."],
        pick: { prompt: "A slow browser? Check the…", answer: 0, right: "Check the **Wi-Fi signal**.",
          options: [{ label: "Wi-Fi signal", icon: "wifi" }, { label: "Printer", icon: "printer" }] } },
      { id: "apps", term: "Office apps", icon: "slides",
        lines: ["**Excel** is used for **calculations** (Lesson 6).", "**Word** is for writing documents. **PowerPoint** is for making **presentations**.", "You can share presentations by **e-mail** and **video conferencing**."],
        pick: { prompt: "Which app makes presentations?", answer: 1, right: "**PowerPoint**.",
          options: [{ label: "Excel", icon: "grid" }, { label: "PowerPoint", icon: "slides" }, { label: "Word", icon: "doc" }] } }
    ],
    activities: [
      { type: "sort", kind: "Order", title: "Put the five steps in order",
        hint: "Look at the five-step card. It starts by defining the problem.",
        done: "Define, plan, try, check what worked, ask for help.",
        boxes: [{ id: "s1", label: "1" }, { id: "s2", label: "2" }, { id: "s3", label: "3" }, { id: "s4", label: "4" }, { id: "s5", label: "5" }],
        cards: [{ label: "Define the problem", box: "s1" }, { label: "Plan ways to solve it", box: "s2" }, { label: "Try each solution", box: "s3" }, { label: "Which worked? What did I learn?", box: "s4" }, { label: "Ask a teacher or family member", box: "s5" }] },
      { type: "sort", kind: "Match", title: "Fix the problem",
        hint: "Read the problem in the box, then look at the cards about computer and internet problems.",
        done: "Every problem has a solution.",
        boxes: [{ id: "pc", label: "The computer slows down when opening an app" }, { id: "br", label: "The browser is running slowly" }, { id: "no", label: "No internet connection" }, { id: "dl", label: "It's slow to download" }],
        cards: [
          { label: "Shut down and restart", box: "pc" }, { label: "Delete unwanted apps", box: "pc" }, { label: "Check Wi-Fi signals", box: "br" },
          { label: "Restart your router", box: "no" }, { label: "Contact your ISP", box: "no" }, { label: "Check internet speed", box: "dl" }
        ] },
      { type: "steps", kind: "Real device", title: "Check the Wi-Fi signal", icon: "wifi", device: "the laptop or tablet",
        steps: ["Find the **Wi-Fi symbol** at the top or bottom of the screen.", "Count the bars. More bars mean a stronger signal.", "With your parent, open the settings and see which Wi-Fi network you are on."],
        done: "Checking the Wi-Fi signal is a real solution for a slow browser." }
    ],
    checks: [
      tf("Checking the connection to Wi-Fi is one of the possible solutions to the slow performance of the search engine.", true, "net", "It is true."),
      tf("You cannot solve any problem that may appear while using the computer.", false, "steps", "It is false. There are steps to solve problems."),
      tf("It is important to ask for help from your teacher or one of your family members when browsing a website for the first time.", true, "steps", "It is true."),
      tf("There are no organized steps for finding solutions to Internet problems.", false, "steps", "It is false. There are **five steps**."),
      tf("A Word processing program (Word) is used to present information.", false, "apps", "It is false. **PowerPoint** is for presentations. Word is for writing."),
      tf("Spreadsheet program (Excel) may be used in calculations.", true, "apps", "It is true."),
      Q.open("tf", "Video conferencing is used to share videos with others."),
      tf("Apps on your computer should always be updated.", true, "slowpc", "It is true."),
      mcq("The first stage of problem solving is _____.", ["planning different ways", "asking for help", "defining the problem"], 2, "steps", "**Defining the problem**."),
      mcq("If you do not find a solution to the computer problem, you should ask _____ for help.", ["your teacher", "member of your family", "(a or b)"], 2, "steps", "Your teacher **or** a family member."),
      mcq("We use _____ to create presentations.", ["Excel", "PowerPoint", "Word"], 1, "apps", "**PowerPoint**."),
      mcq("We may use e-mail and _____ to share the presentations with our colleagues.", ["Excel", "video conferencing", "PowerPoint"], 1, "apps", "E-mail and **video conferencing**."),
      match("Match the problem: Slow to download.", fixes, 2, "net", "**Restart the computer and router; check the internet speed.**"),
      match("Match the problem: The browser is running slowly.", fixes, 3, "net", "**Check Wi-Fi signal; update the apps.**"),
      match("Match the problem: The computer slows down when opening an app.", fixes, 0, "slowpc", "**Shut down and restart; update; delete unwanted apps.**"),
      match("Match the problem: No internet connection.", fixes, 1, "net", "**Troubleshoot Wi-Fi; check and restart the router.**")
    ]
  });

  /* ---------------- Lesson 5 · Digital File Management ---------------- */
  jimmy({
    id: "jimmy-t1-l5", order: 15, where: "Theme 1 · Lesson 5", title: "Digital File Management",
    notes: ["Two questions (\"Select New from File to create a new folder\" and \"Each folder must be given a unique title\") are not answered in the binder text. The sheet shows them but does not score them."],
    facts: [
      { id: "save", term: "Saving and storing", icon: "scanner",
        lines: ["Use an **image scanner** to add pictures to the device and save them for later.", "Store and share information with **flash memory**.", "Protect your files and keep copies on different devices."],
        pick: { prompt: "A scanner is used to add…", answer: 0, right: "**Pictures and files**.",
          options: [{ label: "Pictures and files", icon: "scanner" }, { label: "Sound", icon: "speech" }] } },
      { id: "organise", term: "Getting organised", icon: "folder",
        lines: ["1. **Create the main folder.**", "2. **Add sub-folders.**", "3. **Give each file a name.** Choose a name that says what is inside.", "4. **Place documents, images and videos in the correct folder.**", "Organised data is easy to **find later**. File management is for all kinds of files, not videos only."],
        pick: { prompt: "Can a sub-folder go inside a main folder?", answer: 0, right: "Yes. **Add sub-folders** inside the main folder.",
          options: [{ label: "Yes", icon: "folder" }, { label: "No", icon: "cross" }] } },
      { id: "commands", term: "Folder commands", icon: "window",
        lines: ["To create a folder: **right-click**, choose **New**, then **Folder**.", "To change a folder's title: choose **Rename**.", "To open a folder: choose **Open**."],
        pick: { prompt: "To change a folder's title, choose…", answer: 0, right: "Choose **Rename**.",
          options: [{ label: "Rename", icon: "note" }, { label: "Delete", icon: "cross" }, { label: "Open", icon: "folder" }] } }
    ],
    activities: [
      { type: "sort", kind: "Order", title: "Get organised in order",
        hint: "Look at the organising card. You start with the main folder.",
        done: "Main folder, sub-folders, name each file, put files in the right folder.",
        boxes: [{ id: "o1", label: "1" }, { id: "o2", label: "2" }, { id: "o3", label: "3" }, { id: "o4", label: "4" }],
        cards: [{ label: "Create the main folder", box: "o1" }, { label: "Add sub-folders", box: "o2" }, { label: "Give each file a name", box: "o3" }, { label: "Place files in the correct folder", box: "o4" }] },
      { type: "sort", kind: "Sort", title: "Which folder?",
        hint: "Look at the kind of file: document, image or video.",
        done: "Documents, images and videos each have their own folder.",
        boxes: [{ id: "d", label: "Documents", icon: "file" }, { id: "i", label: "Images", icon: "image" }, { id: "v", label: "Videos", icon: "video" }],
        cards: [
          { label: "al-ahly-match-report.docx", icon: "file", box: "d" }, { label: "homework.docx", icon: "file", box: "d" },
          { label: "real-madrid-poster.jpg", icon: "image", box: "i" }, { label: "minecraft-castle.png", icon: "image", box: "i" },
          { label: "goal-replay.mp4", icon: "video", box: "v" }, { label: "roblox-trailer.mp4", icon: "video", box: "v" }
        ] },
      { type: "sort", kind: "Match", title: "Which command?",
        hint: "Look at the folder commands card again.",
        done: "New, Folder, Rename and Open are the binder's folder commands.",
        boxes: [{ id: "n", label: "Start making a new folder" }, { id: "r", label: "Change a folder's title" }, { id: "o", label: "Open a folder" }],
        cards: [{ label: "Right-click, New, Folder", box: "n" }, { label: "Rename", box: "r" }, { label: "Open", box: "o" }] },
      { type: "steps", kind: "Real device", title: "Build a folder tree", icon: "folder", device: "the laptop",
        steps: ["Open the **Files** app.", "Make a main folder called **Football**.", "Inside it, make three sub-folders: **Documents**, **Images**, **Videos**.", "Move one file into the right sub-folder.", "**Rename** one folder."],
        parent: "Parent: the laptop's Files app may name its buttons differently from Windows. The binder's Windows words (New, Folder, Rename, Open) are practised in the activities above.",
        done: "You built a real folder tree." }
    ],
    checks: [
      tf("The operating system doesn't allow you to add a sub-folder inside the main folder.", false, "organise", "It is false. You can **add sub-folders**."),
      tf("Protecting files and storing them on different devices is not necessary.", false, "save", "It is false. Protect files and keep copies."),
      Q.open("tf", "Select \"New\" from \"File\" to create a new folder."),
      tf("The management of files on the computer is limited to videos only.", false, "organise", "It is false. It is for **all** files."),
      tf("Data should be organized in the computer to find it easily later.", true, "organise", "It is true."),
      Q.open("tf", "Each folder must be given a unique title."),
      tf("To change the title of a folder, choose the \"Delete\" command.", false, "commands", "It is false. Choose **Rename**."),
      tf("Choose the \"Open\" command to add sub-folders.", false, "commands", "It is false. Use **New, Folder**."),
      tf("We cannot add a sub-folder to the main folder.", false, "organise", "It is false. You **can**."),
      tf("To create a new folder, right click in the place where you want and select \"New\", then \"Folder\".", true, "commands", "It is true."),
      mcq("The _____ is used to add pictures and files on a device.", ["keyboard", "printer", "scanner"], 2, "save", "The **scanner**."),
      mcq("Select _____ from the shortcut menu to create a new folder.", ["Paste", "New", "Copy"], 1, "commands", "Select **New**."),
      mcq("It is better to choose a suitable name for each _____ indicating its content.", ["folder", "program", "application"], 0, "organise", "Each **folder**."),
      mcq("To change the title of a folder, choose _____ command.", ["Rename", "New", "Save"], 0, "commands", "**Rename**."),
      mcq("To open a folder, select _____.", ["Open", "Delete", "New"], 0, "commands", "**Open**.")
    ]
  });

  /* ---------------- Lesson 6 · Sharing Information ---------------- */
  jimmy({
    id: "jimmy-t1-l6", order: 16, where: "Theme 1 · Lesson 6", title: "Sharing Information",
    notes: ["The spreadsheet in this sheet works like the binder's Excel pages, so no app is needed. Real Excel is optional: Microsoft offers Excel for the web free with a Microsoft account."],
    facts: [
      { id: "share", term: "Sharing information", icon: "share",
        lines: ["Make **graphs or charts** to share information.", "Decide which information should be shared.", "Sharing on the **Internet** is **less secure**. Sharing on an **intranet** (a closed network) is **more secure**."],
        pick: { prompt: "Sharing on the Internet is…", answer: 1, right: "**Less secure**.",
          options: [{ label: "More secure", icon: "lock" }, { label: "Less secure", icon: "warning" }] } },
      { id: "excel", term: "Microsoft Excel", icon: "grid",
        lines: ["**Excel** makes tables and **graphs**, and does **calculations** with formulas and functions.", "A cell can hold **text or numbers**.", "**Column titles** are the **letters at the top**. **Row titles** are the **numbers at the left**.", "To sort in **alphabetical order**: click **Data** on the toolbar, then **Sort**."],
        pick: { prompt: "Column titles are…", answer: 0, right: "**Letters at the top**.",
          options: [{ label: "Letters at the top", icon: "grid" }, { label: "Letters at the bottom", icon: "grid" }] } },
      { id: "formula", term: "Formulas", icon: "grid",
        lines: ["Click the cell. Type **=** in the formula bar.", "Use **+** to add, **-** to subtract, the star sign ( * ) to multiply, and **/** to divide.", "Add across row 8: **=A8+B8+C8**.", "Add down column A: **=A4+A5+A6**."],
        pick: { prompt: "A formula starts with…", answer: 1, right: "It starts with **=**.",
          options: [{ label: "\" \"", icon: "grid" }, { label: "=", icon: "grid" }, { label: "( )", icon: "grid" }] } }
    ],
    activities: [
      { type: "grid", kind: "Do", title: "Your football spreadsheet",
        intro: "This works like Excel in your binder. Click a cell and type, or use the formula bar. Press Enter to finish a cell.",
        cols: ["A", "B", "C", "D", "E"], rows: 9,
        cells: { A1: "Goals", A3: "Match", E1: "Clubs", E2: "Zamalek", E3: "Real Madrid", E4: "Al Ahly", E5: "Barcelona", E6: "Liverpool" },
        tasks: [
          { label: "Type the goals from 3 matches as numbers in **A4**, **A5** and **A6**.", check: function (r, v) { return ["A4", "A5", "A6"].every(function (c) { return r[c] !== undefined && r[c] !== "" && !isNaN(parseFloat(r[c])) && String(r[c]).charAt(0) !== "="; }); } },
          { label: "In **A7**, type **=A4+A5+A6** and press Enter.", check: function (r) { return String(r.A7 || "").replace(/\s/g, "").toUpperCase() === "=A4+A5+A6"; } },
          { label: "Type numbers in **A8**, **B8** and **C8**. In **D8**, type **=A8+B8+C8**.", check: function (r) { return String(r.D8 || "").replace(/\s/g, "").toUpperCase() === "=A8+B8+C8" && ["A8", "B8", "C8"].every(function (c) { return r[c] && !isNaN(parseFloat(r[c])); }); } },
          { label: "Click **Data**, then **Sort A to Z**, to put the clubs in column E in alphabetical order.", check: function (r) { var l = ["E2", "E3", "E4", "E5", "E6"].map(function (c) { return r[c] || ""; }); return l.join("|") === l.slice().sort(function (a, b) { return a.localeCompare(b); }).join("|"); } }
        ],
        sort: { col: "E", from: 2, to: 6 },
        parent: "Parent: the numbers can be any goals Jimmy chooses.",
        done: "You used formulas and sorted a list, like in Excel." },
      Q.practice("Which sign multiplies in Excel?", ["+", "-", "*"], 2, "The star sign ( * ) multiplies.", "Look at the formulas card: + adds, - subtracts."),
      { type: "steps", kind: "Real device", title: "Optional: open Excel for the web", icon: "grid", device: "the laptop, with a Microsoft account",
        steps: ["Open the web browser and sign in to Microsoft Office.", "Open **Excel** and start a blank workbook.", "Type three numbers in A4, A5 and A6, and **=A4+A5+A6** in A7."],
        parent: "Parent: this needs a Microsoft account. If there is none, skip it. The spreadsheet above covers the same skills.",
        done: "You used real Excel." }
    ],
    checks: [
      tf("The symbol / is used to perform the division operation in the Excel program.", true, "formula", "It is true. **/** divides."),
      tf("Information tables can be created through the Excel program.", true, "excel", "It is true."),
      tf("Row title is the number at the left of the row.", true, "excel", "It is true."),
      tf("For sorting information in alphabetical order, click \"Copy\".", false, "excel", "It is false. Click **Data**, then **Sort**."),
      tf("The Excel program includes many formulas and functions that help in performing calculations.", true, "excel", "It is true."),
      tf("Column title is the letters at the bottom of the column.", false, "excel", "It is false. Column letters are at the **top**."),
      mcq("The cell in the Excel program can contain texts or _____.", ["numbers", "equations", "(a and b)"], 2, "excel", "Numbers and equations: **(a and b)**."),
      mcq("_____ program is used to create mathematical tables and graphs.", ["Google Chrome", "Excel", "Paint"], 1, "excel", "**Excel**."),
      mcq("Sharing information over the Internet is considered _____.", ["more secure", "less secure", "safe"], 1, "share", "**Less secure**."),
      mcq("To create a formula in Excel, click on the cell and type _____.", ["\" \"", "=", "( )"], 1, "formula", "Type **=**."),
      mcq("_____ program is used to perform simple formulas.", ["PowerPoint", "Zoom", "Excel"], 2, "excel", "**Excel**."),
      mcq("_____ program is used to prepare graphs.", ["Excel", "Word Processor", "Zoom"], 0, "excel", "**Excel**."),
      mcq("In the Excel program, for sorting information in alphabetical order, go to the _____ toolbar.", ["Data", "Insert", "View"], 0, "excel", "The **Data** toolbar."),
      mcq("You can set formulas in cells to multiply by using the following sign: _____", ["+", "-", "*"], 2, "formula", "The star sign ( * ) multiplies.")
    ]
  });
})();
