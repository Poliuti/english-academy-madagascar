/**
 * Theme management — light / dark
 * Stores preference in localStorage under 'ea_theme'.
 * Falls back to OS preference (prefers-color-scheme).
 */

const KEY = 'ea_theme';

export function initTheme() {
  const saved = localStorage.getItem(KEY);
  apply(saved || (prefersDark() ? 'dark' : 'light'));

  // Follow system changes only when no manual override
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => {
      if (!localStorage.getItem(KEY)) apply(e.matches ? 'dark' : 'light');
    });
}

export function toggleTheme() {
  const current = document.documentElement.dataset.theme || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem(KEY, next);
  apply(next);
  return next;
}

export function isDark() {
  return document.documentElement.dataset.theme === 'dark';
}

// ─── internal ─────────────────────────────────────────────────────────────────

function apply(theme) {
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = theme === 'dark' ? '#1A1612' : '#F59E0B';
}

function prefersDark() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}
