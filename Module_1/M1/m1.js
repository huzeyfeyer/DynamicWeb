'use strict';

// 1. Alle elementen met class "special" rood maken
let elementenClass = document.getElementsByClassName("special");
for (let element of elementenClass) {
    element.style.color = "red"; 
}

// 2. De tweede paragraaf onderstrepen
let elementTweedeP = document.querySelector(".container p:nth-of-type(2)");
elementTweedeP.style.textDecoration = "underline"; 

// 3. Aantal "special" elementen tellen en weergeven in output-div
let elementenSpecial = document.querySelectorAll(".special");
let aantalElementenSpecial = elementenSpecial.length;
document.getElementById("output").innerText = 
    `Er zijn ${aantalElementenSpecial} elementen met de class 'special' op deze pagina.`;




