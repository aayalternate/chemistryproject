let selectedElements = [];
// Data is loaded from elements.js
renderGrid();

function renderGrid() {
    const grid = document.getElementById('element-grid');
    labData.elements.forEach(el => {
        const card = document.createElement('div');
        card.className = 'element-card';
        card.innerHTML = `
            <img src="${el.img}" width="64" alt="${el.name}">
            <h3>${el.symbol}</h3>
            <p>${el.name}</p>
        `;
        card.onclick = () => handleSelection(el.id, card);
        grid.appendChild(card);
    });
}

function handleSelection(id, cardElement) {
    if (selectedElements.includes(id)) {
        selectedElements = selectedElements.filter(item => item !== id);
        cardElement.classList.remove('selected');
    } else if (selectedElements.length < 2) {
        selectedElements.push(id);
        cardElement.classList.add('selected');
    }
    
    document.getElementById('combine-btn').disabled = selectedElements.length !== 2;
}

document.getElementById('combine-btn').onclick = () => {
    // Sort IDs alphabetically so "H-O" and "O-H" both match the JSON key
    const reactionKey = selectedElements.sort().join('-');
    const result = labData.reactions[reactionKey];

    if (result) {
        document.getElementById('reaction-name').innerText = result.name;
        document.getElementById('formula-text').innerText = result.formula;
        document.getElementById('reaction-info').innerText = result.info;
        document.getElementById('reaction-fact').innerText = result.fact;
        
        switchView('result-page');
    } else {
        alert("These elements don't create a common reaction in our database. Try another pair!");
    }
};

function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
}

function goToHome() {
    selectedElements = [];
    document.querySelectorAll('.element-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('combine-btn').disabled = true;
    switchView('home-page');
}