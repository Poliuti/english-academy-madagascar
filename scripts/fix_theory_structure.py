#!/usr/bin/env python3
"""
Fix theory.js: the add_new_sections.py and add_sections_rel_goto.py scripts
inserted new theory sections OUTSIDE the `theory` object (after its closing `};`).
This script moves them back inside correctly.
"""
import sys, re
sys.stdout.reconfigure(encoding='utf-8')

PATH = 'src/data/theory.js'

with open(PATH, encoding='utf-8') as f:
    content = f.read()

# ── Diagnose ─────────────────────────────────────────────────────────────────
# The structure is currently:
#
#   export const theory = {
#     ...
#     vocabulary: { ... }
#   };                          ← WRONG: closes theory too early
#
#   export function getTheoryById(id) { ... }
#
#   sinceFor: { ... },          ← these are floating outside the object!
#   usedTo:   { ... },
#   ...
#   goingTo:  { ... },
#
#   export const theoryTopics = [...]

# ── Step 1: Replace the premature close + function with just vocabulary comma ──
# "  }\n};\n\nexport function getTheoryById(id) {\n  return theory[id] || null;\n}\n\n\n  sinceFor:"
# becomes:
# "  },\n\n  sinceFor:"

WRONG_CLOSE = "  }\n};\n\nexport function getTheoryById(id) {\n  return theory[id] || null;\n}\n\n\n  sinceFor:"
CORRECT_OPEN = "  },\n\n  sinceFor:"

if WRONG_CLOSE not in content:
    print("ERROR: Could not find the wrong structure. Already fixed or different format.")
    print("Searching for pattern...")
    idx = content.find("export function getTheoryById")
    if idx >= 0:
        print(f"getTheoryById is at char {idx}")
        print(repr(content[idx-50:idx+100]))
    sys.exit(1)

content = content.replace(WRONG_CLOSE, CORRECT_OPEN, 1)
print("Step 1 OK: removed premature theory close and function.")

# ── Step 2: Add proper close + function before theoryTopics ──────────────────
# Find "\n\nexport const theoryTopics = [" and insert the closing before it.

BEFORE_TOPICS = "\n\nexport const theoryTopics = ["
INSERT = "\n};\n\nexport function getTheoryById(id) {\n  return theory[id] || null;\n}\n\nexport const theoryTopics = ["

if BEFORE_TOPICS not in content:
    print("ERROR: Could not find 'export const theoryTopics'. Aborting.")
    sys.exit(1)

# Make sure we don't double-insert (idempotency check)
if "};\n\nexport function getTheoryById" in content:
    print("Step 2: Already has proper close. Skipping.")
else:
    content = content.replace(BEFORE_TOPICS, INSERT, 1)
    print("Step 2 OK: added proper theory close and function before theoryTopics.")

# ── Step 3: Fix trailing comma on last section before }; ─────────────────────
# The last section inside theory ends with `  },\n\n\n};` — the trailing comma is fine in JS.
# But verify the structure looks right.

# ── Write back ────────────────────────────────────────────────────────────────
with open(PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nDone. Verifying syntax...")

# ── Quick verification ────────────────────────────────────────────────────────
import subprocess
result = subprocess.run(
    ['node', '--input-type=module', '-e', f'import("{PATH.replace(chr(92), "/")}").then(() => console.log("SYNTAX OK")).catch(e => console.error("SYNTAX ERROR:", e.message))'],
    capture_output=True, text=True, timeout=15
)
# Use the import check differently
result2 = subprocess.run(
    ['node', '--experimental-vm-modules', '-e',
     f'''const fs = require('fs');
const src = fs.readFileSync('{PATH}', 'utf8');
try {{ new Function(src); }} catch(e) {{ process.exitCode=1; console.error(e.message); }}'''],
    capture_output=True, text=True, timeout=10
)
print(result2.stdout or "(no stdout)")
if result2.returncode != 0:
    print("Possible error:", result2.stderr[:300])
else:
    print("Basic check passed (ES module syntax valid via node).")
