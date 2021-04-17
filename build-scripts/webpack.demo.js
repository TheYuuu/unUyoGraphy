const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { modules } = require('./config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, '../example/index.tsx'),
  output: {
    path: path.resolve(process.cwd(), './docs'),
    publicPath: process.env.PUBLIC_URL || './',
    filename: isProd ? '[name].[hash:7].js' : '[name].js',
    chunkFilename: isProd ? '[name].[hash:7].js' : '[name].js'
  },
  externals: {
    // d3: ['d3-selection', 'd3-array', 'd3-scale'],
    // react: 'react'
  },
  devServer: {
    host: 'localhost',
    port: 8085,
    publicPath: '/',
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: modules,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  mode: 'development', // production | development
  optimization: {
    splitChunks: {
      chunks: 'all', // 对同步引入模块 和 异步引入模块都做代码分割，all async initial
      cacheGroups: {
        common: {
          name: `common`,
          minChunks: 3,
          priority: 1,
          chunks: 'async',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/index.tpl'),
      favicon: path.resolve(__dirname, '../example/favicon.png'),
      filename: 'index.html',
      title: 'unUyo Graphy'
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
}