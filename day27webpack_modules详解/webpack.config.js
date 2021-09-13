/**
 *    modules 详解
 *
 *
 */



module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "dist")
    },
    modules: {
        rules: [
            {
                test: /\.css$/,
                // 多个loader用 use
                use: [
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.js$/,
                // 排除掉node_modules
                exclude: /node_modules/,
                // 只检查src目录下的文件
                include: resolve(__dirname, 'src'),
                // 单个loader用 loader
                loader: "eslint-loader",
                // 两个相同的js文件优先执行
                enforce: "pre",
                // 延后执行
                // enforce: "post",
                options: {

                }
            },
            {
                // 以下配置只会生效一个
                oneOf: [
                    {}
                ]
            }
        ]
    }
}
