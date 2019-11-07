const chalk = require('chalk');

console.log(chalk.blue('--- [/common/services/log.service.js] LOG - Importando modulo'));

function checaPayload(payload){
    if(payload != false)
        console.log(chalk.yellowBright('[PAYLOAD: '+ payload +']'));
}

exports.registrarLog = function(tipo,exibePromptSucesso=true,timestamp, integracao, mensagem,tipoRota,payload){
    switch(tipo){
        case 'sucesso': 
            if(exibePromptSucesso === true){
                console.log(chalk.green('[LOG:'+tipo+'] => [data:'+(new Date(timestamp).toISOString())+'][descIntegracao:'+integracao+'][msg:'+ mensagem +'][tipoRota:'+tipoRota +']'))        
                checaPayload(payload);
            }
            return true;
        case 'erro': 
            console.log(chalk.redBright('[LOG:'+tipo+'] => [data:'+(new Date(timestamp).toISOString())+'][descIntegracao:'+integracao+'][msg:'+ mensagem +'][tipoRota:'+tipoRota +']'));    
            checaPayload(payload);
            return true
        default:
            return console.log(chalk.redBright('ERRO - Verifique o tipo de log definido e tente novamente.'));
    }
};

console.log(chalk.blue('--- [/common/services/log.service.js] LOG - Importando modulo - OK')); 