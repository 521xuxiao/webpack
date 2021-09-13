/**
 *  dll 是对某些库（第三方库 如 jQuery、 vue、 react）进行单独打包
 *
 *     运行命令  webpack --config webpack.dll.js, 就会出现 jquery 文件和 manifest.json 文件
 *
 */

const {resolve} = require("path")
const webpack = require("webpack")

module.exports = {
    entry: {
        jquery: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: resolve(__diename, 'dll'),
        library: '[name]_[hash]'   // 打包的库里面向外暴露出去的内容叫什么名字
    },
    plugins: [
        // 打包生成一个manifest.json ---> 提供和jquery映射
        new webpack.DllPlugin({
            name: '[name]_[hash]',   // 映射库的暴露内容的名称
            path: resolve(__dirname, 'dll/manifest.json'),  //  输出文件路径

        })
    ],
    mode: 'production'
}
