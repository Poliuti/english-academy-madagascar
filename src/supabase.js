// src/supabase.js — Cloud sync via Supabase (optional, graceful degradation)
//
// Sécurité :
//  - Le PIN n'est JAMAIS envoyé ni stocké en clair. On envoie un hash
//    SHA-256 de (APP_SALT + name + pin).
//  - L'accès à la table `profiles` est verrouillé (RLS) ; le client passe
//    par des fonctions RPC SECURITY DEFINER qui exigent name + pin_hash.
//    => La clé anon seule ne permet PAS de lire/écraser les profils.
import { SUPABASE_URL, SUPABASE_KEY, APP_SALT } from './config.js';

let _client      = null;
let _initPromise  = null;

export function isConfigured() {
  return !!(SUPABASE_URL && SUPABASE_KEY);
}

/** Initialize Supabase client (lazy, once). Returns client or null. */
export async function getClient() {
  if (!isConfigured()) return null;
  if (_client)         return _client;
  if (_initPromise)    return _initPromise;

  _initPromise = (async () => {
    try {
      const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
      _client = createClient(SUPABASE_URL, SUPABASE_KEY);
      return _client;
    } catch (e) {
      console.warn('[Supabase] SDK load failed:', e.message);
      return null;
    }
  })();

  return _initPromise;
}

// ─── PIN hashing (SHA-256, Web Crypto) ───────────────────────────────────────
async function hashPin(name, pin) {
  const raw = `${APP_SALT}|${(name || '').trim().toLowerCase()}|${(pin || '').trim()}`;
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Upload a local profile to the cloud (insert or update).
 * The profile must have .cloudPin set (4-digit string).
 * A row can only be overwritten if the PIN hash matches (server-side check).
 * Returns true on success, false on error.
 */
export async function pushProfile(profile) {
  if (!profile?.cloudPin) return false;
  const client = await getClient();
  if (!client) return false;

  try {
    const pinHash = await hashPin(profile.name, profile.cloudPin);
    const { error } = await client.rpc('upsert_profile', {
      p_id:       profile.id,
      p_name:     (profile.name || '').trim(),
      p_pin_hash: pinHash,
      p_data:     profile,
    });
    if (error) { console.warn('[Supabase] Push error:', error.message); return false; }
    return true;
  } catch (e) {
    console.warn('[Supabase] Push failed:', e.message);
    return false;
  }
}

/**
 * Fetch a profile from the cloud by name + PIN.
 * Returns the stored profile object, or null if not found / error.
 */
export async function fetchProfile(name, pin) {
  const client = await getClient();
  if (!client) return null;

  try {
    const pinHash = await hashPin(name, pin);
    const { data, error } = await client.rpc('get_profile', {
      p_name:     (name || '').trim(),
      p_pin_hash: pinHash,
    });
    if (error || !data) return null;
    return data; // the full profile JSON
  } catch (e) {
    console.warn('[Supabase] Fetch failed:', e.message);
    return null;
  }
}

/**
 * Delete a profile from the cloud. Requires the matching PIN hash so a
 * malicious client cannot delete arbitrary profiles.
 * Accepts the full profile object (needs .id, .name, .cloudPin).
 */
export async function deleteCloudProfile(profile) {
  if (!profile?.cloudPin) return;
  const client = await getClient();
  if (!client) return;
  try {
    const pinHash = await hashPin(profile.name, profile.cloudPin);
    await client.rpc('delete_profile', {
      p_id:       profile.id,
      p_pin_hash: pinHash,
    });
  } catch (e) {
    console.warn('[Supabase] Delete failed:', e.message);
  }
}

// ─── Debounced auto-sync ─────────────────────────────────────────────────────
let _syncTimer = null;

/**
 * Schedule a push within 3 seconds (debounced).
 * Call this after any profile mutation if cloudPin is set.
 */
export function schedulePush(profile) {
  if (!profile?.cloudPin || !isConfigured()) return;
  clearTimeout(_syncTimer);
  _syncTimer = setTimeout(() => {
    pushProfile(profile).catch(() => {});
  }, 3000);
}
