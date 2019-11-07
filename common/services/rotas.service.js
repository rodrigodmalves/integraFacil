const chalk = require('chalk');
console.log(chalk.blue('--- [/common/services/rotas.service.js] Rotas - Importando modulo'));
const log = require('../../common/services/log.service.js');
const request = require('request');

function enviaDados(configs){

    var retornoEndpoint = {
        statusCode:'',
        corpo:'',
        mensageErro: undefined,
        payloadEnviado: undefined
    }

    log.registrarLog("sucesso",true, new Date(), configs.integracao, "Processando dados...", configs.method,JSON.stringify(configs.request));
    //magica para mapear o endpoint
    configs.body=configs.request
    log.registrarLog("sucesso",true, new Date(), configs.integracao, "Dados processados!", configs.method,JSON.stringify(configs.body));
    request(configs,(err, res, body) => {
        retornoEndpoint.statusCode = res.statusCode;
        retornoEndpoint.corpo = body;
        if (err)    
            retornoEndpoint.mensageErro = err;    
    });
    
    return retornoEndpoint;
};

exports.ativarRota = function(instanciaExpress,dadosRota){
    
    var nomeIntegracao = dadosRota[0];
    var tipoRest = dadosRota[1];
    var conteudo = (dadosRota[2] === undefined ?  "Sem informacoes recebidas" : dadosRota[2]);
    var endpoint = dadosRota[3];

    configs = {
        integracao: nomeIntegracao, 
        url: endpoint,
        method: tipoRest,
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'integraFacil'
        },
        json: true,
        request: '',
        body: conteudo
    };

    
    if(tipoRest = 'APP'){
        instanciaExpress.get("/"+nomeIntegracao, function(req, res) {
            log.registrarLog("sucesso",true, new Date(), nomeIntegracao, "Rota acessada", tipoRest,false)
            res.status(200).send();
            log.registrarLog("sucesso",true, new Date(), nomeIntegracao, "Rota finalizada", tipoRest,false);
        });
        return true;
    }

    switch(tipoRest){
        case 'GET':
            instanciaExpress.get("/"+nomeIntegracao, function(req, res) {
                configs.request = req.body;
                log.registrarLog("sucesso",true, new Date(), nomeIntegracao, "Rota acessada", tipoRest,JSON.stringify(configs.request));
                res.send(enviaDados(configs));
                log.registrarLog("sucesso",true, new Date(), nomeIntegracao, "Rota finalizada", tipoRest,false);
            });
            return log.registrarLog("sucesso",true, new Date(), nomeIntegracao, "Rota liberada", tipoRest,false);
        
        case 'POST':
            instanciaExpress.post("/"+nomeIntegracao, function(req, res) {
                configs.request = req.body;
                log.registrarLog("sucesso",true, new Date(), nomeIntegracao, "Rota acessada", tipoRest,JSON.stringify(configs.request));
                res.send(enviaDados(configs));
                log.registrarLog("sucesso",true, new Date(), nomeIntegracao, "Rota finalizada", tipoRest,false);
            });    
            return log.registrarLog("sucesso",true, new Date(), nomeIntegracao, "Rota liberada", tipoRest,false);

        case 'HEAD':
            return log.registrarLog("erro", true, new Date(), nomeIntegracao,"Metodo HEAD ainda nao disponivel",tipoRest,false);
        case 'PUT':
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo PUT ainda nao disponivel",tipoRest,false);
        case 'PATCH':
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo PATCH ainda nao disponivel",tipoRest,false);
        case 'DELETE':
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo DELETE ainda nao disponivel",tipoRest,false);
        case 'CONNECT':
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo CONNECT ainda nao disponivel",tipoRest,false);
        case 'TRACE':
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo TRACE ainda nao disponivel",tipoRest,false);
        default:
            return log.registrarLog("erro",true,new Date(), nomeIntegracao,"Metodo de Rota nao identificada",tipoRest,false);
    }    
}
console.log(chalk.blue('--- [/common/services/rotas.service.js] Rotas - Importando modulo - OK'));