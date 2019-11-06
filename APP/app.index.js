const chalk = require('chalk');
console.log(chalk.blue('-- [/APP/app.index.js] Importando modulo..'));
const rotasApp = require('../common/services/rotas.service.js');

exports.iniciarAPP = function(instanciaExpress,config){
    instanciaExpress.listen(config.portaApp, function () {
        var dadosPortal = ['HOME','GET',"<html><body><h1>HOME></h1></body></html>"];
        rotasApp.ativarRota(instanciaExpress,dadosPortal);
        console.log(chalk.blue('-- [/APP/app.index.js] APP executando. Ouvindo em %s'), config.appEndpoint);
    });
} 

console.log(chalk.blue('-- [/APP/app.index.js] Importando modulo - OK'));