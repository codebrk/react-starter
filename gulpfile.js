'use strict';

const gulp         = require("gulp");
const babel        = require("gulp-babel");
const browserify   = require("gulp-browserify");
const concat       = require("gulp-concat");
const rename       = require("gulp-rename");
const uglify       = require("gulp-uglify");


gulp.task("compile-js", () => {
    gulp.src(["./src/*.js", "./src/**/*.js"])
        .pipe(concat("tmp.js"))
        .pipe(babel({
            presets: [
                'es2015',
                'react'
            ]}).on("error", console.log))
        .pipe(browserify().on("error", console.log))
        .pipe(rename("development.js"))
        .pipe(gulp.dest("./"));
});


gulp.task("default", ["compile-js"], () => {
    process.env.NODE_ENV = 'production';
    gulp.src("./development.js")
        .pipe(uglify())
        .pipe(rename("production.js"))
        .pipe(gulp.dest("./"));
});


gulp.task("watch", ["compile-js"], () => {
    gulp.watch(["./src/*.js", "./src/**/*.js"], ["compile-js"]);
});