'use srict'

let naam = prompt("Wat is je naam?");
let score = 0;

alert(`Welkom, ${naam}! Laten we beginnen met de quiz.`);


let vraag1 = prompt("Wat is de kleur van de zon? \nA) Blauw \nB) Geel \nC) Groen").toLowerCase();
if (vraag1 === "b" || vraag1 === "Geel") {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout! Het juiste antwoord is: B) Geel.");
}


let vraag2 = prompt("Hoeveel benen heeft een spin? \nA) 6 \nB) 8 \nC) 10");
if (vraag2 === "b" || vraag2 === "8") {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout! Het juiste antwoord is: B) 8.");
}


let vraag3 = prompt("Wat is het tegenovergestelde van 'dag'? \nA) Zon \nB) Nacht \nC) Ochtend").toLowerCase();
if (vraag3 === "b" || vraag3 === "Nacht") {
    alert("Goed gedaan!");
    score++;
} else {
    alert("Fout! Het juiste antwoord is: B) Nacht.");
}

alert(`${naam}, je hebt ${score} van de 3 vragen goed beantwoord!`);
