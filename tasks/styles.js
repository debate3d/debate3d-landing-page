const minifyCss = require('gulp-clean-css')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const cssMqpacker = require('css-mqpacker')

const plugins = [
  autoprefixer({
    browsers: ['last 9 versions']
  }),
  pxtorem(),
  cssMqpacker()
]

module.exports = (gulp, arg, sources) => {
  const dist = sources.DIST_SRC + '/css'
  gulp.task('sass', function () {
    gulp.src(sources.SASS_SRC)
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(plugins))
      .pipe(minifyCss())
      .pipe(gulp.dest(dist))
  })
}
