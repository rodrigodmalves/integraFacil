const chalk = require('chalk');

console.log(chalk.blue('--- [/common/services/log.service.js] LOG - Importando modulo'));

exports.registrarLog = function(tipo,exibePromptSucesso=true,timestamp, integracao, mensagem,tipoRota,payload){
    switch(tipo){
        case 'sucesso': 
            return (exibePromptSucesso === true ? console.log(chalk.bgGreen('[LOG:'+tipo+'] => [data:'+(new Date(timestamp).toISOString())+'][descIntegracao:'+integracao+'][msg:'+ mensagem +'][tipoRota:'+tipoRota +']\n[payload:'+ payload +']')): true);    
        case 'erro': 
            return console.log(chalk.red('[LOG:'+tipo+'] => [data:'+(new Date(timestamp).toISOString())+'][descIntegracao:'+integracao+'][msg:'+ mensagem +'][tipoRota:'+tipoRota +']\n[payload:'+ payload +']'));    
        default:
            return console.log(chalk.red('ERRO - Verifique o tipo de log definido e tente novamente.'));
    }
};

console.log(chalk.blue('--- [/common/services/log.service.js] LOG - Importando modulo - OK')); 