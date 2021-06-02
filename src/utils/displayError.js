"use strict";

import {makeVisible} from "./visibilities";

export default function displayError(problemBox) {
    console.error(problemBox.innerText);
    //    Logging the problem (the error text is on the HTML)
    makeVisible(problemBox);
}