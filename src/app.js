'use strict';

import checkNums from './utils/checkNums';
import displayError from './utils/displayError';
import displayResult from './utils/displayResult';
import * as domElements from './utils/getElements';
import {isVisible, makeInvisible} from "./utils/visibilities";

export default function handleSubmit(event) {
    event.preventDefault();

    console.log(`first input value ${JSON.stringify(domElements.firstNum.value)}` +
     `& second ${JSON.stringify(domElements.secondNum.value)}`);
    //    Input log

    let [firstValueNum, secondValueNum] = [domElements.firstNum.value, domElements.secondNum.value];

    let valuesCorrect = checkNums(firstValueNum, secondValueNum).every(item => item);

    console.log(`Values are${valuesCorrect ? '' : ' NOT'} correct`);

    if (!valuesCorrect) {
        // This weird every item is basically checking if all the items are true

        if (isVisible(domElements.resultBox)) {
            makeInvisible(domElements.resultBox)
        }

        displayError(domElements.problemBox);
        //    Displays an error because the values are not correct
    } else /* There is no error */ {
        //    Erase error block because there is no error
        makeInvisible(domElements.problemBox);
        displayResult(domElements.resultBox, firstValueNum, secondValueNum);
    }
}