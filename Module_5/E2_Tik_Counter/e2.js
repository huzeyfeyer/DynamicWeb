'use strict';

async function waitForClicks(n) {
    return new Promise(resolve => {
        const button = document.getElementById("clickButton");
        const counter = document.querySelector(".counter");
        let count = 0;

        function onClick() {
            count++;
            counter.textContent = count;
            if (count >= n) {
                button.removeEventListener("click", onClick);
                resolve();
            }
        }

        button.addEventListener("click", onClick);
    });
}

(async () => {
    await waitForClicks(5);
    document.querySelector(".message").textContent = "Gefeliciteerd! 🎉";
})();
