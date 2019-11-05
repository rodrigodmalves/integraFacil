console.log('-- [/common/services/log.service.js] LOG - Importando modulo');
var erro = false;

exports.registrarLog = function(timestamp, integracao, mensagem,tipoRota,payload){
    return '[data:'+timestamp+'][descIntegracao:'+integracao+'][msg:'+ mensagem +'][tipoRota:'+tipoRota +']-[payload:'+ payload +']';
};
console.log('-- [/common/services/log.service.js] LOG - Importando modulo - OK');