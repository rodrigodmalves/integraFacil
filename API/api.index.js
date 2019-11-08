const chalk = require('chalk');
console.log(chalk.blue('-- [/API/api.index.js] Importando modulo..'));
const rotasApi = require('../common/services/rotas.service.js');
const conectores = require('../common/services/rotas.service.js');

exports.iniciarAPI = function (instanciaExpress, config){

    var listaIntegracao = [
        {
            conector: {
                endpoint : 'https://hookb.in/8Px3QaNKVXC86RgkGJ0W',
                tipoRest : 'GET'
            },
            descricao : "Integracao GET-ENTR|GET-SAIDA",
            rotaEntrada: 'integra1',
            rotaSaida: '/',
            tipoRest : 'GET',
            wsdlEntrada: true,
            wsdlSaida: true,
            mapa:true
        },
        {
            conector: {
                endpoint : 'https://hookb.in/8Px3QaNKVXC86RgkGJ0W',
                tipoRest : 'POST'
            },
            descricao : "Integracao GET-ENTR|POST-SAIDA",
            rotaEntrada: 'integra2',
            rotaSaida: '/',
            tipoRest : 'GET',
            wsdlEntrada: true,
            wsdlSaida: true,
            mapa:true
        },
        {
            conector: {
                endpoint : 'https://hookb.in/8Px3QaNKVXC86RgkGJ0W',
                tipoRest : 'GET'
            },
            descricao : "Integracao POST-ENTR|GET-SAIDA",
            rotaEntrada: 'integra3',
            rotaSaida: '/',
            tipoRest : 'POST',
            wsdlEntrada: true,
            wsdlSaida: true,
            mapa:true
        },
        {
            conector: {
                endpoint : 'https://hookb.in/8Px3QaNKVXC86RgkGJ0W',
                tipoRest : 'POST'
            },
            descricao : "Integracao POST-ENTR|POST-SAIDA",
            rotaEntrada: 'integra4',
            rotaSaida: '/',
            tipoRest : 'POST',
            wsdlEntrada: true,
            wsdlSaida: true,
            mapa:true
        }
    ];
    instanciaExpress.listen(config.portaApi, function () {
        console.log(chalk.blue('-- [/API/api.index.js] Instanciando rotas das integracoes ativas'));
        Object.keys(listaIntegracao).forEach(function(k){
            rotasApi.ativarRota(instanciaExpress,listaIntegracao[k]);
        });
        console.log(chalk.blue('-- [/API/api.index.js] Instanciando rotas das integracoes ativas - OK'));
        console.log(chalk.blue('-- [/API/api.index.js] API executando. Ouvindo em %s'), config.apiEndpoint);
    });
}

console.log(chalk.blue('-- [/API/api.index.js] Importando modulo - OK'));