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