const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'production',
  performance: {
    maxAssetSize: 100000,
  },
  module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.jpg$/,
          use: {
            loader: 'file-loader'
          }
        }
      ]
  }
}
