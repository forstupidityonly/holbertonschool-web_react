const path = require('path');

module.exports = {
  entry: {
    header: {
      import: './modules/header/header.js',
      dependOn: 'shared',
    },
    body: {
      import './modules/body/body.js',
      dependOn: 'shared',
    },
    footer: {
      import './modules/footer/footer.js',
      dependOn: 'shared',
    },
    shared: ['lodash', 'jquery'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
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
            loader: 'file-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          }
        }
      ]
  }
}
