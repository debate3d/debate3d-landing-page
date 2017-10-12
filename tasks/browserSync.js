const br = require('browser-sync')

module.exports = gulp => {
  gulp.task('server', function () {
    const dir = ['./dist/**/**']
    br.init(dir, {
      server: {
        baseDir: './dist',
        index: 'index.html'
      },
      open: false
    })
  })
}
