const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('node-sass'))

gulp.task('serve', function () {
  browserSync.init({
    server: "./"
  })

  gulp.watch('./styles/sass/**/*.sass', gulp.series('sass'))
  gulp.watch('./**/*.html').on('change', browserSync.reload)
})

gulp.task('sass', function () {
  return gulp.src('./styles/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./styles/css'))
    .pipe(browserSync.stream())
})

gulp.task('start', gulp.series('serve', 'sass'))
