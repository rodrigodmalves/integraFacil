console.log('-- [/common/services/log.service.js] LOG - Importando modulo');

exports.registrarLog = function(tipo,exibePrompt,timestamp, integracao, mensagem,tipoRota,payload){
    var log;
    switch(tipo){
        case 'erro': 
            log = '\n[LOG:'+tipo+'] => [data:'+(new Date(timestamp).toISOString())+'][descIntegracao:'+integracao+'][msg:'+ mensagem +'][tipoRota:'+tipoRota +']\n[payload:'+ payload +']\n';    
            break;
        case 'sucesso': 
            log = '[LOG:'+tipo+'] => [data:'+(new Date(timestamp).toISOString())+'][descIntegracao:'+integracao+'][msg:'+ mensagem +'][tipoRota:'+tipoRota +']';    
            break;
        default:
            log = "ERRO - Verifique o tipo de log definido e tente novamente.";
            break;
    }
    //salvar em banco
    if(exibePrompt === true)
        return console.log(log);
    else
        return true;
};

console.log('-- [/common/services/log.service.js] LOG - Importando modulo - OK'); 