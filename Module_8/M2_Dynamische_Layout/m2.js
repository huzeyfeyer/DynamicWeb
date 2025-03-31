'use strict';

const container = document.getElementById("container");
const dashboard = document.getElementById("dashboard");
const widthEl = document.getElementById("current-width");
const columnsEl = document.getElementById("column-count");

const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        const width = entry.contentRect.width;
        widthEl.textContent = Math.round(width);

        let columns = 3;
        if (width < 600) {
            columns = 1;
        } else if (width < 900) {
            columns = 2;
        }

        dashboard.dataset.columns = columns;
        columnsEl.textContent = columns;
    }
});

observer.observe(container);