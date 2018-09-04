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