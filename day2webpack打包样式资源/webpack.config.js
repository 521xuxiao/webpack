/**
 *  webpack.config.js 的配置文件
 *      作用：指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）
 *
 *      所有的构建工具都是基于 node.js 平台运行的, 模块化采用 common.js
 */

const { resolve } = require("path")

module.exports = {
    // webpack入口
    entry: "./src/index.js",


    // 输出
    output: {
        // 输出文件名
        filename: 'build.js',
        // 输出路径
        //__dirname  node.js的变量， 代表当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
    },


    // loader的配置
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },

    // plugins插件的配置
    plugins: [

    ],

    // mode模式 (development 或者 production)
    mode: 'development'
}

