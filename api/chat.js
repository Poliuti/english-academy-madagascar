// api/chat.js — Vercel serverless function: Groq API proxy
// The GROQ_API_KEY env variable is set in Vercel dashboard (never exposed to client).

export default async function handler(req, res) {
  // CORS for same-origin (Vercel) and localhost dev
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // Diagnostic probe: GET /api/chat → returns key presence (never the value)
  if (req.method === 'GET') {
    const present = !!process.env.GROQ_API_KEY;
    return res.status(200).json({
      endpoint: 'ok',
      groqKeyPresent: present,
      keyLength: present ? process.env.GROQ_API_KEY.length : 0,
      runtime: 'vercel-serverless',
    });
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.GROQ_API_KEY;
  // Temporary diagnostic log (server only — never exposes the value)
  console.log('[api/chat] GROQ key present:', !!apiKey, '| length:', apiKey ? apiKey.length : 0);

  if (!apiKey) {
    return res.status(503).json({
      error: 'GROQ_API_KEY not configured on Vercel',
      hint: 'Add the env var in Vercel → Settings → Environment Variables (Production + Preview), then redeploy.',
    });
  }

  let messages;
  try {
    messages = req.body?.messages;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Missing messages array' });
    }
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model:       'llama-3.1-8b-instant',  // fast + free Groq model
        messages,
        max_tokens:  600,
        temperature: 0.4,
      }),
    });

    const data = await groqRes.json();

    if (!groqRes.ok) {
      return res.status(groqRes.status).json({ error: data?.error?.message || 'Groq error' });
    }

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ error: `Proxy error: ${err.message}` });
  }
}
