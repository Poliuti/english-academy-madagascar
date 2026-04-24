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
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : always, usually, often, sometimes, never',
      '🔑 Expressions de temps : every day/week, on Mondays, in the morning',
      '⚠️ he/she/it → toujours avec -s : she goes, he has, it rains',
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
          { en: 'run → runn<strong>ing</strong> (double la consonne)', fr: 'courir' },
          { en: 'come → com<strong>ing</strong> (enlève le -e final)', fr: 'venir' },
          { en: 'play → play<strong>ing</strong> (normal)', fr: 'jouer' },
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : now, right now, at the moment, look!, listen!',
      '⚠️ Ne pas utiliser avec : know, like, love, want, understand (verbes d\'état)',
      '💡 I am → I\'m | He is → He\'s | They are → They\'re',
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
        title: '⚡ Verbes irréguliers',
        content: 'Certains verbes changent complètement de forme !',
        examples: [
          { en: 'go → <strong>went</strong>', fr: 'aller → alla/allé' },
          { en: 'have → <strong>had</strong>', fr: 'avoir → eut/eu' },
          { en: 'see → <strong>saw</strong>', fr: 'voir → vit/vu' },
          { en: 'come → <strong>came</strong>', fr: 'venir → vint/venu' },
          { en: 'buy → <strong>bought</strong>', fr: 'acheter → acheta/acheté' },
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
      '🔑 Mots-clés : yesterday, last night/week/year, ago, in 2005',
      '⚠️ Après didn\'t et did, TOUJOURS l\'infinitif : didn\'t go (pas didn\'t went)',
      '📝 Liste à apprendre : go/went, have/had, come/came, see/saw, eat/ate',
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
        content: '"Be going to" exprime un plan déjà décidé, "will" une décision immédiate',
        examples: [
          { en: 'I\'m going to study medicine. (plan)', fr: 'Je vais étudier la médecine. (décision prise)' },
          { en: 'I\'ll help you carry that! (décision immédiate)', fr: 'Je vais t\'aider à porter ça !' },
        ]
      },
    ],
    tips: [
      '🔑 Mots-clés : tomorrow, next week/year, in the future, one day, soon',
      '⚠️ Après "will", TOUJOURS l\'infinitif : will go, will be, will have',
      '💡 will = \'ll | will not = won\'t (contraction)',
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
        { en: 'have lunch', fr: 'déjeuner', mg: 'misakafo amin\'ny mitataovovonana', example: 'We have lunch at noon.' },
        { en: 'come home', fr: 'rentrer à la maison', mg: 'miverina an-trano', example: 'I come home at 5 pm.' },
        { en: 'have dinner', fr: 'dîner', mg: 'misakafo hariva', example: 'My family has dinner together.' },
        { en: 'go to bed', fr: 'se coucher', mg: 'mandriadrià', example: 'I go to bed at 10 pm.' },
        { en: 'brush teeth', fr: 'se brosser les dents', mg: 'mitsedry nify', example: 'Brush your teeth twice a day!' },
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
        { en: 'cousin', fr: 'cousin(e)', mg: 'zana-dray / zana-dreny', example: 'I play with my cousins on weekends.' },
        { en: 'children', fr: 'enfants', mg: 'zanaka', example: 'They have four children.' },
      ]
    },
    body: {
      title: 'Vocabulaire : Le Corps',
      words: [
        { en: 'head', fr: 'tête', mg: 'loha', example: 'I have a headache.' },
        { en: 'eye(s)', fr: 'œil / yeux', mg: 'maso', example: 'She has brown eyes.' },
        { en: 'ear(s)', fr: 'oreille(s)', mg: 'sofina', example: 'Listen with your ears!' },
        { en: 'nose', fr: 'nez', mg: 'orona', example: 'I have a cold and my nose hurts.' },
        { en: 'mouth', fr: 'bouche', mg: 'vava', example: 'Brush your teeth and wash your mouth.' },
        { en: 'hand(s)', fr: 'main(s)', mg: 'tanana', example: 'Wash your hands before eating.' },
        { en: 'foot / feet', fr: 'pied(s)', mg: 'tongotra', example: 'My feet are tired after walking.' },
        { en: 'arm', fr: 'bras', mg: 'sandry', example: 'He broke his arm playing football.' },
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
  { id: 'presentSimple', label: 'Present Simple', icon: '📖', level: 'A1–A2' },
  { id: 'presentContinuous', label: 'Present Continuous', icon: '🔄', level: 'A2' },
  { id: 'pastSimple', label: 'Past Simple', icon: '⏮️', level: 'A2–B1' },
  { id: 'futureSimple', label: 'Future Simple', icon: '🚀', level: 'A2–B1' },
  { id: 'vocabulary', label: 'Vocabulaire', icon: '📚', level: 'A1–B1', isVocab: true },
];

export const vocabTopics = [
  { id: 'routine', label: 'Routine Quotidienne', icon: '🌅' },
  { id: 'family', label: 'La Famille', icon: '👨‍👩‍👧' },
  { id: 'body', label: 'Le Corps', icon: '💪' },
  { id: 'time', label: 'L\'Heure et le Temps', icon: '⏰' },
];
