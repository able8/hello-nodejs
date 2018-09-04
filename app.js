console.log('hello world');

setTimeout(function () {
    console.log("3 seconds have passed 2");
}, 3000);

// 箭头函数，es6的写法
setTimeout(() => {
    console.log("3 seconds have passed 1");
}, 3000);

// 每间隔2秒不断执行
setInterval(function () {
    console.log("2 seconds have passed");
}, 2000);

var time = 0
var timer = setInterval(function () {
    time += 2;
    console.log(time + " seconds have passed");
    if (time > 6) {
        clearInterval(timer);
        console.log("clearInterval")
    }
}, 2000)

// 输出当前目录 和 带绝对路径的文件名
console.log(__dirname)
console.log(__filename)

console.log('end')
console.dir(global)
