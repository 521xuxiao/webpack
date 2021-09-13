/**
 * 懒加载：当需要文件的时候才加载
 * 预加载：会在使用之前加载
 * 正常加载可以认为是并行加载，
 */



document.getElementById("btn").onclick = function() {
    import(/* webpackChunkName: 'test', webpackPrefetch: true */"./main").then(({add, del})=>{
        console.log(add(12, 22));
    }).catch(()=>{})

}
