"use strict";

// Задание 1. 
// Реализуйте таймер. 
// Включите в него общую кодовую базу с калькулятором дат, реализованным в этом уроке.
// Не понял зачем нужна кодовая база от дат в таймере... Раз надо, значит надо. :)
import * as datecalc from "./datecalc.js";

// Не работает. Error: Uncaught SyntaxError: import not found: Howler
//import { Howl, Howler } from "./howler.js";

function playTimer() {
    const timer_start = document.getElementById("timer_start");
    const timer_stop = document.getElementById("timer_stop");
    const timer_seconds = document.getElementById("timer_seconds");

    if (!Number.isNaN(timer_value.value)) {

        let intervalId = null;

        timer_start.addEventListener("click", () => {
            const timer_value = document.getElementById("timer_value");

            let countSeconds = timer_value.value * 60;

            intervalId = setInterval(() => {
                timer_seconds.innerText = countSeconds + " сек.";
                if (countSeconds == 0) {
                    // let sound = new Howl({
                    //     src: ["sound.mp3"]
                    // });
                    // sound.play();
                    let audio = new Audio("./media/sample.mp3");
                    audio.play();

                    clearInterval(intervalId);
                    return;
                }
                countSeconds--;
            }, 1000);
        });

        timer_stop.addEventListener("click", () => {
            clearInterval(intervalId);
        });
    } else {
        // попросить число
    }
}

playTimer();