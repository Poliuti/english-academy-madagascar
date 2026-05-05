#!/usr/bin/env python3
"""Append competitive CSS to main.css"""
import os

css = """

/* ═══════════════════════════════════════════════════════════════════════════
   COMPETITIVE MODE  (.comp-*)
   ═══════════════════════════════════════════════════════════════════════════ */

.comp-page {
  min-height: 100vh; background: var(--bg);
  display: flex; flex-direction: column; align-items: center;
  padding: 20px 16px 40px; gap: 16px;
}
.comp-back { align-self: flex-start; margin-bottom: 4px; }

/* ── SETUP ─────────────────────────────────────────────────────────────── */
.comp-setup-card {
  background: var(--card); border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg); padding: 28px 24px 32px;
  width: 100%; max-width: 520px; display: flex; flex-direction: column; gap: 24px;
}
.comp-setup-header { text-align: center; }
.comp-setup-icon   { font-size: 3rem; line-height: 1; margin-bottom: 8px; }
.comp-setup-title  { font-size: 1.6rem; font-weight: 900; color: var(--primary-dark); }
.comp-setup-sub    { color: var(--text-muted); font-size: .95rem; margin-top: 4px; }
.comp-section      { display: flex; flex-direction: column; gap: 10px; }
.comp-section-title {
  font-size: .9rem; font-weight: 700; color: var(--text-muted);
  text-transform: uppercase; letter-spacing: .05em;
}
.comp-players-list { display: flex; flex-direction: column; gap: 8px; }
.comp-player-row   { display: flex; align-items: center; gap: 10px; }
.comp-player-num   { font-size: 1.3rem; width: 28px; text-align: center; }
.comp-player-input {
  flex: 1; border: 2px solid var(--border); border-radius: var(--radius-sm);
  padding: 10px 14px; font-size: .95rem; font-family: var(--font);
  background: var(--bg); color: var(--text); transition: border-color .18s;
}
.comp-player-input:focus { outline: none; border-color: var(--primary); }
.comp-options { display: flex; flex-wrap: wrap; gap: 8px; }
.comp-opt {
  flex: 1 1 auto; min-width: 90px; padding: 10px 12px;
  border: 2px solid var(--border); border-radius: var(--radius-sm);
  background: var(--card); color: var(--text);
  font-size: .9rem; font-weight: 600; font-family: var(--font);
  cursor: pointer; transition: all .18s; text-align: center;
}
.comp-opt:hover  { border-color: var(--primary); background: var(--primary-light); }
.comp-opt.active { border-color: var(--primary-dark); background: var(--primary); color: #fff; }
.comp-start-btn {
  width: 100%; padding: 14px; background: var(--primary); color: #fff;
  border: none; border-radius: var(--radius); font-size: 1.05rem; font-weight: 800;
  font-family: var(--font); cursor: pointer; transition: background .18s, transform .1s;
}
.comp-start-btn:hover  { background: var(--primary-dark); }
.comp-start-btn:active { transform: scale(.97); }
.comp-start-error { color: var(--error); font-size: .9rem; text-align: center; min-height: 1.2em; }

/* ── SCOREBOARD ────────────────────────────────────────────────────────── */
.comp-scoreboard {
  display: flex; gap: 10px; width: 100%; max-width: 560px;
  justify-content: center; flex-wrap: wrap;
}
.comp-score-card {
  flex: 1 1 100px; max-width: 130px; background: var(--card);
  border: 2px solid var(--border); border-radius: var(--radius);
  padding: 10px 12px; text-align: center; transition: border-color .18s, box-shadow .18s;
}
.comp-score-card.current { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-light); }
.comp-score-name {
  font-size: .82rem; font-weight: 700; color: var(--text-muted);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.comp-score-pts { font-size: 1.2rem; font-weight: 900; color: var(--primary-dark); margin-top: 2px; }

/* ── GAME CARD ─────────────────────────────────────────────────────────── */
.comp-game-card {
  background: var(--card); border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg); padding: 22px 20px 24px;
  width: 100%; max-width: 560px; display: flex; flex-direction: column; gap: 16px;
}
.comp-game-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.comp-qnum { font-size: .85rem; font-weight: 700; color: var(--text-muted); white-space: nowrap; }
.comp-timer-wrap { display: flex; align-items: center; gap: 8px; flex: 1; justify-content: flex-end; }
.comp-timer-track { flex: 1; max-width: 160px; height: 8px; background: var(--border); border-radius: 99px; overflow: hidden; }
.comp-timer-bar { height: 100%; background: var(--primary); border-radius: 99px; transition: width .9s linear, background .3s; }
.comp-timer-val { font-size: 1rem; font-weight: 900; color: var(--primary-dark); min-width: 24px; text-align: right; }
.comp-player-banner { background: var(--primary-light); border-radius: var(--radius-sm); padding: 10px 16px; font-size: .95rem; color: var(--primary-dark); text-align: center; }
.comp-question-area { min-height: 80px; }
.comp-vocab-q, .comp-grammar-q { display: flex; flex-direction: column; gap: 6px; }
.comp-q-label { font-size: .82rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: .04em; }
.comp-q-word  { font-size: 1.8rem; font-weight: 900; color: var(--text); line-height: 1.2; }
.comp-q-type  { font-size: .82rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; }
.comp-q-text  { font-size: 1.1rem; font-weight: 600; color: var(--text); }
.comp-q-hint  { font-size: .85rem; color: var(--text-muted); font-style: italic; }
.comp-answer-area { display: flex; flex-direction: column; gap: 10px; }
.comp-answer-input {
  width: 100%; padding: 12px 16px; border: 2px solid var(--border);
  border-radius: var(--radius-sm); font-size: 1rem; font-family: var(--font);
  color: var(--text); background: var(--bg); transition: border-color .18s;
}
.comp-answer-input:focus { outline: none; border-color: var(--primary); }
.comp-submit-btn {
  padding: 12px; background: var(--primary); color: #fff; border: none;
  border-radius: var(--radius-sm); font-size: 1rem; font-weight: 700;
  font-family: var(--font); cursor: pointer; transition: background .18s;
}
.comp-submit-btn:hover { background: var(--primary-dark); }
.comp-result { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; border-radius: var(--radius); text-align: center; }
.comp-result.correct { background: var(--success-light); }
.comp-result.wrong   { background: #F3F4F6; }
.comp-result-icon { font-size: 1.8rem; }
.comp-result-text { font-size: .95rem; color: var(--text); }
.comp-result-text strong { color: var(--success); }
.comp-result.wrong .comp-result-text strong { color: var(--text); }
.comp-next-btn {
  margin-top: 4px; padding: 10px 24px; background: var(--primary); color: #fff;
  border: none; border-radius: var(--radius-sm); font-size: .95rem; font-weight: 700;
  font-family: var(--font); cursor: pointer; transition: background .18s;
}
.comp-next-btn:hover { background: var(--primary-dark); }

/* ── END SCREEN ────────────────────────────────────────────────────────── */
.comp-end-card {
  background: var(--card); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
  padding: 32px 24px; width: 100%; max-width: 520px;
  display: flex; flex-direction: column; align-items: center; gap: 20px; text-align: center;
}
.comp-end-trophy { font-size: 3.5rem; animation: bounce .8s infinite; }
.comp-end-title  { font-size: 1.6rem; font-weight: 900; color: var(--primary-dark); }
.comp-end-msg    { color: var(--text-muted); font-size: .95rem; }
.comp-rankings   { width: 100%; display: flex; flex-direction: column; gap: 10px; }
.comp-rank-row   { display: flex; align-items: center; gap: 10px; background: var(--bg); border-radius: var(--radius-sm); padding: 10px 14px; }
.comp-rank-row.winner { background: var(--primary-light); border: 2px solid var(--primary); }
.comp-rank-medal { font-size: 1.4rem; width: 28px; text-align: center; }
.comp-rank-name  { flex: 1; font-weight: 700; text-align: left; font-size: .95rem; }
.comp-rank-score { font-weight: 900; color: var(--primary-dark); white-space: nowrap; }
.comp-rank-bar-wrap { width: 80px; height: 6px; background: var(--border); border-radius: 99px; overflow: hidden; }
.comp-rank-bar   { height: 100%; background: var(--primary); border-radius: 99px; }
.comp-end-stats  { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; width: 100%; }
.comp-end-stat   { display: flex; flex-direction: column; align-items: center; gap: 2px; flex: 1 1 80px; }
.comp-end-stat-val   { font-size: 1.5rem; font-weight: 900; color: var(--primary-dark); }
.comp-end-stat-label { font-size: .8rem; color: var(--text-muted); }
.comp-end-actions { display: flex; gap: 12px; width: 100%; flex-wrap: wrap; }
.comp-play-again, .comp-home {
  flex: 1 1 120px; padding: 12px 16px; border-radius: var(--radius-sm);
  font-size: .95rem; font-weight: 700; font-family: var(--font);
  cursor: pointer; border: none; transition: background .18s;
}
.comp-play-again { background: var(--primary); color: #fff; }
.comp-play-again:hover { background: var(--primary-dark); }
.comp-home { background: var(--bg); color: var(--text); border: 2px solid var(--border); }
.comp-home:hover { border-color: var(--primary); }

/* ── Dashboard competitive button ──────────────────────────────────────── */
.quick-btn-competitive { background: linear-gradient(135deg, #F59E0B, #EF4444); color: #fff; border: none; }
.quick-btn-competitive:hover { background: linear-gradient(135deg, #D97706, #DC2626); color: #fff; }

@media (max-width: 480px) {
  .comp-setup-card, .comp-game-card, .comp-end-card { padding: 18px 14px; }
  .comp-q-word  { font-size: 1.4rem; }
  .comp-rank-bar-wrap { display: none; }
  .comp-scoreboard { gap: 6px; }
  .comp-score-card { padding: 8px; }
  .comp-score-pts  { font-size: 1rem; }
}
"""

target = os.path.join('src', 'styles', 'main.css')
with open(target, 'a', encoding='utf-8') as f:
    f.write(css)
print('CSS appended OK, lines:', len(css.splitlines()))
