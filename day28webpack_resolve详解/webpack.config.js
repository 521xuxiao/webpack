/**
 *     resolve 详解
 *
 *
 */



module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "dist")
    },
    // 解析模块的规则
    resolve: {
        // 类似于定义一个变量的名字, 用法参看index.js文件
        alias: {
            $css: resolve(__dirname, "src/css")
        },

        // 配置路径省略的文件后缀名
        extensions: ["js", "json", "jsx"],

        // 告诉webpack解析模块上哪个目录下找
        modules: [resolve(__dirname, '../node_modules'), "node_modules"]
    }
}
