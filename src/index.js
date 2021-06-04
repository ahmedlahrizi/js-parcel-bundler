"use strict";

import { submitButton } from "./utils/getElements";
import handleSubmit from "./app";

window.addEventListener('load', () => submitButton.addEventListener('click', handleSubmit));

if (module.hot) {
    module.hot.accept();
}