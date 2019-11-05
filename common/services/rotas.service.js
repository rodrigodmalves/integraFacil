console.log('-- [/common/services/rotas.service.js] Rotas - Importando modulo');
const log = require('../../common/services/log.service.js');
const express = require('express');
const app = express();

exports.ativarRota = function(dadosRota){
    nomeIntegracao = dadosRota[0];
    tipoRest = dadosRota[1];
    conteudo = dadosRota[2];

    switch(tipoRest){
        case 'GET':
            log.registrarLog(new Date(), nomeIntegracao, "Rota Acionada", tipoRest);
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
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota nao suportada",tipoRest);
        case 'POST' :
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota nao suportada",tipoRest);
        case 'PUT':
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota nao suportada",tipoRest);
        case 'PATCH':
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota nao suportada",tipoRest);
        case 'DELETE':
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota nao suportada",tipoRest);
        case 'CONNECT':
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota nao suportada",tipoRest);
        case 'OPTIONS': 
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota nao suportada",tipoRest);
        case 'TRACE':
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota nao suportada",tipoRest);
        default:
            return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota nao suportada",tipoRest);
    }    
}
console.log('-- [/common/services/rotas.service.js] Rotas - Importando modulo - OK');