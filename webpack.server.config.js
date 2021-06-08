const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.shared.config.js');

let config = {
    target: 'node', // [A]

    // entry: './src/server/index.js', // [B]
    entry: ['@babel/polyfill', './src/server/index.js'],

    output: { // [C]
        path: path.join(__dirname, './build/server'), 
        filename: 'bundle.js',
    },

    externals: [webpackNodeExternals()], // [D]

    module: {
        rules: [{
            test: /\.m?(css|scss|sass)$/,
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            exportOnlyLocals: true,
                            exportLocalsConvention: 'camelCase',
                            localIdentName: '[local]_[hash:base64:5]'
                        },
                    }
                },
                'sass-loader'
            ]
        }],
    },
};

module.exports = merge(sharedConfig, config); // [F]