const frameworkWeb = require('express')

module.exports = function(servidor){
    const rota = frameworkWeb.Router()
    servidor.use('/api', rota)

    const servicoNodo = require('../nodos/servicoNodo')
    servicoNodo.register(rota, '/nodo')
}