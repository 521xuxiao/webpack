const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'index.js',
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            /**
             * js 兼容性处理 babel-loader
             *     1、 @babel/preset-env  只能处理一些简单地es6语法
             *     2、 @babel/polyfill    全部js兼容处理（打包之后js文件变得特别的大）     使用的时候只需要在入口index.js中引入即可： import "@babel/polyfill"
             *     3、 按需加载处理js兼容问题， 用到 core-js 包
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // "presets": ["@babel/preset-env"]
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                // 按需加载
                                useBuiltIns: 'usage',
                                // 指定 core-js 版本
                                corejs: {
                                    version: 3
                                },
                                // 指定兼容性做到哪个版本的浏览器
                                targets: {
                                    chrome: '60',
                                    firefox: '60',
                                    ie: '9',
                                    safari: '10',
                                    edge: "17"
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    mode: 'development',
    plugin: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
