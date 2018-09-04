fs = require('fs')

function route(handle, pathname, res, params) {
    console.log('Routing a request for ' + pathname)
    if (typeof handle[pathname] === 'function') {
        handle[pathname](res, params)
    } else {
        console.log('No handle for ' + pathname)
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res)
    }
}

module.exports.route = route