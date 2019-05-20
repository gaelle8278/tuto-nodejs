/**
 * http://usejsdoc.org/
 */

// Possibilité de créer ses propres evenements

const EventEmitter = require('events')

// définition de l'écouteur
let monEcouteur = new EventEmitter()

//Emission de l'événement au endroit voulu
monEcouteur.emit('saute')
//emission de l'événement saute en passant les paramètres pour le callback
monEcouteur.emit('saute', 10, 20)

//écoute de l'évenement saute qui prend 2 paramètres
monEcouteur.on('saute', function (a, b) {
    console.log('Mon événement est déclenché ' + a + ' ' + b)
})