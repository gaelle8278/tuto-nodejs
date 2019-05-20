/**
 * http://usejsdoc.org/
 */


let fs = require('fs')

let file = 'assets/demo.mp4'

//récupération des informations du fichier
fs.stat(file, (err, stat) => {

    //lecture et copie du fichier
    let read = fs.createReadStream(file)
    let write = fs.createWriteStream('assets/copy2.mp4')

    //pour gérer les engorgements (ex si lecture plus rapide que écriture)
    //il est possible d'enchainer les flux
    read.pipe(write)

    write.on('finish', () => {
        console.log("Le fichier a été copié")
    })

})