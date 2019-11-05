console.log('- [/index.js] Iniciando aplicacao');
const log = require('./common/services/log.service.js');
const rotas = require('./common/services/rotas.service.js');
const config = require('./common/config/env.config.js');
const express = require('express');
const app = express();

//simulando uma lista de integrações ativas
listaIntegracao = [
    ['integra1','GET'],
    ['integra2','GET'],
    ['integra3','POST']
];

app.listen(config.portaApp, function () {
    console.log('- [/index.js] APP executando. Ouvindo na porta %s', config.portaApp);
});

listaIntegracao.forEach(element => { 
    rotas.ativarRota(element);
});
console.log('- [/index.js] Iniciando aplicacao - OK');