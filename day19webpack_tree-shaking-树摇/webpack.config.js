/**
 *     tree-shaking   树摇（取出无用的代码）
 *         前提： 1、必须使用es6引入   2、开启webpack的production环境   3、在package.json中配置 "sideEffects": ["*.css", "*.less"]
 *             作用： 减小体积代码
 *
 *
 */




const {resolve} = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")




// 将node设置为开发环境（默认是生产环境）
// process.env.NODE_ENV = "development";

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.[contenthash:10].js',
        path: resolve(__dirname, "build")
    },
    mode: 'production',
    module: {
        rules: [
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
                    ],
                    // 开启babel缓存， 第二次构建， 速度快
                    cacheDirectory: true
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
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.[contenthash:10].css'
        }),
        // 压缩css和less
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify:{
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ]
}
