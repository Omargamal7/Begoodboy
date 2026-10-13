const {f,p,m,t,r,ms,u,lesson} = require('../../tools/science-author');
lesson('3-3', [
 f('Absorption', ['**Absorption** moves digested nutrients and water from the intestine into the blood.', 'Most absorption happens in the **small intestine**.', 'Digestion makes nutrients **small and simple** first.', 'The body uses nutrients for **energy, growth and repair**.']),
 f('Villi', ['**Villi** are tiny bumps on the inner wall of the small intestine.', 'They increase the **surface area** for efficient absorption.', 'Villi contain many **blood vessels**.', 'Nutrients and water enter the blood vessels.']),
 f('Nutrients travel', ['**Blood vessels** carry the absorbed nutrients.', 'The nutrients go through the **liver** before reaching the rest of the body.', 'The liver stores some nutrients and sends them out when needed.']),
 f('Liver and energy', ['The **liver** changes some nutrients into a simple form the body can use.', 'It stores them as **energy**.', 'It releases energy when the body needs it.']),
 f('Liver and harmful substances', ['The **liver** breaks down harmful substances.', 'The substances become less harmful and are removed through **urine**.', 'The book gives medicine leftovers, alcohol, nicotine, pollution toxins and household chemicals as examples.']),
 f('Bile', ['**Bile** is a digestive juice produced by the liver.', 'Bile breaks **fats** into tiny drops.', 'The drops can then be digested and absorbed.'])
], [['Villi','Increase the surface area'],['Blood vessels','Carry absorbed nutrients'],['Liver','Store energy and make bile']], ['Food is digested','Nutrients become small and simple','Nutrients enter blood in the small intestine','Nutrients pass through the liver','Nutrients reach the rest of the body'], () => {
 p(90,'Try');
 r('What do we call the small bumps on the inner wall of the small intestine that absorb nutrients?', 'Villi.',1);
 m('What carries the absorbed nutrients to the body? Choose the correct answer from below.',['Blood vessels','Nerves','Muscles'],0,2);
 m('Where do the nutrients absorbed in the small intestine pass through first to be carried to the whole body? Choose the correct answer from below.',['Stomach','Large intestine','Liver'],2,2);
 p(90,'Exercise');
 m('What is the advantage of having villi on the wall of the small intestine? Choose the correct answer from below.',['It makes it easier to swallow food.','The surface area of the wall of the small intestine becomes larger, and nutrients can be absorbed efficiently.','It makes it easier for nutrients to pass through.'],1,1);
 r('The nutrients of digested food, along with water, are mainly absorbed in the (① _____). The nutrients absorbed in the small intestine are carried by the (② _____) through the (③ _____) to the whole body.','① Small intestine; ② blood; ③ liver.',2);
 p(91,'A. Choose the Correct Answer');
 m('Which structure increases the surface area of the small intestine for absorption?',['Stomach','Villi','Liver','Esophagus'],1,1);
 m('After nutrients are absorbed through the wall of the small intestine, they enter the:',['blood vessels.','stomach.','large intestine.','mouth.'],0,1);
 m('Where do absorbed nutrients pass through before being carried to the rest of the body?',['Lungs','Liver','Stomach','Esophagus'],1,2);
 m('Which substance produced by the liver helps break fats into tiny droplets?',['Saliva','Water','Bile','Blood'],2,5);
 m('Which statement best describes one way the liver helps clean the body?',['It absorbs oxygen from the air.','It breaks down harmful substances.','It stores solid waste.','It pumps blood around the body.'],1,4);
 p(91,'B. Write True or False');
 t('Absorption is the movement of digested nutrients and water from the intestine into the blood.',true,0);
 t('Villi make the inner surface area of the small intestine smaller.',false,1);
 t('The nutrients in food must become small and simple before they can be absorbed efficiently.',true,0);
 t('The liver can store energy and release it when the body needs it.',true,3);
 t('Blood vessels inside the villi carry absorbed nutrients away from the small intestine.',true,1);
 p(91,'C. Complete the Following');
 r('Most nutrients from digested food are absorbed in the _____.','Small intestine.',0);
 r('The tiny bumps lining the inner wall of the small intestine are called _____.','Villi.',1);
 r('Villi contain many _____ vessels that carry absorbed nutrients.','Blood.',1);
 r('The liver changes some nutrients from food into a simple form and stores them as _____.','Energy.',3);
 r('Harmful substances broken down by the liver can be removed from the body through _____.','Urine.',4);
 p(92,'D. What Happens When...?');
 r('Digested nutrients reach the villi of the small intestine?','They are absorbed into the blood vessels in the villi.',1);
 r('The body needs some of the energy that has been stored by the liver?','The liver releases the stored energy.',3);
 p(92,'E. Give Reasons for the Following');
 r('The small intestine is an important organ for absorption.','Most digested nutrients and water are absorbed there into the blood.',0);
 r('Villi are useful for absorbing nutrients efficiently.','They increase the inner surface area and contain many blood vessels.',1);
});
lesson('4-1', [
 f('Circulatory system', ['The **circulatory system** transports substances around the body.', 'Its three parts are the **heart, blood vessels and blood**.', 'The heart is a strong **muscular organ** that pumps blood continuously.', 'Blood vessels are the pathways that carry blood.']),
 f('Blood transports', ['**Blood** carries oxygen from the lungs and nutrients from the small intestine to body cells.', 'Blood collects **carbon dioxide and wastes** from the cells.', 'It carries them to the organs that remove them.']),
 f('Blood circulation', ['**Oxygenated blood** is rich in oxygen.', 'The heart pumps it to body cells.', 'Blood collects carbon dioxide and wastes and returns to the heart.', '**Deoxygenated blood** goes to the lungs, releases carbon dioxide and takes in oxygen.', 'Oxygen-rich blood returns to the heart.']),
 f('Two circulations', ['**Pulmonary circulation** is between heart and lungs.', 'Deoxygenated blood goes from the **right ventricle** to the lungs.', 'Oxygenated blood returns to the **left atrium**.', '**Systemic circulation** is between heart and the rest of the body.', 'Oxygenated blood leaves the **left ventricle**. Deoxygenated blood returns to the **right atrium**.']),
 f('Heartbeat and pulse', ['A **heartbeat** is the movement of the heart pumping out blood.', '**Pulse** is the number of heartbeats in one minute.', 'The heartbeat can be felt at the **wrist** as a pulse.']),
 f('Exercise and rest', ['During **exercise**, muscles need more blood.', 'The heart beats **faster** and pulse increases.', 'After **rest**, heartbeat and pulse slow down again.', 'Healthy food, enough sleep and rest help keep the heart healthy.'])
], [['Heart','Pump blood'],['Blood vessels','Carry blood between body parts'],['Blood','Transport oxygen, nutrients and wastes']], ['Heart pumps oxygen-rich blood','Body cells get oxygen and nutrients','Blood collects carbon dioxide and wastes','Blood returns to the heart','Blood goes to the lungs for gas exchange','Oxygen-rich blood returns to the heart'], () => {
 p(93,'Try');
 r('What is the organ that works like a pump to send blood to the whole body?','Heart.',0);
 ms('What are the important things that blood carries to the whole body? Choose all correct answers from below.',['Oxygen','Carbon dioxide','Nutrients','Muscles'],[0,2],1);
 m('Why does your pulse become faster after exercising? Choose the correct answer from below.',['To let the blood rest slowly.','To carry more oxygen and nutrients to the whole body quickly.','Because there are not enough nutrients.'],1,5);
 p(93,'Exercise');
 m('Which statement correctly explains the heart? Choose the correct answer from below.',['The heart plays a role in digesting the food we eat.','The heart is constantly beating to pump out blood.','The heart plays a role in storing nutrients.'],1,0);
 r('What do we call the movement of the heart pumping out blood?','Heartbeat.',4);
 r('The blood pumped out from the heart carries (① _____) and nutrients to the whole body, collects (② _____) and waste produced in the body, and returns to the heart again. The blood that has returned to the heart is sent to the (③ _____) to exchange (④ _____) and (⑤ _____).','① Oxygen; ② carbon dioxide; ③ lungs; ④ oxygen; ⑤ carbon dioxide. The last two name the gases exchanged.',2);
 p(94,'A. Choose the Correct Answer');
 m('Which organ works like a pump to send blood around the whole body?',['Lungs','Heart','Stomach','Small intestine'],1,0);
 m('Which substances are carried by the blood to the body cells?',['Oxygen and nutrients','Carbon dioxide and waste','Saliva and water','Carbon dioxide and nutrients'],0,1);
 m('Where is blood sent to release carbon dioxide and take in fresh oxygen?',['Stomach','Liver','Lungs','Small intestine'],2,2);
 m('Which part of the circulatory system carries blood from one part of the body to another?',['Blood vessels','Alveoli','Bronchi','Intestines'],0,0);
 m('After delivering oxygen and nutrients to the body cells, blood collects:',['oxygen and nutrients.','carbon dioxide and wastes.','food and water.','saliva and oxygen.'],1,1);
 p(94,'B. Write True or False');
 t('The heart is a strong muscular organ.',true,0);
 t('Blood carries nutrients absorbed from the small intestine to body cells.',true,1);
 t('Blood stays in the heart and does not travel around the body.',false,2);
 t('The circulatory system includes the heart, blood vessels, and blood.',true,0);
 t('Oxygen-rich blood is pumped from the heart to different parts of the body.',true,2);
 p(94,'C. Complete the Following');
 r('The heart works like a _____ that keeps blood moving around the body.','Pump.',0);
 r('Blood carries oxygen and _____ to the body cells.','Nutrients.',1);
 r('Carbon dioxide produced by body cells is collected by the _____.','Blood.',1);
 r('Blood flows around the body through tubes called blood _____.','Vessels.',0);
 r('Blood returning from the body is sent to the _____ to exchange carbon dioxide for oxygen.','Lungs.',2);
 p(95,'D. What Happens When...?');
 r('You exercise and your body needs more oxygen?','Your heart beats faster and your pulse increases to send more blood to muscles.',5);
 r('Oxygen-rich blood leaves the heart and travels to the body cells?','It delivers oxygen and nutrients to the cells.',1);
 r('Blood reaches the body cells after carrying oxygen and nutrients?','It collects carbon dioxide and wastes.',1);
 r('Blood containing carbon dioxide returns to the heart?','The heart sends it to the lungs.',2);
 r('Blood reaches the lungs?','It releases carbon dioxide and takes in oxygen.',2);
 p(95,'E. Give Reasons for the Following');
 r("The heart beats continuously throughout a person's life.",'It keeps blood circulating to carry substances to and from body cells.',0);
 r('The heart beats faster during exercise.','Muscles need more blood carrying oxygen and nutrients.',5);
 r('Blood must circulate to all parts of the body.','All cells need oxygen and nutrients, and carbon dioxide and wastes must be collected.',1);
 r('Blood is sent from the heart to the lungs.','It releases carbon dioxide and takes in fresh oxygen.',2);
 r('Blood returns to the heart after passing through the body.','The heart sends the returning blood to the lungs for gas exchange.',2);
});
lesson('4-2', [
 f('Excretion and wastes', ['**Excretion** removes harmful and unwanted substances from the body.', '**Waste products** form when cells use food and oxygen for energy.', 'Examples are **carbon dioxide, urea, excess water and salts**.', 'Urea comes from breaking down proteins.']),
 f('Kidneys', ['The two **kidneys** are bean-shaped organs.', 'They are in the **lower back**, one on each side of the backbone.', 'They act as **filters**, cleaning blood and removing wastes and extra water.', 'They help balance **water and salts**. Cleaned blood returns to the body.']),
 f('Urinary system', ['The **urinary system** removes waste products from blood as urine.', '**Kidneys** make urine.', '**Ureters** carry urine from kidneys to bladder.', 'The **bladder** stores urine.', 'The **urethra** carries urine out of the body.']),
 f('Urine', ['**Urine** is a yellow liquid containing wastes and extra water.', 'It is made in the kidneys and stored in the bladder.', 'If urine is not removed, wastes and extra water **build up**.', 'That can make the person sick. Removing urine helps keep the body healthy.'])
], [['Kidneys','Filter blood and make urine'],['Ureters','Carry urine to the bladder'],['Bladder','Store urine'],['Urethra','Carry urine out']], ['Kidneys make urine','Ureters carry urine','Bladder stores urine','Urethra carries urine out'], () => {
 p(96,'A. Choose the Correct Answer');
 m('Which organs are mainly responsible for removing wastes from the blood?',['Lungs','Kidneys','Stomach','Heart'],1,1);
 m('What is the main function of the kidneys?',['To pump blood around the body','To filter the blood and remove wastes','To digest food','To carry urine out of the body'],1,1);
 m('Where are the kidneys located in the human body?',['In the chest','In the lower part of the back','Inside the head','In the neck'],1,1);
 m('Which organ stores urine until it is ready to leave the body?',['Kidney','Ureter','Bladder','Urethra'],2,2);
 m("A person's kidneys are working properly. Which result would you expect?",['Wastes remain in the blood.','Cleaned blood returns to the body.','Urine remains permanently in the kidneys.','The body stops producing wastes.'],1,1);
 p(96,'B. Write True or False');
 t('Excretion is the process by which the body removes harmful and unwanted substances.',true,0);
 t('The kidneys help control the amount of water and salts in the body.',true,1);
 t('The bladder produces urine by filtering the blood.',false,2);
 t('The urinary system includes the kidneys, ureters, bladder, and urethra.',true,2);
 t('Urine contains wastes and extra water removed from the blood.',true,3);
 p(96,'C. Complete the Following');
 r('Unwanted substances produced by cells are called _____ products.','Waste.',0);
 r('The process by which the body removes harmful and unwanted substances is called _____.','Excretion.',0);
 r('The urinary system removes waste products from the _____.','Blood.',2);
 r('The kidneys help balance the amount of water and _____ in the body.','Salts.',1);
 r('The kidneys remove wastes from the blood and get rid of them from the body in the form of _____.','Urine.',2);
 p(97,'D. What Happens When...?');
 r('Blood containing wastes enters the kidneys?','The kidneys filter it, removing wastes and extra water.',1);
 r('The kidneys remove wastes and extra water from the blood?','They form urine, and cleaned blood returns to the body.',2);
 r('Urine leaves the kidneys and enters the ureters?','The ureters carry it to the bladder.',2);
 r('The bladder fills with urine?','The bladder stores urine until it leaves through the urethra.',2);
 r('The body fails to get rid of urine properly?','Wastes and extra water build up, which can make the person sick.',3);
 p(97,'E. Give Reasons for the Following');
 r('The kidneys are described as filters of the body.','They filter blood to remove wastes and extra water.',1);
 r('The urinary system is important for excretion.','It removes waste products from blood as urine.',2);
 r('The kidneys help keep the body healthy.','They remove harmful wastes and extra water and balance water and salts.',1);
 r('The bladder is an important part of the urinary system.','It stores urine until it leaves the body.',2);
 r('Wastes produced by body cells must be removed from the body.','They are harmful and unwanted; a build-up can make the person sick.',3);
});
lesson('4-3', [
 f('Chest', ['The **chest** contains the left and right lungs.', 'The **heart** lies between the lungs.', 'The **ribs** protect these organs.']),
 f('Abdomen and back', ['The **stomach** is at the top of the abdomen and connects to the food pipe.', 'The long **small intestine** is below it.', 'The **large intestine** surrounds the small intestine.', 'There is one **kidney** on each side in the lower back.']),
 f('Connected organs', ['**Blood vessels** connect the organs.', 'The **heart** pumps blood; lungs take in oxygen and release carbon dioxide.', 'Blood carries **oxygen and nutrients** to body cells and collects wastes.', '**Kidneys** filter blood to make urine. The **bladder** stores urine.']),
 f('Ancient Egyptian beliefs', ['The book describes **canopic jars** used to store lungs, stomach, liver and intestines when making mummies.', 'Ancient Egyptians **believed** the heart held the mind or soul, so they left it in the body.', 'The modern explanation in this book is that the **heart pumps blood**.']),
 f('Healthy organs', ['**Healthy food, enough water, exercise and rest** support healthy organs.', 'The book gives **Molokhia** as a nutritious Egyptian food.', 'Organs work together as a **team**.'])
], [['Lungs and heart','Inside the chest'],['Stomach and intestines','Inside the abdomen'],['Kidneys','In the lower back']], ['Lungs take in oxygen','Heart pumps blood','Blood delivers oxygen and nutrients','Blood collects wastes','Kidneys filter waste from blood'], () => {
 p(98,'Try');
 r('What is the organ called that filters the blood and filters out waste products?','Kidney.',2);
 r('What is the liquid waste produced in (1) called?','Urine.',2);
 r('How many of (1) are there in the body?','Two kidneys.',1);
 p(98,'Exercise');
 ms('Choose 2 organs that are inside the chest of the human body.',['Stomach','Heart','Lungs','Large intestine','Small intestine'],[1,2],0);
 m('Among the following organs, which one has one on each side of the body, for a total of two? Choose the correct answer from below.',['Lungs','Stomach','Heart','Small intestine'],0,0);
 p(99,'Exercise continued');
 m('Which statement correctly explains how the kidneys work? Choose the correct answer.',['It absorbs oxygen from the blood.','It pumps blood to the whole body.','It takes out waste products from the blood.'],2,2);
 r('Where is the urine produced in the kidneys temporarily stored until it is discharged out of the body?','Bladder.',2);
 m('Which statement correctly describes where the organs are located? Choose the correct answer.',['The small intestine is outside the large intestine and surrounds the large intestine.','The stomach is connected to the food pipe.','The stomach is on the lower side of the abdomen.','There are two kidneys on the abdomen side.'],1,1);
 r('Each organ is not moving separately, but all are connected by (_____) and work together.','Blood vessels.',2);
}, ['The food-pipe connection is borrowed from binder page 20. Kidney and urine facts are borrowed from pages 31-32, as used by the page 98-99 questions.']);
