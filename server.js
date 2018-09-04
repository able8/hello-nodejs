var http = require('http')
var url = require('url')

function startServer(route, handle) {
    var onRequest = function (req, res) {
        console.log('request received ' + req.url)
        var pathname = url.parse(req.url).pathname
        var params = url.parse(req.url, true).query
        route(handle, pathname, res, params)
    }
    var server = http.createServer(onRequest)
    server.listen(3000)
    console.log('server started on http://127.0.0.1:3000')
}

module.exports.startServer = startServer