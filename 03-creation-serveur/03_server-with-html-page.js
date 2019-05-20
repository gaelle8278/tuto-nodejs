let http = require('http')
let fs = require('fs')


let server = http.createServer() 

server.on('request', (request, response) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            response.writeHead(404, {
                'Content-type': 'text/html; charset=utf-8'
            })
            response.end("Le fichier n'existe pas")
        } else {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })
            response.end(data)
        }   
    })

 })

 server.listen(8000)

// NB : la racine du serveur correspond au dossier d'où est lancée le serveur (la commande node qui lance le fichier js)
// Ici pour que le fichier index.html soit trouvé il faut que la commande soit lancée dans le dossier creation-serveur
// Si la commande est lancée dans le dossier parent de creation-serveur en faisant "> node creation-serveur/03_server-with-html-page.js" le fichier index.html ne sera pas trouvée