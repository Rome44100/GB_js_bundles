"use strict";

function loadScript(src, callback) {
    let el = document.createElement("script");
    el.src = src;
    el.type = "text/javascript";
    el.onload = callback;

    document.body.appendChild(el);
}

loadScript("src/alarmclock.js", function () {
    console.log("Script loaded!");
});