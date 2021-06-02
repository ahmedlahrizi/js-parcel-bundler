"use strict";

import {isVisible, makeVisible} from "./visibilities";

export default function displayResult(resultBox, firstValue, secondValue) {
    let result = parseFloat(firstValue) + parseFloat(secondValue);
    let resultMessage = `The result is ${result}`;

    console.log(resultMessage);

    if (!isVisible(resultBox)) {
        makeVisible(resultBox);
    }

    resultBox.innerText = resultMessage;
}