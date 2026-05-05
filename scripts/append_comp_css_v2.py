#!/usr/bin/env python3
"""Append v2 competitive CSS additions (hero icon, MCQ, select)."""
import os

css = """

/* ── COMPETITIVE V2 ADDITIONS (hero icon, MCQ, select) ─────────────────── */

/* Hero icon with glow (Task 4) */
.comp-hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0 8px;
  height: 110px;
}
.comp-hero-icon {
  font-size: 5rem;
  line-height: 1;
  position: relative;
  z-index: 2;
  animation: bounce 2.2s ease-in-out infinite;
  filter: drop-shadow(0 6px 12px rgba(245, 158, 11, .35));
}
.comp-hero-glow {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245, 158, 11, .35) 0%, rgba(245, 158, 11, 0) 70%);
  z-index: 1;
  animation: pulseGlow 2.4s ease-in-out infinite;
}
@keyframes pulseGlow {
  0%, 100% { transform: scale(1);   opacity: .8; }
  50%      { transform: scale(1.15); opacity: 1; }
}

/* Select dropdown for sub-topic / sub-theme (Task 5) */
.comp-select {
  width: 100%;
  padding: 12px 14px;
  border: 2px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: var(--text);
  font-size: .95rem;
  font-family: var(--font);
  font-weight: 600;
  cursor: pointer;
  transition: border-color .18s;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23D97706' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 38px;
}
.comp-select:focus { outline: none; border-color: var(--primary); }

/* Difficulty note */
.comp-diff-note {
  font-size: .82rem;
  color: var(--text-muted);
  text-align: center;
  margin-top: 4px;
  padding: 6px 10px;
  background: var(--bg);
  border-radius: var(--radius-sm);
}
.comp-diff-note strong { color: var(--primary-dark); }

/* MCQ buttons (Task 2) */
.comp-mcq-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.comp-mcq-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: var(--card);
  border: 2px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font);
  color: var(--text);
  cursor: pointer;
  transition: all .15s;
  text-align: left;
  width: 100%;
}
.comp-mcq-btn:hover:not(:disabled) {
  border-color: var(--primary);
  background: var(--primary-light);
  transform: translateX(2px);
}
.comp-mcq-btn:disabled { cursor: default; }
.comp-mcq-btn.mcq-correct {
  border-color: var(--success);
  background: var(--success-light);
  color: var(--success);
}
.comp-mcq-btn.mcq-wrong {
  border-color: var(--error);
  background: var(--error-light);
  color: var(--error);
}
.comp-mcq-letter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary-dark);
  font-weight: 900;
  font-size: .95rem;
  flex-shrink: 0;
}
.comp-mcq-btn.mcq-correct .comp-mcq-letter { background: var(--success); color: #fff; }
.comp-mcq-btn.mcq-wrong   .comp-mcq-letter { background: var(--error);   color: #fff; }
.comp-mcq-text { flex: 1; word-break: break-word; }

/* Result hint (only shown post-answer) */
.comp-result-hint {
  font-size: .85rem;
  color: var(--text-muted);
  font-style: italic;
  margin-top: 4px;
}

@media (max-width: 480px) {
  .comp-hero { height: 90px; }
  .comp-hero-icon { font-size: 4rem; }
  .comp-hero-glow { width: 110px; height: 110px; }
  .comp-mcq-btn { padding: 10px 12px; font-size: .92rem; }
  .comp-mcq-letter { width: 28px; height: 28px; font-size: .85rem; }
}
"""

target = os.path.join('src', 'styles', 'main.css')
with open(target, 'a', encoding='utf-8') as f:
    f.write(css)
print('CSS v2 appended OK')
