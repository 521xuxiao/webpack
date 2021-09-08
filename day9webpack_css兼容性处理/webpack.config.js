const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


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
                    /** 配置css兼容性处理 需要两个包  postcss-preset-env 和 postcss-loader,  找到package.json 中的browserslist
                     *      "browserslist": {
                                "development": [
                                  "last 1 chrome version",
                                  "last 1 firefox version",
                                  "last 1 safari version"
                                ],
                                "production": [
                                  ">0.2%",
                                  "no dead",
                                  "not op_mini all"
                                ]
                            }
                     */
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
        })
    ]
}
