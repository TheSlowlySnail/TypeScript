var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


gulp.task('ts', function () {
    gulp.src('js/ts/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('js'));
});

gulp.task('sass', function () {
    gulp.src('css/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('watch',  function() {
    gulp.watch('js/ts/*.ts', ['ts']);
    gulp.watch('css/sass/*.scss', ['sass']);
});
gulp.task('default',['ts','sass','watch']);