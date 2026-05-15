/**
 * Textes A1 ultra-simples pour la section "Lecture MG"
 * Chaque texte inclut :
 *  - questions: 5 MCQ sur le contenu
 *  - sentences: traduction mot-à-mot + traduction libre en malgasy
 *

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
          { en: 'football', mg: 'baolina kitra' },
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
          { en: "o'clock", mg: 'adiny' },
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
          { en: 'grandmother', mg: 'renibe' },
          { en: 'cooks', mg: 'mahandro' },
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
          { en: 'brown', mg: 'volon-tany' },
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
          { en: 'friends', mg: 'sakaiza' },
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
          { en: 'at half past seven', mg: "amin'ny fito sy sasany" },
        ],
        mgFree: "Mandeha any an-tsekoly aho amin'ny fito sy sasany.",
      },
      {
        en: "I arrive at eight o'clock.",
        words: [
          { en: 'I',       mg: 'Aho' },
          { en: 'arrive',  mg: 'tonga' },
          { en: 'at eight',mg: "amin'ny valo" },
          { en: "o'clock", mg: 'adiny' },
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


  {
    id: 'lec_06',
    title: 'At the Market',
    icon: '🛒',
    topic: 'shopping',
    text: "Every Saturday, my mother goes to the market. She buys vegetables, fish and fruit. The market is big and colourful. I help her carry the bags. We buy rice and oil too. The market closes at noon.",
    questions: [
      { id: 'q1', question: 'When does her mother go to the market?', options: ['Monday', 'Wednesday', 'Saturday', 'Sunday'], correct: 2 },
      { id: 'q2', question: 'What does her mother NOT buy?', options: ['Vegetables', 'Fish', 'Bread', 'Fruit'], correct: 2 },
      { id: 'q3', question: 'What does the market look like?', options: ['Small and quiet', 'Big and colourful', 'Dark and dirty', 'Empty and cold'], correct: 1 },
      { id: 'q4', question: 'What does the narrator do to help?', options: ['Pays the money', 'Carries the bags', 'Chooses the food', 'Talks to sellers'], correct: 1 },
      { id: 'q5', question: 'When does the market close?', options: ['At ten', 'At eleven', 'At noon', 'At two'], correct: 2 },
    ],
    sentences: [
      {
        en: 'Every Saturday, my mother goes to the market.',
        words: [
          { en: 'Every Saturday', mg: 'Asabotsy tsirairay' },
          { en: 'my', mg: 'ny' },
          { en: 'mother', mg: 'reniko' },
          { en: 'goes', mg: 'mandeha' },
          { en: 'to the market', mg: 'any am-tsena' },
        ],
        mgFree: "Isan'ny Asabotsy, mandeha any am-tsena ny reniko.",
      },
      {
        en: 'She buys vegetables, fish and fruit.',
        words: [
          { en: 'She', mg: 'Izy' },
          { en: 'buys', mg: 'mividy' },
          { en: 'vegetables', mg: 'anana' },
          { en: 'fish', mg: 'trondro' },
          { en: 'and', mg: 'sy' },
          { en: 'fruit', mg: 'voankazo' },
        ],
        mgFree: 'Mividy anana, trondro ary voankazo izy.',
      },
      {
        en: 'The market is big and colourful.',
        words: [
          { en: 'The market', mg: 'Ny tsena' },
          { en: 'is', mg: 'dia' },
          { en: 'big', mg: 'lehibe' },
          { en: 'and', mg: 'ary' },
          { en: 'colourful', mg: 'maro loko' },
        ],
        mgFree: 'Lehibe sy maro loko ny tsena.',
      },
      {
        en: 'I help her carry the bags.',
        words: [
          { en: 'I', mg: 'Aho' },
          { en: 'help', mg: 'manampy' },
          { en: 'her', mg: 'azy' },
          { en: 'carry', mg: 'mitondra' },
          { en: 'the bags', mg: 'ny kitapo' },
        ],
        mgFree: 'Manampy azy mitondra ny kitapo aho.',
      },
      {
        en: 'We buy rice and oil too.',
        words: [
          { en: 'We', mg: 'Izahay' },
          { en: 'buy', mg: 'mividy' },
          { en: 'rice', mg: 'vary' },
          { en: 'and', mg: 'sy' },
          { en: 'oil', mg: 'menaka' },
          { en: 'too', mg: 'koa' },
        ],
        mgFree: 'Mividy vary sy menaka koa izahay.',
      },
      {
        en: 'The market closes at noon.',
        words: [
          { en: 'The market', mg: 'Ny tsena' },
          { en: 'closes', mg: 'mikatona' },
          { en: 'at noon', mg: "amin'ny antoandro" },
        ],
        mgFree: "Mikatona amin'ny antoandro ny tsena.",
      },
    ],
  },

  {
    id: 'lec_07',
    title: 'My Village',
    icon: '🏘️',
    topic: 'places',
    text: "I live in a small village near Fianarantsoa. There is one school and one church. My neighbours are very friendly. We have a small river behind our house. Children play there after school. I love my village.",
    questions: [
      { id: 'q1', question: 'Where is the village?', options: ['Near Antananarivo', 'Near Toamasina', 'Near Fianarantsoa', 'Near Mahajanga'], correct: 2 },
      { id: 'q2', question: 'How many schools are in the village?', options: ['None', 'One', 'Two', 'Three'], correct: 1 },
      { id: 'q3', question: 'What word describes the neighbours?', options: ['Strict', 'Friendly', 'Busy', 'Tired'], correct: 1 },
      { id: 'q4', question: 'Where is the river?', options: ['In front of the house', 'Next to the school', 'Behind the house', 'Far from the village'], correct: 2 },
      { id: 'q5', question: 'When do children play by the river?', options: ['Before school', 'During lunch', 'After school', 'In the morning'], correct: 2 },
    ],
    sentences: [
      {
        en: 'I live in a small village near Fianarantsoa.',
        words: [
          { en: 'I', mg: 'Aho' },
          { en: 'live', mg: 'monina' },
          { en: 'in a small', mg: 'tanana kely iray' },
          { en: 'village', mg: 'tanana' },
          { en: 'near', mg: "akaikin'" },
          { en: 'Fianarantsoa', mg: 'Fianarantsoa' },
        ],
        mgFree: "Monina any tanana kely akaikin'i Fianarantsoa aho.",
      },
      {
        en: 'There is one school and one church.',
        words: [
          { en: 'There is', mg: 'Misy' },
          { en: 'one school', mg: 'sekoly iray' },
          { en: 'and', mg: 'sy' },
          { en: 'one church', mg: 'fiangonana iray' },
        ],
        mgFree: 'Misy sekoly iray sy fiangonana iray.',
      },
      {
        en: 'My neighbours are very friendly.',
        words: [
          { en: 'My neighbours', mg: 'Ny mpifanila' },
          { en: 'are', mg: 'dia' },
          { en: 'very friendly', mg: 'tsara fanahy' },
        ],
        mgFree: 'Tsara fanahy ny tandriny.',
      },
      {
        en: 'We have a small river behind our house.',
        words: [
          { en: 'We have', mg: 'Misy' },
          { en: 'a small river', mg: 'renirano kely' },
          { en: 'behind', mg: "ao aorianan'" },
          { en: 'our house', mg: 'ny tranondray' },
        ],
        mgFree: "Misy renirano kely ao aorianan'ny tranondray.",
      },
      {
        en: 'Children play there after school.',
        words: [
          { en: 'Children', mg: 'Ny ankizy' },
          { en: 'play', mg: 'milalao' },
          { en: 'there', mg: 'any' },
          { en: 'after school', mg: "aorian'ny sekoly" },
        ],
        mgFree: "Milalao any ny ankizy aorian'ny sekoly.",
      },
      {
        en: 'I love my village.',
        words: [
          { en: 'I', mg: 'Aho' },
          { en: 'love', mg: 'tia' },
          { en: 'my village', mg: 'ny tanânako' },
        ],
        mgFree: 'Tia ny tanânako aho.',
      },
    ],
  },

  {
    id: 'lec_08',
    title: 'The Weather Today',
    icon: '☀️',
    topic: 'weather',
    text: "Today the weather is sunny and warm. The sky is blue and there are no clouds. The temperature is twenty-five degrees. We go outside to play in the garden. In the evening, it gets cooler. I love sunny days.",
    questions: [
      { id: 'q1', question: 'What is the weather like today?', options: ['Rainy and cold', 'Cloudy and windy', 'Sunny and warm', 'Foggy and grey'], correct: 2 },
      { id: 'q2', question: 'What colour is the sky?', options: ['Grey', 'White', 'Blue', 'Orange'], correct: 2 },
      { id: 'q3', question: 'What is the temperature?', options: ['Fifteen degrees', 'Twenty degrees', 'Twenty-five degrees', 'Thirty degrees'], correct: 2 },
      { id: 'q4', question: 'Where do they go to play?', options: ['At school', 'At the market', 'In the garden', 'In the park'], correct: 2 },
      { id: 'q5', question: 'When does it get cooler?', options: ['In the morning', 'At midday', 'In the afternoon', 'In the evening'], correct: 3 },
    ],
    sentences: [
      {
        en: 'Today the weather is sunny and warm.',
        words: [
          { en: 'Today', mg: 'Androany' },
          { en: 'the weather', mg: 'ny toetrandro' },
          { en: 'is', mg: 'dia' },
          { en: 'sunny', mg: 'masoandro be' },
          { en: 'and warm', mg: 'ary mafana kely' },
        ],
        mgFree: 'Androany dia masoandro be sy mafana kely ny toetrandro.',
      },
      {
        en: 'The sky is blue and there are no clouds.',
        words: [
          { en: 'The sky', mg: 'Ny lanitra' },
          { en: 'is blue', mg: 'manga' },
          { en: 'and', mg: 'ary' },
          { en: 'there are no clouds', mg: 'tsy misy rahona' },
        ],
        mgFree: 'Manga ny lanitra ary tsy misy rahona.',
      },
      {
        en: 'The temperature is twenty-five degrees.',
        words: [
          { en: 'The temperature', mg: 'Ny hafanana' },
          { en: 'is', mg: 'dia' },
          { en: 'twenty-five degrees', mg: 'dimy amby roapolo degre' },
        ],
        mgFree: 'Dimy amby roapolo degre ny hafanana.',
      },
      {
        en: 'We go outside to play in the garden.',
        words: [
          { en: 'We', mg: 'Izahay' },
          { en: 'go outside', mg: 'mivoaka' },
          { en: 'to play', mg: 'milalao' },
          { en: 'in the garden', mg: "ao amin'ny zaridaina" },
        ],
        mgFree: 'Mivoaka milalao ao am-parihy izahay.',
      },
      {
        en: 'In the evening, it gets cooler.',
        words: [
          { en: 'In the evening', mg: "Amin'ny hariva" },
          { en: 'it gets cooler', mg: 'mangatsiaka' },
        ],
        mgFree: "Mangatsiaka amin'ny hariva.",
      },
      {
        en: 'I love sunny days.',
        words: [
          { en: 'I', mg: 'Aho' },
          { en: 'love', mg: 'tia' },
          { en: 'sunny days', mg: 'andro masoandro be' },
        ],
        mgFree: 'Tia andro masoandro be aho.',
      },
    ],
  },

  {
    id: 'lec_09',
    title: 'My Friend Haja',
    icon: '👫',
    topic: 'school',
    text: "My best friend is called Haja. He is eleven years old. He lives near my house. We go to school together every morning. Haja is very funny and kind. He loves drawing and reading books.",
    questions: [
      { id: 'q1', question: "What is the friend's name?", options: ['Lova', 'Rina', 'Haja', 'Tina'], correct: 2 },
      { id: 'q2', question: 'How old is Haja?', options: ['Ten', 'Eleven', 'Twelve', 'Thirteen'], correct: 1 },
      { id: 'q3', question: "Where does Haja live?", options: ['Far from the narrator', "Near the narrator's house", 'In a different village', 'Near school'], correct: 1 },
      { id: 'q4', question: 'How do they go to school?', options: ['By bus', 'Alone', 'Together', 'By bike'], correct: 2 },
      { id: 'q5', question: 'What does Haja love doing?', options: ['Football and swimming', 'Drawing and reading', 'Singing and dancing', 'Cooking and shopping'], correct: 1 },
    ],
    sentences: [
      {
        en: 'My best friend is called Haja.',
        words: [
          { en: 'My', mg: 'Ny' },
          { en: 'best friend', mg: 'sakaiza tsara indrindra' },
          { en: 'is called', mg: 'atao hoe' },
          { en: 'Haja', mg: 'Haja' },
        ],
        mgFree: "Haja no anaran'ny sakaizako tsara indrindra.",
      },
      {
        en: 'He is eleven years old.',
        words: [
          { en: 'He', mg: 'Izy' },
          { en: 'is', mg: 'dia' },
          { en: 'eleven years old', mg: 'iraika ambin\'ny folo taona' },
        ],
        mgFree: "Iraika ambin'ny folo taona izy.",
      },
      {
        en: 'He lives near my house.',
        words: [
          { en: 'He', mg: 'Izy' },
          { en: 'lives', mg: 'monina' },
          { en: 'near', mg: "akaikin'" },
          { en: 'my house', mg: 'ny tranoko' },
        ],
        mgFree: "Monina akaikin'ny tranoko izy.",
      },
      {
        en: 'We go to school together every morning.',
        words: [
          { en: 'We', mg: 'Izahay' },
          { en: 'go to school', mg: 'mankany an-tsekoly' },
          { en: 'together', mg: 'miaraka' },
          { en: 'every morning', mg: "isan'andro maraina" },
        ],
        mgFree: "Mankany an-tsekoly miaraka izahay isan'andro maraina.",
      },
      {
        en: 'Haja is very funny and kind.',
        words: [
          { en: 'Haja', mg: 'Haja' },
          { en: 'is', mg: 'dia' },
          { en: 'very funny', mg: 'mahafinaritra' },
          { en: 'and kind', mg: 'sy tsara fanahy' },
        ],
        mgFree: 'Mahafinaritra sy tsara fanahy Haja.',
      },
      {
        en: 'He loves drawing and reading books.',
        words: [
          { en: 'He', mg: 'Izy' },
          { en: 'loves', mg: 'tia' },
          { en: 'drawing', mg: 'manao sary' },
          { en: 'and', mg: 'sy' },
          { en: 'reading books', mg: 'mamaky boky' },
        ],
        mgFree: 'Tia manao sary sy mamaky boky izy.',
      },
    ],
  },

  {
    id: 'lec_10',
    title: 'Sports I Like',
    icon: '⚽',
    topic: 'sports',
    text: "I like playing sports. My favourite sport is football. I play with my friends every Saturday. We have a good team. I also like swimming in the river. Sport keeps me healthy and happy.",
    questions: [
      { id: 'q1', question: "What is the narrator's favourite sport?", options: ['Swimming', 'Basketball', 'Football', 'Running'], correct: 2 },
      { id: 'q2', question: 'When do they play football?', options: ['Every Sunday', 'Every Friday', 'Every Saturday', 'Every Monday'], correct: 2 },
      { id: 'q3', question: 'Who does the narrator play with?', options: ['Alone', 'With family', 'With friends', 'With teachers'], correct: 2 },
      { id: 'q4', question: 'Where does the narrator swim?', options: ['In the sea', 'In the pool', 'In the river', 'At school'], correct: 2 },
      { id: 'q5', question: 'How does sport make the narrator feel?', options: ['Tired and bored', 'Healthy and happy', 'Sad and lonely', 'Busy and stressed'], correct: 1 },
    ],
    sentences: [
      {
        en: 'I like playing sports.',
        words: [
          { en: 'I', mg: 'Aho' },
          { en: 'like', mg: 'tia' },
          { en: 'playing', mg: 'milalao' },
          { en: 'sports', mg: 'fanatanjahantena' },
        ],
        mgFree: 'Tia milalao fanatanjahantena aho.',
      },
      {
        en: 'My favourite sport is football.',
        words: [
          { en: 'My favourite sport', mg: 'Ny fanatanjahantena tiako indrindra' },
          { en: 'is', mg: 'dia' },
          { en: 'football', mg: 'baolina kitra' },
        ],
        mgFree: 'Baolina kitra no fanatanjahantena tiako indrindra.',
      },
      {
        en: 'I play with my friends every Saturday.',
        words: [
          { en: 'I play', mg: 'Milalao aho' },
          { en: 'with', mg: "niaraka amin'" },
          { en: 'my friends', mg: 'ny sakaizako' },
          { en: 'every Saturday', mg: "isan'ny Asabotsy" },
        ],
        mgFree: "Milalao aho niaraka amin'ny sakaizako isan'ny Asabotsy.",
      },
      {
        en: 'We have a good team.',
        words: [
          { en: 'We have', mg: 'Manana' },
          { en: 'a good', mg: 'tsara' },
          { en: 'team', mg: 'ekipa' },
        ],
        mgFree: 'Manana ekipa tsara izahay.',
      },
      {
        en: 'I also like swimming in the river.',
        words: [
          { en: 'I also like', mg: 'Tia koa aho' },
          { en: 'swimming', mg: 'milomano' },
          { en: 'in the river', mg: "ao amin'ny renirano" },
        ],
        mgFree: 'Tia koa milomano ao am-pony aho.',
      },
      {
        en: 'Sport keeps me healthy and happy.',
        words: [
          { en: 'Sport', mg: 'Ny fanatanjahantena' },
          { en: 'keeps me', mg: 'mahatazona ahy' },
          { en: 'healthy', mg: 'salama' },
          { en: 'and happy', mg: 'sy faly' },
        ],
        mgFree: 'Ny fanatanjahantena dia mahatazona ahy ho salama sy faly.',
      },
    ],
  },

];
