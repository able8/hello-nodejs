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
