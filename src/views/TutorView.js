// TutorView.js
// • localhost  → Ollama (llama3.2:3b local)
// • Vercel     → /api/chat proxy → Groq (llama-3.1-8b-instant, free)

const OLLAMA_URL   = 'http://localhost:11434/api/chat';
const OLLAMA_MODEL = 'llama3.2:3b';
const GROQ_PROXY   = '/api/chat';   // Vercel serverless function

const SYSTEM_PROMPT = `You are an English language tutor for beginner and intermediate students from Madagascar. You ONLY answer questions about English grammar, vocabulary, verb tenses, pronunciation and usage.
If the question is not related to learning English, respond: "Je peux uniquement aider avec l'apprentissage de l'anglais." (or in Malagasy: "Ny fanampiana ahy dia ny fiteny anglisy ihany.")
Always answer in the same language the student uses (French or Malagasy), but always show English examples with translations.
Be concise, encouraging, and use simple language. Format examples clearly.`;

export function renderTutor() {
  const container = document.createElement('div');
  container.className = 'tutor-page';

  const history  = [];
  let isLoading  = false;

  // Detect environment
  const _isHttps = location.protocol === 'https:';

  container.innerHTML = `
    <div class="tutor-layout">
      <header class="tutor-header">
        <button class="btn-back" id="btn-back">← Retour</button>
        <div class="tutor-header-title">
          <span class="tutor-header-icon">🤖</span>
          <div>
            <div class="tutor-title">Tutor anglais</div>
            <div class="tutor-subtitle" id="tutor-status">Vérification connexion…</div>
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
            <button class="tutor-suggestion" data-q="Quelle est la différence entre 'going to' et 'will' ?">Going to vs Will</button>
          </div>
        </div>
      </div>

      <div class="tutor-input-area">
        <div class="tutor-input-row">
          <textarea
            id="tutor-input"
            class="tutor-input"
            placeholder="Écris ta question en français ou malagasy… (ex: Comment utiliser 'will' ?)"
            rows="1"
          ></textarea>
          <button class="tutor-send-btn" id="btn-send" title="Envoyer">
            <span>➤</span>
          </button>
        </div>
        <div class="tutor-info" id="tutor-info">
          Vérification…
        </div>
      </div>
    </div>
  `;

  const messagesEl = container.querySelector('#tutor-messages');
  const inputEl    = container.querySelector('#tutor-input');
  const sendBtn    = container.querySelector('#btn-send');
  const statusEl   = container.querySelector('#tutor-status');
  const infoEl     = container.querySelector('#tutor-info');

  // ── Mode selection ──────────────────────────────────────────────────────────
  // 'groq'   → use Vercel /api/chat proxy (Groq cloud)
  // 'ollama' → use local Ollama
  // 'none'   → neither available
  let _mode = 'none';
  let _ollamaRetry = null;

  if (_isHttps) {
    // Vercel deployment → probe /api/chat
    checkGroq();
  } else {
    // localhost → try Ollama
    checkOllama();
  }

  async function checkGroq() {
    // Step 1: GET diagnostic probe — checks endpoint + key presence without calling Groq
    try {
      const probe = await fetch(GROQ_PROXY, {
        method: 'GET',
        signal: AbortSignal.timeout(5000),
      });

      if (probe.status === 404) {
        setStatus('offline', '🔴 Endpoint /api/chat introuvable');
        setInfo('La fonction serverless n\'est pas déployée. Vérifie que <code>api/chat.js</code> est présent et redéploie.');
        _mode = 'none';
        return;
      }

      const probeData = await probe.json().catch(() => ({}));
      console.log('[Tutor] /api/chat probe:', probeData);

      if (!probeData.groqKeyPresent) {
        setStatus('warn', '⚠️ Clé Groq non configurée');
        setInfo('Ajoutez <strong>GROQ_API_KEY</strong> dans Vercel → Settings → Environment Variables, puis redéployez.');
        _mode = 'none';
        return;
      }

      // Step 2: real ping to Groq via the proxy
      const res = await fetch(GROQ_PROXY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: 'ping' }] }),
        signal: AbortSignal.timeout(10000),
      });

      if (res.ok) {
        _mode = 'groq';
        setStatus('online', '🟢 Tutor IA en ligne (Groq)');
        setInfo('Propulsé par <strong>Groq</strong> (llama-3.1-8b-instant) · Cloud · Gratuit');
      } else {
        const errBody = await res.json().catch(() => ({}));
        setStatus('warn', `⚠️ Groq erreur ${res.status}`);
        setInfo(`Erreur serveur : <code>${(errBody.error || 'unknown').toString().substring(0, 120)}</code>`);
        _mode = 'none';
      }
    } catch (e) {
      setStatus('offline', '🔴 Tutor IA non disponible (réseau ?)');
      setInfo(`Vérifie ta connexion internet. <code>${(e.message || '').substring(0, 80)}</code>`);
      _mode = 'none';
    }
  }

  async function checkOllama() {
    clearTimeout(_ollamaRetry);
    try {
      const res = await fetch('http://localhost:11434/api/tags', {
        signal: AbortSignal.timeout(3000),
      });
      if (res.ok) {
        const data = await res.json();
        const models   = (data.models || []).map(m => m.name);
        const hasModel = models.some(m => m.startsWith('llama3.2'));
        if (hasModel) {
          _mode = 'ollama';
          setStatus('online', '🟢 Ollama connecté');
          setInfo('Propulsé par <strong>Ollama</strong> (llama3.2:3b) · Local · Hors ligne');
        } else {
          setStatus('warn', `⚠️ Modèle ${OLLAMA_MODEL} non trouvé`);
          setInfo('Commande : <code>ollama pull llama3.2:3b</code>');
          _mode = 'none';
          _ollamaRetry = setTimeout(checkOllama, 5000);
        }
      } else {
        setStatus('offline', '🔴 Ollama hors ligne — reconnexion dans 5 s…');
        setInfo('Lance <strong>avvia.bat</strong> pour démarrer Ollama.');
        _mode = 'none';
        _ollamaRetry = setTimeout(checkOllama, 5000);
      }
    } catch {
      setStatus('offline', '🔴 Ollama hors ligne — reconnexion dans 5 s…');
      setInfo('Lance <strong>avvia.bat</strong> pour démarrer Ollama.');
      _mode = 'none';
      _ollamaRetry = setTimeout(checkOllama, 5000);
    }
  }

  function setStatus(state, text) {
    statusEl.textContent = text;
    statusEl.className = `tutor-subtitle tutor-status-${state}`;
  }
  function setInfo(html) {
    infoEl.innerHTML = html;
  }

  // ── Events ──────────────────────────────────────────────────────────────────
  container.querySelector('#btn-back').addEventListener('click', () => {
    clearTimeout(_ollamaRetry);
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

  // ── Send & receive ──────────────────────────────────────────────────────────
  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text || isLoading) return;

    if (_mode === 'none') {
      const welcome = messagesEl.querySelector('.tutor-welcome');
      if (welcome) welcome.remove();
      appendError(
        _isHttps
          ? '⚠️ Le Tutor IA n\'est pas encore configuré.<br>Ajoutez <strong>GROQ_API_KEY</strong> dans les variables d\'environnement Vercel.'
          : '⚠️ Ollama n\'est pas lancé.<br>Démarrez <strong>avvia.bat</strong> sur ce PC.'
      );
      return;
    }

    const welcome = messagesEl.querySelector('.tutor-welcome');
    if (welcome) welcome.remove();

    inputEl.value = '';
    inputEl.style.height = 'auto';
    isLoading  = true;
    sendBtn.disabled = true;

    appendMessage('user', text);
    history.push({ role: 'user', content: text });

    const thinkingEl = appendThinking();

    try {
      let reply;
      if (_mode === 'groq')   reply = await callGroq();
      if (_mode === 'ollama') reply = await callOllama();

      thinkingEl.remove();
      appendMessage('assistant', reply);
      history.push({ role: 'assistant', content: reply });

    } catch (err) {
      thinkingEl.remove();
      if (_mode === 'ollama' && (err.name === 'AbortError' || err.message?.includes('fetch'))) {
        _mode = 'none';
        setStatus('offline', '🔴 Ollama hors ligne');
        _ollamaRetry = setTimeout(checkOllama, 5000);
        appendError('⚠️ Ollama ne répond plus. Lance <strong>avvia.bat</strong> et réessaie.');
      } else {
        appendError(`Erreur : ${err.message}`);
      }
    } finally {
      isLoading = false;
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  function buildMessages() {
    return [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.slice(-16),  // last 8 exchanges for context
    ];
  }

  async function callGroq() {
    const res = await fetch(GROQ_PROXY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: buildMessages() }),
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      throw new Error(d.error || `HTTP ${res.status}`);
    }
    const data = await res.json();
    return data.choices?.[0]?.message?.content || '(réponse vide)';
  }

  async function callOllama() {
    const res = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages: buildMessages(),
        stream: false,
        options: { temperature: 0.4, num_predict: 512 },
      }),
      signal: AbortSignal.timeout(60000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} — ${res.statusText}`);
    const data = await res.json();
    return data.message?.content || '(réponse vide)';
  }

  // ── DOM helpers ─────────────────────────────────────────────────────────────
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
    const div = document.createElement('div');
    div.className = 'tutor-welcome';
    div.innerHTML = `
      <div class="tutor-welcome-icon">🎓</div>
      <h2>Conversation effacée</h2>
      <p>Prêt pour une nouvelle conversation !</p>
    `;
    messagesEl.appendChild(div);
  }

  function formatReply(text) {
    return text
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g,     '<em>$1</em>')
      .replace(/`([^`]+)`/g,     '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }

  return container;
}
