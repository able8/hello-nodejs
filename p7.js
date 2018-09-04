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
