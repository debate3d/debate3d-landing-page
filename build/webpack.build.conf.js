const path = require('path')
const { defaultsDeep } = require('lodash')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const baseWepackConfig = require('./webpack.base.conf')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/[contentHash].css'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new UglifyJsPlugin()
  ]
})

module.exports = config
