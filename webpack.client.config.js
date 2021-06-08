const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin')
const sharedConfig = require('./webpack.shared.config.js');
// const Dotenv = require('dotenv-webpack');

const clientPort = process.env.PORT || 8080;
const entryPath = path.join(__dirname, './build/client')

const config = {
    target: 'web',

    entry: ['@babel/polyfill', 'react-hot-loader/patch', './src/client/index.js'], // [A]

    output: {
        path: entryPath, // [B]
        // path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/', // [C]
        // filename: 'scripts/bundle.js', // [B]
        // publicPath: `http://localhost:${clientPort}/`, // [C]
    },

    devServer: { 
        port: clientPort, // [C]
        contentBase: entryPath,
        compress: true,
        hot: true,
        proxy: [
            {
            // context: ['/auth', '/api'],
            context: ['/'],
            target: `http://localhost:${3001}`,
            },
        ],
    },

    module: {
        rules: [
            {
                test: /\.m?(css|scss|sass)$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    // {
                    //     loader: 'css-loader',
                    //     options: {
                    //         modules: {
                    //             exportLocalsConvention: 'camelCase',
                    //             localIdentName: '[local]_[hash:base64:5]',
                    //         },
                    //     },
                    // },
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
    
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: 'bundle.css', // [D]
        }),
        // new LoadablePlugin(),
        new LoadablePlugin({ writeToDisk: true }),
        // new Dotenv(),
    ],
    resolve : {
        fallback : {
            fs : false,
            path : false,
        }
    },
    // node: {
    //   fs: 'empty',
    // },
};

module.exports = merge(sharedConfig, config); // [E]