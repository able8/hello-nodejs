var http = require('http')

var server = http.createServer(function (req, res) {
    console.log('request received')
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.write('Hello from out application')
    // res.end()
    // 或
    res.end('Hello from out application')
})

server.listen(3000)
console.log('server started on http://127.0.0.1:3000')

