'use strict';


const grid = document.getElementById("grid");
const redCount = document.getElementById("redCount");
const blueCount = document.getElementById("blueCount");
const greenCount = document.getElementById("greenCount");


let colorCounts = { red: 0, blue: 0, green: 0 };


for (let i = 0; i < 25; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");

    
    cell.addEventListener("mouseover", function () {
        if (cell.style.backgroundColor === "" || cell.style.backgroundColor === "lightgray") {
            cell.style.backgroundColor = "red";
        }
    });

   
    cell.addEventListener("click", function () {
        updateColorCount(cell, "blue");
    });

   
    cell.addEventListener("dblclick", function () {
        updateColorCount(cell, "green");
    });

    grid.appendChild(cell);
}


function updateColorCount(cell, newColor) {
    
    let currentColor = cell.style.backgroundColor;

   
    if (currentColor === "blue") colorCounts.blue--;
    if (currentColor === "green") colorCounts.green--;

    
    cell.style.backgroundColor = newColor;

    
    if (newColor === "blue") colorCounts.blue++;
    if (newColor === "green") colorCounts.green++;

    
    updateStats();
}


function updateStats() {
    redCount.textContent = document.querySelectorAll('.cell[style="background-color: red;"]').length;
    blueCount.textContent = colorCounts.blue;
    greenCount.textContent = colorCounts.green;
}
