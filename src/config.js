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

export const SUPABASE_URL = 'https://xsfyzmytzlqfqlzqdqxq.supabase.co';   // ex: 'https://abcdefgh.supabase.co'
export const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzZnl6bXl0emxxZnFsenFkcXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMzEzMTQsImV4cCI6MjA5NDgwNzMxNH0.VMTV7J47FW2Wh7O8MDBWoAsAX7PrX-7QPIf6apb0cPM';        // clé "anon public" (safe à exposer côté client)

// Sel applicatif pour le hachage du PIN (le PIN n'est JAMAIS stocké en clair).
// Vous pouvez changer cette chaîne, mais une fois en production NE LA CHANGEZ
// PLUS (sinon les anciens PIN ne correspondront plus). Ce n'est pas un secret.
export const APP_SALT = 'eam-mg-2024-v1';

// ─── FEATURE FLAGS ────────────────────────────────────────────────────────────
// Imposta su TRUE per abilitare la modalità competitiva multiplayer,
// FALSE per nasconderla completamente dall'interfaccia.
// Una sola riga da cambiare per abilitare o disabilitare tutto.
export const ENABLE_COMPETITIVE_MODE = true;

// ─── CODE PIN ADMIN TRADUCTIONS ───────────────────────────────────────────────
// Code à 4 chiffres demandé pour accéder à la page de gestion des
// traductions malgaches (#mgadmin). Seuls les parents / enseignants
// devraient le connaître. Changez-le ici.
export const MG_ADMIN_PIN = '2024';
// ─────────────────────────────────────────────────────────────────────────────
