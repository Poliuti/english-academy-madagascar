// TutorView.js — Chatbot anglais via Ollama local (llama3.2:3b)

const OLLAMA_URL   = 'http://localhost:11434/api/chat';
const OLLAMA_MODEL = 'llama3.2:3b';
const SYSTEM_PROMPT = `You are an English language tutor for beginner and intermediate students from Madagascar. You ONLY answer questions about English grammar, vocabulary, verb tenses, pronunciation and usage.
If the question is not related to learning English, respond: "Je peux uniquement aider avec l'apprentissage de l'anglais." (or in Malagasy: "Ny fanampiana ahy dia ny fiteny anglisy ihany.")
Always answer in the same language the student uses (French or Malagasy), but always show English examples with translations.
Be concise, encouraging, and use simple language. Format examples clearly.`;

export function renderTutor() {
  const container = document.createElement('div');
  container.className = 'tutor-page';

  // Session message history (for context)
  const history = [];
  let isLoading = false;

  container.innerHTML = `
    <div class="tutor-layout">
      <header class="tutor-header">
        <button class="btn-back" id="btn-back">← Retour</button>
        <div class="tutor-header-title">
          <span class="tutor-header-icon">🤖</span>
          <div>
            <div class="tutor-title">Tutor anglais</div>
            <div class="tutor-subtitle" id="tutor-status">Connexion à Ollama...</div>
          </div>
        </div>
        <button class="tutor-clear-btn" id="btn-clear" title="Effacer la conversation">🗑️</button>
      </header>

      <div class="tutor-messages" id="tutor-messages">
        <div class="tutor-welcome">
          <div class="tutor-welcome-icon">🎓</div>
          <h2>Bonjour ! Je suis ton tuteur d'anglais.</h2>
          <p>Pose-moi des questions sur la grammaire anglaise, le vocabulaire, les temps verbaux ou la prononciation.</p>
          <p class="tutor-welcome-mg">Manontania ahy momba ny fiteny anglisy — grammaire, vocabulaire, fotoana, fanononana.</p>
          <div class="tutor-suggestions">
            <button class="tutor-suggestion" data-q="Quelle est la différence entre Present Simple et Present Continuous ?">Présent simple vs continu</button>
            <button class="tutor-suggestion" data-q="Comment utiliser 'can' et 'could' ?">Can vs Could</button>
            <button class="tutor-suggestion" data-q="Explique-moi le Past Simple avec des exemples.">Past Simple</button>
            <button class="tutor-suggestion" data-q="Inona ny fahasamihafan'ny 'have' sy 'has' ?">Have vs Has (MG)</button>
            <button class="tutor-suggestion" data-q="Comment poser une question en anglais ?">Poser une question</button>
            <button class="tutor-suggestion" data-q="Quels sont les articles en anglais ?">Les articles</button>
          </div>
        </div>
      </div>

      <div class="tutor-input-area">
        <div class="tutor-input-row">
          <textarea
            id="tutor-input"
            class="tutor-input"
            placeholder="Écris ta question en français ou malagasy... (ex: Comment utiliser 'will' ?)"
            rows="1"
          ></textarea>
          <button class="tutor-send-btn" id="btn-send" title="Envoyer">
            <span>➤</span>
          </button>
        </div>
        <div class="tutor-info">
          Propulsé par <strong>Ollama</strong> (llama3.2:3b) · Local · Sans données partagées
        </div>
      </div>
    </div>
  `;

  const messagesEl  = container.querySelector('#tutor-messages');
  const inputEl     = container.querySelector('#tutor-input');
  const sendBtn     = container.querySelector('#btn-send');
  const statusEl    = container.querySelector('#tutor-status');

  // ─── Connectivity check (with auto-retry) ─────────────────────────────────
  let _ollamaRetry = null;

  checkOllama();

  async function checkOllama() {
    clearTimeout(_ollamaRetry);
    try {
      const res = await fetch('http://localhost:11434/api/tags', {
        signal: AbortSignal.timeout(3000)
      });
      if (res.ok) {
        const data = await res.json();
        const models = (data.models || []).map(m => m.name);
        const hasModel = models.some(m => m.startsWith('llama3.2'));
        if (hasModel) {
          setStatus('online', '🟢 Ollama connecté');
          // connected — stop retrying
        } else {
          setStatus('warn', `⚠️ Modèle ${OLLAMA_MODEL} non trouvé — lance: ollama pull llama3.2:3b`);
          _ollamaRetry = setTimeout(checkOllama, 5000);
        }
      } else {
        setStatus('offline', '🔴 Ollama hors ligne — reconnexion dans 5 s…');
        _ollamaRetry = setTimeout(checkOllama, 5000);
      }
    } catch {
      setStatus('offline', '🔴 Ollama hors ligne — reconnexion dans 5 s…');
      _ollamaRetry = setTimeout(checkOllama, 5000);
    }
  }

  function setStatus(state, text) {
    statusEl.textContent = text;
    statusEl.className = `tutor-subtitle tutor-status-${state}`;
  }

  // ─── Events ────────────────────────────────────────────────────────────────
  container.querySelector('#btn-back').addEventListener('click', () => {
    location.hash = '#dashboard';
  });

  container.querySelector('#btn-clear').addEventListener('click', () => {
    history.length = 0;
    messagesEl.innerHTML = '';
    appendWelcome();
  });

  sendBtn.addEventListener('click', sendMessage);

  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Auto-resize textarea
  inputEl.addEventListener('input', () => {
    inputEl.style.height = 'auto';
    inputEl.style.height = Math.min(inputEl.scrollHeight, 120) + 'px';
  });

  container.querySelectorAll('.tutor-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      inputEl.value = btn.dataset.q;
      sendMessage();
    });
  });

  // ─── Send & receive ────────────────────────────────────────────────────────
  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text || isLoading) return;

    // Hide welcome block
    const welcome = messagesEl.querySelector('.tutor-welcome');
    if (welcome) welcome.remove();

    inputEl.value = '';
    inputEl.style.height = 'auto';
    isLoading = true;
    sendBtn.disabled = true;

    appendMessage('user', text);
    history.push({ role: 'user', content: text });

    const thinkingEl = appendThinking();

    try {
      const reply = await callOllama(text);
      thinkingEl.remove();
      appendMessage('assistant', reply);
      history.push({ role: 'assistant', content: reply });
    } catch (err) {
      thinkingEl.remove();
      if (err.name === 'AbortError' || err.message?.includes('fetch')) {
        appendError('⚠️ Ollama ne répond pas. Assure-toi qu\'Ollama est lancé sur ce PC.\n\nCommande : <code>ollama serve</code>');
      } else {
        appendError(`Erreur : ${err.message}`);
      }
    } finally {
      isLoading = false;
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  async function callOllama(userText) {
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      // Keep last 8 exchanges for context (avoid blowing token limit)
      ...history.slice(-16),
    ];

    const res = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages,
        stream: false,
        options: { temperature: 0.4, num_predict: 512 }
      }),
      signal: AbortSignal.timeout(60000)
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} — ${res.statusText}`);
    }

    const data = await res.json();
    return data.message?.content || '(réponse vide)';
  }

  // ─── DOM helpers ──────────────────────────────────────────────────────────
  function appendMessage(role, text) {
    const div = document.createElement('div');
    div.className = `tutor-msg tutor-msg-${role}`;
    div.innerHTML = `
      <div class="tutor-msg-bubble">
        ${role === 'assistant' ? '<span class="tutor-msg-icon">🤖</span>' : ''}
        <div class="tutor-msg-content">${formatReply(text)}</div>
      </div>
    `;
    messagesEl.appendChild(div);
    div.scrollIntoView({ behavior: 'smooth', block: 'end' });
    return div;
  }

  function appendThinking() {
    const div = document.createElement('div');
    div.className = 'tutor-msg tutor-msg-assistant tutor-thinking';
    div.innerHTML = `
      <div class="tutor-msg-bubble">
        <span class="tutor-msg-icon">🤖</span>
        <div class="tutor-msg-content">
          <span class="tutor-dots"><span></span><span></span><span></span></span>
        </div>
      </div>
    `;
    messagesEl.appendChild(div);
    div.scrollIntoView({ behavior: 'smooth', block: 'end' });
    return div;
  }

  function appendError(html) {
    const div = document.createElement('div');
    div.className = 'tutor-msg tutor-msg-error';
    div.innerHTML = `<div class="tutor-error-box">${html}</div>`;
    messagesEl.appendChild(div);
    div.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  function appendWelcome() {
    // Re-insert welcome block after clear
    const div = document.createElement('div');
    div.className = 'tutor-welcome';
    div.innerHTML = `
      <div class="tutor-welcome-icon">🎓</div>
      <h2>Conversation effacée</h2>
      <p>Prêt pour une nouvelle conversation !</p>
    `;
    messagesEl.appendChild(div);
  }

  // Format markdown-like reply: **bold**, \`code\`, newlines
  function formatReply(text) {
    return text
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }

  return container;
}
