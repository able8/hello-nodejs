# hello-nodejs

轻松学 Node.js 基础篇 入门

视频地址

- [https://www.rails365.net](https://www.rails365.net/movies/qing-song-xue-nodejs-ji-chu-pian-1-ke-cheng-jie-shao-yu-kai-fa-huan-jing-da-jian)
- [b站](https://www.bilibili.com/video/av21010015)

常用链接

- [Node.js 官网](https://nodejs.org/zh-cn/)
- [Node.js 中文网](http://nodejs.cn)
- [CNode：Node.js专业中文社区](https://cnodejs.org)

看视频整理要点笔记:

---

- [hello-nodejs](#hello-nodejs)
    - [1.课程介绍与开发环境搭建](#1%E8%AF%BE%E7%A8%8B%E4%BB%8B%E7%BB%8D%E4%B8%8E%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA)
    - [2.全局对象](#2%E5%85%A8%E5%B1%80%E5%AF%B9%E8%B1%A1)

---

## 1.课程介绍与开发环境搭建

- 主要包括
    - nodejs 基础知识
    - web 服务器
    - 异步 同步 阻塞 非阻塞

- 课程基础
    - javascript 基础
    - html 基础
    - 命令行基础

- Node.js 介绍
    - Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境
    - Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效
    - Node.js 的包管理器 npm，是全球最大的开源库生态系统
    - javascript 是脚本语言，需要解析器才能执行，浏览器就充当了解析器
    - 在Chrome中，解析器就是 V8 引擎，将 javascript 转换成 机器码
    - V8 引擎是开源的，由 C++ 语言编写，性能高
    - Node.js 高性能，事件驱动，非阻塞，生态圈很好

- Node.js 安装
    - [官网](https://nodejs.org/zh-cn/) 下载安装即可，很小不到20M！
    - 验证是否成功，命令行输入 `node -v` 显示版本号如 `v8.11.4`
    - 按提示升级 npm，Update available 5.6.0 → 6.4.1， `npm i -g npm`
    - macOS 安装完提示如下

```sh
This package has installed:
    • Node.js v8.11.4 to /usr/local/bin/node
    • npm v5.6.0 to /usr/local/bin/npm
Make sure that /usr/local/bin is in your $PATH.
```

- Node.js 用途

    - javascript 运行环境
    - 操作文件（grunt gulp webpack）
    - 操作数据库
    - 写后端 api
    - 命令行工具
    - web 开发
    - 聊天室

- JavaScript 语句后应该加分号么？
    - [知乎讨论](https://www.zhihu.com/question/20298345)
    - 代码风格而已，没有定论
    - 少分号更易读，不累
    - 必须加分号情况很少见：一行开头是括号`(`或者方括号`[`的时候加上分号就可以了，其他时候都不要
    - 如果下一行的行首是`(  [  /  +  -`之一的话，js不会自动在上一行句尾加上分号

## 2.全局对象

- 全局对象
    - 不用导入，直接使用的对象
    - [官方文档](http://nodejs.cn/api/globals.html#globals_global_objects)
    - Buffer 类，用于处理二进制数据
    - console，用于打印 stdout 和 stderr
    - global, 全局的命名空间对象
    - process，进程对象
    - setTimeout(callback, delay[, ...args])
    - setInterval(callback, delay[, ...args])
    - setImmediate(callback[, ...args])
    - clearTimeout(timeoutObject)
    - clearInterval(intervalObject)
    - clearImmediate(immediateObject)

- 以下变量虽然看起来像全局变量，但实际上不是
    - 全局变量在所有模块中均可使用
    - 以下对象作用域只在模块内，详见 [module文档](http://nodejs.cn/api/modules.html)：
    - __dirname
    - __filename
    - exports
    - module
    - require()

- 运行 `.js` 脚本文件
    - `node app` 或者 `node app.js`

- 实践代码

```js
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
```

## 3.回调函数

```js
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
```

## 4.模块

- module 对象
    - 每个文件都被视为独立的模块
    - 每个模块中，module 指向表示当前模块的对象的引用
    - module 实际上不是全局的，而是每个模块本地的
    - module.exports 导出模块内的对象，方便其他对象引用
    - require() 引入模块
    - 当 Node.js 直接运行一个文件时，require.main 会被设为它的 module
    - 可以通过 require.main === module 来判断一个文件是否被直接运行
    - module 提供了一个 filename 属性（通常等同于 __filename）
    - 可以通过检查 require.main.filename 来获取当前应用程序的入口点

```js
// counter.js
var counter = function (arr) {
    return "There are " + arr.length + " elements in array"
}

var adder = function (a, b) {
    return `the sum of the 2 numbers is ${a+b}`
}

var pi = 3.14

// 只有一个时可以这样导入
// module.exports = counter

/*
module.exports.counter = counter
module.exports.adder = adder
module.exports.pi = pi
*/

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi,
}
/* 对象可以简写
module.exports = {
    counter,
    adder,
    pi,
}
*/

//p4.js
var stuff = require('./count')

console.log(stuff.counter(['ruby', 'nodejs', 'react']))
console.log(stuff.adder(3, 2))
console.log(stuff.pi)
```

## 5.事件 events

- 多数 Node.js 核心 API 都采用异步事件驱动架构
- 所有能触发事件的对象都是 EventEmitter 类的实例
- 事件名称通常是驼峰式的字符串

- 实践代码

```js
var events = require('events')
var util = require('util')

// 事件 对象
var myEmitter = new events.EventEmitter()

// 绑定 事件名称 和 回调函数
myEmitter.on('someEvent', function (message) {
    console.log(message)
})

// 触发实践，使用事件名称
myEmitter.emit('someEvent', 'The event was emitted')

// 创建对象
var Person = function (name) {
    this.name = name
}

// 继承，让Person类具有事件对象的特性，绑定和触发事件
util.inherits(Person, events.EventEmitter)
// 新建对象
var xiaoming = new Person('xiaoming')
var lili = new Person('lili')

var person = [xiaoming, lili]

// 循环person数组，绑定事件
person.forEach(function (person) {
    person.on('speak', function (message) {
        console.log(person.name + ' said: ' + message)
    })
})

// 触发事件
xiaoming.emit('speak', 'hi')
lili.emit('speak', 'I want a curry')
```

## 6.读写文件（同步和异步）

```js
var fs = require('fs')

// 同步读写文件，顺序执行，如果读取时间很长，会阻塞进程
var readMe = fs.readFileSync('readMe.txt', 'utf8')
fs.writeFileSync('writeMe.txt', readMe)

console.log(readMe)
console.log('finished sync')

// 异步读写文件
// 异步事件，Nodejs 维护一个事件队列，注册事件，完成后执行主线程
// 当主线程空闲时，取出执行事件，从线程池中发起线程执行事件， 当事件执行完成后通知主线程。这就是异步高效的原因。

var readMe = fs.readFile('readMe.txt', 'utf8', function (err, data) {
    fs.writeFile('writeMe.txt', data, function () {
        console.log('writeMe has finished')
    })
})

console.log('end')
```

