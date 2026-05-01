# 📚 Guida installazione — English Academy Madagascar

## Requisiti

- Windows 10 o 11
- Connessione internet **solo durante l'installazione** (poi funziona offline)

---

## Installazione (una volta sola per PC)

### Passo 1 — Installa Python

1. Vai su → **https://www.python.org/downloads/**
2. Clicca **"Download Python"**
3. Durante l'installazione spunta obbligatoriamente **"Add Python to PATH"**
4. Completa l'installazione

### Passo 2 — Installa Ollama

1. Vai su → **https://ollama.com/download**
2. Clicca **"Download for Windows"**
3. Installa normalmente (doppio clic sul file scaricato)

### Passo 3 — Installa l'app

1. Copia la cartella **`english-academy-madagascar`** sul PC (chiavetta USB o download)
2. Apri la cartella
3. Fai doppio clic su **`installa.bat`**

Lo script fa tutto in automatico:
- ✅ Controlla Python e Ollama
- ✅ Scarica il modello AI **llama3.2:3b** (~2 GB) — *richiede ~10 minuti*
- ✅ Configura l'avvio automatico all'accensione del PC
- ✅ Crea un collegamento **"English Academy"** sul Desktop

---

## Utilizzo quotidiano

**Non serve fare nulla.** L'app parte automaticamente all'accensione del PC.

Se il browser non si apre da solo, clicca il collegamento **"English Academy"** sul Desktop.

---

## Funziona senza internet?

✅ **Sì, completamente offline** dopo l'installazione.

| Funzionalità | Offline |
|---|---|
| Grammatica, teoria, lezioni | ✅ |
| Esercizi interattivi | ✅ |
| Audio e pronuncia | ✅ |
| Vocabolario con flashcard | ✅ |
| Tutor IA (chatbot) | ✅ |

---

## Problemi frequenti

| Problema | Soluzione |
|---|---|
| Il Tutor IA mostra "disponibile solo in locale" | Aspetta 10 secondi dopo l'accensione, poi ricarica la pagina |
| Pagina bianca | Clicca di nuovo su "English Academy" sul Desktop |
| "Modello non trovato" | Apri un terminale e lancia: `ollama pull llama3.2:3b` |
| installa.bat dà errori | Fai clic destro → **Esegui come amministratore** |

---

## Struttura cartella

```
english-academy-madagascar/
├── installa.bat          ← Esegui UNA SOLA VOLTA per configurare
├── avvia.bat             ← Avvio manuale (di solito non serve)
├── avvia_silent.vbs      ← Avvio silenzioso (usato in automatico)
├── INSTALLAZIONE.md      ← Questa guida
├── index.html
├── public/audio/         ← File audio
└── src/                  ← Codice sorgente
```
