'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    server = require('gulp-server-livereload');

gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/*.scss', ['sass']);
});

gulp.task('minify-css', function () {
  return gulp.src('src/css/main.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('docs/css'));
});

gulp.task('min-js', function () {
  return gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('docs/js'));
});

gulp.task('server', function() {
  gulp.src('src')
  .pipe(server ({
    livereload: true,
    open: true,
    port: 1337
  }));
});

gulp.task('main', ['sass:watch', 'server'])

gulp.task('default', ['main']);
