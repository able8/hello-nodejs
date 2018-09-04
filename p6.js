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
