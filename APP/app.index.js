const chalk = require('chalk');
console.log(chalk.blue('-- [/APP/app.index.js] Importando modulo..'));
const rotasApp = require('../common/services/rotas.service.js');

exports.iniciarAPP = function(instanciaExpress,config){

    var dadosPortal = {
        integracao: [
            {
                conector: undefined,
                descricao : "APP Principal",
                rotaEntrada: '',
                rotaSaida: false,
                tipoRest : "APP",
                wsdlEntrada: false,
                wsdlSaida: false,
                conteudoExtra: "<html><body><h1>HOME</h1></body></html>"
            }
        ]
    };

    instanciaExpress.listen(config.portaApp, function () {

        Object.keys(dadosPortal).forEach(function(k){
            console.log(dadosPortal[k].tipoRest);
            rotasApp.ativarRota(instanciaExpress,dadosPortal[k]);
        });
        console.log(chalk.blue('-- [/APP/app.index.js] APP executando. Ouvindo em %s'), config.appEndpoint);
    });
} 

console.log(chalk.blue('-- [/APP/app.index.js] Importando modulo - OK'));