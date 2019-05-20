/**
 * Une application web avec Express
 */

let express = require('express')
// le middleware pour parser la requete (plus utile à partir d'Express 4.16.0)
let bodyParser = require('body-parser')
// le middleware pour gérer les sessions
let session = require('express-session')

let app = express()

// Configuration
/////////////////////////////////
//moteur de template
//npm i -S ejs
app.set('view engine', 'ejs')

// Middleware
/////////////////////////////

/* // définition du dossier qui dessert les assets (les fichier statiques)
// l'url correspondante est "transparente" : http://monsite.com/monfichier.css
app.use(express.static('public')) */

// ou mapping du dossier avec un alias
// l'url des assets devient http://monsite.com/assets/monfichier.css
// avec monfichier.css qui sera cherché dans le dossier public à la racine du serveur
app.use('/assets', express.static('public'))

// pour parser la requete reçue et populer les variables post dans l'objet request
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// le module body-parser inutile à partir d'Express 4.16.0 (https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js)
/* app.use(express.urlencoded({ extended: true }))
app.use(express.json()) */

// pour créer la session
app.use(session({
  secret: 'sdsqfsddfsfdsf',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

// Routeur
////////////////////////////
app.get('/', (request, response) => {
    //response.send('Salut')

    //récupération de la valeur en session
    if (request.session.error) {
        //injection de la valeur en session dans response
        response.locals.error = request.session.error
        // remise à zero de la variable en session
        request.session.error = undefined
    }
    //response.render('pages/index', {test: 'Salut'})
    response.render('pages/index')
})

app.post('/', (request, response) => {
    //console.log(request.body.message)
    if (request.body.message === undefined || request.body.message === '') {
        // si champ vide mise en session d'une erreur et redirection
        request.session.error = "Il y a une erreur"
        response.redirect('/')
        //response.render('pages/index', {error: "Vous n'avez pas entré de message"})
    }
})


app.listen(8000)




//console.log('toto')