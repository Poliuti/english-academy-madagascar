// Test SYNONYMS logic exactly as in ExerciseView.js
const SYNONYMS = [
  ['grandmother', 'grandma'],
  ['grandma',     'grandmother'],
  ['grandfather', 'grandpa'],
  ['grandpa',     'grandfather'],
  ['father',      'dad'],
  ['dad',         'father'],
  ['mother',      'mum'],
  ['mum',         'mother'],
  ['kind',        'nice'],
  ['nice',        'kind'],
  ['wake up',           'get up'],
  ['get up',            'wake up'],
  ['dinner',            'supper'],
  ['supper',            'dinner'],
  ['go to bed',         'go to sleep'],
  ['go to sleep',       'go to bed'],
  ['goes to bed',       'goes to sleep'],
  ['goes to sleep',     'goes to bed'],
  ['went to bed',       'went to sleep'],
  ['went to sleep',     'went to bed'],
];

function norm(s) {
  return (s || '').toLowerCase().trim()
    .replace(/[.!?,;:]/g, '').replace(/\s+/g, ' ').trim();
}

function checkSynonym(userRaw, correctRaw) {
  const ans     = norm(userRaw);
  const correct = norm(correctRaw);
  if (ans === correct) return 'exact';
  for (const [a, b] of SYNONYMS) {
    const re = new RegExp('\\b' + a + '\\b', 'g');
    if (norm(correct.replace(re, b)) === ans) return `syn(${a}→${b})`;
    if (norm(ans.replace(re, b))     === correct) return `syn(${a}→${b})`;
  }
  return null;
}

const tests = [
  ['My grandma is seventy years old.',     'My grandmother is seventy years old.'],
  ['My grandpa told us funny stories.',    'My grandfather told us funny stories.'],
  ['My dad works in a school.',            'My father works in a school.'],
  ['The teacher is nice.',                 'The teacher is kind.'],
  ['get up',                               'wake up'],
  ['After supper we watch TV.',            'After dinner we watch TV.'],
  ['She goes to sleep at ten.',            'She goes to bed at ten.'],
  // Double substitution — should FAIL (needs acceptedAnswers)
  ['My dad is taller than my mum.',        'My father is taller than my mother.'],
];

let pass = 0, fail = 0;
for (const [user, correct] of tests) {
  const res = checkSynonym(user, correct);
  const ok = res !== null;
  if (ok) pass++; else fail++;
  console.log(`${ok ? '✅' : '❌'} ${res || 'NO MATCH'}  "${user.slice(0, 50)}"`);
}
console.log(`\n${pass} pass / ${fail} fail`);
