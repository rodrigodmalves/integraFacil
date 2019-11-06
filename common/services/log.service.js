console.log('-- [/common/services/log.service.js] LOG - Importando modulo');
var erro = false;

exports.registrarLog = function(timestamp, integracao, mensagem,tipoRota,payload){
    log = '[data:'+(new Date(timestamp).toISOString())+'][descIntegracao:'+integracao+'][msg:'+ mensagem +'][tipoRota:'+tipoRota +']-[payload:'+ payload +']';
    console.log(log);
};
console.log('-- [/common/services/log.service.js] LOG - Importando modulo - OK'); 