var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tuto_user',
  password : 'tuto_pwd',
  database : 'tuto_node'
})

connection.connect()

module.exports = connection