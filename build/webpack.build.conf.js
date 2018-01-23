const path = require('path')
const fs = require('fs')
const { defaultsDeep } = require('lodash')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const baseWepackConfig = require('./webpack.base.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const UglifyJS = require('uglify-es')

const loadMinified = filePath => {
  const code = fs.readFileSync(filePath, 'utf-8')
  const result = UglifyJS.minify(code)
  if (result.error) return ''
  return result.code
}

const resolve = dir => path.join(__dirname, '..', dir)

const configToClean = {
  root: resolve('')
}

const config = defaultsDeep(baseWepackConfig, {
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, '..', 'dist')], configToClean),
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      serviceWorkerLoader: `<script>${loadMinified(resolve('build/service-worker-prod.js'))}</script>`
    }),
    new ExtractTextPlugin({
      filename: 'css/[contentHash].css'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new UglifyJsPlugin(),
    new SWPrecacheWebpackPlugin({
      cacheId: 'debate3d-landing-page',
      filename: 'service-worker.js',
      staticFileGlobs: ['dist/**/*.{js,html,css}'],
      minify: true,
      stripPrefix: 'dist/'
    })
  ]
})

module.exports = config
