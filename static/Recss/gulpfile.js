const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('sassify', function() {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({
      basename: "recss",
      extname: ".min.css"
    }))
    .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('default', function(){
    gulp.watch('./src/scss/**/*.scss', ['sassify']);
});