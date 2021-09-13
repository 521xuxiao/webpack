// 通过这种方式引入的js就会单独将main.js打包出来
//    webpackChunkName是对打包出来的文件进行重命名为test
import(/* webpackChunkName: 'test' */"./main").then((res)=>{

}).catch((err)=>{

})
