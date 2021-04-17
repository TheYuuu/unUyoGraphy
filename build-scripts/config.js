const path = require('path');

module.exports = {
  modules: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe|ico?g)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]'),
          esModule: false
        }
      }
    ]
  }
}