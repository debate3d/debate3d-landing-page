const { defaultsDeep } = require('lodash')
const path = require('path')
const baseWepackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

const configToClean = {
  root: resolve('')
}

const config = defaultsDeep({}, baseWepackConfig, {
  watch: true,
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, '..', 'dist')], configToClean),
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
      inject: true
    }),
    new ExtractTextPlugin({
      filename: 'css/[contentHash].css'
    })
  ]
})

module.exports = config
