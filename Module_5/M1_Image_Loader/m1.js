'use strict';

const images = [
    'https://via.placeholder.com/200?text=Image+1',
    'https://via.placeholder.com/200?text=Image+2',
    'https://via.placeholder.com/200?text=Image+3'
];

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Fout bij laden van ${src}`));
    });
}

document.getElementById("loadButton").addEventListener("click", async () => {
    const gallery = document.querySelector(".gallery");
    const progressBar = document.querySelector(".progress-bar");

    gallery.innerHTML = "";
    progressBar.style.width = "0%";
    progressBar.textContent = "0%";

    for (let i = 0; i < images.length; i++) {
        try {
            const img = await loadImage(images[i]);
            gallery.appendChild(img);
            const percent = Math.round(((i + 1) / images.length) * 100);
            progressBar.style.width = `${percent}%`;
            progressBar.textContent = `${percent}%`;
        } catch (e) {
            console.error(e.message);
        }
    }
});
