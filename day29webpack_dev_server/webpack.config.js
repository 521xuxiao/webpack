/**
 *     webpack-dev-server 详解
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
        // 运行代码的目录
        contentBase: resolve(__dirname, "build"),

        // 监视contentBase目录下的所有的文件， 一旦文件变化就会reload
        watchContentBase: true,

        watchOptions: {
            // 忽略文件
            ignored: /node_modules/
        },

        // 开启gzip压缩
        compress: true,

        port: 8080,

        host: 'localhost',

        open: true,

        // 开启HMR功能
        hot: true,

        // 不要显示启动服务器日志信息
        clientLogLevel: "none",

        // 除了一下基本的启动信息以外，其它的内容都不要显示
        quiet: true,

        // 如果出错了， 不要全屏提示
        overlay: false,

        // 代理服务器
        proxy: {
            "/api": {
                target: 'http://localhost:3000',
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}
