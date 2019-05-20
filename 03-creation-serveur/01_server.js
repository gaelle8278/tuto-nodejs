/**
 * http://usejsdoc.org/
 */
let http = require('http')

// https://devdocs.io/node~10_lts/http#http_http_createserver_options_requestlistener
let server = http.createServer() // retourne une instance httpServer

//écoute de l'événement 'request'. La méthode NedeJs pour écouter les événement est on (dans le DOM c'est addEventListener)
server.on('request', (request, response) => {
     response.writeHead(200, {
         'Content-type': 'text/html; charset=utf-8'
     })
     response.end('il y a eu une requete')
    //console.log('il y a eu une requete')
 })

 server.listen(8000)

