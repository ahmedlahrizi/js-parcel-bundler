"use strict";

import { submitButton } from "./utils/getElements";
import handleSubmit from "./app";
import './css/style.scss';

window.addEventListener('load', () => submitButton.addEventListener('click', handleSubmit));