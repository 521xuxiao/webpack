const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'index.js',
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            /**
             *   语法检查 eslint, 用到的库有eslint-loader和eslint
             *     只检查自己写的代码， 引用的第三方库不检查
             *
             *     设置检查规则：
             *         package.json中eslintConfig中设置
             *
             *         "eslintConfig": {
                            "extends": "airbnb-base"
                        }
             *
             *         airbnb ---->  eslint-config-airbnb-base   eslint   eslint-plugin-import
             *
             *
             *         总起来用eslint做检查代码的时候需要的库有：  eslint 、 eslint-loader 、 eslint-config-airbnb-base 、 eslint-plugin-import
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // 由于eslint检查语法比较严格， 所以开启fix为true，会自动帮我们留空格， 格式化代码
                    fix: true
                }
            }
        ]
    },
    mode: 'development',
    plugin: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
