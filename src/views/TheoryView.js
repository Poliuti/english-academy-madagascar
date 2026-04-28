import { theory, theoryTopics, vocabTopics } from '../data/theory.js';
import { speak } from '../tts.js';

export function renderTheory(topicId) {
  const container = document.createElement('div');
  container.className = 'theory-page';

  const defaultTopic = topicId && theory[topicId] ? topicId : 'presentSimple';
  let currentTopic = defaultTopic;
  let isVocab = topicId === 'vocabulary';
  let currentVocab = 'routine';

  function render() {
    container.innerHTML = `
      <div class="theory-layout">
        <!-- Sidebar -->
        <aside class="theory-sidebar">
          <button class="btn-back sidebar-back" id="btn-back">← Retour</button>
          <h3 class="sidebar-title">📚 Théorie</h3>
          <nav class="sidebar-nav">
            ${theoryTopics.map(t => `
              <button
                class="sidebar-item ${!t.isVocab && currentTopic === t.id && !isVocab ? 'active' : ''} ${t.isVocab && isVocab ? 'active' : ''}"
                data-topic="${t.id}"
                data-vocab="${t.isVocab || false}"
              >
                <span>${t.icon}</span>
                <span>${t.label}</span>
                <span class="sidebar-level">${t.level}</span>
              </button>
            `).join('')}
          </nav>
        </aside>

        <!-- Main content -->
        <main class="theory-main">
          ${isVocab ? renderVocabNav(currentVocab) : ''}
          <div id="theory-content">
            ${isVocab ? renderVocab(currentVocab) : renderGrammar(currentTopic)}
          </div>
        </main>
      </div>
    `;

    bindEvents();
  }

  function bindEvents() {
    container.querySelector('#btn-back').addEventListener('click', () => {
      location.hash = '#dashboard';
    });

    container.querySelectorAll('.sidebar-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const isVocabTopic = btn.dataset.vocab === 'true';
        if (isVocabTopic) {
          isVocab = true;
          render();
        } else {
          isVocab = false;
          currentTopic = btn.dataset.topic;
          render();
        }
      });
    });

    container.querySelectorAll('.vocab-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        currentVocab = btn.dataset.vocab;
        render();
      });
    });

    container.querySelectorAll('.tts-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.text;
        btn.textContent = '🔊';
        speak(text, { onEnd: () => { btn.textContent = '▶'; } });
      });
    });

    container.querySelectorAll('.do-exercises-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // Maps theory section id → exercise topic key in exercises.js
        const topicMap = {
          // vocabulary topics
          routine:           'routine',
          family:            'family',
          school:            'school',
          body:              'body',
          time:              'time',
          food:              'food',
          colors:            'colors',
          numbers:           'numbers',
          adjectives:        'adjectives',
          comparatives:      'adjectives',
          pronouns:          'pronouns',
          // grammar A1
          articles:          'articles',
          plurals:           'plurals',
          therebeis:         'therebeis',
          // grammar A1-A2
          prepositions:      'prepositions',
          questions:         'questions',
          // grammar A2
          presentSimple:     'presentSimple',
          presentContinuous: 'presentContinuous',
          modals:            'modals',
          // grammar A2-B1
          pastSimple:        'pastSimple',
          futureSimple:      'futureSimple',
          // grammar B1
          pastContinuous:    'pastContinuous',
          futureContinuous:  'futureContinuous',
          presentPerfect:    'presentPerfect',
          pastPerfect:       'pastPerfect',
          timeMarkers:       'timeMarkers',
          passiveVoice:      'passiveVoice',
          // grammar B1-B2
          conditionals:      'conditionals',
          reportedSpeech:    'reportedSpeech',
          // grammar B2
          futurePerfect:     'futurePerfect',
        };
        const ex = topicMap[currentTopic];
        if (ex) {
          location.hash = `#exercise?topic=${ex}&mode=topic`;
        } else {
          btn.textContent = '🚧 Exercices bientôt disponibles !';
          btn.disabled = true;
          setTimeout(() => {
            btn.textContent = '✏️ Faire des exercices sur ce thème';
            btn.disabled = false;
          }, 2500);
        }
      });
    });
  }

  render();
  return container;
}

function renderVocabNav(currentVocab) {
  return `
    <div class="vocab-tabs">
      ${vocabTopics.map(v => `
        <button class="vocab-tab ${v.id === currentVocab ? 'active' : ''}" data-vocab="${v.id}">
          ${v.icon} ${v.label}
        </button>
      `).join('')}
    </div>
  `;
}

function renderVocab(vocabId) {
  const data = theory.vocabulary?.[vocabId];
  if (!data) return '<p>Vocabulaire non trouvé.</p>';

  return `
    <div class="theory-content-inner">
      <h2 class="theory-title">${data.title}</h2>
      <div class="vocab-grid">
        ${data.words.map(w => `
          <div class="vocab-card">
            <div class="vocab-card-top">
              <div class="vocab-en">
                ${escHtml(w.en)}
                <button class="tts-btn" data-text="${escHtml(w.en)}" title="Écouter">▶</button>
              </div>
              <div class="vocab-fr">${escHtml(w.fr)}</div>
              ${w.mg ? `<div class="vocab-mg">🇲🇬 ${escHtml(w.mg)}</div>` : ''}
            </div>
            <div class="vocab-example">
              <em>${escHtml(w.example)}</em>
              <button class="tts-btn" data-text="${escHtml(w.example)}" title="Écouter l'exemple">▶</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderGrammar(topicId) {
  const t = theory[topicId];
  if (!t) return '<p>Section non trouvée.</p>';

  return `
    <div class="theory-content-inner">
      <div class="theory-header">
        <h2 class="theory-title">${t.icon} ${t.title}</h2>
        <span class="theory-level-badge">${t.level}</span>
      </div>
      <p class="theory-subtitle">${t.subtitle}</p>

      ${t.malgasyNote ? `
        <div class="malgasy-note">
          🇲🇬 <strong>Malagasy :</strong> ${escHtml(t.malgasyNote)}
        </div>
      ` : ''}

      ${t.sections.map(s => `
        <div class="theory-section">
          <h3 class="section-heading">${s.title}</h3>
          <p class="section-content">${s.content}</p>
          <div class="examples-list">
            ${s.examples.map(ex => `
              <div class="example-row">
                <div class="example-en">
                  <button class="tts-btn" data-text="${ex.en.replace(/<[^>]+>/g, '')}" title="Écouter">▶</button>
                  <span>${ex.en}</span>
                </div>
                <div class="example-fr">🇫🇷 ${ex.fr}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}

      ${t.tips?.length ? `
        <div class="tips-box">
          <h3>💡 Conseils</h3>
          <ul>
            ${t.tips.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <div class="theory-cta">
        <button class="btn-primary do-exercises-btn">
          ✏️ Faire des exercices sur ce thème
        </button>
      </div>
    </div>
  `;
}

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
