/**
 *     optimization 详解
 *
 *
 */

const TerserWebpackPlugin = require("terser-webpack-plugin")



module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "dist")
    },
    resolve: {
        alias: {
            $css: resolve(__dirname, "src/css")
        },
        extensions: ["js", "json", "jsx"],
        modules: [resolve(__dirname, '../node_modules'), "node_modules"]
    },

    devServer: {
        contentBase: resolve(__dirname, "build"),
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/
        },
        compress: true,
        port: 8080,
        host: 'localhost',
        open: true,
        hot: true,
        clientLogLevel: "none",
        quiet: true,
        overlay: false,
        proxy: {
            "/api": {
                target: 'http://localhost:3000',
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },

    optimization: {
        splitChunks: {
            chunks: 'all',

            /**
             * 以下都是默认配置
             */
            // 分割的chunk最小为30kb（大于30kb才会被分割）
            minSize: 30 * 1024,

            // 没有最大限制
            maxSize: 0,

            // 要提取的chunks最少被引用一次
            minChunks: 1,

            // 按需加载时并行加载的文件的最大的数量
            maxAsyncRequests: 5,

            // 入口js文件最大并行请求数量
            maxInitialRequests: 3,

            // 名称连接符
            automaticNameDelimiter: '~',

            // 可以使用命名规则
            name: true,

            // 分割chunk的组
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,

                }
            }
        },
        // 将当前模块的记录其它模块的hash单独打包为一个文件 runtime
        // 解决a文件导致b文件的contenthash变化
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`
        },
        minimizer: [
            // 配置生产环境的压缩方案  js和css
            new TerserWebpackPlugin({
                // 开启缓存
                cache: true,

                // 开启多线程打包
                parallel: true,

                // 开启sourceMap
                sourceMap: true
            })
        ]
    }
}
