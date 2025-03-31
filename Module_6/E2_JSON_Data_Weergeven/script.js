'use strict';

async function haalGebruikersOp() {
    const container = document.getElementById("gebruikers-container");
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Fout bij ophalen");

        const gebruikers = await res.json();
        container.innerHTML = "";

        gebruikers.forEach(user => {
            const kaart = document.createElement("div");
            kaart.className = "gebruiker-kaart";
            kaart.innerHTML = `
                <div class="gebruiker-naam">${user.name}</div>
                <div class="gebruiker-email">${user.email}</div>
                <div>${user.phone}</div>
            `;
            container.appendChild(kaart);
        });
    } catch (err) {
        container.innerHTML = `<div class="error-melding">Kon gebruikers niet laden.</div>`;
    }
}

haalGebruikersOp();
