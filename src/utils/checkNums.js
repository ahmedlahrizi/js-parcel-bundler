"use strict";

export default function checkNums(firstValue, secondValue) {
    return [
        !isNaN(parseFloat(firstValue)),
        !isNaN(parseFloat(secondValue))
    ]
}