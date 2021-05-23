const path = require('path');

module.exports = {
    entry: './src/client',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.m?(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    mode: 'production',
  }