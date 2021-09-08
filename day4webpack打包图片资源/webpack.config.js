
const { resolve } = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.less/,
                use: [
                    "style-loader", "css-loader", "less-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    // 小于 8kb 的被转成 base64图片资源
                    limit: 8 * 1024,
                    // 关闭es6引入， 开启commonjs引入
                    esModule: false,
                    // 给图片重命名
                    name: '[hash:10].[ext]'
                }
            },
            {
                // 用于解析html中的src引入的图片
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: "development"
}
