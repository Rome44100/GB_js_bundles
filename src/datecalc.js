"use strict";

import { formatError } from "./common.js";

import { diffDates, diffToHTML } from "./diffDates.js";


const datecalc = document.getElementById("datecalc");
const datecalc_result = document.getElementById("datecalc_result");

function handleCalcDate(event) {
    event.preventDefault();

    datecalc_result.innerHTML = "";

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if (firstDate && secondDate) {
        datecalc_result.innerHTML = diffToHTML(diffDates(firstDate, secondDate));
    } else {
        datecalc_result.innerHTML = formatError("Для рассчета введите значения!");
    }
}

datecalc.addEventListener("submit", handleCalcDate);