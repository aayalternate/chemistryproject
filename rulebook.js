let selectedRule = null;
let rulesData = rulesDataMap.rules;
// Data is loaded from rules.js
renderGrid();

function renderGrid() {
    const grid = document.getElementById('element-grid');
    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    grid.style.gap = '0.75rem';
    grid.style.maxWidth = '700px';
    grid.style.margin = '0 auto';

    const ruleGroups = [
        {
            category: "Regioselective Rules (Position Pickers)",
            rules: ["markovnikov", "anti_markovnikov", "zaitsev", "hofmann", "kharasch"]
        },
        {
            category: "Stereochemical Rules (Shape Shifters)",
            rules: ["walden", "bredt"]
        },
        {
            category: "Electronic & Structural Rules",
            rules: ["huckel", "hammond", "le_chatelier"]
        }
    ];

    ruleGroups.forEach(group => {
        const heading = document.createElement('h3');
        heading.textContent = group.category;
        heading.style.cssText = `
            max-width: 700px;
            margin: 1.5rem auto 0.5rem auto;
            color: var(--primary);
            font-family: 'Playfair Display', serif;
            font-size: 1rem;
            padding-bottom: 0.4rem;
            border-bottom: 2px solid #dbeafe;
        `;
        grid.appendChild(heading);

        group.rules.forEach(ruleId => {
            const rule = rulesData[ruleId];
            if (!rule) return;
            const item = document.createElement('div');
            item.className = 'element-card';
            item.id = 'rule-' + ruleId;
            item.style.textAlign = 'left';
            item.style.padding = '1rem 1.5rem';
            item.innerHTML = `<h3 style="margin:0; font-size: 1rem;">${rule.name}</h3>`;
            item.onclick = () => handleSelection(ruleId, item);
            grid.appendChild(item);
        });
    });
}

function handleSelection(id, item) {
    document.querySelectorAll('.element-card').forEach(el => el.classList.remove('selected'));
    selectedRule = id;
    item.classList.add('selected');
    document.getElementById('combine-btn').disabled = false;
}

document.getElementById('combine-btn').onclick = () => {
    const rule = rulesData[selectedRule];
    if (!rule) return;

    document.getElementById('reaction-name').innerText = rule.name;
    document.getElementById('formula-text').innerText = rule.theory;
    document.getElementById('ex1-formula').innerText = rule.example1.formula;
    document.getElementById('reaction-info').innerText = rule.example1.desc;
    document.getElementById('ex2-formula').innerText = rule.example2.formula;
    document.getElementById('reaction-fact').innerText = rule.example2.desc;

    switchView('result-page');
};

function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
}

function goToHome() {
    selectedRule = null;
    document.querySelectorAll('.element-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('combine-btn').disabled = true;
    switchView('home-page');
}