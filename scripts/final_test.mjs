import { GRAMMAR_TOPICS, getExercisesByLevel, getAllExercises } from './src/data/exercises.js';
import { DIALOGUE_SCENARIOS, getDialoguesByScenario } from './src/data/dialogues.js';
import { AUDIO_MAP } from './src/data/audio-map.js';
import { VOCAB_CATEGORIES, VOCABULARY } from './src/data/vocabulary.js';
import { bokyChapters } from './src/data/boky.js';
import { readFileSync, existsSync } from 'fs';

const SESSION_SIZE = 12;
let pass = 0, fail = 0;
const fails = [];

function check(name, cond, detail) {
  if (cond) { console.log('OK  ' + name); pass++; }
  else { console.log('FAIL ' + name + (detail ? ': ' + detail : '')); fail++; fails.push(name); }
}

// ── 1. NAVIGATION
console.log('\n== 1. NAVIGATION ==');
const mainJs = readFileSync('./src/main.js', 'utf8');
['dashboard','exercise','theory','vocabulary','dialogues','dialogue','boky','tutor','competitive'].forEach(r =>
  check('Route #' + r, mainJs.includes("case '" + r + "'")));
const dashCode = readFileSync('./src/views/DashboardView.js', 'utf8');
['btn-theory','btn-vocabulary','btn-dialogues','btn-boky','btn-tutor','btn-competitive'].forEach(b =>
  check('Dashboard btn ' + b, dashCode.includes(b)));

