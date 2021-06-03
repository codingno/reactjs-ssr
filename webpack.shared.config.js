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
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
            }
          ]
    },

    resolve: {
        extensions: ['.js','.jsx'], // [C]
    },
};