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


