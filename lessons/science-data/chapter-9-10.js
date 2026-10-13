const {f,p,m,t,r,ms,u,lesson} = require('../../tools/science-author');
lesson('9-1', [
 f('Solution', ['A **solution** is a mixture in which a solute dissolves completely in a solvent.', 'The **solute** is the dissolved substance: for salt water, it is salt.', 'The **solvent** dissolves the solute: for salt water, it is water.', 'A **uniform mixture** looks the same throughout.']),
 f('Acidic', ['An **acidic** solution turns blue litmus paper **red**.', 'Red litmus stays red.', 'Examples are **lemon juice, vinegar, carbonated water and dilute hydrochloric acid**.']),
 f('Neutral', ['A **neutral** solution changes neither litmus colour.', 'Blue stays **blue**; red stays **red**.', 'Examples are **salt water, sugar water and distilled water**.']),
 f('Alkaline', ['An **alkaline** solution turns red litmus paper **blue**.', 'Blue litmus stays blue.', 'Examples are **soapy water, limewater, baking soda solution and dilute ammonia solution**.']),
 f('Litmus test', ['**Litmus paper** groups solutions as acidic, neutral or alkaline.', 'Place red and blue strips on filter paper.', 'Use a **glass rod** to add a drop to both strips.', 'Rinse and wipe the rod before testing another solution.', 'The book says to ventilate the room and wear **safety goggles** to protect eyes.'])
], [['Acidic','Blue litmus turns red'],['Neutral','Neither litmus colour changes'],['Alkaline','Red litmus turns blue']], ['Place red and blue litmus on filter paper','Add solution with a glass rod','Observe both colours','Classify acidic, neutral or alkaline','Rinse and wipe rod before the next solution'], () => {
 p(116,'A. Choose the Correct Answer');
 m('Which statement best describes a solution?',['A mixture in which the substances can always be seen separately','A mixture in which a solute dissolves completely in a solvent','A substance made only of water','A mixture that must contain a solid'],1,0);
 m('Which of the following is an acidic solution?',['Salt water','Baking soda solution','Dilute hydrochloric acid','Dilute ammonia solution'],2,1);
 m('A solution turns red litmus paper blue. How should it be classified?',['Acidic','Neutral','Alkaline','Pure water only'],2,3);
 m('Which pair of litmus results indicates a neutral solution?',['Blue turns red; red stays red','Blue stays blue; red stays red','Blue stays blue; red turns blue','Both papers turn blue'],1,2);
 m('A student tests an unknown solution. The blue litmus paper stays blue and the red litmus paper turns blue. Which solution could it be?',['Lemon juice','Vinegar','Salt water','Baking soda solution'],3,3);
 p(116,'B. Write True or False');
 t('The substance that is dissolved in a solution is called the solute.',true,0);
 t('Carbonated water is an example of an acidic solution.',true,1);
 t('Salt water is an example of a neutral solution.',true,2);
 t('Dilute ammonia solution can be classified as alkaline using litmus paper.',true,3);
 t('A solution usually looks uniform throughout when the solute has completely dissolved.',true,0);
 p(116,'C. Complete the Following');
 r('A mixture that looks the same throughout is called a _____ mixture.','Uniform.',0);
 r('In salt water, the salt is the _____.','Solute.',0);
 r('Lemon juice and vinegar belong to the _____ group of solutions.','Acidic.',1);
 r('Solutions can be divided into _____ groups according to how they affect litmus paper.','Three.',4);
 r('In the activity, a _____ is used to place one drop of solution onto the litmus strips.','Glass rod.',4);
 p(117,'D. What Happens When...?');
 r('Blue litmus paper is dipped into dilute hydrochloric acid?','It turns red.',1);
 r('Red litmus paper is tested with a baking soda solution?','It turns blue.',3);
 r('Both red and blue litmus papers are tested with salt water?','Neither changes colour: red stays red and blue stays blue.',2);
 r('Salt is added to water and stirred until it completely dissolves?','A uniform solution of salt water forms.',0);
 r('An unknown solution changes blue litmus paper to red but does not change red litmus paper?','It is acidic.',1);
 p(117,'E. Give Reasons for the Following');
 r('Litmus paper can be used to group different solutions.','Different solution groups produce different litmus colour changes.',4);
 u('A glass rod should be rinsed with water and wiped before testing another solution.','Page 59 gives the cleaning step, but does not explain the reason. Check with the teacher.');
 r('Safety goggles should be worn while testing different solutions.','They protect the eyes from solutions such as hydrochloric acid.',4);
 r('Salt water is classified as a neutral solution.','It changes neither red nor blue litmus paper.',2);
 r('Dilute hydrochloric acid and dilute ammonia solution are placed in different groups even though both are solutions.','Hydrochloric acid turns blue litmus red; ammonia turns red litmus blue. They are acidic and alkaline respectively.',3);
}, ['The eye-protection reason for goggles is borrowed from page 70. Page 58’s small neutral diagram has an inconsistent “turns red” label; the cards use its explicit neutral definition and page 59’s results table.']);
lesson('9-2', [
 f('Evaporation', ['**Evaporation** changes liquid water into water vapour.', 'Heating a solution lets us investigate what was **dissolved**.', 'The water leaves the dish as vapour.']),
 f('Dissolved solids', ['**Salt water** leaves white salt crystals after evaporation.', '**Baking soda solution** leaves a solid behind.', 'These dissolved **solids do not evaporate** with the water.']),
 f('Dissolved gases', ['**Carbonated / sparkling water** contains dissolved carbon dioxide gas.', 'Dissolved **gases escape into the air**, leaving no solid.', 'The book also reports no solid from dilute hydrochloric acid and dilute ammonia solution.']),
 f('Book heating method', ['A **pipette** transfers a small amount to an **evaporating dish**.', 'The book uses a **portable gas stove** for gentle heating.', 'Stop heating while a little liquid remains; it evaporates as the dish cools.', 'The book says to wear **goggles**, keep faces away and wait for heated objects to cool.']),
 f('Litmus recap', ['**Alkaline** solutions turn red litmus blue.', '**Neutral** solutions change neither colour.', 'Salt water, sugar water and distilled water are neutral.']),
 f('Egypt and solutions', ['**Natron** is an alkaline white powder found in desert salt lakes.', 'Ancient Egyptians used its water-absorbing property in mummy making.', 'The book describes using solution tests to check soil and Nile water.', 'Water-quality monitoring helps protect fish, birds and the environment.'])
], [['Salt water','Leaves salt crystals'],['Baking soda solution','Leaves a solid'],['Carbonated water','Leaves no solid'],['Pipette','Transfers small liquid amounts']], ['Transfer solution to an evaporating dish','Heat gently','Water changes to vapour','Stop heating with some liquid left','Let dish cool and observe what remains'], () => {
 p(118,'Try');
 m('Which is the correct combination for the litmus paper reaction? Choose the correct answer from below.',['An alkaline solution turns red litmus paper blue.','An acidic solution turns red litmus paper blue.','A neutral solution changes the color of both litmus papers.'],0,4);
 r('What are some neutral solutions? Answer with one example.','Salt water, sugar water or distilled water.',4);
 p(118,'Exercise');
 r('What are the white solid left at the bottom of the dish when salt water was evaporated?','Salt crystals.',1);
 m('Why is nothing left at the bottom of the dish when dilute hydrochloric acid was evaporated? Choose the correct answer from below.',['Because nothing was dissolved in the dilute hydrochloric acid.','Because what was dissolved escaped as a gas.','Because it melted from the heat.'],1,2);
 p(119,'A. Choose the Correct Answer');
 m('Which solution contains a gas dissolved in water?',['Salt water','Baking soda solution','Carbonated water','Sugar solution'],2,2);
 m('What remains after salt water is completely evaporated?',['Carbon dioxide','Salt crystals','Water vapor','Nothing'],1,1);
 m('A white solid remains after an unknown solution is evaporated. What can you conclude?',['The dissolved substance was a solid','Nothing was dissolved','The dissolved substance was only a gas','The water did not evaporate'],0,1);
 m('Which equipment is used to heat the evaporating dish?',['Test tube rack','Portable gas stove','Pipette','Safety goggles'],1,3);
 m('Why may nothing remain after evaporating a solution containing a dissolved gas?',['The gas changes into a solid','The gas stays in the dish','The gas escapes into the air','The gas changes into water'],2,2);
 p(119,'B. Write True or False');
 t('Evaporation can be used to investigate what is dissolved in some solutions.',true,0);
 t('Baking soda remains as a solid after the water evaporates.',true,1);
 t('All dissolved substances remain after evaporation.',false,2);
 t('The evaporating dish should be heated gently during the activity.',true,3);
 t('Safety goggles help protect the eyes while heating solutions.',true,3);
 p(119,'C. Complete the Following');
 r('During evaporation, liquid water changes into water _____.','Vapour.',0);
 r('The tool used to transfer a small amount of solution is a _____.','Pipette.',3);
 r('A shallow dish used for heating a solution is an _____ dish.','Evaporating.',3);
 r('A dissolved solid does not _____ with the water during evaporation.','Evaporate.',1);
 r('After evaporating salt water, the substance left behind is _____.','Salt.',1);
 p(120,'D. What Happens When...?');
 r('Salt water is heated gently in an evaporating dish until all the water has evaporated?','White salt crystals remain.',1);
 r('Carbonated water is heated until the water completely evaporates?','Carbon dioxide escapes into the air and no solid remains.',2);
 r('A baking soda solution is evaporated completely?','A solid remains in the dish.',1);
 r('The water in a solution begins to boil during the heating activity?','Water changes into vapour and leaves the dish.',0);
 u('A student touches the evaporating dish immediately after heating it?','Page 61 instructs waiting until objects cool but does not describe this outcome. Discuss and check with the teacher.');
 p(120,'E. Give Reasons for the Following');
 r('An evaporating dish is used when investigating what is dissolved in a solution.','The solution is heated in it so water evaporates and any remaining solid can be observed.',3);
 u('The solution should be heated gently during the evaporation experiment.','Page 61 specifies gentle heating but does not explain why. Check with the teacher.');
 r('A white solid remains after salt water is evaporated.','Salt is a dissolved solid and does not evaporate with the water.',1);
 r('Nothing remains after some solutions containing dissolved gases are evaporated.','The dissolved gases escape into the air.',2);
 u('Students should not bring their faces close to an evaporating dish while a solution is being heated.','Page 61 gives this precaution but does not explain the requested reason. Check with the teacher.');
}, ['The litmus questions on page 118 borrow the neutral and alkaline facts from page 58. Goggles protecting eyes is explained on page 70.']);
lesson('10-1', [
 f('Aqueous solution', ['An **aqueous solution** has water as its **solvent**.', 'The solvent is the substance in which the solute dissolves.']),
 f('Metals', ['**Metals** include iron, zinc, magnesium and copper.', 'Many are **shiny** when freshly exposed.', 'They generally conduct **heat and electricity** well.', 'Different metals have different reactivities.']),
 f('Hydrochloric acid reaction', ['**Hydrochloric acid** has the formula **HCl**.', 'Dilute HCl reacts with **aluminium** and **iron / steel wool**.', 'It produces **bubbles of gas** and the metal becomes hot.', 'The surface of the **steel wool** changes.', 'Aluminium pieces become smaller and some may disappear.', 'The book identifies this gas as **hydrogen**.']),
 f('Experiment tools', ['A **test tube** holds a small amount of substance.', 'A **test-tube rack** supports test tubes.', 'A **pipette** adds small amounts of liquid.', 'The book puts aluminium and iron in **separate test tubes**.']),
 f('Gold', ['The book describes **gold** as stable and resistant to hydrochloric acid.', 'It connects this stability with ancient Egyptian gold objects retaining their shine.'])
], [['Water','Solvent in an aqueous solution'],['Pipette','Adds a small amount of liquid'],['Test tube','Holds experiment substances'],['Hydrogen','Gas formed in the book’s metal-acid reaction']], ['Put aluminium and iron in separate tubes','Add dilute hydrochloric acid with pipettes','Observe bubbles','Observe the metal becoming hot','Record the changes'], () => {
 p(121,'A. Choose the correct answer');
 m('In an aqueous solution, the solvent is:',['Iron','Water','Aluminum','Gas'],1,0);
 m('Which observation shows that a reaction occurs when dilute HCl is added to aluminum?',['Ice forms','Bubbles are produced','The liquid disappears immediately','The metal turns into water'],1,2);
 m('Which liquid is added to aluminum and iron in the activity?',['Salt water','Distilled water','Dilute hydrochloric acid','Carbonated water'],2,2);
 m('Which tool is used to add a small amount of dilute HCl to a test tube?',['Pipette','Test tube rack','Beaker','Test tube brush'],0,3);
 m('Which of the following is a property of many metals?',['They are good conductors of heat and electricity.','They are always gases.','They dissolve completely in water.','They cannot conduct heat.'],0,1);
 p(121,'B. Write the scientific term');
 r('A solution in which water is the solvent.','Aqueous solution.',0);
 r('A laboratory container used to hold small amounts of substances during an experiment.','Test tube.',3);
 r('A tool used to transfer small amounts of liquid.','Pipette.',3);
 r('A material that is generally a good conductor of heat and electricity.','Metal.',1);
 r('The acid represented by the chemical formula HCl.','Hydrochloric acid.',2);
 p(122,'D. What Happens When...?');
 r('Dilute hydrochloric acid is added to a small piece of aluminum?','Bubbles form, the aluminium becomes hot and its pieces become smaller.',2);
 r('Dilute hydrochloric acid is added to iron (steel wool)?','Bubbles form, the steel wool becomes hot and its surface changes.',2);
 r('Aluminum continues to react with dilute HCl for a short time?','Its pieces get smaller and some may disappear as bubbles are produced.',2);
 r('You touch the outside of the test tube carefully after the metal has reacted with dilute HCl?','The reaction has made the metal / tube warm or hot. This is an on-screen question, not an instruction to touch it.',2);
 r('Dilute HCl is poured onto aluminum and bubbles appear around the metal?','The bubbles are gas produced by the reaction; the book names it hydrogen.',2);
 p(122,'E. Give Reasons for the Following');
 r('Water is called the solvent in an aqueous solution.','The solute is dissolved in water.',0);
 r('Bubbles appear when dilute HCl reacts with aluminum or iron.','The reaction produces gas.',2);
 u('Aluminum and iron are placed in separate test tubes during the activity.','Page 66 specifies separate tubes but does not state the reason. Check with the teacher.');
 r('A pipette is used when adding dilute HCl to the test tubes.','It transfers small amounts of liquid.',3);
}, ['Hydrogen, smaller aluminium pieces and some disappearance are explained on pages 67-68. The solvent definition is borrowed from page 58; pipette use from page 61. The test-tube use is shown in page 66’s experiment.']);
lesson('10-2', [
 f('Aluminium changes', ['**Aluminium** reacts with dilute hydrochloric acid.', 'Bubbles form and aluminium pieces get **smaller**; some may disappear.', 'A clear solution is left after the reaction.']),
 f('White solid', ['When the liquid is evaporated, a **white solid / powder** remains.', 'It is **not shiny** like the original aluminium.', 'Adding dilute HCl to this powder produces **no bubbles**.', 'It has different properties from the original metal.']),
 f('Chemical change', ['A **chemical change** produces a substance with different properties.', 'The remaining powder looks different and reacts differently.', 'The book concludes that aluminium changed into a **different substance**.']),
 f('Evaporation method', ['The book’s metal experiment heats the clear solution **gently** in an evaporating dish.', 'The book’s earlier heating guidance says to stop with **a little liquid left**, then let it evaporate as the dish cools.', 'These are **on-screen** activities in this lesson.']),
 f('Recover and recycle', ['The book says a metal’s parts are still present after it reacts, though its form has changed.', '**Evaporation** can recover a solid from a solution.', 'Understanding these changes helps with **recycling**, reducing waste and saving resources.'])
], [['Original aluminium','Shiny metal'],['White powder','Different appearance and no bubbles with HCl'],['Evaporation','Leaves the solid behind'],['Recycling','Reuses resources']], ['Aluminium reacts with dilute HCl','Clear solution is collected','Solution is heated gently','Liquid evaporates leaving white powder','Powder is tested again with dilute HCl'], () => {
 p(123,'D. What Happens When...?');
 r('Aluminum is added to dilute hydrochloric acid?','Bubbles form and the aluminium pieces become smaller.',0);
 r('The clear solution formed after aluminum reacts with dilute HCl is heated gently in an evaporating dish?','The liquid evaporates and a white solid remains.',1);
 r('The liquid in the evaporating dish evaporates?','A white solid / powder remains.',1);
 r('Dilute hydrochloric acid is added again to the white powder left after evaporation?','No bubbles are produced; the powder does not react like the original aluminium.',1);
 u('The solution is heated on high heat until it becomes completely dry?','The book specifies gentle heating, but does not describe the result of this different method. Check with the teacher.');
 p(123,'E. Give Reasons for the Following');
 r('The white powder left after evaporation is considered a different substance from the original aluminum.','It is not shiny and does not produce bubbles with dilute HCl like the original metal.',1);
 r('No bubbles are produced when dilute HCl is added to the white powder left after evaporation.','The aluminium has changed into a substance with different properties that does not react in the same way.',2);
 r('The liquid is evaporated after aluminum reacts with dilute hydrochloric acid.','To observe and recover the solid left in the solution.',4);
 u('Heating should be stopped while a little liquid is still left in the evaporating dish.','Page 61 gives this instruction but does not explain why. Page 67 also says evaporate completely dry. Ask the teacher to resolve this wording.');
 r('We can conclude that aluminum undergoes a chemical change when it reacts with dilute hydrochloric acid.','The resulting substance has a different appearance and different reaction properties.',2);
}, ['The stop-heating guidance is borrowed from page 61. Page 67 says heat until dry, while page 123 asks why to stop with liquid left; that reason is unscored and flagged for the teacher.']);
