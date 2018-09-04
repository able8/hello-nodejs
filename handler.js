var fs = require('fs')

function home(res) {
    console.log('home')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res)
}

function review(res) {
    console.log('review')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(res)
}

function api_records(res, params) {
    console.log('api_records')
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(params))
}

module.exports = {
    home: home,
    review: review,
    api_records: api_records
}