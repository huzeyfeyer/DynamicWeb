'use strict';

document.querySelectorAll('.endpoint-knop').forEach(knop => {
    knop.addEventListener('click', async () => {
        const code = knop.dataset.code;
        const statusEl = document.getElementById('status-info');
        const detailsEl = document.getElementById('response-details');

        statusEl.textContent = "Laden...";
        detailsEl.textContent = "";

        try {
            const res = await fetch(`https://httpstat.us/${code}`);

            const klasse = res.status >= 500 ? 'status-server-error' :
                           res.status >= 400 ? 'status-client-error' :
                           res.status >= 300 ? 'status-redirect' :
                           'status-success';

            statusEl.className = klasse;
            statusEl.textContent = `${res.status} ${res.statusText} — OK: ${res.ok}`;

            const headers = [...res.headers.entries()]
                .map(([k, v]) => `${k}: ${v}`).join('\n');

            detailsEl.textContent = `Type: ${res.type}\n\nHeaders:\n${headers}`;
        } catch (err) {
            statusEl.className = 'status-client-error';
            statusEl.textContent = "Netwerkfout bij het ophalen.";
        }
    });
});