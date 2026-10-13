const {f,p,m,t,r,ms,u,lesson} = require('../../tools/science-author');
lesson('5-1', [
 f('Photosynthesis', ['**Photosynthesis** is how plants make their own food.', 'They use **sunlight, water and carbon dioxide**.', 'They release **oxygen** and store food as **starch**.', 'Plants also need nutrients from soil and air to grow.']),
 f('Sunlight comparison', ['To check whether sunlight is needed, change the **sunlight reaching the leaf**.', '**Aluminium foil** blocks sunlight.', 'Cover leaves the day before, because they may already contain starch.', 'A covered part is compared with a part that receives sunlight.']),
 f('Starch test', ['**Hot water** softens the leaf.', '**Ethanol** removes the green colour.', 'Rinse the leaf with warm water, then add dilute **iodine solution**.', 'If starch is present, the leaf becomes **blue-black**.', 'Without starch, it stays **yellow or brown**.']),
 f('Experiment result', ['The book tests covered **leaf A** in the morning: no blue-black colour.', 'After sunlight, **B and C** turn blue-black.', 'The part that stayed covered does not contain starch.', 'The conclusion is that **sunlight is necessary** to make starch.']),
 f('Book laboratory precautions', ['The starch-test activity is shown **on screen** here.', 'The book says **hot water can burn**.', '**Ethanol is flammable**; the book warms it in a beaker of hot water at about 80°C.', 'The book says to keep ethanol away from a flame.'])
], [['Sunlight','Energy for making food'],['Aluminium foil','Blocks sunlight'],['Ethanol','Removes green colour'],['Iodine','Tests for starch']], ['Soften leaf in hot water','Remove green colour with ethanol','Rinse with warm water','Add dilute iodine','Observe blue-black or yellow/brown'], () => {
 p(100,'Try');
 r('What nutrient is produced when sunlight hits the leaves of plants?','Starch.',0);
 m('What color does a leaf that was in the sunlight turn when soaked in iodine solution? Choose the correct answer from below.',['Does not change','Red','Blue-black','Yellow'],2,2);
 r('In the experiment to check if sunlight is needed to produce starch, what is the condition you change?','Whether the leaf receives sunlight.',1);
 p(100,'Exercise');
 r('If you hide a part of a leaf with aluminum foil to block the sunlight, how will that part react to the iodine solution reaction?','It will not turn blue-black; it remains yellow or brown.',3);
 m('Which of the following explanations is correct? Choose the correct answer from below.',['Plants produce starch by receiving sunlight.','Plants produce starch by blocking sunlight.'],0,0);
 p(101,'A. Choose the Correct Answer');
 m('What food substance can be stored in a plant leaf after it receives sunlight?',['Starch','Iodine','Ethanol','Salt'],0,0);
 m('Which material is best for preventing light from reaching part of a leaf?',['Clear plastic','Aluminum foil','Tissue paper','Water'],1,1);
 m('Which observation is evidence that a tested leaf contains starch?',['It becomes soft.','It turns blue-black.','It becomes green.','It produces bubbles.'],1,2);
 m('In the sunlight experiment, which factor should be different between the two parts of the leaf?',['Amount of sunlight received','Type of plant','Amount of water','Type of soil'],0,1);
 m('Which result best supports the conclusion that sunlight is needed to make starch?',['Both parts of the leaf turn blue-black.','Neither part changes color.','Only the part exposed to sunlight turns blue-black.','Only the covered part turns blue-black.'],2,3);
 p(101,'B. Write True or False');
 t('Leaves can make food using energy from sunlight.',true,0);
 t('The leaf should be tested for starch immediately without any preparation.',false,2);
 t('The covered and uncovered parts of the same leaf can be compared in this experiment.',true,1);
 t('A yellow or brown color after adding iodine indicates that starch is absent.',true,2);
 t('The starch test can provide evidence about whether a leaf has made food.',true,2);
 p(101,'C. Complete the Following');
 r('Green plants make their own food by a process called _____.','Photosynthesis.',0);
 r('The leaf is first placed in _____ water to make it soft.','Hot.',2);
 r('During the starch test, _____ is used to remove the green color from the leaf.','Ethanol.',2);
 u('The green pigment found in leaves is called _____.','The binder describes the green colour but does not name its pigment. Check the term with the teacher.');
 r('A leaf that does not contain starch remains _____ or brown after iodine is added.','Yellow.',2);
 p(102,'D. What Happens When...?');
 r('A healthy green plant is kept in darkness for a long time before being tested for starch?','The leaf does not turn blue-black in the book’s covered-leaf test; no starch is detected.',3);
 r('The aluminum foil is removed from the leaf after it has been exposed to sunlight?','The covered part can be tested with iodine: it stays yellow or brown; the exposed part turns blue-black.',3);
 r('The green color is removed from the leaf during the experiment?','The leaf is ready to be rinsed and tested with iodine.',2);
 r('The uncovered part of the leaf is tested with iodine after receiving sunlight?','It turns blue-black, showing starch is present.',3);
 r('The covered and uncovered parts of the leaf are compared after the iodine test?','The exposed part is blue-black; the covered part is yellow or brown, showing sunlight is needed.',3);
 p(102,'E. Give Reasons for the Following');
 r('The leaf is placed in hot water at the beginning of the starch test.','To soften the leaf.',2);
 r('Aluminum foil should completely cover the selected part of the leaf.','So sunlight cannot reach that part.',1);
 r('The plant is placed in sunlight after part of its leaf has been covered.','To compare the part receiving sunlight with the covered part and check whether sunlight is needed for starch.',1);
 u('The leaf must be handled carefully after it is heated in ethanol.','The book describes heat precautions, but does not explain why the heated leaf itself needs careful handling. Check with the teacher.');
 r('Iodine solution is added to the leaf at the end of the experiment.','To detect starch: blue-black means starch is present.',2);
}, ['Page 39’s procedure has inconsistent leaf labels. The cards use its printed observations and conclusion: sunlight-exposed parts contain starch; the covered part does not.']);
lesson('5-2', [
 f('Photosynthesis gas exchange', ['During **photosynthesis**, plants use sunlight to make food.', 'They take in **carbon dioxide** and release **oxygen**.', 'In daylight, more oxygen is released than is used for breathing.']),
 f('Plant respiration', ['Plants also **breathe** to live.', '**Respiration** takes in oxygen and releases carbon dioxide.', 'Plants breathe in daytime and at night.', 'Without light they cannot make food, so at night only respiration occurs.']),
 f('Day and night', ['In the **daytime**, plants take in more carbon dioxide and release more oxygen.', 'At **night**, they take in oxygen and release carbon dioxide.', 'The difference happens because **light is needed** to make food.']),
 f('Bag experiment', ['The book seals a plant in a **transparent bag** on a sunny day.', 'Breath is added to the bag: oxygen is initially lower and carbon dioxide higher.', '**Gas-detector tubes** measure gas percentages.', 'A **sampling pump** draws gas through the tubes.']),
 f('After one hour', ['Keep the bagged plant in **sunlight for about one hour**.', 'Measure the gases again.', 'The **oxygen percentage increases**.', 'The **carbon dioxide percentage decreases**.', 'The plant used carbon dioxide and released oxygen while making food.'])
], [['Photosynthesis','Takes in carbon dioxide and releases oxygen'],['Respiration','Takes in oxygen and releases carbon dioxide'],['Sampling pump','Draws a gas sample']], ['Seal plant in a transparent bag and add breath','Measure oxygen and carbon dioxide','Leave plant in sunlight for one hour','Measure both gases again','Compare oxygen increase and carbon dioxide decrease'], () => {
 p(103,'Try');
 m('What gas do plants release into the air when they are in the sunlight?',['Oxygen','Carbon dioxide','Nitrogen'],0,0);
 m('What gas do plants take in from the air when they breathe? Choose the correct answer from below.',['Oxygen','Carbon dioxide','Nitrogen'],0,1);
 p(103,'Exercise');
 m('During the night, when there is no light, what kind of gas exchange do plants do? Choose the correct answer from below.',['Take in oxygen and release carbon dioxide (breathing).','Take in carbon dioxide and release oxygen.','Do not take in or release any gases.'],0,1);
 m('Which statement correctly explains plants and air? Choose the correct answer from below.',['Plants keep releasing only oxygen all day long.','During the daytime, they take in more carbon dioxide than the carbon dioxide they release by breathing.','While the sunlight is hitting them, plants do not breathe.'],1,2);
 p(104,'A. Complete the Following');
 r('During photosynthesis, plants take in _____ from the air and release _____.','Carbon dioxide; oxygen.',0);
 r('At night, plants take in _____ during respiration.','Oxygen.',1);
 r('Plants exchange gases with the surrounding air during both _____ and _____.','Photosynthesis and respiration.',1);
 r('In sunlight, the amount of oxygen inside the sealed bag _____ after one hour.','Increases.',4);
 r('The process by which green plants use light to make their food is called _____.','Photosynthesis.',0);
 p(104,'B. Write True or False');
 t('Plants stop exchanging gases completely when there is no sunlight.',false,1);
 t('During the daytime, a plant may carry out both photosynthesis and respiration.',true,1);
 t('The percentage of carbon dioxide inside the bag becomes lower after the plant stays in sunlight for some time.',true,4);
 t('At night, plants release more oxygen than carbon dioxide.',false,2);
 t('A gas detector tube can be used to measure the percentage of a gas in the air.',true,3);
 p(104,'C. Write the Scientific Term');
 r('The process in which plants use light energy to make their own food.','Photosynthesis.',0);
 r('The gas taken in by plants to make food in the presence of light.','Carbon dioxide.',0);
 r('The gas released in a greater amount by plants during photosynthesis.','Oxygen.',0);
 r('The process by which plants take in oxygen and release carbon dioxide to obtain energy.','Respiration.',1);
 r('A device used in the experiment to draw a sample of gas from inside the bag.','Sampling pump.',3);
 p(105,'D. What Happens When...?');
 r('A green plant is kept in sunlight inside a sealed transparent bag for one hour?','Oxygen increases and carbon dioxide decreases.',4);
 r('A plant is kept in complete darkness for several hours?','It breathes: takes in oxygen and releases carbon dioxide; no photosynthesis occurs.',1);
 r('The oxygen percentage inside the bag is measured after the plant has been exposed to sunlight?','It is higher than the first reading.',4);
 r('The carbon dioxide percentage is compared before and after the plant stays in sunlight?','It is lower after sunlight.',4);
 r('The light reaching a green plant is removed while gas exchange continues?','Photosynthesis stops; respiration continues, taking in oxygen and releasing carbon dioxide.',1);
 p(105,'E. Give Reasons for the Following');
 r('The oxygen percentage inside the bag increases after the plant is left in sunlight.','The plant makes food by photosynthesis and releases oxygen.',4);
 r('Plants release more carbon dioxide at night than during the daytime.','At night there is no light for making food; only respiration takes place.',2);
 u('The bag used in the experiment should be sealed tightly.','Page 41 gives this step but does not explain the reason. Check with the teacher.');
 u('Two gas readings are taken during the experiment—one at the start and another after one hour.','Page 41 describes the two readings but does not state this reason explicitly. Check with the teacher.');
 r('The plant in the experiment is placed in sunlight before taking the second gas reading.','Sunlight allows it to make food, use carbon dioxide and release oxygen.',4);
}, ['The sampling-pump function is borrowed from page 9. Page 40’s top illustration has an inconsistent gas arrow; the cards follow its explicit daytime/nighttime text.']);
lesson('6-1', [
 f('Transpiration', ['**Transpiration** releases water vapour from plants into the air.', '**Roots** absorb water from soil.', 'Water travels through the stem to leaves.', 'It changes into **water vapour** and leaves through stomata.']),
 f('Stomata', ['**Stomata** are tiny pores, mostly on the underside of leaves.', 'They open to let out water vapour.', 'They close to **reduce water loss**.', 'The book says they open during the day and close at night.']),
 f('Bag observations', ['In the book experiment, **Plant A has leaves** and **Plant B has no leaves**.', 'Both start with clear bags.', 'After time in sunlight, **A has water droplets** inside its bag and B has none.', 'The droplets come from water vapour released by leaves.', 'A plant in sunlight has more droplets than a similar plant kept in darkness.']),
 f('Why transpiration matters', ['**Transpiration** helps cool the plant.', 'It helps move **water and minerals upwards**.', 'It helps distribute water and keeps leaves **fresh and turgid**.']),
 f('Water path and recovery', ['**Xylem vessels** connect roots, stem and leaves and carry water and minerals.', 'A wilted plant recovers when **watered**.', 'Water fills its cells and makes them firm again.'])
], [['Roots','Absorb water'],['Stem','Carries water upwards'],['Leaves','Release water vapour'],['Stomata','Pores that reduce water loss when closed']], ['Roots absorb water','Water moves up the stem','Water reaches leaves','Water changes to vapour','Vapour leaves through stomata'], () => {
 p(106,'A. Choose the Correct Answer');
 m('Which part of the plant absorbs water from the soil?',['Flowers','Roots','Leaves','Fruits'],1,0);
 m('Water vapor leaves the plant mainly through tiny pores in the leaves called _____.',['roots','veins','stomata','stems'],2,1);
 m('Which of the following describes transpiration?',['The absorption of sunlight by leaves','The release of water vapor from the leaves','The production of food by plants','The absorption of gases by the roots'],1,0);
 m('In the experiment, which plant will have more water droplets inside its plastic bag after being left in sunlight?',['Plant A with leaves','Plant B without leaves','Both plants equally','Neither plant'],0,2);
 m('Which of the following is an important role of transpiration?',['It prevents water from entering the roots.','It stops minerals from moving through the plant.','It helps cool the plant.','It prevents the plant from releasing water vapor.'],2,3);
 p(106,'B. What Happens When...?');
 r('A plant with leaves is covered with a clear plastic bag and left in sunlight for some time?','Water droplets appear inside the bag.',2);
 r('Water is absorbed from the soil by the roots?','It moves up the stem to the leaves.',0);
 r('Water reaches the leaves and moves through the stomata?','It leaves as water vapour by transpiration.',0);
 r('A plant loses water through transpiration on a warm sunny day?','Transpiration helps cool the plant and move water and minerals upwards.',3);
 r('The stomata close during the night?','Water loss is reduced.',1);
 p(106,'C. Give Reasons for the Following');
 r('Plant A with leaves has more water droplets inside its bag than Plant B without leaves.','Leaves release water vapour through transpiration; the plant without leaves does not form droplets in this experiment.',2);
 u('Two similar plants are used in the transpiration experiment.','The book specifies similar plants but does not explain why. Check with the teacher.');
 u('The plastic bags are tied tightly around the plants during the experiment.','Page 44 specifies tied bags but does not explain why. Check with the teacher.');
 u('Transpiration helps in the upward movement of water and minerals through the plant.','Page 43 states this role, but does not explain its mechanism. Check the requested reason with the teacher.');
 r('Stomata are important for reducing water loss from the plant.','They can close to reduce the release of water vapour.',1);
 p(107,'Try');
 r('What is it called when the water inside a plant changes into water vapor and is released from the leaves?','Transpiration.',0);
 m('In the experiment to check that water comes out of the leaves, what is the reason why water drops formed inside the plastic bag? Choose the correct answer from below.',['Because it rained from outside.','Because water vapor came out of the leaves and changed into water.','Because the plant breathed and released carbon dioxide.'],1,2);
 r('What are the small pores called, which are mostly on the underside of leaves, that act as exits for water vapor?','Stomata.',1);
 m('Which statement correctly explains transpiration? Choose the correct answer from below.',['Transpiration actively happens from the stems, not the leaves.','Transpiration is when plants release oxygen.','Transpiration happens through the small pores on the underside of the leaves, which act as exits for water vapor.'],2,1);
 p(107,'Exercise');
 m('Which statement correctly explains the path of water in plants? Choose the correct answer from below.',['Water flows freely everywhere inside the stem.','Tubes are connected from the roots to the tips of the leaves to carry water.','The water absorbed from the roots passes through the stems, but does not go to the leaves.'],1,4);
 r('When a plant is wilted, what should you do to recover it?','Water it.',4);
}, ['The xylem and wilted-plant recovery answers on page 107 are borrowed from page 45.']);
lesson('6-2', [
 f('Xylem vessels', ['**Xylem vessels** are tiny tubes inside plants.', '**Root hairs** take in water from soil.', 'Xylem carries **water and minerals** from roots through stem to leaves and other parts.']),
 f('Water and firm cells', ['**Watering** can make a wilted plant fresh and upright.', 'Water fills cells and makes them **firm** again.', 'It helps the plant carry out photosynthesis.']),
 f('Coloured-water investigation', ['The book washes the plant’s **roots** before putting them in coloured water.', 'Coloured water lets us **see the water path**.', 'After a few hours, the stem and leaves change colour.', 'Cut surfaces of roots, stems and leaves show coloured parts where water has travelled.']),
 f('Water leaves the plant', ['Water reaches the **leaves** through xylem.', 'It becomes water vapour and leaves through **stomata**.', 'This process is **transpiration** and helps cool the plant.']),
 f('Plants along the Nile', ['The book describes broad, flat **lotus leaves** catching sunlight to make starch.', '**Papyrus** has strong, straight water paths carrying water up its tall stem.', 'Plants use carbon dioxide and release oxygen during photosynthesis.'])
], [['Root hairs','Take water from soil'],['Xylem','Carry water and minerals'],['Stomata','Release water vapour'],['Coloured water','Makes the water path visible']], ['Water enters through root hairs','Water enters xylem in roots','Water travels up stem in xylem','Water reaches leaves','Water vapour leaves through stomata'], () => {
 p(108,'A. What Happens When...?');
 r('The roots of a plant are placed in colored water for a few hours?','The roots absorb the coloured water; it reaches the stem and leaves.',2);
 r('The colored water absorbed by the roots moves upward through the xylem vessels?','The stem and leaves become coloured.',2);
 r('The roots, stem, and leaves are cut after the plant has been standing in colored water for several hours?','Their cut surfaces show coloured parts along the water paths.',2);
 p(108,'B. Give Reasons for the Following');
 u('The roots of the plant are washed before they are placed in the colored water.','Page 46 gives this step and notes that roots become clean, but does not state the reason for the experimental step. Check with the teacher.');
 r('Colored water is used instead of clear water in the experiment.','To make the path of water visible.',2);
 r('The cut surfaces of the roots, stem, and leaves show colored parts at the end of the experiment.','Coloured water has travelled through the xylem vessels in those parts.',0);
});
