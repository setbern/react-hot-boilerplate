var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'babel-polyfill',
        './src/styles/index.less',
        './src/index.jsx',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        filename: 'bundle.js', //name of the output file
        path: path.resolve(__dirname, 'public') // where the bundled file should be saved
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'], // plugins and presets found in .babelrc file
                include: [
                    path.resolve(__dirname, "src"),
                ]
            },
            {
                test: /\.less$/,
                loader: 'style!css!autoprefixer!less'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public') // where webpack-dev-server should look for index.html
    }
};
