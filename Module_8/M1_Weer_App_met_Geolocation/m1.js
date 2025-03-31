'use strict';

const API_KEY = '4c0bffee76887a1b6213797f906029a5'; 

const getBtn = document.getElementById("getWeather");
const loader = document.getElementById("loader");
const weatherData = document.getElementById("weather-data");
const notice = document.getElementById("cached-notice");

// Laat cached data zien als beschikbaar
const cached = localStorage.getItem("weatherData");
if (cached) {
    const parsed = JSON.parse(cached);
    weatherData.innerHTML = formatWeather(parsed);
    notice.textContent = "(Data uit cache geladen)";
}

getBtn.addEventListener("click", () => {
    loader.style.display = "block";
    weatherData.innerHTML = "";

    navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
            if (!res.ok) throw new Error("Fout bij ophalen van weergegevens");

            const data = await res.json();
            weatherData.innerHTML = formatWeather(data);
            localStorage.setItem("weatherData", JSON.stringify(data));
            notice.textContent = "";
        } catch (err) {
            weatherData.innerHTML = `<p>❌ ${err.message}</p>`;
        } finally {
            loader.style.display = "none";
        }
    }, () => {
        loader.style.display = "none";
        weatherData.innerHTML = "<p>❌ Toegang tot locatie geweigerd.</p>";
    });
});

function formatWeather(data) {
    return `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperatuur:</strong> ${data.main.temp}°C</p>
        <p><strong>Weer:</strong> ${data.weather[0].description}</p>
        <p><strong>Vochtigheid:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
    `;
}