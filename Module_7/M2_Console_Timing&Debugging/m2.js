'use strict';

const generateRandomArray = (size) => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 1000));
    }
    return array;
};

const bubbleSort = (arr) => {
    const result = Array.from(arr);
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j] > result[j + 1]) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
};

const nativeSort = (arr) => {
    const result = Array.from(arr);
    return result.sort((a, b) => a - b);
};

document.getElementById('compareButton').addEventListener('click', () => {
    const testArray = generateRandomArray(5000);
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = '';

    console.time("BubbleSort");
    const bubbleResult = bubbleSort(testArray);
    console.timeEnd("BubbleSort");

    console.time("NativeSort");
    const nativeResult = nativeSort(testArray);
    console.timeEnd("NativeSort");

    const div1 = document.createElement('div');
    div1.className = "result-item slower";
    div1.textContent = "BubbleSort afgerond";

    const div2 = document.createElement('div');
    div2.className = "result-item faster";
    div2.textContent = "NativeSort afgerond";

    resultDiv.appendChild(div1);
    resultDiv.appendChild(div2);

    console.assert(
        JSON.stringify(bubbleResult) === JSON.stringify(nativeResult),
        "Sorteermethodes geven verschillende resultaten!"
    );
});
