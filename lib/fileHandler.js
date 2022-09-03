const fs = require('fs')
let codigo = fs.readFileSync('./data/codigo.py').toString();

module.exports = codigo