"use strict";

function loadScript(src, callback) {
    let el = document.createElement("script");
    el.src = src;
    el.type = "text/javascript";
    el.onload = callback;

    // ошибка - пример из урока
    //document.body.appendChild(el);

    const append_child = document.querySelector("#append_child");
    append_child.appendChild(el);
}

// loadScript("src/howler.js", function () {
//     console.log("Script loaded!");
// });



// Задание 2.а.

// Задание 2.б.
// Ну здесь всё через ооп надо делать, через класс

let uploadedModules = [];

function homeLoad(first, callback = () => { }, idx = 0) {

    let strsrc = "";
    let strHTML = "";
    let callbackFlag = false;

    let findTypeOfarg = typeof first;

    switch (findTypeOfarg) {
        case "function":
            // какая-то злость, но пусть будет так :)
            strHTML = "(" + first + ")();";
            break;
        case "string":
            strsrc = first;
            callbackFlag = true;

            if (!uploadedModules.includes(first)) {
                uploadedModules.push(first);
            } else {
                return;
            }

            break;
        case "object":
            if (Array.isArray(first)) {
                first.forEach(el => {
                    homeLoad(el, callback);
                });
                return;
            }
            break;
        default:
            break;
    }

    let el = document.createElement("script");

    if ("" != strHTML) {
        el.innerHTML = strHTML;
    }

    if ("" != strsrc) {
        el.src = strsrc;
    }

    if (callbackFlag) {
        el.onload = callback;
    }

    const append_child = document.querySelector("#append_child");
    append_child.appendChild(el);
}

// callback
homeLoad(function () { console.log("FUNCTION callback") });

// string
homeLoad("src/howler.js");

// string + callback
homeLoad("src/howler.js", function () { console.log("STRING CALLBACK") });

// array
homeLoad(["src/howler.js", "src/test.js"]);

// array + callback
homeLoad(["src/howler.js", "src/test.js"], function () { console.log("ARRAY CALLBACK") });


// Вариат от преподавателя
// Разница в учете загрузки скриптов и выполнении их коллбэков
// Реализовано через промисы

function loadScriptPrepod(urls, callback) {
    if (typeof urls === "function") return urls();
    if (typeof urls === "string") urls = [urls];

    const existedScripts = Array.from(document.getElementsByTagName('script'), elem => elem.src);
    const promises = [];

    if (!Array.isArray(urls))
        throw new TypeError();

    urls.forEach(url => {
        if (existedScripts.includes(url)) return;

        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = url;
        promises.push(new Promise(resolve => {
            element.onload = resolve;
        }));

        document.body.appendChild(element);
    });

    Promise.all(promises).then(callback);
}