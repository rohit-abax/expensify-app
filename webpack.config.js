const { pathToFileURL } = require("url");

const path=require('path');

//console.log(__dirname);

module.exports={
    entry: './src/app.js',
    //entry: './src/playground/hoc.js',
    //entry: './src/playground/redux-101.js',
    //entry: './src/playground/redux-expensify.js',
    //entry: './src/playground/destructuring.js'
    output: {
     path: path.join(__dirname,'public'),
     filename: 'bundle.js'    
    },
    module: {
        rules: [{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    }
};