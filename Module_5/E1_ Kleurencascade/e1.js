'use strict';

document.getElementById("startButton").addEventListener("click", () => {
    const changeColor = (color, delay, cb) =>
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            cb && cb();
        }, delay);

    changeColor("red", 1000, () =>
        changeColor("green", 1000, () =>
            changeColor("blue", 1000)
        )
    );
});