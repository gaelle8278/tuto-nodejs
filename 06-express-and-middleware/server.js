/**
 * Une application web avec Express
 */

let express = require('express')
// le middleware pour parser la requete (plus utile à partir d'Express 4.16.0)
let bodyParser = require('body-parser')
// le middleware pour gérer les sessions
let session = require('express-session')
// la communication avec la base de données
let Message = require('./models/message')

let app = express()

// Configuration
/////////////////////////////////
//moteur de template
app.set('view engine', 'ejs')

// Middleware : faire attention à leur enchainement, un middleware peut dépendre des actions d'un précédent middleware
/////////////////////////////
app.use('/assets', express.static('public'))

// pour parser la requete reçue et populer les variables post dans l'objet request
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// pour créer la session
app.use(session({
  secret: 'sdsqfsddfsfdsf',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

// gère les messages en session
app.use(require('./middlewares/flash'))

// Routeur
////////////////////////////
app.get('/', (request, response) => {
    //NODE_ENV est unevariable d'environnement qui doit etre définie/déclarée dans l'OS utilisé
    //console.log(process.env.NODE_ENV)
    Message.all(function(messages) {
        response.render('pages/index', {messages: messages})
    })
   
})

app.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === '') {
        request.flash('error', "Vous n'avez pas posté de message")
        response.redirect('/')
    } else {
        //let Message = require('./models/message')
        Message.create(request.body.message, function(result) {
            request.flash('success', 'Merci !')
            response.redirect('/')
        })
    }
    // si la redirection est faite après les instructions de traitement pb à cause du coté asynchrone de node :
    // Message.create est asynchrone = le traitement suite à l'exécution de Message.create se fera dès que possible, en attendant le script continu
    // donc dans ce cas la redirection sera effectuée avant que l'exécution de Message.create ne soit terminée
    // l'objet request utilisé dans le callback de Message.create ne sera donc pas celui attendu, il aura changé d'état entre temps
    // => bon exemple où une closure pourrait etre mise en place pour garder l'état de request tel que voulu
    // mais la solution facile est de mettre la redirection dans le callback de Message.create
    //response.redirect('/')
})

app.get('/message/:id', (request, response) => {
    Message.find(request.params.id, (message) => {
        response.render('messages/show', {message: message})
    })
})


app.listen(8000)




//console.log('toto')