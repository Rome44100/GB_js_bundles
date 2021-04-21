"use strict";

// Задание 1.а.
// Вынесите код переключения между разделами (таймер/калькулятор дат) в отдельный модуль.

export function toggleApps() {
    document.querySelectorAll("details").forEach(el => {
        el.addEventListener("click", (e) => {
            document.querySelectorAll("details").forEach(elem => {
                if (el != elem) elem.open = false;
            });
        });
    });
}