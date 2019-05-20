let http = require('http')
let url = require('url')


let server = http.createServer() 

server.on('request', (request, response) => {
    response.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })

    /*
    https://devdocs.io/node~10_lts/url#url_url_parse_urlstring_parsequerystring_slashesdenotehost
    https://devdocs.io/node~10_lts/http#http_class_http_incomingmessage
    */
    //récupération des paramètres de la requete :
    // utilisation de la méthode parse() du module url pour découper l'url reçue 
    // en 1er paramètre de cette fonction on passe la propriété url de l'objet request
    // en 2eme paramètre on indique true pour que les paramètres récupérés soit aussi parsés
    // de l'objet retourné par la fonction on récupère la propriété query qui contient les paramètres get parsés
    let queryParams = url.parse(request.url, true).query
    
    if(queryParams.name == undefined) {
        response.write('Bonjour invité ')
    } else {
        response.write('Bonjour ' + queryParams.name)
    }

    response.end()

})

 server.listen(8000)
