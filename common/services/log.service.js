console.log('-- [/common/services/log.service.js] LOG - Importando modulo');
const erro = false;

exports.log = {
    registrarLog(timestamp, integracao, mensagem,tipoRota,payload){
        erro = '[data: '+timestamp+'] [integracao: '+integracao+'] - [mensagem: '+ mensagem + '][TipoRota:'+tipoRota +' - [payload: ' + payload +' ]';
        console.log(erro);
        return erro;
    },
};
console.log('-- [/common/services/log.service.js] LOG - Importando modulo - OK');