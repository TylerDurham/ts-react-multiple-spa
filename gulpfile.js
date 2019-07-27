const gulp = require('gulp');
const exec = require('child_process').exec;
const del = require('del');
const path = require('path');
const connect = require('gulp-connect');
const flatten = require('gulp-flatten');

const sourceBase = "./src";
const outputBase = "./build"

/**
 * Copies the HTML files located at (${sourceBase}) to the output directory located at (${PATHS.output}).
 * @param {Function} done Callback function that lets Gulp know the task is finished.
 */
const copyHtml = (done) => {
    return gulp.src('./src/**/*.html')
    .pipe(flatten())
    .pipe(gulp.dest('./build'));
}

/**
 * Copies the image files located at (${sourceBase}) to the output directory located at (${PATHS.output}).
 * @param {Function} done Callback function that lets Gulp know the task is finished.
 */
const copyImages = (done) => {
    return gulp.src(['src/**/*.png'])
    .pipe(flatten())
    .pipe(gulp.dest('./build/images'));
}

const copy = gulp.series(copyHtml, copyImages);

exports.copy = copy;
exports.copy.description = `Copies the source files located at (${sourceBase}) to the output directory located at (${outputBase}).`

/**
 * Deletes the project output directory  located at (${outputBase}).
 * @param {Function} done Callback function that lets Gulp know the task is finished.
 */
const clean = (done) => {
    return del('./build');
}
exports.clean = clean;
exports.clean.description = `Deletes the project output directory  located at (${outputBase}).`;

/**
 * Runs webpack against the project source  located at (${sourceBase}).
 * @param {Function} done Callback function that lets Gulp know the task is finished.
 */
const webpack = (done) => {
    return exec('./node_modules/.bin/webpack', (error, stdout, stderr)=> {
        console.log((error) ? stderr : stdout);
        done();
    });
}
exports.webpack = webpack;
exports.webpack.description = `Runs webpack against the project source  located at (${sourceBase}).`;

const reload = (done) => {
    return gulp.src(outputBase)
    .pipe(connect.reload());
}
exports.reload = reload;

const build = gulp.series(clean, copy, webpack, reload);
exports.build = build;
exports.build.description = 'Builds the project.';

/**
 * Watches the project for changes, and runs the build when changes occur.
 * @param {Function} done Callback function that lets Gulp know the task is finished.
 */
const watch = (done) => {
    return gulp.watch(`${sourceBase}/**/*.*`, gulp.series(build));
}
exports.watch = watch;
exports.watch.description = 'Watches the project for changes, and runs the build when changes occur.'

/**
 * Builds the project, starts the server, and watches for changes.
 * @param {Function} done Callback function that lets Gulp know the task is finished.
 */
const serve = (done) => {
    connect.server({
        livereload: true,
        root: outputBase,
        port: 9000
    });
    done();
}
exports.serve = gulp.series(build, serve, watch);
exports.serve.description = 'Builds the project, starts the server, and watches for changes.';
