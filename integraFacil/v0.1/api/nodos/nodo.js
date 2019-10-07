const API_REST = require('node-restful')
const integraBancoDados = API_REST.mongoose

const schemaNodo = new integraBancoDados.Schema({
    name: {type:String, required:true},
    type: {type:String, required:true},
    quantidade: {type:Number, required:true}
})
module.exports = API_REST.model('Nodo', schemaNodo)
