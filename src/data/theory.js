export const theory = {

  presentSimple: {
    id: 'presentSimple',
    title: 'Present Simple',
    icon: '📖',
    level: 'A1–A2',
    subtitle: 'Pour les habitudes, routines et vérités générales',
    malgasyNote: 'Ampiasaina ho an\'ny zava-mahazatra sy ny marina mandrakariva',
    sections: [
      {
        title: '✅ Forme affirmative',
        content: 'Sujet + verbe (+ <strong>-s/-es</strong> avec he/she/it)',
        examples: [
          { en: 'I go to school every day.', fr: 'Je vais à l\'école tous les jours.' },
          { en: 'She works at a hospital.', fr: 'Elle travaille dans un hôpital.' },
          { en: 'They eat rice every day.', fr: 'Ils mangent du riz tous les jours.' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>don\'t</strong> / <strong>doesn\'t</strong> + verbe infinitif',
        examples: [
          { en: 'I don\'t like coffee.', fr: 'Je n\'aime pas le café.' },
          { en: 'He doesn\'t speak English.', fr: 'Il ne parle pas anglais.' },
          { en: 'We don\'t have class on Sunday.', fr: 'Nous n\'avons pas cours le dimanche.' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Do</strong> / <strong>Does</strong> + sujet + verbe infinitif ?',
        examples: [
          { en: 'Do you speak French?', fr: 'Est-ce que tu parles français ?' },
          { en: 'Does she live in Antananarivo?', fr: 'Est-ce qu\'elle habite à Antananarivo ?' },
          { en: 'Do they go to school?', fr: 'Est-ce qu\'ils vont à l\'école ?' },
        ]
      },
      {
        title: '⚠️ Règle du -s',
        content: 'Avec <strong>he / she / it</strong>, on ajoute <strong>-s</strong> ou <strong>-es</strong>',
        examples: [
          { en: 'work → he work<strong>s</strong>', fr: 'travailler → il travaille' },
          { en: 'go → she go<strong>es</strong>', fr: 'aller → elle va' },
          { en: 'study → he studi<strong>es</strong>', fr: 'étudier → il étudie' },
          { en: 'have → he <strong>has</strong> (irrégulier !)', fr: 'avoir → il a' },
          { en: 'be → she <strong>is</strong> (irrégulier !)', fr: 'être → elle est' },
        ]
      },
      {
        title: '🧠 Verbes d\'état (pas de continuous)',
        content: 'Ces verbes ne s\'utilisent <em>jamais</em> avec -ing au présent',
        examples: [
          { en: 'I <strong>know</strong> the answer. (pas "I am knowing")', fr: 'Je connais la réponse.' },
          { en: 'She <strong>likes</strong> music. (pas "she is liking")', fr: 'Elle aime la musique.' },
          { en: 'He <strong>wants</strong> to eat.', fr: 'Il veut manger.' },
          { en: 'They <strong>understand</strong> French.', fr: 'Ils comprennent le français.' },
        ]
      },
      {
        title: '📅 Quand l\'utiliser ?',
        content: 'Situations clés du Present Simple',
        examples: [
          { en: 'The sun <strong>rises</strong> in the east. (vérité générale)', fr: 'Le soleil se lève à l\'est.' },
          { en: 'I <strong>visit</strong> my family every Sunday. (habitude)', fr: 'Je rends visite à ma famille chaque dimanche.' },
          { en: 'The train <strong>leaves</strong> at 8 am. (horaire fixe)', fr: 'Le train part à 8h.' },
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : always, usually, often, sometimes, rarely, never',
      '🔑 Expressions de temps : every day/week, on Mondays, in the morning, twice a week',
      '⚠️ he/she/it → toujours avec -s : she goes, he has, it rains',
      '💡 Verbes d\'état : know, like, love, hate, want, need, understand, believe, see, hear',
    ]
  },

  presentContinuous: {
    id: 'presentContinuous',
    title: 'Present Continuous',
    icon: '🔄',
    level: 'A2',
    subtitle: 'Pour les actions en cours au moment où on parle',
    malgasyNote: 'Ho an\'ny zavatra atao amin\'izao fotoana izao',
    sections: [
      {
        title: '✅ Forme affirmative',
        content: 'Sujet + <strong>am/is/are</strong> + verbe<strong>-ing</strong>',
        examples: [
          { en: 'I am reading a book.', fr: 'Je suis en train de lire un livre.' },
          { en: 'She is cooking dinner.', fr: 'Elle est en train de préparer le dîner.' },
          { en: 'They are playing football.', fr: 'Ils sont en train de jouer au football.' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>am/is/are not</strong> + verbe<strong>-ing</strong>',
        examples: [
          { en: 'I\'m not sleeping.', fr: 'Je ne dors pas.' },
          { en: 'He isn\'t working today.', fr: 'Il ne travaille pas aujourd\'hui.' },
          { en: 'They aren\'t listening.', fr: 'Ils n\'écoutent pas.' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Am/Is/Are</strong> + sujet + verbe<strong>-ing</strong> ?',
        examples: [
          { en: 'Are you listening?', fr: 'Tu écoutes ?' },
          { en: 'Is she coming?', fr: 'Est-ce qu\'elle vient ?' },
          { en: 'What are you doing?', fr: 'Qu\'est-ce que tu fais ?' },
        ]
      },
      {
        title: '⚠️ Orthographe du -ing',
        content: 'Règles importantes pour ajouter -ing',
        examples: [
          { en: 'run → runn<strong>ing</strong> (double la consonne finale CVC)', fr: 'courir' },
          { en: 'come → com<strong>ing</strong> (enlève le -e final)', fr: 'venir' },
          { en: 'play → play<strong>ing</strong> (normal)', fr: 'jouer' },
          { en: 'swim → swimm<strong>ing</strong>', fr: 'nager' },
          { en: 'write → writ<strong>ing</strong> (enlève le -e)', fr: 'écrire' },
        ]
      },
      {
        title: '📅 Futur proche avec Continuous',
        content: 'Le Present Continuous peut exprimer un plan déjà organisé',
        examples: [
          { en: 'I <strong>am meeting</strong> her tomorrow. (rendez-vous fixé)', fr: 'Je la rencontre demain.' },
          { en: 'They <strong>are leaving</strong> on Friday.', fr: 'Ils partent vendredi.' },
          { en: 'We <strong>are having</strong> a party next week.', fr: 'Nous organisons une fête la semaine prochaine.' },
        ]
      },
      {
        title: '⚡ Situations temporaires vs permanentes',
        content: 'Continuous = temporaire · Simple = permanent',
        examples: [
          { en: 'I <strong>am living</strong> in Antananarivo. (pour le moment)', fr: 'J\'habite à Antananarivo en ce moment.' },
          { en: 'I <strong>live</strong> in Madagascar. (permanent)', fr: 'J\'habite à Madagascar.' },
          { en: 'She <strong>is working</strong> at a café this summer.', fr: 'Elle travaille dans un café cet été.' },
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : now, right now, at the moment, currently, look!, listen!, today',
      '⚠️ Ne pas utiliser avec : know, like, love, want, understand, believe (verbes d\'état)',
      '💡 I am → I\'m | He is → He\'s | They are → They\'re | She is not → She isn\'t',
      '📅 Plan futur : "I am seeing the doctor tomorrow."',
    ]
  },

  pastSimple: {
    id: 'pastSimple',
    title: 'Past Simple',
    icon: '⏮️',
    level: 'A2–B1',
    subtitle: 'Pour les actions terminées dans le passé',
    malgasyNote: 'Ho an\'ny zavatra nitranga sy vita teo aloha',
    sections: [
      {
        title: '✅ Verbes réguliers',
        content: 'Sujet + verbe + <strong>-ed</strong>',
        examples: [
          { en: 'I walked to school yesterday.', fr: 'J\'ai marché jusqu\'à l\'école hier.' },
          { en: 'She finished her homework.', fr: 'Elle a terminé ses devoirs.' },
          { en: 'They played football last week.', fr: 'Ils ont joué au football la semaine dernière.' },
        ]
      },
      {
        title: '⚠️ Orthographe des verbes réguliers',
        content: 'Règles d\'ajout de <strong>-ed</strong>',
        examples: [
          { en: 'work → work<strong>ed</strong> (normal)', fr: 'travailler' },
          { en: 'live → liv<strong>ed</strong> (enlève -e final)', fr: 'vivre' },
          { en: 'stop → stopp<strong>ed</strong> (double la consonne CVC)', fr: 'arrêter' },
          { en: 'study → studi<strong>ed</strong> (y → ied)', fr: 'étudier' },
        ]
      },
      {
        title: '⚡ Verbes irréguliers',
        content: 'Certains verbes changent complètement de forme !',
        examples: [
          { en: 'go → <strong>went</strong>', fr: 'aller' },
          { en: 'have → <strong>had</strong>', fr: 'avoir' },
          { en: 'see → <strong>saw</strong>', fr: 'voir' },
          { en: 'come → <strong>came</strong>', fr: 'venir' },
          { en: 'buy → <strong>bought</strong>', fr: 'acheter' },
          { en: 'do → <strong>did</strong>', fr: 'faire' },
          { en: 'say → <strong>said</strong>', fr: 'dire' },
          { en: 'get → <strong>got</strong>', fr: 'obtenir/devenir' },
          { en: 'make → <strong>made</strong>', fr: 'faire/fabriquer' },
          { en: 'take → <strong>took</strong>', fr: 'prendre' },
          { en: 'give → <strong>gave</strong>', fr: 'donner' },
          { en: 'know → <strong>knew</strong>', fr: 'savoir/connaître' },
          { en: 'write → <strong>wrote</strong>', fr: 'écrire' },
          { en: 'eat → <strong>ate</strong>', fr: 'manger' },
          { en: 'drink → <strong>drank</strong>', fr: 'boire' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>didn\'t</strong> + verbe infinitif (pour TOUS les sujets)',
        examples: [
          { en: 'I didn\'t go to school.', fr: 'Je ne suis pas allé à l\'école.' },
          { en: 'She didn\'t eat breakfast.', fr: 'Elle n\'a pas mangé le petit-déjeuner.' },
          { en: 'They didn\'t understand.', fr: 'Ils n\'ont pas compris.' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Did</strong> + sujet + verbe infinitif ? (pour TOUS les sujets)',
        examples: [
          { en: 'Did you go to the market?', fr: 'Est-ce que tu es allé au marché ?' },
          { en: 'Did she call you?', fr: 'Est-ce qu\'elle t\'a appelé ?' },
          { en: 'Where did they go?', fr: 'Où sont-ils allés ?' },
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : yesterday, last night/week/year, ago, in 2005, just now, the other day',
      '⚠️ Après didn\'t et did, TOUJOURS l\'infinitif : didn\'t go (pas didn\'t went)',
      '📝 Liste prioritaire : go/went, have/had, come/came, see/saw, eat/ate, do/did, say/said, get/got',
      '💡 "Two years ago" = il y a deux ans | "last Monday" = lundi dernier',
    ]
  },

  futureSimple: {
    id: 'futureSimple',
    title: 'Future Simple',
    icon: '🚀',
    level: 'A2–B1',
    subtitle: 'Pour les décisions, prédictions et promesses',
    malgasyNote: 'Ho an\'ny fanapahan-kevitra, fandaharam-potoana sy teny fikasana',
    sections: [
      {
        title: '✅ Forme affirmative',
        content: 'Sujet + <strong>will</strong> + verbe infinitif (même forme pour tous !)',
        examples: [
          { en: 'I will help you.', fr: 'Je vais t\'aider. / Je t\'aiderai.' },
          { en: 'She will be a doctor.', fr: 'Elle sera médecin.' },
          { en: 'They will come tomorrow.', fr: 'Ils viendront demain.' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>won\'t</strong> (will not) + verbe infinitif',
        examples: [
          { en: 'I won\'t be late.', fr: 'Je ne serai pas en retard.' },
          { en: 'He won\'t come to school.', fr: 'Il ne viendra pas à l\'école.' },
          { en: 'It won\'t rain today.', fr: 'Il ne pleuvra pas aujourd\'hui.' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Will</strong> + sujet + verbe infinitif ?',
        examples: [
          { en: 'Will you help me?', fr: 'Est-ce que tu m\'aideras ?' },
          { en: 'Will she pass the exam?', fr: 'Est-ce qu\'elle réussira l\'examen ?' },
          { en: 'What will they do?', fr: 'Qu\'est-ce qu\'ils feront ?' },
        ]
      },
      {
        title: '💡 Going to vs Will',
        content: '"Be going to" = plan déjà décidé · "will" = décision spontanée ou prédiction',
        examples: [
          { en: 'I\'m going to study medicine. (plan)', fr: 'Je vais étudier la médecine. (décision prise)' },
          { en: 'I\'ll help you carry that! (décision spontanée)', fr: 'Je vais t\'aider à porter ça !' },
          { en: 'Look at those clouds — it\'s going to rain. (évidence)', fr: 'Regarde ces nuages — ça va pleuvoir.' },
          { en: 'I think he\'ll be a good doctor. (prédiction)', fr: 'Je pense qu\'il sera un bon médecin.' },
        ]
      },
      {
        title: '⏰ Propositions conditionnelles + futur',
        content: 'Avec "if", "when", "as soon as" → présent (pas de will dans la subordonnée)',
        examples: [
          { en: 'If it <strong>rains</strong>, I <strong>will</strong> stay home.', fr: 'S\'il pleut, je resterai à la maison.' },
          { en: 'When I <strong>finish</strong>, I will call you.', fr: 'Quand j\'aurai fini, je t\'appellerai.' },
          { en: 'As soon as she <strong>arrives</strong>, we will start.', fr: 'Dès qu\'elle arrive, nous commençons.' },
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : tomorrow, next week/year, in the future, one day, soon, in 10 years',
      '⚠️ Après "will", TOUJOURS l\'infinitif : will go, will be, will have',
      '💡 will = \'ll | will not = won\'t | Pas de will après if/when/as soon as',
      '🔑 "Be going to" + infinitif : I am going to work, she is going to study',
    ]
  },

  articles: {
    id: 'articles',
    title: 'Les Articles (a, an, the)',
    icon: '🔤',
    level: 'A1',
    subtitle: 'Comment utiliser a, an et the correctement',
    malgasyNote: 'Ny "a/an" dia ampiasaina rehefa zavatra iray tsy voafaritra',
    sections: [
      {
        title: '🅰️ A / An (indéfini)',
        content: '<strong>A</strong> devant consonne · <strong>An</strong> devant voyelle (a, e, i, o, u)',
        examples: [
          { en: '<strong>a</strong> book, <strong>a</strong> car, <strong>a</strong> teacher', fr: 'un livre, une voiture, un professeur' },
          { en: '<strong>an</strong> apple, <strong>an</strong> elephant, <strong>an</strong> hour', fr: 'une pomme, un éléphant, une heure' },
          { en: '<strong>a</strong> university (son "you")', fr: 'une université (exception : son consonne)' },
        ]
      },
      {
        title: '🅾️ The (défini)',
        content: '<strong>The</strong> = quand on sait de quoi on parle (spécifique)',
        examples: [
          { en: '<strong>The</strong> sun is hot today.', fr: 'Le soleil est chaud aujourd\'hui.' },
          { en: 'I read <strong>the</strong> book you gave me.', fr: 'J\'ai lu le livre que tu m\'as donné.' },
          { en: 'Close <strong>the</strong> door, please.', fr: 'Ferme la porte, s\'il te plaît.' },
        ]
      },
      {
        title: '🚫 Sans article',
        content: 'Pas d\'article devant : noms pluriels généraux, noms abstraits, repas, langues',
        examples: [
          { en: 'I love ___ music. (pas d\'article)', fr: 'J\'aime la musique.' },
          { en: 'She speaks ___ English.', fr: 'Elle parle anglais.' },
          { en: 'We have ___ breakfast at 7.', fr: 'On prend le petit-déjeuner à 7h.' },
        ]
      },
    ],
    tips: [
      '🔑 Première mention = a/an. Deuxième mention = the.',
      '⚠️ "An hour" (h muet), mais "a hotel" (h prononcé)',
      '💡 Noms non-dénombrables (water, rice) : souvent sans article',
    ]
  },

  pronouns: {
    id: 'pronouns',
    title: 'Les Pronoms',
    icon: '👥',
    level: 'A1',
    subtitle: 'Sujet, objet, possessifs',
    malgasyNote: 'Solon\'anarana : izaho, ianao, izy, isika...',
    sections: [
      {
        title: '🧍 Pronoms sujets',
        content: 'Celui qui fait l\'action',
        examples: [
          { en: '<strong>I</strong> am a student. (je)', fr: 'Je suis étudiant.' },
          { en: '<strong>You</strong> are kind. (tu / vous)', fr: 'Tu es gentil.' },
          { en: '<strong>He / She / It</strong> is here. (il / elle)', fr: 'Il / Elle est ici.' },
          { en: '<strong>We / You / They</strong> are friends.', fr: 'Nous / Vous / Ils sont amis.' },
        ]
      },
      {
        title: '🎯 Pronoms objets',
        content: 'Celui qui subit l\'action (après le verbe)',
        examples: [
          { en: 'She loves <strong>me</strong>. (moi)', fr: 'Elle m\'aime.' },
          { en: 'I see <strong>you</strong>. (toi)', fr: 'Je te vois.' },
          { en: 'We call <strong>him / her / it</strong>.', fr: 'On l\'appelle.' },
          { en: 'They help <strong>us / you / them</strong>.', fr: 'Ils nous / vous / les aident.' },
        ]
      },
      {
        title: '🔐 Adjectifs possessifs',
        content: 'Devant un nom : mon, ton, son...',
        examples: [
          { en: '<strong>my</strong> book, <strong>your</strong> pen', fr: 'mon livre, ton stylo' },
          { en: '<strong>his</strong> bag (à lui), <strong>her</strong> bag (à elle)', fr: 'son sac' },
          { en: '<strong>our</strong> house, <strong>their</strong> car', fr: 'notre maison, leur voiture' },
        ]
      },
      {
        title: '💎 Pronoms possessifs',
        content: 'Seuls, sans nom : le mien, le tien...',
        examples: [
          { en: 'This book is <strong>mine</strong>.', fr: 'Ce livre est le mien.' },
          { en: 'Is this pen <strong>yours</strong>?', fr: 'Ce stylo est à toi ?' },
          { en: 'The car is <strong>theirs</strong>.', fr: 'La voiture est la leur.' },
        ]
      },
    ],
    tips: [
      '⚠️ "It" s\'utilise pour les objets, animaux, le temps : "It is raining."',
      '🔑 His (à lui) ≠ Her (à elle). Attention à ne pas confondre !',
      '💡 Ordre possessif : my < our < your < his/her/its < their',
    ]
  },

  questions: {
    id: 'questions',
    title: 'Les Questions (Wh-)',
    icon: '❓',
    level: 'A1–A2',
    subtitle: 'What, Who, Where, When, Why, How',
    malgasyNote: 'Fomba fametrahana fanontaniana amin\'ny teny anglisy',
    sections: [
      {
        title: '🙋 Les mots interrogatifs',
        content: 'Chaque "wh-word" a un sens précis',
        examples: [
          { en: '<strong>What</strong>? (Quoi ?)', fr: 'What is your name? — Quel est ton nom ?' },
          { en: '<strong>Who</strong>? (Qui ?)', fr: 'Who is that? — Qui est-ce ?' },
          { en: '<strong>Where</strong>? (Où ?)', fr: 'Where do you live? — Où habites-tu ?' },
          { en: '<strong>When</strong>? (Quand ?)', fr: 'When does it start? — Quand ça commence ?' },
          { en: '<strong>Why</strong>? (Pourquoi ?)', fr: 'Why are you sad? — Pourquoi es-tu triste ?' },
          { en: '<strong>How</strong>? (Comment ?)', fr: 'How are you? — Comment vas-tu ?' },
        ]
      },
      {
        title: '🔨 Structure de la question',
        content: '<strong>Wh- + auxiliaire + sujet + verbe ?</strong>',
        examples: [
          { en: 'Where <strong>do</strong> you <strong>live</strong>?', fr: 'Où habites-tu ?' },
          { en: 'What <strong>does</strong> she <strong>want</strong>?', fr: 'Que veut-elle ?' },
          { en: 'Why <strong>did</strong> they <strong>leave</strong>?', fr: 'Pourquoi sont-ils partis ?' },
          { en: 'When <strong>will</strong> you <strong>come</strong>?', fr: 'Quand viendras-tu ?' },
        ]
      },
      {
        title: '📏 How + adjectif / adverbe',
        content: '"How" se combine souvent',
        examples: [
          { en: '<strong>How old</strong> are you?', fr: 'Quel âge as-tu ?' },
          { en: '<strong>How many</strong> brothers?', fr: 'Combien de frères ?' },
          { en: '<strong>How much</strong> money?', fr: 'Combien d\'argent ?' },
          { en: '<strong>How often</strong> do you study?', fr: 'À quelle fréquence étudies-tu ?' },
        ]
      },
    ],
    tips: [
      '🔑 How many (dénombrable : books, pens) vs How much (non-dénombrable : money, water)',
      '⚠️ "Who" peut être sujet : "Who called?" (sans "did")',
      '💡 Question Yes/No : sans wh-word. "Do you speak English?"',
    ]
  },

  prepositions: {
    id: 'prepositions',
    title: 'Prépositions (in, on, at)',
    icon: '📍',
    level: 'A1–A2',
    subtitle: 'Temps et lieu',
    malgasyNote: 'Ireo mpampitohy manondro toerana sy fotoana',
    sections: [
      {
        title: '⏰ Prépositions de temps',
        content: 'IN / ON / AT pour parler du temps',
        examples: [
          { en: '<strong>at</strong> 7 o\'clock, <strong>at</strong> noon, <strong>at</strong> night', fr: 'Heure précise : AT' },
          { en: '<strong>on</strong> Monday, <strong>on</strong> July 5th', fr: 'Jours/dates : ON' },
          { en: '<strong>in</strong> January, <strong>in</strong> 2025, <strong>in</strong> the morning', fr: 'Mois/années/périodes : IN' },
        ]
      },
      {
        title: '📍 Prépositions de lieu',
        content: 'IN / ON / AT pour parler du lieu',
        examples: [
          { en: '<strong>at</strong> school, <strong>at</strong> home, <strong>at</strong> the bus stop', fr: 'Point précis : AT' },
          { en: '<strong>on</strong> the table, <strong>on</strong> the wall', fr: 'Surface : ON' },
          { en: '<strong>in</strong> the box, <strong>in</strong> Madagascar, <strong>in</strong> the room', fr: 'À l\'intérieur : IN' },
        ]
      },
      {
        title: '🧭 Autres prépositions importantes',
        content: 'Mouvement et position',
        examples: [
          { en: '<strong>to</strong> school (vers)', fr: 'I go to school.' },
          { en: '<strong>from</strong> home (depuis)', fr: 'I come from home.' },
          { en: '<strong>under / above / next to</strong>', fr: 'sous / au-dessus / à côté de' },
          { en: '<strong>between</strong> A and B', fr: 'entre A et B' },
        ]
      },
    ],
    tips: [
      '🔑 Astuce : AT (point), ON (surface), IN (dedans)',
      '⚠️ "on Monday" mais "in the morning" — mémoriser les combinaisons',
      '💡 Exception : "at night" (pas "in the night")',
    ]
  },

  comparatives: {
    id: 'comparatives',
    title: 'Comparatifs et Superlatifs',
    icon: '⚖️',
    level: 'A2',
    subtitle: 'Plus... que / le plus...',
    malgasyNote: 'Fampitahana : kokoa, indrindra',
    sections: [
      {
        title: '📈 Comparatif (plus... que)',
        content: 'Adjectif court + <strong>-er than</strong>',
        examples: [
          { en: 'Tom is tall<strong>er than</strong> me.', fr: 'Tom est plus grand que moi.' },
          { en: 'This car is fast<strong>er than</strong> that one.', fr: 'Cette voiture est plus rapide.' },
          { en: 'My book is old<strong>er than</strong> yours.', fr: 'Mon livre est plus vieux.' },
        ]
      },
      {
        title: '📉 Adjectifs longs',
        content: '<strong>More</strong> + adjectif + <strong>than</strong>',
        examples: [
          { en: 'English is <strong>more</strong> difficult <strong>than</strong> French.', fr: 'L\'anglais est plus difficile.' },
          { en: 'She is <strong>more</strong> intelligent <strong>than</strong> him.', fr: 'Elle est plus intelligente.' },
          { en: 'This film is <strong>more</strong> interesting.', fr: 'Ce film est plus intéressant.' },
        ]
      },
      {
        title: '🏆 Superlatif (le plus...)',
        content: 'Adjectif court : <strong>the ___-est</strong> | Long : <strong>the most ___</strong>',
        examples: [
          { en: 'She is <strong>the tallest</strong> in the class.', fr: 'Elle est la plus grande de la classe.' },
          { en: 'This is <strong>the most beautiful</strong> city.', fr: 'C\'est la plus belle ville.' },
          { en: 'Monday is <strong>the worst</strong> day!', fr: 'Lundi est le pire jour !' },
        ]
      },
      {
        title: '⚡ Irréguliers',
        content: 'À apprendre par cœur',
        examples: [
          { en: 'good → <strong>better</strong> → <strong>the best</strong>', fr: 'bon / meilleur / le meilleur' },
          { en: 'bad → <strong>worse</strong> → <strong>the worst</strong>', fr: 'mauvais / pire / le pire' },
          { en: 'far → <strong>farther</strong> → <strong>the farthest</strong>', fr: 'loin / plus loin / le plus loin' },
        ]
      },
    ],
    tips: [
      '🔑 Règle 1 syllabe : + -er / -est (tall → taller → tallest)',
      '⚠️ "happy" → "happier" (y devient i)',
      '💡 "as... as" = aussi... que : "She is as tall as me."',
    ]
  },

  modals: {
    id: 'modals',
    title: 'Verbes Modaux (can, must, should)',
    icon: '🛠️',
    level: 'A2',
    subtitle: 'Capacité, obligation, conseil',
    malgasyNote: 'Matoanteny manambara fahaizana, tsy maintsy, tokony',
    sections: [
      {
        title: '💪 Can / Can\'t (pouvoir)',
        content: 'Capacité ou permission · Suivi d\'un <strong>verbe à l\'infinitif sans "to"</strong>',
        examples: [
          { en: 'I <strong>can</strong> swim. (je sais nager)', fr: 'Je sais / peux nager.' },
          { en: 'She <strong>can\'t</strong> drive.', fr: 'Elle ne sait pas conduire.' },
          { en: '<strong>Can</strong> I open the window?', fr: 'Puis-je ouvrir la fenêtre ?' },
        ]
      },
      {
        title: '❗ Must / Mustn\'t (devoir)',
        content: 'Obligation forte ou interdiction',
        examples: [
          { en: 'You <strong>must</strong> study for the test.', fr: 'Tu dois étudier.' },
          { en: 'You <strong>mustn\'t</strong> be late.', fr: 'Tu ne dois pas être en retard.' },
          { en: 'We <strong>must</strong> help our family.', fr: 'Nous devons aider notre famille.' },
        ]
      },
      {
        title: '💡 Should / Shouldn\'t (conseil)',
        content: 'Suggestion ou conseil (moins fort que "must")',
        examples: [
          { en: 'You <strong>should</strong> drink more water.', fr: 'Tu devrais boire plus d\'eau.' },
          { en: 'He <strong>shouldn\'t</strong> eat so much sugar.', fr: 'Il ne devrait pas manger tant de sucre.' },
          { en: '<strong>Should</strong> I call her?', fr: 'Devrais-je l\'appeler ?' },
        ]
      },
      {
        title: '🔑 Have to (obligation externe)',
        content: 'Obligation venant de l\'extérieur (règles, loi)',
        examples: [
          { en: 'I <strong>have to</strong> go to school at 7.', fr: 'Je dois aller à l\'école à 7h.' },
          { en: 'She <strong>has to</strong> work on Saturday.', fr: 'Elle doit travailler samedi.' },
          { en: 'We <strong>don\'t have to</strong> wear uniforms.', fr: 'Nous n\'avons pas à porter d\'uniforme.' },
        ]
      },
      {
        title: '🕰️ Could (passé de can / possibilité)',
        content: 'Capacité passée, ou possibilité moins certaine',
        examples: [
          { en: 'When I was young, I <strong>could</strong> run fast.', fr: 'Quand j\'étais jeune, je pouvais courir vite.' },
          { en: 'It <strong>could</strong> rain later. (possibilité)', fr: 'Il pourrait pleuvoir plus tard.' },
          { en: '<strong>Could</strong> you help me? (demande polie)', fr: 'Pourriez-vous m\'aider ?' },
        ]
      },
      {
        title: '🤔 Might (probabilité faible)',
        content: 'Possibilité incertaine (~30-50%)',
        examples: [
          { en: 'I <strong>might</strong> come to the party.', fr: 'Je viendrai peut-être à la fête.' },
          { en: 'She <strong>might</strong> be sick.', fr: 'Elle est peut-être malade.' },
          { en: 'It <strong>might not</strong> be true.', fr: 'Ce n\'est peut-être pas vrai.' },
        ]
      },
      {
        title: '💭 Would (conditionnel / politesse)',
        content: 'Action hypothétique, ou demande très polie',
        examples: [
          { en: 'I <strong>would</strong> travel the world if I had money.', fr: 'Je voyagerais dans le monde si j\'avais de l\'argent.' },
          { en: '<strong>Would</strong> you like some tea?', fr: 'Voulez-vous du thé ?' },
          { en: 'She <strong>would</strong> help you if she could.', fr: 'Elle t\'aiderait si elle pouvait.' },
        ]
      },
    ],
    tips: [
      '🔑 Modaux : PAS de -s à la 3e pers. singulier (She can, She must, He might)',
      '⚠️ Après un modal : verbe infinitif SANS "to" (can go, might rain, would help)',
      '💡 must = obligation personnelle ; have to = obligation extérieure',
      '📊 Certitude : must > should > can > could > might > would',
    ]
  },

  plurals: {
    id: 'plurals',
    title: 'Les Pluriels',
    icon: '🔢',
    level: 'A1',
    subtitle: 'Règles régulières et irrégulières',
    malgasyNote: 'Ny fomba fanaovana anarana maromaro',
    sections: [
      {
        title: '✅ Règle générale',
        content: 'Ajoutez <strong>-s</strong> à la fin',
        examples: [
          { en: 'book → book<strong>s</strong>', fr: 'livre → livres' },
          { en: 'car → car<strong>s</strong>', fr: 'voiture → voitures' },
          { en: 'friend → friend<strong>s</strong>', fr: 'ami → amis' },
        ]
      },
      {
        title: '📝 Mots en -s, -x, -ch, -sh',
        content: 'Ajoutez <strong>-es</strong>',
        examples: [
          { en: 'bus → bus<strong>es</strong>', fr: 'bus' },
          { en: 'box → box<strong>es</strong>', fr: 'boîte → boîtes' },
          { en: 'watch → watch<strong>es</strong>', fr: 'montre → montres' },
        ]
      },
      {
        title: '🔁 Mots en -y',
        content: 'Consonne + y → <strong>-ies</strong>',
        examples: [
          { en: 'baby → bab<strong>ies</strong>', fr: 'bébé → bébés' },
          { en: 'city → cit<strong>ies</strong>', fr: 'ville → villes' },
          { en: 'boy → boy<strong>s</strong> (voyelle + y, règle normale)', fr: 'garçon' },
        ]
      },
      {
        title: '⚡ Pluriels irréguliers',
        content: 'À mémoriser !',
        examples: [
          { en: 'man → <strong>men</strong>', fr: 'homme → hommes' },
          { en: 'woman → <strong>women</strong>', fr: 'femme → femmes' },
          { en: 'child → <strong>children</strong>', fr: 'enfant → enfants' },
          { en: 'foot → <strong>feet</strong>', fr: 'pied → pieds' },
          { en: 'tooth → <strong>teeth</strong>', fr: 'dent → dents' },
          { en: 'mouse → <strong>mice</strong>', fr: 'souris' },
          { en: 'person → <strong>people</strong>', fr: 'personne → personnes' },
        ]
      },
    ],
    tips: [
      '⚠️ "people" est déjà pluriel (pas de "peoples")',
      '🔑 Fish, sheep : même forme au singulier et pluriel',
      '💡 Non-dénombrables (water, rice, money) : pas de pluriel',
    ]
  },

  therebeis: {
    id: 'therebeis',
    title: 'There is / There are',
    icon: '📌',
    level: 'A1',
    subtitle: 'Pour dire "il y a"',
    malgasyNote: 'Mba hilazana hoe "misy"',
    sections: [
      {
        title: '✅ Affirmatif',
        content: '<strong>There is</strong> (singulier) · <strong>There are</strong> (pluriel)',
        examples: [
          { en: '<strong>There is</strong> a book on the table.', fr: 'Il y a un livre sur la table.' },
          { en: '<strong>There are</strong> five students in the class.', fr: 'Il y a cinq étudiants dans la classe.' },
          { en: '<strong>There\'s</strong> a dog in the garden.', fr: 'Il y a un chien dans le jardin.' },
        ]
      },
      {
        title: '❌ Négatif',
        content: '<strong>There isn\'t</strong> / <strong>There aren\'t</strong>',
        examples: [
          { en: '<strong>There isn\'t</strong> any milk.', fr: 'Il n\'y a pas de lait.' },
          { en: '<strong>There aren\'t</strong> many people here.', fr: 'Il n\'y a pas beaucoup de monde.' },
        ]
      },
      {
        title: '❓ Question',
        content: '<strong>Is there</strong> / <strong>Are there</strong>',
        examples: [
          { en: '<strong>Is there</strong> a hospital near here?', fr: 'Y a-t-il un hôpital près d\'ici ?' },
          { en: '<strong>Are there</strong> any questions?', fr: 'Y a-t-il des questions ?' },
          { en: 'How many students <strong>are there</strong>?', fr: 'Combien d\'étudiants y a-t-il ?' },
        ]
      },
    ],
    tips: [
      '🔑 Au passé : There was / There were',
      '⚠️ "there is" ≠ "it is". "There is a pen" = il y a un stylo. "It is a pen" = c\'est un stylo.',
      '💡 Avec "a" / "an" (singulier) : there is. Avec chiffre ou pluriel : there are.',
    ]
  },

  pastContinuous: {
    id: 'pastContinuous',
    title: 'Past Continuous',
    icon: '⏸️',
    level: 'B1',
    subtitle: 'Action en cours dans le passé, interrompue ou parallèle',
    malgasyNote: 'Hetsika nifanindrana na nitranga teo aloha',
    sections: [
      {
        title: '✅ Forme affirmative',
        content: 'Sujet + <strong>was/were</strong> + verbe<strong>-ing</strong>',
        examples: [
          { en: 'I <strong>was reading</strong> when you called.', fr: 'J\'étais en train de lire quand tu as appelé.' },
          { en: 'They <strong>were playing</strong> football at 5pm.', fr: 'Ils jouaient au football à 17h.' },
          { en: 'She <strong>was cooking</strong> dinner all evening.', fr: 'Elle préparait le dîner toute la soirée.' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>wasn\'t / weren\'t</strong> + verbe<strong>-ing</strong>',
        examples: [
          { en: 'I <strong>wasn\'t sleeping</strong>, I was studying.', fr: 'Je ne dormais pas, j\'étudiais.' },
          { en: 'They <strong>weren\'t listening</strong> to the teacher.', fr: 'Ils n\'écoutaient pas le professeur.' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Was/Were</strong> + sujet + verbe<strong>-ing</strong> ?',
        examples: [
          { en: '<strong>Were</strong> you <strong>studying</strong> last night?', fr: 'Tu étudiais hier soir ?' },
          { en: '<strong>Was</strong> she <strong>working</strong> at 3pm?', fr: 'Elle travaillait à 15h ?' },
        ]
      },
      {
        title: '🔗 Past Continuous + Past Simple',
        content: 'Action longue (continuous) + action courte (simple)',
        examples: [
          { en: 'I <strong>was walking</strong> home when I <strong>saw</strong> an accident.', fr: 'Je rentrais à pied quand j\'ai vu un accident.' },
          { en: 'While she <strong>was studying</strong>, her phone <strong>rang</strong>.', fr: 'Pendant qu\'elle étudiait, son téléphone a sonné.' },
          { en: 'They <strong>were eating</strong> when the light <strong>went</strong> out.', fr: 'Ils mangeaient quand la lumière s\'est éteinte.' },
        ]
      },
    ],
    tips: [
      '🔑 "while" introduce souvent le Past Continuous : "while I was sleeping"',
      '⚠️ was = I/he/she/it · were = you/we/they',
      '💡 Deux actions parallèles : While she was cooking, he was watching TV.',
    ]
  },

  futureContinuous: {
    id: 'futureContinuous',
    title: 'Future Continuous',
    icon: '🔮',
    level: 'B1',
    subtitle: 'Action en cours à un moment précis dans le futur',
    malgasyNote: 'Hetsika hitranga amin\'ny fotoana iray ho avy',
    sections: [
      {
        title: '✅ Forme',
        content: 'Sujet + <strong>will be</strong> + verbe<strong>-ing</strong>',
        examples: [
          { en: 'At 8pm, I <strong>will be studying</strong>.', fr: 'À 20h, je serai en train d\'étudier.' },
          { en: 'This time tomorrow, she <strong>will be flying</strong> to Paris.', fr: 'Demain à cette heure, elle sera en avion pour Paris.' },
          { en: 'They <strong>will be waiting</strong> for us at the airport.', fr: 'Ils nous attendront à l\'aéroport.' },
        ]
      },
      {
        title: '❌ Négatif / ❓ Interrogatif',
        content: 'won\'t be + -ing / Will + sujet + be + -ing ?',
        examples: [
          { en: 'I <strong>won\'t be working</strong> on Sunday.', fr: 'Je ne travaillerai pas dimanche.' },
          { en: '<strong>Will</strong> you <strong>be using</strong> the computer?', fr: 'Est-ce que tu utiliseras l\'ordinateur ?' },
        ]
      },
    ],
    tips: [
      '🔑 Utile pour demander poliment : "Will you be using the car tonight?"',
      '💡 Différence : "I will study" (décision) vs "I will be studying" (en cours à un moment)',
      '⏰ Souvent avec : at this time tomorrow, at 6pm, when you arrive',
    ]
  },

  presentPerfect: {
    id: 'presentPerfect',
    title: 'Present Perfect',
    icon: '🔗',
    level: 'B1',
    subtitle: 'Action passée liée au présent',
    malgasyNote: 'Zavatra vita teo aloha misy fiatraikany amin\'izao fotoana izao',
    sections: [
      {
        title: '✅ Forme affirmative',
        content: 'Sujet + <strong>have/has</strong> + participe passé (3e colonne)',
        examples: [
          { en: 'I <strong>have visited</strong> Paris.', fr: 'J\'ai visité Paris. (dans ma vie)' },
          { en: 'She <strong>has finished</strong> her homework.', fr: 'Elle a fini ses devoirs.' },
          { en: 'They <strong>have lived</strong> here for 10 years.', fr: 'Ils habitent ici depuis 10 ans.' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>haven\'t / hasn\'t</strong> + participe passé',
        examples: [
          { en: 'I <strong>haven\'t seen</strong> that film.', fr: 'Je n\'ai pas vu ce film.' },
          { en: 'He <strong>hasn\'t called</strong> me.', fr: 'Il ne m\'a pas appelé.' },
          { en: 'We <strong>haven\'t eaten</strong> yet.', fr: 'Nous n\'avons pas encore mangé.' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Have/Has</strong> + sujet + participe passé ?',
        examples: [
          { en: '<strong>Have</strong> you ever <strong>eaten</strong> sushi?', fr: 'As-tu déjà mangé des sushis ?' },
          { en: '<strong>Has</strong> she <strong>arrived</strong> yet?', fr: 'Est-elle déjà arrivée ?' },
          { en: 'How long <strong>have</strong> you <strong>known</strong> him?', fr: 'Depuis combien de temps le connais-tu ?' },
        ]
      },
      {
        title: '⚡ Participes passés irréguliers',
        content: 'Infinitif → Prétérit → Participe passé',
        examples: [
          { en: 'go → went → <strong>gone</strong>', fr: 'aller' },
          { en: 'see → saw → <strong>seen</strong>', fr: 'voir' },
          { en: 'eat → ate → <strong>eaten</strong>', fr: 'manger' },
          { en: 'write → wrote → <strong>written</strong>', fr: 'écrire' },
          { en: 'be → was/were → <strong>been</strong>', fr: 'être' },
          { en: 'have → had → <strong>had</strong>', fr: 'avoir' },
          { en: 'do → did → <strong>done</strong>', fr: 'faire' },
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : already, yet, just, ever, never, since, for, recently',
      '⚠️ Present Perfect ≠ Past Simple. "I have been to Paris" (vie) vs "I went last year" (moment précis)',
      '💡 have = I/you/we/they · has = he/she/it',
      '📅 Since + point de départ : since 2020, since Monday. For + durée : for 3 years, for two days.',
    ]
  },

  pastPerfect: {
    id: 'pastPerfect',
    title: 'Past Perfect',
    icon: '⏮️⏮️',
    level: 'B1',
    subtitle: 'Action antérieure à une autre action passée',
    malgasyNote: 'Hetsika vita talohan\'ny hetsika iray hafa teo aloha',
    sections: [
      {
        title: '✅ Forme',
        content: 'Sujet + <strong>had</strong> + participe passé (même forme pour tous)',
        examples: [
          { en: 'When I arrived, she <strong>had already left</strong>.', fr: 'Quand je suis arrivé, elle était déjà partie.' },
          { en: 'He <strong>had never seen</strong> snow before.', fr: 'Il n\'avait jamais vu de neige avant ça.' },
          { en: 'They were tired because they <strong>had walked</strong> far.', fr: 'Ils étaient fatigués car ils avaient marché loin.' },
        ]
      },
      {
        title: '❌ Négatif / ❓ Interrogatif',
        content: 'hadn\'t + participe · Had + sujet + participe ?',
        examples: [
          { en: 'I <strong>hadn\'t eaten</strong> anything.', fr: 'Je n\'avais rien mangé.' },
          { en: '<strong>Had</strong> you <strong>met</strong> him before?', fr: 'L\'aviez-vous rencontré avant ?' },
        ]
      },
      {
        title: '🔗 Past Perfect + Past Simple',
        content: 'Deux actions passées : Past Perfect = avant · Past Simple = après',
        examples: [
          { en: 'I <strong>had studied</strong> English before I <strong>moved</strong> to France.', fr: 'J\'avais étudié l\'anglais avant de déménager en France.' },
          { en: 'When she <strong>arrived</strong>, the film <strong>had already started</strong>.', fr: 'Quand elle est arrivée, le film avait déjà commencé.' },
          { en: 'He <strong>failed</strong> the exam because he <strong>hadn\'t prepared</strong>.', fr: 'Il a raté l\'examen parce qu\'il ne s\'était pas préparé.' },
        ]
      },
    ],
    tips: [
      '🔑 "Had" = même forme pour tous les sujets : I/you/he/she/we/they had',
      '💡 Mots-clés : already, just, never, before, after, when, by the time',
      '⚠️ "After I <strong>had eaten</strong>, I went to school." — le Past Perfect indique l\'antériorité',
    ]
  },

  futurePerfect: {
    id: 'futurePerfect',
    title: 'Future Perfect',
    icon: '✅🚀',
    level: 'B2',
    subtitle: 'Action terminée avant un moment dans le futur',
    malgasyNote: 'Hetsika ho vita alohan\'ny fotoana iray ho avy',
    sections: [
      {
        title: '✅ Forme',
        content: 'Sujet + <strong>will have</strong> + participe passé',
        examples: [
          { en: 'By 2030, I <strong>will have graduated</strong>.', fr: 'D\'ici 2030, j\'aurai obtenu mon diplôme.' },
          { en: 'By the time you arrive, we <strong>will have eaten</strong>.', fr: 'Quand tu arriveras, nous aurons mangé.' },
          { en: 'She <strong>will have finished</strong> the project by Friday.', fr: 'Elle aura fini le projet avant vendredi.' },
        ]
      },
      {
        title: '❌ Négatif / ❓ Interrogatif',
        content: 'won\'t have + participe · Will + sujet + have + participe ?',
        examples: [
          { en: 'I <strong>won\'t have finished</strong> by tomorrow.', fr: 'Je n\'aurai pas fini demain.' },
          { en: '<strong>Will</strong> you <strong>have saved</strong> enough money by then?', fr: 'Aurez-vous économisé assez d\'argent d\'ici là ?' },
        ]
      },
    ],
    tips: [
      '🔑 Marqueurs : by then, by the time, by 2030, by next year',
      '💡 "By the time" + présent → futur perfect : By the time he arrives, I will have left.',
      '⚠️ Moins fréquent que les autres temps — utile pour les projets et objectifs',
    ]
  },

  timeMarkers: {
    id: 'timeMarkers',
    title: 'Indicateurs de Temps',
    icon: '⏱️',
    level: 'B1',
    subtitle: 'already, yet, just, since, for, ago, while, as soon as',
    malgasyNote: 'Teny manondro fotoana ao amin\'ny fehezanteny',
    sections: [
      {
        title: '✅ Already / Yet / Just',
        content: '<strong>already</strong> = déjà · <strong>yet</strong> = encore (négatif/question) · <strong>just</strong> = tout juste',
        examples: [
          { en: 'I have <strong>already</strong> done my homework.', fr: 'J\'ai déjà fait mes devoirs.' },
          { en: 'I haven\'t eaten <strong>yet</strong>.', fr: 'Je n\'ai pas encore mangé.' },
          { en: 'Have you finished <strong>yet</strong>?', fr: 'Tu as déjà fini ?' },
          { en: 'She has <strong>just</strong> arrived.', fr: 'Elle vient d\'arriver.' },
        ]
      },
      {
        title: '⏳ Since / For',
        content: '<strong>since</strong> = depuis un point · <strong>for</strong> = depuis une durée',
        examples: [
          { en: 'I have lived here <strong>since</strong> 2018.', fr: 'J\'habite ici depuis 2018. (point de départ)' },
          { en: 'She has worked there <strong>for</strong> 3 years.', fr: 'Elle y travaille depuis 3 ans. (durée)' },
          { en: 'I haven\'t seen him <strong>since</strong> Monday.', fr: 'Je ne l\'ai pas vu depuis lundi.' },
          { en: 'They have been friends <strong>for</strong> a long time.', fr: 'Ils sont amis depuis longtemps.' },
        ]
      },
      {
        title: '⏮️ Ago',
        content: '<strong>ago</strong> = il y a (toujours avec le Past Simple)',
        examples: [
          { en: 'I saw him two days <strong>ago</strong>.', fr: 'Je l\'ai vu il y a deux jours.' },
          { en: 'She left an hour <strong>ago</strong>.', fr: 'Elle est partie il y a une heure.' },
          { en: 'They moved here 5 years <strong>ago</strong>.', fr: 'Ils ont déménagé ici il y a 5 ans.' },
        ]
      },
      {
        title: '🔗 While / As soon as',
        content: '<strong>while</strong> = pendant que · <strong>as soon as</strong> = dès que',
        examples: [
          { en: '<strong>While</strong> I was cooking, she was studying.', fr: 'Pendant que je cuisinais, elle étudiait.' },
          { en: '<strong>While</strong> you sleep, the world keeps moving.', fr: 'Pendant que tu dors, le monde continue.' },
          { en: '<strong>As soon as</strong> I arrive, I will call you.', fr: 'Dès que j\'arrive, je t\'appellerai.' },
          { en: '<strong>As soon as</strong> she heard the news, she cried.', fr: 'Dès qu\'elle a appris la nouvelle, elle a pleuré.' },
        ]
      },
    ],
    tips: [
      '🔑 since + date/événement · for + durée (nombre)',
      '⚠️ "ago" → toujours Past Simple. "I saw him ago" — jamais avec Present Perfect',
      '💡 "yet" en fin de phrase (négatif/question) · "already" au milieu',
      '🔗 while + continuous · as soon as + simple',
    ]
  },

  conditionals: {
    id: 'conditionals',
    title: 'Les Conditionnels (If)',
    icon: '🔀',
    level: 'B1–B2',
    subtitle: '0e, 1er, 2e, 3e conditionnel + mixte',
    malgasyNote: 'Fehezanteny manondro fepetra sy vokatry ny zavatra',
    sections: [
      {
        title: '0️⃣ Zéro conditionnel (vérité générale)',
        content: '<strong>If + présent → présent</strong> (toujours vrai)',
        examples: [
          { en: 'If you <strong>heat</strong> water to 100°C, it <strong>boils</strong>.', fr: 'Si tu chauffes l\'eau à 100°C, elle bout.' },
          { en: 'If it <strong>rains</strong>, the ground <strong>gets</strong> wet.', fr: 'S\'il pleut, le sol devient mouillé.' },
          { en: 'If you <strong>don\'t eat</strong>, you <strong>feel</strong> hungry.', fr: 'Si tu ne manges pas, tu as faim.' },
        ]
      },
      {
        title: '1️⃣ Premier conditionnel (futur réel)',
        content: '<strong>If + présent → will + infinitif</strong> (possible et probable)',
        examples: [
          { en: 'If I <strong>study</strong> hard, I <strong>will pass</strong> the exam.', fr: 'Si j\'étudie dur, je réussirai l\'examen.' },
          { en: 'If it <strong>doesn\'t rain</strong>, we <strong>will play</strong> outside.', fr: 'S\'il ne pleut pas, nous jouerons dehors.' },
          { en: 'If she <strong>calls</strong>, I <strong>will answer</strong>.', fr: 'Si elle appelle, je répondrai.' },
        ]
      },
      {
        title: '2️⃣ Deuxième conditionnel (hypothèse irréelle)',
        content: '<strong>If + past simple → would + infinitif</strong> (imaginaire/peu probable)',
        examples: [
          { en: 'If I <strong>had</strong> money, I <strong>would buy</strong> a house.', fr: 'Si j\'avais de l\'argent, j\'achèterais une maison. (je n\'en ai pas)' },
          { en: 'If she <strong>were</strong> taller, she <strong>would be</strong> a model.', fr: 'Si elle était plus grande, elle serait mannequin.' },
          { en: 'What <strong>would</strong> you do if you <strong>won</strong> the lottery?', fr: 'Que ferais-tu si tu gagnais à la loterie ?' },
        ]
      },
      {
        title: '3️⃣ Troisième conditionnel (passé imaginaire)',
        content: '<strong>If + past perfect → would have + participe</strong> (regret/situation irréelle)',
        examples: [
          { en: 'If I <strong>had studied</strong>, I <strong>would have passed</strong>.', fr: 'Si j\'avais étudié, j\'aurais réussi. (je n\'ai pas étudié)' },
          { en: 'If she <strong>had left</strong> earlier, she <strong>wouldn\'t have missed</strong> the bus.', fr: 'Si elle était partie plus tôt, elle n\'aurait pas raté le bus.' },
          { en: 'If he <strong>had known</strong>, he <strong>would have helped</strong>.', fr: 'S\'il avait su, il aurait aidé.' },
        ]
      },
      {
        title: '🔀 Conditionnel mixte (passé → présent)',
        content: '<strong>If + past perfect → would + infinitif</strong> (cause passée, effet présent)',
        examples: [
          { en: 'If I <strong>had studied</strong> more, I <strong>would be</strong> a doctor now.', fr: 'Si j\'avais plus étudié, je serais médecin maintenant.' },
          { en: 'If she <strong>hadn\'t moved</strong>, she <strong>would still live</strong> here.', fr: 'Si elle n\'avait pas déménagé, elle vivrait encore ici.' },
        ]
      },
    ],
    tips: [
      '🔑 1er cond. : futur réel/possible. 2e cond. : imaginaire. 3e cond. : passé regretté.',
      '⚠️ Avec "if" : jamais "will" dans la proposition en "if" (1er conditionnel)',
      '💡 "If I were you..." = conseil (2e cond.). "Were" pour tous les sujets !',
      '🔀 Mixte : passé hypothétique + résultat présent',
    ]
  },

  passiveVoice: {
    id: 'passiveVoice',
    title: 'Voix Passive',
    icon: '🔄',
    level: 'B1',
    subtitle: 'L\'action est reçue par le sujet, non faite par lui',
    malgasyNote: 'Ny voa-manao no atao sehatra',
    sections: [
      {
        title: '✅ Présent passif',
        content: 'Sujet + <strong>am/is/are</strong> + participe passé',
        examples: [
          { en: 'Rice <strong>is grown</strong> in Madagascar.', fr: 'Le riz est cultivé à Madagascar.' },
          { en: 'English <strong>is spoken</strong> in many countries.', fr: 'L\'anglais est parlé dans de nombreux pays.' },
          { en: 'The windows <strong>are cleaned</strong> every week.', fr: 'Les fenêtres sont nettoyées chaque semaine.' },
        ]
      },
      {
        title: '⏮️ Passé passif',
        content: 'Sujet + <strong>was/were</strong> + participe passé',
        examples: [
          { en: 'The book <strong>was written</strong> in 1900.', fr: 'Le livre a été écrit en 1900.' },
          { en: 'The children <strong>were helped</strong> by the teacher.', fr: 'Les enfants ont été aidés par le professeur.' },
          { en: 'A new school <strong>was built</strong> last year.', fr: 'Une nouvelle école a été construite l\'année dernière.' },
        ]
      },
      {
        title: '🚀 Futur passif',
        content: 'Sujet + <strong>will be</strong> + participe passé',
        examples: [
          { en: 'The project <strong>will be finished</strong> by tomorrow.', fr: 'Le projet sera terminé demain.' },
          { en: 'You <strong>will be informed</strong> soon.', fr: 'Vous serez informé bientôt.' },
        ]
      },
      {
        title: '🔄 Actif → Passif',
        content: 'Transformer une phrase active en passive',
        examples: [
          { en: 'The teacher corrects the tests. → The tests <strong>are corrected</strong> by the teacher.', fr: 'Le professeur corrige les tests. → Les tests sont corrigés par le professeur.' },
          { en: 'They built a hospital. → A hospital <strong>was built</strong> (by them).', fr: 'Ils ont construit un hôpital. → Un hôpital a été construit.' },
          { en: 'Someone stole my bag. → My bag <strong>was stolen</strong>.', fr: 'Quelqu\'un a volé mon sac. → Mon sac a été volé.' },
        ]
      },
    ],
    tips: [
      '🔑 Agent introduit par "by" : "written by Shakespeare", "made by students"',
      '💡 On omet "by ..." si l\'agent est inconnu ou évident : "My bag was stolen."',
      '⚠️ Participe passé ≠ prétérit : "was written" (passif) pas "was wrote"',
      '📝 Utilisation : articles de journal, science, procédures officielles',
    ]
  },

  reportedSpeech: {
    id: 'reportedSpeech',
    title: 'Discours Indirect (Reported Speech)',
    icon: '💬',
    level: 'B1–B2',
    subtitle: 'Rapporter ce que quelqu\'un a dit',
    malgasyNote: 'Ny fampitana teny amin\'ny olona hafa',
    sections: [
      {
        title: '💬 Statements (affirmations)',
        content: 'say/tell + <strong>that</strong> + proposition (temps reculé)',
        examples: [
          { en: '"I am tired." → She said (that) she <strong>was</strong> tired.', fr: '"Je suis fatigué." → Elle a dit qu\'elle était fatiguée.' },
          { en: '"I <strong>work</strong> here." → He said he <strong>worked</strong> here.', fr: '"Je travaille ici." → Il a dit qu\'il travaillait ici.' },
          { en: '"We <strong>will come</strong>." → They said they <strong>would come</strong>.', fr: '"Nous viendrons." → Ils ont dit qu\'ils viendraient.' },
        ]
      },
      {
        title: '⏮️ Changements de temps',
        content: 'Les temps "reculent" d\'un cran dans le passé',
        examples: [
          { en: 'present simple → <strong>past simple</strong>', fr: '"I eat" → he said he ate' },
          { en: 'present continuous → <strong>past continuous</strong>', fr: '"I am eating" → she said she was eating' },
          { en: 'past simple → <strong>past perfect</strong>', fr: '"I ate" → he said he had eaten' },
          { en: 'will → <strong>would</strong>', fr: '"I will go" → she said she would go' },
          { en: 'can → <strong>could</strong>', fr: '"I can help" → he said he could help' },
        ]
      },
      {
        title: '❓ Questions indirectes',
        content: 'ask + if/whether (oui/non) · ask + wh-word',
        examples: [
          { en: '"Do you speak English?" → She asked if I <strong>spoke</strong> English.', fr: '"Tu parles anglais ?" → Elle a demandé si je parlais anglais.' },
          { en: '"Where do you live?" → He asked where I <strong>lived</strong>.', fr: '"Où habites-tu ?" → Il a demandé où j\'habitais.' },
          { en: '"Will you come?" → She asked if I <strong>would come</strong>.', fr: '"Viendras-tu ?" → Elle a demandé si je viendrais.' },
        ]
      },
      {
        title: '📋 Ordres et demandes',
        content: 'tell/ask + sujet + <strong>to</strong> + infinitif',
        examples: [
          { en: '"Sit down!" → She told him <strong>to sit down</strong>.', fr: '"Assieds-toi !" → Elle lui a dit de s\'asseoir.' },
          { en: '"Please help me." → She asked me <strong>to help</strong> her.', fr: '"Aide-moi s\'il te plaît." → Elle m\'a demandé de l\'aider.' },
          { en: '"Don\'t be late." → He told us <strong>not to be</strong> late.', fr: '"Ne soyez pas en retard." → Il nous a dit de ne pas être en retard.' },
        ]
      },
    ],
    tips: [
      '🔑 say (sans objet) : "She said she was tired." · tell (avec objet) : "She told me she was tired."',
      '⚠️ Question indirecte : ordre normal (sujet + verbe), pas d\'inversion',
      '💡 Changements de pronoms : "I" → he/she · "we" → they · "you" → I/we',
      '📅 Expressions de temps : now → then · today → that day · tomorrow → the next day',
    ]
  },

  vocabulary: {
    routine: {
      title: 'Vocabulaire : Routine Quotidienne',
      words: [
        { en: 'wake up', fr: 'se réveiller', mg: 'mifohaza', example: 'I wake up at 6 am.' },
        { en: 'get up', fr: 'se lever', mg: 'mitsangana', example: 'She gets up at 7.' },
        { en: 'take a shower', fr: 'prendre une douche', mg: 'manasa vatana', example: 'I take a shower every morning.' },
        { en: 'have breakfast', fr: 'prendre le petit-déjeuner', mg: 'misakafo maraina', example: 'We have breakfast at 7:30.' },
        { en: 'go to school', fr: 'aller à l\'école', mg: 'mankany sekoly', example: 'The children go to school at 8.' },
        { en: 'have lunch', fr: 'déjeuner', mg: 'misakafo atoandro', example: 'We have lunch at noon.' },
        { en: 'come home', fr: 'rentrer à la maison', mg: 'miverina an-trano', example: 'I come home at 5 pm.' },
        { en: 'have dinner', fr: 'dîner', mg: 'misakafo hariva', example: 'My family has dinner together.' },
        { en: 'go to bed', fr: 'se coucher', mg: 'matory', example: 'I go to bed at 10 pm.' },
        { en: 'brush teeth', fr: 'se brosser les dents', mg: 'manasa nify', example: 'Brush your teeth twice a day!' },
      ]
    },
    family: {
      title: 'Vocabulaire : La Famille',
      words: [
        { en: 'mother', fr: 'mère', mg: 'reny', example: 'My mother is a teacher.' },
        { en: 'father', fr: 'père', mg: 'ray', example: 'My father works in the city.' },
        { en: 'brother', fr: 'frère', mg: 'rahalahy', example: 'I have two brothers.' },
        { en: 'sister', fr: 'sœur', mg: 'anabavy', example: 'My sister is 15 years old.' },
        { en: 'grandmother', fr: 'grand-mère', mg: 'renibe', example: 'My grandmother lives in the village.' },
        { en: 'grandfather', fr: 'grand-père', mg: 'raibe', example: 'My grandfather is 70 years old.' },
        { en: 'uncle', fr: 'oncle', mg: 'dadatoa', example: 'My uncle is a doctor.' },
        { en: 'aunt', fr: 'tante', mg: 'nenitoa', example: 'My aunt has three children.' },
        { en: 'cousin', fr: 'cousin(e)', mg: 'zanak\'olo-mpiray tam-po', example: 'I play with my cousins on weekends.' },
        { en: 'children', fr: 'enfants', mg: 'zanaka', example: 'They have four children.' },
      ]
    },
    body: {
      title: 'Vocabulaire : Le Corps',
      words: [
        { en: 'head', fr: 'tête', mg: 'loha', example: 'I have a headache.' },
        { en: 'eye(s)', fr: 'œil / yeux', mg: 'maso', example: 'She has brown eyes.' },
        { en: 'ear(s)', fr: 'oreille(s)', mg: 'sofina', example: 'Listen with your ears!' },
        { en: 'nose', fr: 'nez', mg: 'orona', example: 'I have a cold.' },
        { en: 'mouth', fr: 'bouche', mg: 'vava', example: 'Close your mouth when you eat.' },
        { en: 'hand(s)', fr: 'main(s)', mg: 'tanana', example: 'Wash your hands before eating.' },
        { en: 'foot / feet', fr: 'pied(s)', mg: 'tongotra', example: 'My feet are tired after walking.' },
        { en: 'arm', fr: 'bras', mg: 'sandry', example: 'He broke his arm.' },
        { en: 'leg', fr: 'jambe', mg: 'ranjo', example: 'She hurt her leg.' },
        { en: 'back', fr: 'dos', mg: 'lamosina', example: 'I have a backache.' },
      ]
    },
    time: {
      title: 'Vocabulaire : L\'Heure et le Temps',
      words: [
        { en: 'Monday', fr: 'lundi', mg: 'Alatsinainy', example: 'School starts on Monday.' },
        { en: 'Tuesday', fr: 'mardi', mg: 'Talata', example: 'I have English on Tuesday.' },
        { en: 'Wednesday', fr: 'mercredi', mg: 'Alarobia', example: 'Wednesday is the middle of the week.' },
        { en: 'Thursday', fr: 'jeudi', mg: 'Alakamisy', example: 'We play sport on Thursday.' },
        { en: 'Friday', fr: 'vendredi', mg: 'Zoma', example: 'Friday is the last school day.' },
        { en: 'Saturday', fr: 'samedi', mg: 'Asabotsy', example: 'I rest on Saturday.' },
        { en: 'Sunday', fr: 'dimanche', mg: 'Alahady', example: 'Sunday is a day of rest.' },
        { en: 'morning', fr: 'matin', mg: 'maraina', example: 'I study in the morning.' },
        { en: 'afternoon', fr: 'après-midi', mg: 'tolakandro', example: 'We play in the afternoon.' },
        { en: 'evening', fr: 'soir', mg: 'hariva', example: 'We eat dinner in the evening.' },
      ]
    },
  }
};

export function getTheoryById(id) {
  return theory[id] || null;
}

export const theoryTopics = [
  // ── A1 ───────────────────────────────────────────────────────────
  { id: 'articles',          label: 'Articles (a/an/the)',       icon: '🔤',   level: 'A1' },
  { id: 'pronouns',          label: 'Pronoms',                   icon: '👥',   level: 'A1' },
  { id: 'plurals',           label: 'Pluriels',                  icon: '🔢',   level: 'A1' },
  { id: 'therebeis',         label: 'There is / are',            icon: '📌',   level: 'A1' },
  // ── A1–A2 ────────────────────────────────────────────────────────
  { id: 'prepositions',      label: 'Prépositions',              icon: '📍',   level: 'A1–A2' },
  { id: 'questions',         label: 'Questions (Wh-)',           icon: '❓',   level: 'A1–A2' },
  { id: 'presentSimple',     label: 'Present Simple',            icon: '📖',   level: 'A1–A2' },
  // ── A2 ───────────────────────────────────────────────────────────
  { id: 'presentContinuous', label: 'Present Continuous',        icon: '🔄',   level: 'A2' },
  { id: 'comparatives',      label: 'Comparatifs & Superlatifs', icon: '⚖️',   level: 'A2' },
  { id: 'modals',            label: 'Modaux (can/must/would…)',  icon: '🛠️',   level: 'A2' },
  // ── A2–B1 ────────────────────────────────────────────────────────
  { id: 'pastSimple',        label: 'Past Simple',               icon: '⏮️',   level: 'A2–B1' },
  { id: 'futureSimple',      label: 'Future Simple',             icon: '🚀',   level: 'A2–B1' },
  // ── B1 ───────────────────────────────────────────────────────────
  { id: 'pastContinuous',    label: 'Past Continuous',           icon: '⏸️',   level: 'B1' },
  { id: 'futureContinuous',  label: 'Future Continuous',         icon: '🔮',   level: 'B1' },
  { id: 'presentPerfect',    label: 'Present Perfect',           icon: '🔗',   level: 'B1' },
  { id: 'pastPerfect',       label: 'Past Perfect',              icon: '⏮️⏮️', level: 'B1' },
  { id: 'timeMarkers',       label: 'Indicateurs de temps',      icon: '⏱️',   level: 'B1' },
  { id: 'passiveVoice',      label: 'Voix Passive',              icon: '🔄',   level: 'B1' },
  // ── B1–B2 ────────────────────────────────────────────────────────
  { id: 'conditionals',      label: 'Conditionnels (if)',        icon: '🔀',   level: 'B1–B2' },
  { id: 'reportedSpeech',    label: 'Discours Indirect',         icon: '💬',   level: 'B1–B2' },
  // ── B2 ───────────────────────────────────────────────────────────
  { id: 'futurePerfect',     label: 'Future Perfect',            icon: '✅🚀',  level: 'B2' },
];

export const vocabTopics = [
  { id: 'routine', label: 'Routine Quotidienne', icon: '🌅' },
  { id: 'family', label: 'La Famille', icon: '👨‍👩‍👧' },
  { id: 'body', label: 'Le Corps', icon: '💪' },
  { id: 'time', label: 'L\'Heure et le Temps', icon: '⏰' },
];

// ─── BOKY FAMPIANARANA — Malagasy Grammar Manual ─────────────────────────────
// Fanazavana ny fitsipiky ny fiteny anglisy amin'ny teny malagasy.
// ⚠️ Ny dika-tenin'ny malagasy ato dia natao amin'ny AI — mety tsy marina tanteraka.
export const malgasyManual = [

  {
    id: 'mg_articles',
    grammarRef: 'articles',
    title: 'Articles (a / an / the)',
    titleMg: 'Ny teny filaza (a / an / the)',
    icon: '🔤',
    level: 'A1',
    explanation: 'Ny anglisy dia manana teny filaza roa karazana: "the" (fantatra) sy "a/an" (tsy fantatra tsara). Ny malagasy dia tsy manana teny filaza toy izany, fa ampiasaina "ny" (= the) na tsy misy (= a/an).',
    rows: [
      {
        label: 'The (fantatra)',
        structure: 'the + noun',
        example_en: 'The book is on the table.',
        example_mg: 'Ny boky dia eo ambonin\'ny latabatra.',
        note: '"ny" = the',
      },
      {
        label: 'A / An (tsy fantatra)',
        structure: 'a/an + noun',
        example_en: 'I have a pen.',
        example_mg: 'Manana kilalao aho.',
        note: '"a" alohan\'ny consonant, "an" alohan\'ny vowel (a,e,i,o,u)',
      },
      {
        label: 'Zero article (tsy misy)',
        structure: '∅ + noun',
        example_en: 'I like rice.',
        example_mg: 'Tia vary aho.',
        note: 'Tsy misy teny filaza alohan\'ny hevitra ankapoben\'ny',
      },
    ],
    tipsMg: [
      '"a" alohan\'ny teny manomboka amin\'ny consonant: a book, a cat',
      '"an" alohan\'ny teny manomboka amin\'ny vowel: an apple, an hour',
      '"the" raha samy mahalala ny mpiresaka izay resahina',
    ],
  },

  {
    id: 'mg_presentSimple',
    grammarRef: 'presentSimple',
    title: 'Present Simple',
    titleMg: 'Ankehitriny Tsotra',
    icon: '📖',
    level: 'A1–A2',
    explanation: 'Ny Present Simple dia ampiasaina ho an\'ny fomba mahazatra, ny marina mandrakariva, ary ny zava-misy amin\'ny andro rehetra. Tsy misy fotoana manokana ny malagasy ho an\'ny asa mahazatra, fa ampiasaina ny adverbe fotoana (isan\'andro, matetika, sns.).',
    rows: [
      {
        label: '✅ Tsy misy fampanontaniana',
        structure: 'I/You/We/They + verbe\nHe/She/It + verbe + s/es',
        example_en: 'I eat rice. / She eats rice.',
        example_mg: 'Mihinam-bary aho. / Mihinam-bary izy.',
        note: 'He/She/It → +s na +es',
      },
      {
        label: '❌ Fandavana (négatif)',
        structure: 'I/You/We/They + don\'t + verbe\nHe/She/It + doesn\'t + verbe',
        example_en: 'I don\'t drink coffee. / He doesn\'t work.',
        example_mg: 'Tsy misotro kafe aho. / Tsy miasa izy.',
        note: 'don\'t = do not | doesn\'t = does not',
      },
      {
        label: '❓ Fanontaniana (question)',
        structure: 'Do + I/you/we/they + verbe?\nDoes + he/she/it + verbe?',
        example_en: 'Do you speak English? / Does she study?',
        example_mg: 'Miteny anglisy ve ianao? / Mianatra ve izy?',
        note: '"ve" ny malagasy = interrogatif',
      },
    ],
    tipsMg: [
      'I/You/We/They → don\'t; He/She/It → doesn\'t',
      'Ny adverbe fotoana: always (foana), often (matetika), sometimes (indraindray), never (tsy mba)',
      'Ohatra: He always drinks tea. = Misotro dite foana izy.',
    ],
  },

  {
    id: 'mg_presentContinuous',
    grammarRef: 'presentContinuous',
    title: 'Present Continuous',
    titleMg: 'Ankehitriny Mitohy',
    icon: '🔄',
    level: 'A2',
    explanation: 'Ny Present Continuous dia ampiasaina ho an\'ny asa atao ankehitriny (amin\'izao fotoana izao). Ny malagasy dia tsy manana forme toy izany, fa ampiasaina "ankehitriny" na "amin\'izao fotoana izao" miaraka amin\'ny verbe.',
    rows: [
      {
        label: '✅ Fomba fanaovana',
        structure: 'Sujet + am/is/are + verbe-ing',
        example_en: 'I am reading a book.',
        example_mg: 'Mamaky boky aho ankehitriny.',
        note: 'I → am | He/She/It → is | We/You/They → are',
      },
      {
        label: '❌ Fandavana',
        structure: 'Sujet + am/is/are + not + verbe-ing',
        example_en: 'She is not sleeping.',
        example_mg: 'Tsy matory izy ankehitriny.',
        note: 'isn\'t = is not | aren\'t = are not',
      },
      {
        label: '❓ Fanontaniana',
        structure: 'Am/Is/Are + sujet + verbe-ing?',
        example_en: 'Are you eating?',
        example_mg: 'Mihinana ve ianao ankehitriny?',
        note: 'Asio "-ing" ny verbe foana',
      },
    ],
    tipsMg: [
      'Verbe mifarana amin\'ny -e: remoisa ny e alohan\'ny -ing (write → writing)',
      'Verbe fohy miaraka amin\'ny vowel+consonant: doubla ny consonant (run → running)',
      'Tsy ampiasaina amin\'ny verbe "state": know, love, want, understand',
    ],
  },

  {
    id: 'mg_pastSimple',
    grammarRef: 'pastSimple',
    title: 'Past Simple',
    titleMg: 'Lasa Tsotra',
    icon: '⏮️',
    level: 'A2–B1',
    explanation: 'Ny Past Simple dia ampiasaina ho an\'ny asa vita tanteraka tamin\'ny lasa. Ny malagasy dia mampiasa ny aloha-n\'ny verbe (ni-) ho fampisehoana ny asa lasa.',
    rows: [
      {
        label: '✅ Verbe mahazatra (+ed)',
        structure: 'Sujet + verbe + ed',
        example_en: 'I worked yesterday.',
        example_mg: 'Niasa aho omaly.',
        note: 'omaly = yesterday | tamin\'ny omaly = last (week/year...)',
      },
      {
        label: '🔴 Verbe irrégulier',
        structure: 'Sujet + verbe irrégulier (forme 2)',
        example_en: 'She went to school. / I ate rice.',
        example_mg: 'Nankany an\'ny sekoly izy. / Nihinam-bary aho.',
        note: 'go → went | eat → ate | come → came | see → saw',
      },
      {
        label: '❌ Fandavana',
        structure: 'Sujet + didn\'t + verbe infinitif',
        example_en: 'I didn\'t go to school.',
        example_mg: 'Tsy nankany an\'ny sekoly aho.',
        note: 'Ny verbe dia tsy miova aty (infinitif foana)',
      },
      {
        label: '❓ Fanontaniana',
        structure: 'Did + sujet + verbe infinitif?',
        example_en: 'Did you eat lunch?',
        example_mg: 'Nihinana ny sakafo amin\'ny antoandro ve ianao?',
        note: 'did = ny fampisehoana Past Simple',
      },
    ],
    tipsMg: [
      'Ny fotoana lasa mahazatra: yesterday (omaly), last week (herinandrotsy), in 2020 (tamin\'ny 2020)',
      'Verbe matetika irrégulier: go/went, come/came, eat/ate, see/saw, do/did, have/had, be/was/were',
    ],
  },

  {
    id: 'mg_futureSimple',
    grammarRef: 'futureSimple',
    title: 'Future Simple',
    titleMg: 'Ho Avy Tsotra',
    icon: '🚀',
    level: 'A2–B1',
    explanation: 'Ny Future Simple (will + verbe) dia ampiasaina ho an\'ny asa ho atao amin\'ny ho avy. Ny malagasy dia mampiasa ny aloha-n\'ny verbe (hi-) ho fampisehoana ny asa ho avy.',
    rows: [
      {
        label: '✅ Fomba fanaovana',
        structure: 'Sujet + will + verbe infinitif',
        example_en: 'I will study tomorrow.',
        example_mg: 'Hianatra aho rahampitso.',
        note: 'will = ny fampisehoana ho avy | rahampitso = tomorrow',
      },
      {
        label: '❌ Fandavana',
        structure: 'Sujet + won\'t + verbe infinitif',
        example_en: 'She won\'t come tonight.',
        example_mg: 'Tsy ho avy izy anio alina.',
        note: 'won\'t = will not',
      },
      {
        label: '❓ Fanontaniana',
        structure: 'Will + sujet + verbe infinitif?',
        example_en: 'Will you help me?',
        example_mg: 'Hanampy ahy ve ianao?',
        note: '"will" dia mitovy ho an\'ny olon-drehetra (tsy miova)',
      },
    ],
    tipsMg: [
      'Ny fotoana ho avy mahazatra: tomorrow (rahampitso), next week (herinandro ho avy)',
      'Be going to: I am going to study = Hianatra aho (efa nokendry)',
      'Will: fanapahan-kevitra vetivety, toky, fanambarana',
    ],
  },

  {
    id: 'mg_modals',
    grammarRef: 'modals',
    title: 'Modaux (can/must/should…)',
    titleMg: 'Ny Verbe Manampy',
    icon: '🛠️',
    level: 'A2',
    explanation: 'Ny verbe manampy (modal verbs) dia ampiasaina miaraka amin\'ny verbe hafa mba hampisehoana ny fahafahana, ny tsy maintsy, ny tokony, na ny fangatahana.',
    rows: [
      {
        label: 'Can (afaka)',
        structure: 'Sujet + can + verbe',
        example_en: 'I can swim.',
        example_mg: 'Afaka milomano aho.',
        note: 'Fampisehoana ny fahafahana',
      },
      {
        label: 'Can\'t (tsy afaka)',
        structure: 'Sujet + can\'t + verbe',
        example_en: 'She can\'t speak Chinese.',
        example_mg: 'Tsy afaka miteny sinoa izy.',
        note: 'can\'t = cannot',
      },
      {
        label: 'Must (tsy maintsy)',
        structure: 'Sujet + must + verbe',
        example_en: 'You must study.',
        example_mg: 'Tsy maintsy mianatra ianao.',
        note: 'Lazaina ho voatery na ilaina tanteraka',
      },
      {
        label: 'Should (tokony)',
        structure: 'Sujet + should + verbe',
        example_en: 'You should eat breakfast.',
        example_mg: 'Tokony hihinana sakafo maraina ianao.',
        note: 'Tsara raha atao, fa tsy voatery',
      },
      {
        label: 'Would like (te-ho)',
        structure: 'Sujet + would like + to + verbe',
        example_en: 'I would like to visit Paris.',
        example_mg: 'Te-handeha any Paris aho.',
        note: 'Fomba fandraharahana na fangatahana amin\'ny hatsaram-panahy',
      },
    ],
    tipsMg: [
      'Ny modal verbs dia tsy manova endrika (tsy misy -s amin\'ny he/she/it)',
      'Mandrakariva ampiasaina amin\'ny verbe infinitif foana (tsy misy "to")',
      'Ohatra: She can plays (DISO) → She can play (MARINA)',
    ],
  },

  {
    id: 'mg_questions',
    grammarRef: 'questions',
    title: 'Questions (Wh-)',
    titleMg: 'Fanontaniana',
    icon: '❓',
    level: 'A1–A2',
    explanation: 'Ny fanontaniana amin\'ny anglisy dia ampiasaina amin\'ny teny manontany (what, where, when, who, why, how). Ny malagasy dia manana teny manontany mitovy amin\'izany.',
    rows: [
      {
        label: 'What (inona)',
        structure: 'What + do/does/is + sujet + verbe?',
        example_en: 'What is your name?',
        example_mg: 'Iza no anaranao? / Inona no anaranao?',
        note: '"Inona" na "Iza" arakaraka ny teny manontany',
      },
      {
        label: 'Where (aiza)',
        structure: 'Where + do/does/is + sujet + verbe?',
        example_en: 'Where do you live?',
        example_mg: 'Aiza no mipetraka ianao?',
        note: 'aiza = where',
      },
      {
        label: 'When (oviana)',
        structure: 'When + do/did/will + sujet + verbe?',
        example_en: 'When do you wake up?',
        example_mg: 'Oviana no miainga ianao?',
        note: 'oviana = when',
      },
      {
        label: 'Who (iza)',
        structure: 'Who + is/are/did/does...?',
        example_en: 'Who is your teacher?',
        example_mg: 'Iza no mpampianatra anao?',
        note: 'iza = who',
      },
      {
        label: 'Why (nahoana)',
        structure: 'Why + do/did/are + sujet + verbe?',
        example_en: 'Why are you late?',
        example_mg: 'Nahoana ianao no tara?',
        note: 'nahoana = why | because = satria',
      },
      {
        label: 'How (ahoana)',
        structure: 'How + do/is/are + sujet + verbe?',
        example_en: 'How are you?',
        example_mg: 'Ahoana ny valinao? / Tsara ve ianao?',
        note: 'How many = firy | How much = ohatrinona',
      },
    ],
    tipsMg: [
      'Ny teny manontany dia ao am-piandohan\'ny fehezanteny foana',
      'Why → Because: Why are you tired? Because I worked a lot. = Nahoana ianao no vizaka? Satria niasa mafy aho.',
    ],
  },

  {
    id: 'mg_conditionals',
    grammarRef: 'conditionals',
    title: 'Conditionnels (if)',
    titleMg: 'Raha ... dia ... (Conditionals)',
    icon: '🔀',
    level: 'B1–B2',
    explanation: 'Ny conditionals dia ampiasaina mba hampisehoana ny zava-mety mitranga raha voafehin\'ny fepetra iray. "If" = "raha" amin\'ny malagasy.',
    rows: [
      {
        label: 'Type 0 (veritá générale)',
        structure: 'If + présent, + présent',
        example_en: 'If you heat water, it boils.',
        example_mg: 'Raha manafana rano ianao, dia mifoha.',
        note: 'Ny veritá sy ny lalàna natiora',
      },
      {
        label: 'Type 1 (possible)',
        structure: 'If + présent, + will + verbe',
        example_en: 'If it rains, I will stay home.',
        example_mg: 'Raha milatsaka ny orana, dia hitoetra an-trano aho.',
        note: 'Zava-mety miseho amin\'ny avy',
      },
      {
        label: 'Type 2 (hypothétique)',
        structure: 'If + past, + would + verbe',
        example_en: 'If I had money, I would travel.',
        example_mg: 'Raha manana vola aho, dia handeha aho.',
        note: 'Tsy misy ankehitriny — soso-kevitra',
      },
      {
        label: 'Type 3 (regret)',
        structure: 'If + past perfect, + would have + participe',
        example_en: 'If I had studied, I would have passed.',
        example_mg: 'Raha nianatra aho, dia nahajoro aho.',
        note: 'Zava-nety nitranga tamin\'ny lasa',
      },
    ],
    tipsMg: [
      '"If" dia miotra foana alohan\'ny fepetra',
      'Type 1: If + present simple, will + infinitif',
      'Type 2: If + past simple, would + infinitif — tsy lazaina ny lasa!',
    ],
  },

  {
    id: 'mg_passiveVoice',
    grammarRef: 'passiveVoice',
    title: 'Voix Passive',
    titleMg: 'Ny Endrika Passive (Passive Voice)',
    icon: '🔄',
    level: 'B1',
    explanation: 'Amin\'ny passive voice, ny hetsika dia atao amin\'ny olona na zavatra (tsy izy no manao an\'ilay hetsika). Ny malagasy dia manana endrika mitovy amin\'izany (amin\'ny alalan\'ny "-ana" na "-ina" amin\'ny verbe).',
    rows: [
      {
        label: 'Active → Passive',
        structure: 'Objet + be + participe passé + (by + sujet)',
        example_en: 'The teacher explains the lesson. → The lesson is explained by the teacher.',
        example_mg: 'Manazava ny lesona ny mpampianatra. → Azavain\'ny mpampianatra ny lesona.',
        note: 'ny sujet active → "by" amin\'ny passive',
      },
      {
        label: 'Present passive',
        structure: 'am/is/are + participe passé',
        example_en: 'English is spoken here.',
        example_mg: 'Atao anglisy eto.',
        note: 'Tsy ilaina ny "by" raha tsy fantatra ny mpanao',
      },
      {
        label: 'Past passive',
        structure: 'was/were + participe passé',
        example_en: 'The book was written in 1990.',
        example_mg: 'Nosoratana tamin\'ny 1990 ny boky.',
        note: 'was (I/he/she/it) | were (we/you/they)',
      },
    ],
    tipsMg: [
      'Ampiasaina indrindra raha tsy fantatra na tsy ilaina ny mpanao',
      'Participe passé mahazatra: written, spoken, made, done, seen, eaten',
      'Fampahatsiahy: active = mpanao no lohany | passive = voajanahary no lohany',
    ],
  },

  {
    id: 'mg_presentPerfect',
    grammarRef: 'presentPerfect',
    title: 'Present Perfect',
    titleMg: 'Lasa Mampifandray ny Ankehitriny',
    icon: '🔗',
    level: 'B1',
    explanation: 'Ny Present Perfect dia ampiasaina raha misy fifanatonan\'ny lasa sy ny ankehitriny. Ny malagasy dia tsy manana forme avy hatrany, fa ampiasaina hevitra toy ny "efa" na "vao tsy ela akory".',
    rows: [
      {
        label: '✅ Fomba fanaovana',
        structure: 'Sujet + have/has + participe passé',
        example_en: 'I have eaten already.',
        example_mg: 'Efa nihinana aho.',
        note: '"efa" = already/just; have → I/you/we/they | has → he/she/it',
      },
      {
        label: 'Already/Yet (efa/mbola)',
        structure: 'have + already + participe / have + not + participe + yet',
        example_en: 'I have already finished. / I haven\'t finished yet.',
        example_mg: 'Efa vita ny asako. / Tsy vita mbola ny asako.',
        note: 'already = efa | yet (négatif/question) = mbola',
      },
      {
        label: 'Ever/Never (mba/tsy mba)',
        structure: 'Have you ever + participe? / I have never + participe',
        example_en: 'Have you ever visited Paris? / I have never eaten sushi.',
        example_mg: 'Nitsidika Paris ve ianao? / Tsy mba nihinana sushi aho.',
        note: 'ever = mba (amin\'ny fanontaniana) | never = tsy mba',
      },
    ],
    tipsMg: [
      'Ny fotoana manokana dia tsy lazaina (≠ Past Simple)',
      'Past Simple: I ate rice at noon (amin\'ny fotoana voafaritra)',
      'Present Perfect: I have eaten rice today (ankehitriny mbola mitohy)',
    ],
  },

];

// ─── Topics list for the Malgasy sidebar entry ───────────────────────────────
export const malgasyTopics = malgasyManual.map(m => ({
  id: m.id,
  grammarRef: m.grammarRef,
  title: m.title,
  titleMg: m.titleMg,
  icon: m.icon,
  level: m.level,
}));
