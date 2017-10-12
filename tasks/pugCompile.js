const pug = require('gulp-pug')

module.exports = (gulp, arg, sources) => {
  const dist = sources.DIST_SRC + '/'
  gulp.task('compilePug', () => {
    gulp.src(sources.PUG_SRC)
      .pipe(pug({}))
      .pipe(gulp.dest(dist))
  })
}
