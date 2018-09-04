var http = require('http')

function startServer(route, handle) {
    var onRequest = function (req, res) {
        console.log('request received ' + req.url)
        route(handle ,req.url, res)
    }
    var server = http.createServer(onRequest)
    server.listen(3000)
    console.log('server started on http://127.0.0.1:3000')
}

module.exports.startServer = startServer