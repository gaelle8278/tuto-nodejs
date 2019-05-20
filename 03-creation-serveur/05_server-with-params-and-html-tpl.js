/**
 * http://usejsdoc.org/
 */


let http = require('http')
let fs = require('fs')
let url = require ('url')


let server = http.createServer() 

server.on('request', (request, response) => {
    response.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })
    let queryParams = url.parse(request.url, true).query
    let name = queryParams.name == undefined ? 'invité' : queryParams.name
    fs.readFile('index2.html', 'utf8', (err, data) => {
        if (err) {
            response.writeHead(404, {
                'Content-type': 'text/html; charset=utf-8'
            })
            response.end("Le fichier n'existe pas")
        } else {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })
            data = data.replace('{{ name }}', name)
            response.end(data)
        }   
    })


})

 server.listen(8000)