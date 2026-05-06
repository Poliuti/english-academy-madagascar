with open('src/data/boky.js', encoding='utf-8') as f:
    content = f.read()

idx = content.find('export const bokyIndex')
chunk = content[idx-400:idx+100]
with open('scripts/chunk_out.txt', 'w', encoding='utf-8') as f:
    f.write(chunk)
print('Written. bokyIndex at char', idx)
print('Total chars:', len(content))
