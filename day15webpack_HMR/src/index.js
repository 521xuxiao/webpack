/**
  *       入口js
 *
 */

import print from "./print"


print();



// js中开启HMR功能
if(module.hot) {
    module.hot.accept("./print.js", function () {
        print();  // 和外面的print() 是一个
    })
}
