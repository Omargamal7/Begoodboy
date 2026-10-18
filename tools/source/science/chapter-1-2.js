const {f,p,m,t,r,ms,u,lesson} = require('../science-author');
lesson('1-1', [
 f('Combustion', ['**Combustion** means burning.', 'Burning needs **fuel, oxygen and heat**.', 'Wood, paper, candles, gas and charcoal can be fuels.']),
 f('Fresh air', ['**Fresh air** supplies oxygen for burning.', 'Fresh air must flow **in and out continuously**.', 'If there is not enough fresh air, combustion **stops**.']),
 f('Closed jar', ['In a **closed jar**, the burning candle uses up the oxygen.', 'Fresh air cannot enter.', 'After a while, the flame **goes out**.']),
 f('Small gap and open lid', ['A **small gap** at the bottom allows some fresh air to enter.', 'With little fresh air, the candle has a **weaker flame**.', 'Removing the lid supplies **more air**.', 'The flame becomes **brighter and stronger**.'])
], [['Combustion','Burning'],['Oxygen','Gas needed for burning'],['Closed jar','Flame goes out'],['Open jar','More fresh air reaches the flame']], ['Candle burns in a closed jar','Oxygen in the jar is consumed','Not enough oxygen remains','Flame goes out'], () => {
 p(73,'A. Choose the correct answer');
 m('Which condition allows a candle to keep burning?',['No air supply','Continuous fresh air','A closed lid','Less oxygen'],1,1);
 m('In the experiment, which setup provides the least fresh air to the candle?',['Jar without a lid','Jar with a small gap','Completely closed jar','Open candle'],2,2);
 m('Making a small gap at the bottom of the jar causes _____.',['some fresh air to enter','all the air to leave','the candle to go out immediately','the oxygen to disappear'],0,3);
 m('Which flame would you expect to be the strongest?',['Flame in a completely closed jar','Flame in a jar with a small gap','Flame in a completely open jar','Flame with no oxygen'],2,3);
 m('Which of the following best describes the relationship between air supply and combustion?',['More fresh air supports stronger combustion.','Less fresh air makes combustion stronger.','Air has no effect on combustion.','Combustion removes the need for oxygen.'],0,3);
 p(73,'B. Write True or False');
 t('A candle can keep burning without oxygen.',false,0);
 t('A small opening allows some fresh air to reach the candle.',true,3);
 t('The amount of air available can affect the strength of a candle flame.',true,3);
 t('The flame is strongest when the jar is completely sealed.',false,2);
 t('During combustion, oxygen in the surrounding air is consumed.',true,2);
 p(73,'C. Complete the following');
 r('The process in which substances burn is called _____.','Combustion.',0);
 r('During combustion, _____ in the air is gradually consumed.','Oxygen.',2);
 r('When there is not enough fresh air, combustion _____.','Stops.',1);
 r('With only a small amount of fresh air, the candle burns with a _____ flame.','Weaker.',3);
 r('When the lid is removed completely, the flame becomes _____ and _____.','Brighter and stronger.',3);
 p(74,'D. What happens when...?');
 r('A candle is lit and left where fresh air can reach it freely?','It keeps burning.',1);
 r('A burning candle is covered by a jar and the jar is completely closed?','It uses the oxygen in the jar, then goes out.',2);
 r('The oxygen trapped inside a closed jar is gradually used up?','The candle flame goes out.',2);
 r('A small opening is made at the bottom of the jar while the top remains covered?','Some fresh air enters; the candle burns with a weaker flame.',3);
 r('The lid is removed completely after the candle has been burning with only a small air gap?','More fresh air reaches the candle; the flame becomes brighter and stronger.',3);
 p(74,'E. Give reasons for the following');
 r('Oxygen is necessary for combustion.','Oxygen supports burning; combustion stops when oxygen is used up.',0);
 r('Fresh air must continuously flow in and out for combustion to continue.','It keeps supplying oxygen for burning.',1);
 r('The flame in the completely closed jar goes out after a while.','The oxygen is consumed and fresh air cannot replace it.',2);
 r('The candle can still burn when there is a small gap at the bottom of the jar.','The gap lets some fresh air reach the candle.',3);
 r('The flame becomes brighter and stronger when the lid is completely removed.','More fresh air reaches the candle.',3);
});
lesson('1-2', [
 f('Air', ['**Air** is an invisible, colourless and odourless mixture of gases around Earth.', 'Air is about **78% nitrogen**, **21% oxygen** and **1% other gases**.', 'The other gases include **carbon dioxide** and **water vapour**.', 'Oxygen is about **one-fifth** of air.']),
 f('Oxygen', ['**Oxygen** supports combustion and breathing.', 'A candle in oxygen keeps burning.', 'A lit incense stick in oxygen **burns brightly**.', 'More oxygen can make a fire burn faster and hotter.']),
 f('Nitrogen and carbon dioxide', ['**Nitrogen** makes up the greatest part of air.', '**Nitrogen and carbon dioxide** do not support combustion.', 'A candle in either gas goes out.', 'A lit incense stick in carbon dioxide goes out.']),
 f('Collecting gas', ['For **water displacement**, fill a gas jar completely with water.', 'Invert the jar in a **water basin**.', 'A **bent tube** carries gas from a gas cylinder into the jar.', 'Gas **displaces water**, so the water level falls.', 'The book says collect gas until about **70%** of the jar contains gas.']),
 f('Compare gases', ['The candle experiment prepares **equal amounts** of oxygen, nitrogen and carbon dioxide.', 'Compare what happens to a candle in each jar.', '**Combustion** means burning.', 'Fresh **air** must flow in and out for burning to continue.', 'In a closed jar, the candle consumes the oxygen and then goes out.'])
], [['Oxygen','Supports combustion'],['Nitrogen','Largest part of air'],['Carbon dioxide','Does not support combustion'],['Bent tube','Carries gas to the jar']], ['Fill the jar with water','Invert the jar in the water basin','Gas enters through a bent tube','Gas displaces water','Collect until about 70% contains gas'], () => {
 p(75,'Try');
 r('In the experiment of burning a standing candle inside a jar, what happens to the flame if you put a lid on the jar to stop air from coming in and out?','It goes out after the oxygen is used up.',4);
 m('Why did the flame go out inside the jar with the lid? Choose the correct answer from below.',['Because there was no water vapor in the jar.','Because it got dark inside the jar.','Because fresh air stopped coming in.'],2,4);
 r('What gas is included in the air and has the power to help things burn?','Oxygen.',1);
 m('What happens to the burning when you put a lit incense stick into a jar of oxygen? Choose the correct answer from below.',['It becomes weaker.','It burns brightly.','The flame goes out.'],1,1);
 m('What happens to the burning when you put a lit incense stick into a jar of carbon dioxide? Choose the correct answer from below.',['It keeps burning as it is.','It burns brightly.','The flame goes out.'],2,2);
 p(75,'Exercise');
 m('In the experiment of burning a candle inside a jar, what happens to the flame if you leave gaps at the top and bottom of the jar? Choose the correct answer from below.',['It keeps burning.','It goes out immediately.'],0,4);
 r('For things to keep burning, fresh (① _____) must constantly flow in and out. In a place where air is not replaced, things (② _____) keep burning.','① Air; ② cannot.',4);
 p(76,'A. Choose the correct answer');
 m('Air is best described as:',['one pure gas','a mixture of gases','only oxygen','only nitrogen'],1,0);
 m('Which gas represents about one-fifth of the volume of air?',['Nitrogen','Oxygen','Carbon dioxide','Water vapor'],1,0);
 m('Which pair of gases does NOT support combustion?',['Oxygen and nitrogen','Nitrogen and carbon dioxide','Oxygen and carbon dioxide','Oxygen and water vapor'],1,2);
 m('Which tool carries gas from a gas cylinder to the collecting jar?',['Water basin','Candle holder','Bent tube','Lid'],2,3);
 m('About how much of the jar should be filled with gas before it is removed from the water basin?',['10%','21%','50%','70%'],3,3);
 p(76,'B. Complete the following');
 r('Air surrounds the _____ and is made up of several different gases.','Earth.',0);
 r('Oxygen supports _____, while nitrogen and carbon dioxide do not.','Combustion.',1);
 r('To collect a gas by water displacement, the gas jar is first completely filled with _____.','Water.',3);
 r('As gas enters the inverted jar, it _____ the water inside the jar.','Displaces / pushes out.',3);
 r('During water displacement, the gas jar is placed _____ in the water basin.','Upside down / inverted.',3);
 p(76,'C. Write True or False');
 t('Water vapor is one of the gases that may be found in air.',true,0);
 t('Nitrogen is present in a smaller amount than oxygen in air.',false,0);
 t('Equal amounts of gases should be used when comparing their effects on a candle.',true,4);
 t('A collecting jar is placed upright in the basin during water displacement.',false,3);
 t('The water level inside the collecting jar falls as gas enters it.',true,3);
 p(77,'D. Write the scientific term');
 r('The process in which a substance burns.','Combustion.',4);
 r('The gas that makes up the greatest percentage of air.','Nitrogen.',0);
 r('The gas needed for combustion and for breathing.','Oxygen.',1);
 r('The container used to collect a gas during the experiment.','Gas jar.',3);
 r('The method in which a gas is collected by pushing water out of an inverted container.','Water displacement.',3);
 p(77,'E. What happens when...?');
 r('A lighted candle is placed in a jar containing oxygen?','It keeps burning.',1);
 r('A lighted candle is placed in a jar containing nitrogen?','It goes out.',2);
 r('A lighted candle is placed in a jar containing carbon dioxide?','It goes out.',2);
 r('Gas begins to enter a completely water-filled inverted jar through the bent tube?','The gas displaces the water and the water level falls.',3);
 r('A burning substance is supplied with more oxygen than before?','Combustion can become faster and hotter.',1);
 p(77,'F. Give reasons for the following');
 r('Air is considered a mixture rather than a single substance.','It contains several gases, including nitrogen, oxygen, carbon dioxide and water vapour.',0);
 u('Equal amounts of oxygen, nitrogen, and carbon dioxide are prepared when comparing their effects on burning.','Page 5 states equal amounts, but does not explain why. Check the reason with the teacher.');
 u('The gas jar must be inverted when gas is collected by water displacement.','Page 6 shows the inverted jar but does not explain the reason. Check with the teacher.');
 r('A lighted candle is useful for identifying which of the three gases supports combustion.','It keeps burning in oxygen, but goes out in nitrogen and carbon dioxide.',2);
 r('Oxygen is described as essential to living organisms as well as important in combustion.','Oxygen is needed for breathing and supports combustion.',1);
}, ['Combustion and continuous fresh air are borrowed from pages 3-4. More oxygen causing faster, hotter burning is borrowed from page 11.']);
lesson('1-3', [
 f('Air after burning', ['During **combustion**, oxygen is consumed and its amount decreases.', '**Carbon dioxide** is produced and its amount increases.', 'Combustion is burning in oxygen.', 'A sealed candle goes out when there is not enough oxygen.', 'More fresh air or oxygen makes combustion stronger, faster and hotter.']),
 f('Limewater', ['**Limewater** is a clear, colourless liquid used to test carbon dioxide.', 'With carbon dioxide it becomes **milky white**.', 'The white solid formed is **calcium carbonate**.', 'In the book experiment, shake limewater in a jar after a candle has burned.', 'Limewater in the comparison jar without a burning candle remains clear.']),
 f('Gas-detection tubes', ['**Gas-detection tubes** are small glass tubes containing chemicals.', 'Different chemicals react with different gases and **change colour**.', 'A **sampling pump** draws gas through the tube.', 'Compare the colour with the supplied **colour chart** to read the gas amount.']),
 f('Gas-monitoring equipment', ['**Gas-monitoring equipment** uses a sensor to measure gas concentration.', 'It displays a numerical **percentage**.', 'Some monitors measure oxygen and carbon dioxide together.', 'It can be used in hospitals and intensive care units to monitor breathing.', 'The sensor is not broken after a use.']),
 f('Ancient Egyptian fire', ['Ancient Egyptians used **vegetable oil and animal fat** in lamps.', '**Bellows** push more air into a furnace.', 'The extra oxygen makes burning faster and hotter.', 'Hot furnaces were used to melt metals.']),
 f('Carbon dioxide and solar power', ['More atmospheric **carbon dioxide** raises Earth’s temperature: the **greenhouse effect**.', '**Renewable energy** comes from natural sources that do not run out.', 'The book lists sunlight, wind, water and biomass.', 'A **solar power plant** generates electricity from sunlight without burning fossil fuels.', 'This reduces carbon dioxide emissions. **Benban**, near Aswan, is the book’s example.'])
], [['Limewater','Turns milky white with carbon dioxide'],['Sampling pump','Draws a gas sample'],['Gas-detection tube','Changes colour'],['Gas monitor','Shows a gas percentage']], ['Candle burns','Oxygen is consumed','Carbon dioxide is produced','Limewater is added and shaken','Limewater becomes milky white'], () => {
 p(78,'Try');
 r('What gas has increased?','Carbon dioxide.',0);
 r('What gas has decreased?','Oxygen.',0);
 r('What is the colorless and clear liquid used to check if there is carbon dioxide?','Limewater.',1);
 p(78,'Exercise');
 m('What happens when you put limewater in a jar with increased carbon dioxide and shake it? Choose the correct answer from below.',['It turns blue.','It turns yellow.','It turns milky white.'],2,1);
 r('How does the amount of oxygen change after burning?','It decreases.',0);
 r('How does the amount of carbon dioxide change after burning?','It increases.',0);
 p(79,'A. Choose the Correct Answer');
 m('Which gas increases in the air after burning?',['Oxygen','Carbon dioxide','Nitrogen','Hydrogen'],1,0);
 m('Which substance is used to test for carbon dioxide gas?',['Distilled water','Limewater','Salt water','Oil'],1,1);
 m('What happens to limewater when carbon dioxide passes through it?',['It turns blue.','It turns green.','It turns milky white.','It remains colorless.'],2,1);
 m('Which tool contains chemicals that react with certain gases and change color?',['Gas detection tube','Beaker','Thermometer','Combustion spoon'],0,2);
 m('What is the main function of a sampling pump?',['To heat a gas','To draw a gas sample through a detection tube','To produce oxygen','To measure temperature'],1,2);
 m('Which device displays the percentage of a gas electronically?',['Gas monitoring equipment','Combustion spoon','Safety goggles'],0,3);
 m('Ancient Egyptians used bellows mainly to:',['remove oxygen from a furnace.','push more air into a furnace.','decrease the temperature of a fire.','produce carbon dioxide.'],1,4);
 m('Which of the following is a renewable source of energy?',['Coal','Natural gas','Sunlight','Petroleum'],2,5);
 m('Increasing carbon dioxide in the atmosphere contributes to:',['the greenhouse effect.','less combustion.','lower oxygen use.','the production of limewater.'],0,5);
 m('A solar power plant helps protect the environment because it:',['burns more fuel.','produces electricity without burning fossil fuels.','increases carbon dioxide production.','uses oxygen to produce electricity.'],1,5);
 p(80,'B. Write True or False');
 t('The amount of oxygen in air increases after burning.',false,0);
 t('Limewater can be used as an indicator for the presence of carbon dioxide.',true,1);
 t('Limewater remains completely clear when carbon dioxide is passed through it.',false,1);
 t('Different gas-detection tubes may be designed to detect different gases.',true,2);
 t('A gas-monitoring device can show gas concentration as a numerical percentage.',true,3);
 t('Gas-monitoring equipment must always be broken after one use.',false,3);
 t('Ancient Egyptians used combustion in some of their daily activities.',true,4);
 t('Increasing the oxygen supply can make combustion occur faster.',true,4);
 t('Renewable energy depends only on fossil fuels.',false,5);
 t('Solar power can reduce some of the negative effects associated with carbon dioxide emissions.',true,5);
 p(80,'C. Write the Scientific Term');
 r('A process in which substances react with oxygen and burn.','Combustion.',0);
 r('The gas that is produced during burning and causes limewater to turn milky white.','Carbon dioxide.',1);
 r('A colorless, clear liquid used to test for the presence of carbon dioxide gas.','Limewater.',1);
 r('Small glass tubes containing chemicals that react with particular gases.','Gas-detection tubes.',2);
 r('A device used to draw a sample of gas through a gas-detection tube.','Sampling pump.',2);
 r('An electronic device with a sensor that measures the percentage of gas in the surrounding air.','Gas-monitoring equipment.',3);
 r('A blowing tool used to force additional air into a fire or furnace.','Bellows.',4);
 r('The rise in Earth’s temperature caused by increasing carbon dioxide in the atmosphere.','Greenhouse effect / global warming.',5);
 r('Energy obtained from natural sources that do not run out.','Renewable energy.',5);
 r('A power plant that uses sunlight to generate electricity.','Solar power plant.',5);
 p(81,'E. What Happens When...?');
 r('A burning candle is sealed inside a jar and left for some time?','It consumes the oxygen and goes out.',0);
 r('A burning material receives a larger supply of fresh air? The oxygen available to a burning substance decreases?','More fresh air: stronger combustion. Less available oxygen: burning weakens or stops.',0);
 r('More oxygen is supplied to a burning fire?','It burns faster and produces more heat.',4);
 r('A gas sample reacts with the chemical inside a suitable gas-detection tube?','The chemical changes colour.',2);
 r('A sampling pump is operated while connected correctly to a gas-detection tube?','It draws a gas sample through the tube.',2);
 r('Bellows are used to push more air into a hot furnace?','More oxygen enters, so burning becomes faster and hotter.',4);
 r('The percentage of carbon dioxide in the atmosphere increases greatly?','Earth’s temperature rises through the greenhouse effect.',5);
 r('Sunlight falls on the solar panels of a solar power plant?','The plant generates electricity.',5);
 r('Electricity is generated using solar energy instead of burning fossil fuels?','Electricity is produced without fossil-fuel burning, reducing carbon dioxide emissions.',5);
 p(81,'F. Give Reasons for the Following');
 r('Air after combustion is different from air before combustion.','Oxygen decreases and carbon dioxide increases.',0);
 r('Carbon dioxide increases in the air after some substances burn.','Carbon dioxide is produced during combustion.',0);
 r('Limewater is useful when investigating the gas produced during burning.','It turns milky white when carbon dioxide is present.',1);
 u('Two jars—one with a burning candle and one without—can be used in the limewater experiment.','Page 8 describes the comparison but does not state why the two jars are needed. Check the reason with the teacher.');
 r('Gas-detection tubes are useful for identifying gases in air.','Their chemicals react with particular gases and change colour.',2);
 r('A color chart is supplied with gas-detection tubes.','Compare the colour with the chart to read the gas amount.',2);
 r('Gas-monitoring equipment is useful in specialized hospitals and intensive care units.','It measures gas percentages to monitor patients’ breathing.',3);
 r('Ancient Egyptians used bellows when working with furnaces.','Bellows increase the air supply, making the fire hotter for melting metals.',4);
 r("Increasing atmospheric carbon dioxide can raise Earth's temperature.",'It contributes to the greenhouse effect.',5);
 r('Using solar power can help reduce the negative effects of carbon dioxide.','Solar electricity does not require burning fossil fuels, so carbon dioxide emissions are reduced.',5);
}, ['Closed-jar and fresh-air facts used in the checks are borrowed from pages 3-4. Page 81 E2 prints two conditions together; both are retained. Page 79 A6 has three printed options, labelled a, b and d; all three are retained.']);
lesson('2-1', [
 f('Breathing', ['**Breathing** takes oxygen into the lungs and releases carbon dioxide.', '**Inhalation** means breathing in.', '**Exhalation** means breathing out.', 'The body needs oxygen to release **energy from food**.', 'Respiration is a life process, alongside digestion, excretion and growth.']),
 f('Two air samples', ['**Exhaled air** has less oxygen and more carbon dioxide than room air.', 'Exhaled air still contains **oxygen**.', 'In the book activity, one bag contains exhaled air and the other room air.']),
 f('Limewater comparison', ['**Limewater** tests carbon dioxide.', 'Add the same amount to both bags and shake them.', 'Limewater becomes **milky more quickly** in exhaled air.', 'The book says to wear **safety goggles**.']),
 f('Gas-detection tubes', ['**Gas-detection tubes** contain chemicals that react with particular gases.', 'They can compare oxygen and carbon dioxide amounts.', 'Exhaled air gives a **lower oxygen reading** and **higher carbon dioxide reading** than room air.'])
], [['Inhalation','Air enters lungs'],['Exhalation','Air leaves lungs'],['Limewater','Tests carbon dioxide'],['Gas-detection tubes','Compare gas amounts']], ['Fill one bag with exhaled air','Fill another bag with room air','Add the same amount of limewater to both','Shake both bags','Compare how quickly they turn milky'], () => {
 p(82,'A. Choose the Correct Answer');
 m('Which statement best describes breathing?',['Taking in carbon dioxide only','Taking in oxygen and releasing carbon dioxide','Taking in food and releasing oxygen','Releasing oxygen and taking in carbon dioxide'],1,0);
 m('Which gas is present in a larger amount in exhaled air than in room air?',['Oxygen','Nitrogen','Carbon dioxide','Hydrogen'],2,1);
 m('Which material is used in the activity to compare the carbon dioxide in exhaled air and room air?',['Salt water','Limewater','Distilled water','Oil'],1,2);
 m('A student wants to compare the amounts of oxygen and carbon dioxide in two air samples. Which tool should be used?',['Scissors','Gas-detection tubes','Safety goggles','Plastic bags only'],1,3);
 m('Which observation provides evidence that exhaled air contains more carbon dioxide than room air?',['Limewater turns milky more quickly with exhaled air.','Exhaled air becomes blue.','Room air turns limewater red.','Exhaled air does not react with limewater.'],0,2);
 p(82,'B. Write True or False');
 t('Respiration is one of the important life processes carried out by living organisms.',true,0);
 t('During inhalation, air containing oxygen enters our lungs.',true,0);
 t('During exhalation, carbon dioxide leaves our lungs.',true,0);
 t('The two plastic bags in the experiment contain air collected from exactly the same source.',false,1);
 t('Safety goggles should be worn when carrying out the limewater experiment.',true,2);
 p(83,'C. Write the Scientific Term');
 r('The process of taking air into the lungs.','Inhalation.',0);
 r('The process of pushing air out of the lungs.','Exhalation.',0);
 r('The gas needed by the body to release energy from food.','Oxygen.',0);
 r('The gas released from the body during breathing.','Carbon dioxide.',0);
 r('Small tubes containing chemicals that can be used to test the amounts of particular gases.','Gas-detection tubes.',3);
 p(83,'D. Give Reasons for the Following');
 r('Our body needs a continuous supply of oxygen.','Oxygen is needed to release energy from food.',0);
 u('Two plastic bags are used in the breathing experiment instead of only one.','Page 15 shows two bags for comparison but does not explain this reason explicitly. Check with the teacher.');
 u('One plastic bag is filled with exhaled air while the other is filled with normal room air.','Page 15 describes the comparison, without stating the reason. Check with the teacher.');
 u('The two bags should be shaken after adding the same amount of limewater.','Page 15 gives this method but does not explain why. Check with the teacher.');
 r('Exhaled air and room air give different results when tested with gas-detection tubes.','Exhaled air has less oxygen and more carbon dioxide.',1);
 p(83,'E. What Happens When...?');
 r('A person breathes in?','Air containing oxygen enters the lungs.',0);
 r('A person breathes out?','Air containing carbon dioxide leaves the lungs.',0);
 r('Limewater is added to a bag of exhaled air and the bag is shaken?','It becomes milky more quickly than limewater with room air.',2);
 r('The oxygen gas-detection tube is used to compare exhaled air with room air?','Exhaled air shows less oxygen.',3);
 r('The carbon dioxide gas-detection tube is used to compare exhaled air with room air?','Exhaled air shows more carbon dioxide.',3);
});
lesson('2-2', [
 f('Air path', ['The **nose** filters, warms and moistens incoming air.', 'The **trachea** carries air from nose or mouth towards the lungs.', 'The trachea divides into **bronchi**, then smaller **bronchioles**.', 'Air reaches the tiny **alveoli**.']),
 f('Gas exchange', ['The **alveoli** are tiny air sacs surrounded by blood vessels.', '**Oxygen** moves from air in the alveoli into the blood.', '**Carbon dioxide** moves from blood into the alveoli and is exhaled.', 'Blood carries oxygen to the whole body.']),
 f('Inhalation and exhalation', ['The **diaphragm** is a dome-shaped muscle under the lungs.', 'During **inhalation**, it contracts and moves down.', 'The chest cavity becomes **larger** and air enters.', 'During **exhalation**, it relaxes and moves up.', 'The chest cavity becomes **smaller** and air leaves.']),
 f('Animals', ['**Cats** use lungs to breathe air.', 'Their blood carries the absorbed oxygen around the body.', '**Fish** use gills to take dissolved oxygen from water.', 'Carbon dioxide moves from the fish’s blood into the water.']),
 f('Exhaled air', ['**Exhaled air** contains oxygen, but less than inhaled air.', 'It contains more **carbon dioxide** than inhaled air.', '**Limewater** turns milky white with carbon dioxide.'])
], [['Nose','Filters, warms and moistens air'],['Trachea','Carries air towards lungs'],['Alveoli','Exchange gases with blood'],['Gills','Take oxygen from water']], ['Nose','Trachea','Bronchi','Bronchioles','Alveoli'], () => {
 p(84,'Try');
 r('What gas do we take into our body when we breathe in?','Oxygen.',1);
 m('When comparing the air we breathe in and the air we breathe out, which gas increases in the air we breathe out? Choose the correct answer from below.',['Oxygen','Carbon dioxide','Neither increases'],1,4);
 r('What is the organ in our chest called that exchanges oxygen and carbon dioxide?','Lungs.',1);
 r('Through the (① _____) around the lungs, (② _____) in the air is taken into the blood, and (③ _____) in the blood is let out into the air.','① Blood vessels; ② oxygen; ③ carbon dioxide.',1);
 p(84,'Exercise');
 m('What happens to limewater when you blow breathed-out air into it? Choose the correct answer from below.',['It turns milky white.','It turns blue.','It disappears.'],0,4);
 ms('Which statements correctly explain breathing? Choose all correct answers from below.',['The air we breathe out has no oxygen at all.','The air we breathe out also has oxygen.','The air we breathe out has more oxygen than the air we breathe in.','The air we breathe out has more carbon dioxide than the air we breathe in.'],[1,3],4);
 m('Which statement correctly explains gas exchange in the lungs? Choose the correct answer from below.',['It lets out oxygen from the blood into the air.','It takes in oxygen from the air into the blood.','It takes in carbon dioxide from the air into the blood.'],1,1);
 m('What carries the oxygen taken in by the lungs to the whole body? Choose the correct answer from below.',['Blood','Muscles','Bones'],0,1);
 p(85,'A. Choose the Correct Answer');
 m('Which structure is the main entrance for air into the respiratory system?',['Alveoli','Nose','Diaphragm','Bronchioles'],1,0);
 m('Which sequence correctly shows the path of air through the respiratory system?',['Nose → bronchi → trachea → alveoli','Nose → trachea → bronchi → bronchioles → alveoli','Nose → alveoli → bronchi → trachea','Trachea → nose → bronchioles → alveoli'],1,0);
 m('Where does gas exchange between the air and blood take place?',['Trachea','Nose','Alveoli','Diaphragm'],2,1);
 m('During inhalation, which change helps air enter the lungs?',['The chest cavity becomes smaller.','The diaphragm moves upward.','The chest cavity becomes larger.','The lungs become smaller.'],2,2);
 m('A fish obtains the oxygen it needs mainly through its:',['lungs.','gills.','nose.','bronchi.'],1,3);
 p(85,'B. Write True or False');
 t('The nose helps filter, warm, and moisten the air we breathe in.',true,0);
 t('The trachea carries air from the nose or mouth toward the lungs.',true,0);
 t('Bronchioles are larger tubes than the bronchi.',false,0);
 t('Cats breathe air using lungs.',true,3);
 t("Oxygen absorbed by a cat's lungs can be transported by the blood to different parts of its body.",true,3);
}, ['The exhaled-air and limewater facts used by page 84 are borrowed from pages 14-15.']);
