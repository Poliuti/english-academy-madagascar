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

  interrogative: {
    id: 'interrogative',
    title: 'Questions (Yes/No & Wh-)',
    icon: '❓',
    level: 'A2',
    subtitle: 'Former toutes les questions en anglais',
    malgasyNote: 'Fanaovana fanontaniana amin\'ny fiteny anglisy — Do/Does, Be, Modal, Wh-',
    sections: [
      {
        title: '✅ Questions Yes/No — Do / Does (Present Simple)',
        content: '<strong>Do</strong> (I/you/we/they) / <strong>Does</strong> (he/she/it) + sujet + verbe infinitif ?',
        examples: [
          { en: 'Do you speak English?', fr: 'Est-ce que tu parles anglais ?' },
          { en: 'Does she live in Antananarivo?', fr: 'Est-ce qu\'elle habite à Antananarivo ?' },
          { en: 'Do they have a car?', fr: 'Est-ce qu\'ils ont une voiture ?' },
        ]
      },
      {
        title: '✅ Questions Yes/No — Did (Past Simple)',
        content: '<strong>Did</strong> + sujet + verbe infinitif ? (pour tous les sujets)',
        examples: [
          { en: 'Did you eat this morning?', fr: 'Est-ce que tu as mangé ce matin ?' },
          { en: 'Did she go to school yesterday?', fr: 'Est-ce qu\'elle est allée à l\'école hier ?' },
          { en: 'Did they understand the lesson?', fr: 'Est-ce qu\'ils ont compris la leçon ?' },
        ]
      },
      {
        title: '✅ Questions avec Be (is / are / was / were)',
        content: 'On inverse simplement le sujet et le verbe <strong>be</strong>',
        examples: [
          { en: 'Are you a student?', fr: 'Es-tu étudiant ?' },
          { en: 'Is she at home?', fr: 'Est-elle à la maison ?' },
          { en: 'Were they happy?', fr: 'Étaient-ils heureux ?' },
        ]
      },
      {
        title: '✅ Questions avec les Modaux',
        content: 'Modal + sujet + verbe infinitif ?',
        examples: [
          { en: 'Can you help me?', fr: 'Peux-tu m\'aider ?' },
          { en: 'Should we leave now?', fr: 'Devrions-nous partir maintenant ?' },
          { en: 'Will you come tomorrow?', fr: 'Est-ce que tu viendras demain ?' },
        ]
      },
      {
        title: '❓ Questions Wh- (question word + auxiliaire + sujet + verbe)',
        content: '<strong>What / Where / When / Who / Why / How</strong> + auxiliaire + sujet + verbe ?',
        examples: [
          { en: 'Where do you live?', fr: 'Où habites-tu ?' },
          { en: 'What does she eat?', fr: 'Qu\'est-ce qu\'elle mange ?' },
          { en: 'Why did they leave?', fr: 'Pourquoi sont-ils partis ?' },
          { en: 'How many books do you have?', fr: 'Combien de livres as-tu ?' },
        ]
      },
    ],
    tips: [
      '🔑 Do/Does pour le Present Simple — Did pour le Past Simple',
      '⚠️ Avec "be" et les modaux : on inverse directement, pas besoin de Do/Did',
      '💡 Wh- question + auxiliaire + sujet + verbe infinitif (pas de -s avec does)',
      '🇲🇬 En malagasy, on met "ve" après le verbe : "Manao ahoana ve ianao?" = "How are you?"',
    ]
  },

  imperatives: {
    id: 'imperatives',
    title: 'L\'Impératif',
    icon: '📢',
    level: 'A2',
    subtitle: 'Donner des ordres, des conseils et des instructions',
    malgasyNote: 'Ny baiko sy torohevitra amin\'ny anglisy — verbe fotsiny, tsy misy "you"',
    sections: [
      {
        title: '✅ Impératif affirmatif',
        content: 'Verbe seul (infinitif sans "to") — le sujet "you" est toujours sous-entendu',
        examples: [
          { en: 'Open the book.', fr: 'Ouvre le livre.' },
          { en: 'Listen carefully.', fr: 'Écoute attentivement.' },
          { en: 'Sit down, please.', fr: 'Assieds-toi, s\'il te plaît.' },
        ]
      },
      {
        title: '❌ Impératif négatif',
        content: '<strong>Don\'t</strong> + verbe infinitif',
        examples: [
          { en: 'Don\'t speak in class.', fr: 'Ne parle pas en classe.' },
          { en: 'Don\'t be late!', fr: 'Ne sois pas en retard !' },
          { en: 'Don\'t touch that.', fr: 'Ne touche pas ça.' },
        ]
      },
      {
        title: '👥 Let\'s — proposition / suggestion',
        content: '<strong>Let\'s</strong> + verbe pour suggérer quelque chose à faire ensemble',
        examples: [
          { en: 'Let\'s go to school.', fr: 'Allons à l\'école.' },
          { en: 'Let\'s eat!', fr: 'Mangeons !' },
          { en: 'Let\'s not argue.', fr: 'Ne nous disputons pas.' },
        ]
      },
      {
        title: '🙏 Impératif poli',
        content: 'Ajouter <strong>please</strong> au début ou à la fin pour être poli',
        examples: [
          { en: 'Please close the door.', fr: 'S\'il te plaît, ferme la porte.' },
          { en: 'Repeat after me, please.', fr: 'Répète après moi, s\'il te plaît.' },
          { en: 'Please be quiet.', fr: 'Sois tranquille, s\'il te plaît.' },
        ]
      },
    ],
    tips: [
      '🔑 L\'impératif = verbe seul, sans sujet. "Eat!" = Mange ! "Stop!" = Arrête !',
      '⚠️ Don\'t + verbe pour le négatif — jamais "No eat!" ou "Not eat!"',
      '💡 Let\'s = Let us — pour inclure tout le monde dans la suggestion',
      '🇲🇬 En malagasy, l\'impératif change selon le verbe — en anglais c\'est toujours simple !',
    ]
  },

  someAny: {
    id: 'someAny',
    title: 'Some, Any & No',
    icon: '🔢',
    level: 'A2',
    subtitle: 'Exprimer la quantité indéfinie en anglais',
    malgasyNote: 'Some, any, no — ny fanehoana habetsaky ny zavatra tsy fantatra tsara',
    sections: [
      {
        title: '✅ Some — phrases affirmatives',
        content: '<strong>Some</strong> = "quelques" / "du/de la/des" — utilisé dans les phrases affirmatives',
        examples: [
          { en: 'I have some water.', fr: 'J\'ai de l\'eau.' },
          { en: 'There are some books on the table.', fr: 'Il y a des livres sur la table.' },
          { en: 'She wants some rice.', fr: 'Elle veut du riz.' },
        ]
      },
      {
        title: '❓ Any — phrases négatives et interrogatives',
        content: '<strong>Any</strong> = "du/de la/des" dans les questions et les négatives',
        examples: [
          { en: 'Do you have any money?', fr: 'Est-ce que tu as de l\'argent ?' },
          { en: 'I don\'t have any friends here.', fr: 'Je n\'ai pas d\'amis ici.' },
          { en: 'Is there any milk in the fridge?', fr: 'Il y a du lait dans le frigo ?' },
        ]
      },
      {
        title: '🚫 No — quantité zéro',
        content: '<strong>No</strong> + nom = aucun/e — plus direct que "not any"',
        examples: [
          { en: 'I have no money.', fr: 'Je n\'ai pas d\'argent. (= I don\'t have any money)' },
          { en: 'There is no time.', fr: 'Il n\'y a pas de temps.' },
          { en: 'We have no class today.', fr: 'Nous n\'avons pas cours aujourd\'hui.' },
        ]
      },
      {
        title: '🧩 Composés : something, anything, nothing…',
        content: '<strong>some-</strong> (affirmatif) / <strong>any-</strong> (question/négatif) / <strong>no-</strong> (zéro)',
        examples: [
          { en: 'I want something to eat.', fr: 'Je veux quelque chose à manger.' },
          { en: 'Do you need anything?', fr: 'As-tu besoin de quelque chose ?' },
          { en: 'There is nothing in the bag.', fr: 'Il n\'y a rien dans le sac.' },
          { en: 'Is there someone at the door?', fr: 'Il y a quelqu\'un à la porte ?' },
        ]
      },
    ],
    tips: [
      '🔑 SOME = affirmatif · ANY = négatif ou question · NO = zéro (remplace "not any")',
      '💡 Astuce offre/demande : "Would you like some tea?" — some dans une question polie',
      '🧩 Composés : some + body/one/thing/where · any + body/one/thing/where · no + body/one/thing/where',
      '🇲🇬 "Manana zavatra hisakafo ve ianao?" = "Do you have anything to eat?"',
    ]
  },

  toBe: {
    id: 'toBe',
    title: 'To Be — Être',
    icon: '🔵',
    level: 'A1',
    subtitle: 'am / is / are — was / were : le verbe le plus important de l\'anglais',
    malgasyNote: 'Ny matoanteny be indrindra ampiasaina — am, is, are amin\'ny ankehitriny; was, were amin\'ny lasa',
    sections: [
      {
        title: '✅ Présent affirmatif : am / is / are',
        content: 'I → <strong>am</strong> · He/She/It → <strong>is</strong> · You/We/They → <strong>are</strong>',
        examples: [
          { en: 'I am a student.', fr: 'Je suis étudiant(e).' },
          { en: "He is a teacher.", fr: 'Il est professeur.' },
          { en: "She's from Madagascar.", fr: 'Elle est de Madagascar. (contraction)' },
          { en: 'We are in class.', fr: 'Nous sommes en classe.' },
          { en: "They're happy.", fr: 'Ils sont heureux. (contraction)' },
        ]
      },
      {
        title: '❌ Présent négatif : isn\'t / aren\'t',
        content: 'Sujet + <strong>am/is/are not</strong> → contractions : <strong>isn\'t</strong>, <strong>aren\'t</strong>. Jamais <em>amn\'t</em> — toujours <em>I\'m not</em>.',
        examples: [
          { en: "I'm not tired.", fr: 'Je ne suis pas fatigué(e).' },
          { en: "He isn't at school.", fr: "Il n'est pas à l'école." },
          { en: "They aren't ready.", fr: 'Ils ne sont pas prêts.' },
        ]
      },
      {
        title: '❓ Questions + réponses courtes',
        content: 'Inverser sujet et <em>to be</em>. Répondre avec <strong>Yes/No + to be</strong> — jamais juste "yes" ou "no".',
        examples: [
          { en: 'Are you a student? — Yes, I am. / No, I\'m not.', fr: 'Es-tu étudiant ? — Oui. / Non.' },
          { en: 'Is she happy? — Yes, she is.', fr: 'Est-elle heureuse ? — Oui.' },
          { en: 'Were they at home? — No, they weren\'t.', fr: 'Étaient-ils chez eux ? — Non.' },
        ]
      },
      {
        title: '⏮️ Passé : was / were',
        content: 'I/He/She/It → <strong>was</strong> · You/We/They → <strong>were</strong>. Négatif : <strong>wasn\'t / weren\'t</strong>.',
        examples: [
          { en: 'I was at school yesterday.', fr: "J'étais à l'école hier." },
          { en: 'We were very tired.', fr: 'Nous étions très fatigués.' },
          { en: "She wasn't there.", fr: "Elle n'était pas là." },
        ]
      },
    ],
    tips: [
      '🔑 Présent : I am · he/she/it is · you/we/they are',
      '🔑 Passé : I/he/she/it was · you/we/they were',
      '⚠️ Âge en anglais : "I am 15 years old" — jamais "I have 15"',
      '💡 Contractions : I\'m · you\'re · he\'s · she\'s · it\'s · we\'re · they\'re',
    ]
  },

  irregularVerbs: {
    id: 'irregularVerbs',
    title: 'Verbes Irréguliers',
    icon: '📋',
    level: 'A2',
    subtitle: 'Les verbes irréguliers essentiels : infinitif → passé → participe',
    malgasyNote: 'Matoanteny tsy manaraka ny fitsipika — tsy azo ampiana -ed fotsiny, tsy maintsy hadinina',
    sections: [
      {
        title: '📌 Groupe 1 — Même forme (Base = Passé = Participe)',
        content: 'Ces verbes ne changent pas — la même forme pour toutes les colonnes.',
        examples: [
          { en: 'cut → cut → cut', fr: 'couper' },
          { en: 'put → put → put', fr: 'mettre' },
          { en: 'let → let → let', fr: 'laisser' },
          { en: 'hit → hit → hit', fr: 'frapper' },
        ]
      },
      {
        title: '📌 Groupe 2 — Passé = Participe passé (2 formes)',
        content: 'Le passé et le participe passé sont identiques mais différents de la base.',
        examples: [
          { en: 'buy → bought → bought', fr: 'acheter' },
          { en: 'bring → brought → brought', fr: 'apporter' },
          { en: 'think → thought → thought', fr: 'penser' },
          { en: 'teach → taught → taught', fr: 'enseigner' },
          { en: 'catch → caught → caught', fr: 'attraper' },
          { en: 'find → found → found', fr: 'trouver' },
          { en: 'feel → felt → felt', fr: 'ressentir' },
          { en: 'keep → kept → kept', fr: 'garder' },
          { en: 'sleep → slept → slept', fr: 'dormir' },
          { en: 'leave → left → left', fr: 'partir/laisser' },
          { en: 'meet → met → met', fr: 'rencontrer' },
          { en: 'have → had → had', fr: 'avoir' },
          { en: 'make → made → made', fr: 'faire/fabriquer' },
          { en: 'say → said → said', fr: 'dire' },
          { en: 'tell → told → told', fr: 'dire/raconter' },
          { en: 'hear → heard → heard', fr: 'entendre' },
          { en: 'hold → held → held', fr: 'tenir' },
          { en: 'stand → stood → stood', fr: 'se tenir debout' },
          { en: 'understand → understood → understood', fr: 'comprendre' },
        ]
      },
      {
        title: '📌 Groupe 3 — 3 formes différentes',
        content: 'Trois formes complètement différentes — à mémoriser !',
        examples: [
          { en: 'go → went → gone', fr: 'aller' },
          { en: 'come → came → come', fr: 'venir' },
          { en: 'be → was/were → been', fr: 'être' },
          { en: 'do → did → done', fr: 'faire' },
          { en: 'give → gave → given', fr: 'donner' },
          { en: 'take → took → taken', fr: 'prendre' },
          { en: 'get → got → gotten/got', fr: 'obtenir/devenir' },
          { en: 'see → saw → seen', fr: 'voir' },
          { en: 'know → knew → known', fr: 'savoir/connaître' },
          { en: 'speak → spoke → spoken', fr: 'parler' },
          { en: 'write → wrote → written', fr: 'écrire' },
          { en: 'eat → ate → eaten', fr: 'manger' },
          { en: 'drink → drank → drunk', fr: 'boire' },
          { en: 'run → ran → run', fr: 'courir' },
          { en: 'sing → sang → sung', fr: 'chanter' },
          { en: 'swim → swam → swum', fr: 'nager' },
          { en: 'break → broke → broken', fr: 'casser' },
          { en: 'choose → chose → chosen', fr: 'choisir' },
          { en: 'forget → forgot → forgotten', fr: 'oublier' },
          { en: 'begin → began → begun', fr: 'commencer' },
          { en: 'fall → fell → fallen', fr: 'tomber' },
          { en: 'fly → flew → flown', fr: 'voler' },
          { en: 'grow → grew → grown', fr: 'grandir' },
          { en: 'throw → threw → thrown', fr: 'lancer' },
          { en: 'drive → drove → driven', fr: 'conduire' },
          { en: 'ride → rode → ridden', fr: 'faire du vélo/cheval' },
          { en: 'rise → rose → risen', fr: 'se lever (soleil)' },
          { en: 'wear → wore → worn', fr: 'porter (vêtement)' },
          { en: 'win → won → won', fr: 'gagner' },
          { en: 'lose → lost → lost', fr: 'perdre' },
        ]
      },
    ],
    tips: [
      '📋 La liste complète est dans le Boky → chapitre Verbes Irréguliers',
      '🔑 Pour le Past Simple : utilise directement la 2ᵉ colonne',
      '🔑 Pour le Present Perfect / Past Perfect : utilise la 3ᵉ colonne (participe passé)',
      '💡 Astuce : regroupe les verbes par pattern sonore (ring/rang/rung · sing/sang/sung)',
      '🇲🇬 Tsy misy fitsipika — tsy maintsy hadinina tsirairay!',
    ]
  },

  // ─── TASK 2 new topics ──────────────────────────────────────────────────────

  possessives: {
    id: 'possessives',
    title: 'Adjectifs & Pronoms Possessifs',
    icon: '🏷️',
    level: 'A2',
    subtitle: 'My/mine, your/yours, his/her — exprimer la possession',
    malgasyNote: 'Ny fananana amin\'ny anglisy: adjectif (+ nom) na pronom (irery). Miova arakaraka ny toerana.',
    sections: [
      {
        title: '📋 Tableau complet',
        content: '<strong>Adjectif possessif</strong> + nom · <strong>Pronom possessif</strong> seul (remplace le nom)',
        examples: [
          { en: 'This is my book. The book is mine.', fr: 'C\'est mon livre. / Le livre est à moi.' },
          { en: 'This is your bag. The bag is yours.', fr: 'C\'est ton sac. / Le sac est à toi.' },
          { en: 'This is his pen. The pen is his.', fr: 'C\'est son stylo (à lui). / Le stylo est à lui.' },
          { en: 'This is her phone. The phone is hers.', fr: 'C\'est son téléphone (à elle). / Le téléphone est à elle.' },
          { en: 'This is our house. The house is ours.', fr: 'C\'est notre maison. / La maison est à nous.' },
          { en: 'This is their car. The car is theirs.', fr: 'C\'est leur voiture. / La voiture est à eux.' },
        ]
      },
      {
        title: '✅ Adjectif possessif (avant un nom)',
        content: 'Toujours devant un nom. Invariable (pas de masculin/féminin/pluriel).',
        examples: [
          { en: 'This is my brother.', fr: 'Voici mon frère.' },
          { en: 'Her name is Miora.', fr: 'Elle s\'appelle Miora.' },
          { en: 'We love our country.', fr: 'Nous aimons notre pays.' },
          { en: 'Their parents are teachers.', fr: 'Leurs parents sont professeurs.' },
        ]
      },
      {
        title: '🔄 Pronom possessif (remplace le nom)',
        content: 'Utilisé seul, sans nom. Évite la répétition.',
        examples: [
          { en: 'That book is mine.', fr: 'Ce livre est à moi.' },
          { en: 'Is this pen yours?', fr: 'Ce stylo est à toi ?' },
          { en: 'The red car is ours.', fr: 'La voiture rouge est à nous.' },
          { en: 'Their house is bigger than ours.', fr: 'Leur maison est plus grande que la nôtre.' },
        ]
      },
    ],
    tips: [
      '⚠️ "His" est identique pour l\'adjectif ET le pronom : his book / the book is his',
      '⚠️ "Its" (adjectif possessif) n\'a pas de forme pronom courante',
      '💡 Pas d\'apostrophe ! "its" (possessif) ≠ "it\'s" (it is)',
      '🇲🇬 En malagasy la possession suit le nom : "ny boky-ko" (mon livre) ≠ "my book" (devant)',
    ]
  },

  adverbs: {
    id: 'adverbs',
    title: 'Adverbes de fréquence & de manière',
    icon: '⚡',
    level: 'A2',
    subtitle: 'Always, usually, often, never — quickly, carefully, well',
    malgasyNote: 'Adverbes de fréquence: always = mandrakariva, often = matetika, never = tsy mba. Adverbes de manière: quickly = haingana.',
    sections: [
      {
        title: '📅 Adverbes de fréquence (100% → 0%)',
        content: 'Se placent <strong>avant le verbe principal</strong> mais <strong>après "to be"</strong>.',
        examples: [
          { en: 'I always brush my teeth in the morning. (100%)', fr: 'Je me brosse toujours les dents le matin.' },
          { en: 'She usually wakes up at six. (80%)', fr: 'Elle se réveille généralement à 6h.' },
          { en: 'We often eat rice for dinner. (60%)', fr: 'Nous mangeons souvent du riz le soir.' },
          { en: 'He sometimes watches TV after school. (40%)', fr: 'Il regarde parfois la télé après l\'école.' },
          { en: 'They rarely go to the cinema. (20%)', fr: 'Ils vont rarement au cinéma.' },
          { en: 'I never drink alcohol. (0%)', fr: 'Je ne bois jamais d\'alcool.' },
        ]
      },
      {
        title: '📍 Position avec "to be"',
        content: 'Avec "to be", l\'adverbe de fréquence se place <strong>après</strong> le verbe.',
        examples: [
          { en: 'He is always late.', fr: 'Il est toujours en retard.' },
          { en: 'They are usually tired after school.', fr: 'Ils sont généralement fatigués après l\'école.' },
          { en: 'She is never rude.', fr: 'Elle n\'est jamais impolie.' },
        ]
      },
      {
        title: '🏃 Adverbes de manière (adjectif + -ly)',
        content: 'Indiquent comment quelque chose est fait. Se placent après le verbe ou l\'objet.',
        examples: [
          { en: 'She speaks English quickly.', fr: 'Elle parle anglais rapidement. (quick + ly)' },
          { en: 'He drives very carefully.', fr: 'Il conduit très prudemment. (careful + ly)' },
          { en: 'The team played badly last night.', fr: 'L\'équipe a très mal joué hier soir.' },
          { en: 'She sings beautifully at every concert.', fr: 'Elle chante magnifiquement à chaque concert.' },
        ]
      },
      {
        title: '⚠️ Adverbes irréguliers',
        content: 'Certains adverbes ne suivent pas la règle "-ly".',
        examples: [
          { en: 'She plays the piano very well.', fr: 'Elle joue très bien du piano. (good → well)' },
          { en: 'He runs very fast.', fr: 'Il court très vite. (fast → fast, même forme)' },
          { en: 'She works really hard every day.', fr: 'Elle travaille vraiment dur chaque jour. (hard → hard)' },
          { en: 'He arrived late to the meeting.', fr: 'Il est arrivé en retard à la réunion. (late → late)' },
        ]
      },
    ],
    tips: [
      '💡 Ordre en fin de phrase : MANIÈRE → LIEU → TEMPS (She sang beautifully in the park yesterday)',
      '⚠️ "hardly" ≠ "hard" : hardly = à peine / hard = fort ou dur',
      '⚠️ "lately" ≠ "late" : lately = récemment / late = en retard ou tard',
    ]
  },

  countableUncountable: {
    id: 'countableUncountable',
    title: 'Dénombrables & Indénombrables',
    icon: '🧮',
    level: 'A2–B1',
    subtitle: 'Much, many, a lot of, a few, a little — choisir la bonne quantité',
    malgasyNote: 'Countable (azo isaina: apple, book) sy uncountable (tsy azo isaina: water, money, advice)',
    sections: [
      {
        title: '📦 Noms dénombrables (Countable nouns)',
        content: 'On peut les compter (1, 2, 3…). Ils ont un singulier et un pluriel.',
        examples: [
          { en: 'one apple, two apples, three books', fr: 'une pomme, deux pommes, trois livres' },
          { en: 'How many oranges do you have?', fr: 'Combien d\'oranges as-tu ?' },
          { en: 'I have a few coins in my pocket.', fr: 'J\'ai quelques pièces dans ma poche.' },
          { en: 'There are many students in the class.', fr: 'Il y a beaucoup d\'étudiants dans la classe.' },
        ]
      },
      {
        title: '💧 Noms indénombrables (Uncountable nouns)',
        content: 'Pas de pluriel. Pas de "a/an". Verbe toujours au singulier.',
        examples: [
          { en: 'water, milk, rice, bread, sugar, money, air', fr: 'eau, lait, riz, pain, sucre, argent, air' },
          { en: 'information, advice, furniture, news, luggage', fr: 'information, conseil, meubles, nouvelles, bagages' },
          { en: 'How much water do you drink every day?', fr: 'Combien d\'eau bois-tu chaque jour ?' },
          { en: 'The information is correct.', fr: 'L\'information est correcte. (pas "informations")' },
        ]
      },
      {
        title: '⚖️ Much / Many / A lot of',
        content: '<strong>much</strong> + indénombrable · <strong>many</strong> + dénombrable · <strong>a lot of</strong> + les deux (surtout en affirmatif)',
        examples: [
          { en: 'I don\'t have much time today.', fr: 'Je n\'ai pas beaucoup de temps aujourd\'hui.' },
          { en: 'She has a lot of friends at school.', fr: 'Elle a beaucoup d\'amis à l\'école.' },
          { en: 'He drinks a lot of water every day.', fr: 'Il boit beaucoup d\'eau chaque jour.' },
          { en: 'Do you have much homework tonight?', fr: 'Tu as beaucoup de devoirs ce soir ?' },
        ]
      },
      {
        title: '🔹 A few / A little',
        content: '<strong>a few</strong> + dénombrable · <strong>a little</strong> + indénombrable (sens positif)',
        examples: [
          { en: 'I have a few friends in this city.', fr: 'J\'ai quelques amis dans cette ville.' },
          { en: 'She speaks a little French.', fr: 'Elle parle un peu français.' },
          { en: 'Wait a few minutes, please.', fr: 'Attends quelques minutes, s\'il te plaît.' },
          { en: 'Add a little sugar to the tea.', fr: 'Ajoute un peu de sucre dans le thé.' },
        ]
      },
    ],
    tips: [
      '⚠️ "advice", "information", "furniture", "news", "luggage" → toujours indénombrables en anglais !',
      '💡 Much/many → surtout en négatifs et questions ; en affirmatif préfère "a lot of"',
      '🔑 Few (sans "a") = peu de (presque rien, négatif) · a few = quelques (positif)',
      '🔑 Little (sans "a") = peu de (négatif) · a little = un peu (positif)',
    ]
  },

  connectors: {
    id: 'connectors',
    title: 'Connecteurs & Conjonctions',
    icon: '🔗',
    level: 'B1',
    subtitle: 'And, but, because, although, however, therefore — relier les idées',
    malgasyNote: 'Ny connector = teny mampifandray hevitra roa. Ilaina indrindra amin\'ny soratra sy ny resaka.',
    sections: [
      {
        title: '➕ Coordination (and, but, or, so)',
        content: 'Relient deux propositions de même niveau.',
        examples: [
          { en: 'I like tea and coffee.', fr: 'J\'aime le thé et le café.' },
          { en: 'She is tired but she keeps working hard.', fr: 'Elle est fatiguée mais elle continue à travailler.' },
          { en: 'You can stay or leave now.', fr: 'Tu peux rester ou partir maintenant.' },
          { en: 'It was raining, so we stayed home.', fr: 'Il pleuvait, donc nous sommes restés à la maison.' },
        ]
      },
      {
        title: '❓ Cause & Résultat (because, since, therefore)',
        content: '<strong>because / since</strong> → la cause · <strong>therefore / as a result</strong> → la conséquence',
        examples: [
          { en: 'I was late because the bus broke down.', fr: 'J\'étais en retard parce que le bus est tombé en panne.' },
          { en: 'Since it was cold outside, we put on our coats.', fr: 'Comme il faisait froid dehors, nous avons mis nos manteaux.' },
          { en: 'He studied very hard. Therefore, he passed the exam.', fr: 'Il a beaucoup étudié. Par conséquent, il a réussi.' },
        ]
      },
      {
        title: '🔄 Contraste (although, however, nevertheless)',
        content: '<strong>although</strong> + proposition · <strong>however / nevertheless</strong> en début de phrase (+ virgule)',
        examples: [
          { en: 'Although it was expensive, she bought it.', fr: 'Bien que ce soit cher, elle l\'a acheté.' },
          { en: 'I was very tired. However, I finished my homework.', fr: 'J\'étais très fatigué. Cependant, j\'ai fini mes devoirs.' },
          { en: 'The plan was risky. Nevertheless, they all agreed.', fr: 'Le plan était risqué. Néanmoins, ils ont tous accepté.' },
          { en: 'Even though it rained, we enjoyed the trip.', fr: 'Même s\'il a plu, nous avons profité du voyage.' },
        ]
      },
      {
        title: '➕ Addition (moreover, furthermore, in addition)',
        content: 'Ajoutent une information supplémentaire. Registre soutenu, surtout à l\'écrit.',
        examples: [
          { en: 'The hotel is clean. Moreover, it is very affordable.', fr: 'L\'hôtel est propre. De plus, il est abordable.' },
          { en: 'Furthermore, the location is excellent.', fr: 'En outre, l\'emplacement est excellent.' },
          { en: 'In addition to English, she also speaks Spanish.', fr: 'En plus de l\'anglais, elle parle aussi espagnol.' },
        ]
      },
    ],
    tips: [
      '💡 "So" exprime la conséquence (donc) ; "because" exprime la cause (parce que)',
      '⚠️ "Although" et "even though" sont synonymes ; "even though" est plus fort / plus émotionnel',
      '💡 "However" et "nevertheless" viennent en début de phrase ou après un point-virgule',
    ]
  },

  tenseChooser: {
    id: 'tenseChooser',
    title: 'Choisir le bon temps verbal',
    icon: '🎯',
    level: 'B1',
    subtitle: 'Yesterday/ago → Past Simple · Already/since/for → Present Perfect',
    malgasyNote: 'Ny fotoana manokana no mametra ny temps. Yesterday = Past Simple. Already/just/since = Present Perfect.',
    sections: [
      {
        title: '⏮️ Past Simple — indicateurs temporels',
        content: 'Utilise le Past Simple avec : <strong>yesterday, ago, last…, in + année, when I was…</strong>',
        examples: [
          { en: 'I met her yesterday at the market.', fr: 'Je l\'ai rencontrée hier au marché.' },
          { en: 'He left two hours ago.', fr: 'Il est parti il y a deux heures.' },
          { en: 'We went to the beach last summer.', fr: 'Nous sommes allés à la plage l\'été dernier.' },
          { en: 'She was born in 2005.', fr: 'Elle est née en 2005.' },
        ]
      },
      {
        title: '🔗 Present Perfect — indicateurs temporels',
        content: 'Utilise le Present Perfect avec : <strong>already, yet, just, since, for, ever, never, recently, so far</strong>',
        examples: [
          { en: 'I have already eaten lunch.', fr: 'J\'ai déjà déjeuné.' },
          { en: 'Have you finished your homework yet?', fr: 'Tu as déjà fini tes devoirs ?' },
          { en: 'She has just arrived home.', fr: 'Elle vient juste d\'arriver à la maison.' },
          { en: 'He has lived here since 2020.', fr: 'Il habite ici depuis 2020.' },
          { en: 'We have studied English for three years.', fr: 'Nous étudions l\'anglais depuis trois ans.' },
        ]
      },
      {
        title: '📖 Present Simple — indicateurs temporels',
        content: 'Utilise le Present Simple avec : <strong>every day/week, always, usually, often, never, on Mondays</strong>',
        examples: [
          { en: 'I go to school every day.', fr: 'Je vais à l\'école tous les jours.' },
          { en: 'She always drinks coffee in the morning.', fr: 'Elle boit toujours du café le matin.' },
          { en: 'They play football on Sundays.', fr: 'Ils jouent au foot le dimanche.' },
        ]
      },
      {
        title: '🚀 Future — indicateurs temporels',
        content: 'Utilise <strong>will</strong> ou <strong>going to</strong> avec : tomorrow, next…, soon, in + durée future',
        examples: [
          { en: 'She will call you tomorrow morning.', fr: 'Elle t\'appellera demain matin.' },
          { en: 'We are going to travel next month.', fr: 'Nous allons voyager le mois prochain.' },
          { en: 'He will be back in two days.', fr: 'Il sera de retour dans deux jours.' },
        ]
      },
    ],
    tips: [
      '🔑 "since" + moment précis (since 2020, since Monday) · "for" + durée (for 3 years, for a week)',
      '⚠️ "I have been here since yesterday" (PP) ≠ "I was here yesterday" (PS)',
      '💡 Moment précis et terminé → Past Simple · Lien avec le présent → Present Perfect',
    ]
  },

  phrasalVerbs: {
    id: 'phrasalVerbs',
    title: 'Phrasal Verbs essentiels',
    icon: '💡',
    level: 'B1–B2',
    subtitle: 'Get up, give up, look for, turn on/off — les 20 indispensables',
    malgasyNote: 'Phrasal verbs = verbe + particule. Ny hevitr\'izy ireo dia hafa amin\'ny teny tsirairay — tsy maintsy hadinina!',
    sections: [
      {
        title: '📋 Phrasal verbs essentiels — groupe 1',
        content: 'Verbe + particule (adverbe/préposition) = sens nouveau. Souvent impossible à deviner !',
        examples: [
          { en: 'I get up at six every morning.', fr: 'get up = se lever' },
          { en: "Don't give up, keep trying!", fr: 'give up = abandonner' },
          { en: "I'm looking for my keys.", fr: 'look for = chercher' },
          { en: 'She looks after her little brother.', fr: 'look after = s\'occuper de' },
          { en: 'Turn on the light, please.', fr: 'turn on = allumer' },
          { en: 'Turn off the TV before bed.', fr: 'turn off = éteindre' },
          { en: 'Can you pick me up at the station?', fr: 'pick up = ramasser / aller chercher' },
          { en: 'Put on your coat, it\'s cold outside.', fr: 'put on = mettre (un vêtement)' },
          { en: 'Take off your shoes at the door.', fr: 'take off = enlever (vêtement) / décoller' },
          { en: 'I woke up very late today.', fr: 'wake up = se réveiller' },
        ]
      },
      {
        title: '📋 Phrasal verbs essentiels — groupe 2',
        content: 'Dix phrasal verbs supplémentaires très fréquents.',
        examples: [
          { en: 'When will you come back home?', fr: 'come back = revenir / rentrer' },
          { en: 'They go out every Friday evening.', fr: 'go out = sortir' },
          { en: 'I need to find out the truth.', fr: 'find out = découvrir / apprendre' },
          { en: 'She set up her own business last year.', fr: 'set up = créer / mettre en place' },
          { en: 'The car broke down on the highway.', fr: 'break down = tomber en panne' },
          { en: 'We ran out of milk this morning.', fr: 'run out of = manquer de / ne plus avoir' },
          { en: 'They made up after the argument.', fr: 'make up = se réconcilier / inventer' },
          { en: 'The doctor carried out the tests carefully.', fr: 'carry out = effectuer / réaliser' },
          { en: 'Hold on, I will be right back.', fr: 'hold on = attendre / tenir bon' },
          { en: "Don't put off your homework until tomorrow.", fr: 'put off = remettre à plus tard' },
        ]
      },
      {
        title: '🔀 Séparables vs. Inséparables',
        content: '<strong>Séparable</strong> : l\'objet peut aller entre verbe et particule · <strong>Inséparable</strong> : l\'objet vient toujours après',
        examples: [
          { en: 'Turn off the TV. OR Turn it off. (séparable)', fr: 'Éteins la télé. / Éteins-la.' },
          { en: 'Look after the children. (inséparable, jamais "look the children after")', fr: 'Occupe-toi des enfants.' },
          { en: 'Pick up the book. OR Pick it up. (séparable)', fr: 'Ramasse le livre. / Ramasse-le.' },
        ]
      },
    ],
    tips: [
      '💡 Avec un pronom (it, them, him), la particule vient TOUJOURS après : "turn it off" ✓ (pas "turn off it")',
      '📚 Apprends les phrasal verbs par phrases complètes, pas juste la traduction',
      '🔑 "Run out of" et "look after" sont inséparables — l\'objet ne peut jamais se glisser entre',
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


  sinceFor: {
    id: 'sinceFor',
    title: 'Since & For',
    icon: '⏳',
    level: 'B1',
    subtitle: 'Exprimer la durée et le point de départ',
    malgasyNote: 'Manazava ny faharetan\'ny zavatra sy ny fotoana nanombohan\'ny',
    sections: [
      {
        title: '📍 Since — point de départ précis',
        content: '<strong>Since</strong> + moment précis (date, événement). La durée a commencé à ce moment.',
        examples: [
          { en: 'I have lived here <strong>since 2015</strong>.', fr: 'J\'habite ici depuis 2015.' },
          { en: 'She has been working <strong>since Monday</strong>.', fr: 'Elle travaille depuis lundi.' },
          { en: 'We haven\'t spoken <strong>since the argument</strong>.', fr: 'Nous ne nous sommes pas parlé depuis la dispute.' },
        ]
      },
      {
        title: '⏱️ For — durée (période)',
        content: '<strong>For</strong> + durée (nombre de jours, mois, années, heures...)',
        examples: [
          { en: 'I have lived here <strong>for five years</strong>.', fr: 'J\'habite ici depuis cinq ans.' },
          { en: 'She has been waiting <strong>for two hours</strong>.', fr: 'Elle attend depuis deux heures.' },
          { en: 'He studied English <strong>for ten years</strong>.', fr: 'Il a étudié l\'anglais pendant dix ans.' },
        ]
      },
      {
        title: '🔗 Avec quel temps ?',
        content: '<strong>Present Perfect</strong> pour la durée jusqu\'au présent. <strong>Past Perfect</strong> pour la durée avant un moment passé.',
        examples: [
          { en: 'I <strong>have known</strong> her for three years. (jusqu\'à maintenant)', fr: 'Je la connais depuis trois ans.' },
          { en: 'He <strong>had worked</strong> there for 20 years before retiring.', fr: 'Il avait travaillé là-bas pendant 20 ans avant de partir à la retraite.' },
        ]
      },
      {
        title: '⚠️ Erreurs courantes',
        content: 'Confusions fréquentes à éviter',
        examples: [
          { en: '❌ I live here since 5 years.', fr: '→ Wrong: "since" + durée est incorrect' },
          { en: '✅ I have lived here for 5 years. / since 2019.', fr: 'Correct !' },
          { en: '❌ I haven\'t seen her since three weeks.', fr: '→ "since" + point précis, pas durée' },
          { en: '✅ I haven\'t seen her for three weeks.', fr: 'Correct !' },
        ]
      },
    ],
    tips: [
      '🔑 Since + moment précis : since 2010, since Monday, since she left',
      '🔑 For + durée : for 5 years, for a long time, for two months',
      '💡 Question : How long have you...? → réponse avec "for" ou "since"',
      '⚠️ "For" peut aussi s\'utiliser avec le Past Simple (action terminée) : He worked there for 10 years.',
    ]
  },

  usedTo: {
    id: 'usedTo',
    title: 'Used to',
    icon: '🔙',
    level: 'B1',
    subtitle: 'Les habitudes et états passés qui n\'existent plus',
    malgasyNote: 'Ny zava-mahazatra tamin\'ny lasa izay tsy misy intsony',
    sections: [
      {
        title: '✅ Forme affirmative',
        content: 'Sujet + <strong>used to</strong> + verbe infinitif',
        examples: [
          { en: 'I <strong>used to</strong> walk to school.', fr: 'J\'allais à l\'école à pied (avant, plus maintenant).' },
          { en: 'She <strong>used to</strong> love dancing.', fr: 'Elle aimait danser (avant).' },
          { en: 'They <strong>used to</strong> live in the countryside.', fr: 'Ils habitaient à la campagne (avant).' },
        ]
      },
      {
        title: '❌ Forme négative',
        content: 'Sujet + <strong>didn\'t use to</strong> + verbe infinitif',
        examples: [
          { en: 'I <strong>didn\'t use to</strong> like vegetables.', fr: 'Je n\'aimais pas les légumes (avant).' },
          { en: 'He <strong>didn\'t use to</strong> work this hard.', fr: 'Il ne travaillait pas autant (avant).' },
        ]
      },
      {
        title: '❓ Forme interrogative',
        content: '<strong>Did</strong> + sujet + <strong>use to</strong> + verbe ?',
        examples: [
          { en: '<strong>Did</strong> you <strong>use to</strong> play football?', fr: 'Est-ce que tu jouais au football (avant) ?' },
          { en: '<strong>Did</strong> she <strong>use to</strong> live here?', fr: 'Est-ce qu\'elle habitait ici (avant) ?' },
        ]
      },
      {
        title: '⚠️ Ne pas confondre avec "be/get used to"',
        content: '<strong>Be/Get used to</strong> + gérondif = être/s\'habituer à (présent)',
        examples: [
          { en: 'I <strong>am used to</strong> waking up early. (j\'en ai l\'habitude)', fr: 'J\'ai l\'habitude de me lever tôt.' },
          { en: 'She is <strong>getting used to</strong> the cold weather.', fr: 'Elle s\'habitue au temps froid.' },
          { en: '⚠️ "used to work" ≠ "used to working"', fr: 'Habitude passée ≠ être habitué à' },
        ]
      },
      {
        title: '🔄 Would pour les habitudes passées',
        content: '<strong>Would</strong> peut remplacer "used to" pour les habitudes (pas les états)',
        examples: [
          { en: 'We <strong>would</strong> go to the beach every summer.', fr: 'Nous allions à la plage chaque été.' },
          { en: '✅ She used to be shy. (état → "used to" only)', fr: 'Elle était timide (avant).' },
          { en: '❌ She would be shy. (wrong for states)', fr: 'Incorrect pour les états.' },
        ]
      },
    ],
    tips: [
      '🔑 Used to = habitude OU état passé qui n\'existe plus',
      '🔑 Would = habitude passée SEULEMENT (pas les états)',
      '⚠️ "Be used to + -ing" = être habitué à (présent)',
      '💡 Pas de "used to" au présent : on dit "usually" → I usually walk to work.',
    ]
  },

  verbsOfState: {
    id: 'verbsOfState',
    title: 'Verbes + Gérondif ou Infinitif',
    icon: '🎯',
    level: 'B1',
    subtitle: 'Like, love, hate, enjoy, prefer — gérondif ou infinitif ?',
    malgasyNote: 'Matoanteny + -ing na + infinitif',
    sections: [
      {
        title: '✅ Verbes suivis du gérondif SEULEMENT',
        content: 'Ces verbes exigent toujours le gérondif (-ing)',
        examples: [
          { en: 'I <strong>enjoy</strong> reading books.', fr: 'J\'aime lire des livres.' },
          { en: 'She <strong>doesn\'t mind</strong> waiting.', fr: 'Ça ne la dérange pas d\'attendre.' },
          { en: 'He <strong>keeps</strong> talking during class.', fr: 'Il n\'arrête pas de parler en classe.' },
          { en: 'They <strong>finished</strong> eating and left.', fr: 'Ils ont fini de manger et sont partis.' },
          { en: 'I <strong>avoid</strong> driving at night.', fr: 'J\'évite de conduire la nuit.' },
        ]
      },
      {
        title: '✅ Verbes suivis de l\'infinitif SEULEMENT',
        content: 'Ces verbes exigent toujours l\'infinitif (to + verbe)',
        examples: [
          { en: 'She <strong>wants</strong> to learn English.', fr: 'Elle veut apprendre l\'anglais.' },
          { en: 'He <strong>decided</strong> to leave early.', fr: 'Il a décidé de partir tôt.' },
          { en: 'They <strong>hope</strong> to visit Paris.', fr: 'Ils espèrent visiter Paris.' },
          { en: 'I <strong>need</strong> to study more.', fr: 'J\'ai besoin d\'étudier plus.' },
        ]
      },
      {
        title: '🔄 Verbes suivis des DEUX (sens identique)',
        content: 'Like, love, hate, prefer → gérondif ou infinitif, même sens',
        examples: [
          { en: 'I <strong>like swimming</strong>. = I <strong>like to swim</strong>.', fr: 'J\'aime nager.' },
          { en: 'She <strong>loves cooking</strong>. = She <strong>loves to cook</strong>.', fr: 'Elle aime cuisiner.' },
          { en: 'He <strong>hates waiting</strong>. = He <strong>hates to wait</strong>.', fr: 'Il déteste attendre.' },
        ]
      },
      {
        title: '⚠️ Stop + gérondif vs infinitif (sens différent !)',
        content: 'Le sens change selon la forme utilisée',
        examples: [
          { en: 'He <strong>stopped smoking</strong>. (arrêter de fumer)', fr: 'Il a arrêté de fumer.' },
          { en: 'He <strong>stopped to smoke</strong>. (s\'arrêter pour fumer)', fr: 'Il s\'est arrêté pour fumer.' },
          { en: 'She <strong>remembered calling</strong> him. (se souvenir d\'avoir appelé)', fr: 'Elle se souvient de lui avoir téléphoné.' },
          { en: 'She <strong>remembered to call</strong> him. (se souvenir de devoir appeler)', fr: 'Elle a pensé à lui téléphoner.' },
        ]
      },
    ],
    tips: [
      '🔑 enjoy, mind, avoid, finish, keep → toujours + -ing',
      '🔑 want, need, decide, hope, plan → toujours + infinitif',
      '🔄 like, love, hate, prefer → -ing ou infinitif (même sens)',
      '⚠️ stop, try, remember, forget → sens DIFFÉRENT selon -ing ou infinitif',
    ]
  },

  adjectives: {
    id: 'adjectives',
    title: 'Les Adjectifs',
    icon: '✨',
    level: 'A1–A2',
    subtitle: 'Qualifier les personnes et les choses',
    malgasyNote: 'Teny mpamaritra anarana',
    sections: [
      {
        title: '📌 Position de l\'adjectif',
        content: 'En anglais, l\'adjectif se place <strong>avant</strong> le nom (≠ français)',
        examples: [
          { en: 'a <strong>beautiful</strong> house (≠ une maison belle)', fr: 'une belle maison' },
          { en: 'a <strong>tall</strong> student', fr: 'un grand étudiant' },
          { en: 'She is <strong>happy</strong>. (après "be")', fr: 'Elle est heureuse.' },
        ]
      },
      {
        title: '👆 Adjectifs démonstratifs',
        content: 'Indiquent la proximité ou l\'éloignement',
        examples: [
          { en: '<strong>This</strong> book (ce livre-ci — proche, singulier)', fr: 'ce livre-ci' },
          { en: '<strong>That</strong> house (cette maison-là — loin, singulier)', fr: 'cette maison-là' },
          { en: '<strong>These</strong> shoes (ces chaussures-ci — proche, pluriel)', fr: 'ces chaussures-ci' },
          { en: '<strong>Those</strong> trees (ces arbres-là — loin, pluriel)', fr: 'ces arbres-là' },
        ]
      },
      {
        title: '📋 Ordre des adjectifs multiples',
        content: 'Quand il y a plusieurs adjectifs : opinion → taille → âge → forme → couleur → origine → matière',
        examples: [
          { en: 'a <strong>beautiful big old round green French</strong> vase', fr: 'un beau grand vieux vase rond vert français' },
          { en: 'a <strong>lovely small</strong> dog', fr: 'un joli petit chien' },
          { en: 'a <strong>tall young</strong> man', fr: 'un grand jeune homme' },
        ]
      },
      {
        title: '⚡ Adjectifs courants à mémoriser',
        content: 'Adjectifs essentiels avec leur contraire',
        examples: [
          { en: 'big ↔ small | tall ↔ short | young ↔ old', fr: 'grand ↔ petit | grand ↔ court | jeune ↔ vieux' },
          { en: 'happy ↔ sad | hot ↔ cold | fast ↔ slow', fr: 'heureux ↔ triste | chaud ↔ froid | rapide ↔ lent' },
          { en: 'easy ↔ difficult | cheap ↔ expensive | clean ↔ dirty', fr: 'facile ↔ difficile | bon marché ↔ cher | propre ↔ sale' },
        ]
      },
      {
        title: '🔄 Adjectif ≠ Adverbe',
        content: 'L\'adjectif qualifie un nom, l\'adverbe qualifie un verbe',
        examples: [
          { en: 'She is a <strong>quick</strong> runner. (adjectif → runner)', fr: 'C\'est une coureuse rapide.' },
          { en: 'She runs <strong>quickly</strong>. (adverbe → runs)', fr: 'Elle court rapidement.' },
          { en: 'He is <strong>careful</strong>. (adjectif après "be")', fr: 'Il est prudent.' },
          { en: 'He drives <strong>carefully</strong>. (adverbe)', fr: 'Il conduit prudemment.' },
        ]
      },
    ],
    tips: [
      '🔑 Adjectifs en anglais : invariables (pas de -s au pluriel)',
      '🔑 Toujours avant le nom : a red car (pas a car red)',
      '⚠️ Démonstratifs : this/that (singulier) — these/those (pluriel)',
      '💡 Ordre : "a lovely little old rectangular green French silver whittling knife"',
    ]
  },


export const theoryTopics = [
  // ── A1 ───────────────────────────────────────────────────────────
  { id: 'pronouns',          label: 'Pronoms',                        icon: '👥',   level: 'A1' },
  { id: 'toBe',              label: 'To Be (am/is/are/was)',          icon: '🔵',   level: 'A1' },
  { id: 'articles',          label: 'Articles (a/an/the)',            icon: '🔤',   level: 'A1' },
  { id: 'plurals',           label: 'Pluriels',                       icon: '🔢',   level: 'A1' },
  { id: 'therebeis',         label: 'There is / are',                 icon: '📌',   level: 'A1' },
  // ── A1–A2 ────────────────────────────────────────────────────────
  { id: 'prepositions',      label: 'Prépositions',                   icon: '📍',   level: 'A1–A2' },
  { id: 'questions',         label: 'Questions (Wh-)',                icon: '❓',   level: 'A1–A2' },
  // ── A2 ───────────────────────────────────────────────────────────
  { id: 'presentSimple',     label: 'Present Simple',                 icon: '📖',   level: 'A2' },
  { id: 'presentContinuous', label: 'Present Continuous',             icon: '🔄',   level: 'A2' },
  { id: 'interrogative',     label: 'Questions (Yes/No & Wh-)',       icon: '❓',   level: 'A2' },
  { id: 'imperatives',       label: 'L\'Impératif',                   icon: '📢',   level: 'A2' },
  { id: 'someAny',           label: 'Some, Any & No',                 icon: '🔢',   level: 'A2' },
  { id: 'comparatives',      label: 'Comparatifs & Superlatifs',      icon: '⚖️',   level: 'A2' },
  { id: 'irregularVerbs',    label: 'Verbes Irréguliers',             icon: '📋',   level: 'A2' },
  { id: 'modals',            label: 'Modaux (can/must/would…)',       icon: '🛠️',   level: 'A2' },
  { id: 'possessives',       label: 'Adjectifs & Pronoms Possessifs', icon: '🏷️',   level: 'A2' },
  { id: 'adverbs',           label: 'Adverbes (fréquence & manière)', icon: '⚡',   level: 'A2' },
  // ── A2–B1 ────────────────────────────────────────────────────────
  { id: 'pastSimple',        label: 'Past Simple',                    icon: '⏮️',   level: 'A2–B1' },
  { id: 'futureSimple',      label: 'Future Simple',                  icon: '🚀',   level: 'A2–B1' },
  { id: 'countableUncountable', label: 'Dénombrables & Indénombrables', icon: '🧮', level: 'A2–B1' },
  // ── B1 ───────────────────────────────────────────────────────────
  { id: 'presentPerfect',    label: 'Present Perfect',                icon: '🔗',   level: 'B1' },
  { id: 'pastContinuous',    label: 'Past Continuous',                icon: '⏸️',   level: 'B1' },
  { id: 'futureContinuous',  label: 'Future Continuous',              icon: '🔮',   level: 'B1' },
  { id: 'pastPerfect',       label: 'Past Perfect',                   icon: '⏮️⏮️', level: 'B1' },
  { id: 'timeMarkers',       label: 'Indicateurs de temps',           icon: '⏱️',   level: 'B1' },
  { id: 'passiveVoice',      label: 'Voix Passive',                   icon: '🔄',   level: 'B1' },
  { id: 'connectors',        label: 'Connecteurs & Conjonctions',     icon: '🔗',   level: 'B1' },
  { id: 'tenseChooser',      label: 'Choisir le bon temps',           icon: '🎯',   level: 'B1' },
  // ── B1–B2 ────────────────────────────────────────────────────────
  { id: 'conditionals',      label: 'Conditionnels (if)',             icon: '🔀',   level: 'B1–B2' },
  { id: 'reportedSpeech',    label: 'Discours Indirect',              icon: '💬',   level: 'B1–B2' },
  { id: 'phrasalVerbs',      label: 'Phrasal Verbs essentiels',       icon: '💡',   level: 'B1–B2' },
  // ── B2 ───────────────────────────────────────────────────────────
  { id: 'futurePerfect',     label: 'Future Perfect',                 icon: '✅🚀',  level: 'B2' },

  // ── A1–A2 (new) ──────────────────────────────────────────────────────────
  { id: 'adjectives',    label: 'Les Adjectifs',                      icon: '✨',   level: 'A1–A2' },
  // ── B1 (new) ─────────────────────────────────────────────────────────────
  { id: 'sinceFor',      label: 'Since & For',                        icon: '⏳',   level: 'B1' },
  { id: 'usedTo',        label: 'Used to',                            icon: '🔙',   level: 'B1' },
  { id: 'verbsOfState',  label: 'Verbes + Gérondif / Infinitif',      icon: '🎯',   level: 'B1' },
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


  {
    id: 'mg_adjectives',
    grammarRef: 'adjectives',
    title: 'Adjectives',
    titleMg: 'Teny Mpamaritra',
    icon: '✨',
    level: 'A1–A2',
    explanation: 'Ny teny mpamaritra (adjectives) dia mamaritra ny anarana. Amin\'ny teny anglisy, ny teny mpamaritra dia apetraka ALOHAN\'ny anarana (tsy toy ny teny frantsay). Ny teny malagasy kosa dia matetika mametraka ny mpamaritra AORIAN\'ny anarana.',
    rows: [
      {
        label: 'Toerana (Position)',
        structure: 'adjectif + nom',
        example_en: 'a beautiful house',
        example_mg: 'trano tsara',
        note: 'Anglisy: adjective ALOHAN\'ny noun | Malagasy: aorian\'ny noun matetika',
      },
      {
        label: 'Démonstratifs (Mampiseho)',
        structure: 'this/that (sg) | these/those (pl)',
        example_en: 'this book / those trees',
        example_mg: 'ity boky ity / ireny hazo ireny',
        note: 'this/these = akaiky | that/those = lavitra',
      },
      {
        label: 'Mifanohitra (Opposés)',
        structure: 'big ↔ small | happy ↔ sad',
        example_en: 'big house / small house',
        example_mg: 'trano lehibe / trano kely',
        note: 'Ny adjectives dia tsy miova ho an\'ny pluriel amin\'ny anglisy',
      },
    ],
    tipsMg: [
      'Amin\'ny anglisy ny mpamaritra dia tsy manova endrika (tsy misy -s)',
      'Filaharan\'ny mpamaritra maro: hevitra → haben\'ny → taona → endrika → loko → niaviana → zavatra',
      'Aorian\'ny "be": She is happy (adjective aorian\'ny be)',
    ],
  },

  {
    id: 'mg_sinceFor',
    grammarRef: 'sinceFor',
    title: 'Since & For',
    titleMg: 'Since sy For',
    icon: '⏳',
    level: 'B1',
    explanation: 'Ny "since" sy "for" dia ampiasaina miaraka amin\'ny Present Perfect na Past Perfect hanazavana ny faharetan\'ny zavatra. "Since" = nanomboka rahoviana | "For" = nandritra ny fotoana maharitra.',
    rows: [
      {
        label: 'Since (nanomboka)',
        structure: 'since + fotoana manokana',
        example_en: 'I have lived here since 2015.',
        example_mg: 'Monina eto aho nanomboka ny 2015.',
        note: 'since + taona, andro, fotoana manokana',
      },
      {
        label: 'For (nandritra)',
        structure: 'for + faharetan\'ny fotoana',
        example_en: 'I have lived here for five years.',
        example_mg: 'Monina eto aho nandritra ny dimy taona.',
        note: 'for + isa + fotoana (hours, days, years)',
      },
      {
        label: 'Fanontaniana (Question)',
        structure: 'How long have you...?',
        example_en: 'How long have you studied English?',
        example_mg: 'Hatriniry no nianarànao anglisy?',
        note: '"How long" + Present Perfect → valiny: for / since',
      },
    ],
    tipsMg: [
      'Since = nanomboka fotoana iray manokana (2015, Monday, last year)',
      'For = nandritra ny fotoana iray (5 years, two months, a long time)',
      'Tsy maintsy ampiasaina miaraka amin\'ny Present Perfect na Past Perfect',
    ],
  },

  {
    id: 'mg_usedTo',
    grammarRef: 'usedTo',
    title: 'Used to',
    titleMg: 'Used to — Fomba Lasa',
    icon: '🔙',
    level: 'B1',
    explanation: 'Ny "used to" dia ampiasaina hilazana ny fomba na toe-javatra tamin\'ny lasa izay tsy misy intsony ankehitriny. Ny malagasy dia mahazo mampiasa "fahiny" na "taloha" hilazana izany.',
    rows: [
      {
        label: 'Fomba fanaovana (+)',
        structure: 'sujet + used to + verbe',
        example_en: 'I used to walk to school.',
        example_mg: 'Nandeha tongotra ho any an-tsekoly aho fahiny.',
        note: 'Fomba na toe-javatra tamin\'ny lasa, tsy misy intsony',
      },
      {
        label: 'Fandavana (−)',
        structure: 'sujet + didn\'t use to + verbe',
        example_en: 'I didn\'t use to like vegetables.',
        example_mg: 'Tsy tia legioma aho fahiny.',
        note: 'didn\'t use to (tsy "used")',
      },
      {
        label: 'Fanontaniana (?)',
        structure: 'Did + sujet + use to + verbe?',
        example_en: 'Did you use to play football?',
        example_mg: 'Nilalao baolina-kitra ve ianao fahiny?',
        note: 'use to (tsy "used") aorian\'ny "did"',
      },
    ],
    tipsMg: [
      'Used to ≠ be used to: "I used to swim" (lasa) ≠ "I am used to swimming" (zatra)',
      'Would koa azo ampiasaina ho an\'ny fomba lasa, fa tsy ho an\'ny toe-javatra (state)',
      'Tsy misy "use to" amin\'ny ankehitriny — ampiasao "usually"',
    ],
  },

  {
    id: 'mg_verbsOfState',
    grammarRef: 'verbsOfState',
    title: 'Verbes + -ing / Infinitif',
    titleMg: 'Matoanteny + -ing na Infinitif',
    icon: '🎯',
    level: 'B1',
    explanation: 'Ny matoanteny sasany dia mahazo miaraka amin\'ny gérondif (-ing) ihany, ny hafa dia miaraka amin\'ny infinitif (to + verbe), ary ny hafa kosa dia miaraka amin\'ny roa. Ilaina ny mahafantatra izay manaraka izay.',
    rows: [
      {
        label: '-ing ihany',
        structure: 'enjoy/mind/avoid/finish + -ing',
        example_en: 'I enjoy reading. / She avoids driving.',
        example_mg: 'Tia mamaky aho. / Menatra mitaingina fiara izy.',
        note: 'enjoy, mind, avoid, finish, keep, consider → -ing ihany',
      },
      {
        label: 'Infinitif ihany',
        structure: 'want/need/decide/hope + to + verbe',
        example_en: 'She wants to leave. / He decided to stay.',
        example_mg: 'Te-handeha izy. / Nifidy ny hitoetra izy.',
        note: 'want, need, decide, hope, plan, promise → infinitif ihany',
      },
      {
        label: 'Roa azo (sens mitovy)',
        structure: 'like/love/hate/prefer + -ing NA infinitif',
        example_en: 'I like swimming. = I like to swim.',
        example_mg: 'Tia milomano aho.',
        note: 'like, love, hate, prefer → roa azo, sens mitovy',
      },
    ],
    tipsMg: [
      'Stop + -ing = mitsahatra: He stopped smoking (najanony ny fisotro sigara)',
      'Stop + infinitif = mijanona mba hanao: He stopped to smoke (nijanonan\'izy mba hisotro sigara)',
      'Remember + -ing = mahatsiaro nataony | Remember + infinitif = mahatsiaro hataony',
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
