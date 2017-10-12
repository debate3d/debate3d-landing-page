module.exports = (gulp, devTasks, sources) => {
  gulp.task('dev', devTasks, function () {
    gulp.watch(sources.JS_SRC, ['script'])
    gulp.watch(sources.SASS_SRC, ['sass'])
    gulp.watch(sources.PUG_SRC, ['compilePug'])
  })
}
