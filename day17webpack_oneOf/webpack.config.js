/**
 *    oneOf 的作用是 匹配到loader处理之后就不会在走下面的loader了， 这样loader处理文件会更快， 就类似于for循环里面的break,
 *    但是用oneOf有个问题就是处理js的有两个loader， 所以要把eslint-loader放在oneOf的外面即可
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
            // js代码检测，eslint
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: "pre",   // 优先执行
                options: {
                    fix: true
                }
            },
            {
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [
                            MiniCssExtractPlugin.loader,   // 抽离css样式
                            "css-loader",

                            // css兼容处理, 需要在package.json中设置 browserslist
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: () => [
                                        require("postcss-preset-env")()
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            MiniCssExtractPlugin.loader,   // 抽离less样式
                            "css-loader",
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: ()=>[
                                        require("postcss-preset-env")()
                                    ]
                                }
                            },
                            "less-loader"
                        ]
                    },
                    // js兼容性处理
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        options:{
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        // 按需加载
                                        useBuiltIns: 'usage',
                                        // 指定 core-js 版本
                                        corejs: {version: 3},
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
                    },
                    {
                        test: /\.(jpg|png|gif)$/,
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            name: '[hash:10].[ext]',
                            outputPath: 'imgs',
                            esModule: false
                        }
                    },
                    {
                        test: /\.html$/,
                        loader: 'html-loader'
                    },
                    {
                        exclude: /\.(js|css|less|html|jpg|png|jif)$/,
                        loader: "file-loader",
                        options: {
                            outputPath: 'media'
                        }
                    }
                ]
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
    devtool: 'source-map'
}
