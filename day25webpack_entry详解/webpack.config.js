/**
 *   entry的详细介绍
 *      1、entry可以是个字符串
 *            entry: "./src/index.js"
 *           单入口， 打包形成一个chunk， 输出一个bundle
 *      2、entry数组
 *            entry: ["./src/index.js", "./src/main.js"]
 *           多入口，打包生成一个chunk， 输出一个bundle,
 *           作用：只有在HMR中让html具有热更新的时候使用
 *      3、entry对象
 *           entry: {
 *               index: "./src/index.js",
 *               main: "./src/main.js"
 *           }
 *           多入口， 有几个入口， 就生成几个chunk， 输出几个bundle
 *
 *
 *           特殊：
 *              entry: {
 *                  index: ["./src/index.js", "./src/add.js"],
 *                  main: "./src/main.js"
 *              }
 */


