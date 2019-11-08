const chalk = require('chalk');
console.log(chalk.blue('-- [/APP/app.index.js] Importando modulo..'));
const rotasApp = require('../common/services/rotas.service.js');
//const conectores = require('../dados/conectores/routes.config.js');
//const integracoes = require('../dados/integracoes/routes.config.js');

exports.iniciarAPP = function(instanciaExpress,config){

    var dadosPortal = [{
            conector: undefined,
            descricao : "APP Principal",
            rotaEntrada: '',
            rotaSaida: false,
            tipoRest : "APP",
            wsdlEntrada: false,
            wsdlSaida: false,
            conteudoExtra: ''
    }];

    instanciaExpress.listen(config.portaApp, function () {

        Object.keys(dadosPortal).forEach(function(k){
            rotasApp.ativarRota(instanciaExpress,dadosPortal[k]);
        });
        console.log(chalk.blue('-- [/APP/app.index.js] APP executando. Ouvindo em %s'), config.appEndpoint);
    });

    //conectores.rotaConectores(instanciaExpress);
    //integracoes.rotaIntegracoes(instanciaExpress);

} 

console.log(chalk.blue('-- [/APP/app.index.js] Importando modulo - OK'));