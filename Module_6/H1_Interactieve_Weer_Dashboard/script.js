'use strict';

const API_KEY = '4c0bffee76887a1b6213797f906029a5'; 
let isCelsius = true;

document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        haalWeerOp(city);
    }
});

function convertTemp(temp) {
    return isCelsius ? `${temp.toFixed(1)}°C` : `${(temp * 9/5 + 32).toFixed(1)}°F`;
}

function unixToTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
}

async function haalWeerOp(city) {
    const display = document.getElementById('weather-display');
    display.innerHTML = '<div class="loading">Laden...</div>';

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`);
        if (!res.ok) throw new Error('Weerdata niet beschikbaar');
        const data = await res.json();

        const weatherHTML = `
            <div class="weather-card">
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>Temperatuur:</strong> <span id="temp">${convertTemp(data.main.temp)}</span></p>
                <p><strong>Beschrijving:</strong> ${data.weather[0].description}</p>
                <p><strong>Luchtvochtigheid:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
                <p><strong>Zonsopgang:</strong> ${unixToTime(data.sys.sunrise)}</p>
                <p><strong>Zonsondergang:</strong> ${unixToTime(data.sys.sunset)}</p>
                <button id="toggleTemp">Schakel naar ${isCelsius ? 'Fahrenheit' : 'Celsius'}</button>
                <button id="voegFavorietToe">Voeg toe aan favorieten</button>
            </div>
        `;

        display.innerHTML = weatherHTML;

        document.getElementById('toggleTemp').addEventListener('click', () => {
            isCelsius = !isCelsius;
            document.getElementById('temp').textContent = convertTemp(data.main.temp);
            document.getElementById('toggleTemp').textContent = `Schakel naar ${isCelsius ? 'Fahrenheit' : 'Celsius'}`;
        });

        document.getElementById('voegFavorietToe').addEventListener('click', () => {
            voegToeAanFavorieten(data.name);
        });

    } catch (err) {
        display.innerHTML = `<div class="error">❌ ${err.message}</div>`;
    }
}

function voegToeAanFavorieten(city) {
    const lijst = document.getElementById('favorites-list');

    if ([...lijst.children].some(el => el.textContent === city)) return;

    const item = document.createElement('div');
    item.className = 'favorite-item';
    item.textContent = city;
    item.addEventListener('click', () => haalWeerOp(city));
    lijst.appendChild(item);
}