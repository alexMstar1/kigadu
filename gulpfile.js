const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('node-sass'))

gulp.task('serve', function () {
  browserSync.init({
    server: "./app"
  })

  gulp.watch('./app/styles/sass/**/*.sass', gulp.series('sass'))
  gulp.watch('./app/**/*.html').on('change', browserSync.reload)
})

gulp.task('sass', function () {
  return gulp.src('./app/styles/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./app/styles/css'))
    .pipe(browserSync.stream())
})

gulp.task('start', gulp.series('serve', 'sass'))