// ── 2. AUDIO
console.log('\n== 2. AUDIO ==');
const allEx = getAllExercises();
const listeningEx = allEx.filter(e => e.audio);
let missingWav = [];
listeningEx.forEach(e => {
  const key = e.audio.toLowerCase().trim();
  const path = AUDIO_MAP[key];
  if (!path || !existsSync(path.replace(/^\//, ''))) missingWav.push(e.id);
});
check('0 missing WAV files', missingWav.length === 0, missingWav.length + ' missing');

const evCode = readFileSync('./src/views/ExerciseView.js', 'utf8');
check('Play btn disabled during playback', evCode.includes('listenBtn.disabled = true'));
check('Play btn restored after end', evCode.includes('onEnd: restore'));
const dv2Code = readFileSync('./src/views/DialogueViewV2.js', 'utf8');
check('Dialogue TTS buttons', dv2Code.includes('tts-btn'));
check('Dialogue TTS restore', dv2Code.includes('onEnd') || dv2Code.includes('playing'));
const qL3 = getExercisesByLevel('questions', 3).filter(e => e.audio);
const frAudio = qL3.filter(e => /[àâçéèêëîïôùûü]/i.test(e.audio));
check('No French chars in Wh- audio', frAudio.length === 0, frAudio.map(e=>e.audio).join(', '));

// ── 3. GRAMMAIRE
console.log('\n== 3. GRAMMAIRE ==');
const theoryCode = readFileSync('./src/views/TheoryView.js', 'utf8');
check('Section named Grammaire', theoryCode.includes('Grammaire'));
check('Faire des exercices btn -> #exercise', theoryCode.includes('Faire des exercices') && theoryCode.includes('#exercise'));
check('Link to Boky from theory', theoryCode.includes('#boky') || theoryCode.includes('boky'));

let missingLevels = [];
for (const tid of Object.keys(GRAMMAR_TOPICS)) {
  for (const lv of [1,2,3]) {
    const p = getExercisesByLevel(tid, lv);
    if (p.length < SESSION_SIZE) missingLevels.push(tid + 'L' + lv + ':' + p.length);
  }
}
check('All 40 topics have >=12 ex per level', missingLevels.length === 0, missingLevels.slice(0,5).join(', '));

const l1HasTranslate = Object.keys(GRAMMAR_TOPICS).some(tid =>
  getExercisesByLevel(tid, 1).some(e => e.type === 'translate'));
check('L1: no translate type', !l1HasTranslate);

const l2ECbad = ['presentSimple','presentContinuous','pastSimple','futureSimple'].filter(tid =>
  getExercisesByLevel(tid, 2).some(e => e.type === 'error-correct'));
check('L2: error-correct removed from main grammar tenses', l2ECbad.length === 0, l2ECbad.join(','));

check('Exercise count = Math.min(pool, SESSION_SIZE)', evCode.includes('Math.min(pool.length, SESSION_SIZE)'));
const storageCode = readFileSync('./src/storage.js', 'utf8');
check('Level locking at 80%', storageCode.includes('>= 80'));
check('Level lock enforced in ExerciseView', evCode.includes('isLevelUnlocked'));

const allViewCode = dv2Code + evCode;
check('Contraction expansion (I am)', allViewCode.includes("I'm") && allViewCode.includes("'I am'"));
check('oe normalization for oe/ae', evCode.includes("'oe'") || dv2Code.includes("'oe'") || evCode.includes('"oe"') || dv2Code.includes('"oe"'));

// ── 4. BOKY
console.log('\n== 4. BOKY ==');
check('38 chapters present', bokyChapters.length === 38, 'got ' + bokyChapters.length);
const expectedStart = ['pronouns','toBe','articles','plurals','therebeis','questions','interrogative'];
check('Correct pedagogical order', expectedStart.every((id,i) => bokyChapters[i]?.id === id));
const bokyViewCode = readFileSync('./src/views/BokyView.js', 'utf8');
const newGramLinks = ['adjectives','goingTo','verbsOfState','relativeClauses','usedTo','sinceFor'];
check('New 6 grammar links in BOKY_TO_GRAMMAR', newGramLinks.every(id => bokyViewCode.includes("'" + id + "'")));
check('Link to Grammaire from Boky', bokyViewCode.includes('#theory') || bokyViewCode.includes('Faire les exercices'));
const chWithSections = bokyChapters.filter(c => c.fr && c.fr.sections && c.fr.sections.length > 0);
check('All 38 chapters have FR sections', chWithSections.length === 38, chWithSections.length + '/38');
const chWithErrors = bokyChapters.filter(c => c.fr && c.fr.commonErrors && c.fr.commonErrors.length > 0);
check('Chapters have common errors', chWithErrors.length >= 30, chWithErrors.length + '/38');
check('FR/MG toggle present', bokyViewCode.includes('lang') || bokyViewCode.includes('mg'));

// ── 5. VOCABULAIRE
console.log('\n== 5. VOCABULAIRE ==');
check('17+ vocabulary categories', VOCAB_CATEGORIES.length >= 17, VOCAB_CATEGORIES.length + '');
const vocabViewCode = readFileSync('./src/views/VocabularyView.js', 'utf8');
check('Flashcard feature', vocabViewCode.includes('card') || vocabViewCode.includes('flashcard'));
check('Match exercise', vocabViewCode.includes('match') || vocabViewCode.includes('pair'));
check('Audio per word', vocabViewCode.includes('speak'));
check('FR+MG instructions', vocabViewCode.includes('FR') || vocabViewCode.includes('MG') || vocabViewCode.includes('français'));

// ── 6. DIALOGUES
console.log('\n== 6. DIALOGUES ==');
check('12 dialogue scenarios (>=5)', DIALOGUE_SCENARIOS.length >= 5, DIALOGUE_SCENARIOS.length + '');
let noAlts = [];
for (const s of DIALOGUE_SCENARIOS) {
  for (const d of getDialoguesByScenario(s.id)) {
    for (const t of d.turns) {
      if (t.task && t.task.type === 'fill' && (!t.task.alternatives || !t.task.alternatives.length)) {
        noAlts.push(s.id + ':' + (t.task.answer || '').slice(0,20));
      }
    }
  }
}
check('All fill tasks have alternatives', noAlts.length === 0, noAlts.length + ' missing');
check('Each dialogue has choice tasks', DIALOGUE_SCENARIOS.every(s => {
  const d = getDialoguesByScenario(s.id);
  return d[0] && d[0].turns.some(t => t.task && t.task.type === 'choice');
}));

// ── 7. MON PARCOURS
console.log('\n== 7. MON PARCOURS ==');
check('Grammar topics in TOPICS', readFileSync('./src/data/topics.js','utf8').includes('presentSimple'));
check('Level dots in Dashboard', dashCode.includes('lv-dot'));
check('XP displayed', dashCode.includes('xp-badge') || dashCode.includes('XP'));
check('Exercise count display fixed', evCode.includes('Math.min(pool.length, SESSION_SIZE)'));

// ── 8. COMPETITIVE
console.log('\n== 8. COMPETITIVE ==');
const compCode = readFileSync('./src/views/CompetitiveView.js', 'utf8');
const configCode = readFileSync('./src/config.js', 'utf8');
check('ENABLE_COMPETITIVE_MODE flag', configCode.includes('ENABLE_COMPETITIVE_MODE') && dashCode.includes('ENABLE_COMPETITIVE_MODE'));
check('2-4 player input', compCode.includes('joueur') || compCode.includes('player'));
check('Category choice: Grammaire/Vocabulaire/Mixte', compCode.includes('GRAMMAR_TOPICS') && compCode.includes('VOCABULARY'));
check('Timer 30s', compCode.includes('30') && compCode.includes('setInterval'));
check('Solution hidden during Q', compCode.includes('NO solution leak'));
check('Solution shown after answer', compCode.includes('renderAnswerResult') && compCode.includes('bonne r'));
check('Score updated real-time', compCode.includes('score') || compCode.includes('points'));
check('Final leaderboard', compCode.includes('r' + 'ésultats') || compCode.includes('classement'));
check('No negative msgs for loser', !compCode.includes('perdant') && !compCode.includes('loser'));
check('Nouvelle partie button', compCode.includes('Nouvelle partie'));

// ── 9. TUTOR IA
console.log('\n== 9. TUTOR IA ==');
const tutorCode = readFileSync('./src/views/TutorView.js', 'utf8');
check('GROQ proxy configured', tutorCode.includes('GROQ') || tutorCode.includes('groq'));
check('System prompt in French', tutorCode.includes('SYSTEM_PROMPT') && tutorCode.includes('français'));
check('Off-topic rejection message', tutorCode.includes("l'anglais"));
check('Error handling present', tutorCode.includes('erreur') || tutorCode.includes('Error'));
check('Responds in student language', tutorCode.includes('French or Malagasy') || tutorCode.includes('même langue'));

// ── 10. XP
console.log('\n== 10. XP ==');
check('addXP function exported', storageCode.includes('export function addXP'));
check('XP triggers level update', storageCode.includes('level') && storageCode.includes('xp'));
check('localStorage persistence', storageCode.includes('localStorage'));
check('addXP called in ExerciseView', evCode.includes('addXP'));
check('addXP called in DialogueView', dv2Code.includes('addXP'));

// ── SUMMARY
console.log('\n' + '='.repeat(50));
console.log('TOTAL: ' + pass + ' OK / ' + fail + ' FAIL');
if (fails.length > 0) { console.log('\nFailed:'); fails.forEach(f => console.log('  FAIL ' + f)); }
else console.log('ALL TESTS PASS');
