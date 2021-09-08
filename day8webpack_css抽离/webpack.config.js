

const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 抽离css
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    enter: './src/js/index.js',
    output: {
        filename: 'js/index.js',
        path: resolve(__dirname, "build")
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    // "style-loader", "css-loader"
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // 抽离出来的css放在 css 目录下，并进行重命名
            filename: "css/build.css"
        })
    ],
    mode: 'development'
}
