let connection = require('../config/db')
let moment = require('../config/moment')



class Message {

    constructor (row) {
        this.row = row
    }

    /* getter "magique" implémenté avec les classe ES6 => message.content appelera automatiquement le getter content() */
    get content () {
        return this.row.content
    }

    get create_at () {
        //renvoi d'un objet moment pour la date
        return moment(this.row.create_at)
    }

    get id () {
        return this.row.id
    }
    static create (content, cb) {
        connection.query('INSERT INTO messages SET content = ?, create_at = ?', [content, new Date()], (err, result) => {
            if(err) throw err
            cb(result)
        })
    }

    static all (cb) {
        connection.query('Select * from messages', (err, rows) => {
            if (err) throw err
            cb(rows.map((row) => new Message(row)))
        })
    }

    static find (id, cb) {
        connection.query('Select * from messages where id=? limit 1', [id], (err, rows) => {
            if (err) throw err
            cb(new Message(rows[0]))
        })
    }
}

module.exports = Message