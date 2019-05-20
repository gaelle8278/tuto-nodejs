//chargement de tout le module
let _ = require('lodash')
//chargement d'un sous-module
//let map = require('lodash/map')

let app = require('./module-app.js').start(8000)


//exemple d'utilisation de lodash
console.log(_.map([1,2,3], function(n) { return n * 3; }))
//console.log(map([1,2,3], function(n) { return n * 3; }))

app.on('root', function (response) {
    response.write('Je suis à la racine')

})