/**
 *   引入 add-asset-html-webpack-plugin 包
 */



const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin")




module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'index.js',
        path: resolve(__dirname, "build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 告诉webpack， 哪些库不参与打包, 名称也得改
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, "dll/manifest.json")
        }),
        // 将某个文件打包出去，并在html中自动引入该资源
        new AddAssetHtmlWebpackPlugin({
            filepath: resolve(__dirname, "dll/jquery.js")
        })
    ],
    mode: 'production'
}
