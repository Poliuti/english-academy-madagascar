#!/usr/bin/env python3
"""Fix unescaped apostrophes in single-quoted JS strings in exercises.js.
Uses node's exact line reports to fix one error at a time."""
import sys, subprocess, re
sys.stdout.reconfigure(encoding='utf-8')

PATH = 'src/data/exercises.js'

def get_error_line():
    result = subprocess.run(
        ['node', '--input-type=module', '-'],
        input="import('./src/data/exercises.js').then(()=>console.log('OK')).catch(e=>console.error('LINE:'+e.stack))",
        capture_output=True, text=True, encoding='utf-8', errors='replace'
    )
    if 'OK' in result.stdout:
        return None
    # Look for line number in stderr
    m = re.search(r'exercises\.js:(\d+)', result.stderr + result.stdout)
    if m:
        return int(m.group(1))
    return None

def fix_line(line_num):
    with open(PATH, encoding='utf-8') as f:
        lines = f.readlines()

    idx = line_num - 1
    line = lines[idx]

    # Strategy: find each single-quoted segment on this line that contains
    # an unescaped apostrophe (word's, won't, l', d', n't, etc.)
    # and convert it to double-quoted.

    # Simple character-by-character scanner
    result = []
    i = 0
    while i < len(line):
        c = line[i]
        # Check if this is an unescaped single quote starting a string
        if c == "'" and (i == 0 or line[i-1] not in ('\\',)):
            # Read until closing unescaped single quote
            j = i + 1
            while j < len(line):
                if line[j] == '\\':
                    j += 2
                    continue
                if line[j] == "'":
                    break
                j += 1

            if j < len(line):
                inner = line[i+1:j]
                # Check if inner contains a bare apostrophe (word contraction / French)
                # Bare = not preceded by backslash
                has_bare_apos = False
                k = 0
                while k < len(inner):
                    if inner[k] == '\\':
                        k += 2
                        continue
                    if inner[k] == "'":
                        has_bare_apos = True
                        break
                    k += 1

                if has_bare_apos:
                    # Convert to double quotes
                    result.append('"')
                    result.append(inner)
                    result.append('"')
                    i = j + 1
                    continue

        result.append(c)
        i += 1

    fixed = ''.join(result)
    if fixed != line:
        print(f"  Fixed line {line_num}: {fixed.strip()[:80]}")
        lines[idx] = fixed
        with open(PATH, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        return True
    else:
        print(f"  No change for line {line_num}: {line.strip()[:80]}")
        return False

# Loop until clean
for iteration in range(50):
    err_line = get_error_line()
    if err_line is None:
        print(f"\nSyntax clean after {iteration} fixes!")
        break
    print(f"Iteration {iteration+1}: error at line {err_line}")
    if not fix_line(err_line):
        print("  Stuck — manual fix needed")
        # Show the line
        with open(PATH, encoding='utf-8') as f:
            lines = f.readlines()
        print("  Content:", lines[err_line-1].rstrip())
        break
else:
    print("Too many iterations — check manually")
