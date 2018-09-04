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
    - [3.回调函数](#3%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0)
    - [4.模块](#4%E6%A8%A1%E5%9D%97)
    - [5.事件 events](#5%E4%BA%8B%E4%BB%B6-events)
    - [6.读写文件（同步和异步）](#6%E8%AF%BB%E5%86%99%E6%96%87%E4%BB%B6%E5%90%8C%E6%AD%A5%E5%92%8C%E5%BC%82%E6%AD%A5)
    - [7.创建和删除目录](#7%E5%88%9B%E5%BB%BA%E5%92%8C%E5%88%A0%E9%99%A4%E7%9B%AE%E5%BD%95)
    - [8.流和管道](#8%E6%B5%81%E5%92%8C%E7%AE%A1%E9%81%93)

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

## 7.创建和删除目录

- [ fs - 文件系统 API 文档](http://nodejs.cn/api/fs.html#fs_fs_unlink_path_callback)

```js
var fs = require('fs')

// 异步删除文件
fs.unlink('writeMe.txt', function () {
    console.log('delete writeMe.txt file')
})

// 同步创建和删除目录
fs.mkdirSync('stuff')
fs.rmdirSync('stuff')

// 异步
fs.mkdir('stuff', function () {
    fs.readFile('readMe.txt', 'utf8', function (err, data) {
        fs.writeFile('./stuff/writeMe.txt', data, function () {
            console.log('copy successfully')
        })
    })
})
```

## 8.流和管道

- 流（stream）
    - 处理流式数据的抽象接口
    - stream 模块提供了一些基础的 API，用于构建实现了流接口的对象
    - 流可以是可读的、可写的、或是可读写的，所有的流都是 EventEmitter 的实例
    - 流处理数据通过缓存可以提高性能

- 管道
    - 使用管道，代码量更少
    - myReadStream.pipe(myWriteStream)

```js
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt')
myReadStream.setEncoding('utf8')
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')
var data = ''

myReadStream.on('data', function (chunk) {
    console.log('new chunk received')
    // console.log(chunk)
    myWriteStream.write(chunk)
})

myReadStream.on('end', function () {
    console.log(data)
})

var writeData = 'hello world'
myWriteStream.write(writeData)
myWriteStream.end()
myWriteStream.on('finish', function () {
    console.log('finished')
})

// 使用管道，代码量更少
myReadStream.pipe(myWriteStream)
```

## 9.web 服务器 part1 介绍

```js
var http = require('http')

var server = http.createServer(function (req, res) {
    console.log('request received')
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.write('Hello from out application')
    // res.end()
    // 或
    res.end('Hello from out application')
})

server.listen(3000, '127.0.0.1')
console.log('server started on http://127.0.0.1:3000')
```

## 10.web 服务器 part2 响应JSON

- 响应JSON

```js
var myObj = {
        name: 'able',
        job: 'programmer',
        age: 27
    }
    res.end(JSON.stringify(myObj))
```

- [JSON 对象](https://wangdoc.com/javascript/stdlib/json.html)
    - 字符串必须使用双引号表示，不能使用单引号
    - 对象的键名必须放在双引号里面
    - 数组或对象最后一个成员的后面，不能加逗号
    - JSON对象是 JavaScript 的原生对象，用来处理 JSON 格式数据
    - JSON.stringify方法用于将一个值转为 JSON 字符串
    - JSON.parse方法用于将 JSON 字符串转换成对应的值

## 11.web 服务器 part3 响应HTML页面

```js
var http = require('http')
var fs = require('fs')

var onRequest = function (req, res) {
    console.log('request received')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
    myReadStream.pipe(res)
}

var server = http.createServer(onRequest)
server.listen(3000)
console.log('server started on http://127.0.0.1:3000')
```

## 12.web 服务器 part4 用模块化思想组织代码

- 代码封装成模块，方便统一管理和调用


```js
// server.js
var http = require('http')
var fs = require('fs')

function startServer() {
    var onRequest = function (req, res) {
        console.log('request received')
        res.writeHead(200, { 'Content-Type': 'text/html' })

        var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
        myReadStream.pipe(res)
    }
    var server = http.createServer(onRequest)
    server.listen(3000)
    console.log('server started on http://127.0.0.1:3000')
}

module.exports.startServer = startServer

// 调用
var server = require('./server')

server.startServer()
```

## 13.web 服务器 part5 路由

- `console.dir(xx)` 查看对象的所有属性和方法
- `req.url` 请求中包含url等属性

```js
unction startServer() {
    var onRequest = function (req, res) {
        console.log('request received ' + req.url)

        if (req.url === '/' || req.url === '/home') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res)
        } else if (req.url === '/review') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(res)
        } else if (req.url === '/api/v1/records') {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            var jsonObj = {
                name: 'able'
            }
            res.end(JSON.stringify(jsonObj))
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res)
        }
    }
    var server = http.createServer(onRequest)
    server.listen(3000)
    console.log('server started on http://127.0.0.1:3000')
}
```

## 14.web 服务器 part6 重构路由代码

- 讲路由、处理函数、主程序分离，单独存放
- 分工明确，各司其职，方便管理