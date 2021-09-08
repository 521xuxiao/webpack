/**
 * 开发环境的配置， 只要代码能运行就行
 *    webpack  直接打包
 *    npx webpack-dev-server  运行
 */






const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: './src/index.js',
    // 输出到 build/js/index.js
    output: {
        filename: 'js/build.js',
        path: resolve(__dirname, "build")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "style-loader", "css-loader", "less-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ]
            },
            // 处理css中的背景图片
            {
                test: /\.(jpg|png|jif)$/,
                loader: 'url-loader',
                options: {
                    // 小于8kb转成base64
                    limit: 8 * 1024,
                    // 重命名
                    name: "[hash:10].[ext]",
                    //关闭es6引入
                    esModule: false,
                    // 图片输出到imgs目录下
                    output: 'imgs'
                }
            },
            // 处理html中的img图片
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                exclude: /\.(html|js|css|less|png|jpg|jif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: resolve(__dirname, "build"),
        compress: true,
        open: true,
        port: 3000
    }
}
