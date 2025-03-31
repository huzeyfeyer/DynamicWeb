'use strict';

document.getElementById("haalTekstOp").addEventListener("click", async () => {
    const resultaat = document.getElementById("resultaat");
    resultaat.innerHTML = "Laden...";

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!res.ok) throw new Error(`Fout: ${res.status}`);
        const data = await res.json();
        resultaat.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
    } catch (err) {
        resultaat.innerHTML = `<p class="error">Er is een fout opgetreden bij het ophalen van de tekst.</p>`;
        console.error(err);
    }
});
