with open('src/data/exercises.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re

def find_last_push_open(content, topic):
    patterns = [
        rf'exercises\.{re.escape(topic)}\.push\s*\(',
        rf'exercises\.{re.escape(topic)}\s*=\s*\[',
        rf'  {re.escape(topic)}: \[',
    ]
    best_end = -1
    for pat in patterns:
        for m in re.finditer(pat, content):
            if m.end() > best_end:
                best_end = m.end()
    return best_end

ADDITIONS = {

'routine': (
    "  {id:'r_sw_01',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme du verbe.',template:'She ___ at 7am every day.',answer:'wakes',hint:'wake + she → wakes.',explanation:'She wakes up every day.'},\n"
    "  {id:'r_sw_02',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme du verbe.',template:'He ___ his teeth every morning.',answer:'brushes',hint:'brush + he → brushes.',explanation:'He brushes his teeth.'},\n"
    "  {id:'r_sw_03',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme du verbe.',template:'I ___ to work by bus.',answer:'go',hint:'go avec I → go.',explanation:'I go to work by bus.'},\n"
    "  {id:'r_sw_04',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme du verbe.',template:'She ___ home at 6pm.',answer:'arrives',hint:'arrive + she → arrives.',explanation:'She arrives home at 6pm.'},\n"
    "  {id:'r_sw_05',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme du verbe.',template:'They ___ breakfast every morning.',answer:'eat',hint:'eat avec they → eat.',explanation:'They eat breakfast.'},\n"
    "  {id:'r_sw_06',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme du verbe.',template:'He ___ at 10pm every night.',answer:'sleeps',hint:'sleep + he → sleeps.',explanation:'He sleeps at 10pm.'},\n"
),

'body': (
    "  {id:'b_sw_01',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon mot.',template:'She hurt her ___ when she fell.',answer:'arm',hint:'Le bras = arm.',explanation:'She hurt her arm.'},\n"
    "  {id:'b_sw_02',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon mot.',template:'His ___ hurts. He has a headache.',answer:'head',hint:'La tete = head.',explanation:'His head hurts.'},\n"
    "  {id:'b_sw_03',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon mot.',template:'She writes with her right ___.',answer:'hand',hint:'La main = hand.',explanation:'She writes with her right hand.'},\n"
    "  {id:'b_sw_04',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon mot.',template:'He kicked the ball with his ___.',answer:'foot',hint:'Le pied = foot.',explanation:'He kicked with his foot.'},\n"
    "  {id:'b_sw_05',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon mot.',template:'She has long, dark ___.',answer:'hair',hint:'Les cheveux = hair.',explanation:'She has long dark hair.'},\n"
    "  {id:'b_sw_06',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon mot.',template:'She bends her ___ when she runs.',answer:'knee',hint:'Le genou = knee.',explanation:'She bends her knee.'},\n"
),

'numbers': (
    "  {id:'n_sw_01',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon nombre en lettres.',template:'Two plus three equals ___.',answer:'five',hint:'2+3=5=five.',explanation:'Five = cinq.'},\n"
    "  {id:'n_sw_02',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon nombre en lettres.',template:'Ten minus four equals ___.',answer:'six',hint:'10-4=6=six.',explanation:'Six = six.'},\n"
    "  {id:'n_sw_03',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon nombre en lettres.',template:'Two times five equals ___.',answer:'ten',hint:'2x5=10=ten.',explanation:'Ten = dix.'},\n"
    "  {id:'n_sw_04',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon chiffre en lettres.',template:'There are ___ days in a week.',answer:'seven',hint:'7 jours dans une semaine.',explanation:'Seven = sept.'},\n"
    "  {id:'n_sw_05',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon chiffre en lettres.',template:'A year has ___ months.',answer:'twelve',hint:'12 mois dans une annee.',explanation:'Twelve = douze.'},\n"
    "  {id:'n_sw_06',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon chiffre en lettres.',template:'I have ___ sisters: one older and one younger.',answer:'two',hint:'un + un = deux.',explanation:'Two = deux.'},\n"
),

'verbs': (
    "  {id:'v_sw_01',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'She ___ to school every day.',answer:'goes',hint:'go + she -> goes.',explanation:'She goes to school.'},\n"
    "  {id:'v_sw_02',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'I ___ English at school.',answer:'speak',hint:'speak avec I -> speak.',alternatives:['learn','study'],explanation:'I speak English.'},\n"
    "  {id:'v_sw_03',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'He ___ in a big house.',answer:'lives',hint:'live + he -> lives.',explanation:'He lives in a big house.'},\n"
    "  {id:'v_sw_04',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'They ___ football every weekend.',answer:'play',hint:'play avec they -> play.',explanation:'They play football.'},\n"
    "  {id:'v_sw_05',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'He ___ a book every night.',answer:'reads',hint:'read + he -> reads.',explanation:'He reads a book every night.'},\n"
    "  {id:'v_sw_06',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'She ___ her mother very much.',answer:'loves',hint:'love + she -> loves.',explanation:'She loves her mother.'},\n"
),

'timeAdverbs': (
    "  {id:'ta_sw_01',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon adverbe.',template:'She ___ eats breakfast. She never skips it.',answer:'always',hint:'always = tout le temps (100%).',explanation:'She always eats breakfast.'},\n"
    "  {id:'ta_sw_02',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon adverbe.',template:'He ___ comes late. Maybe once a year.',answer:'rarely',hint:'rarely = rarement.',alternatives:['seldom','never'],explanation:'He rarely comes late.'},\n"
    "  {id:'ta_sw_03',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon adverbe.',template:'She ___ goes to the cinema. About once a week.',answer:'often',hint:'often = souvent.',alternatives:['sometimes'],explanation:'She often goes to the cinema.'},\n"
    "  {id:'ta_sw_04',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon adverbe.',template:'I ___ eat meat. I am a vegetarian.',answer:'never',hint:'never = jamais.',explanation:'I never eat meat.'},\n"
    "  {id:'ta_sw_05',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon adverbe.',template:'He is ___ late. About half the time.',answer:'sometimes',hint:'sometimes = parfois.',explanation:'He is sometimes late.'},\n"
    "  {id:'ta_sw_06',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon adverbe.',template:'She ___ calls her grandmother on Sundays.',answer:'usually',hint:'usually = generalement.',alternatives:['often','always'],explanation:'She usually calls her grandmother.'},\n"
),

'imperatives': (
    "  {id:'imp_sw_01',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon imperatif.',template:'___ quiet, please!',answer:'Be',hint:'Be quiet = soyez tranquilles.',explanation:'Be quiet! = imperatif de be.'},\n"
    "  {id:'imp_sw_02',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon imperatif.',template:'___ your hands before eating.',answer:'Wash',hint:'Wash = laver.',explanation:'Wash your hands!'},\n"
    "  {id:'imp_sw_03',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon imperatif.',template:'___ to me carefully.',answer:'Listen',hint:'Listen = ecouter.',explanation:'Listen to me!'},\n"
    "  {id:'imp_sw_04',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon imperatif.',template:'___ your book to page 10.',answer:'Open',hint:'Open = ouvrir.',explanation:'Open your book!'},\n"
    "  {id:'imp_sw_05',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon imperatif.',template:'___ late for class.',answer:'Never',hint:'Never be = ne jamais etre.',explanation:'Never be late for class!'},\n"
    "  {id:'imp_sw_06',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon imperatif.',template:'___ running in the corridor!',answer:'Stop',hint:'Stop = arreter.',explanation:'Stop running! = Arretez de courir!'},\n"
),

'conditionals': (
    "  {id:'cond_sw_01',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme.',template:'If it rains, I ___ my umbrella.',answer:'will',hint:'Type 1: if + present, will + base.',explanation:'I will take my umbrella.'},\n"
    "  {id:'cond_sw_02',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme.',template:'If she studies, she ___ the exam.',answer:'will',hint:'Type 1: will + base.',explanation:'She will pass the exam.'},\n"
    "  {id:'cond_sw_03',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme.',template:'If I had money, I ___ a car.',answer:'would',hint:'Type 2: if + past, would + base.',explanation:'I would buy a car.'},\n"
    "  {id:'cond_sw_04',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme.',template:'If you ___ harder, you would succeed.',answer:'tried',hint:'Type 2: if + past simple.',explanation:'If you tried harder, you would succeed.'},\n"
    "  {id:'cond_sw_05',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme.',template:'If it ___ tomorrow, we will cancel.',answer:'rains',hint:'Type 1: if + present simple.',explanation:'If it rains tomorrow...'},\n"
    "  {id:'cond_sw_06',type:'fill-blank',diffLevel:1,instruction:'Completez avec la bonne forme.',template:'If she ___ early, she will catch the bus.',answer:'leaves',hint:'leave + she -> leaves.',explanation:'If she leaves early...'},\n"
),

'verbsOfState': (
    "  {id:'vs_sw_01',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'I ___ this song. It is beautiful.',answer:'love',hint:'love = verbe d etat, pas de continuous.',explanation:'I love this song.'},\n"
    "  {id:'vs_sw_02',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'She ___ a big house in the city.',answer:'owns',hint:'own = posseder.',explanation:'She owns a big house.'},\n"
    "  {id:'vs_sw_03',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'He ___ the answer to every question.',answer:'knows',hint:'know = savoir.',explanation:'He knows the answer.'},\n"
    "  {id:'vs_sw_04',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'This cake ___ delicious!',answer:'tastes',hint:'taste = avoir un gout.',explanation:'This cake tastes delicious!'},\n"
    "  {id:'vs_sw_05',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'She ___ three languages fluently.',answer:'speaks',hint:'speak + she -> speaks.',explanation:'She speaks three languages.'},\n"
    "  {id:'vs_sw_06',type:'fill-blank',diffLevel:1,instruction:'Completez avec le bon verbe.',template:'I ___ tired after work.',answer:'feel',hint:'feel = se sentir.',alternatives:['am'],explanation:'I feel tired.'},\n"
),

'countableUncountable': (
    "  {id:'cu_sw_01',type:'fill-blank',diffLevel:1,instruction:'Completez avec much ou many.',template:'How ___ students are in the class?',answer:'many',hint:'students = denombrables -> many.',explanation:'How many students? - denombrables.'},\n"
    "  {id:'cu_sw_02',type:'fill-blank',diffLevel:1,instruction:'Completez avec much ou many.',template:'How ___ water do you drink every day?',answer:'much',hint:'water = indenombrable -> much.',explanation:'How much water? - indenombrables.'},\n"
    "  {id:'cu_sw_03',type:'fill-blank',diffLevel:1,instruction:'Completez avec much ou many.',template:'How ___ books did you read last year?',answer:'many',hint:'books = denombrables -> many.',explanation:'How many books? - denombrables.'},\n"
    "  {id:'cu_sw_04',type:'fill-blank',diffLevel:1,instruction:'Completez avec much ou many.',template:'How ___ time do we have?',answer:'much',hint:'time = indenombrable -> much.',explanation:'How much time? - indenombrable.'},\n"
    "  {id:'cu_sw_05',type:'fill-blank',diffLevel:1,instruction:'Completez avec much ou many.',template:'How ___ people live in your town?',answer:'many',hint:'people = pluriel -> many.',explanation:'How many people? - many.'},\n"
    "  {id:'cu_sw_06',type:'fill-blank',diffLevel:1,instruction:'Completez avec much ou many.',template:'How ___ coffee do you drink a day?',answer:'much',hint:'coffee = indenombrable -> much.',explanation:'How much coffee? - much.'},\n"
    "  {id:'cu_sw_07',type:'fill-blank',diffLevel:1,instruction:'Completez avec much ou many.',template:'How ___ children does she have?',answer:'many',hint:'children = denombrables -> many.',explanation:'How many children? - many.'},\n"
),
}

for topic, new_exs in ADDITIONS.items():
    pos = find_last_push_open(content, topic)
    if pos < 0:
        print(f'Not found: {topic}')
        continue
    insertion = '\n  // __ L1 audit additions __\n' + new_exs
    content = content[:pos] + insertion + content[pos:]
    print(f'OK: {topic}')

with open('src/data/exercises.js', 'w', encoding='utf-8') as f:
    f.write(content)
print(f'Done. Lines: {content.count(chr(10))+1}')
