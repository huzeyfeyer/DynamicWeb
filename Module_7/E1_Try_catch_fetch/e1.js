'use strict';

document.getElementById("fetchButton").addEventListener("click", async () => {
    const resultDiv = document.getElementById("result");

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!res.ok) throw new Error("Fout bij ophalen");

        const data = await res.json();
        resultDiv.textContent = `Todo Titel: ${data.title}`;
    } catch (error) {
        resultDiv.textContent = `Er is een fout opgetreden: ${error.message}`;
    }
});