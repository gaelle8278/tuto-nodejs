/**
 * http://usejsdoc.org/
 */

  let fs = require('fs')

  let file = 'assets/demo.mp4'

  //récupération des informations du fichier
  fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0

    //lecture du fichier
    let read = fs.createReadStream(file)

    read.on('data', (chunk) => {
        progress += chunk.length
        console.log("J'ai lu " + Math.round(100 *progress / total) + "%")
    })

    read.on('end', () => {
        console.log("J'ai fini de lire le fichier")
    })

  })
  