'use strict';

const body = document.body;
const button = document.getElementById("themeToggle");

const applyTheme = (theme) => {
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(`${theme}-theme`);
    button.textContent = theme === "light" ? "Schakel naar Donker Thema" : "Schakel naar Licht Thema";
};

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

button.addEventListener("click", () => {
    const current = body.classList.contains("dark-theme") ? "dark" : "light";
    const newTheme = current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
});