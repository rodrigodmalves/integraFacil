const chalk = require('chalk');
console.log(chalk.blue('-- [/API/api.index.js] Importando modulo..'));
const rotas = require('../common/services/rotas.service.js');

exports.iniciarAPI = function (instanciaExpress, config){
    var listaIntegracao = [
        ['integra1','GET',"<html><body><h1>Integracao 1</h1></body></html>","https://hookb.in/W1eQXXZZMXt8bdB9lJj6"],
        ['integra2','GET',"<html><body><h1>Integracao 2</h1></body></html>","https://hookb.in/W1eQXXZZMXt8bdB9lJj6"],
        ['integra3','POST',"<html><body><h1>Integracao 3</h1></body></html>","https://hookb.in/W1eQXXZZMXt8bdB9lJj6"]
    ];

    instanciaExpress.listen(config.portaApi, function () {
        console.log(chalk.blue('-- [/API/api.index.js] Instanciando rotas das integracoes ativas'));
        listaIntegracao.forEach(element => {rotas.ativarRota(instanciaExpress,element);});
        console.log(chalk.blue('-- [/API/api.index.js] Instanciando rotas das integracoes ativas - OK'));
    });
}

console.log(chalk.blue('-- [/API/api.index.js] Importando modulo - OK'));