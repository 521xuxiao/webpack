const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")


// 设置nodejs的环境变量 （默认nodejs是生产环境）
process.env.NODE_ENV = "development";

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'index.js',
        path: resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 抽离css文件的loader
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    // css 兼容处理
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: ()=>[
                                require("postcss-preset-env")()
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 抽离css样式的插件
        new MiniCssExtractPlugin({
            filename: 'css/index.css'
        }),
        // 压缩css
        new OptimizeCssAssetsWebpackPlugin()
    ]
}
