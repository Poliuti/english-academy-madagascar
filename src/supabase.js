// src/supabase.js — Cloud sync via Supabase (optional, graceful degradation)
import { SUPABASE_URL, SUPABASE_KEY } from './config.js';

let _client     = null;
let _initDone   = false;
let _initPromise = null;

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
      // Import from CDN — works with vanilla ES modules, no build step needed
      const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
      _client = createClient(SUPABASE_URL, SUPABASE_KEY);
      _initDone = true;
      return _client;
    } catch (e) {
      console.warn('[Supabase] SDK load failed:', e.message);
      return null;
    }
  })();

  return _initPromise;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Upload a local profile to the cloud.
 * The profile must have .cloudPin set (4-digit string).
 * Uses UPSERT so it also works as an update.
 * Returns true on success, false on error.
 */
export async function pushProfile(profile) {
  if (!profile?.cloudPin) return false;
  const client = await getClient();
  if (!client) return false;

  try {
    const { error } = await client.from('profiles').upsert(
      {
        id:         profile.id,
        name:       profile.name,
        pin:        profile.cloudPin,
        data:       profile,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'id' }
    );
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
    const { data, error } = await client
      .from('profiles')
      .select('data, updated_at')
      .eq('name', name.trim())
      .eq('pin', pin.trim())
      .maybeSingle();

    if (error || !data) return null;
    return data.data;  // the full profile JSON
  } catch (e) {
    console.warn('[Supabase] Fetch failed:', e.message);
    return null;
  }
}

/**
 * Delete a profile from the cloud (called when deleting locally + PIN known).
 */
export async function deleteCloudProfile(id) {
  const client = await getClient();
  if (!client) return;
  try {
    await client.from('profiles').delete().eq('id', id);
  } catch {}
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
