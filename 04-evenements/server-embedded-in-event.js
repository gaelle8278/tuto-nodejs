/**
 * http://usejsdoc.org/
 */


let http = require('http')
let fs = require('fs')
let url = require ('url')
const EventEmitter = require('events')

/**
Construction d'un "routeur" pour traiter différentes url à l'aide d'événements personnalisés
 */
let App = {
    start: function (port) {
        let emitter = new EventEmitter()
        let server = http.createServer((request, response) => {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })
            if(request.url === "/") {
                emitter.emit('root', response)
            }
            response.end()
        }).listen(port)

        return emitter

    }
}

let app = App.start(8000)
app.on('root', function (response) {
    response.write('Je suis à la racine')
    
})