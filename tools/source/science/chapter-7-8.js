const {f,p,m,t,r,ms,u,lesson} = require('../science-author');
lesson('7-1', [
 f('Food chain', ['A **food chain** links organisms through eating and being eaten.', '**Energy and nutrients** pass from one organism to the next.', 'All living organisms need food to live and grow.', 'If a part is missing, it can affect the whole chain.']),
 f('Producers', ['**Producers** are plants that make their own food.', 'They use sunlight, water and air.', 'Plants are the **first part** of the food chain.']),
 f('Herbivores', ['**Herbivores** eat plants and get energy from them.', 'They are **primary consumers**.', 'The book shows a grasshopper eating grass.']),
 f('Carnivores and top predator', ['**Carnivores** eat other animals.', 'They can eat herbivores or other carnivores.', 'In the book’s chain, the **frog** is a secondary consumer and the **snake** a tertiary consumer.', 'The **eagle** is the apex or top predator in this chain.']),
 f('Energy arrows', ['**Arrows** show the direction in which energy passes.', 'The arrow points from the organism eaten to the organism receiving energy.', 'The book shows **grass → grasshopper → frog → snake → eagle**.'])
], [['Plants','Producers'],['Grasshopper','Primary consumer'],['Frog','Secondary consumer'],['Eagle','Apex predator']], ['Grass','Grasshopper','Frog','Snake','Eagle'], () => {
 p(109,'A. Complete the Following');
 r('A series of living organisms connected to one another by eating and being eaten is called a _____.','Food chain.',0);
 r('Green plants are called _____ because they make their own food.','Producers.',1);
 r('Animals that eat plants are known as _____.','Herbivores.',2);
 r('In a food chain, _____ passes from one organism to the next.','Energy.',0);
 u('An animal at the top of a food chain that has no natural predator in that chain is called _____ predator.','The diagrams label the eagle “apex predator”, but the book does not explain “no natural predator”. Check this definition with the teacher.');
 p(109,'B. Write True or False');
 t('All living organisms in a food chain depend directly or indirectly on other organisms for food.',true,0);
 t('Carnivores get their energy by eating only plants.',false,3);
 t('A primary consumer comes after a producer in a food chain.',true,2);
 t('The arrows in a food chain point toward the organism receiving the energy.',true,4);
 t('A frog that eats a grasshopper can act as a secondary consumer.',true,3);
 p(110,'C. What Happens When...?');
 r('A rabbit eats a green plant in a food chain?','Energy passes from the plant to the rabbit, a herbivore / primary consumer.',2);
 r('A snake eats a frog that has eaten a grasshopper?','Energy passes from the frog to the snake, a tertiary consumer in the book’s chain.',3);
 u('The number of producers in a food chain decreases greatly?','The book states that missing parts affect the chain, but does not give this particular outcome. Discuss and check with the teacher.');
 r('One organism disappears completely from a food chain?','It can affect the whole chain because organisms depend on one another for food.',0);
 u('A top predator is removed from a food chain?','The book does not describe the particular result of removing a top predator. Check with the teacher.');
 p(110,'D. Give Reasons for the Following');
 r('Plants form the first part of most food chains.','They produce their own food using sunlight, water and air.',1);
 r('A grasshopper is considered a primary consumer when it feeds on grass.','It is a herbivore getting energy by eating a producer.',2);
 r('An eagle can be considered a top predator in a food chain.','It is shown at the top / end of the book’s food chain.',3);
 r('Arrows are used between organisms when drawing a food chain.','They show the direction in which energy passes.',4);
 r('Removing one organism from a food chain can affect several other organisms.','The organisms depend on one another for food and energy.',0);
});
lesson('7-2', [
 f('Oxygen and carbon dioxide', ['**Animals** breathe oxygen released by plants.', '**Plants** use carbon dioxide released by animals for photosynthesis.', 'Air connects plants and animals.']),
 f('Transpiration', ['**Transpiration** releases water vapour from leaves.', 'This water joins the **water cycle**.', 'Water moves between living organisms and the environment.']),
 f('Water cycle', ['**Evaporation** turns water from oceans, rivers and lakes into vapour.', '**Condensation** forms clouds from water vapour.', '**Precipitation** brings rain back to Earth.', 'Plants absorb water from the soil through roots.', 'Water changes form and **circulates**, so organisms use it repeatedly.']),
 f('Food chains recap', ['A **food chain** is an eating-and-being-eaten connection.', '**Plants** begin the chain by making food using sunlight.', 'Arrows show energy moving from the organism eaten to the eater.', 'The question picture shows **wheat → grasshopper → frog → eagle**.'])
], [['Oxygen','Released by plants and used by animals'],['Carbon dioxide','Released by animals and used by plants'],['Transpiration','Water vapour from plants'],['Precipitation','Rain falls to Earth']], ['Water evaporates','Water vapour condenses into clouds','Rain falls','Plants absorb water','Plants release water vapour'], () => {
 p(111,'Try');
 r('What do we call the feeding relationship between living organisms?','Food chain.',3);
 m('What kind of living organisms are the beginning of the food chain? Choose the correct answer from below.',['Strong carnivores','Herbivores like insects','Plants that produce nutrients using sunlight'],2,3);
 p(111,'Exercise');
 r('Arrange the following living organisms in the correct order of the food chain and connect them with arrows. [ Grasshopper / Wheat / Eagle / Frog ]','Wheat → Grasshopper → Frog → Eagle.',3);
 m('Which statement correctly explains the food chain? Choose the correct answer from below.',['Arrows are drawn from the one that eats to the one that is eaten.','If carnivores disappear, plants will grow healthier.','Plants use sunlight to produce nutrients inside their bodies.'],2,3);
 m('Which statement correctly explains the relationship between living organisms and air? Choose the correct answer from below.',['Both animals and plants only decrease oxygen and increase carbon dioxide.','The environment where animals can breathe is maintained because plants release oxygen.'],1,0);
 m('The water on Earth is changing its shape and (_____), and it is used repeatedly by many living organisms.',['circulating','disappearing','increasing'],0,2);
 p(112,'A. Complete the Following');
 r('Animals breathe in _____ released by plants.','Oxygen.',0);
 r('Plants take in _____ released by animals for photosynthesis.','Carbon dioxide.',0);
 r('Plants release water vapor into the air through a process called _____.','Transpiration.',1);
 r('The process in which water vapor changes into clouds is called _____.','Condensation.',2);
 r('Water falling from clouds to the Earth as rain is called _____.','Precipitation.',2);
 p(112,'B. Write True or False');
 t('Animals and plants help exchange oxygen and carbon dioxide in the environment.',true,0);
 t('Transpiration adds water vapor to the atmosphere.',true,1);
 t('Water disappears permanently after it evaporates from rivers and lakes.',false,2);
 t('Condensation occurs when water vapor forms clouds in the atmosphere.',true,2);
 t('Plants are connected to both the air and the water cycle.',true,1);
 p(113,'C. What Happens When...?');
 r('An animal breathes out carbon dioxide near a green plant?','The plant can use that carbon dioxide for photosynthesis.',0);
 r('Water evaporates from rivers, lakes, and oceans and rises into the atmosphere?','The water vapour joins the water cycle and can form clouds.',2);
 r('Water vapor in the atmosphere cools and condenses?','Clouds form.',2);
 r('Rainwater reaches the soil around a plant?','The roots can absorb it.',2);
 u('Plants completely disappear from an environment?','Page 52 asks the learner to predict this, but does not provide an outcome. Discuss and check with the teacher.');
 p(113,'D. Give Reasons for the Following');
 r('Animals depend on plants for oxygen.','Plants release oxygen, which animals breathe.',0);
 r('Plants and animals are connected through the gases in the air.','Animals use oxygen from plants; plants use carbon dioxide from animals.',0);
 r('Transpiration is considered an important part of the water cycle.','It adds water vapour and keeps water moving between plants and the environment.',1);
 r('Water on Earth is continuously circulated rather than being used only once.','It evaporates, forms clouds, falls as rain and is used repeatedly by organisms.',2);
 r('The disappearance of plants can disturb the balance of oxygen and carbon dioxide in the air.','Plants release the oxygen animals use and take in carbon dioxide from animals.',0);
}, ['The food-chain questions on page 111 are printed under Lesson 7-2. Their recap uses pages 50-51 and the question’s own wheat-chain illustration. Root absorption is borrowed from page 45.']);
lesson('8-1', [
 f('Nile food chain', ['The book’s **Nile food chain** begins with algae and water plants.', 'Herbivorous fish such as **Nile tilapia** are primary consumers.', 'Carnivorous fish such as **Nile perch** are secondary consumers.', '**Nile crocodiles** are top carnivores / tertiary consumers.']),
 f('Desert food chain', ['**Desert shrubs and grasses** are producers.', '**Grasshoppers and jerboas** are herbivores / primary consumers.', '**Fennec foxes and Egyptian vultures** are top carnivores in the book’s desert chain.', 'The fennec fox eats small desert animals.']),
 f('Food pyramid', ['A **food pyramid** shows feeding levels in a food chain.', '**Plants / producers** support the base because they make food using sunlight.', 'Organisms at different levels depend on one another for energy.', 'Herbivores eat producers; **carnivores** eat animals.']),
 f('Food along the Nile', ['Another book example is **water plants → shrimp → fish → water birds or humans**.', 'The types of organisms differ, but plants provide the food-chain base.']),
 f('Wadi al-Hitan', ['**Wadi al-Hitan** means **Valley of the Whales**.', 'It is a desert today but was an **ocean** millions of years ago.', '**Fossils** show ancient marine life and help explain ecosystem changes.'])
], [['Algae and water plants','Nile producers'],['Nile tilapia','Nile primary consumer'],['Desert grasses','Desert producers'],['Fennec fox','Desert carnivore']], ['Algae and water plants','Nile tilapia','Nile perch','Nile crocodile'], () => {
 p(114,'Try');
 r('Give one example of a top carnivore at the top of the food chain in the Nile River.','Nile crocodile.',0);
 u('If all the plants in the desert died out, what do you think would happen to the carnivores? Write your own thoughts.','This asks for the learner’s own prediction. Discuss without a score.');
 p(114,'Exercise');
 m('Which statement correctly explains the food chains in Egypt? Choose the correct answer from below.',['In the Nile River, crocodiles eat algae directly.','In the desert, fennec foxes eat small animals like jerboas.'],1,1);
 r('Give one example of a herbivore that eats plants in the desert food chain.','Grasshopper or jerboa.',1);
 p(115,'A. Choose the Correct Answer');
 m('Which organism is a producer in the Nile River food chain?',['Nile perch','Crocodile','Algae','Nile tilapia'],2,0);
 m('Which animal can be a top carnivore in a desert food chain?',['Grasshopper','Fennec fox','Jerboa','Desert grass'],1,1);
 m('In a Nile River food chain, which organism may feed on a herbivorous fish?',['Carnivorous fish','Algae','Water plants','Phytoplankton'],0,0);
 m('Why are plants found at the base of a food pyramid?',['They eat other organisms.','They make their own food using sunlight.','They are top carnivores.','They get energy from animals.'],1,2);
 u('What would most likely happen to fennec foxes if the number of small desert animals decreased greatly?','The book states that food can be scarce and that foxes eat small animals, but does not give this particular prediction. Check with the teacher.',['They would have less food available.','They would become producers.','They would make their own food.','Their food supply would increase.']);
 p(115,'B. Write True or False');
 t('Desert shrubs and grasses can act as producers in a desert food chain.',true,1);
 t('A crocodile gets its energy directly from algae in the Nile River food chain.',false,0);
 t('Herbivores get energy by feeding on producers.',true,2);
 t('The organisms at different levels of a food pyramid depend on one another for energy.',true,2);
 t('Fossils at Wadi al-Hitan provide evidence that the area was once an ancient ocean.',true,4);
 p(115,'C. Complete the Following');
 r('A diagram showing the feeding levels in a food chain is called a food _____.','Pyramid.',2);
 r('In the Nile River, fish such as Nile tilapia can act as _____ consumers when they feed on producers.','Primary.',0);
 r('Animals such as fennec foxes that feed on other animals are called _____.','Carnivores.',2);
 r('The food chain always begins with _____ that make their own food.','Plants / producers.',2);
 r('Wadi al-Hitan is also known as the Valley of the _____.','Whales.',4);
}, ['The energy-dependence and carnivore definitions are borrowed from pages 50-51. Pages 54 and 55 use different Nile chain examples; each is kept as its own example.']);
