# ☁️ Configuration Supabase (comptes personnels + sync cloud)

Guide pas-à-pas. Tout est **gratuit**. Durée : ~5-10 minutes.

Le PIN n'est **jamais** stocké en clair : l'app envoie un hash SHA-256.
La table est **verrouillée** : on y accède uniquement via des fonctions
sécurisées qui exigent le nom + le PIN. La clé publique seule ne permet
donc pas de lire ou écraser les profils.

---

## Étape 1 — Créer un projet Supabase (gratuit)

1. Aller sur **https://supabase.com** → *Start your project* → se connecter
   (GitHub ou email).
2. Cliquer **New project**.
   - **Name** : `english-academy` (au choix)
   - **Database Password** : choisir un mot de passe fort et **le noter**
     (sert uniquement à l'administration, pas à l'app)
   - **Region** : choisir la plus proche (ex. *West EU (Paris)*)
3. Attendre ~2 min que le projet soit prêt.

## Étape 2 — Créer la table + les fonctions sécurisées

1. Dans le projet → menu de gauche → **SQL Editor** → *New query*
2. Copier-coller **tout** le bloc SQL ci-dessous, puis cliquer **Run**.

```sql
-- Table des profils (PIN haché, jamais en clair)
create table if not exists profiles (
  id          text primary key,
  name        text not null,
  pin_hash    text not null,
  data        jsonb not null,
  updated_at  timestamptz default now()
);

-- RLS activé SANS politique anon => accès direct à la table BLOQUÉ.
alter table profiles enable row level security;

-- Lecture d'un profil : seulement si name + pin_hash correspondent.
create or replace function get_profile(p_name text, p_pin_hash text)
returns jsonb
language sql
security definer
set search_path = public
as $$
  select data from profiles
  where name = p_name and pin_hash = p_pin_hash
  limit 1;
$$;

-- Création / mise à jour : on ne peut écraser une ligne existante que si
-- le pin_hash correspond (impossible d'écraser le profil d'autrui).
create or replace function upsert_profile(
  p_id text, p_name text, p_pin_hash text, p_data jsonb
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into profiles (id, name, pin_hash, data, updated_at)
  values (p_id, p_name, p_pin_hash, p_data, now())
  on conflict (id) do update
    set name = excluded.name,
        data = excluded.data,
        updated_at = now()
  where profiles.pin_hash = excluded.pin_hash;
end;
$$;

-- Suppression : seulement avec le bon pin_hash.
create or replace function delete_profile(p_id text, p_pin_hash text)
returns void
language sql
security definer
set search_path = public
as $$
  delete from profiles where id = p_id and pin_hash = p_pin_hash;
$$;

-- Autoriser l'app (rôle anon) à appeler UNIQUEMENT ces fonctions.
grant execute on function get_profile(text, text)               to anon;
grant execute on function upsert_profile(text, text, text, jsonb) to anon;
grant execute on function delete_profile(text, text)             to anon;
```

Si « Success. No rows returned » s'affiche → c'est bon. ✅

## Étape 3 — Récupérer les clés

1. Menu de gauche → **Project Settings** (roue dentée) → **API**
2. Copier :
   - **Project URL** (ex. `https://abcdefgh.supabase.co`)
   - **anon public** key (longue chaîne ; elle est *publique par
     conception*, sans danger côté client)

## Étape 4 — Brancher l'app

Ouvrir `src/config.js` et remplir :

```js
export const SUPABASE_URL = 'https://abcdefgh.supabase.co'; // votre Project URL
export const SUPABASE_KEY = 'eyJhbGciOi...';                // votre clé anon public
```

Puis `commit` + `push` + déploiement Vercel.

## Étape 5 — Empêcher la mise en pause (keep-alive)

Les projets gratuits se mettent en pause après **7 jours sans activité**.
Un workflow GitHub Actions (`.github/workflows/keepalive.yml`, déjà inclus)
fait une micro-requête tous les 3 jours pour garder le projet actif.

Pour l'activer, ajouter 2 secrets dans le dépôt GitHub :

1. GitHub → le dépôt → **Settings** → **Secrets and variables** →
   **Actions** → **New repository secret**
2. Créer :
   - `SUPABASE_URL` = votre Project URL
   - `SUPABASE_ANON_KEY` = votre clé anon public

C'est tout : le projet ne se mettra plus en pause.

---

## Vérification

1. Ouvrir l'app (URL de production), créer un profil → un PIN est demandé.
2. Sur un **autre appareil/navigateur** : *Récupérer un profil* → entrer
   le même prénom + PIN → les progrès reviennent. ☁️

## Limites honnêtes (à connaître)

- Le PIN à 4 chiffres = 10 000 combinaisons. Le hachage empêche la lecture
  en clair, mais ce n'est pas une sécurité « bancaire ». Convient pour des
  données à faible enjeu (progrès d'apprentissage).
- Ne stockez que des **prénoms** + progrès. Jamais de noms de famille,
  emails ou données sensibles.
- Deux enfants avec le même prénom **et** le même PIN entreraient en
  collision → encourager des prénoms/PIN distincts.
- En cas de panne/pause Supabase, l'app **continue de fonctionner en
  local** ; seule la synchro entre appareils est suspendue.
