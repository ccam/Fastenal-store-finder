var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    server = require('gulp-server-livereload'),
    browserSync = require('browser-sync').create();


gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './src',
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true
    }
  });

  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('./src/scss/main.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest('./src/css'))
  .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/css/*.scss', ['sass']);
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
/*
gulp.task('server', function() {
  gulp.src('src')
  .pipe(server ({
    livereload: true,
    open: true,
    port: 1337
  }));
});
*/

gulp.task('main', ['serve'])

gulp.task('default', ['main']);