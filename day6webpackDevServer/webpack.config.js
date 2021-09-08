const { resolve } = require("path")
const HtmWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'index.js',
        path: resolve(__dirname, "dist")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "style-loader", "css-loader", "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmWebpackPlugin({
            template: './src/index.html'
        })
    ],

    // 配置webpack-dev-server
    devServer: {
        // 找打包之后的资源
        contentBase: resolve(__dirname, "dist"),
        // 开启 gzip压缩
        compress: true,

        port: 3000,
        open: true
    }
}
