// ─── src/config.js ────────────────────────────────────────────────────────────
// Configuration pour la synchronisation cloud (Supabase).
//
// ÉTAPES POUR ACTIVER LA SYNC CLOUD :
//   1. Créez un projet GRATUIT sur https://supabase.com
//   2. Dans votre projet Supabase → Settings → API, copiez :
//        - "Project URL"
//        - "anon public" key
//   3. Collez-les ci-dessous à la place des chaînes vides.
//   4. Dans l'éditeur SQL de Supabase, exécutez :
//
//      CREATE TABLE profiles (
//        id         TEXT PRIMARY KEY,
//        name       TEXT NOT NULL,
//        pin        TEXT NOT NULL,
//        data       JSONB NOT NULL,
//        updated_at TIMESTAMPTZ DEFAULT NOW()
//      );
//      ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
//      CREATE POLICY "public_all" ON profiles FOR ALL USING (true) WITH CHECK (true);
//
//   5. Déployez sur Vercel — la sync fonctionnera automatiquement.
//
// Si laissé vide, l'app fonctionne normalement en mode local (localStorage).
// ─────────────────────────────────────────────────────────────────────────────

export const SUPABASE_URL = '';   // ex: 'https://abcdefgh.supabase.co'
export const SUPABASE_KEY = '';   // clé "anon public" (safe à exposer côté client)
