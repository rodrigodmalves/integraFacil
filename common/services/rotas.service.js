console.log('-- [/common/services/rotas.service.js] Rotas - Importando modulo');
const log = require('../../common/services/log.service.js');
const express = require('express');
const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

exports.ativarRota = function(dadosRota){
    
    nomeIntegracao = dadosRota[0];
    tipoRest = dadosRota[1];
    conteudo = dadosRota[2];

    switch(tipoRest){
        case 'GET':
            app.get('/'+nomeIntegracao, function(req, resp) {
                log.registrarLog(new Date(), nomeIntegracao, "Rota Acionada", tipoRest);
                resp.send(
                    `<html>
                        <body>
                            <h1>`+nomeIntegracao+`</h1>
                        </body>
                    </html>`
                );
            });
        case 'HEAD':
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo HEAD ainda nao disponivel");
        case 'POST' :
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo POST ainda nao disponivel");
        case 'PUT':
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo PUT ainda nao disponivel");
        case 'PATCH':
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo PATCH ainda nao disponivel");
        case 'DELETE':
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo DELETE ainda nao disponivel");
        case 'CONNECT':
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo CONNECT ainda nao disponivel");
        case 'TRACE':
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo TRACE ainda nao disponivel");
        default:
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota nao identificada",tipoRest);
    }    
}
console.log('-- [/common/services/rotas.service.js] Rotas - Importando modulo - OK');