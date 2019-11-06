console.log('-- [/common/services/rotas.service.js] Rotas - Importando modulo');

const log = require('../../common/services/log.service.js');
const express = require('express');
const expressInstancia = express();

expressInstancia.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'false');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

exports.ativarRota = function(instanciaExpress,dadosRota){

    var nomeIntegracao = dadosRota[0];
    var tipoRest = dadosRota[1];
    var conteudo = (dadosRota[2] === undefined ?  ``:dadosRota[2]);

    switch(tipoRest){
        case 'GET':
            instanciaExpress.get("/"+nomeIntegracao, function(req, resp) {
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
console.log('-- [/common/services/rotas.service.js] Rotas - Importando modulo - OK');