const gulp = require('gulp');
const exec = require('child_process').exec;
const del = require('del');
const path = require('path');
const connect = require('gulp-connect');

const PATHS = {
    source: {
        base: './src',
        onedrive: './src/' + 'onedrive'
    },
    output: {
        base: './build'
    }
}

const sourceBase = "./src";
const outputBase = "./build"

const HTML_FILES = [
    path.join(PATHS.source.base, 'index.html'),
    path.join(PATHS.source.onedrive, 'onedrive.html')
]

const copyHtml = (done) => {
    return gulp.src([
        `${sourceBase}/index.html`,
        `${sourceBase}/onedrive/onedrive.html`
    ]).pipe(gulp.dest(`${outputBase}`));
}

const copyImages = (done) => {
    return gulp.src('./src/images/**/*.*').pipe(gulp.dest('./build/images'));
}

const copy = gulp.parallel(copyHtml, copyImages);

exports.copy = copy;
exports.copy.description = `Copies the source files located at (${PATHS.source.base}) to the output directory located at (${PATHS.output}).`

const clean = (done) => {
    return del('./build');
}
exports.clean = clean;
exports.clean.description = `Deletes the project output directory  located at (${PATHS.output}).`;

const webpack = (done) => {
    return exec('./node_modules/.bin/webpack', (error, stdout, stderr)=> {
        console.log((error) ? stderr : stdout);
        done();
    });
}
exports.webpack = webpack;
exports.webpack.description = `Runs webpack against the project source  located at (${PATHS.source.base}).`;

const reload = (done) => {
    return gulp.src(outputBase)
    .pipe(connect.reload());
}
exports.reload = reload;

const build = gulp.series(clean, copy, webpack, reload);
exports.build = build;
exports.build.description = 'Builds the project.';

const watch = (done) => {
    return gulp.watch(`${PATHS.source.base}/**/*.*`, gulp.series(build));
}

exports.watch = watch;

const serve = (done) => {
    connect.server({
        livereload: true,
        root: outputBase,
        port: 9000
    });
    done();
}
exports.serve = serve;
exports.serve = gulp.series(build, serve, watch)