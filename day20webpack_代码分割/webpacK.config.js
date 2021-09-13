/**
 *   代码分割， 将代码减少，不打包在一个js文件里面
 *      1、 entry: {
 *           index: "./src/index.js",
 *           main: './src/main.js'
 *       }
 *       多入口文件 有几个入口文件就有几个bundle文件输出
 *
 *      2、 optimization:{
                splitChunks: {
                    chunks: "all"
                }
            }

        3、 在js代码里面引入另外一个js做处理


 */





const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    // entry: "./src/index.js",
    // 多入口
    entry: {
        index: './src/index.js',
        main: './src/main.js'
    },
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


    // 将node_modules里面的包单独打包出来，这样就避免了同一个库打包多次， 造成代码体积变大了
    optimization:{
        splitChunks: {
            chunks: "all"
        }
    }
}
