var http = require('http')
var url = require('url')
var querystring = require('querystring')

function startServer(route, handle) {
    var onRequest = function (req, res) {
        console.log('request received ' + req.url)
        var pathname = url.parse(req.url).pathname

        var data = ""
        req.on("error", function (err) {
            console.error(err)
        }).on("data", function (chunk) {
            data += chunk
        }).on("end", function () {
            if (req.mothod === "POST") {
                if (data.length > 1e6) {
                    req.connection.destroy() // 如果数据很大，就断开
                }
                route(handle, pathname, res, querystring.parse(data))
            } else {
                var params = url.parse(req.url, true).query
                route(handle, pathname, res, params)
            }
        })
        // 或者
        // var data = []
        // data.push(chunk)
        // data = Buffer.concat(data).toString()

    }
    var server = http.createServer(onRequest)
    server.listen(3000)
    console.log('server started on http://127.0.0.1:3000')
}

module.exports.startServer = startServer