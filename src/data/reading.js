/**
 * Reading Comprehension texts
 *
 * Question types:
 *  mcq       — multiple choice (correct: index 0-3)
 *  tf        — true / false   (correct: boolean)
 *  short     — keyword matching (auto-verified, 1-3 word expected answer)
 *  selfcheck — open + reveal + self-rate (B1 / B1+ only)
 *
 * Glossary: harder words available as on-tap hints (counts as hint used).
 */

export const READING_TEXTS = [

  // ═══════════════════════════════ A1 ════════════════════════════════════════

  {
    id: 'r_a1_01',
    title: 'My Family',
    level: 'A1',
    topic: 'family',
    icon: '👨‍👩‍👧',
    wordCount: 88,
    xpReward: 15,
    text:
`My name is Lova. I am twelve years old. I live in Antananarivo with my family.

My father is a secondary school teacher. He teaches mathematics. My mother is a nurse. She works at the hospital near our house. She often comes home tired, but she always smiles.

I have one younger brother. His name is Rina. He is eight years old and he loves football. He practises every evening in the garden.

My grandmother also lives with us. She is sixty-five years old. She cooks delicious rice dishes every day. Her cooking is the best in the world.

I love my family very much. We always eat dinner together and talk about our day.`,
    glossary: {
      'secondary':   { fr: 'secondaire',      mg: 'ambaratonga faharoa' },
      'nurse':       { fr: 'infirmière',       mg: 'mpitsabo' },
      'tired':       { fr: 'fatiguée',         mg: 'vizaka' },
      'delicious':   { fr: 'délicieux',        mg: 'matsiro' },
      'mathematics': { fr: 'mathématiques',    mg: 'matematika' },
      'hospital':    { fr: 'hôpital',          mg: 'hopitaly' },
      'younger':     { fr: 'plus jeune',       mg: 'kely kokoa' },
      'practises':   { fr: 'pratique',         mg: 'mianatra' },
      'cooking':     { fr: 'cuisine',          mg: 'fanandro-sakafo' },
      'together':    { fr: 'ensemble',         mg: 'miaraka' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'How old is Lova?',
        options: ['Eight', 'Ten', 'Twelve', 'Fourteen'],
        correct: 2,
      },
      {
        id: 'q2', type: 'mcq',
        question: "What subject does Lova's father teach?",
        options: ['English', 'Science', 'History', 'Mathematics'],
        correct: 3,
      },
      {
        id: 'q3', type: 'mcq',
        question: "Where does Lova's mother work?",
        options: ['At a school', 'At a hospital', 'At a market', 'At home'],
        correct: 1,
      },
      {
        id: 'q4', type: 'mcq',
        question: "What does Rina do every evening?",
        options: ['Reads books', 'Watches TV', 'Practises football', 'Helps cook'],
        correct: 2,
      },
      {
        id: 'q5', type: 'tf',
        statement: "Lova's grandmother lives in a different house.",
        correct: false,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'The family eats dinner together.',
        correct: true,
      },
      {
        id: 'q7', type: 'short',
        question: 'How old is Rina?',
        keywords: ['eight', '8'],
        hint: 'Look for Rina\'s age in the text.',
      },
    ],
  },

  {
    id: 'r_a1_02',
    title: 'A Day at School',
    level: 'A1',
    topic: 'school',
    icon: '🏫',
    wordCount: 95,
    xpReward: 15,
    text:
`Tom is thirteen years old. He goes to school from Monday to Friday. He wakes up at half past six every morning. His school starts at eight o'clock.

Tom's favourite subject is English. His teacher, Miss Green, is very kind. She explains things clearly and she always helps students when they have questions. Tom is also good at science.

At lunchtime, Tom eats with his friends in the canteen. They usually talk about football and music. Lunch lasts thirty minutes.

School finishes at four o'clock in the afternoon. Tom walks home with his sister. When he gets home, he does his homework before dinner. His parents are very strict about this rule.`,
    glossary: {
      'canteen':   { fr: 'cantine',              mg: 'toerana fisakafoana' },
      'strict':    { fr: 'strict',               mg: 'mafy fo' },
      'clearly':   { fr: 'clairement',           mg: 'mazava tsara' },
      'favourite': { fr: 'préféré',              mg: 'tiako indrindra' },
      'explains':  { fr: 'explique',             mg: 'manazava' },
      'lunchtime': { fr: "l'heure du déjeuner",  mg: 'fotoam-pisakafoana' },
      'finishes':  { fr: 'termine',              mg: 'mifarana' },
      'homework':  { fr: 'devoirs',              mg: 'asa an-trano' },
      'parents':   { fr: 'parents',              mg: 'ray aman-dreny' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What time does Tom wake up?',
        options: ['Six o\'clock', 'Half past six', 'Seven o\'clock', 'Half past seven'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What is Tom\'s favourite subject?',
        options: ['Science', 'Maths', 'English', 'History'],
        correct: 2,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'How does Tom get home after school?',
        options: ['By bus', 'By car', 'He walks', 'By bicycle'],
        correct: 2,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What do Tom and his friends talk about at lunch?',
        options: ['School and homework', 'Football and music', 'Books and films', 'Science and art'],
        correct: 1,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'Tom goes to school on Saturdays.',
        correct: false,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'Tom does his homework before dinner.',
        correct: true,
      },
      {
        id: 'q7', type: 'short',
        question: 'What time does school finish?',
        keywords: ['four', '4', '16', 'four o\'clock'],
        hint: 'Look for when school ends in the afternoon.',
      },
    ],
  },

  {
    id: 'r_a1_03',
    title: 'My Daily Routine',
    level: 'A1',
    topic: 'routine',
    icon: '🌅',
    wordCount: 90,
    xpReward: 15,
    text:
`My name is Sara. I am eleven years old. Every morning, I wake up at six o'clock. I take a shower and brush my teeth. Then I have breakfast. I usually eat bread and drink a cup of tea.

I go to school by bus. The bus comes at ten past seven. Classes start at half past seven. I have six lessons every day.

After school, I arrive home at five o'clock. I help my mother cook dinner. We usually make rice and vegetables. Sometimes we have chicken.

In the evening, I do my homework and read a book. I love reading stories. I go to bed at nine o'clock. I need a lot of sleep because school starts early.`,
    glossary: {
      'lessons':  { fr: 'cours',      mg: 'lesona' },
      'arrive':   { fr: 'arriver',    mg: 'tonga' },
      'routine':  { fr: 'routine',    mg: 'fomba amam-panao isan\'andro' },
      'shower':   { fr: 'douche',     mg: 'fandroana' },
      'breakfast':{ fr: 'petit-déjeuner', mg: 'sakafo maraina' },
      'usually':  { fr: 'd\'habitude', mg: 'matetika' },
      'vegetables':{ fr: 'légumes',   mg: 'anana' },
      'homework': { fr: 'devoirs',    mg: 'asa an-trano' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What time does Sara wake up?',
        options: ['Five o\'clock', 'Six o\'clock', 'Seven o\'clock', 'Half past six'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'How does Sara go to school?',
        options: ['On foot', 'By car', 'By bus', 'By bicycle'],
        correct: 2,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What does Sara usually have for breakfast?',
        options: ['Rice and tea', 'Bread and tea', 'Eggs and juice', 'Fruit and milk'],
        correct: 1,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What does Sara do in the evening?',
        options: ['Watch TV and sleep', 'Cook and watch films', 'Do homework and read', 'Play sports and chat'],
        correct: 2,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'Sara goes to school on foot.',
        correct: false,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'Sara helps her mother cook dinner.',
        correct: true,
      },
      {
        id: 'q7', type: 'short',
        question: 'What time does Sara go to bed?',
        keywords: ['nine', '9', 'nine o\'clock'],
        hint: 'Look for Sara\'s bedtime at the end of the text.',
      },
    ],
  },

  {
    id: 'r_a1_04',
    title: 'Animals I Love',
    level: 'A1',
    topic: 'animals',
    icon: '🐾',
    wordCount: 85,
    xpReward: 15,
    text:
`Emma lives in a small village near a forest. She loves animals. Her favourite animal is the lemur. Lemurs are found in Madagascar. They have big eyes and long tails. They sleep in trees and eat fruit and leaves.

Emma also has pets at home. She has a dog called Rex and two cats called Mimi and Nala. Rex is friendly and playful. He loves to run in the garden. Mimi and Nala are calmer. They sleep near the window most of the day.

Emma wants to be a vet when she grows up. Every Saturday, she visits the local animal shelter and helps look after the animals there.`,
    glossary: {
      'lemur':   { fr: 'lémurien',     mg: 'maki' },
      'shelter': { fr: 'refuge',       mg: 'toeram-pikarakarana biby' },
      'vet':     { fr: 'vétérinaire',  mg: 'dokotera biby' },
      'playful': { fr: 'joueur',       mg: 'tia milalao' },
      'forest':  { fr: 'forêt',        mg: 'ala' },
      'tails':   { fr: 'queues',       mg: 'rambo' },
      'friendly':{ fr: 'sympa',        mg: 'tsara fanahy' },
      'calmer':  { fr: 'plus calme',   mg: 'milamina kokoa' },
      'grows up':{ fr: 'grandit',      mg: 'mitombo' },
      'local':   { fr: 'local',        mg: 'ao an-toerana' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Where does Emma live?',
        options: ['In a city', 'Near a river', 'Near a forest', 'On an island'],
        correct: 2,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What do lemurs eat?',
        options: ['Fish and insects', 'Fruit and leaves', 'Rice and grass', 'Eggs and nuts'],
        correct: 1,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What is the dog\'s name?',
        options: ['Mimi', 'Nala', 'Rex', 'Leo'],
        correct: 2,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What does Emma want to be when she grows up?',
        options: ['A teacher', 'A nurse', 'A vet', 'A farmer'],
        correct: 2,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'Lemurs are found in Madagascar.',
        correct: true,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'Rex is calm and sleeps near the window.',
        correct: false,
      },
      {
        id: 'q7', type: 'short',
        question: 'How many cats does Emma have?',
        keywords: ['two', '2'],
        hint: 'Count the cats mentioned by name.',
      },
    ],
  },

  // ═══════════════════════════════ A2 ════════════════════════════════════════

  {
    id: 'r_a2_01',
    title: 'My Neighbourhood',
    level: 'A2',
    topic: 'places',
    icon: '🏘️',
    wordCount: 138,
    xpReward: 20,
    text:
`I live in a busy neighbourhood in the city centre. There are many different shops and restaurants near my house. On Mondays and Thursdays, there is a large market in the main square where local people sell fresh fruit, vegetables, and fish.

My street has two schools, a pharmacy, and a small library. The library is my favourite place. I go there every Wednesday afternoon to borrow books and magazines. It is always quiet and peaceful.

Most of my neighbours are very friendly. There is an elderly man called Mr Bernard who lives next door. He has a beautiful garden with roses and tomatoes. He often gives us vegetables when he has too many.

I enjoy living here because everything is close and convenient. However, the streets can be very noisy during the day, especially near the market. I would also like more parks and green spaces for children to play in.`,
    glossary: {
      'neighbourhood': { fr: 'quartier',      mg: 'manodidina' },
      'pharmacy':      { fr: 'pharmacie',     mg: 'fivarotam-panafody' },
      'borrow':        { fr: 'emprunter',     mg: 'samborena' },
      'convenient':    { fr: 'pratique',      mg: 'mety tsara' },
      'elderly':       { fr: 'âgé',           mg: 'anti-panahy' },
      'library':       { fr: 'bibliothèque',  mg: 'tranomboky' },
      'peaceful':      { fr: 'paisible',      mg: 'milamina' },
      'noisy':         { fr: 'bruyant',       mg: 'maresaka' },
      'square':        { fr: 'place',         mg: 'kianjan-dehibe' },
      'magazines':     { fr: 'magazines',     mg: 'gazety' },
      'roses':         { fr: 'roses',         mg: 'rôzy' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'When is the market held in the main square?',
        options: ['Every day', 'On Tuesdays and Fridays', 'On Mondays and Thursdays', 'Only on Saturdays'],
        correct: 2,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What is the narrator\'s favourite place?',
        options: ['The market', 'The library', 'The park', 'The restaurant'],
        correct: 1,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What does Mr Bernard grow in his garden?',
        options: ['Fruit and herbs', 'Roses and tomatoes', 'Potatoes and onions', 'Flowers only'],
        correct: 1,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What does the narrator say is a disadvantage of the neighbourhood?',
        options: ['There are no shops nearby', 'The library is too small', 'The streets are very noisy', 'There is no market'],
        correct: 2,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'The narrator goes to the library every Wednesday.',
        correct: true,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'The neighbourhood has many parks and green spaces.',
        correct: false,
      },
      {
        id: 'q7', type: 'short',
        question: 'What does the narrator borrow from the library?',
        keywords: ['books', 'magazines', 'book', 'magazine'],
        hint: 'Re-read the paragraph about the library.',
      },
    ],
  },

  {
    id: 'r_a2_02',
    title: 'Sports Day',
    level: 'A2',
    topic: 'sports',
    icon: '🏃',
    wordCount: 145,
    xpReward: 20,
    text:
`Last week, our school organised a Sports Day. All the students were very excited. We had races, football, and volleyball competitions in the school sports field.

I participated in the hundred-metre race. I trained every morning for two weeks before the event. When the race started, I felt nervous, but I ran as fast as I could. I came second. My friend Nadia won first place. She is an excellent runner and trains with a professional coach.

Our class also played volleyball against Class 4B. We practised together after school on Tuesdays and Thursdays. It was a close match, but we won three sets to two. Everyone cheered loudly when we scored the last point.

At the end of the day, the teachers gave prizes to the winners. I received a silver medal and a certificate. My parents were very proud when I showed them my medal at home.

I hope we have another Sports Day next year.`,
    glossary: {
      'organised':    { fr: 'organisé',         mg: 'nandamina' },
      'participated': { fr: 'participé',        mg: 'nandray anjara' },
      'professional': { fr: 'professionnel',    mg: 'matihanina' },
      'certificate':  { fr: 'certificat',       mg: 'taratasy fanamarinana' },
      'cheered':      { fr: 'acclamé',          mg: 'nampiakakaba' },
      'nervous':      { fr: 'nerveux',          mg: 'manahy' },
      'race':         { fr: 'course',           mg: 'fihazakazakana' },
      'trained':      { fr: 'entraîné',         mg: 'nianatra' },
      'medal':        { fr: 'médaille',         mg: 'mendaly' },
      'prizes':       { fr: 'prix',             mg: 'loka' },
      'proud':        { fr: 'fiers',            mg: 'mirehareha' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'Which race did the narrator enter?',
        options: ['Two hundred metres', 'Four hundred metres', 'Hundred metres', 'Relay race'],
        correct: 2,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What position did the narrator finish in the race?',
        options: ['First', 'Second', 'Third', 'Fourth'],
        correct: 1,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What was the volleyball result?',
        options: ['3-1 to Class 4B', '2-3 to the narrator\'s class', '3-2 to the narrator\'s class', 'Draw'],
        correct: 2,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What prize did the narrator receive?',
        options: ['A gold medal', 'A trophy and a book', 'A silver medal and a certificate', 'Money and a certificate'],
        correct: 2,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'Nadia trains with a professional coach.',
        correct: true,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'The narrator practised volleyball every day.',
        correct: false,
      },
      {
        id: 'q7', type: 'short',
        question: 'How many weeks did the narrator train before the race?',
        keywords: ['two', '2'],
        hint: 'Look for how long the narrator trained.',
      },
    ],
  },

  {
    id: 'r_a2_03',
    title: 'The Weekend Market',
    level: 'A2',
    topic: 'food',
    icon: '🛒',
    wordCount: 148,
    xpReward: 20,
    text:
`Every Saturday morning, Miriam wakes up early to go to the market with her mother. The market is about fifteen minutes from their house on foot.

The market sells fresh food, clothes, and household items. Miriam's mother always buys vegetables, eggs, and sometimes fish for the week ahead. The vegetables are always fresh and cheaper than in the supermarket.

Miriam loves the food section the most. There are colourful stalls with mangoes, pineapples, and bananas. The smell is wonderful. She usually gets a small bag of peanuts as a treat from her mother.

While her mother shops, Miriam sometimes helps carry the bags. She has learned the names of all the vendors and greets them every week. The vendors like her because she is polite and friendly.

Afterwards, they always stop at a small café nearby. They drink fresh fruit juice and watch the busy street together. Miriam thinks the market is better than the supermarket because it is more fun and much friendlier.`,
    glossary: {
      'household': { fr: 'ménager',       mg: 'an-trano' },
      'stalls':    { fr: 'étals',         mg: 'fivarotana' },
      'vendors':   { fr: 'vendeurs',      mg: 'mpivarotra' },
      'polite':    { fr: 'poli',          mg: 'manaja olona' },
      'treat':     { fr: 'petit plaisir', mg: 'valisoa kely' },
      'fresh':     { fr: 'frais',         mg: 'vaovao' },
      'cheaper':   { fr: 'moins cher',    mg: 'mora kokoa' },
      'smell':     { fr: 'odeur',         mg: 'fofona' },
      'peanuts':   { fr: 'cacahuètes',    mg: 'voanjo' },
      'greets':    { fr: 'salue',         mg: 'miarahaba' },
      'afterwards':{ fr: 'ensuite',       mg: 'avy eo' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'How far is the market from Miriam\'s house?',
        options: ['Five minutes', 'Ten minutes', 'Fifteen minutes', 'Half an hour'],
        correct: 2,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What does Miriam\'s mother always buy at the market?',
        options: ['Clothes and shoes', 'Vegetables, eggs and sometimes fish', 'Only fish and fruit', 'Bread and milk'],
        correct: 1,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What treat does Miriam usually get?',
        options: ['A mango', 'A pineapple', 'A bag of peanuts', 'A fruit juice'],
        correct: 2,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Why do the vendors like Miriam?',
        options: ['She buys a lot', 'She is polite and friendly', 'She helps them sell', 'She speaks loudly'],
        correct: 1,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'Miriam and her mother go to the market by car.',
        correct: false,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'They stop for a drink after shopping.',
        correct: true,
      },
      {
        id: 'q7', type: 'short',
        question: 'What do Miriam and her mother drink at the café?',
        keywords: ['fruit juice', 'juice', 'fresh juice'],
        hint: 'Look at the last paragraph.',
      },
    ],
  },

  {
    id: 'r_a2_04',
    title: 'My Best Friend',
    level: 'A2',
    topic: 'relationships',
    icon: '👫',
    wordCount: 150,
    xpReward: 20,
    text:
`My best friend's name is Kevin. We have known each other since primary school. We met on the first day of Year One when we were both sitting at the same table. We have been friends for eight years now.

Kevin is very funny and kind. He always makes me laugh when I feel sad. He is also very talented at art. He draws amazing pictures of animals and buildings. Last year, he won a drawing competition at our school and his picture was displayed in the school hall for a whole month.

We do many things together. At weekends, we often play video games or go cycling in the park near my house. We also enjoy cooking simple meals together. Our favourite dish to make is pasta with tomato sauce. Kevin always adds too much chilli, which makes us laugh.

Kevin wants to study design at university. I think he will be very successful because he works very hard and never gives up. I am lucky to have such a good friend.`,
    glossary: {
      'talented':   { fr: 'talentueux',    mg: 'manana talenta' },
      'displayed':  { fr: 'exposé',        mg: "nasehon'ny" },
      'cycling':    { fr: 'faire du vélo', mg: 'mitaingina bicycle' },
      'design':     { fr: 'design',        mg: 'fanamboarana zavatra' },
      'chilli':     { fr: 'piment',        mg: 'sakay' },
      'primary':    { fr: 'primaire',      mg: 'ambaratonga voalohany' },
      'funny':      { fr: 'drôle',         mg: 'mahafinaritra' },
      'amazing':    { fr: 'incroyable',    mg: 'mahatalanjona' },
      'successful': { fr: 'qui réussit',   mg: 'mahomby' },
      'university': { fr: 'université',    mg: 'oniversite' },
      'weekends':   { fr: 'week-ends',     mg: "tamin'ny sabotsy sy alahady" },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'How long have the narrator and Kevin been friends?',
        options: ['Four years', 'Six years', 'Eight years', 'Ten years'],
        correct: 2,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What is Kevin very good at?',
        options: ['Music', 'Art', 'Sport', 'Science'],
        correct: 1,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What is their favourite dish to cook?',
        options: ['Rice and vegetables', 'Pizza', 'Pasta with tomato sauce', 'Chicken soup'],
        correct: 2,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What does Kevin want to study at university?',
        options: ['Art', 'Engineering', 'Design', 'Science'],
        correct: 2,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'Kevin\'s drawing was shown in the school hall for one month.',
        correct: true,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'The narrator and Kevin met in secondary school.',
        correct: false,
      },
      {
        id: 'q7', type: 'short',
        question: 'What does Kevin always add too much of when they cook?',
        keywords: ['chilli', 'chili', 'spice'],
        hint: 'Look for what makes them laugh when they cook.',
      },
    ],
  },

  {
    id: 'r_a2_05',
    title: 'The Weather in Madagascar',
    level: 'A2',
    topic: 'weather',
    icon: '🌦️',
    wordCount: 155,
    xpReward: 20,
    text:
`Madagascar has two main seasons. The rainy season runs from November to April. During this time, the weather is hot and very humid. It rains almost every day, especially in the afternoons. Sometimes there are strong tropical storms called cyclones. These storms can damage buildings and roads and are very dangerous.

The dry season runs from May to October. The weather is cooler and much more pleasant. There is very little rain during this period. Many tourists visit Madagascar during these months because the conditions are perfect for exploring nature and visiting national parks.

The climate also varies greatly across the island. The east coast receives the most rain and is warm all year. The central highlands are cooler and can even be cold at night in June and July. The south of the country is much drier. In some southern areas, it barely rains at all and the landscape looks like a desert.

Understanding the seasons is very important for farmers, who plan their crops according to the rains. It is also essential for tourists who want to choose the best time to visit this beautiful island.`,
    glossary: {
      'humid':      { fr: 'humide',         mg: 'mando' },
      'cyclones':   { fr: 'cyclones',       mg: 'rivotra mahery' },
      'highlands':  { fr: 'hauts plateaux', mg: 'tanety avo' },
      'landscape':  { fr: 'paysage',        mg: "endrik'atao" },
      'essential':  { fr: 'essentiel',      mg: 'tena ilaina' },
      'seasons':    { fr: 'saisons',        mg: 'vanim-potoana' },
      'rainy':      { fr: 'pluvieux',       mg: 'ranorano' },
      'tourists':   { fr: 'touristes',      mg: 'mpizaha tany' },
      'farmers':    { fr: 'agriculteurs',   mg: 'mpamokatra' },
      'crops':      { fr: 'cultures',       mg: 'vokatra' },
      'dangerous':  { fr: 'dangereux',      mg: 'mampidi-doza' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'When does the rainy season start in Madagascar?',
        options: ['July', 'September', 'November', 'January'],
        correct: 2,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What are tropical storms called in Madagascar?',
        options: ['Typhoons', 'Hurricanes', 'Cyclones', 'Tornadoes'],
        correct: 2,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'When do most tourists visit Madagascar?',
        options: ['November to April', 'During the rainy season', 'May to October', 'January to March'],
        correct: 2,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which part of Madagascar is the driest?',
        options: ['The east coast', 'The central highlands', 'The north', 'The south'],
        correct: 3,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'The central highlands can be cold at night in June and July.',
        correct: true,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'The east coast receives very little rain.',
        correct: false,
      },
      {
        id: 'q7', type: 'short',
        question: 'Why is understanding the seasons important for farmers?',
        keywords: ['crops', 'plan', 'rains', 'farming', 'plant'],
        hint: 'Read the final paragraph.',
      },
    ],
  },

  // ═══════════════════════════════ B1 ════════════════════════════════════════

  {
    id: 'r_b1_01',
    title: 'City Life vs Country Life',
    level: 'B1',
    topic: 'society',
    icon: '🌆',
    wordCount: 210,
    xpReward: 25,
    text:
`Many people face a difficult choice: should they live in a city or in the countryside? Both options have their advantages and disadvantages, and the right answer depends very much on the individual.

City life offers many opportunities. There are more jobs available, better hospitals, and a wider variety of schools and universities. Shops, restaurants, and entertainment venues are easily accessible. Public transport is generally reliable, so people can get around without owning a car. However, cities can also be noisy, heavily polluted, and expensive. Flats are often small and green spaces are limited, making life stressful for families with children.

Life in the countryside, on the other hand, is generally quieter and more relaxed. The air is cleaner and there is more space for families. People tend to know their neighbours better, which creates a stronger sense of community and belonging. However, finding well-paid work can be difficult, and people often depend on their own transport to reach schools, hospitals, and shops.

In recent years, the rise of remote working has changed the situation significantly. Many people can now work from home using the internet, meaning they can enjoy the peace of the countryside while keeping their city-based jobs.

Ultimately, the best choice depends on a person's age, job, family situation, and personal priorities. There is no single right answer.`,
    glossary: {
      'venues':       { fr: 'lieux',             mg: 'toerana' },
      'accessible':   { fr: 'accessible',        mg: 'azo atonina' },
      'community':    { fr: 'communauté',        mg: 'fiarahamonina' },
      'remote':       { fr: 'à distance',        mg: 'lavitra' },
      'priorities':   { fr: 'priorités',         mg: 'andraikitra voalohany' },
      'advantages':   { fr: 'avantages',         mg: 'tombontsoa' },
      'disadvantages':{ fr: 'inconvénients',     mg: 'lesoka' },
      'polluted':     { fr: 'pollué',            mg: 'voaloto' },
      'countryside':  { fr: 'campagne',          mg: 'ambanivohitra' },
      'belonging':    { fr: 'appartenance',      mg: 'fananana toerana' },
      'opportunity':  { fr: 'opportunité',       mg: 'fahafahana' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'According to the text, what is one advantage of city life?',
        options: ['Cleaner air', 'More job opportunities', 'Stronger communities', 'Lower prices'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What disadvantage of cities does the text mention?',
        options: ['Bad public transport', 'Few schools', 'Noisy, polluted and expensive', 'No entertainment'],
        correct: 2,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What recent change has affected people\'s choice of where to live?',
        options: ['Better roads', 'The rise of remote working', 'Cheaper housing in cities', 'Better schools in the countryside'],
        correct: 1,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What does the text say about the countryside?',
        options: ['It has better hospitals', 'It has more entertainment', 'It has a stronger sense of community', 'It has more jobs'],
        correct: 2,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'The text says there is one clear right answer for everyone.',
        correct: false,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'People in the countryside often depend on their own transport.',
        correct: true,
      },
      {
        id: 'q7', type: 'short',
        question: 'Name one disadvantage of living in the countryside mentioned in the text.',
        keywords: ['jobs', 'work', 'transport', 'schools', 'hospitals', 'shops'],
        hint: 'Look at the paragraph about countryside life.',
      },
      {
        id: 'q8', type: 'selfcheck',
        question: 'In your own words, explain how remote working has changed where people choose to live.',
        modelAnswer: 'Remote working allows people to work from home using the internet, so they can live in the countryside while keeping their city jobs. They no longer need to live close to their workplace.',
      },
    ],
  },

  {
    id: 'r_b1_02',
    title: 'Technology in Schools',
    level: 'B1',
    topic: 'technology',
    icon: '💻',
    wordCount: 215,
    xpReward: 25,
    text:
`Over the past twenty years, technology has transformed education in remarkable ways. In many countries, computers, tablets, and interactive whiteboards have replaced traditional textbooks and chalk. Students can now access information from around the world with a single click.

Supporters of educational technology argue that it makes learning more engaging and personalised. Students can learn at their own pace, revisit difficult topics as many times as needed, and explore subjects that genuinely interest them. Teachers can also use digital tools to track each student's progress more effectively than ever before.

However, not everyone is convinced that technology in schools is entirely positive. Some teachers worry that students are becoming too dependent on computers and are losing essential skills such as handwriting, mental arithmetic, and face-to-face communication. There is also growing concern about the amount of time children spend looking at screens and its effects on their health and concentration.

Access to technology presents another significant challenge. In wealthier countries, most schools are well equipped with modern devices and fast internet connections. In poorer regions, however, many students have no access to computers at all. This digital divide risks creating even greater inequality in education globally.

Despite these challenges, most experts agree that technology, when used wisely and in a balanced way, has the potential to greatly improve educational outcomes for students everywhere.`,
    glossary: {
      'transformed':  { fr: 'transformé',      mg: 'novaina tanteraka' },
      'personalised': { fr: 'personnalisé',    mg: 'nentina ho azy' },
      'arithmetic':   { fr: 'arithmétique',    mg: 'kaontana' },
      'inequality':   { fr: 'inégalité',       mg: 'tsy fitoviana' },
      'outcomes':     { fr: 'résultats',       mg: 'vokatra' },
      'devices':      { fr: 'appareils',       mg: 'fitaovana' },
      'engaged':      { fr: 'impliqué',        mg: 'tafiditra' },
      'concern':      { fr: 'inquiétude',      mg: 'ahiahy' },
      'dependent':    { fr: 'dépendant',       mg: 'miankina' },
      'wisely':       { fr: 'sagement',        mg: 'amim-pahendrena' },
      'challenge':    { fr: 'défi',            mg: 'fanamby' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What have computers replaced in many schools?',
        options: ['Teachers and lessons', 'Traditional textbooks and chalk', 'Playgrounds and sports', 'Libraries and canteens'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'According to supporters of technology, what is one benefit for students?',
        options: ['They never need teachers', 'They can learn at their own pace', 'They get better grades automatically', 'They spend less time at school'],
        correct: 1,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What skill are some teachers worried students are losing?',
        options: ['Drawing', 'Handwriting', 'Physical education', 'Music'],
        correct: 1,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What is meant by the "digital divide"?',
        options: ['Different types of computers', 'The gap between students who have technology and those who don\'t', 'Using technology for different subjects', 'The difference between phones and computers'],
        correct: 1,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'All experts agree that technology is completely positive in schools.',
        correct: false,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'Technology allows teachers to track students\' progress more effectively.',
        correct: true,
      },
      {
        id: 'q7', type: 'short',
        question: 'Name one concern about children\'s health mentioned in the text.',
        keywords: ['screen', 'screens', 'concentration', 'health', 'time'],
        hint: 'Look for the paragraph about health and screen time.',
      },
      {
        id: 'q8', type: 'selfcheck',
        question: 'Do you think technology improves or damages education? Use ideas from the text to support your answer.',
        modelAnswer: 'There is no single correct answer. The text suggests technology can be positive (personalised learning, better progress tracking) but also raises concerns (screen time, lost skills, digital inequality). A balanced answer should mention points from both sides.',
      },
    ],
  },

  {
    id: 'r_b1_03',
    title: 'How Holidays Have Changed',
    level: 'B1',
    topic: 'culture',
    icon: '✈️',
    wordCount: 205,
    xpReward: 25,
    text:
`The way people spend their holidays has changed dramatically over the past few decades. In the past, most families took one annual holiday, usually within their own country. Travelling abroad was considered a luxury reserved for the wealthy, and very few people owned a passport.

Today, however, the situation is very different. Cheaper flights, the growth of budget airlines, and the development of online booking platforms have made international travel accessible to millions of people. It is now possible to fly to another continent for less than the price of a train ticket.

Social media has also had a significant impact on holiday choices. People are increasingly influenced by photographs and travel recommendations they see online. Destinations that appear frequently on social media platforms attract large numbers of visitors, sometimes causing what experts call "overtourism". Popular sites can become overcrowded, damaging cultural heritage and harming the local environment.

On the positive side, travel broadens the mind considerably. Meeting people from different cultures, tasting unfamiliar food, and experiencing different ways of life are enormously valuable. Many travellers report that their holidays have changed their view of the world and helped them develop greater empathy and open-mindedness.

The challenge for the future is to find ways to enjoy the benefits of international travel while reducing its negative environmental and social effects.`,
    glossary: {
      'dramatically':  { fr: 'de façon spectaculaire', mg: 'betsaka dia betsaka' },
      'luxury':        { fr: 'luxe',                   mg: 'harena lehibe' },
      'overtourism':   { fr: 'surtourisme',            mg: "fitangoranan'ny mpizaha tany" },
      'empathy':       { fr: 'empathie',               mg: 'fifankatiavana' },
      'heritage':      { fr: 'patrimoine',             mg: 'lovam-pirazanana' },
      'passport':      { fr: 'passeport',              mg: 'pasipaoro' },
      'abroad':        { fr: "à l'étranger",           mg: 'any ivelany' },
      'budget':        { fr: 'bon marché',             mg: 'mora' },
      'booking':       { fr: 'réservation',            mg: 'fandaminana toerana' },
      'overcrowded':   { fr: 'surpeuplé',              mg: 'feno olona loatra' },
      'continent':     { fr: 'continent',              mg: 'kaontinanta' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'In the past, where did most families take their holidays?',
        options: ['Abroad', 'Within their own country', 'On another continent', 'In luxury resorts'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What has made international travel more accessible today?',
        options: ['Higher wages', 'More holidays from work', 'Cheaper flights and online booking', 'Better passports'],
        correct: 2,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What is "overtourism"?',
        options: ['Travelling too often', 'When too many tourists visit a place', 'Expensive travel', 'Tourism that helps the environment'],
        correct: 1,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'According to the text, what is a benefit of travel?',
        options: ['It is always cheap', 'It develops empathy and open-mindedness', 'It has no negative effects', 'It is good for the environment'],
        correct: 1,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'Social media has had no impact on people\'s holiday choices.',
        correct: false,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'Overtourism can damage cultural heritage and harm the environment.',
        correct: true,
      },
      {
        id: 'q7', type: 'short',
        question: 'What skill or quality does the text say travel helps people develop?',
        keywords: ['empathy', 'open-minded', 'open minded', 'open-mindedness', 'understanding'],
        hint: 'Look at the positive effects of travel in the fourth paragraph.',
      },
      {
        id: 'q8', type: 'selfcheck',
        question: 'What does the text suggest is the main challenge for the future of travel? Explain in your own words.',
        modelAnswer: 'The main challenge is to find a balance: allowing people to enjoy the benefits of international travel (cultural exchange, personal development) while reducing the negative effects, such as overtourism, environmental damage, and harm to local communities.',
      },
    ],
  },

  {
    id: 'r_b1_04',
    title: 'Environmental Problems',
    level: 'B1',
    topic: 'environment',
    icon: '🌍',
    wordCount: 220,
    xpReward: 25,
    text:
`Our planet is facing a number of serious environmental challenges. Climate change is perhaps the most widely discussed. Rising global temperatures, caused mainly by the burning of fossil fuels, are leading to more frequent extreme weather events, rising sea levels, and the loss of animal and plant species.

Deforestation is another critical problem. Forests are being cut down at an alarming rate to create agricultural land and to harvest timber. This not only destroys the habitat of countless species but also removes trees that absorb carbon dioxide from the atmosphere, making climate change worse.

Plastic pollution has become one of the most visible environmental crises. Every year, millions of tonnes of plastic waste enter the world's oceans, harming marine life and contaminating the food chain. Despite growing public awareness, global plastic production continues to increase year after year.

However, there are genuine reasons for hope. Renewable energy sources such as solar and wind power are growing rapidly in popularity and are becoming significantly cheaper. Many countries have introduced ambitious policies to reduce plastic use and protect natural habitats. Young people across the world are demanding stronger action from governments and businesses alike.

Each individual can also make a meaningful difference through everyday choices — reducing energy consumption, choosing products with less packaging, eating less meat, and supporting businesses that prioritise sustainability.

Solving these problems will require international cooperation, political commitment, and a genuine change in how societies consume and produce.`,
    glossary: {
      'deforestation': { fr: 'déforestation',  mg: 'fanapotehana ala' },
      'habitat':       { fr: 'habitat',        mg: 'toerana iainana' },
      'contaminating': { fr: 'contaminant',    mg: 'mampitombo fahalotoana' },
      'renewable':     { fr: 'renouvelable',   mg: 'azo havaozina' },
      'sustainability':{ fr: 'durabilité',     mg: 'fiarovana ho avy' },
      'climate':       { fr: 'climat',         mg: 'toetr\'andro' },
      'pollution':     { fr: 'pollution',      mg: 'fahalotoana' },
      'plastic':       { fr: 'plastique',      mg: 'plastika' },
      'temperature':   { fr: 'température',    mg: 'hafanana' },
      'forests':       { fr: 'forêts',         mg: 'ala' },
      'awareness':     { fr: 'sensibilisation',mg: 'fahatsapana' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What is the main cause of climate change according to the text?',
        options: ['Plastic pollution', 'Deforestation alone', 'Burning fossil fuels', 'Rising sea levels'],
        correct: 2,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'Why is deforestation bad for climate change?',
        options: ['It produces plastic', 'It removes trees that absorb CO2', 'It creates more fossil fuels', 'It causes floods'],
        correct: 1,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'What is happening to plastic production?',
        options: ['It is decreasing', 'It has stopped', 'It continues to increase', 'It is being replaced by wood'],
        correct: 2,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'Which renewable energy sources does the text mention?',
        options: ['Nuclear and water', 'Solar and wind', 'Gas and oil', 'Coal and solar'],
        correct: 1,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'The text gives no reason for hope about environmental problems.',
        correct: false,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'Plastic in the oceans harms marine life.',
        correct: true,
      },
      {
        id: 'q7', type: 'short',
        question: 'Name one individual action the text suggests to help the environment.',
        keywords: ['energy', 'packaging', 'meat', 'recycle', 'businesses', 'sustainability', 'consumption'],
        hint: 'Read the fifth paragraph about individual actions.',
      },
      {
        id: 'q8', type: 'selfcheck',
        question: 'The text says solving environmental problems requires "international cooperation, political commitment, and a change in how societies consume." Do you agree? Give reasons.',
        modelAnswer: 'This is an open question. Strong answers should explain why each element matters: international cooperation (pollution crosses borders), political commitment (laws and investment needed), and changes in consumption (individual and business behaviour drives demand). Personal opinion with justification is expected.',
      },
    ],
  },

  // ═══════════════════════════════ B1+ ═══════════════════════════════════════

  {
    id: 'r_b1p_01',
    title: 'The Future of Work',
    level: 'B1+',
    topic: 'technology',
    icon: '🤖',
    wordCount: 300,
    xpReward: 30,
    text:
`The world of work is changing at a pace that previous generations could not have imagined. Advances in artificial intelligence, robotics, and automation are transforming entire industries and raising fundamental questions about the future of employment.

Some economists predict that automation will eliminate millions of jobs over the coming decades. Tasks that were once performed exclusively by humans — from driving vehicles to analysing financial data — can now be carried out more efficiently by machines. Factory workers, lorry drivers, and even certain medical professionals may find their roles significantly reduced or entirely replaced in the years ahead.

However, history suggests that technological change, while disruptive in the short term, ultimately tends to create more jobs than it destroys. The development of the internet, for example, eliminated many traditional roles but gave rise to entirely new industries and professions that did not exist twenty years ago. Digital marketing, application development, and data science are just a few examples of careers that have emerged from this technological shift.

What seems increasingly certain is that the skills required in the workplace will change substantially. Creativity, critical thinking, and emotional intelligence — qualities that are extremely difficult for machines to replicate — will become progressively more valuable. Adaptability will be essential: workers will need to continuously update and expand their skills throughout their careers rather than relying on a single qualification obtained at the start of their working lives.

Education systems around the world will need to adapt accordingly. Teaching students to memorise facts may become far less important than teaching them how to think independently, collaborate effectively, and solve complex, open-ended problems. Schools and universities must prepare young people not just for the jobs that exist today, but for roles that have not yet been invented.

The future of work is genuinely uncertain, but those who remain curious, adaptable, and committed to lifelong learning are best placed to thrive in whatever economic landscape emerges.`,
    glossary: {
      'automation':    { fr: 'automatisation', mg: "fanaovana ny asan'olombelona amin'ny milina" },
      'disruptive':    { fr: 'perturbateur',   mg: 'mampivily' },
      'replicate':     { fr: 'reproduire',     mg: 'mahavita mitovy' },
      'adaptability':  { fr: 'adaptabilité',   mg: "fahaizana mifanaraka amin'ny toe-javatra" },
      'qualification': { fr: 'qualification',  mg: 'mari-pahaizana' },
      'employment':    { fr: 'emploi',         mg: 'asa' },
      'creativity':    { fr: 'créativité',     mg: 'fahaiza-mamorona' },
      'careers':       { fr: 'carrières',      mg: 'asana' },
      'artificial':    { fr: 'artificielle',   mg: 'artifisialy' },
      'intelligence':  { fr: 'intelligence',   mg: 'fahendrena' },
      'effectively':   { fr: 'efficacement',   mg: 'tsara' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'What do some economists predict automation will do?',
        options: ['Create millions of jobs immediately', 'Eliminate millions of jobs', 'Have no effect on employment', 'Only affect factory workers'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'What does history suggest about technological change?',
        options: ['It always destroys more jobs than it creates', 'It has no long-term effect', 'It ultimately creates more jobs than it destroys', 'It only affects industry'],
        correct: 2,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'Which skills does the text say will become more valuable?',
        options: ['Memory and speed', 'Creativity, critical thinking and emotional intelligence', 'Physical strength and technical ability', 'Foreign language skills only'],
        correct: 1,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'According to the text, what must education focus on?',
        options: ['Memorising more facts', 'Training students for specific jobs only', 'Teaching students to think, collaborate and solve problems', 'Reducing time at school'],
        correct: 2,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'The text argues that the future of work is completely certain.',
        correct: false,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'Digital marketing and data science are examples of jobs that emerged from technological change.',
        correct: true,
      },
      {
        id: 'q7', type: 'short',
        question: 'According to the text, what quality will be essential for workers in the future?',
        keywords: ['adaptability', 'adaptable', 'flexibility', 'learning', 'update'],
        hint: 'Look at the fourth paragraph.',
      },
      {
        id: 'q8', type: 'selfcheck',
        question: 'The text says workers will need to "continuously update and expand their skills throughout their careers." What challenges might this create, and how could they be overcome?',
        modelAnswer: 'Possible challenges: time and cost of retraining; access to learning opportunities; difficulty for older workers. Possible solutions: employer-funded training, affordable online courses, government support programmes, flexible education pathways. Strong answers will consider both personal and structural perspectives.',
      },
      {
        id: 'q9', type: 'selfcheck',
        question: 'Do you think AI and automation are mainly a threat or an opportunity for workers? Use evidence from the text.',
        modelAnswer: 'Both views are valid. Threat: jobs being eliminated, especially routine tasks. Opportunity: new industries, higher-value work, history shows net job creation. Best answers acknowledge complexity and use specific examples from the text (internet creating digital careers, new skills becoming valuable).',
      },
    ],
  },

  {
    id: 'r_b1p_02',
    title: 'Reading for Pleasure',
    level: 'B1+',
    topic: 'culture',
    icon: '📚',
    wordCount: 290,
    xpReward: 30,
    text:
`In an age dominated by screens, social media, and instant entertainment, reading for pleasure might seem like a habit of the past. Yet research consistently shows that regular reading remains one of the most beneficial activities a person can engage in, regardless of their age or background.

The benefits of reading extend far beyond simply acquiring information. Studies have found that people who read regularly tend to have larger vocabularies, stronger analytical skills, and greater capacity for empathy than those who read infrequently. Immersing oneself in a narrative requires the reader to imagine characters, settings, and emotions, which exercises both the imagination and the ability to understand perspectives different from one's own.

Reading also has measurable effects on mental health. Research suggests that just six minutes of reading can reduce stress levels by up to sixty-eight per cent — more effectively than listening to music or taking a short walk. For many people, a book provides a genuine and deeply satisfying escape from the pressures of daily life.

Despite these well-documented benefits, reading rates have declined in many countries over the past two decades, particularly among young people. The rise of smartphones and short-form video content has made it increasingly difficult to sustain the focused, uninterrupted attention that reading requires. Many young people report that they find it hard to concentrate on a book after spending extended periods scrolling through social media.

Libraries and schools have responded with creative initiatives to reignite enthusiasm for reading. Reading challenges, author visits, and book clubs have proved effective in many communities. Some schools have introduced short "silent reading" sessions at the start of each day, reporting improvements not only in literacy but also in students' concentration and general wellbeing.

Perhaps the most effective solution is simply to make reading enjoyable rather than compulsory. Research consistently shows that when people choose what they read freely — following their own interests and curiosity — they are far more likely to develop a lasting and genuinely rewarding reading habit.`,
    glossary: {
      'analytical':    { fr: 'analytique',      mg: 'mahay mamakafaka' },
      'narrative':     { fr: 'récit',           mg: 'tantara' },
      'perspectives':  { fr: 'points de vue',   mg: 'fomba fijerika' },
      'infrequently':  { fr: 'rarement',        mg: 'tsy matetika' },
      'compulsory':    { fr: 'obligatoire',     mg: 'voatery' },
      'vocabulary':    { fr: 'vocabulaire',     mg: 'voambolana' },
      'stress':        { fr: 'stress',          mg: 'alahelon-tsaina' },
      'declined':      { fr: 'a diminué',       mg: 'nihena' },
      'habit':         { fr: 'habitude',        mg: 'fomba amam-panao' },
      'enjoyable':     { fr: 'agréable',        mg: 'mahafinaritra' },
      'concentrate':   { fr: 'se concentrer',   mg: 'mifantoka' },
    },
    questions: [
      {
        id: 'q1', type: 'mcq',
        question: 'According to studies, what do regular readers tend to have?',
        options: ['Better physical health', 'Larger vocabularies and stronger analytical skills', 'More friends', 'Better sleep'],
        correct: 1,
      },
      {
        id: 'q2', type: 'mcq',
        question: 'How much can six minutes of reading reduce stress levels?',
        options: ['Twenty per cent', 'Thirty-five per cent', 'Fifty per cent', 'Sixty-eight per cent'],
        correct: 3,
      },
      {
        id: 'q3', type: 'mcq',
        question: 'Why have reading rates declined among young people?',
        options: ['Books are too expensive', 'Schools don\'t encourage reading', 'Smartphones and short-form video make sustained attention harder', 'Young people prefer outdoor activities'],
        correct: 2,
      },
      {
        id: 'q4', type: 'mcq',
        question: 'What did schools that introduced "silent reading" sessions report?',
        options: ['Lower test scores', 'Improvements in literacy and concentration', 'Reduced interest in books', 'More disciplinary problems'],
        correct: 1,
      },
      {
        id: 'q5', type: 'tf',
        statement: 'The text says reading is less effective at reducing stress than listening to music.',
        correct: false,
      },
      {
        id: 'q6', type: 'tf',
        statement: 'People who choose what they read freely are more likely to develop a lasting habit.',
        correct: true,
      },
      {
        id: 'q7', type: 'short',
        question: 'Name one initiative schools or libraries have used to encourage reading.',
        keywords: ['challenges', 'author', 'book club', 'silent reading', 'visits', 'clubs'],
        hint: 'Look at the fifth paragraph about schools and libraries.',
      },
      {
        id: 'q8', type: 'selfcheck',
        question: 'The text says reading develops empathy. Can you explain, in your own words, how reading a story might help someone understand other people\'s feelings?',
        modelAnswer: 'When you read a story, you put yourself in the characters\' position and imagine their thoughts, emotions, and experiences. This practice of imagining a different perspective — especially one very different from your own — trains the mind to understand how other people feel in real life, which is the basis of empathy.',
      },
      {
        id: 'q9', type: 'selfcheck',
        question: 'Do you agree that reading should never be compulsory in schools? Use ideas from the text and your own experience to argue your position.',
        modelAnswer: 'No single correct answer. Arguments for not making it compulsory: free choice increases enjoyment and creates lasting habits (text evidence). Arguments for some compulsion: students may never discover reading otherwise; structured time (silent reading sessions) has measurable benefits. Best answers will present a nuanced view.',
      },
    ],
  },

  // ═══════════════════════════ NEW TEXTS ════════════════════════════════════

  {
    id: 'r_a1_05',
    title: 'My House',
    level: 'A1',
    topic: 'home',
    icon: '🏠',
    wordCount: 92,
    xpReward: 15,
    text:
`My name is Haja. I live in a house in Antananarivo. My house has two bedrooms, a kitchen, a bathroom, and a living room.

The living room is my favourite room. It is big and comfortable. We have a sofa, a television, and a table. In the evening, my family watches TV together.

My bedroom is small but nice. I have a bed, a desk, and a wardrobe. I do my homework at my desk every afternoon. There are pictures of animals on the walls.

Our garden is not very big. We have some flowers and a small tree. My father works in the garden at weekends. He grows tomatoes and onions there.

I feel happy in my house because my family is here.`,
    glossary: {
      'comfortable': { fr: 'confortable',  mg: 'mahafinaritra' },
      'wardrobe':    { fr: 'armoire',      mg: 'armoera' },
      'sofa':        { fr: 'canapé',       mg: 'seza lehibe' },
      'bedroom':     { fr: 'chambre',      mg: 'efitra fandriana' },
      'kitchen':     { fr: 'cuisine',      mg: 'efitra fanomboana sakafo' },
      'bathroom':    { fr: 'salle de bain', mg: 'efitra fanasana vatana' },
      'garden':      { fr: 'jardin',       mg: 'zaridaina' },
      'television':  { fr: 'télévision',   mg: 'fahitalavitra' },
      'pictures':    { fr: 'images',       mg: 'sary' },
      'tomatoes':    { fr: 'tomates',      mg: 'voatavia' },
    },
    questions: [
      { id: 'q1', type: 'mcq', question: 'How many bedrooms does Haja\'s house have?', options: ['One', 'Two', 'Three', 'Four'], correct: 1 },
      { id: 'q2', type: 'mcq', question: 'What is Haja\'s favourite room?', options: ['The kitchen', 'The bedroom', 'The living room', 'The bathroom'], correct: 2 },
      { id: 'q3', type: 'mcq', question: 'What does Haja do at the desk every afternoon?', options: ['Reads books', 'Does homework', 'Draws pictures', 'Watches TV'], correct: 1 },
      { id: 'q4', type: 'mcq', question: 'What does Haja\'s father grow in the garden?', options: ['Flowers and fruit', 'Rice and beans', 'Tomatoes and onions', 'Potatoes and carrots'], correct: 2 },
      { id: 'q5', type: 'tf', statement: 'Haja\'s bedroom is large.', correct: false },
      { id: 'q6', type: 'tf', statement: 'The family watches TV together in the evening.', correct: true },
      { id: 'q7', type: 'short', question: 'What is on the walls of Haja\'s bedroom?', keywords: ['animals', 'pictures', 'animal'], hint: 'Look at the bedroom description.' },
    ],
  },

  {
    id: 'r_a2_06',
    title: 'A Trip to the Beach',
    level: 'A2',
    topic: 'leisure',
    icon: '🏖️',
    wordCount: 152,
    xpReward: 20,
    text:
`Last summer, our family went on a trip to the beach. We drove for two hours to reach a small coastal town called Ifaty. It was the first time my little sister had seen the sea, and she was amazed.

The beach was beautiful. The sand was white and the water was very clear and warm. We swam, played volleyball, and collected shells along the shore. My father hired a small boat and we sailed around the bay for an hour.

We stayed in a guesthouse near the beach. The owner was very friendly and cooked us fresh fish every evening. It was the most delicious food I had ever tasted.

On the last day, we visited a coral reef with a local guide. The colours of the fish and coral were incredible. My sister took photographs with a waterproof camera.

When we came home, we were tired but very happy. I hope we can go back there next year.`,
    glossary: {
      'coastal':     { fr: 'côtier',            mg: 'amoron-dranomasina' },
      'amazed':      { fr: 'émerveillée',       mg: 'talanjona' },
      'shells':      { fr: 'coquillages',       mg: 'akora' },
      'coral reef':  { fr: 'récif corallien',   mg: 'coral' },
      'guesthouse':  { fr: 'pension',           mg: 'trano fandraisana' },
      'beach':       { fr: 'plage',             mg: 'amoron-dranomasina' },
      'swam':        { fr: 'a nagé',            mg: 'nilomano' },
      'sailed':      { fr: 'a navigué',         mg: 'nandeha sambo' },
      'waterproof':  { fr: 'étanche',           mg: 'tsy midiran-drano' },
      'guide':       { fr: 'guide',             mg: 'mpitari-dalana' },
      'incredible':  { fr: 'incroyable',        mg: 'mahatalanjona' },
    },
    questions: [
      { id: 'q1', type: 'mcq', question: 'How long did the drive to Ifaty take?', options: ['One hour', 'Two hours', 'Three hours', 'Half an hour'], correct: 1 },
      { id: 'q2', type: 'mcq', question: 'What did the father hire at the beach?', options: ['A surfboard', 'A bicycle', 'A small boat', 'A jet ski'], correct: 2 },
      { id: 'q3', type: 'mcq', question: 'What did the guesthouse owner cook for them?', options: ['Rice and chicken', 'Fresh fish', 'Pasta', 'Grilled vegetables'], correct: 1 },
      { id: 'q4', type: 'mcq', question: 'What did they visit on the last day?', options: ['A market', 'A waterfall', 'A coral reef', 'A national park'], correct: 2 },
      { id: 'q5', type: 'tf', statement: 'It was the narrator\'s first time seeing the sea.', correct: false },
      { id: 'q6', type: 'tf', statement: 'The narrator hopes to return to the beach next year.', correct: true },
      { id: 'q7', type: 'short', question: 'What did the children collect along the shore?', keywords: ['shells', 'shell'], hint: 'Look at what they did on the beach.' },
    ],
  },

  {
    id: 'r_b1_05',
    title: 'Social Media and Teenagers',
    level: 'B1',
    topic: 'technology',
    icon: '📱',
    wordCount: 218,
    xpReward: 25,
    text:
`Social media platforms have become a central part of daily life for teenagers around the world. For many young people, spending several hours online each day is entirely normal. But what are the real effects of this digital habit?

On one hand, social media offers genuine benefits. It allows teenagers to stay in contact with friends and family, share their interests, and discover new ideas. Young people can also use platforms to develop creative skills, build communities around shared passions, and even raise awareness about important social issues.

However, research increasingly suggests that heavy social media use can have negative consequences for mental health. Studies have linked excessive screen time to higher levels of anxiety, depression, and loneliness — particularly among girls. One major problem is that users are constantly exposed to idealistic and often misleading images of other people's lives, which can damage self-esteem and create unrealistic expectations.

Another concern is the issue of cyberbullying. Unlike traditional bullying, cyberbullying can happen at any time and in any place, making it extremely difficult for victims to escape. Many teenagers feel unable to ask adults for help because they are afraid of having their phones taken away.

Experts generally agree that moderation is key. Using social media mindfully — setting time limits, choosing content carefully, and taking regular breaks — can help teenagers enjoy its benefits without suffering its negative effects.`,
    glossary: {
      'excessive':    { fr: 'excessif',         mg: 'be loatra' },
      'idealistic':   { fr: 'idéalisé',         mg: 'tsy mety ho tranga' },
      'self-esteem':  { fr: 'estime de soi',    mg: 'fanajana tena' },
      'cyberbullying':{ fr: 'cyberharcèlement', mg: 'fanenjehana an-tserasera' },
      'moderation':   { fr: 'modération',       mg: "fahendrena amin'ny fampiasana" },
      'anxiety':      { fr: 'anxiété',          mg: 'ahiahy' },
      'depression':   { fr: 'dépression',       mg: 'fahalemem-panahy' },
      'consequences': { fr: 'conséquences',     mg: 'vokatr\'izany' },
      'platforms':    { fr: 'plateformes',      mg: 'rindranasa' },
      'teenagers':    { fr: 'adolescents',      mg: 'tanora' },
      'mindfully':    { fr: 'de façon consciente', mg: 'am-pahendrena' },
    },
    questions: [
      { id: 'q1', type: 'mcq', question: 'Which group does research suggest is most affected by heavy social media use?', options: ['Boys', 'Girls', 'Adults', 'Teachers'], correct: 1 },
      { id: 'q2', type: 'mcq', question: 'What is one benefit of social media mentioned in the text?', options: ['It replaces schools', 'It helps teenagers sleep better', 'It allows young people to build communities', 'It reduces screen time'], correct: 2 },
      { id: 'q3', type: 'mcq', question: 'Why is cyberbullying particularly difficult to escape?', options: ['It is always anonymous', 'It can happen any time and anywhere', 'Adults never notice it', 'It only happens at school'], correct: 1 },
      { id: 'q4', type: 'mcq', question: 'What do experts say is the key to healthy social media use?', options: ['Avoiding it completely', 'Only using it for school', 'Moderation and mindful use', 'Only using it with parents'], correct: 2 },
      { id: 'q5', type: 'tf', statement: 'The text says social media has no positive uses for teenagers.', correct: false },
      { id: 'q6', type: 'tf', statement: 'Some teenagers are afraid to report cyberbullying because they fear losing their phones.', correct: true },
      { id: 'q7', type: 'short', question: 'Name one practical tip the text suggests for healthier social media use.', keywords: ['time limits', 'breaks', 'content', 'mindfully', 'limit', 'break'] },
      { id: 'q8', type: 'selfcheck', question: 'Do you think social media is mainly positive or mainly negative for teenagers your age? Use ideas from the text to support your answer.', modelAnswer: 'Both views are valid. Positive: staying connected, creativity, awareness campaigns. Negative: anxiety, depression, cyberbullying, unrealistic comparisons. Strong answers discuss both sides and form a clear, justified opinion.' },
    ],
  },

  {
    id: 'r_b1_06',
    title: 'Food Waste',
    level: 'B1',
    topic: 'environment',
    icon: '🍱',
    wordCount: 212,
    xpReward: 25,
    text:
`Every year, approximately one third of all the food produced in the world is wasted. This amounts to around 1.3 billion tonnes of food thrown away annually — enough to feed every hungry person on Earth several times over. Food waste is not only a moral problem; it is also a serious environmental and economic one.

When food is wasted, all the resources used to produce it are also wasted: the water, the land, the energy, and the labour. Furthermore, when food rots in landfill sites, it releases methane, a powerful greenhouse gas that contributes significantly to climate change.

Food is wasted at every stage of the supply chain. In richer countries, much of the waste occurs at the consumer level. People buy more than they need, forget what is in their fridge, and throw away food that has passed its use-by date even when it is still perfectly safe to eat. In poorer countries, waste tends to occur earlier in the chain, due to inadequate storage facilities and poor transportation infrastructure.

Several solutions have been proposed. Supermarkets can reduce waste by improving their stock management and donating unsold food to charities. Consumers can make a difference by planning meals carefully, buying only what they need, and learning to use leftovers creatively. Governments can introduce policies that reward businesses for reducing waste and penalise unnecessary disposal.

Tackling food waste requires action at every level — from international policy to individual shopping habits.`,
    glossary: {
      'approximately': { fr: 'environ',          mg: 'tokony ho' },
      'landfill':      { fr: 'décharge',         mg: 'toeran-drano fako' },
      'methane':       { fr: 'méthane',          mg: 'gazy metana' },
      'infrastructure':{ fr: 'infrastructure',   mg: 'fotodrafitrasa' },
      'leftovers':     { fr: 'restes',           mg: 'sisa sakafo' },
      'wasted':        { fr: 'gaspillé',         mg: 'very foana' },
      'resources':     { fr: 'ressources',       mg: 'harena' },
      'consumer':      { fr: 'consommateur',     mg: 'mpanjifa' },
      'storage':       { fr: 'stockage',         mg: 'fitahirizana' },
      'charities':     { fr: 'associations',     mg: 'fikambanana fanampiana' },
      'disposal':      { fr: 'élimination',      mg: 'fanapotehana' },
    },
    questions: [
      { id: 'q1', type: 'mcq', question: 'How much of the world\'s food is wasted each year?', options: ['One fifth', 'One quarter', 'One third', 'One half'], correct: 2 },
      { id: 'q2', type: 'mcq', question: 'What harmful gas does rotting food in landfills release?', options: ['Carbon dioxide', 'Nitrogen', 'Methane', 'Oxygen'], correct: 2 },
      { id: 'q3', type: 'mcq', question: 'In richer countries, where does most food waste occur?', options: ['During farming', 'During transportation', 'At the consumer level', 'In factories'], correct: 2 },
      { id: 'q4', type: 'mcq', question: 'What can supermarkets do to reduce food waste?', options: ['Increase prices', 'Reduce opening hours', 'Improve stock management and donate unsold food', 'Sell smaller portions only'], correct: 2 },
      { id: 'q5', type: 'tf', statement: 'In poorer countries, food waste mainly happens when consumers throw food away.', correct: false },
      { id: 'q6', type: 'tf', statement: 'Wasting food also wastes the water and energy used to produce it.', correct: true },
      { id: 'q7', type: 'short', question: 'Name one thing individual consumers can do to reduce food waste.', keywords: ['plan', 'buy', 'leftovers', 'shopping', 'fridge', 'need'] },
      { id: 'q8', type: 'selfcheck', question: 'The text says food waste "requires action at every level." What does this mean? Explain using examples from the text.', modelAnswer: 'It means that no single group can solve the problem alone. Governments must create policies; supermarkets must manage stock better and donate food; consumers must plan shopping and use leftovers. Each level of the supply chain plays a role, from production to the individual consumer.' },
    ],
  },

  {
    id: 'r_b1p_03',
    title: 'The History of the Internet',
    level: 'B1+',
    topic: 'technology',
    icon: '🌐',
    wordCount: 295,
    xpReward: 30,
    text:
`Few technologies have transformed human society as profoundly as the internet. What began as a small military research network in the United States in the 1960s has grown into a global infrastructure connecting billions of people and underpinning almost every aspect of modern life.

The origins of the internet lie in ARPANET, a project funded by the US Department of Defense in 1969. Its initial purpose was to allow military researchers to share data between computers at different universities. The system was deliberately designed to be decentralised — meaning there was no single point of control — so that it could continue to function even if parts of it were destroyed in a nuclear attack.

During the 1970s and 1980s, ARPANET expanded and the underlying protocols that govern internet communication were developed. However, it remained largely inaccessible to the general public. The real turning point came in 1991, when British scientist Tim Berners-Lee invented the World Wide Web — a system of interlinked documents that could be navigated using a browser. Suddenly, the internet became something that ordinary people could actually use.

Throughout the 1990s, commercial internet service providers emerged, home connections became affordable, and websites multiplied rapidly. By 2000, the internet had already begun to transform commerce, communication, and entertainment on a global scale. The early twenty-first century brought further revolutions: social media, smartphones, cloud computing, and streaming services all built upon the internet's foundation.

Today, the internet is so deeply woven into the fabric of daily life that it is difficult to imagine existing without it. Yet it remains a relatively young technology — barely fifty years old — and its full impact on society, politics, and human behaviour is still far from fully understood.

Perhaps most remarkably, the network that was originally designed to withstand nuclear war now carries cat videos, online shopping, and live global conversations without interruption.`,
    glossary: {
      'underpinning':  { fr: 'sous-tendant',    mg: 'manohana' },
      'decentralised': { fr: 'décentralisé',    mg: 'tsy ivon-toerana' },
      'protocols':     { fr: 'protocoles',      mg: 'fitsipika fifandraisana' },
      'interlinked':   { fr: 'interconnectés',  mg: 'mifandray' },
      'commerce':      { fr: 'commerce',        mg: 'varotra' },
      'network':       { fr: 'réseau',          mg: 'tambajotra' },
      'browser':       { fr: 'navigateur',      mg: 'fitaovam-pitadiavana' },
      'affordable':    { fr: 'abordable',       mg: 'mora vidiny' },
      'streaming':     { fr: 'streaming',       mg: 'fijery an-tserasera' },
      'invented':      { fr: 'inventé',         mg: 'noforonina' },
      'global':        { fr: 'mondial',         mg: 'eran-tany' },
    },
    questions: [
      { id: 'q1', type: 'mcq', question: 'What was the original purpose of ARPANET?', options: ['To provide internet access to schools', 'To allow military researchers to share data', 'To create a commercial network', 'To connect ordinary people globally'], correct: 1 },
      { id: 'q2', type: 'mcq', question: 'Why was the original network designed to be decentralised?', options: ['To make it cheaper', 'To allow more users', 'So it could survive a nuclear attack', 'To improve download speeds'], correct: 2 },
      { id: 'q3', type: 'mcq', question: 'Who invented the World Wide Web?', options: ['Bill Gates', 'Steve Jobs', 'Tim Berners-Lee', 'Mark Zuckerberg'], correct: 2 },
      { id: 'q4', type: 'mcq', question: 'When was the World Wide Web invented?', options: ['1969', '1983', '1991', '2000'], correct: 2 },
      { id: 'q5', type: 'tf', statement: 'The internet was originally created as a commercial project.', correct: false },
      { id: 'q6', type: 'tf', statement: 'The World Wide Web made the internet accessible to ordinary people.', correct: true },
      { id: 'q7', type: 'short', question: 'Name one technology of the early 21st century that was built on the internet.', keywords: ['social media', 'smartphones', 'cloud', 'streaming', 'smartphone'] },
      { id: 'q8', type: 'selfcheck', question: 'The text says the internet\'s "full impact on society, politics, and human behaviour is still far from fully understood." What do you think this means? Give examples to support your answer.', modelAnswer: 'It means we are still discovering how the internet is changing us. Examples could include: how social media affects mental health and democracy; how algorithms shape opinions; how online commerce has changed shopping habits; how remote communication is changing work. Strong answers will suggest specific areas still being debated or researched.' },
      { id: 'q9', type: 'selfcheck', question: 'The text ends with a contrast between the internet\'s origins (military survival tool) and its uses today. What effect does this contrast create, and what point do you think the author is making?', modelAnswer: 'The contrast is ironic and humorous: a system built to survive nuclear war now handles trivial entertainment. The author\'s point is likely that technology develops in unpredictable ways, and that its eventual uses often far exceed — or differ entirely from — the original intentions of its creators.' },
    ],
  },

]; // end READING_TEXTS
