/**
 *      HMR 热模块替换
 *         作用： 只有一个模块发生变化， 其它得模块不更新， 极大的提升构建速度
 *
 *         样式： 可以使用HMR功能， style-loader内部实现了
 *         js:   默认不能使用HMR功能, 需要修改js代码， 实现HMR功能（见 index.js 文件）
 *               注意：HMR功能只能对非入口js文件
 *         html: 默认不能使用HMR功能， 修改entry即可（还是不能使用HMR功能， 不需要， 因为项目中就只有一个html文件）
 *
 *
 */






const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: ['./src/index.js', './src/index.html'],
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
        port: 3000,
        // 开启 HMR 功能（只是样式）
        hot: true
    }
}
