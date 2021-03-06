const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: {
        app: './src/app.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    watch: true,
    module: {
        rules: [
        {
            test: /\.jsx?$/,
            exclude: [path.resolve(__dirname, "node_modules")],
            loader: "babel-loader",
            query: {
                presets: ["es2015","react","stage-0"]
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: "url-loader",
                    options:{
                        limit: 81920121354
                    }
                }
            ]
        },        
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                "file-loader"
            ]
        }]        
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"})        
    ],
    resolve:{
        modules: ['node_modules']
    }
};

