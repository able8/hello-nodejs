var http = require('http')

var server = http.createServer(function (req, res) {
    console.log('request received')
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var myObj = {
        name: 'able',
        job: 'programmer',
        age: 27
    }
    res.end(JSON.stringify(myObj))
})

server.listen(3000)
console.log('server started on http://127.0.0.1:3000')

