const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

module.exports = (gulp, arg, sources) => {
  const dist = sources.DIST_SRC + '/js'
  gulp.task('script', function () {
    return gulp.src(sources.JS_SRC)
      .pipe(babel())
      .pipe(uglify())
      .pipe(gulp.dest(dist))
  })
}
