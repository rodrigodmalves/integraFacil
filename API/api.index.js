const chalk = require('chalk');
console.log(chalk.blue('-- [/API/api.index.js] Importando modulo..'));
const rotasApi = require('../common/services/rotas.service.js');

exports.iniciarAPI = function (instanciaExpress, config){
    //buscar dados do banco
    //nome, tipo,conteudo,endpontFim,
    var listaIntegracao = [
        ['integra1','GET',"TESTE","https://hookb.in/W1eQXXZZMXt8bdB9lJj6"],
        ['integra2','POST',"","https://hookb.in/W1eQXXZZMXt8bdB9lJj6"]
    ];

    instanciaExpress.listen(config.portaApi, function () {
        console.log(chalk.blue('-- [/API/api.index.js] Instanciando rotas das integracoes ativas'));
        listaIntegracao.forEach(element => {rotasApi.ativarRota(instanciaExpress,element);});
        console.log(chalk.blue('-- [/API/api.index.js] Instanciando rotas das integracoes ativas - OK'));
    });
}

console.log(chalk.blue('-- [/API/api.index.js] Importando modulo - OK'));