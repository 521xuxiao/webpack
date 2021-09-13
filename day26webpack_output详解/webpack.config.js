/**
 *     output 详解
 *         filename: 文件名称（指定目录+名称）
 *         path:     输出文件目录（将来所有资源输出的公共目录）
 *         publicPath：所有资源引入的公共路径的前缀，比如 ‘img/1.jpg’  ---> '/img/1.jpg'
 *
 */



module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "dist"),
        publicPath: '/',
        chunkFilename: 'js/[name]_chunk.js',   // 对于非入口chunk的名称修改
        // library: "[name]",    // 整个库向外暴露的变量名
        // libraryTarget: "window",  // 变量名添加到哪个上  browser
        // libraryTarget: "global",  // 变量名添加到哪个上  node
        // libraryTarget: "commonjs"
    }
}
