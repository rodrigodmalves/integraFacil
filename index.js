console.log('- [/index.js] Iniciando aplicacao base');
const log = require('./common/services/log.service.js');
const rotas = require('./common/services/rotas.service.js');
const config = require('./common/config/env.config.js');
const express = require('express');
const app = express();
const api = express();

app.listen(config.portaApp, function () {
    var dadosPortal = ['HOME','GET',"<html><body><h1>HOME></h1></body></html>"];
    rotas.ativarRota(app,dadosPortal);
    console.log('- [/index.js] APP executando. Ouvindo em %s', config.appEndpoint);
});

//simulando uma lista de integrações ativas
listaIntegracao = [
    ['integra1','GET',"<html><body><h1>Integracao 1</h1></body></html>"],
    ['integra2','GET',"<html><body><h1>Integracao 2</h1></body></html>"],
    ['integra3','POST',"<html><body><h1>Integracao 3</h1></body></html>"]
];

api.listen(config.portaApi, function () {
    console.log('- [/index.js] Instanciando rotas das integracoes ativas');
    listaIntegracao.forEach(element => {rotas.ativarRota(api,element);});
    console.log('- [/index.js] Instanciando rotas das integracoes ativas - OK');
});

console.log('- [/index.js] Iniciando aplicacao base - OK');