const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { modules } = require('./config');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../packages/index.ts'),
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'unUyo.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'unUyo',
    libraryTarget: 'umd',
  },
  externals: [
    /d3/
  ],
  module: modules,
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, '../src/lib'),
      '@': path.resolve(__dirname, '../'),
    },
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  mode: 'development', // production | development
  optimization: {
    splitChunks: {
      cacheGroups: {
        d3: {
          name: `d3`,
          test: /[\\/]d3[\\/]/,
          priority: 10,
          chunks: 'async',
          reuseExistingChunk: true
        },
        common: {
          // 使用三次次及三次以上的库
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
    new ForkTsCheckerWebpackPlugin()
  ]
}