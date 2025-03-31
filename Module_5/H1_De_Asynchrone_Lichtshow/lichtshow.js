'use strict';

function wacht(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function verlichtBlok(blok, tijd) {
    const origineleKleur = blok.style.backgroundColor;
    blok.style.backgroundColor = "#ffffff";
    await wacht(tijd);
    blok.style.backgroundColor = origineleKleur;
}

async function startLichtshow() {
    const blokken = Array.from(document.querySelectorAll(".block"));

    for (const blok of blokken) {
        await verlichtBlok(blok, 500);
    }

    await wacht(1000);

    for (const blok of blokken.reverse()) {
        await verlichtBlok(blok, 500);
    }
}

document.getElementById("startBtn").addEventListener("click", startLichtshow);
