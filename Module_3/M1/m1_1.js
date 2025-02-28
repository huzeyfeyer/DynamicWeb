'use strict';

const verwerkScore = (naam = "onbekend", score = 0) => {
    const isGeldigScore = score => !isNaN(score) && score >= 0;

    const validScore = isGeldigScore(score) ? Number (score) : 0;
    const validNaam = naam.trim() || "onbekend";

    return {
        naam: validNaam,
        score: validScore,
        datum: new Date().toLocaleDateString()
    };
};

const voegScoreToe = () => {
    const naam = document.getElementById("playerName").value;
    const score = document.getElementById("score").value;

    const resultaat = verwerkScore(naam, score);


    const scoreBoard = document.getElementById("scoreBoard");

    scoreBoard.innerHTML +=`
        <div class="score-card">
            <h3>${resultaat.naam}</h3>
            <p>Score: ${resultaat.score}</p>
            <small>${resultaat.datum}</small>
        </div>
    `;

    document.getElementById("playerName").value = "";
    document.getElementById("score").value = "";
}