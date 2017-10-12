const imagemin = require('gulp-imagemin')

module.exports = (gulp, arg, sources) => {
  const dist = sources.DIST_SRC + '/img'
  gulp.task('imagemin', function () {
    gulp.src(sources.IMG_SRC)
      .pipe(imagemin())
      .pipe(gulp.dest(dist))
  })
}
