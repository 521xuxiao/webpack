/**
 *      source-map  提供源代码到构建后代码的映射关系， 如果构建后的代码出错了，通过映射可以追踪到源代码
 *
 *                  devtool 的值有很多种
 *                      1、inline-source-map  内联
 *                      只生成一个内联source-map
 *                      错误代码的准确信息和源代码的错误位置
 *
 *                      2、hidden-source-map  外部
 *                      错误代码的信息， 但是不能提示错误代码的位置
 *
 *                      3、eval-source-map    内联
 *                      每个文件都对应一个source-map
 *                      错误代码的准确信息和源代码的错误位置
 *
 *                      4、nosources-source-map 外部
 *                      错误代码的信息， 但是没有源代码的信息
 *
 *                      5、cheap-source-map     外部
 *                      错误代码的准确信息和源代码的错误位置
 *
 *                      6、cheap-module-source-map 外部
 *                      错误代码的准确信息和源代码的错误位置
 *
 *
*                   内联和外部的区别：
 *                      外部生成的文件， 内联没有， 所以内联构建的速度快
 *
*                   开发环境：速度快，调试更友好
 *                       速度快（ eval > inline > cheap ）
 *                            eval-cheap-source-map
 *                            eval-source-map
 *                       调试更友好
 *                            source-map
 *                            cheap-module-source-map
 *                            cheap-source-map
 *                       所以开发阶段用 eval-source-map（vue，react脚手架就是用的 eval-source-map ）
 *
 *                  生产环境：代码要不要隐藏，调试要不要友好
 *                       内联会让代码体积变的很大， 一般不用内联
 *                       nosources-source-map 全部隐藏
 *                       hidden-source-map 只会隐藏源代码
 *                     所以生产阶段用source-map比较好
 *
 */






const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: ['./src/index.js', './src/index.html'],
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
        hot: true
    },

    // source-map
    devtool: 'source-map'
}
