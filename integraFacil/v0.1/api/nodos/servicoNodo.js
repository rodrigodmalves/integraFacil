const nodo = require('./nodo')

nodo.methods(['get', 'post', 'put', 'delete'])
nodo.updateOptions({new:true, runValidators: true})
module.exports = nodo