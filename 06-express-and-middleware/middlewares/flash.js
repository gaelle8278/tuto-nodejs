//tous les middlwares onctionne sur le meme principe
// ils recoivent les objets request et response, peuvent les modifier 
// et controler le flux avec next : next indique de continuer le flux, la requete normalement, sans next la requete est stoppé
module.exports = function (request, response, next) {
    if (request.session.flash) {
        response.locals.flash = request.session.flash
        request.session.flash = undefined
    }
    request.flash = function(type, contenu) {
        if(request.session.flash === undefined) {
            request.session.flash = {}
        }
        request.session.flash[type] = contenu
    }
    next()
}