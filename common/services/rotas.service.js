const chalk = require('chalk');
console.log(chalk.blue('--- [/common/services/rotas.service.js] Rotas - Importando modulo'));
const log = require('../../common/services/log.service.js');
const request = require('request');


function conecta(endpoint,conteudo){

    request(endpoint, { json: true }, (err, res, body) => {
        if (err) { 
            return console.log(err); 
        }
    }).form(conteudo);
    return true;
};

exports.ativarRota = function(instanciaExpress,dadosRota){

    var nomeIntegracao = dadosRota[0];
    var tipoRest = dadosRota[1];
    var conteudo = (dadosRota[2] === undefined ?  "Sem informacoes recebidas" : dadosRota[2]);
    var endpoint = dadosRota[3];
    
    switch(tipoRest){
        case 'GET':
            instanciaExpress.get("/"+nomeIntegracao, function(req, resp) {
                log.registrarLog("sucesso",true, new Date(), nomeIntegracao, "Rota acionada", tipoRest);
                if(endpoint===undefined){
                    resp.send(conteudo);
                }
                else{
                    conecta(endpoint,conteudo);
                    resp.send(conteudo);
                }
            });
            return log.registrarLog("sucesso",false, new Date(), nomeIntegracao, "Rota liberada", tipoRest);
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