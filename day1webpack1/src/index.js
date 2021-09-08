/**
 *  index.js webpack入口起点文件
 *  1、运行指令
 *      开发环境
 *         webpack ./src/index.js -o ./build/built.jd --mode=development
 *         webpack会以 ./src/index.js 为入口文件开始打包， 打包后输出 ./build/built
 *         整体打包环境是开发环境
 *
 *      生产环境
 *         webpack ./src/index.js -o ./build/built --mode=production
 *         webpack会以 ./src/index.js 为入口文件开始打包， 打包后输出 ./build/built
 *         整体打包环境是生产环境
 *
 *
 *  2、结论
 *       1.webpack 能处理js、 json资源， css、字体、图片不能处理
 *       2.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
 *       3.生产环境比开发环境多一个压缩js的代码功能
 *
 */

import data from "./data.json"

console.log(data);



function test1(a, b) {
    return a + b;
}

console.log(test1(1, 2));
