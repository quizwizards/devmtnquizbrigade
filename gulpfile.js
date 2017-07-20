const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const nodemon = require('nodemon');
const sourcemaps = require('gulp-sourcemaps');

// DECLARE FILE PATHS =============================
const basePath = './public/app';
// const normalizeCSS = `${basePath}/styles/normalize.css`;
// `${basePath}/directives/**/*.scss` add when you have directives
const paths = {
    jsSrc: [`${basePath}/app.js`, `${basePath}/*js`, `${basePath}/**/*.js`],
    scssSrc: [`${basePath}/styles/*.scss`, `${basePath}/styles/*.css`],
    server: './server/server.js'
};

// DEFINE TASKS ===================================
gulp.task('server', () => {
    nodemon({
        'script': paths.server
    })
});

gulp.task('js-bundle', () =>  {
    gulp.src(paths.jsSrc)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('scss-bundle', () => {
    gulp.src(paths.scssSrc)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./public/dist'))
});

// WATCH TASK =======================================
gulp.task('watch', () => {
    gulp.watch(paths.jsSrc, ['js-bundle']);
    gulp.watch(paths.scssSrc, ['scss-bundle']);
});


gulp.task('default', ['watch', 'js-bundle','scss-bundle', 'server']);