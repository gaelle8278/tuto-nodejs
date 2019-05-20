/**
 * http://usejsdoc.org/
 */

let fs = require('fs')

//pas performant car si fichier volumineux la variable data sera volumineuse et risque de saturation méméoire
//de plus processus séquentiel : d'abord la lecture du fichier puis écriture de la copie
fs.readFile('assets/demo.mp4', (err, data) => {
    if (err) throw err
    fs.writeFile('assets/copy.mp4', data, (err) => {
        if(err) throw errconsole.log('Le fichier a été copié')
    })
})