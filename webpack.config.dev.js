require('dotenv').config()
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PORT = process.env.PORT || 3001

module.exports = {
    entry: './src/client',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
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
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({
      template : path.resolve(__dirname, './src/views/index.html'),
    })],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      hot: true,
      proxy: [
        {
          // context: ['/auth', '/api'],
          target: `http://localhost:${PORT}`,
        },
      ],
    },
  }