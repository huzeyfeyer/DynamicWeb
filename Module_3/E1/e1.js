'use strict';

const telOp = (a, b) => {
    return a + b;
}

const isEvenGetal = (getal) => {
    return getal % 2 === 0;
}

const zegHallo = () => {
    return "Hallo!";
}

// Test je functies hier
const output = document.getElementById('output');
        
// Voeg deze tests toe nadat je de functies hebt herschreven
output.innerHTML += `2 + 3 = ${telOp(2, 3)}<br>`;
output.innerHTML += `Is 4 even? ${isEvenGetal(4)}<br>`;
output.innerHTML += zegHallo();