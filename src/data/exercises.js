// Exercise types:
// fill-blank  → sentence with ___, user types missing word(s)
// translate   → French sentence, user types English translation
// word-order  → scrambled words array, user clicks to build sentence
// listening   → TTS plays audio text, user types what they hear
// error-correct → sentence with error, user types corrected version

export const exercises = {

  // ─── ROUTINE ────────────────────────────────────────────────────────────────
  routine: [
    {
      id: 'r01', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'Every morning, I ___ at 6 o\'clock.',
      verb: 'wake up', answer: 'wake up',
      hint: 'Routine → Present Simple. Avec "I" : pas de -s.',
      explanation: 'On utilise le Present Simple pour les routines. Avec "I", le verbe ne change pas.'
    },
    {
      id: 'r02', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je mange le petit-déjeuner à sept heures.',
      answer: 'I eat breakfast at seven o\'clock.',
      alternatives: ['I have breakfast at seven o\'clock.', 'I eat breakfast at 7.', 'I have breakfast at 7.'],
      hint: '"Manger le petit-déjeuner" = eat breakfast ou have breakfast',
      explanation: '"Eat breakfast" et "have breakfast" sont tous les deux corrects en anglais.'
    },
    {
      id: 'r03', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['I', 'go', 'to', 'school', 'every', 'day', '.'],
      answer: 'I go to school every day.',
      hint: 'Structure : Sujet + Verbe + Complément',
      explanation: 'En anglais, le verbe vient toujours juste après le sujet.'
    },
    {
      id: 'r04', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'She ___ her teeth twice a day.',
      verb: 'brush', answer: 'brushes',
      hint: 'She → 3ème personne → verbe + -es (brush → brushes)',
      explanation: 'Avec he/she/it, on ajoute -s ou -es au verbe. "brush" → "brushes".'
    },
    {
      id: 'r05', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Il se couche à dix heures du soir.',
      answer: 'He goes to bed at ten o\'clock.',
      alternatives: ['He goes to bed at 10.', 'He goes to bed at 10 pm.', 'He goes to bed at ten.'],
      hint: '"Se coucher" = go to bed. He → goes',
      explanation: '"Go to bed" = aller dormir. Avec "he", "go" devient "goes".'
    },
    {
      id: 'r06', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur dans la phrase.',
      sentence: 'She go to work by bus every morning.',
      answer: 'She goes to work by bus every morning.',
      hint: 'She → 3ème personne singulière → verbe + -s',
      explanation: 'Avec "she", on doit écrire "goes" et non "go".'
    },
    {
      id: 'r07', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I take a shower every morning.',
      answer: 'I take a shower every morning.',
      hint: 'Écoutez attentivement chaque mot.',
      explanation: '"Take a shower" = prendre une douche.'
    },
    {
      id: 'r08', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'My father ___ at seven and ___ home at six.',
      verb: 'start work / come back', answer: 'starts work, comes back',
      alternatives: ['starts work, gets home', 'starts, comes back', 'starts, gets home'],
      hint: 'He/She/It → verbe + -s',
      explanation: 'Deux actions habituelles avec "my father" (= he) : starts et comes back.'
    },
  ],

  // ─── FAMILY ─────────────────────────────────────────────────────────────────
  family: [
    {
      id: 'f01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mon père s\'appelle Paul.',
      answer: 'My father\'s name is Paul.',
      alternatives: ['My father is called Paul.', 'My dad\'s name is Paul.'],
      hint: '"S\'appeler" = to be called / name is',
      explanation: 'En anglais : "My father\'s name is Paul" ou "My father is called Paul".'
    },
    {
      id: 'f02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'Your father\'s mother is your ___.',
      answer: 'grandmother',
      alternatives: ['grandma', 'grand-mother'],
      hint: 'La mère de ton père = ?',
      explanation: 'La mère de ton père ou de ta mère s\'appelle "grandmother" (ou "grandma").'
    },
    {
      id: 'f03', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'J\'ai deux frères et une sœur.',
      answer: 'I have two brothers and one sister.',
      alternatives: ['I have two brothers and a sister.'],
      hint: '"Frère" = brother, "Sœur" = sister',
      explanation: '"Brothers" est le pluriel de "brother". "One" et "a" sont tous les deux corrects.'
    },
    {
      id: 'f04', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['My', 'sister', 'is', 'older', 'than', 'me', '.'],
      answer: 'My sister is older than me.',
      hint: 'Comparatif : older than = plus âgée que',
      explanation: 'Pour comparer, on utilise : adjectif + -er + than. "old" → "older than".'
    },
    {
      id: 'f05', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'My parents has three children.',
      answer: 'My parents have three children.',
      hint: '"My parents" = pluriel → "have" et non "has"',
      explanation: '"Has" s\'utilise avec he/she/it. "My parents" est pluriel, donc on utilise "have".'
    },
    {
      id: 'f06', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mes grands-parents habitent au village.',
      answer: 'My grandparents live in the village.',
      alternatives: ['My grandparents live in the village.', 'My grandparents stay in the village.'],
      hint: '"Habiter" = live in / stay in',
      explanation: '"Live in" est le verbe le plus courant pour "habiter".'
    },
    {
      id: 'f07', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I live with my mother and my father.',
      answer: 'I live with my mother and my father.',
      hint: 'Ecoutez bien les mots de la famille.',
      explanation: '"Live with" = habiter avec.'
    },
    {
      id: 'f08', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'My mother\'s brother is my ___.',
      answer: 'uncle',
      hint: 'Le frère de ta mère = ?',
      explanation: 'Le frère de ta mère ou de ton père s\'appelle "uncle".'
    },
  ],

  // ─── SCHOOL ─────────────────────────────────────────────────────────────────
  school: [
    {
      id: 's01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mon livre est sur la table.',
      answer: 'My book is on the table.',
      alternatives: ['The book is on the table.'],
      hint: '"Sur" = on, "table" = table',
      explanation: 'La préposition "sur" se traduit par "on" en anglais.'
    },
    {
      id: 's02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'The person who teaches in a school is a ___.',
      answer: 'teacher',
      hint: 'Celui qui enseigne = ?',
      explanation: '"Teacher" = enseignant(e). "Teach" est le verbe, "teacher" est la personne.'
    },
    {
      id: 's03', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['I', 'study', 'English', 'at', 'school', '.'],
      answer: 'I study English at school.',
      hint: 'Sujet + Verbe + Objet + Lieu',
      explanation: 'L\'ordre habituel en anglais : Sujet → Verbe → Objet → Lieu.'
    },
    {
      id: 's04', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Quand est-ce que l\'école commence ?',
      answer: 'When does school start?',
      alternatives: ['When does school begin?'],
      hint: 'Question avec "does" : Does school start...?',
      explanation: 'Pour une question au Present Simple, on utilise "does" avec he/she/it/school.'
    },
    {
      id: 's05', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I doesn\'t have a pencil.',
      answer: 'I don\'t have a pencil.',
      hint: '"I" → don\'t (pas doesn\'t)',
      explanation: '"Doesn\'t" s\'utilise avec he/she/it. Avec "I", on utilise "don\'t".'
    },
    {
      id: 's06', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'A place full of books where you can study quietly is a ___.',
      answer: 'library',
      alternatives: ['the library'],
      hint: 'Un endroit avec beaucoup de livres = ?',
      explanation: '"Library" = bibliothèque. Ne pas confondre avec "bookshop" (librairie).'
    },
    {
      id: 's07', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Mon ami s\'appelle Jean.',
      answer: 'My friend\'s name is Jean.',
      alternatives: ['My friend is called Jean.'],
      hint: '"S\'appeler" = name is / is called',
      explanation: '"My friend\'s name is" utilise le génitif saxo (\'s) pour montrer la possession.'
    },
    {
      id: 's08', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'We have five lessons every day.',
      answer: 'We have five lessons every day.',
      hint: 'Combien de cours par jour ?',
      explanation: '"Lessons" = cours. "Every day" = tous les jours.'
    },
  ],

  // ─── BODY ───────────────────────────────────────────────────────────────────
  body: [
    {
      id: 'b01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'J\'ai mal à la tête.',
      answer: 'I have a headache.',
      alternatives: ['My head hurts.', 'I have a head ache.'],
      hint: '"Avoir mal à la tête" = have a headache',
      explanation: '"Headache" est un seul mot qui signifie "mal de tête". "Have a headache" = avoir mal à la tête.'
    },
    {
      id: 'b02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'We have ten fingers and ten ___.',
      answer: 'toes',
      hint: 'Les doigts de pieds = ?',
      explanation: '"Fingers" = doigts de main. "Toes" = doigts de pied.'
    },
    {
      id: 'b03', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Ses yeux sont marrons.',
      answer: 'His eyes are brown.',
      alternatives: ['Her eyes are brown.'],
      hint: '"Yeux" = eyes (pluriel de "eye"), "marrons" = brown',
      explanation: '"Eyes" est le pluriel de "eye". "His" pour un homme, "her" pour une femme.'
    },
    {
      id: 'b04', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['We', 'have', 'two', 'eyes', 'and', 'two', 'ears', '.'],
      answer: 'We have two eyes and two ears.',
      hint: 'Sujet + have + nombre + partie du corps',
      explanation: 'Simple présentation du corps humain avec "have" (avoir).'
    },
    {
      id: 'b05', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'She hurts her foots.',
      answer: 'She hurts her feet.',
      hint: '"Foot" est un pluriel irrégulier',
      explanation: '"Foot" → pluriel = "feet" (irrégulier). Pas "foots"!'
    },
    {
      id: 'b06', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je me lave les mains avant de manger.',
      answer: 'I wash my hands before eating.',
      alternatives: ['I wash my hands before I eat.'],
      hint: '"Se laver les mains" = wash hands',
      explanation: '"Wash my hands" = se laver les mains. "Before eating" ou "before I eat".'
    },
    {
      id: 'b07', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'You use your ___ to see and your ___ to hear.',
      answer: 'eyes, ears',
      hint: 'Voir = eyes, Entendre = ears',
      explanation: '"Eyes" = yeux, "ears" = oreilles.'
    },
    {
      id: 'b08', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'He is tall and has short black hair.',
      answer: 'He is tall and has short black hair.',
      hint: 'Description physique : taille et cheveux.',
      explanation: '"Tall" = grand, "short" = court, "hair" = cheveux.'
    },
  ],

  // ─── TIME ────────────────────────────────────────────────────────────────────
  time: [
    {
      id: 't01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Il est trois heures et demie.',
      answer: 'It is half past three.',
      alternatives: ['It\'s half past three.', 'It is three thirty.', 'It\'s three thirty.'],
      hint: '"Et demie" = half past, "trois heures" = three',
      explanation: '"Half past three" = 3h30. On peut aussi dire "three thirty".'
    },
    {
      id: 't02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne préposition.',
      template: 'School starts ___ 7:30 in the morning.',
      answer: 'at',
      hint: 'Pour une heure précise, on utilise "at"',
      explanation: 'On utilise "at" devant une heure précise : at 7:30, at noon, at midnight.'
    },
    {
      id: 't03', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Quelle heure est-il ?',
      answer: 'What time is it?',
      alternatives: ['What\'s the time?'],
      hint: '"Quelle heure" = What time, "est-il" = is it',
      explanation: '"What time is it?" ou "What\'s the time?" sont tous deux corrects.'
    },
    {
      id: 't04', type: 'error-correct', level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I wake up in 6 o\'clock.',
      answer: 'I wake up at 6 o\'clock.',
      hint: 'Pour une heure précise : "at" ou "in" ?',
      explanation: 'On utilise "at" pour les heures précises, jamais "in". "At 6 o\'clock".'
    },
    {
      id: 't05', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'There are ___ days in a week.',
      answer: 'seven',
      alternatives: ['7'],
      hint: 'Lundi, mardi, mercredi... combien ?',
      explanation: 'Il y a 7 jours dans une semaine : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'
    },
    {
      id: 't06', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Le lundi, j\'ai cours de mathématiques.',
      answer: 'On Mondays, I have a mathematics class.',
      alternatives: ['On Monday, I have maths.', 'On Mondays, I have maths.', 'On Monday I have a maths class.'],
      hint: '"Le lundi" (habitude) = on Mondays (avec -s)',
      explanation: '"On Mondays" (pluriel) exprime une habitude hebdomadaire. "On Monday" est aussi accepté.'
    },
    {
      id: 't07', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'The train arrives at quarter past ten.',
      answer: 'The train arrives at quarter past ten.',
      hint: '"Quarter past" = et quart',
      explanation: '"Quarter past ten" = 10h15. "Quarter to ten" = 9h45.'
    },
    {
      id: 't08', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['was', 'I', 'born', 'in', 'January', '.'],
      answer: 'I was born in January.',
      hint: 'Pour les mois, on utilise "in"',
      explanation: 'On utilise "in" pour les mois et les années : in January, in 2005.'
    },
  ],

  // ─── VERBS ───────────────────────────────────────────────────────────────────
  verbs: [
    {
      id: 'v01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je parle français et malgache.',
      answer: 'I speak French and Malagasy.',
      hint: '"Parler" = speak',
      explanation: '"Speak" = parler une langue. On dit "speak French", pas "speak the French".'
    },
    {
      id: 'v02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'She ___ animals very much.',
      verb: 'love', answer: 'loves',
      hint: 'She → verbe + -s',
      explanation: 'Avec "she", on ajoute -s : "love" → "loves".'
    },
    {
      id: 'v03', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Nous mangeons du riz tous les jours.',
      answer: 'We eat rice every day.',
      alternatives: ['We eat rice everyday.'],
      hint: '"Manger" = eat, "riz" = rice',
      explanation: '"Eat rice" = manger du riz. Pas d\'article devant "rice" en anglais.'
    },
    {
      id: 'v04', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He don\'t work on Sundays.',
      answer: 'He doesn\'t work on Sundays.',
      hint: 'He → doesn\'t (pas don\'t)',
      explanation: 'La forme négative de "he" est "he doesn\'t", jamais "he don\'t".'
    },
    {
      id: 'v05', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['Can', 'you', 'speak', 'English', '?'],
      answer: 'Can you speak English?',
      hint: 'Question avec "can" : Can + sujet + verbe',
      explanation: 'Pour les questions avec "can", on met "can" en premier : Can you...?'
    },
    {
      id: 'v06', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Je comprends un peu l\'anglais.',
      answer: 'I understand a little English.',
      alternatives: ['I understand English a little.', 'I understand a bit of English.'],
      hint: '"Comprendre" = understand, "un peu" = a little',
      explanation: '"Understand" est un verbe irrégulier mais au Present Simple il est régulier.'
    },
    {
      id: 'v07', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la bonne forme négative.',
      template: 'She ___ coffee.',
      verb: 'not like', answer: 'doesn\'t like',
      alternatives: ['does not like'],
      hint: 'She → doesn\'t + verbe infinitif',
      explanation: 'Forme négative avec she/he/it : doesn\'t + verbe (sans -s).'
    },
    {
      id: 'v08', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'They play football and swim every week.',
      answer: 'They play football and swim every week.',
      hint: 'Deux activités sportives.',
      explanation: '"Play football" = jouer au foot, "swim" = nager.'
    },
  ],

  // ─── TIME ADVERBS ────────────────────────────────────────────────────────────
  timeAdverbs: [
    {
      id: 'ta01', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Je vais toujours à l\'école à pied.',
      answer: 'I always walk to school.',
      alternatives: ['I always go to school on foot.'],
      hint: '"Toujours" = always. Place de l\'adverbe : avant le verbe principal.',
      explanation: 'Les adverbes de fréquence se placent avant le verbe principal : I always walk...'
    },
    {
      id: 'ta02', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec le bon adverbe.',
      template: 'She ___ eats meat. She is vegetarian.',
      answer: 'never',
      hint: '0% du temps = ?',
      explanation: '"Never" = jamais. Fréquence 0%. Se place avant le verbe principal.'
    },
    {
      id: 'ta03', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur (position de l\'adverbe).',
      sentence: 'I go sometimes to the market.',
      answer: 'I sometimes go to the market.',
      alternatives: ['Sometimes I go to the market.'],
      hint: 'L\'adverbe de fréquence se place avant le verbe principal',
      explanation: 'L\'adverbe "sometimes" se place avant le verbe : "I sometimes go", ou au début : "Sometimes I go".'
    },
    {
      id: 'ta04', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['She', 'is', 'often', 'late', '.'],
      answer: 'She is often late.',
      hint: 'Avec le verbe "to be", l\'adverbe vient APRÈS',
      explanation: 'Avec le verbe "to be", l\'adverbe de fréquence se place après : She is often late.'
    },
    {
      id: 'ta05', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Il vient rarement ici.',
      answer: 'He rarely comes here.',
      alternatives: ['He seldom comes here.'],
      hint: '"Rarement" = rarely ou seldom',
      explanation: '"Rarely" et "seldom" signifient tous les deux "rarement". "Rarely" est plus courant.'
    },
    {
      id: 'ta06', type: 'fill-blank', level: 'A2',
      instruction: 'Choisissez le bon adverbe.',
      template: 'She is ___ tired after work. She works twelve hours a day!',
      answer: 'always',
      alternatives: ['often'],
      hint: '12 heures de travail par jour → quelle fréquence ?',
      explanation: '"Always" = 100% du temps. C\'est logique après 12h de travail chaque jour.'
    },
    {
      id: 'ta07', type: 'listening', level: 'A2',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I have already finished my homework.',
      answer: 'I have already finished my homework.',
      hint: '"Already" = déjà',
      explanation: '"Already" = déjà. Se place entre "have" et le participe passé.'
    },
    {
      id: 'ta08', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Ils ne jouent presque jamais dehors.',
      answer: 'They hardly ever play outside.',
      alternatives: ['They almost never play outside.', 'They rarely play outside.'],
      hint: '"Presque jamais" = hardly ever ou almost never',
      explanation: '"Hardly ever" et "almost never" signifient "presque jamais". Très utiles!'
    },
  ],

  // ─── PRESENT SIMPLE ──────────────────────────────────────────────────────────
  presentSimple: [
    {
      id: 'ps01', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'She ___ to the market every Sunday.',
      verb: 'go', answer: 'goes',
      hint: 'She → go + -es (car "go" finit en -o)',
      explanation: 'Avec she/he/it : go → goes, do → does, watch → watches.'
    },
    {
      id: 'ps02', type: 'error-correct', level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He don\'t like bananas.',
      answer: 'He doesn\'t like bananas.',
      hint: 'Négatif avec he : doesn\'t (pas don\'t)',
      explanation: 'Forme négative : I/you/we/they + don\'t. He/she/it + doesn\'t.'
    },
    {
      id: 'ps03', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Est-ce qu\'il habite à Antananarivo ?',
      answer: 'Does he live in Antananarivo?',
      hint: 'Question avec he → Does he...?',
      explanation: 'Question au Present Simple avec he/she/it : Does + sujet + verbe (infinitif)?'
    },
    {
      id: 'ps04', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne forme du verbe.',
      template: 'Water ___ at 100 degrees Celsius.',
      verb: 'boil', answer: 'boils',
      hint: 'Vérité générale scientifique → Present Simple. Water = it',
      explanation: 'Le Present Simple exprime les vérités générales. "Water boils" = l\'eau bout.'
    },
    {
      id: 'ps05', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['He', 'plays', 'football', 'every', 'Saturday', '.'],
      answer: 'He plays football every Saturday.',
      hint: 'Sujet + verbe + objet + temps',
      explanation: 'Ordre standard : He plays (quoi ?) football (quand ?) every Saturday.'
    },
    {
      id: 'ps06', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'They doesn\'t know the answer.',
      answer: 'They don\'t know the answer.',
      hint: '"They" est pluriel → don\'t (pas doesn\'t)',
      explanation: '"Doesn\'t" s\'utilise seulement avec he/she/it. Avec "they" : don\'t.'
    },
    {
      id: 'ps07', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Elle ne travaille pas le dimanche.',
      answer: 'She doesn\'t work on Sundays.',
      alternatives: ['She does not work on Sundays.', 'She doesn\'t work on Sunday.'],
      hint: 'Négatif avec she : doesn\'t + verbe',
      explanation: '"She doesn\'t work" = elle ne travaille pas. "On Sundays" = le dimanche (habitude).'
    },
    {
      id: 'ps08', type: 'listening', level: 'A2',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'My brother doesn\'t study very much.',
      answer: 'My brother doesn\'t study very much.',
      hint: 'Forme négative avec he/she/it',
      explanation: '"Doesn\'t study" = ne étudie pas. "Very much" = beaucoup.'
    },
  ],

  // ─── PRESENT CONTINUOUS ──────────────────────────────────────────────────────
  presentContinuous: [
    {
      id: 'pc01', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la forme correcte (Present Continuous).',
      template: 'Look! It ___ outside.',
      verb: 'rain', answer: 'is raining',
      hint: 'Action en cours maintenant → be + verbe-ing',
      explanation: 'Present Continuous = be (am/is/are) + verbe-ing. "It is raining" = il pleut maintenant.'
    },
    {
      id: 'pc02', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Elle est en train de lire un livre.',
      answer: 'She is reading a book.',
      alternatives: ['She\'s reading a book.'],
      hint: '"Être en train de" = Present Continuous',
      explanation: '"She is reading" = she\'s reading. Le Present Continuous traduit "être en train de".'
    },
    {
      id: 'pc03', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I am study English right now.',
      answer: 'I am studying English right now.',
      hint: 'be + verbe-ing (pas verbe seul)',
      explanation: 'Present Continuous : am/is/are + verbe + -ing. "study" → "studying".'
    },
    {
      id: 'pc04', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['The', 'children', 'are', 'playing', 'in', 'the', 'garden', '.'],
      answer: 'The children are playing in the garden.',
      hint: 'Sujet + are + verbe-ing + lieu',
      explanation: 'Avec "the children" (pluriel), on utilise "are" : are playing.'
    },
    {
      id: 'pc05', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez la question.',
      template: 'What are you ___ right now?',
      verb: 'do', answer: 'doing',
      hint: 'do + -ing = ?',
      explanation: '"What are you doing?" = Qu\'est-ce que tu fais en ce moment ?'
    },
    {
      id: 'pc06', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Ils ne travaillent pas en ce moment.',
      answer: 'They are not working right now.',
      alternatives: ['They aren\'t working right now.', 'They are not working now.', 'They aren\'t working now.'],
      hint: 'Négatif : be + not + verbe-ing',
      explanation: 'Forme négative : They are not working = They aren\'t working.'
    },
    {
      id: 'pc07', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He is eat a mango.',
      answer: 'He is eating a mango.',
      hint: 'be + verbe + -ing',
      explanation: '"Eat" doit prendre la forme -ing : "eating". He is eating a mango.'
    },
    {
      id: 'pc08', type: 'listening', level: 'A2',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'She is not sleeping. She is doing her homework.',
      answer: 'She is not sleeping. She is doing her homework.',
      hint: 'Deux actions au Present Continuous.',
      explanation: '"Is not sleeping" (forme négative) et "is doing" (forme affirmative).'
    },
  ],

  // ─── PAST SIMPLE ─────────────────────────────────────────────────────────────
  pastSimple: [
    {
      id: 'past01', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la forme correcte du Past Simple.',
      template: 'Yesterday, I ___ to school by bus.',
      verb: 'go', answer: 'went',
      hint: '"go" est irrégulier au passé',
      explanation: '"Go" → Past Simple = "went" (irrégulier). Apprenez les verbes irréguliers!'
    },
    {
      id: 'past02', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Elle est arrivée en retard hier.',
      answer: 'She arrived late yesterday.',
      alternatives: ['She was late yesterday.'],
      hint: '"Arriver" = arrive → arrived (régulier : + d)',
      explanation: '"Arrive" est régulier : arrived. "Yesterday" = hier. Vient à la fin.'
    },
    {
      id: 'past03', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He didn\'t went to the party.',
      answer: 'He didn\'t go to the party.',
      hint: 'Après "didn\'t", verbe à l\'infinitif (sans -ed ni forme irrégulière)',
      explanation: 'Avec "didn\'t", le verbe reste à l\'infinitif : didn\'t go (pas didn\'t went).'
    },
    {
      id: 'past04', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['They', 'watched', 'television', 'last', 'night', '.'],
      answer: 'They watched television last night.',
      hint: 'Sujet + verbe passé + objet + temps',
      explanation: '"Watched" = Past Simple de "watch" (régulier : + -ed). "Last night" = hier soir.'
    },
    {
      id: 'past05', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la forme négative du Past Simple.',
      template: 'We ___ electricity last week.',
      verb: 'not have', answer: 'didn\'t have',
      alternatives: ['did not have'],
      hint: 'Négatif passé : didn\'t + infinitif',
      explanation: 'Forme négative au Past Simple : didn\'t + verbe (infinitif). Pour tout sujet.'
    },
    {
      id: 'past06', type: 'translate', level: 'B1',
      instruction: 'Traduisez en anglais.',
      french: 'As-tu mangé ce matin ?',
      answer: 'Did you eat this morning?',
      alternatives: ['Did you have breakfast this morning?'],
      hint: 'Question au Past Simple : Did + sujet + infinitif?',
      explanation: 'Question au Past Simple : Did + sujet + verbe (infinitif) ? "Did you eat?"'
    },
    {
      id: 'past07', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec la bonne forme du verbe "be" au passé.',
      template: 'She ___ born in 2005.',
      verb: 'be', answer: 'was',
      hint: 'She → was (pas were)',
      explanation: 'Past Simple de "be" : I/he/she/it → was. You/we/they → were.'
    },
    {
      id: 'past08', type: 'error-correct', level: 'B1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I buyed a new pen yesterday.',
      answer: 'I bought a new pen yesterday.',
      hint: '"Buy" est un verbe irrégulier',
      explanation: '"Buy" → Past Simple = "bought" (irrégulier). Pas "buyed"!'
    },
  ],

  // ─── FOOD ────────────────────────────────────────────────────────────────────
  food: [
    {
      id: 'fd01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'J\'aime les bananes.',
      answer: 'I like bananas.',
      alternatives: ['I love bananas.'],
      hint: '"Aimer" = like. Pluriel de banana = bananas',
      explanation: '"I like" + pluriel pour exprimer un goût général.'
    },
    {
      id: 'fd02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon mot.',
      template: 'I drink ___ every morning.',
      answer: 'milk',
      alternatives: ['water', 'tea', 'coffee'],
      hint: 'Une boisson du petit-déjeuner',
      explanation: '"Milk" (lait), "water" (eau), "tea" (thé), "coffee" (café) sont tous valides.'
    },
    {
      id: 'fd03', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Nous mangeons du riz et du poulet.',
      answer: 'We eat rice and chicken.',
      hint: '"Riz" = rice, "poulet" = chicken',
      explanation: 'Pas d\'article devant "rice" et "chicken" en général.'
    },
    {
      id: 'fd04', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['She', 'wants', 'a', 'glass', 'of', 'water', '.'],
      answer: 'She wants a glass of water.',
      hint: 'Sujet + verbe + article + nom + of + nom',
      explanation: '"A glass of water" = un verre d\'eau.'
    },
    {
      id: 'fd05', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'I eat a rice every day.',
      answer: 'I eat rice every day.',
      hint: 'Rice est non-dénombrable → pas d\'article "a"',
      explanation: '"Rice" est indénombrable : pas de "a/an" devant. Juste "rice".'
    },
    {
      id: 'fd06', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne quantité.',
      template: 'How ___ bread do you want?',
      answer: 'much',
      hint: '"Bread" est indénombrable → how much/many ?',
      explanation: '"How much" pour indénombrables (bread, water, rice). "How many" pour dénombrables.'
    },
    {
      id: 'fd07', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I would like some fish and vegetables.',
      answer: 'I would like some fish and vegetables.',
      hint: 'Une commande au restaurant.',
      explanation: '"I would like" = je voudrais (poli). "Fish" = poisson, "vegetables" = légumes.'
    },
    {
      id: 'fd08', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Mon plat préféré est le poulet avec du riz.',
      answer: 'My favourite dish is chicken with rice.',
      alternatives: ['My favorite dish is chicken with rice.', 'My favourite meal is chicken with rice.'],
      hint: '"Plat préféré" = favourite dish. "Avec" = with',
      explanation: '"Favourite" (UK) ou "favorite" (US). "Dish" = plat.'
    },
  ],

  // ─── COLORS ──────────────────────────────────────────────────────────────────
  colors: [
    {
      id: 'c01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Le ciel est bleu.',
      answer: 'The sky is blue.',
      hint: '"Ciel" = sky, "bleu" = blue',
      explanation: 'L\'adjectif de couleur se place APRÈS "is/are" (sky is blue).'
    },
    {
      id: 'c02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne couleur.',
      template: 'Grass is ___.',
      answer: 'green',
      hint: 'De quelle couleur est l\'herbe ?',
      explanation: '"Green" = vert. L\'herbe est verte.'
    },
    {
      id: 'c03', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['She', 'has', 'a', 'red', 'bag', '.'],
      answer: 'She has a red bag.',
      hint: 'En anglais, la couleur va AVANT le nom',
      explanation: 'Ordre : sujet + verbe + article + couleur + nom. "A red bag" (pas "a bag red").'
    },
    {
      id: 'c04', type: 'error-correct', level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'He has a car blue.',
      answer: 'He has a blue car.',
      hint: 'La couleur se place AVANT le nom en anglais',
      explanation: 'En anglais : a + couleur + nom. "A blue car" (pas "a car blue").'
    },
    {
      id: 'c05', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Mes cheveux sont noirs.',
      answer: 'My hair is black.',
      hint: '"Hair" (cheveux) est SINGULIER en anglais',
      explanation: 'En anglais, "hair" est toujours singulier : "my hair IS" (pas "are").'
    },
    {
      id: 'c06', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I like the yellow and white flowers.',
      answer: 'I like the yellow and white flowers.',
      hint: 'Deux couleurs et un pluriel.',
      explanation: '"Yellow" = jaune, "white" = blanc, "flowers" = fleurs.'
    },
    {
      id: 'c07', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec la bonne couleur.',
      template: 'The Malagasy flag is red, green, and ___.',
      answer: 'white',
      hint: 'Drapeau malgache : quelles couleurs ?',
      explanation: 'Le drapeau de Madagascar : blanc (white), rouge (red), vert (green).'
    },
    {
      id: 'c08', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Sa voiture n\'est pas noire, elle est grise.',
      answer: 'His car is not black, it is grey.',
      alternatives: ['Her car is not black, it is grey.', 'His car isn\'t black, it\'s gray.', 'Her car isn\'t black, it\'s grey.'],
      hint: '"Grise" = grey (UK) / gray (US)',
      explanation: 'Forme négative + affirmative. "Grey" (UK) ou "gray" (US) sont tous deux corrects.'
    },
  ],

  // ─── NUMBERS ─────────────────────────────────────────────────────────────────
  numbers: [
    {
      id: 'n01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais (écrivez le nombre en lettres).',
      french: 'J\'ai quinze ans.',
      answer: 'I am fifteen years old.',
      alternatives: ['I\'m fifteen years old.', 'I am 15 years old.', 'I\'m 15 years old.'],
      hint: '15 = fifteen',
      explanation: '"I am ___ years old" pour l\'âge. 15 s\'écrit "fifteen".'
    },
    {
      id: 'n02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon nombre.',
      template: 'There are ___ months in a year.',
      answer: 'twelve',
      alternatives: ['12'],
      hint: 'Combien de mois dans une année ?',
      explanation: '12 mois = twelve months.'
    },
    {
      id: 'n03', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['I', 'have', 'three', 'books', 'and', 'two', 'pens', '.'],
      answer: 'I have three books and two pens.',
      hint: 'Nombre + nom pluriel',
      explanation: 'Après un nombre > 1, le nom est AU PLURIEL : "three books".'
    },
    {
      id: 'n04', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Il y a vingt étudiants dans la classe.',
      answer: 'There are twenty students in the class.',
      hint: '"Il y a" (pluriel) = there are. 20 = twenty.',
      explanation: 'There are (pluriel). 20 students = twenty students.'
    },
    {
      id: 'n05', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'She has five brother.',
      answer: 'She has five brothers.',
      hint: 'Après un chiffre > 1, pluriel',
      explanation: 'Avec un nombre > 1, le nom prend un "s" : "five brothers".'
    },
    {
      id: 'n06', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez le nombre en lettres.',
      audio: 'My phone number is zero seven eight.',
      answer: 'My phone number is zero seven eight.',
      hint: 'Trois chiffres : 0-7-8',
      explanation: '"Zero seven eight" = 078. En anglais, on dit souvent chaque chiffre séparément.'
    },
    {
      id: 'n07', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec le bon nombre ordinal.',
      template: 'Monday is the ___ day of the week.',
      answer: 'first',
      hint: '1er = first',
      explanation: 'Nombres ordinaux : first (1er), second (2e), third (3e), fourth (4e)...'
    },
    {
      id: 'n08', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Mon anniversaire est le vingt-cinq décembre.',
      answer: 'My birthday is on the twenty-fifth of December.',
      alternatives: ['My birthday is December 25th.', 'My birthday is on December the twenty-fifth.'],
      hint: '25e = twenty-fifth. Pour les dates : the + ordinal + of + mois',
      explanation: 'Dates en UK : "the 25th of December". Dates en US : "December 25th".'
    },
  ],

  // ─── ADJECTIVES ──────────────────────────────────────────────────────────────
  adjectives: [
    {
      id: 'a01', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Elle est belle et intelligente.',
      answer: 'She is beautiful and intelligent.',
      alternatives: ['She\'s beautiful and intelligent.', 'She is pretty and smart.'],
      hint: '"Belle" = beautiful / pretty. "Intelligente" = intelligent / smart',
      explanation: 'Les adjectifs en anglais ne changent jamais (beautiful pour masculin et féminin).'
    },
    {
      id: 'a02', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le contraire.',
      template: 'The opposite of "big" is ___.',
      answer: 'small',
      alternatives: ['little'],
      hint: 'Contraire de "grand" ?',
      explanation: '"Small" ou "little" = petit. Contraire de "big" (grand).'
    },
    {
      id: 'a03', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['He', 'is', 'a', 'tall', 'young', 'man', '.'],
      answer: 'He is a tall young man.',
      hint: 'Ordre : taille + âge + nom',
      explanation: 'Ordre des adjectifs : opinion → taille → âge → couleur → nom. "Tall young man".'
    },
    {
      id: 'a04', type: 'error-correct', level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'She has eyes blue.',
      answer: 'She has blue eyes.',
      hint: 'Adjectif AVANT le nom en anglais',
      explanation: 'En anglais : adjectif + nom. "Blue eyes" (pas "eyes blue").'
    },
    {
      id: 'a05', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Cette maison est vieille mais confortable.',
      answer: 'This house is old but comfortable.',
      hint: '"Vieille" = old. "Confortable" = comfortable',
      explanation: 'Les adjectifs "old" et "comfortable" ne changent pas selon le genre.'
    },
    {
      id: 'a06', type: 'listening', level: 'A2',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'My little brother is very funny and clever.',
      answer: 'My little brother is very funny and clever.',
      hint: 'Deux adjectifs : "drôle" et "intelligent".',
      explanation: '"Funny" = drôle. "Clever" = intelligent / malin.'
    },
    {
      id: 'a07', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec le comparatif.',
      template: 'My brother is ___ (tall) than me.',
      answer: 'taller',
      hint: 'tall + -er = ?',
      explanation: 'Comparatif des adjectifs courts : + "-er". "Tall" → "taller".'
    },
    {
      id: 'a08', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Il est le plus rapide de la classe.',
      answer: 'He is the fastest in the class.',
      alternatives: ['He\'s the fastest in the class.'],
      hint: 'Superlatif : the + adjectif + -est',
      explanation: '"The fastest" = le plus rapide. Pour superlatif court : "the" + adj + "-est".'
    },
  ],

  // ─── PRONOUNS ────────────────────────────────────────────────────────────────
  pronouns: [
    {
      id: 'pr01', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon pronom sujet.',
      template: '___ is my teacher. (la prof femme)',
      answer: 'She',
      hint: 'Une femme = ?',
      explanation: '"She" pour une femme, "he" pour un homme, "it" pour un objet.'
    },
    {
      id: 'pr02', type: 'translate', level: 'A1',
      instruction: 'Traduisez en anglais.',
      french: 'Elle m\'aime.',
      answer: 'She loves me.',
      hint: '"Me" = moi (pronom objet)',
      explanation: 'Pronom objet : me (moi), you (toi), him (lui), her (elle), it, us, them.'
    },
    {
      id: 'pr03', type: 'error-correct', level: 'A1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'Me like chocolate.',
      answer: 'I like chocolate.',
      hint: 'Sujet = I (pas "me")',
      explanation: '"I" est un pronom SUJET. "Me" est un pronom OBJET. Sujet → I like.'
    },
    {
      id: 'pr04', type: 'fill-blank', level: 'A1',
      instruction: 'Complétez avec le bon adjectif possessif.',
      template: 'Tom and Mary love ___ children.',
      answer: 'their',
      hint: 'À eux = ?',
      explanation: '"Their" = leur(s). Appartient à "they" (eux).'
    },
    {
      id: 'pr05', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Ce livre est à moi.',
      answer: 'This book is mine.',
      alternatives: ['This is my book.'],
      hint: 'Pronom possessif "à moi" = mine',
      explanation: '"Mine" = le mien / à moi. Pronom possessif (pas d\'article ni de nom après).'
    },
    {
      id: 'pr06', type: 'word-order', level: 'A1',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['We', 'see', 'them', 'every', 'day', '.'],
      answer: 'We see them every day.',
      hint: 'Sujet + verbe + objet + temps',
      explanation: '"Them" est pronom objet (les). "We see them" = on les voit.'
    },
    {
      id: 'pr07', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'This is her\'s book.',
      answer: 'This is her book.',
      alternatives: ['This book is hers.'],
      hint: '"Her" est déjà possessif',
      explanation: '"Her" (son/sa) est déjà possessif. Pas d\'apostrophe-s. Le pronom seul est "hers".'
    },
    {
      id: 'pr08', type: 'listening', level: 'A1',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'She gives him a new pen.',
      answer: 'She gives him a new pen.',
      hint: 'Deux pronoms : she et him.',
      explanation: '"She" (sujet), "him" (objet, à lui). "Give someone something" = donner qqch à qqn.'
    },
  ],

  // ─── FUTURE SIMPLE ───────────────────────────────────────────────────────────
  futureSimple: [
    {
      id: 'fut01', type: 'fill-blank', level: 'A2',
      instruction: 'Complétez avec "will" + verbe.',
      template: 'Tomorrow, I ___ my grandmother.',
      verb: 'visit', answer: 'will visit',
      hint: 'Futur simple : will + verbe infinitif',
      explanation: 'Future Simple : will + verbe (infinitif). Même forme pour tous les sujets.'
    },
    {
      id: 'fut02', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Il va pleuvoir demain.',
      answer: 'It will rain tomorrow.',
      alternatives: ['It is going to rain tomorrow.', 'It\'ll rain tomorrow.'],
      hint: '"Aller + infinitif" peut se traduire par "will" ou "be going to"',
      explanation: '"Will rain" et "is going to rain" sont tous les deux corrects pour une prédiction.'
    },
    {
      id: 'fut03', type: 'error-correct', level: 'A2',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'She will goes to the hospital tomorrow.',
      answer: 'She will go to the hospital tomorrow.',
      hint: 'Après "will", toujours l\'infinitif (sans -s)',
      explanation: 'Après "will", le verbe reste à l\'infinitif : will go (jamais will goes).'
    },
    {
      id: 'fut04', type: 'word-order', level: 'A2',
      instruction: 'Mettez les mots dans le bon ordre.',
      words: ['He', 'will', 'be', 'a', 'doctor', 'one', 'day', '.'],
      answer: 'He will be a doctor one day.',
      hint: 'Sujet + will + be + attribut + temps',
      explanation: '"Will be" = sera. "One day" = un jour. Rêve ou ambition future.'
    },
    {
      id: 'fut05', type: 'translate', level: 'A2',
      instruction: 'Traduisez en anglais.',
      french: 'Je ne serai pas à l\'école demain.',
      answer: 'I will not be at school tomorrow.',
      alternatives: ['I won\'t be at school tomorrow.'],
      hint: 'Négatif : will not (won\'t) + infinitif',
      explanation: '"Will not" = "won\'t". "I won\'t be at school" = je ne serai pas à l\'école.'
    },
    {
      id: 'fut06', type: 'fill-blank', level: 'B1',
      instruction: 'Complétez avec "will" ou "won\'t" + verbe.',
      template: 'If it rains, we ___ at home.',
      verb: 'stay', answer: 'will stay',
      hint: 'Condition → résultat futur : If..., will...',
      explanation: 'Structure conditionnelle : If + Present Simple, + will + verbe. Classique!'
    },
    {
      id: 'fut07', type: 'error-correct', level: 'B1',
      instruction: 'Trouvez et corrigez l\'erreur.',
      sentence: 'Will she comes to the party?',
      answer: 'Will she come to the party?',
      hint: 'Question avec will : Will + sujet + infinitif?',
      explanation: 'Question au Future Simple : Will + sujet + verbe (infinitif) ? Pas "comes".'
    },
    {
      id: 'fut08', type: 'listening', level: 'A2',
      instruction: 'Écoutez et écrivez ce que vous entendez.',
      audio: 'I think she will pass her exam.',
      answer: 'I think she will pass her exam.',
      hint: '"I think" = je pense. Opinion sur le futur.',
      explanation: '"I think + will" = prédiction personnelle. "Pass an exam" = réussir un examen.'
    },
  ],
};

// ─── LEVEL ASSESSMENT EXERCISES ─────────────────────────────────────────────
export const assessmentExercises = [
  // A1
  { id: 'as01', type: 'fill-blank', level: 'A1', instruction: 'Complétez.', template: 'I ___ a student.', verb: 'be', answer: 'am', hint: '"I" + be = ?', explanation: 'Le verbe "be" avec "I" = am.' },
  { id: 'as02', type: 'translate', level: 'A1', instruction: 'Traduisez.', french: 'J\'ai un frère.', answer: 'I have a brother.', alternatives: ['I have one brother.'], hint: '"Avoir" = have', explanation: '"Have" = avoir. "A brother" = un frère.' },
  { id: 'as03', type: 'fill-blank', level: 'A1', instruction: 'Complétez.', template: 'She ___ to school every day.', verb: 'go', answer: 'goes', hint: 'She + go = ?', explanation: '"Go" avec she/he/it = goes.' },
  // A2
  { id: 'as04', type: 'error-correct', level: 'A2', instruction: 'Corrigez.', sentence: 'He don\'t speak English.', answer: 'He doesn\'t speak English.', hint: 'He → doesn\'t', explanation: '"He doesn\'t" est correct.' },
  { id: 'as05', type: 'translate', level: 'A2', instruction: 'Traduisez.', french: 'Elle est en train de manger.', answer: 'She is eating.', alternatives: ['She\'s eating.'], hint: 'Present Continuous', explanation: '"Is eating" = être en train de manger.' },
  { id: 'as06', type: 'fill-blank', level: 'A2', instruction: 'Complétez.', template: 'I ___ my homework yesterday.', verb: 'finish', answer: 'finished', hint: 'Hier → Past Simple', explanation: '"Finish" au Past Simple = finished (régulier).' },
  // B1
  { id: 'as07', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Il n\'est pas venu à la fête.', answer: 'He didn\'t come to the party.', alternatives: ['He did not come to the party.'], hint: 'Past Simple négatif', explanation: '"Didn\'t come" = négatif de "came".' },
  { id: 'as08', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'If I will have money, I will buy a book.', answer: 'If I have money, I will buy a book.', hint: 'Après "if" : Present Simple (pas will)', explanation: 'Structure : If + Present Simple, + will + verbe.' },
  { id: 'as09', type: 'fill-blank', level: 'B1', instruction: 'Complétez.', template: 'She ___ already ___ her work.', verb: 'have/finish', answer: 'has, finished', hint: 'Present Perfect : have/has + past participle', explanation: '"Has finished" = Present Perfect. Elle a déjà fini.' },
  { id: 'as10', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Que fais-tu quand il pleut ?', answer: 'What do you do when it rains?', hint: 'Question + habitude (Present Simple)', explanation: '"What do you do" = que fais-tu? "When it rains" = quand il pleut.' },
];

// ─── ARTICLES ───────────────────────────────────────────────────────────────
exercises.articles = [
  { id: 'art01', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec a, an ou the.', template: 'I have ___ apple in my bag.', answer: 'an', hint: 'Apple commence par une voyelle → an', explanation: '"An" devant un son vocalique : an apple, an elephant, an hour.' },
  { id: 'art02', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec a, an ou the.', template: 'She is ___ teacher at our school.', answer: 'a', hint: 'Teacher commence par une consonne → a', explanation: '"A" devant un son consonantique : a teacher, a book, a car.' },
  { id: 'art03', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec a, an ou the.', template: 'Close ___ door, please!', answer: 'the', hint: 'On sait de quelle porte il s\'agit → the', explanation: '"The" quand on parle d\'une chose spécifique déjà connue des deux interlocuteurs.' },
  { id: 'art04', type: 'error-correct', level: 'A1', instruction: 'Corrigez l\'article.', sentence: 'I drink a milk every morning.', answer: 'I drink milk every morning.', hint: 'Milk est non-dénombrable → pas d\'article', explanation: 'Les noms non-dénombrables (water, rice, milk, money) ne prennent pas d\'article au sens général.' },
  { id: 'art05', type: 'translate', level: 'A1', instruction: 'Traduisez en anglais.', french: 'J\'ai un chien et un chat.', answer: 'I have a dog and a cat.', hint: 'Première mention → a/an', explanation: '"A dog, a cat" : première fois qu\'on en parle. Deuxième mention → "the dog, the cat".' },
  { id: 'art06', type: 'fill-blank', level: 'A1', instruction: 'Complétez.', template: '___ sun is very hot today.', answer: 'The', hint: 'Il n\'y a qu\'un seul soleil → the', explanation: '"The sun, the moon, the sky" : objets uniques → toujours "the".' },
  { id: 'art07', type: 'error-correct', level: 'A1', instruction: 'Corrigez l\'article.', sentence: 'She speaks the English very well.', answer: 'She speaks English very well.', hint: 'Les langues n\'ont pas d\'article', explanation: 'Les langues (English, French, Malagasy) ne prennent jamais d\'article.' },
  { id: 'art08', type: 'word-order', level: 'A1', instruction: 'Remettez dans l\'ordre.', words: ['is', 'He', 'an', 'engineer'], answer: 'He is an engineer.', hint: 'engineer commence par une voyelle → an', explanation: '"An engineer" car "engineer" commence par le son vocalique /ɛ/.' },
];

// ─── PLURALS ────────────────────────────────────────────────────────────────
exercises.plurals = [
  { id: 'pl01', type: 'fill-blank', level: 'A1', instruction: 'Donnez le pluriel.', template: 'One book → two ___', answer: 'books', hint: 'Règle générale : + s', explanation: 'Pluriel régulier : book + s = books.' },
  { id: 'pl02', type: 'fill-blank', level: 'A1', instruction: 'Donnez le pluriel.', template: 'One bus → three ___', answer: 'buses', hint: 'Mots en -s → + es', explanation: 'Mots qui finissent en -s, -x, -ch, -sh : on ajoute -es. bus → buses.' },
  { id: 'pl03', type: 'error-correct', level: 'A1', instruction: 'Corrigez le pluriel.', sentence: 'I have two childs at school.', answer: 'I have two children at school.', hint: 'Pluriel irrégulier de child', explanation: 'child → children (irrégulier). man → men, woman → women, child → children.' },
  { id: 'pl04', type: 'fill-blank', level: 'A1', instruction: 'Donnez le pluriel.', template: 'One city → five ___', answer: 'cities', hint: 'Consonne + y → ies', explanation: 'city : consonne (t) + y → retire le y et ajoute -ies : cities.' },
  { id: 'pl05', type: 'translate', level: 'A1', instruction: 'Traduisez.', french: 'Il y a beaucoup de gens dans la rue.', answer: 'There are many people in the street.', alternatives: ['There are a lot of people in the street.'], hint: 'people = pluriel de person', explanation: '"People" est déjà pluriel. On ne dit jamais "peoples" pour désigner des personnes.' },
  { id: 'pl06', type: 'error-correct', level: 'A1', instruction: 'Corrigez.', sentence: 'My foots are tired after the walk.', answer: 'My feet are tired after the walk.', hint: 'Pluriel irrégulier de foot', explanation: 'foot → feet (irrégulier). tooth → teeth, man → men, woman → women.' },
  { id: 'pl07', type: 'fill-blank', level: 'A1', instruction: 'Pluriel ou singulier ?', template: 'The ___ (sheep) are in the field.', answer: 'sheep', hint: 'Sheep = même forme au singulier et pluriel', explanation: 'Certains mots ont la même forme : sheep → sheep, fish → fish.' },
  { id: 'pl08', type: 'word-order', level: 'A1', instruction: 'Remettez dans l\'ordre.', words: ['women', 'The', 'the', 'market', 'are', 'at'], answer: 'The women are at the market.', hint: 'women = pluriel de woman', explanation: 'woman → women (irrégulier). Sujet pluriel → are.' },
];

// ─── THERE IS / ARE ─────────────────────────────────────────────────────────
exercises.therebeis = [
  { id: 'tbi01', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec there is ou there are.', template: '___ a book on the table.', answer: 'There is', hint: 'a book = singulier → there is', explanation: '"There is" avec un nom singulier. "There are" avec un nom pluriel.' },
  { id: 'tbi02', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec there is ou there are.', template: '___ five students in the classroom.', answer: 'There are', hint: 'five students = pluriel → there are', explanation: '"There are" avec un chiffre supérieur à 1 ou un nom pluriel.' },
  { id: 'tbi03', type: 'translate', level: 'A1', instruction: 'Traduisez.', french: 'Il y a un hôpital près d\'ici.', answer: 'There is a hospital near here.', alternatives: ["There's a hospital near here."], hint: 'hospital = singulier', explanation: '"There is" = il y a (singulier). Contraction : There\'s.' },
  { id: 'tbi04', type: 'error-correct', level: 'A1', instruction: 'Corrigez la phrase.', sentence: 'There are a cat in the garden.', answer: 'There is a cat in the garden.', hint: 'a cat = singulier → there is', explanation: '"A cat" est singulier → "there is", pas "there are".' },
  { id: 'tbi05', type: 'fill-blank', level: 'A1', instruction: 'Négatif : complétez.', template: '___ any milk in the fridge.', answer: "There isn't", hint: 'Forme négative de there is', explanation: '"There isn\'t any..." = il n\'y a pas de... (singulier/non-dénombrable).' },
  { id: 'tbi06', type: 'translate', level: 'A1', instruction: 'Traduisez (question).', french: 'Y a-t-il des questions ?', answer: 'Are there any questions?', hint: 'Inverser there are pour la question', explanation: 'Question : Are there...? / Is there...? On utilise souvent "any" dans les questions.' },
  { id: 'tbi07', type: 'fill-blank', level: 'A2', instruction: 'Complétez au passé.', template: '___ many people at the party last night.', answer: 'There were', hint: 'Au passé : was/were', explanation: 'Au passé : "there was" (singulier) / "there were" (pluriel).' },
  { id: 'tbi08', type: 'word-order', level: 'A1', instruction: 'Remettez dans l\'ordre.', words: ['a', 'Is', 'there', 'here', 'near', 'pharmacy', '?'], answer: 'Is there a pharmacy near here?', hint: 'Question avec there is → inversion', explanation: 'Question : Is there + singulier? / Are there + pluriel?' },
];

// ─── PREPOSITIONS ───────────────────────────────────────────────────────────
exercises.prepositions = [
  { id: 'prep01', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec in, on ou at.', template: 'I wake up ___ 6 o\'clock.', answer: 'at', hint: 'Heure précise → at', explanation: '"At" pour les heures précises : at 6 o\'clock, at noon, at midnight.' },
  { id: 'prep02', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec in, on ou at.', template: 'School starts ___ Monday.', answer: 'on', hint: 'Jours de la semaine → on', explanation: '"On" pour les jours : on Monday, on Friday, on my birthday.' },
  { id: 'prep03', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec in, on ou at.', template: 'My birthday is ___ January.', answer: 'in', hint: 'Mois → in', explanation: '"In" pour les mois, les années et les saisons : in January, in 2025, in summer.' },
  { id: 'prep04', type: 'error-correct', level: 'A1', instruction: 'Corrigez la préposition.', sentence: 'I go to school in 7 am.', answer: 'I go to school at 7 am.', hint: 'Heure précise → at', explanation: 'Heure précise : "at 7 am", pas "in 7 am".' },
  { id: 'prep05', type: 'fill-blank', level: 'A1', instruction: 'Complétez.', template: 'The cat is ___ the box.', answer: 'in', hint: 'À l\'intérieur → in', explanation: '"In" pour l\'intérieur. "On" pour la surface. "At" pour un point précis.' },
  { id: 'prep06', type: 'translate', level: 'A2', instruction: 'Traduisez.', french: 'Je suis né en 1999.', answer: 'I was born in 1999.', hint: 'Année → in', explanation: '"In + année" pour situer dans le temps.' },
  { id: 'prep07', type: 'fill-blank', level: 'A2', instruction: 'Complétez.', template: 'She lives ___ home and goes ___ school every day.', answer: 'at, to', hint: 'at home (lieu), to school (direction)', explanation: '"At home" = chez soi. "To school" = direction vers l\'école.' },
  { id: 'prep08', type: 'error-correct', level: 'A2', instruction: 'Corrigez.', sentence: 'The party is in the night.', answer: 'The party is at night.', hint: 'Night → at night (exception)', explanation: 'Exception : "at night" (pas "in the night"). Mais : "in the morning/afternoon/evening".' },
];

// ─── QUESTIONS ──────────────────────────────────────────────────────────────
exercises.questions = [
  { id: 'q01', type: 'fill-blank', level: 'A1', instruction: 'Complétez la question.', template: '___ is your name?', answer: 'What', hint: 'Pour demander une chose/un nom', explanation: '"What" = quoi / quel. "What is your name?" = Quel est ton prénom?' },
  { id: 'q02', type: 'fill-blank', level: 'A1', instruction: 'Complétez la question.', template: '___ do you live?', answer: 'Where', hint: 'Pour demander un lieu', explanation: '"Where" = où. "Where do you live?" = Où habites-tu?' },
  { id: 'q03', type: 'fill-blank', level: 'A1', instruction: 'Complétez la question.', template: '___ old are you?', answer: 'How', hint: '"How" se combine avec des adjectifs', explanation: '"How old" = quel âge. "How many" = combien (dénombrable). "How much" = combien (non-dénombrable).' },
  { id: 'q04', type: 'translate', level: 'A1', instruction: 'Traduisez la question.', french: 'Quand est-ce que tu vas à l\'école ?', answer: 'When do you go to school?', hint: 'When = quand + auxiliaire do', explanation: 'Structure : When + do/does + sujet + verbe infinitif ?' },
  { id: 'q05', type: 'error-correct', level: 'A2', instruction: 'Corrigez la question.', sentence: 'What she does for work?', answer: 'What does she do for work?', hint: 'Does se place avant le sujet', explanation: 'Question avec "does" (he/she/it) : Does + sujet + infinitif? Le verbe retourne à l\'infinitif.' },
  { id: 'q06', type: 'word-order', level: 'A2', instruction: 'Formez une question.', words: ['Why', 'you', 'did', 'school', 'miss', '?'], answer: 'Why did you miss school?', hint: 'Why + did + sujet + infinitif', explanation: 'Au passé : Did + sujet + verbe infinitif. "Why did you miss..." (pas "missed").' },
  { id: 'q07', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec how many ou how much.', template: '___ brothers do you have?', answer: 'How many', hint: 'brothers = dénombrable', explanation: '"How many" pour les noms dénombrables. "How much" pour les non-dénombrables (water, money).' },
  { id: 'q08', type: 'translate', level: 'A2', instruction: 'Traduisez.', french: 'Pourquoi est-ce qu\'il n\'est pas venu ?', answer: "Why didn't he come?", alternatives: ['Why did he not come?'], hint: 'Why + didn\'t + sujet + infinitif', explanation: '"Why didn\'t he come?" = Why + didn\'t (passé négatif) + sujet + infinitif.' },
];

// ─── MODALS ─────────────────────────────────────────────────────────────────
exercises.modals = [
  { id: 'mod01', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec can ou can\'t.', template: 'She ___ swim very well — she is a champion!', answer: 'can', hint: 'Capacité positive', explanation: '"Can" exprime la capacité. Pas de -s à la 3e personne : "She can" (pas "she cans").' },
  { id: 'mod02', type: 'translate', level: 'A2', instruction: 'Traduisez.', french: 'Tu dois étudier ce soir.', answer: 'You must study tonight.', alternatives: ['You have to study tonight.'], hint: 'Obligation forte → must ou have to', explanation: '"Must" = obligation personnelle. "Have to" = obligation externe. Les deux sont acceptés.' },
  { id: 'mod03', type: 'fill-blank', level: 'A2', instruction: 'Conseil : complétez.', template: 'You ___ drink more water every day.', answer: 'should', hint: 'Conseil (moins fort que must)', explanation: '"Should" donne un conseil. "You should eat vegetables."' },
  { id: 'mod04', type: 'error-correct', level: 'A2', instruction: 'Corrigez la phrase.', sentence: 'She can to drive a car.', answer: 'She can drive a car.', hint: 'Après un modal : infinitif sans to', explanation: 'Après les modaux (can, must, should, might, would) : jamais de "to".' },
  { id: 'mod05', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec could ou can.', template: 'When I was 5, I ___ read already.', answer: 'could', hint: 'Capacité dans le passé → could', explanation: '"Could" est le passé de "can". "I could swim at age 3."' },
  { id: 'mod06', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Vous devriez prendre un parapluie — il pourrait pleuvoir.', answer: 'You should take an umbrella — it might rain.', alternatives: ['You should take an umbrella, it might rain.'], hint: 'Conseil + possibilité', explanation: '"Should" = conseil. "Might" = possibilité incertaine.' },
  { id: 'mod07', type: 'fill-blank', level: 'B1', instruction: 'Complétez.', template: '___ you like some tea?', answer: 'Would', hint: 'Offre polie → would', explanation: '"Would you like...?" = offre polie. "Would" = conditionnel/politesse.' },
  { id: 'mod08', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'He musts leave now.', answer: 'He must leave now.', hint: 'Must ne prend jamais de -s', explanation: 'Les modaux sont invariables : must, can, should, might → jamais de -s à la 3e personne.' },
];

// ─── PAST CONTINUOUS ────────────────────────────────────────────────────────
exercises.pastContinuous = [
  { id: 'pastc01', type: 'fill-blank', level: 'B1', instruction: 'Complétez au Past Continuous.', template: 'At 8pm, I ___ (read) a book.', answer: 'was reading', hint: 'was/were + -ing', explanation: '"Was reading" = j\'étais en train de lire. "I" → was.' },
  { id: 'pastc02', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Ils jouaient au foot quand il a plu.', answer: 'They were playing football when it rained.', hint: 'Action longue (continuous) + action courte (simple)', explanation: 'Past Continuous pour l\'action en cours + Past Simple pour l\'interruption.' },
  { id: 'pastc03', type: 'fill-blank', level: 'B1', instruction: 'Complétez.', template: 'While she ___ (cook), her phone rang.', answer: 'was cooking', hint: 'While + Past Continuous', explanation: '"While" introduit souvent une action en cours au passé (Past Continuous).' },
  { id: 'pastc04', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'They was studying when I arrived.', answer: 'They were studying when I arrived.', hint: 'they → were (pas was)', explanation: '"Was" = I/he/she/it. "Were" = you/we/they.' },
  { id: 'pastc05', type: 'word-order', level: 'B1', instruction: 'Remettez dans l\'ordre.', words: ['was', 'I', 'the', 'when', 'sleeping', 'rang', 'phone'], answer: 'I was sleeping when the phone rang.', hint: 'Past Continuous + when + Past Simple', explanation: 'Structure : sujet + was/were + V-ing + when + Past Simple.' },
  { id: 'pastc06', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Qu\'est-ce que tu faisais hier soir à 20h ?', answer: 'What were you doing last night at 8pm?', hint: 'Question au Past Continuous', explanation: 'Question : What + were + you + doing?' },
  { id: 'pastc07', type: 'fill-blank', level: 'B1', instruction: 'Complétez les deux verbes.', template: 'While she ___ (study), he ___ (sleep).', answer: 'was studying, was sleeping', hint: 'Deux actions parallèles → deux Past Continuous', explanation: 'Deux actions simultanées dans le passé → les deux au Past Continuous.' },
  { id: 'pastc08', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'She was knowing the answer.', answer: 'She knew the answer.', hint: 'Know = verbe d\'état → pas de continuous', explanation: 'Verbes d\'état (know, like, love, believe, understand) → jamais au continuous.' },
];

// ─── PRESENT PERFECT ────────────────────────────────────────────────────────
exercises.presentPerfect = [
  { id: 'pp01', type: 'fill-blank', level: 'B1', instruction: 'Complétez au Present Perfect.', template: 'I ___ (visit) Paris twice.', answer: 'have visited', hint: 'have/has + participe passé', explanation: '"Have visited" = j\'ai visité (dans ma vie). Present Perfect pour les expériences.' },
  { id: 'pp02', type: 'fill-blank', level: 'B1', instruction: 'Complétez.', template: 'She ___ (not/eat) yet.', answer: "hasn't eaten", hint: 'hasn\'t + pp pour he/she/it', explanation: '"Hasn\'t eaten" = elle n\'a pas encore mangé.' },
  { id: 'pp03', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'As-tu déjà mangé du riz rouge ?', answer: 'Have you ever eaten red rice?', alternatives: ['Have you ever tried red rice?'], hint: 'ever = déjà (dans ta vie)', explanation: '"Have you ever...?" pour une expérience de vie.' },
  { id: 'pp04', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'I have went to school yesterday.', answer: 'I went to school yesterday.', hint: 'yesterday → Past Simple (pas Present Perfect)', explanation: '"Yesterday" = moment précis → Past Simple. Le Present Perfect ne s\'utilise jamais avec "yesterday".' },
  { id: 'pp05', type: 'fill-blank', level: 'B1', instruction: 'Since ou for ?', template: 'I have lived here ___ 2018.', answer: 'since', hint: '2018 = point de départ', explanation: '"Since" + point dans le temps. "For" + durée.' },
  { id: 'pp06', type: 'fill-blank', level: 'B1', instruction: 'Since ou for ?', template: 'She has worked here ___ five years.', answer: 'for', hint: 'five years = durée', explanation: '"For" + durée : for five years, for two months.' },
  { id: 'pp07', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Il vient de partir.', answer: 'He has just left.', hint: 'just = tout juste → Present Perfect', explanation: '"Has just left" = il vient de partir. "Just" → entre have/has et le participe passé.' },
  { id: 'pp08', type: 'word-order', level: 'B1', instruction: 'Remettez dans l\'ordre.', words: ['has', 'She', 'already', 'her', 'finished', 'homework'], answer: 'She has already finished her homework.', hint: 'already se place entre has et le pp', explanation: '"Already" se place entre have/has et le participe passé.' },
];

// ─── PAST PERFECT ───────────────────────────────────────────────────────────
exercises.pastPerfect = [
  { id: 'patp01', type: 'fill-blank', level: 'B1', instruction: 'Complétez au Past Perfect.', template: 'When I arrived, she ___ (already/leave).', answer: 'had already left', hint: 'had + participe passé', explanation: '"Had left" = elle était déjà partie (avant mon arrivée).' },
  { id: 'patp02', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Il a raté le bus parce qu\'il ne s\'était pas levé tôt.', answer: "He missed the bus because he hadn't got up early.", alternatives: ["He missed the bus because he had not gotten up early."], hint: 'hadn\'t + pp pour l\'action antérieure', explanation: '"Hadn\'t got up" = il ne s\'était pas levé (avant de rater le bus).' },
  { id: 'patp03', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'After I ate, I have gone to sleep.', answer: 'After I had eaten, I went to sleep.', hint: 'Action antérieure → Past Perfect; action principale → Past Simple', explanation: '"After I had eaten" (antérieur) + "I went" (résultat).' },
  { id: 'patp04', type: 'fill-blank', level: 'B1', instruction: 'Complétez.', template: 'She failed because she ___ (not/study).', answer: "hadn't studied", hint: 'hadn\'t + pp = n\'avait pas', explanation: '"Hadn\'t studied" = elle n\'avait pas étudié (avant l\'examen).' },
  { id: 'patp05', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Je n\'avais jamais vu la mer avant ce voyage.', answer: "I had never seen the sea before that trip.", hint: 'never + had + pp', explanation: '"Had never seen" = je n\'avais jamais vu (avant un moment du passé).' },
  { id: 'patp06', type: 'word-order', level: 'B1', instruction: 'Remettez dans l\'ordre.', words: ['had', 'The', 'already', 'film', 'when', 'arrived', 'we', 'started'], answer: 'The film had already started when we arrived.', hint: 'Past Perfect pour l\'action antérieure', explanation: 'Le film avait commencé (Past Perfect) avant notre arrivée (Past Simple).' },
  { id: 'patp07', type: 'fill-blank', level: 'B1', instruction: 'Complétez.', template: 'By the time he called, I ___ (already/eat).', answer: 'had already eaten', hint: 'by the time + Past Perfect', explanation: '"By the time" exprime l\'antériorité. "By the time he called, I had eaten."' },
  { id: 'patp08', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'He was angry because I broke his pen.', answer: 'He was angry because I had broken his pen.', hint: 'L\'action antérieure (casser) → Past Perfect', explanation: 'Casser est AVANT la colère → Past Perfect : "had broken".' },
];

// ─── TIME MARKERS ───────────────────────────────────────────────────────────
exercises.timeMarkers = [
  { id: 'tm01', type: 'fill-blank', level: 'B1', instruction: 'Already, yet ou just ?', template: 'I have ___ finished — I\'m free now!', answer: 'just', hint: 'Tout juste terminé', explanation: '"Just" = tout juste. "I have just finished." → entre have et le participe.' },
  { id: 'tm02', type: 'fill-blank', level: 'B1', instruction: 'Already, yet ou just ?', template: 'Have you eaten ___?', answer: 'yet', hint: 'Question sur quelque chose attendu', explanation: '"Yet" en fin de phrase dans les questions et les négatifs.' },
  { id: 'tm03', type: 'fill-blank', level: 'B1', instruction: 'Since ou for ?', template: 'He has known her ___ 10 years.', answer: 'for', hint: '10 years = durée', explanation: '"For" + durée. "Since" + point de départ. "For 10 years".' },
  { id: 'tm04', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'I met him since 3 years ago.', answer: 'I met him 3 years ago.', hint: 'ago = il y a → Past Simple', explanation: '"Ago" avec le Past Simple seulement. Jamais "since ... ago".' },
  { id: 'tm05', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Pendant que je dormais, mon frère regardait la télé.', answer: 'While I was sleeping, my brother was watching TV.', hint: 'while + Past Continuous', explanation: '"While" + Past Continuous pour deux actions parallèles dans le passé.' },
  { id: 'tm06', type: 'fill-blank', level: 'B1', instruction: 'Complétez.', template: '___ soon as she arrives, we will eat.', answer: 'As', hint: 'Dès que = as soon as', explanation: '"As soon as" = dès que. Suivi du Present Simple pour le futur.' },
  { id: 'tm07', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'I haven\'t seen him since two weeks.', answer: "I haven't seen him for two weeks.", hint: 'two weeks = durée → for', explanation: '"For" + durée (two weeks). "Since" + point précis (Monday, 2020).' },
  { id: 'tm08', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Elle vient juste de sortir.', answer: 'She has just gone out.', alternatives: ["She's just gone out."], hint: 'juste = just → Present Perfect', explanation: '"Has just gone out" = elle vient de sortir.' },
];

// ─── CONDITIONALS ───────────────────────────────────────────────────────────
exercises.conditionals = [
  { id: 'cond01', type: 'fill-blank', level: 'B1', instruction: '1er conditionnel : complétez.', template: 'If it ___ (rain), I will stay home.', answer: 'rains', hint: 'If + Present Simple → will', explanation: '1er conditionnel : If + Present Simple, + will + infinitif.' },
  { id: 'cond02', type: 'fill-blank', level: 'B1', instruction: '1er conditionnel : complétez.', template: 'If you study hard, you ___ (pass) the exam.', answer: 'will pass', hint: 'Résultat futur → will + infinitif', explanation: '"Will pass" = tu réussiras. Condition dans "if" → Present Simple.' },
  { id: 'cond03', type: 'translate', level: 'B1', instruction: '2e conditionnel : traduisez.', french: 'Si j\'avais de l\'argent, j\'achèterais une maison.', answer: 'If I had money, I would buy a house.', hint: 'If + Past Simple → would', explanation: '2e conditionnel : hypothèse irréelle. If + Past Simple, + would + infinitif.' },
  { id: 'cond04', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'If I will win the lottery, I will travel.', answer: 'If I won the lottery, I would travel.', hint: 'Pas de will après if (2e conditionnel)', explanation: '2e conditionnel : "If I won" (Past Simple), "I would travel". Jamais "will" après "if" ici.' },
  { id: 'cond05', type: 'translate', level: 'B2', instruction: '3e conditionnel : traduisez.', french: 'Si j\'avais étudié, j\'aurais réussi l\'examen.', answer: "If I had studied, I would have passed the exam.", hint: 'If + Past Perfect → would have + pp', explanation: '3e conditionnel : regret. If + Past Perfect, + would have + participe passé.' },
  { id: 'cond06', type: 'fill-blank', level: 'B2', instruction: '3e conditionnel : complétez.', template: 'If she ___ (leave) earlier, she ___ (not/miss) the bus.', answer: "had left, wouldn't have missed", hint: 'had + pp / wouldn\'t have + pp', explanation: '"Had left" + "wouldn\'t have missed".' },
  { id: 'cond07', type: 'fill-blank', level: 'B1', instruction: 'Zéro conditionnel : complétez.', template: 'If you ___ (heat) ice, it ___ (melt).', answer: 'heat, melts', hint: 'Vérité générale → Present Simple + Present Simple', explanation: 'Zéro conditionnel : If + Present Simple, + Present Simple.' },
  { id: 'cond08', type: 'error-correct', level: 'B2', instruction: 'Corrigez (3e conditionnel).', sentence: 'If I had more money, I would have bought that car.', answer: 'If I had had more money, I would have bought that car.', hint: '3e conditionnel : if + past perfect (had + pp)', explanation: '"Had had" = had (auxiliaire) + had (pp de have). Le Past Perfect de "have" est "had had".' },
];

// ─── PASSIVE VOICE ──────────────────────────────────────────────────────────
exercises.passiveVoice = [
  { id: 'pass01', type: 'fill-blank', level: 'B1', instruction: 'Transformez au passif (présent).', template: 'English ___ (speak) in many countries.', answer: 'is spoken', hint: 'is/are + participe passé', explanation: 'Passif présent : is/are + pp. "English is spoken" (sujet singulier → is).' },
  { id: 'pass02', type: 'fill-blank', level: 'B1', instruction: 'Transformez au passif (passé).', template: 'The letter ___ (write) in 1900.', answer: 'was written', hint: 'was/were + participe passé', explanation: 'Passif passé : was/were + pp. "The letter was written" (singulier → was).' },
  { id: 'pass03', type: 'translate', level: 'B1', instruction: 'Traduisez au passif.', french: 'Le riz est cultivé à Madagascar.', answer: 'Rice is grown in Madagascar.', hint: 'is + pp de grow = grown', explanation: 'Grow → grown (irrégulier). Rice est non-dénombrable → "Rice is".' },
  { id: 'pass04', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'The windows are clean every day.', answer: 'The windows are cleaned every day.', hint: 'Passif : are + participe passé', explanation: '"Are cleaned" (passif) ≠ "are clean" (adjectif). Le participe passé est nécessaire.' },
  { id: 'pass05', type: 'word-order', level: 'B1', instruction: 'Remettez dans l\'ordre.', words: ['was', 'The', 'school', 'built', 'last', 'year'], answer: 'The school was built last year.', hint: 'was + pp', explanation: '"Was built" = passif passé. "The school" = sujet qui reçoit l\'action.' },
  { id: 'pass06', type: 'translate', level: 'B1', instruction: 'Actif → passif : traduisez.', french: 'On a volé mon sac.', answer: 'My bag was stolen.', hint: 'Auteur inconnu → passif sans by', explanation: 'Quand l\'auteur est inconnu, on omet "by". "My bag was stolen."' },
  { id: 'pass07', type: 'fill-blank', level: 'B1', instruction: 'Futur passif : complétez.', template: 'The results ___ (announce) tomorrow.', answer: 'will be announced', hint: 'will be + pp', explanation: 'Passif futur : will be + pp. "Will be announced" = seront annoncés.' },
  { id: 'pass08', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'The book was wrote by a student.', answer: 'The book was written by a student.', hint: 'write → written (pp irrégulier)', explanation: '"Written" = pp de "write". Passif : was + pp (pas prétérit).' },
];

// ─── REPORTED SPEECH ────────────────────────────────────────────────────────
exercises.reportedSpeech = [
  { id: 'rs01', type: 'fill-blank', level: 'B1', instruction: 'Discours indirect : complétez.', template: '"I am tired." → She said she ___ tired.', answer: 'was', hint: 'am/is → was en discours indirect', explanation: 'En discours indirect, les temps reculent. am/is/are → was/were.' },
  { id: 'rs02', type: 'fill-blank', level: 'B1', instruction: 'Transformez au discours indirect.', template: '"I work here." → He said he ___ there.', answer: 'worked', hint: 'works → worked en discours indirect', explanation: 'Present Simple → Past Simple. "He said he worked there."' },
  { id: 'rs03', type: 'translate', level: 'B1', instruction: 'Mettez au discours indirect.', french: 'Il a dit : "Je viendrai demain."', answer: 'He said he would come the next day.', alternatives: ['He said that he would come the next day.'], hint: 'will → would; tomorrow → the next day', explanation: '"Will" → "would". "Tomorrow" → "the next day".' },
  { id: 'rs04', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'She said she will help me.', answer: 'She said she would help me.', hint: 'will → would en discours indirect', explanation: '"Will" devient "would" dans un discours indirect au passé.' },
  { id: 'rs05', type: 'translate', level: 'B1', instruction: 'Question indirecte : traduisez.', french: 'Il a demandé si je parlais anglais.', answer: 'He asked if I spoke English.', alternatives: ['He asked whether I spoke English.'], hint: 'Asked if/whether pour les questions oui/non', explanation: '"Asked if" + ordre normal (sujet + verbe). Pas d\'inversion.' },
  { id: 'rs06', type: 'fill-blank', level: 'B1', instruction: 'Complétez (ordre indirect).', template: 'She said: "Sit down!" → She told him ___ down.', answer: 'to sit', hint: 'Ordre → tell/ask + to + infinitif', explanation: 'Ordre indirect : tell + objet + to + infinitif. "She told him to sit down."' },
  { id: 'rs07', type: 'error-correct', level: 'B2', instruction: 'Corrigez.', sentence: 'He asked where did she live.', answer: 'He asked where she lived.', hint: 'Question indirecte : ordre normal (sujet + verbe)', explanation: 'Dans une question indirecte, pas d\'inversion : "where she lived" (pas "where did she live").' },
  { id: 'rs08', type: 'translate', level: 'B2', instruction: 'Traduisez.', french: 'Elle m\'a demandé de ne pas être en retard.', answer: 'She asked me not to be late.', hint: 'Demande négative → ask + not + to + infinitif', explanation: '"Ask + objet + not to + infinitif". "She asked me not to be late."' },
];

// ─── FUTURE CONTINUOUS ──────────────────────────────────────────────────────
exercises.futureContinuous = [
  { id: 'fc01', type: 'fill-blank', level: 'B1', instruction: 'Complétez au Future Continuous.', template: 'At 8pm tomorrow, I ___ (study).', answer: 'will be studying', hint: 'will be + V-ing', explanation: '"Will be studying" = je serai en train d\'étudier demain à 20h.' },
  { id: 'fc02', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Demain à cette heure, elle sera en avion.', answer: 'This time tomorrow, she will be flying.', hint: 'will be + -ing', explanation: '"Will be flying" = elle sera en train de voler.' },
  { id: 'fc03', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'At noon, they will study.', answer: 'At noon, they will be studying.', hint: 'Action en cours à un moment précis → Future Continuous', explanation: '"Will be studying" (en cours à midi) est plus précis que "will study".' },
  { id: 'fc04', type: 'fill-blank', level: 'B1', instruction: 'Complétez la question.', template: '___ you ___ (use) the computer tonight?', answer: 'Will, be using', hint: 'Question : will + sujet + be + V-ing', explanation: '"Will you be using...?" = demande polie. Structure : Will + sujet + be + V-ing?' },
  { id: 'fc05', type: 'translate', level: 'B1', instruction: 'Traduisez.', french: 'Je ne travaillerai pas samedi.', answer: "I won't be working on Saturday.", alternatives: ["I will not be working on Saturday."], hint: 'Négatif : won\'t be + -ing', explanation: '"Won\'t be working" = je ne serai pas en train de travailler.' },
  { id: 'fc06', type: 'word-order', level: 'B1', instruction: 'Remettez dans l\'ordre.', words: ['be', 'She', 'will', 'waiting', 'the', 'at', 'airport'], answer: 'She will be waiting at the airport.', hint: 'will be + -ing', explanation: '"Will be waiting" = elle sera en train d\'attendre.' },
  { id: 'fc07', type: 'fill-blank', level: 'B1', instruction: 'Complétez.', template: 'When you arrive, we ___ (already/eat).', answer: 'will already be eating', hint: 'Action en cours à l\'arrivée', explanation: '"Will be eating" = nous serons en train de manger quand tu arrives.' },
  { id: 'fc08', type: 'error-correct', level: 'B1', instruction: 'Corrigez.', sentence: 'At 9pm, I am studying.', answer: 'At 9pm, I will be studying.', hint: 'Futur prévu → Future Continuous', explanation: 'Pour une action en cours dans le futur → will be + -ing.' },
];

// ─── FUTURE PERFECT ─────────────────────────────────────────────────────────
exercises.futurePerfect = [
  { id: 'fp01', type: 'fill-blank', level: 'B2', instruction: 'Complétez au Future Perfect.', template: 'By 2030, I ___ (graduate).', answer: 'will have graduated', hint: 'will have + participe passé', explanation: '"Will have graduated" = j\'aurai obtenu mon diplôme. Future Perfect pour une action terminée avant un moment futur.' },
  { id: 'fp02', type: 'translate', level: 'B2', instruction: 'Traduisez.', french: 'Quand tu arriveras, nous aurons mangé.', answer: 'By the time you arrive, we will have eaten.', hint: 'By the time + Present Simple → Future Perfect', explanation: '"By the time" + Present Simple + Future Perfect dans la principale.' },
  { id: 'fp03', type: 'error-correct', level: 'B2', instruction: 'Corrigez.', sentence: 'By next year, she will finish her studies.', answer: 'By next year, she will have finished her studies.', hint: 'by next year → action terminée → Future Perfect', explanation: '"By next year" implique une action terminée avant ce moment → will have + pp.' },
  { id: 'fp04', type: 'fill-blank', level: 'B2', instruction: 'Négatif : complétez.', template: 'I ___ (not/save) enough money by then.', answer: "won't have saved", hint: 'won\'t have + pp', explanation: '"Won\'t have saved" = je n\'aurai pas économisé.' },
  { id: 'fp05', type: 'translate', level: 'B2', instruction: 'Traduisez.', french: 'Est-ce qu\'il aura fini avant vendredi ?', answer: 'Will he have finished by Friday?', hint: 'Question : Will + sujet + have + pp', explanation: 'Question Future Perfect : Will + sujet + have + pp?' },
  { id: 'fp06', type: 'word-order', level: 'B2', instruction: 'Remettez dans l\'ordre.', words: ['have', 'We', 'will', 'by', 'the', 'time', 'left', 'arrives', 'he'], answer: 'We will have left by the time he arrives.', hint: 'will have + pp + by the time', explanation: '"Will have left" = nous serons partis quand il arrivera.' },
  { id: 'fp07', type: 'fill-blank', level: 'B2', instruction: 'Complétez.', template: 'By the time she is 30, she ___ (travel) to 10 countries.', answer: 'will have travelled', hint: 'Accomplissement avant un âge futur', explanation: '"Will have travelled" = elle aura voyagé.' },
  { id: 'fp08', type: 'error-correct', level: 'B2', instruction: 'Corrigez.', sentence: 'By 8pm, I will finished my homework.', answer: 'By 8pm, I will have finished my homework.', hint: 'Future Perfect : will HAVE + pp', explanation: '"Will have finished" (pas "will finished"). Le "have" est obligatoire.' },
];

// ─── COMPARATIVES & SUPERLATIVES ────────────────────────────────────────────
exercises.comparatives = [
  { id: 'cmp01', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec le comparatif correct.', template: 'This film is ___ (interesting) than the last one.', answer: 'more interesting', hint: 'Adjectif long → more + adjectif', explanation: 'Adjectifs longs (2+ syllabes) : "more + adjectif". "More interesting" = plus intéressant.' },
  { id: 'cmp02', type: 'translate', level: 'A2', instruction: 'Traduisez en anglais.', french: 'Elle est plus grande que son frère.', answer: 'She is taller than her brother.', alternatives: ["She's taller than her brother."], hint: 'tall → taller (adjectif court : + -er)', explanation: 'Adjectifs courts (1 syllabe) : + "-er". "Tall" → "taller than".' },
  { id: 'cmp03', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec le superlatif.', template: 'He is ___ (fast) runner in the school.', answer: 'the fastest', hint: 'Adjectif court : the + adj + -est', explanation: 'Superlatif court : "the + adj + -est". "Fast" → "the fastest". Doublement de la consonne finale.' },
  { id: 'cmp04', type: 'error-correct', level: 'A2', instruction: "Trouvez et corrigez l'erreur.", sentence: 'This box is more heavy than that one.', answer: 'This box is heavier than that one.', hint: '"Heavy" = adjectif en -y → -ier', explanation: '"Heavy" → "heavier" (terminaison en -y : y → i + er). Pas "more heavy".' },
  { id: 'cmp05', type: 'word-order', level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ['English', 'is', 'the', 'most', 'beautiful', 'language', '.'], answer: 'English is the most beautiful language.', hint: 'the most + adjectif long', explanation: 'Superlatif long : "the most + adjectif". "The most beautiful language".' },
  { id: 'cmp06', type: 'fill-blank', level: 'B1', instruction: 'Complétez (égalité : as … as).', template: 'My car is ___ fast ___ yours.', answer: 'as, as', hint: 'Égalité : as + adjectif + as', explanation: '"As … as" exprime l\'égalité : "My car is as fast as yours" = ma voiture est aussi rapide que la tienne.' },
  { id: 'cmp07', type: 'translate', level: 'B1', instruction: 'Traduisez en anglais.', french: "Plus tu travailles, meilleurs sont tes résultats.", answer: 'The harder you work, the better your results are.', alternatives: ['The more you work, the better your results are.'], hint: 'The + comparatif ..., the + comparatif ...', explanation: 'Structure "the more … the more" / "the harder … the better" = plus… plus…' },
  { id: 'cmp08', type: 'listening', level: 'B1', instruction: 'Écoutez et écrivez ce que vous entendez.', audio: 'London is bigger than Paris but Tokyo is the biggest city.', answer: 'London is bigger than Paris but Tokyo is the biggest city.', hint: 'Comparatif "bigger" + superlatif "the biggest"', explanation: '"Bigger" (comparatif de "big") et "the biggest" (superlatif). Doublement de "g" pour les adjectifs CVC.' },
];

exercises.interrogative = [
  { id: 'intr01', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec Do ou Does.', template: '___ she speak French?', answer: 'Does', hint: 'she = he/she/it → Does', explanation: 'Avec he/she/it au Present Simple, on utilise "Does". "Does she speak French?"' },
  { id: 'intr02', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec Do ou Does.', template: '___ they go to school every day?', answer: 'Do', hint: 'they = pluriel → Do', explanation: 'Avec I/you/we/they au Present Simple, on utilise "Do". "Do they go to school?"' },
  { id: 'intr03', type: 'word-order', level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ['did', 'she', 'eat', 'what', '?'], answer: 'What did she eat?', hint: 'Wh- + did + sujet + verbe', explanation: 'Question Wh- au passé : "What did she eat?" Le verbe reste à l\'infinitif après "did".' },
  { id: 'intr04', type: 'translate', level: 'A2', instruction: 'Traduisez en anglais.', french: 'Est-ce qu\'il a un frère ?', answer: 'Does he have a brother?', alternatives: ['Does he have a brother ?'], hint: 'he → Does; have reste à l\'infinitif', explanation: 'Avec "he" on utilise "Does" et le verbe reste à l\'infinitif : "Does he have…?" (pas "Does he has?")'  },
  { id: 'intr05', type: 'error-correct', level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'Does she speaks English?', answer: 'Does she speak English?', hint: 'Après Does, le verbe est à l\'infinitif (sans -s)', explanation: 'Après l\'auxiliaire "Does", le verbe perd le -s : "Does she speak?" (pas "speaks").' },
  { id: 'intr06', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec Is, Are, Was ou Were.', template: '___ your parents at home yesterday?', answer: 'Were', hint: 'parents = pluriel, passé → Were', explanation: '"Were" = be au passé pluriel. "Were your parents at home?" = Vos parents étaient-ils à la maison ?' },
  { id: 'intr07', type: 'word-order', level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ['you', 'do', 'where', 'live', '?'], answer: 'Where do you live?', hint: 'Wh- + Do + sujet + verbe infinitif', explanation: '"Where do you live?" — question Wh- avec "do" pour I/you/we/they.' },
  { id: 'intr08', type: 'translate', level: 'A2', instruction: 'Traduisez en anglais.', french: 'Pourquoi sont-ils partis tôt ?', answer: 'Why did they leave early?', alternatives: ['Why did they leave early ?'], hint: 'Why + did + they + verbe infinitif', explanation: 'Questions Wh- au Past Simple : "Why did they leave early?" Le verbe reste à l\'infinitif.' },
  { id: 'intr09', type: 'fill-blank', level: 'A2', instruction: 'Complétez la question.', template: 'How many books ___ you have?', answer: 'do', hint: 'you → do (Present Simple)', explanation: '"How many" + nom pluriel + "do" + sujet + verbe. "How many books do you have?"' },
  { id: 'intr10', type: 'error-correct', level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'What you did yesterday?', answer: 'What did you do yesterday?', hint: 'Question Wh- : What + did + sujet + verbe infinitif', explanation: 'Il faut l\'auxiliaire "did" en question : "What did you do?" Le verbe "do" reste à l\'infinitif.' },
];

exercises.imperatives = [
  { id: 'imp01', type: 'translate', level: 'A2', instruction: 'Traduisez en anglais.', french: 'Ouvre le livre.', answer: 'Open the book.', hint: 'Impératif = verbe seul', explanation: 'L\'impératif anglais = verbe à l\'infinitif sans sujet. "Open the book."' },
  { id: 'imp02', type: 'translate', level: 'A2', instruction: 'Traduisez en anglais.', french: 'Ne parle pas en classe.', answer: "Don't speak in class.", alternatives: ["Do not speak in class."], hint: 'Négatif : Don\'t + verbe', explanation: 'Impératif négatif = "Don\'t" + verbe infinitif. "Don\'t speak in class."' },
  { id: 'imp03', type: 'word-order', level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ["don't", 'be', 'late', '!'], answer: "Don't be late!", hint: 'Don\'t + be + adjectif', explanation: '"Don\'t be late!" — impératif négatif avec "be". On utilise "Don\'t be", jamais "Don\'t are".' },
  { id: 'imp04', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec Let\'s ou Don\'t.', template: "___ forget your homework!", answer: "Don't", hint: 'Conseil négatif → Don\'t', explanation: '"Don\'t forget your homework!" — ordre négatif. "Let\'s" serait utilisé pour une suggestion ("Let\'s study!").' },
  { id: 'imp05', type: 'translate', level: 'A2', instruction: 'Traduisez en anglais.', french: 'Allons à la plage !', answer: "Let's go to the beach!", alternatives: ["Let's go to the beach!"], hint: 'Let\'s + verbe infinitif', explanation: '"Let\'s go to the beach!" — "Let\'s" = "Let us", utilisé pour suggérer une action à faire ensemble.' },
  { id: 'imp06', type: 'error-correct', level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'Not speak in class!', answer: "Don't speak in class!", hint: 'Négatif impératif → Don\'t + verbe', explanation: 'On ne peut pas dire "Not speak" — l\'impératif négatif en anglais c\'est toujours "Don\'t + verbe".' },
  { id: 'imp07', type: 'word-order', level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ['please', 'door', 'the', 'close', '.'], answer: 'Close the door, please.', hint: 'Impératif + please à la fin (ou au début)', explanation: '"Close the door, please." — "please" peut se mettre au début ou à la fin pour être poli.' },
  { id: 'imp08', type: 'translate', level: 'A2', instruction: 'Traduisez en anglais.', french: 'Écoute attentivement, s\'il te plaît.', answer: 'Listen carefully, please.', alternatives: ['Please listen carefully.'], hint: 'Verbe seul + adverbe + please', explanation: '"Listen carefully, please." — l\'adverbe "carefully" vient après le verbe.' },
  { id: 'imp09', type: 'fill-blank', level: 'A2', instruction: 'Complétez l\'impératif.', template: "___ quiet, please. I'm studying.", answer: 'Be', hint: 'Be + adjectif (état)', explanation: '"Be quiet, please." — "be" s\'utilise à l\'impératif devant un adjectif d\'état : "Be careful!", "Be quiet!"' },
  { id: 'imp10', type: 'error-correct', level: 'A2', instruction: "Corrigez l'erreur.", sentence: "Let's to go to the cinema.", answer: "Let's go to the cinema.", hint: 'Let\'s + verbe infinitif (sans "to")', explanation: '"Let\'s" est déjà suivi directement du verbe infinitif, sans "to". "Let\'s go!" et non "Let\'s to go!"' },
];

exercises.someAny = [
  { id: 'sa01', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec some ou any.', template: 'I have ___ rice in the kitchen.', answer: 'some', hint: 'Phrase affirmative → some', explanation: '"Some" s\'utilise dans les phrases affirmatives. "I have some rice in the kitchen."' },
  { id: 'sa02', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec some ou any.', template: 'Do you have ___ money?', answer: 'any', hint: 'Question → any', explanation: '"Any" s\'utilise dans les questions et les négatives. "Do you have any money?"' },
  { id: 'sa03', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec some ou any.', template: "I don't have ___ friends here.", answer: 'any', hint: 'Phrase négative → any', explanation: '"Any" s\'utilise après "don\'t/doesn\'t/didn\'t". "I don\'t have any friends here."' },
  { id: 'sa04', type: 'error-correct', level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'There are some books on the table? Are there some books?', answer: 'Are there any books on the table?', hint: 'Question → any (pas some)', explanation: 'Dans les questions, on utilise normalement "any" : "Are there any books?" (pas "some books?").' },
  { id: 'sa05', type: 'translate', level: 'A2', instruction: 'Traduisez en anglais.', french: 'Il n\'y a pas de lait dans le frigo.', answer: 'There is no milk in the fridge.', alternatives: ["There isn't any milk in the fridge."], hint: 'No + nom = quantité zéro', explanation: '"There is no milk" = quantité zéro. Équivalent : "There isn\'t any milk." Les deux sont corrects.' },
  { id: 'sa06', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec something, anything ou nothing.', template: "I'm hungry. I want ___ to eat.", answer: 'something', hint: 'Affirmatif → something', explanation: '"Something" s\'utilise dans les phrases affirmatives. "I want something to eat."' },
  { id: 'sa07', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec something, anything ou nothing.', template: "There is ___ in the bag. It's empty.", answer: 'nothing', hint: 'Quantité zéro → nothing', explanation: '"Nothing" = rien. "There is nothing in the bag." (Attention : ne pas dire "There isn\'t nothing" — double négation incorrecte.)' },
  { id: 'sa08', type: 'translate', level: 'A2', instruction: 'Traduisez en anglais.', french: 'Est-ce qu\'il y a quelque chose à faire ?', answer: 'Is there anything to do?', alternatives: ['Is there anything to do ?'], hint: 'Question → anything', explanation: '"Is there anything to do?" — dans une question, on utilise "anything" (pas "something").' },
  { id: 'sa09', type: 'word-order', level: 'A2', instruction: 'Mettez les mots dans le bon ordre.', words: ['she', 'have', "doesn't", 'money', 'any', '.'], answer: "She doesn't have any money.", hint: 'doesn\'t + any', explanation: '"She doesn\'t have any money." — négative avec "any". On pourrait aussi dire "She has no money."' },
  { id: 'sa10', type: 'error-correct', level: 'A2', instruction: "Corrigez l'erreur.", sentence: "I don't have no time.", answer: "I don't have any time.", hint: 'Pas de double négation en anglais', explanation: 'En anglais, on évite la double négation. "I don\'t have no time" est incorrect. On dit "I don\'t have any time" ou "I have no time".' },
];

exercises.toBe = [
  { id: 'tobe01', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec am, is ou are.', template: 'I ___ a student.', answer: 'am', hint: 'I → am', explanation: '"I am" — avec I on utilise toujours "am".' },
  { id: 'tobe02', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec am, is ou are.', template: 'She ___ a teacher.', answer: 'is', hint: 'she = he/she/it → is', explanation: '"She is" — avec he/she/it on utilise "is".' },
  { id: 'tobe03', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec am, is ou are.', template: 'They ___ happy.', answer: 'are', hint: 'they → are', explanation: '"They are" — avec you/we/they on utilise "are".' },
  { id: 'tobe04', type: 'translate', level: 'A1', instruction: 'Traduisez en anglais.', french: 'Elle n\'est pas fatiguée.', answer: "She isn't tired.", alternatives: ['She is not tired.'], hint: 'she is + not → isn\'t', explanation: '"She isn\'t tired." — la contraction de "is not" est "isn\'t".' },
  { id: 'tobe05', type: 'word-order', level: 'A1', instruction: 'Mettez les mots dans le bon ordre.', words: ['are', 'you', 'a', 'student', '?'], answer: 'Are you a student?', hint: 'Question : Are + sujet + …', explanation: '"Are you a student?" — on inverse sujet et are pour former une question.' },
  { id: 'tobe06', type: 'fill-blank', level: 'A1', instruction: 'Complétez avec was ou were.', template: 'He ___ at school yesterday.', answer: 'was', hint: 'he → was (passé)', explanation: '"He was" — au passé, he/she/it → was.' },
  { id: 'tobe07', type: 'error-correct', level: 'A1', instruction: "Corrigez l'erreur.", sentence: 'She are my friend.', answer: 'She is my friend.', hint: 'she → is (pas are)', explanation: '"She is my friend." — she/he/it utilise "is", jamais "are".' },
  { id: 'tobe08', type: 'translate', level: 'A1', instruction: 'Traduisez en anglais.', french: 'J\'ai 15 ans.', answer: 'I am 15 years old.', alternatives: ["I'm 15 years old.", 'I am 15.'], hint: 'Âge en anglais = I am … years old', explanation: 'En anglais, l\'âge se dit avec "to be" : "I am 15 years old." Jamais "I have 15 years".' },
  { id: 'tobe09', type: 'fill-blank', level: 'A1', instruction: 'Complétez la réponse courte.', template: 'Are they students? — Yes, they ___.', answer: 'are', hint: 'Réponse courte : Yes, they + are', explanation: '"Yes, they are." — la réponse courte répète le verbe to be.' },
  { id: 'tobe10', type: 'error-correct', level: 'A1', instruction: "Corrigez l'erreur.", sentence: "They was here.", answer: 'They were here.', hint: 'they → were (passé pluriel)', explanation: '"They were here." — au passé, you/we/they utilisent "were".' },
];

exercises.irregularVerbs = [
  { id: 'irr01', type: 'fill-blank', level: 'A2', instruction: 'Donnez le Past Simple.', template: 'go → ___', answer: 'went', hint: 'go est irrégulier — groupe 3', explanation: '"go" → "went" au Past Simple. "I went to school."' },
  { id: 'irr02', type: 'fill-blank', level: 'A2', instruction: 'Donnez le Past Simple.', template: 'have → ___', answer: 'had', hint: 'have est irrégulier — groupe 2', explanation: '"have" → "had". "She had breakfast early."' },
  { id: 'irr03', type: 'fill-blank', level: 'A2', instruction: 'Donnez le Past Simple.', template: 'see → ___', answer: 'saw', hint: 'see est irrégulier — groupe 3', explanation: '"see" → "saw". "I saw a good film yesterday."' },
  { id: 'irr04', type: 'fill-blank', level: 'A2', instruction: 'Donnez le Past Simple.', template: 'buy → ___', answer: 'bought', hint: 'buy est irrégulier — groupe 2', explanation: '"buy" → "bought". "She bought a new dress."' },
  { id: 'irr05', type: 'translate', level: 'A2', instruction: 'Traduisez en anglais.', french: 'Ils ont mangé du riz hier.', answer: 'They ate rice yesterday.', alternatives: ['They ate some rice yesterday.'], hint: 'eat → ate (Past Simple)', explanation: '"eat" → "ate" au Past Simple. "They ate rice yesterday."' },
  { id: 'irr06', type: 'error-correct', level: 'A2', instruction: "Corrigez l'erreur.", sentence: 'She goed to the market.', answer: 'She went to the market.', hint: 'go → went (irrégulier)', explanation: '"go" est irrégulier : "went". Jamais "goed".' },
  { id: 'irr07', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec le participe passé.', template: 'I have ___ (write) two letters.', answer: 'written', hint: 'write → wrote → written', explanation: '"write" → "written" au participe passé (Present Perfect).' },
  { id: 'irr08', type: 'fill-blank', level: 'A2', instruction: 'Complétez avec le participe passé.', template: 'She has ___ (take) my book.', answer: 'taken', hint: 'take → took → taken', explanation: '"take" → "taken" au participe passé.' },
  { id: 'irr09', type: 'word-order', level: 'A2', instruction: 'Mettez dans le bon ordre.', words: ['she', 'the', 'exam', 'passed', '?', 'Did'], answer: 'Did she pass the exam?', hint: 'Did + sujet + infinitif (pas -ed)', explanation: 'Au Past Simple, "Did" + infinitif. Ne pas dire "Did she passed".' },
  { id: 'irr10', type: 'translate', level: 'A2', instruction: 'Traduisez en anglais.', french: 'Nous avons commencé le cours à 8h.', answer: 'We began the lesson at 8.', alternatives: ['We began the class at 8.', 'We began class at 8.', 'We began the lesson at 8am.'], hint: 'begin → began (Past Simple)', explanation: '"begin" → "began" au Past Simple.' },
];

export function getAllExercises() {
  return Object.values(exercises).flat();
}

export function getExercisesByTopic(topicId) {
  return exercises[topicId] || [];
}

export function getExerciseById(id) {
  return getAllExercises().find(ex => ex.id === id);
}

/**
 * Returns exercises for a specific difficulty tier (1 = easy, 2 = medium, 3 = hard).
 * Assignment strategy:
 *  - If the topic has exercises with mixed `level` values → map A1→1, A2→2, B1/B2→3
 *  - If all exercises share the same `level` → distribute by position (thirds)
 *  - Falls back to full topic pool if a tier has 0 exercises
 */
export function getExercisesByLevel(topicId, diffLevel) {
  const pool = exercises[topicId] || [];
  if (!pool.length) return [];

  const LEVEL_TO_DIFF = { A1: 1, A2: 2, B1: 3, 'B1-B2': 3, B2: 3 };

  // Check if pool has mixed levels
  const levels = new Set(pool.map(e => e.level));
  let filtered;

  if (levels.size > 1) {
    // Mixed levels → assign by level tag
    filtered = pool.filter(e => (LEVEL_TO_DIFF[e.level] || 2) === diffLevel);
  } else {
    // Uniform level → distribute by position
    const third = Math.ceil(pool.length / 3);
    const ranges = [
      pool.slice(0, third),
      pool.slice(third, third * 2),
      pool.slice(third * 2),
    ];
    filtered = ranges[diffLevel - 1] || [];
  }

  // Fallback: if this tier is empty, use the full pool
  return filtered.length >= 2 ? filtered : pool;
}
