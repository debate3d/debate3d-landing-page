const runSequence = require('run-sequence')

module.exports = (gulp, buildTasks) => {
  gulp.task('build', function () {
    runSequence(buildTasks)
  })
}
