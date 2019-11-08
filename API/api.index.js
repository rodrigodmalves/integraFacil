const chalk = require('chalk');
console.log(chalk.blue('-- [/API/api.index.js] Importando modulo..'));
const rotasApi = require('../common/services/rotas.service.js');
const conectores = require('../common/services/rotas.service.js');

exports.iniciarAPI = function (instanciaExpress, config){

    var listaIntegracao = [
        {
            conector: {
                endpoint : 'https://hookb.in/QJbm8z1pMOtZ7jrRNVKr',
                tipoRest : 'GET'
            },
            descricao : "Integracao GET-ENTR|GET-SAIDA",
            rotaEntrada: 'integra1',
            rotaSaida: '/',
            tipoRest : 'GET',
            wsdlEntrada: {
                nome:'',
                sobrenome:'',
                idade:'',
                telefone1:'',
                telefone2:''
            },
            wsdlSaida: {
                descricao:'',
                idade:'',
                telFixo:'',
                telCelular:''

            },
            mapa:{
                'nome':'descricao',
                'idade':'idade',
                'telefone1':'telFixo',
                'telefone2':'telCelular'
            }
        },
        {
            conector: {
                endpoint : 'https://hookb.in/QJbm8z1pMOtZ7jrRNVKr',
                tipoRest : 'POST'
            },
            descricao : "Integracao GET-ENTR|POST-SAIDA",
            rotaEntrada: 'integra2',
            rotaSaida: '/',
            tipoRest : 'GET',
            wsdlEntrada: {
                nome:'',
                sobrenome:'',
                idade:'',
                telefone1:'',
                telefone2:''
            },
            wsdlSaida: {
                descricao:'',
                idade:'',
                telFixo:'',
                telCelular:''

            },
            mapa:{
                'nome':'descricao',
                'idade':'idade',
                'telefone1':'telFixo',
                'telefone2':'telCelular'
            }
        },
        {
            conector: {
                endpoint : 'https://hookb.in/QJbm8z1pMOtZ7jrRNVKr',
                tipoRest : 'GET'
            },
            descricao : "Integracao POST-ENTR|GET-SAIDA",
            rotaEntrada: 'integra3',
            rotaSaida: '/',
            tipoRest : 'POST',
            wsdlEntrada: {
                nome:'',
                sobrenome:'',
                idade:'',
                telefone1:'',
                telefone2:''
            },
            wsdlSaida: {
                descricao:'',
                idade:'',
                telFixo:'',
                telCelular:''

            },
            mapa:{
                'nome':'descricao',
                'idade':'idade',
                'telefone1':'telFixo',
                'telefone2':'telCelular'
            }
        },
        {
            conector: {
                endpoint : 'https://hookb.in/QJbm8z1pMOtZ7jrRNVKr',
                tipoRest : 'POST'
            },
            descricao : "Integracao POST-ENTR|POST-SAIDA",
            rotaEntrada: 'integra4',
            rotaSaida: '/',
            tipoRest : 'POST',
            wsdlEntrada: {
                nome:'',
                sobrenome:'',
                idade:'',
                telefone1:'',
                telefone2:''
            },
            wsdlSaida: {
                descricao:'',
                idade:'',
                telFixo:'',
                telCelular:''

            },
            mapa:{
                'nome':'descricao',
                'idade':'idade',
                'telefone1':'telFixo',
                'telefone2':'telCelular'
            }
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