const path = require('path')

module.exports = {
  JS_SRC: './src/js/**/*.js',
  ENTRY_JS: './src/js/main.js',
  SASS_SRC: './src/assets/sass/**/*.sass',
  IMG_SRC: './src/assets/img/**',
  PUG_SRC: './src/views/*.pug',
  DIST_SRC: path.resolve(__dirname, '../dist')
}
