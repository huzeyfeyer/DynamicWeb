'use strict';

let cancel;
function countdown(seconds) {
    return new Promise((resolve, reject) => {
        let timeLeft = seconds;
        const display = document.getElementById("timerDisplay");
        display.textContent = timeLeft;

        const interval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(interval);
                resolve("Timer is klaar!");
            } else {
                timeLeft--;
                display.textContent = timeLeft;
            }
        }, 1000);

        cancel = () => {
            clearInterval(interval);
            reject("Timer geannuleerd.");
        };
    });
}

document.getElementById("startButton").addEventListener("click", () => {
    const seconds = parseInt(document.getElementById("seconds").value);
    const cancelBtn = document.getElementById("cancelButton");
    const message = document.getElementById("message");

    cancelBtn.disabled = false;
    message.style.display = "none";

    countdown(seconds)
        .then(msg => {
            message.textContent = msg;
            message.style.display = "block";
        })
        .catch(err => {
            message.textContent = err;
            message.style.display = "block";
        })
        .finally(() => {
            cancelBtn.disabled = true;
        });
});

document.getElementById("cancelButton").addEventListener("click", () => {
    if (cancel) cancel();
});
