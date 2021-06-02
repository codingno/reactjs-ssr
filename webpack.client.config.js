const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sharedConfig = require('./webpack.shared.config.js');

const clientPort = process.env.PORT || 8080;

const config = {
    target: 'web',

    entry: './src/client/index.js', // [A]

    output: {
        // path: path.join(__dirname, './build/client'), // [B]
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        // filename: 'scripts/bundle.js', // [B]
        // publicPath: `http://localhost:${clientPort}/`, // [C]
    },

    devServer: { 
        port: clientPort, // [C]
        liveReload: true
    },

    module: {
        rules: [{
            test: /\.css$/, // [D]
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            exportLocalsConvention: 'camelCase',
                            localIdentName: '[local]_[hash:base64:5]',
                        },
                    },
                },
            ],
        }],
    },
    
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: 'bundle.css', // [D]
        }),
    ],
};

module.exports = merge(sharedConfig, config); // [E]