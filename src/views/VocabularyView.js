import { VOCAB_CATEGORIES, VOCABULARY } from '../data/vocabulary.js';
import { speak } from '../tts.js';
import { getActiveProfile } from '../storage.js';
import { saveVocabSM2, getVocabSM2Map } from '../storage.js';
import { calculateNextReview, isDue } from '../sm2.js';
import {
  getVoteData, castVote, submitProposal,
  isAccepted, hasMarker, stripMarker, vocabKey,
} from '../mgReview.js';
import { getTkEmoji } from '../data/totKelyEmojis.js';

export function renderVocabulary(categoryId) {
  const container = document.createElement('div');
  container.className = 'vocabulary-page';

  let current = categoryId && VOCABULARY[categoryId] ? categoryId : VOCAB_CATEGORIES[0].id;
  let search = '';
  let flashMode = false;
  let matchMode = false;
  // Flashcard state
  let flashDeck = [];
  let flashIndex = 0;
  let flashFlipped = false;
  let flashKnown = [];
  let flashReview = [];
  // Match state
  let matchPairs = [];
  let matchSelected = null;   // { idx, side }
  let matchMatched = new Set();
  let matchMoves = 0;
  const MATCH_SIZE = 6;

  // Quiz state
  let quizMode = false;
  let quizDeck = [];
  let quizIndex = 0;
  let quizScore = 0;
  let quizAnswered = false;
  let quizChoice = null;        // index (0–3) of the chosen option
  let quizCurrentOptions = [];  // [{fr, isCorrect}] for current question
  // Spell state
  let spellMode = false;
  let spellDeck = [];
  let spellIndex = 0;
  let spellScore = 0;
  let spellAnswered = false;
  let spellCorrect = false;
  let spellTyped = '';
  // Target language for Quiz/Spell games: 'fr' (default) or 'mg'
  let targetLang = 'fr';
  let totKelyMode = false; // Tot Kely toggle (super-débutant, 100% MG, no FR)

  // ── SM-2 Spaced Repetition ─────────────────────────────────────────────
  // Load all vocab SM-2 data from profile once at init
  const _initProfile = getActiveProfile();
  let sm2Map = _initProfile ? getVocabSM2Map(_initProfile.id) : {};

  // Word key: "catId:englishWord" — unique across all categories
  function wKey(catId, word) { return catId + ':' + word.en; }

  // Status of a word for current category
  function wordStatus(catId, word) {
    const item = sm2Map[wKey(catId, word)];
    if (!item) return 'new';
    if (isDue(item)) return 'due';
    const days = Math.round((item.nextReview - Date.now()) / 86400000);
    if (days <= 2) return 'soon';
    return 'known';
  }

  // Save one word's SM-2 result (quality: 5=known, 1=review)
  function saveWord(catId, word, quality) {
    const key = wKey(catId, word);
    const updated = calculateNextReview(sm2Map[key] || {}, quality);
    sm2Map[key] = updated;
    const profile = getActiveProfile();
    if (profile) saveVocabSM2(profile.id, key, updated);
  }

  // Count due words for a category
  function dueCount(catId) {
    return (VOCABULARY[catId] || []).filter(w => {
      const item = sm2Map[wKey(catId, w)];
      return item && isDue(item);
    }).length;
  }

  // Count seen (ever reviewed) words for a category
  function seenCount(catId) {
    return (VOCABULARY[catId] || []).filter(w => sm2Map[wKey(catId, w)]).length;
  }

  // Compute full SM-2 stats for a category
  function computeSm2Stats(catId) {
    const allWords = VOCABULARY[catId] || [];
    let known = 0, soon = 0, due = 0, newCount = 0;
    const statusMap = {};
    allWords.forEach(w => {
      const s = wordStatus(catId, w);
      statusMap[w.en] = s;
      if (s === 'known') known++;
      else if (s === 'soon') soon++;
      else if (s === 'due') due++;
      else newCount++;
    });
    const total = allWords.length;
    const seen = known + soon + due;
    return {
      total, seen, known, soon, due, new: newCount, statusMap,
      pctKnown: total > 0 ? (known / total * 100).toFixed(1) : 0,
      pctSoon:  total > 0 ? (soon  / total * 100).toFixed(1) : 0,
      pctDue:   total > 0 ? (due   / total * 100).toFixed(1) : 0,
    };
  }

  // Review mode: flashcard deck = only due words
  let reviewMode = false;

  function startReview() {
    const words = VOCABULARY[current] || [];
    const due = words.filter(w => {
      const item = sm2Map[wKey(current, w)];
      return item && isDue(item);
    });
    if (due.length === 0) return;
    flashDeck = [...due].sort(() => Math.random() - 0.5);
    flashIndex = 0; flashFlipped = false; flashKnown = []; flashReview = [];
    reviewMode = true; flashMode = true;
    matchMode = false; quizMode = false; spellMode = false;
    render();
  }

  function stopReview() {
    reviewMode = false; flashMode = false; render();
  }

  function startFlash() {
    const words = VOCABULARY[current] || [];
    flashDeck = [...words].sort(() => Math.random() - 0.5);
    flashIndex = 0; flashFlipped = false; flashKnown = []; flashReview = [];
    flashMode = true; reviewMode = false;
    matchMode = false; quizMode = false; spellMode = false;
    render();
  }

  function stopFlash() {
    flashMode = false; reviewMode = false; render();
  }

  function startMatch() {
    const words = VOCABULARY[current] || [];
    const sample = [...words].sort(() => Math.random() - 0.5).slice(0, MATCH_SIZE);
    matchPairs = sample;
    matchSelected = null;
    matchMatched = new Set();
    matchMoves = 0;
    matchMode = true;
    flashMode = false;
    render();
  }

  function stopMatch() {
    matchMode = false;
    render();
  }

  function genQuizOptions(idx) {
    const word = quizDeck[idx];
    const allWords = VOCABULARY[current] || [];
    if (targetLang === 'mg') {
      const wrong = allWords
        .filter(w => w.en !== word.en && w.mg)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      quizCurrentOptions = [
        { fr: stripMarker(word.mg), isCorrect: true, lang: 'mg' },
        ...wrong.map(w => ({ fr: stripMarker(w.mg), isCorrect: false, lang: 'mg' })),
      ].sort(() => Math.random() - 0.5);
      return;
    }
    const wrong = allWords
      .filter(w => w.en !== word.en)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    quizCurrentOptions = [
      { fr: word.fr, isCorrect: true, lang: 'fr' },
      ...wrong.map(w => ({ fr: w.fr, isCorrect: false, lang: 'fr' })),
    ].sort(() => Math.random() - 0.5);
  }

  function startQuiz() {
    let words = VOCABULARY[current] || [];
    if (targetLang === 'mg') words = words.filter(w => w.mg);
    quizDeck = [...words].sort(() => Math.random() - 0.5);
    quizIndex = 0; quizScore = 0;
    quizAnswered = false; quizChoice = null;
    quizMode = true; flashMode = false; matchMode = false; spellMode = false;
    if (quizDeck.length > 0) genQuizOptions(0);
    render();
  }

  function stopQuiz() {
    quizMode = false; render();
  }

  function normSpell(s) {
    return (s || '').toLowerCase().trim().replace(/[.!?,;:]$/, '');
  }

  function startSpell() {
    let words = VOCABULARY[current] || [];
    if (targetLang === 'mg') words = words.filter(w => w.mg);
    spellDeck = [...words].sort(() => Math.random() - 0.5);
    spellIndex = 0; spellScore = 0;
    spellAnswered = false; spellCorrect = false; spellTyped = '';
    spellMode = true; flashMode = false; matchMode = false; quizMode = false;
    render();
  }

  function stopSpell() {
    spellMode = false; render();
  }

  function render() {
    const inGame = flashMode || matchMode || quizMode || spellMode;
    container.innerHTML = `
      <!-- Mobile sidebar backdrop -->
      <div class="sidebar-backdrop" id="vocab-backdrop"></div>

      <div class="vocab-layout">
        <aside class="vocab-sidebar" id="vocab-sidebar">
          <button class="btn-sidebar-close" id="btn-sidebar-close">✕ Fermer</button>
          <button class="btn-back sidebar-back" id="btn-back">← Retour</button>
          <h3 class="sidebar-title">📚 Vocabulaire
            <button class="tk-shortcut ${totKelyMode ? 'tk-shortcut-active' : ''}" id="btn-tk-shortcut" title="${totKelyMode ? 'Mode normal' : 'Tot Kely : version simplifiée 100% malgache'}">🌱</button>
          </h3>
          ${inGame ? '' : `<input type="text" class="vocab-search" id="vocab-search" placeholder="🔎 Rechercher..." value="${escHtml(search)}" />`}
          <nav class="sidebar-nav">
            ${VOCAB_CATEGORIES.map(c => {
              const due = dueCount(c.id);
              const seen = seenCount(c.id);
              const total = (VOCABULARY[c.id] || []).length;
              const pct = total > 0 ? Math.round((seen / total) * 100) : 0;
              return `
              <button class="sidebar-item ${c.id === current && !inGame ? 'active' : ''}" data-cat="${c.id}">
                <span>${c.icon}</span>
                <div class="sidebar-item-center">
                  <span>${c.label}</span>
                  ${pct > 0 ? `<div class="sidebar-progress-bar"><div class="sidebar-progress-fill" style="width:${pct}%"></div></div>` : ''}
                </div>
                <div class="sidebar-item-right">
                  ${due > 0 ? `<span class="sidebar-due-badge">${due}</span>` : `<span class="sidebar-level">${c.level}</span>`}
                </div>
              </button>`;
            }).join('')}
          </nav>
        </aside>
        <main class="vocab-main">
          <!-- Mobile bar (hidden on desktop) -->
          <div class="vocab-mobilebar">
            <button class="btn-back" id="btn-back-mobile">← Retour</button>
            <button class="btn-mobile-toc" id="btn-mobile-toc">☰ Catégories</button>
          </div>
          ${flashMode ? renderFlashcardUI() : matchMode ? renderMatchUI() : quizMode ? renderQuizUI() : spellMode ? renderSpellUI() : renderCategory(current, search, computeSm2Stats(current), _initProfile?.id, targetLang, totKelyMode)}
        </main>
      </div>
      <div class="mg-proposal-modal" id="mg-proposal-modal" hidden>
        <div class="mg-proposal-content">
          <h3>🇲🇬 Proposer une correction</h3>
          <p class="mg-proposal-context" id="mg-proposal-context"></p>
          <label for="mg-proposal-input">Votre proposition de traduction :</label>
          <input type="text" id="mg-proposal-input" placeholder="Écrivez la traduction correcte..." />
          <p class="mg-proposal-hint">🇲🇬 Soraty ny dikany marina amin'ny teny malagasy</p>
          <div class="mg-proposal-actions">
            <button class="btn-secondary" id="mg-proposal-cancel">Annuler</button>
            <button class="btn-primary" id="mg-proposal-submit">Envoyer</button>
          </div>
        </div>
      </div>
    `;

    bindEvents();
    bindMgVoting();
  }

  function openProposalModal(key, originalMg, en, fr) {
    const modal = container.querySelector('#mg-proposal-modal');
    if (!modal) return;
    modal.hidden = false;
    modal.dataset.key = key;
    modal.dataset.originalMg = originalMg;
    modal.dataset.en = en;
    modal.dataset.fr = fr;
    const ctx = container.querySelector('#mg-proposal-context');
    if (ctx) {
      ctx.innerHTML = `
        <strong>Anglais :</strong> ${escHtml(en)}<br>
        <strong>Français :</strong> ${escHtml(fr)}<br>
        <strong>Traduction actuelle :</strong> ${escHtml(stripMarker(originalMg))}
      `;
    }
    const inp = container.querySelector('#mg-proposal-input');
    if (inp) { inp.value = ''; setTimeout(() => inp.focus(), 30); }
  }

  function closeProposalModal() {
    const modal = container.querySelector('#mg-proposal-modal');
    if (modal) modal.hidden = true;
  }

  function bindMgVoting() {
    const profile = getActiveProfile();
    container.querySelectorAll('.mg-vote-widget').forEach(widget => {
      const key = widget.dataset.key;
      const en = widget.dataset.en;
      const fr = widget.dataset.fr;
      const originalMg = widget.dataset.originalmg;
      widget.querySelectorAll('.mg-vote-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (!profile) return;
          const dir = btn.dataset.action;
          if (dir === 'up') {
            castVote(key, profile.id, 'up', { originalMg, contextEn: en, contextFr: fr });
            render();
          } else {
            openProposalModal(key, originalMg, en, fr);
          }
        });
      });
    });

    const cancelBtn = container.querySelector('#mg-proposal-cancel');
    if (cancelBtn) cancelBtn.addEventListener('click', closeProposalModal);
    const submitBtn = container.querySelector('#mg-proposal-submit');
    if (submitBtn) submitBtn.addEventListener('click', () => {
      const modal = container.querySelector('#mg-proposal-modal');
      const inp = container.querySelector('#mg-proposal-input');
      if (!modal || !inp || !profile) return;
      const text = (inp.value || '').trim();
      if (!text) { inp.focus(); return; }
      submitProposal(modal.dataset.key, profile.id, text, modal.dataset.originalMg, modal.dataset.en, modal.dataset.fr);
      // Also count it as a down vote for the voter
      castVote(modal.dataset.key, profile.id, 'down', {
        originalMg: modal.dataset.originalMg,
        contextEn: modal.dataset.en,
        contextFr: modal.dataset.fr,
      });
      closeProposalModal();
      render();
    });
  }

  function renderFlashcardUI() {
    if (flashDeck.length === 0) return '<div class="vocab-empty">Aucun mot dans cette catégorie.<div class="instr-mg">🇲🇬 Tsy misy teny ato amin\'ity sokajy ity.</div></div>';

    // Summary screen
    if (flashIndex >= flashDeck.length) {
      return `
        <div class="flash-summary">
          <div class="flash-summary-icon">🎉</div>
          <h2 class="flash-summary-title">${reviewMode ? 'Révision terminée !' : 'Session terminée !'}</h2>
          <div class="instr-mg">🇲🇬 ${reviewMode ? "Vita ny famerenana !" : "Vita ny fitsidihana !"}</div>
          <div class="flash-summary-stats">
            <div class="flash-stat flash-stat-known">
              <div class="flash-stat-num">${flashKnown.length}</div>
              <div class="flash-stat-label">✅ Je savais</div>
            </div>
            <div class="flash-stat flash-stat-review">
              <div class="flash-stat-num">${flashReview.length}</div>
              <div class="flash-stat-label">🔄 À revoir</div>
            </div>
          </div>
          ${flashReview.length > 0 ? `
            <button class="btn-primary flash-retry-btn" id="btn-flash-retry">
              🔄 Revoir les ${flashReview.length} mot${flashReview.length > 1 ? 's' : ''} difficile${flashReview.length > 1 ? 's' : ''}
            </button>
          ` : '<p class="flash-perfect">Parfait ! Tu connais tous les mots. 🌟</p>'}
          <button class="btn-secondary flash-stop-btn" id="btn-flash-stop">← Retour à la liste</button>
        </div>
      `;
    }

    const w = flashDeck[flashIndex];
    const total = flashDeck.length;
    const progressPct = Math.round((flashIndex / total) * 100);

    return `
      <div class="flash-wrap">
        <div class="flash-topbar">
          <span class="flash-counter">${reviewMode ? '🔄' : '🃏'} ${flashIndex + 1} / ${total}</span>
          <div class="flash-progress-track">
            <div class="flash-progress-fill" style="width:${progressPct}%"></div>
          </div>
          <button class="flash-stop-x" id="btn-flash-stop" title="Arrêter">✕</button>
        </div>

        <div class="flash-scene" id="flash-scene">
          <div class="flash-inner ${flashFlipped ? 'flipped' : ''}" id="flash-inner">
            <!-- Front -->
            <div class="flash-face flash-front" id="flash-face">
              <div class="flash-front-content">
                <div class="flash-word">${escHtml(w.en)}</div>
                <button class="tts-btn flash-tts" data-text="${escHtml(w.en)}" title="Écouter">🔊</button>
              </div>
              ${!flashFlipped ? `<button class="btn-secondary flash-reveal-btn" id="btn-reveal">Voir la traduction 👁</button>` : ''}
            </div>
            <!-- Back -->
            <div class="flash-face flash-back">
              <div class="flash-back-content">
                <div class="flash-word">${escHtml(w.en)}
                  <button class="tts-btn flash-tts" data-text="${escHtml(w.en)}" title="Écouter">🔊</button>
                </div>
                <div class="flash-fr">🇫🇷 ${escHtml(w.fr)}</div>
                ${w.mg ? `<div class="flash-mg">🇲🇬 ${escHtml(stripMarker(w.mg))}</div>` : ''}
                <div class="flash-example">
                  <em>${escHtml(w.example)}</em>
                  <button class="tts-btn flash-tts" data-text="${escHtml(w.example)}" title="Écouter l'exemple">🔊</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        ${flashFlipped ? `
          <div class="flash-btns">
            <button class="flash-btn flash-btn-review" id="btn-review">🔄 À revoir</button>
            <button class="flash-btn flash-btn-known" id="btn-known">✅ Je savais</button>
          </div>
        ` : ''}
      </div>
    `;
  }

  function openVocabSidebar() {
    container.querySelector('#vocab-sidebar')?.classList.add('mobile-open');
    container.querySelector('#vocab-backdrop')?.classList.add('active');
  }
  function closeVocabSidebar() {
    container.querySelector('#vocab-sidebar')?.classList.remove('mobile-open');
    container.querySelector('#vocab-backdrop')?.classList.remove('active');
  }

  function bindEvents() {
    container.querySelector('#btn-back').addEventListener('click', () => {
      if (flashMode) { stopFlash(); return; }
      if (matchMode) { stopMatch(); return; }
      if (quizMode)  { stopQuiz();  return; }
      if (spellMode) { stopSpell(); return; }
      location.hash = '#dashboard';
    });
    container.querySelector('#btn-back-mobile')?.addEventListener('click', () => {
      if (flashMode) { stopFlash(); return; }
      if (matchMode) { stopMatch(); return; }
      if (quizMode)  { stopQuiz();  return; }
      if (spellMode) { stopSpell(); return; }
      location.hash = '#dashboard';
    });
    container.querySelector('#btn-mobile-toc')?.addEventListener('click', openVocabSidebar);
    container.querySelector('#btn-tk-shortcut')?.addEventListener('click', (e) => {
      e.stopPropagation();
      totKelyMode = !totKelyMode;
      // In Tot Kely mode, force MG target lang
      if (totKelyMode) targetLang = 'mg';
      render();
    });
    container.querySelector('#btn-sidebar-close')?.addEventListener('click', closeVocabSidebar);
    container.querySelector('#vocab-backdrop')?.addEventListener('click', closeVocabSidebar);

    container.querySelectorAll('.sidebar-item').forEach(btn => {
      btn.addEventListener('click', () => {
        current = btn.dataset.cat;
        search = '';
        flashMode = false; matchMode = false; quizMode = false; spellMode = false;
        closeVocabSidebar();
        render();
      });
    });

    if (matchMode) {
      const stopBtn = container.querySelector('#btn-match-stop');
      if (stopBtn) stopBtn.addEventListener('click', stopMatch);
      const againBtn = container.querySelector('#btn-match-again');
      if (againBtn) againBtn.addEventListener('click', startMatch);

      container.querySelectorAll('.match-card:not([disabled])').forEach(card => {
        card.addEventListener('click', () => {
          const idx = +card.dataset.idx;
          const side = card.dataset.side;
          if (matchMatched.has(idx)) return;

          if (!matchSelected) {
            matchSelected = { idx, side };
            render();
            return;
          }
          // Same side clicked again — re-select
          if (matchSelected.side === side) {
            matchSelected = { idx, side };
            render();
            return;
          }
          // Opposite side clicked — check match
          matchMoves++;
          if (matchSelected.idx === idx) {
            // ✅ Correct pair
            matchMatched.add(idx);
            speak(matchPairs[idx].en);
            matchSelected = null;
          } else {
            // ❌ Wrong — flash error then clear
            matchSelected = null;
          }
          render();
        });
      });
      return;
    }

    if (quizMode) {
      const stopBtn = container.querySelector('#btn-quiz-stop');
      if (stopBtn) stopBtn.addEventListener('click', stopQuiz);
      const retryBtn = container.querySelector('#btn-quiz-retry');
      if (retryBtn) retryBtn.addEventListener('click', startQuiz);
      container.querySelectorAll('.quiz-option').forEach((btn, i) => {
        btn.addEventListener('click', () => {
          if (quizAnswered) return;
          quizAnswered = true;
          quizChoice = i;
          const correct = quizCurrentOptions[i]?.isCorrect;
          if (correct) quizScore++;
          saveWord(current, quizDeck[quizIndex], correct ? 5 : 1);
          render();
        });
      });
      const nextBtn = container.querySelector('#btn-quiz-next');
      if (nextBtn) nextBtn.addEventListener('click', () => {
        quizIndex++;
        quizAnswered = false; quizChoice = null;
        if (quizIndex < quizDeck.length) genQuizOptions(quizIndex);
        render();
      });
    } else if (spellMode) {
      const stopBtn = container.querySelector('#btn-spell-stop');
      if (stopBtn) stopBtn.addEventListener('click', stopSpell);
      const retryBtn = container.querySelector('#btn-spell-retry');
      if (retryBtn) retryBtn.addEventListener('click', startSpell);
      if (spellAnswered) {
        const nextBtn = container.querySelector('#btn-spell-next');
        if (nextBtn) nextBtn.addEventListener('click', () => {
          spellIndex++;
          spellAnswered = false; spellCorrect = false; spellTyped = '';
          render();
          setTimeout(() => container.querySelector('#spell-input')?.focus(), 30);
        });
      } else {
        const form = container.querySelector('#spell-form');
        if (form) form.addEventListener('submit', e => {
          e.preventDefault();
          const inp = container.querySelector('#spell-input');
          spellTyped = (inp?.value || '').trim();
          const target = targetLang === 'mg'
            ? stripMarker(spellDeck[spellIndex]?.mg || '')
            : (spellDeck[spellIndex]?.en || '');
          spellCorrect = normSpell(spellTyped) === normSpell(target);
          if (spellCorrect) spellScore++;
          saveWord(current, spellDeck[spellIndex], spellCorrect ? 4 : 1);
          spellAnswered = true;
          render();
        });
        setTimeout(() => container.querySelector('#spell-input')?.focus(), 30);
      }
    } else if (!flashMode) {
      const searchInput = container.querySelector('#vocab-search');
      if (searchInput) {
        searchInput.addEventListener('input', e => {
          search = e.target.value.trim().toLowerCase();
          const main = container.querySelector('.vocab-main');
          if (main) main.innerHTML = renderCategory(current, search, computeSm2Stats(current), _initProfile?.id, targetLang, totKelyMode);
          bindTts();
          bindFlashStart();
          bindMatchStart();
          bindQuizStart();
          bindSpellStart();
          bindReviewStart();
          bindLangToggle();
          bindMgVoting();
        });
      }
      bindFlashStart();
      bindMatchStart();
      bindQuizStart();
      bindSpellStart();
      bindReviewStart();
      bindLangToggle();
    } else {
      // Flash mode events
      const stopBtn = container.querySelector('#btn-flash-stop');
      if (stopBtn) stopBtn.addEventListener('click', stopFlash);

      const retryBtn = container.querySelector('#btn-flash-retry');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          flashDeck = [...flashReview].sort(() => Math.random() - 0.5);
          flashIndex = 0;
          flashFlipped = false;
          flashKnown = [];
          flashReview = [];
          render();
        });
      }

      const revealBtn = container.querySelector('#btn-reveal');
      if (revealBtn) {
        revealBtn.addEventListener('click', () => {
          flashFlipped = true;
          render();
        });
      }

      const knownBtn = container.querySelector('#btn-known');
      if (knownBtn) {
        knownBtn.addEventListener('click', () => {
          const w = flashDeck[flashIndex];
          saveWord(current, w, 5);
          flashKnown.push(w);
          flashIndex++; flashFlipped = false;
          render();
        });
      }

      const reviewBtn = container.querySelector('#btn-review');
      if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
          const w = flashDeck[flashIndex];
          saveWord(current, w, 1);
          flashReview.push(w);
          flashIndex++; flashFlipped = false;
          render();
        });
      }
    }

    bindTts();
  }

  function renderMatchUI() {
    const total = matchPairs.length;
    const done = matchMatched.size;

    if (done === total) {
      return `
        <div class="flash-summary">
          <div class="flash-summary-icon">🎉</div>
          <h2 class="flash-summary-title">Bravo ! Tout trouvé !</h2>
          <div class="instr-mg">🇲🇬 Mahay ! Tafita avokoa !</div>
          <div class="flash-summary-stats">
            <div class="flash-stat flash-stat-known">
              <div class="flash-stat-num">${matchMoves}</div>
              <div class="flash-stat-label">🔀 Tentatives</div>
            </div>
            <div class="flash-stat flash-stat-review">
              <div class="flash-stat-num">${total}</div>
              <div class="flash-stat-label">✅ Paires trouvées</div>
            </div>
          </div>
          <button class="btn-primary flash-retry-btn" id="btn-match-again">🔀 Nouveau round</button>
          <button class="btn-secondary flash-stop-btn" id="btn-match-stop">← Retour à la liste</button>
        </div>
      `;
    }

    // Build shuffled EN and FR columns
    const enOrder = [...matchPairs.keys()].sort(() => Math.random() - 0.5);
    const frOrder = [...matchPairs.keys()].sort(() => Math.random() - 0.5);

    return `
      <div class="match-wrap">
        <div class="match-topbar">
          <span class="match-info">${done}/${total} paires · ${matchMoves} essais</span>
          <button class="flash-stop-x" id="btn-match-stop" title="Arrêter">✕</button>
        </div>
        <div class="match-columns">
          <div class="match-col" id="match-col-en">
            ${enOrder.map(i => {
              const w = matchPairs[i];
              const isMatched = matchMatched.has(i);
              const isSelected = matchSelected?.side === 'en' && matchSelected?.idx === i;
              return `<button
                class="match-card match-en ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}"
                data-idx="${i}" data-side="en"
                ${isMatched ? 'disabled' : ''}
              >${w.icon ? w.icon + ' ' : ''}${escHtml(w.en)}</button>`;
            }).join('')}
          </div>
          <div class="match-col" id="match-col-fr">
            ${frOrder.map(i => {
              const w = matchPairs[i];
              const isMatched = matchMatched.has(i);
              const isSelected = matchSelected?.side === 'fr' && matchSelected?.idx === i;
              return `<button
                class="match-card match-fr ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}"
                data-idx="${i}" data-side="fr"
                ${isMatched ? 'disabled' : ''}
              >🇫🇷 ${escHtml(w.fr)}</button>`;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function renderQuizUI() {
    if (quizDeck.length === 0) return '<div class="vocab-empty">Aucun mot dans cette catégorie.<div class="instr-mg">🇲🇬 Tsy misy teny ato amin\'ity sokajy ity.</div></div>';

    if (quizIndex >= quizDeck.length) {
      const pct = Math.round((quizScore / quizDeck.length) * 100);
      return `
        <div class="flash-summary">
          <div class="flash-summary-icon">${pct === 100 ? '🏆' : pct >= 60 ? '🎉' : '💪'}</div>
          <h2 class="flash-summary-title">Quiz terminé !</h2>
          <div class="instr-mg">🇲🇬 Vita ny adina !</div>
          <div class="flash-summary-stats">
            <div class="flash-stat flash-stat-known">
              <div class="flash-stat-num">${quizScore}</div>
              <div class="flash-stat-label">✅ Bonnes réponses</div>
            </div>
            <div class="flash-stat flash-stat-review">
              <div class="flash-stat-num">${quizDeck.length - quizScore}</div>
              <div class="flash-stat-label">❌ Erreurs</div>
            </div>
          </div>
          <button class="btn-primary flash-retry-btn" id="btn-quiz-retry">🔄 Rejouer</button>
          <button class="btn-secondary flash-stop-btn" id="btn-quiz-stop">← Retour à la liste</button>
        </div>
      `;
    }

    const w = quizDeck[quizIndex];
    const total = quizDeck.length;
    const progressPct = Math.round((quizIndex / total) * 100);

    return `
      <div class="quiz-wrap">
        <div class="flash-topbar">
          <span class="flash-counter">${quizIndex + 1} / ${total}</span>
          <div class="flash-progress-track">
            <div class="flash-progress-fill" style="width:${progressPct}%"></div>
          </div>
          <button class="flash-stop-x" id="btn-quiz-stop" title="Arrêter">✕</button>
        </div>
        <div class="quiz-question-card">
          <div class="quiz-word">${escHtml(w.en)}</div>
          <button class="tts-btn quiz-tts" data-text="${escHtml(w.en)}" title="Écouter">🔊</button>
          <div class="quiz-prompt">${targetLang === 'mg' ? "Quelle est la traduction malgache ?" : "Quelle est la traduction ?"}</div>
          <div class="quiz-prompt-mg">🇲🇬 ${targetLang === 'mg' ? "Inona ny dikany amin'ny teny malagasy ?" : "Inona ny dikany ?"}</div>
        </div>
        <div class="quiz-options">
          ${quizCurrentOptions.map((opt, i) => {
            let cls = 'quiz-option';
            if (quizAnswered) {
              if (opt.isCorrect) cls += ' quiz-opt-correct';
              else if (i === quizChoice) cls += ' quiz-opt-wrong';
            }
            return `<button class="${cls}" data-idx="${i}" ${quizAnswered ? 'disabled' : ''}>
              ${escHtml(opt.fr)}
            </button>`;
          }).join('')}
        </div>
        ${quizAnswered ? `
          <div class="quiz-feedback ${quizCurrentOptions[quizChoice]?.isCorrect ? 'quiz-fb-ok' : 'quiz-fb-err'}">
            ${quizCurrentOptions[quizChoice]?.isCorrect
              ? '✅ Correct !'
              : `❌ La bonne réponse : <strong>${escHtml(targetLang === 'mg' ? stripMarker(w.mg || w.fr) : w.fr)}</strong>`}
          </div>
          <button class="btn-primary quiz-next-btn" id="btn-quiz-next">
            ${quizIndex + 1 < total ? 'Question suivante →' : 'Voir les résultats 🏁'}
          </button>
        ` : ''}
      </div>
    `;
  }

  function renderSpellUI() {
    if (spellDeck.length === 0) return '<div class="vocab-empty">Aucun mot dans cette catégorie.<div class="instr-mg">🇲🇬 Tsy misy teny ato amin\'ity sokajy ity.</div></div>';

    if (spellIndex >= spellDeck.length) {
      const pct = Math.round((spellScore / spellDeck.length) * 100);
      return `
        <div class="flash-summary">
          <div class="flash-summary-icon">${pct === 100 ? '🏆' : pct >= 60 ? '🎉' : '💪'}</div>
          <h2 class="flash-summary-title">Dictée terminée !</h2>
          <div class="instr-mg">🇲🇬 Vita ny tsofiana !</div>
          <div class="flash-summary-stats">
            <div class="flash-stat flash-stat-known">
              <div class="flash-stat-num">${spellScore}</div>
              <div class="flash-stat-label">✅ Bien écrits</div>
            </div>
            <div class="flash-stat flash-stat-review">
              <div class="flash-stat-num">${spellDeck.length - spellScore}</div>
              <div class="flash-stat-label">❌ À corriger</div>
            </div>
          </div>
          <button class="btn-primary flash-retry-btn" id="btn-spell-retry">🔄 Recommencer</button>
          <button class="btn-secondary flash-stop-btn" id="btn-spell-stop">← Retour à la liste</button>
        </div>
      `;
    }

    const w = spellDeck[spellIndex];
    const total = spellDeck.length;
    const progressPct = Math.round((spellIndex / total) * 100);
    const isMg = targetLang === 'mg';
    const exGap = (w.example || '').replace(
      new RegExp('\\b' + w.en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi'),
      '___'
    );

    return `
      <div class="spell-wrap">
        <div class="flash-topbar">
          <span class="flash-counter">${spellIndex + 1} / ${total}</span>
          <div class="flash-progress-track">
            <div class="flash-progress-fill" style="width:${progressPct}%"></div>
          </div>
          <button class="flash-stop-x" id="btn-spell-stop" title="Arrêter">✕</button>
        </div>
        <div class="spell-question-card">
          ${isMg
            ? `<div class="spell-fr">🇬🇧 EN: ${escHtml(w.en)}</div>
               <div class="spell-mg-hint">🇲🇬 Sorata amin'ny teny malagasy</div>`
            : `<div class="spell-fr">🇫🇷 ${escHtml(w.fr)}</div>
               ${w.mg ? `<div class="spell-mg">🇲🇬 ${escHtml(stripMarker(w.mg))}</div>` : ''}
               <div class="spell-hint"><em>${escHtml(exGap)}</em></div>`}
        </div>
        <form id="spell-form" class="spell-form" autocomplete="off">
          <input id="spell-input" class="spell-input" type="text"
            placeholder="${isMg ? 'Écrivez le mot en malgache…' : 'Écrivez le mot en anglais…'}"
            value="${spellAnswered ? escHtml(spellTyped) : ''}"
            ${spellAnswered ? 'disabled' : ''}
            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
          ${!spellAnswered
            ? `<button type="submit" class="btn-primary spell-submit-btn">Vérifier ✓ <span class="instr-mg">/ Hamarino</span></button>`
            : `<button type="button" class="btn-secondary spell-submit-btn" id="btn-spell-next">
                ${spellIndex + 1 < total ? 'Suivant →' : 'Voir les résultats 🏁'}
               </button>`
          }
        </form>
        ${spellAnswered ? `
          <div class="quiz-feedback ${spellCorrect ? 'quiz-fb-ok' : 'quiz-fb-err'}">
            ${spellCorrect
              ? '✅ Correct !'
              : `❌ La bonne réponse : <strong>${escHtml(isMg ? stripMarker(w.mg || w.en) : w.en)}</strong>`}
            <button class="tts-btn spell-tts" data-text="${escHtml(w.en)}" title="Écouter">🔊</button>
          </div>
        ` : ''}
      </div>
    `;
  }

  function bindFlashStart() {
    const btn = container.querySelector('#btn-flash-start');
    if (btn) btn.addEventListener('click', startFlash);
  }

  function bindMatchStart() {
    const btn = container.querySelector('#btn-match-start');
    if (btn) btn.addEventListener('click', startMatch);
  }

  function bindQuizStart() {
    const btn = container.querySelector('#btn-quiz-start');
    if (btn) btn.addEventListener('click', startQuiz);
  }

  function bindSpellStart() {
    const btn = container.querySelector('#btn-spell-start');
    if (btn) btn.addEventListener('click', startSpell);
  }

  function bindReviewStart() {
    const btn = container.querySelector('#btn-review-start');
    if (btn) btn.addEventListener('click', startReview);
  }

  function bindLangToggle() {
    container.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        targetLang = btn.dataset.lang;
        render();
      });
    });
  }

  function bindTts() {
    container.querySelectorAll('.tts-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        btn.disabled = true;
        btn.classList.add('playing');
        const restore = () => {
          btn.disabled = false;
          btn.classList.remove('playing');
        };
        speak(btn.dataset.text, { onEnd: restore, onError: restore });
      });
    });
  }

  render();
  return container;
}

function renderMgBlock(catId, w, profileId) {
  const marked = hasMarker(w.mg);
  const accepted = isAccepted(vocabKey(catId, w.en));
  if (!marked || accepted) {
    const cleanMg = stripMarker(w.mg);
    return `<div class="vocab-mg">🇲🇬 ${escHtml(cleanMg)}${accepted ? ' ✅' : ''}</div>`;
  }
  const key = vocabKey(catId, w.en);
  const vd = getVoteData(key);
  const voted = profileId ? vd.hasVoted(profileId) : false;
  const cleanMg = stripMarker(w.mg);
  return `
    <div class="vocab-mg">🇲🇬 ${escHtml(cleanMg)}</div>
    <div class="mg-vote-widget" data-key="${escHtml(key)}" data-catid="${escHtml(catId)}" data-en="${escHtml(w.en)}" data-fr="${escHtml(w.fr)}" data-originalmg="${escHtml(w.mg)}">
      <button class="mg-vote-btn mg-vote-up" data-action="up" ${voted ? 'disabled' : ''}>👍 ${vd.up}</button>
      <button class="mg-vote-btn mg-vote-down" data-action="down" ${voted ? 'disabled' : ''}>👎 ${vd.down}</button>
      <span class="mg-vote-status">${voted ? '✓ Vous avez voté' : '⚠️ À vérifier'}</span>
    </div>
  `;
}

function renderCategory(catId, search, sm2Stats = { total:0, seen:0, known:0, soon:0, due:0, new:0, statusMap:{}, pctKnown:0, pctSoon:0, pctDue:0 }, profileId = null, targetLang = 'fr', totKelyMode = false) {
  const cat = VOCAB_CATEGORIES.find(c => c.id === catId);
  let words = VOCABULARY[catId] || [];

  if (search) {
    words = words.filter(w =>
      w.en.toLowerCase().includes(search) ||
      w.fr.toLowerCase().includes(search) ||
      (w.mg && w.mg.toLowerCase().includes(search))
    );
  }

  return `
    <div class="vocab-content">
      <div class="vocab-header">
        <div class="vocab-header-left">
          <h2 class="vocab-title">${cat?.icon || ''} ${cat?.label || ''}</h2>
          <span class="vocab-count">${words.length} mot${words.length !== 1 ? 's' : ''}</span>
        </div>
        ${words.length > 0 ? `
          <div class="vocab-game-btns">
            <div class="vocab-lang-wrap">
              <div class="vocab-lang-toggle" id="vocab-lang-toggle" title="Langue cible / Fiteny kendrena">
                <button class="lang-toggle-btn ${targetLang === 'fr' ? 'active' : ''}" data-lang="fr">🇫🇷 FR</button>
                <button class="lang-toggle-btn ${targetLang === 'mg' ? 'active' : ''}" data-lang="mg">🇲🇬 MG</button>
              </div>
              <div class="vocab-lang-caption">
                ${targetLang === 'mg'
                  ? 'Langue mise en avant + testée dans Quiz / Écrire : malgache'
                  : 'Langue mise en avant + testée dans Quiz / Écrire : français'}
                <span class="instr-mg">🇲🇬 ${targetLang === 'mg'
                  ? "Teny malagasy no aseho sy zahana amin'ny Quiz / Écrire"
                  : "Teny frantsay no aseho sy zahana amin'ny Quiz / Écrire"}</span>
              </div>
            </div>
            <button class="btn-primary flash-start-btn" id="btn-flash-start" title="Mode Flashcards">🃏 Flashcards</button>
            <button class="btn-secondary match-start-btn" id="btn-match-start" title="Jeu de mémorisation">🔀 Match</button>
            <button class="btn-secondary quiz-start-btn" id="btn-quiz-start" title="Quiz QCM">🧠 Quiz</button>
            <button class="btn-secondary spell-start-btn" id="btn-spell-start" title="Écrire le mot">✏️ Écrire</button>
            ${sm2Stats.due > 0 ? `<button class="btn-review-start" id="btn-review-start" title="Révision du jour">🔄 Révision <span class="review-due-count">${sm2Stats.due}</span></button>` : ''}
          </div>
        ` : ''}
      </div>
      ${sm2Stats.seen > 0 ? `
        <div class="vocab-sm2-bar">
          <div class="vocab-sm2-segments">
            <div class="sm2-seg sm2-seg-known"  style="width:${sm2Stats.pctKnown}%"  title="${sm2Stats.known} mots maîtrisés"></div>
            <div class="sm2-seg sm2-seg-soon"   style="width:${sm2Stats.pctSoon}%"   title="${sm2Stats.soon} mots bientôt"></div>
            <div class="sm2-seg sm2-seg-due"    style="width:${sm2Stats.pctDue}%"    title="${sm2Stats.due} mots à réviser"></div>
          </div>
          <span class="vocab-sm2-label">${sm2Stats.seen}/${sm2Stats.total} vus · ${sm2Stats.due > 0 ? sm2Stats.due + ' à réviser' : sm2Stats.known > 0 ? sm2Stats.known + ' maîtrisés 🎉' : ''}</span>
        </div>
      ` : ''}
      ${words.length === 0 ? `
        <div class="vocab-empty">Aucun mot trouvé pour "${escHtml(search)}".<div class="instr-mg">🇲🇬 Tsy misy teny hita.</div></div>
      ` : totKelyMode ? `
        <div class="vocab-grid vocab-grid-totkely">
          ${words.filter(w => w.mg).map(w => `
            <div class="vocab-card vocab-card-totkely">
              <div class="tk-icon">${getTkEmoji(w)}</div>
              <div class="tk-en">${escHtml(w.en)}
                <button class="tts-btn" data-text="${escHtml(w.en)}" title="Henoy">🔊</button>
              </div>
              <div class="tk-mg">${escHtml(stripMarker(w.mg))}</div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="vocab-grid">
          ${words.map(w => {
            const st = sm2Stats.statusMap[w.en] || 'new';
            const dot = { due: '🔴', soon: '🟡', known: '🟢' }[st] || '';
            return `
            <div class="vocab-card vocab-card-lang-${targetLang}">
              <div class="vocab-card-top">
                ${dot ? `<span class="vocab-sm2-dot">${dot}</span>` : ''}
                ${w.icon ? `<div class="vocab-icon">${w.icon}</div>` : ''}
                <div class="vocab-en">
                  ${escHtml(w.en)}
                  <button class="tts-btn" data-text="${escHtml(w.en)}" title="Écouter">▶</button>
                </div>
                <div class="vocab-fr">🇫🇷 ${escHtml(w.fr)}</div>
                ${w.mg ? renderMgBlock(catId, w, profileId) : ''}
              </div>
              <div class="vocab-example">
                <em>${escHtml(w.example)}</em>
                <button class="tts-btn" data-text="${escHtml(w.example)}" title="Écouter l'exemple">▶</button>
              </div>
            </div>
            `; }).join('')}
        </div>
      `}
    </div>
  `;
}

function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
