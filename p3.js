function sayHi() {
    console.log('Hi')
}

sayHi() // 调用函数

// 将匿名函数赋给变量
var sayBye = function (name) {
    console.log(name + ' Bye')
}

sayBye()

// 第一个参数是函数
function callFunction(fun, name) {
    fun(name)
}

callFunction(sayBye, 'able')
// 或者
callFunction(function (name) {
    console.log(name + ' Bye')
}, 'able')