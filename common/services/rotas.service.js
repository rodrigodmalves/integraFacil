console.log('-- [/common/services/rotas.service.js] Rotas - Importando modulo');
const log = require('../../common/services/log.service.js');
const express = require('express');
const app = express();

exports.rotas = {
    ativarRota(nomeIntegracao,tipoRest,conteudo){
        switch(tipoRest){

            case 'GET':
                app.get('/'+nomeIntegracao, function(req, resp) {
                    log.registrarLog(new Date(), nomeIntegracao, "Rota Acionada",tipoRest);
                    resp.send(
                        `<html>
                            <body>
                                <h1>`+nomeIntegracao+`</h1>
                            </body>
                        </html>`
                    );
                });
                return true;
            case 'HEAD':
                return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota não suportada",tipoRest);
            case 'POST' :
                return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota não suportada",tipoRest);
            case 'PUT':
                return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota não suportada",tipoRest);
            case 'PATCH':
                return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota não suportada",tipoRest);
            case 'DELETE':
                return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota não suportada",tipoRest);
            case 'CONNECT':
                return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota não suportada",tipoRest);
            case 'OPTIONS': 
                return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota não suportada",tipoRest);
            case 'TRACE':
                return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota não suportada",tipoRest);
            default:
                return log.registrarLog(new Date(), nomeIntegracao,"Tipo de Rota não suportada",tipoRest);
        }    
    }
};

exports.rotas;
console.log('-- [/common/services/rotas.service.js] Rotas - Importando modulo - OK');

