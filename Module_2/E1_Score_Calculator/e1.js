'use strict';

let scores = [];

let scoreInput = document.getElementById('score');
let addScoreButton = document.getElementById('addScore');
let averageDisplay = document.getElementById('average');
let highestDisplay = document.getElementById('highest');
let scoresList = document.getElementById('scoreList'); // Correct ID!

addScoreButton.addEventListener('click', function() {
    const score = parseFloat(scoreInput.value); // Gebruik parseFloat() voor decimalen
    if (!isNaN(score) && score >= 0 && score <= 20) {
        scores.push(score);
        updateScoresList();
        updateStatistics(); // Correcte functienaam!
        scoreInput.value = ''; // Leeg inputveld
    } else {
        alert('Invalid score, enter a number between 0 and 20.');
    }
});

function updateStatistics() { // Correcte functienaam!
    if (scores.length === 0) {
        averageDisplay.textContent = "0.00";
        highestDisplay.textContent = "0";
        return;
    }

    const sum = scores.reduce((acc, val) => acc + val, 0);
    const average = (sum / scores.length).toFixed(2);
    const highest = Math.max(...scores);

    averageDisplay.textContent = average;
    highestDisplay.textContent = highest;
}

function updateScoresList() {
    scoresList.innerHTML = '';
    scores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = `Score: ${score}`;
        scoresList.appendChild(li);
    });
}
