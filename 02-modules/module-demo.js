let hello = function() {
    console.log('Bonjour ')
}

let by = function() {
    console.log('Bye ')
}


// si un seul export
///////////////////////////////
// module.exports = hello

// si plusieurs exports
///////////////////////////////////
exports.hello = hello
exports.by = by

// exporter directement (sans passer par une variable):
exports.salut = function() {
    console.log('Salut ')
}

// ou module.exports avec un object
/*module.exports = {
    hello: hello,
    by: by
}*/


