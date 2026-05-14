/**
 * Textes A1 ultra-simples pour la section "Lecture MG"
 * Chaque texte inclut :
 *  - questions: 5 MCQ sur le contenu
 *  - sentences: traduction mot-à-mot + traduction libre en malgasy
 *
 * [À VÉRIFIER] = traduction malgasy incertaine
 */
export const LECTURE_TEXTS = [

  {
    id: 'lec_01',
    title: 'Presenting Myself',
    icon: '🎤',
    topic: 'presentations',
    text: 'My name is Rina. I am ten years old. I live in Antananarivo. I go to school every day. I like football. My family has four people.',
    questions: [
      { id: 'q1', question: 'What is her name?',                  options: ['Lova', 'Rina', 'Haja', 'Sara'],              correct: 1 },
      { id: 'q2', question: 'How old is she?',                    options: ['Eight', 'Nine', 'Ten', 'Twelve'],             correct: 2 },
      { id: 'q3', question: 'Where does she live?',               options: ['Toamasina', 'Mahajanga', 'Antananarivo', 'Fianarantsoa'], correct: 2 },
      { id: 'q4', question: 'What does she like?',                options: ['Music', 'Football', 'Reading', 'Dancing'],    correct: 1 },
      { id: 'q5', question: 'How many people are in her family?', options: ['Two', 'Three', 'Four', 'Five'],               correct: 2 },
    ],
    sentences: [
      {
        en: 'My name is Rina.',
        words: [
          { en: 'My',   mg: 'Ny' },
          { en: 'name', mg: 'anarako' },
          { en: 'is',   mg: 'dia' },
          { en: 'Rina', mg: 'Rina' },
        ],
        mgFree: 'Ny anarako dia Rina.',
      },
      {
        en: 'I am ten years old.',
        words: [
          { en: 'I',    mg: 'Aho' },
          { en: 'am',   mg: 'dia' },
          { en: 'ten',  mg: 'folo' },
          { en: 'years old', mg: 'taona' },
        ],
        mgFree: 'Folo taona aho.',
      },
      {
        en: 'I live in Antananarivo.',
        words: [
          { en: 'I',             mg: 'Aho' },
          { en: 'live',          mg: 'monina' },
          { en: 'in',            mg: 'any' },
          { en: 'Antananarivo',  mg: 'Antananarivo' },
        ],
        mgFree: 'Monina any Antananarivo aho.',
      },
      {
        en: 'I go to school every day.',
        words: [
          { en: 'I',       mg: 'Aho' },
          { en: 'go',      mg: 'mandeha' },
          { en: 'to school', mg: "any an-tsekoly" },
          { en: 'every',   mg: "isan'" },
          { en: 'day',     mg: 'andro' },
        ],
        mgFree: "Mandeha any an-tsekoly aho isan'andro.",
      },
      {
        en: 'I like football.',
        words: [
          { en: 'I',        mg: 'Aho' },
          { en: 'like',     mg: 'tia' },
          { en: 'football', mg: 'baolina kitra [À VÉRIFIER]' },
        ],
        mgFree: 'Tia baolina kitra aho.',
      },
      {
        en: 'My family has four people.',
        words: [
          { en: 'My',     mg: 'Ny' },
          { en: 'family', mg: 'fianakaviana' },
          { en: 'has',    mg: 'manana' },
          { en: 'four',   mg: 'efatra' },
          { en: 'people', mg: 'olona' },
        ],
        mgFree: 'Manana olona efatra ny fianakaviana.',
      },
    ],
  },

  {
    id: 'lec_02',
    title: 'My School',
    icon: '🏫',
    topic: 'school',
    text: 'This is my school. It is big and clean. I have six lessons every day. My teacher is very kind. I eat lunch at school. School ends at four o\'clock.',
    questions: [
      { id: 'q1', question: 'What is the text about?',          options: ['A house', 'A school', 'A market', 'A family'],              correct: 1 },
      { id: 'q2', question: 'How many lessons does she have?',  options: ['Four', 'Five', 'Six', 'Seven'],                             correct: 2 },
      { id: 'q3', question: 'What is the teacher like?',        options: ['Strict', 'Tired', 'Kind', 'Funny'],                         correct: 2 },
      { id: 'q4', question: 'Where does she eat lunch?',        options: ['At home', 'At a café', 'At school', 'At a friend\'s'],      correct: 2 },
      { id: 'q5', question: 'When does school end?',            options: ['Two o\'clock', 'Three o\'clock', 'Four o\'clock', 'Five o\'clock'], correct: 2 },
    ],
    sentences: [
      {
        en: 'This is my school.',
        words: [
          { en: 'This',   mg: 'Ity' },
          { en: 'is',     mg: 'no' },
          { en: 'my',     mg: 'ny' },
          { en: 'school', mg: 'sekoliko' },
        ],
        mgFree: 'Ity no sekoliko.',
      },
      {
        en: 'It is big and clean.',
        words: [
          { en: 'It',    mg: 'Izy' },
          { en: 'is',    mg: 'dia' },
          { en: 'big',   mg: 'lehibe' },
          { en: 'and',   mg: 'ary' },
          { en: 'clean', mg: 'madio' },
        ],
        mgFree: 'Lehibe izy ary madio.',
      },
      {
        en: 'I have six lessons every day.',
        words: [
          { en: 'I',       mg: 'Aho' },
          { en: 'have',    mg: 'manana' },
          { en: 'six',     mg: 'enina' },
          { en: 'lessons', mg: 'lesona' },
          { en: 'every',   mg: "isan'" },
          { en: 'day',     mg: 'andro' },
        ],
        mgFree: "Manana lesona enina aho isan'andro.",
      },
      {
        en: 'My teacher is very kind.',
        words: [
          { en: 'My',     mg: 'Ny' },
          { en: 'teacher',mg: 'mpampianatra' },
          { en: 'is',     mg: 'dia' },
          { en: 'very',   mg: 'be indrindra' },
          { en: 'kind',   mg: 'tsara fanahy' },
        ],
        mgFree: 'Tsara fanahy be ny mpampianatra.',
      },
      {
        en: 'I eat lunch at school.',
        words: [
          { en: 'I',      mg: 'Aho' },
          { en: 'eat',    mg: 'mihinana' },
          { en: 'lunch',  mg: 'sakafo antoandro' },
          { en: 'at',     mg: 'any' },
          { en: 'school', mg: 'an-tsekoly' },
        ],
        mgFree: 'Mihinana sakafo antoandro any an-tsekoly aho.',
      },
      {
        en: "School ends at four o'clock.",
        words: [
          { en: 'School', mg: 'Ny sekoly' },
          { en: 'ends',   mg: 'mifarana' },
          { en: 'at',     mg: "amin'ny" },
          { en: 'four',   mg: 'efatra' },
          { en: "o'clock",mg: 'adiny [À VÉRIFIER]' },
        ],
        mgFree: "Mifarana amin'ny efatra adiny ny sekoly.",
      },
    ],
  },

  {
    id: 'lec_03',
    title: 'My Family',
    icon: '👨‍👩‍👧',
    topic: 'family',
    text: 'I have a big family. My mother is a nurse. My father is a teacher. I have one sister and two brothers. My grandmother cooks every day. I love my family.',
    questions: [
      { id: 'q1', question: "What is the mother's job?",     options: ['Teacher', 'Nurse', 'Doctor', 'Farmer'],            correct: 1 },
      { id: 'q2', question: "What is the father's job?",     options: ['Nurse', 'Doctor', 'Teacher', 'Driver'],            correct: 2 },
      { id: 'q3', question: 'How many brothers does she have?', options: ['One', 'Two', 'Three', 'Four'],                  correct: 1 },
      { id: 'q4', question: 'Who cooks every day?',          options: ['Mother', 'Father', 'Sister', 'Grandmother'],       correct: 3 },
      { id: 'q5', question: 'How many siblings does she have in total?', options: ['One', 'Two', 'Three', 'Four'],         correct: 2 },
    ],
    sentences: [
      {
        en: 'I have a big family.',
        words: [
          { en: 'I',      mg: 'Aho' },
          { en: 'have',   mg: 'manana' },
          { en: 'a big',  mg: 'lehibe' },
          { en: 'family', mg: 'fianakaviana' },
        ],
        mgFree: 'Manana fianakaviana lehibe aho.',
      },
      {
        en: 'My mother is a nurse.',
        words: [
          { en: 'My',    mg: 'Ny' },
          { en: 'mother',mg: 'reniko' },
          { en: 'is',    mg: 'dia' },
          { en: 'a nurse',mg: 'mpitsabo' },
        ],
        mgFree: 'Mpitsabo ny reniko.',
      },
      {
        en: 'My father is a teacher.',
        words: [
          { en: 'My',     mg: 'Ny' },
          { en: 'father', mg: 'raiko' },
          { en: 'is',     mg: 'dia' },
          { en: 'a teacher', mg: 'mpampianatra' },
        ],
        mgFree: 'Mpampianatra ny raiko.',
      },
      {
        en: 'I have one sister and two brothers.',
        words: [
          { en: 'I',       mg: 'Aho' },
          { en: 'have',    mg: 'manana' },
          { en: 'one',     mg: 'iray' },
          { en: 'sister',  mg: 'anabavy' },
          { en: 'and',     mg: 'sy' },
          { en: 'two',     mg: 'roa' },
          { en: 'brothers',mg: 'rahalahy' },
        ],
        mgFree: 'Manana anabavy iray sy rahalahy roa aho.',
      },
      {
        en: 'My grandmother cooks every day.',
        words: [
          { en: 'My',         mg: 'Ny' },
          { en: 'grandmother',mg: 'reninbeniko [À VÉRIFIER]' },
          { en: 'cooks',      mg: 'mahandro [À VÉRIFIER]' },
          { en: 'every',      mg: "isan'" },
          { en: 'day',        mg: 'andro' },
        ],
        mgFree: "Mahandro isan'andro ny reninbeniko.",
      },
      {
        en: 'I love my family.',
        words: [
          { en: 'I',      mg: 'Aho' },
          { en: 'love',   mg: 'tia' },
          { en: 'my',     mg: 'ny' },
          { en: 'family', mg: 'fianakavianako' },
        ],
        mgFree: 'Tia ny fianakavianako aho.',
      },
    ],
  },

  {
    id: 'lec_04',
    title: 'My Pets',
    icon: '🐾',
    topic: 'animals',
    text: 'I have two animals. My cat is white and small. My dog is brown and big. The cat is called Mimi. The dog is called Rex. They are my best friends.',
    questions: [
      { id: 'q1', question: 'How many animals does she have?', options: ['One', 'Two', 'Three', 'Four'],            correct: 1 },
      { id: 'q2', question: 'What colour is the cat?',         options: ['Brown', 'Black', 'White', 'Orange'],      correct: 2 },
      { id: 'q3', question: 'What colour is the dog?',         options: ['White', 'Grey', 'Brown', 'Black'],        correct: 2 },
      { id: 'q4', question: 'What is the cat called?',         options: ['Rex', 'Mimi', 'Nala', 'Leo'],             correct: 1 },
      { id: 'q5', question: 'What is the dog called?',         options: ['Mimi', 'Tom', 'Rex', 'Max'],              correct: 2 },
    ],
    sentences: [
      {
        en: 'I have two animals.',
        words: [
          { en: 'I',       mg: 'Aho' },
          { en: 'have',    mg: 'manana' },
          { en: 'two',     mg: 'roa' },
          { en: 'animals', mg: 'biby' },
        ],
        mgFree: 'Manana biby roa aho.',
      },
      {
        en: 'My cat is white and small.',
        words: [
          { en: 'My',   mg: 'Ny' },
          { en: 'cat',  mg: 'sakanako' },
          { en: 'is',   mg: 'dia' },
          { en: 'white',mg: 'fotsy' },
          { en: 'and',  mg: 'sy' },
          { en: 'small',mg: 'kely' },
        ],
        mgFree: 'Fotsy sy kely ny sakanako.',
      },
      {
        en: 'My dog is brown and big.',
        words: [
          { en: 'My',   mg: 'Ny' },
          { en: 'dog',  mg: 'alikanako' },
          { en: 'is',   mg: 'dia' },
          { en: 'brown',mg: 'mena-volotany [À VÉRIFIER]' },
          { en: 'and',  mg: 'sy' },
          { en: 'big',  mg: 'lehibe' },
        ],
        mgFree: 'Mena-volotany sy lehibe ny alikanako.',
      },
      {
        en: 'The cat is called Mimi.',
        words: [
          { en: 'The',        mg: 'Ny' },
          { en: 'cat',        mg: 'saka' },
          { en: 'is called',  mg: 'atao hoe' },
          { en: 'Mimi',       mg: 'Mimi' },
        ],
        mgFree: 'Mimi ny anaranany.',
      },
      {
        en: 'The dog is called Rex.',
        words: [
          { en: 'The',       mg: 'Ny' },
          { en: 'dog',       mg: 'alika' },
          { en: 'is called', mg: 'atao hoe' },
          { en: 'Rex',       mg: 'Rex' },
        ],
        mgFree: 'Rex ny anaranany.',
      },
      {
        en: 'They are my best friends.',
        words: [
          { en: 'They',    mg: 'Izy ireo' },
          { en: 'are',     mg: 'no' },
          { en: 'my best', mg: 'tsara indrindra' },
          { en: 'friends', mg: 'sakaizako [À VÉRIFIER]' },
        ],
        mgFree: 'Izy ireo no sakaizako tsara indrindra.',
      },
    ],
  },

  {
    id: 'lec_05',
    title: 'My Morning Routine',
    icon: '🌅',
    topic: 'routine',
    text: "Every morning, I wake up at six. I take a shower. I have breakfast with my family. I go to school at half past seven. I arrive at eight o'clock. The first lesson starts at eight.",
    questions: [
      { id: 'q1', question: 'What time does she wake up?',          options: ["Five o'clock", "Six o'clock", "Seven o'clock", "Half past six"], correct: 1 },
      { id: 'q2', question: 'What does she do after waking up?',    options: ['Has breakfast', 'Takes a shower', 'Goes to school', 'Gets dressed'], correct: 1 },
      { id: 'q3', question: 'What time does she go to school?',     options: ['Six o\'clock', 'Seven o\'clock', 'Half past seven', 'Eight o\'clock'], correct: 2 },
      { id: 'q4', question: "What time does she arrive at school?", options: ['Half past seven', "Eight o'clock", "Half past eight", "Nine o'clock"], correct: 1 },
      { id: 'q5', question: 'Who does she have breakfast with?',    options: ['Alone', 'With friends', 'With her family', 'At school'],             correct: 2 },
    ],
    sentences: [
      {
        en: 'Every morning, I wake up at six.',
        words: [
          { en: 'Every morning', mg: "Isan'andro maraina" },
          { en: 'I',             mg: 'aho' },
          { en: 'wake up',       mg: 'mifohaza' },
          { en: 'at six',        mg: "amin'ny enina" },
        ],
        mgFree: "Isan'andro maraina, mifohaza amin'ny enina adiny aho.",
      },
      {
        en: 'I take a shower.',
        words: [
          { en: 'I',        mg: 'Aho' },
          { en: 'take',     mg: 'mandro' },
          { en: 'a shower', mg: '—' },
        ],
        mgFree: 'Mandro aho.',
      },
      {
        en: 'I have breakfast with my family.',
        words: [
          { en: 'I',             mg: 'Aho' },
          { en: 'have breakfast',mg: 'misakafo maraina' },
          { en: 'with',          mg: "niaraka amin'" },
          { en: 'my family',     mg: 'ny fianakavianako' },
        ],
        mgFree: "Misakafo maraina niaraka amin'ny fianakavianako aho.",
      },
      {
        en: 'I go to school at half past seven.',
        words: [
          { en: 'I',                  mg: 'Aho' },
          { en: 'go',                 mg: 'mandeha' },
          { en: 'to school',          mg: 'any an-tsekoly' },
          { en: 'at half past seven', mg: "amin'ny fito sy sasany [À VÉRIFIER]" },
        ],
        mgFree: "Mandeha any an-tsekoly aho amin'ny fito sy sasany.",
      },
      {
        en: "I arrive at eight o'clock.",
        words: [
          { en: 'I',       mg: 'Aho' },
          { en: 'arrive',  mg: 'tonga' },
          { en: 'at eight',mg: "amin'ny valo" },
          { en: "o'clock", mg: 'adiny [À VÉRIFIER]' },
        ],
        mgFree: "Tonga amin'ny valo adiny aho.",
      },
      {
        en: 'The first lesson starts at eight.',
        words: [
          { en: 'The first', mg: 'Ny voalohany' },
          { en: 'lesson',    mg: 'lesona' },
          { en: 'starts',    mg: 'manomboka' },
          { en: 'at eight',  mg: "amin'ny valo" },
        ],
        mgFree: "Manomboka amin'ny valo adiny ny lesona voalohany.",
      },
    ],
  },

];
