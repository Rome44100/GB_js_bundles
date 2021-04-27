const { src, dest } = require("gulp");
const sass = require("gulp-sass");

exports.default = async function () {
    console.log("Hello students, ", new Date());
}

exports.build = async function () {
    return src("css/main.scss")
        .pipe(sass())
        .pipe(dest("build"));
}