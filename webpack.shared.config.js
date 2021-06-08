const Dotenv = require('dotenv-webpack');
module.exports = {
    mode: process.env.NODE_ENV === 'production' // [A]
        ? 'production' 
        : 'development',

    module: {
        rules: [
            {
              test: /\.m?(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                  plugins: [
                    "react-hot-loader/babel",
                    "@babel/plugin-transform-arrow-functions",
                    "@loadable/babel-plugin",
                  ]
                }
              }
            }
          ]
    },

    resolve: {
        extensions: ['.js','.jsx'], // [C]
        alias: {
          'react-dom': '@hot-loader/react-dom'
        },
    },
    plugins: [
      new Dotenv(),
    ],
    devtool : 'eval',
    // devtool : 'eval-source-map',
    // devtool : 'eval-cheap-module-source-map',
};