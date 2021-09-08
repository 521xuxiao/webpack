const {resolve} = require("path")

const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports  = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}
