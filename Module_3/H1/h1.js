'use strict';

const maakSpeler = (naam = "Player 1") => ({
    naam: naam,
    level: 1,
    health: 100,
});

const doeSchade = (speler, schade) => ({
    naam: speler.naam,
    level: speler.level,
    health: Math.max(0, speler.health - schade),
});

const levelOmhoog = (speler) => ({
    naam: speler.naam,
    level: speler.level + 1,
    health: 100
});

let huidigeSpeler = null;

const updateDisplay = () => {
    const statsDiv = document.getElementById("playerStats");
    if (!huidigeSpeler) {
        statsDiv.innerHTML = '<p>Geen actieve speler</p>';
        return;
    }

    statsDiv.innerHTML = `
        <div class="player-card">
            <h2>${huidigeSpeler.naam}</h2>
            <p>Level: ${huidigeSpeler.level}</p>
            <p>Health: ${huidigeSpeler.health}/100</p>
        </div>
    `;
};

const maakNieuweSpeler = () => {
    const naam = document.getElementById("playerName").value || "Player 1";
    huidigeSpeler = maakSpeler(naam);
    updateDisplay();
};

const doeSchadeBijSpeler = () => {
    if (!huidigeSpeler) return;
    huidigeSpeler = doeSchade(huidigeSpeler, 25);
    updateDisplay(); // Dit ontbrak, nu wordt de weergave geüpdatet na schade
};

const levelSpelerOp = () => {
    if (!huidigeSpeler) return;
    huidigeSpeler = levelOmhoog(huidigeSpeler);
    updateDisplay();
};

updateDisplay();
