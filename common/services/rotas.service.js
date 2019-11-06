const chalk = require('chalk');
console.log(chalk.blue('--- [/common/services/rotas.service.js] Rotas - Importando modulo'));
const log = require('../../common/services/log.service.js');

module.conecta = function(endpoint,conteudo){
    console.log(endpoint)
    console.log(conteudo)
	return true
};

exports.ativarRota = function(instanciaExpress,dadosRota){

    var nomeIntegracao = dadosRota[0];
    var tipoRest = dadosRota[1];
    var conteudo = (dadosRota[2] === undefined ?  "Sem informacoes recebidas" : dadosRota[2]);
    var endpont = dadosRota[3];

    switch(tipoRest){
        case 'GET':
            instanciaExpress.get("/"+nomeIntegracao, function(req, resp) {
                if(endpoint != undefined){
                    conecta(endpont,conteudo);
                };
                resp.send(conteudo);
            });
            return log.registrarLog("sucesso",false, new Date(), nomeIntegracao, "Rota Acionada", tipoRest);
        case 'HEAD':
            return log.registrarLog("erro", true, new Date(), nomeIntegracao,"Metodo HEAD ainda nao disponivel",tipoRest,conteudo);
        case 'POST' :
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo POST ainda nao disponivel",tipoRest,conteudo);
        case 'PUT':
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo PUT ainda nao disponivel",tipoRest,conteudo);
        case 'PATCH':
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo PATCH ainda nao disponivel",tipoRest,conteudo);
        case 'DELETE':
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo DELETE ainda nao disponivel",tipoRest,conteudo);
        case 'CONNECT':
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo CONNECT ainda nao disponivel",tipoRest,conteudo);
        case 'TRACE':
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo TRACE ainda nao disponivel",tipoRest,conteudo);
        default:
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo de Rota nao identificada",tipoRest,conteudo);
    }    
}
console.log(chalk.blue('--- [/common/services/rotas.service.js] Rotas - Importando modulo - OK'));