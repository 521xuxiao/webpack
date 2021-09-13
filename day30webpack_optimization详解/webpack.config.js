/**
 *     optimization 详解
 *
 *
 */



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

            // 分割的chunk最小为30kb（大于30kb才会被分割）
            minSize: 30 * 1024,

            // 没有最大限制
            maxSize: 0,

            // 要提取的chunks最少被引用一次
            minChunks: 1,

            
        }
    }
}
