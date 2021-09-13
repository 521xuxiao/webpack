/**
 *
 *   懒加载 和 预加载      见 index.js 文件
 *
 *      注意： 预加载存在兼容性问题，只有在pc高版本的浏览器中才能使用，懒加载兼容性可以
 *
 *
 *
 *
 */





const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "js/[name].[contenthash:10].js",
        path: resolve(__diraname, "build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index/html'
        })
    ],
    mode: 'production',
    optimization:{
        splitChunks: {
            chunks: "all"
        }
    }
}
