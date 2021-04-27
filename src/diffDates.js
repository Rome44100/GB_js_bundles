"use strict";

import { DateTime } from "luxon";
// doesn't work
//import fromISO from "luxon/DateTime/fromISO";

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate) {
        [firstDate, secondDate] = [secondDate, firstDate];
    }

    return secondDate.diff(firstDate, ["years", "months", "days"]).toObject();
}

export const diffToHTML = diff => `<span>
        Лет: ${diff.years},
        Месяцев: ${diff.months},
        Дней: ${diff.days},
        </span>`;