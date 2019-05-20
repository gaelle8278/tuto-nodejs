/**
 * http://usejsdoc.org/
 */

let http = require('http')

//passage du callback pour écouter l'événement request lors de la création du serveur
http.createServer((request, response) => {
     response.writeHead(200, {
         'Content-type': 'text/html; charset=utf-8'
     })
     response.end('il y a eu une requete')
    //console.log('il y a eu une requete')
 }).listen(8000)

