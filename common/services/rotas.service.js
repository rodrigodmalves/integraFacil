const chalk = require('chalk');
console.log(chalk.blue('--- [/common/services/rotas.service.js] Rotas - Importando modulo'));
const log = require('../../common/services/log.service.js');
const mapeador = require('../../API/mapeador/mapeador.index.js');
const request = require('request');

var retornoEndpoint = {
        statusCode: undefined,
        corpo:undefined,
        mensageErro: undefined,
        payloadRecebido: undefined
}

function enviaDadosGET(configs){

    log.registrarLog("sucesso",true, new Date(), configs.integracao, "Processando dados...", configs.method,false);
    configs.body = mapeador.makePayloadFinal(configs.body,configs.wsdlInicio,configs.wsdlFim);
    log.registrarLog("sucesso",true, new Date(), configs.integracao, "Dados processados!", configs.method,JSON.stringify(configs.body));
    request(configs, function(err, res, body){
        retornoEndpoint.statusCode = res.statusCode;
        retornoEndpoint.corpo = body;
        if (err){
            retornoEndpoint.mensageErro = err;    
            retornoEndpoint.payloadRecebido = configs.body;
            return log.registrarLog("erro",true, new Date(), configs.integracao, "Erro na chamada do endpoint final", configs.method,JSON.stringify(retornoEndpoint));
        }
        else
            return log.registrarLog("sucesso",true, new Date(), configs.integracao, "Chamada OK", configs.method,false);
    }); 
};

function enviaDadosPOST(configs){

    log.registrarLog("sucesso",true, new Date(), configs.integracao, "Processando dados...", configs.method,false);
    configs.body = mapeador.makePayloadFinal(configs.body,configs.wsdlInicio,configs.wsdlFim);
    log.registrarLog("sucesso",true, new Date(), configs.integracao, "Dados processados!", configs.method,JSON.stringify(configs.body));
    request(configs, function(err, res, body){
        retornoEndpoint.corpo = body;
        if (err){
            retornoEndpoint.statusCode = res.statusCode;
            retornoEndpoint.mensageErro = err;    
            retornoEndpoint.payloadEnviado = JSON.stringify(configs.body);
            log.registrarLog("erro",true, new Date(), configs.integracao, "Erro na chamada do endpoint final", configs.method,JSON.stringify(retornoEndpoint));
        }
        else
            log.registrarLog("sucesso",true, new Date(), configs.integracao, "Chamada OK", configs.method,false);
    });
        return retornoEndpoint;
    };


exports.ativarRota = function(instanciaExpress,dadosRota){
    
    if(dadosRota.tipoRest == 'APP'){
        instanciaExpress.get("/"+dadosRota.rotaEntrada, function(req, res) {
            log.registrarLog("sucesso",true, new Date(), dadosRota.rotaEntrada, "Rota acessada", dadosRota.tipoRest,false)
            res.status(200).send();
            log.registrarLog("sucesso",true, new Date(), dadosRota.rotaEntrada, "Rota finalizada", dadosRota.tipoRest,false);
        });
        return true;
    }
    else{
        configs = {
            integracao: dadosRota.rotaEntrada, 
            uri: dadosRota.conector.endpoint,
            method: dadosRota.conector.tipoRest,
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'User-Agent': 'integraFacil'
            },
            json: true,
            wsdlInicio: dadosRota.wsdlEntrada,
            wsdlFim: dadosRota.wsdlSaida
        };

        switch(dadosRota.tipoRest){
            case 'GET':
                instanciaExpress.get("/"+dadosRota.rotaEntrada, function(req, res) {
                    configs.request = req.body;
                    log.registrarLog("sucesso",true, new Date(), dadosRota.rotaEntrada, "Rota acessada", dadosRota.tipoRest,JSON.stringify(configs.request));
                    retornoEndpoint = enviaDadosGET(configs);
                    if(!retornoEndpoint){
                        res.status('200').send();
                    }
                    else{
                        res.status('500').send();
                    }
                    log.registrarLog("sucesso",true, new Date(), dadosRota.rotaEntrada, "Rota finalizada", dadosRota.tipoRest,false);
                });
                return log.registrarLog("sucesso",true, new Date(), dadosRota.rotaEntrada, "Rota liberada", dadosRota.tipoRest,false);
            
            case 'POST':
                instanciaExpress.post("/"+dadosRota.rotaEntrada, function(req, res) {
                    configs.request = req.body;
                    log.registrarLog("sucesso",true, new Date(), dadosRota.rotaEntrada, "Rota acessada", dadosRota.tipoRest,JSON.stringify(configs.request));
                    retornoEndpoint = enviaDadosPOST(configs);
                    if(!retornoEndpoint){
                        res.status('200').send();
                    }
                    else{
                        res.status('500').send();
                    }
                    log.registrarLog("sucesso",true, new Date(), dadosRota.rotaEntrada, "Rota finalizada", dadosRota.tipoRest,false);
                });    
                return log.registrarLog("sucesso",true, new Date(), dadosRota.rotaEntrada, "Rota liberada", dadosRota.tipoRest,false);

            case 'HEAD':
                return log.registrarLog("erro", true, new Date(), dadosRota.rotaEntrada,"Metodo HEAD ainda nao disponivel",dadosRota.tipoRest,false);
            case 'PUT':
                return log.registrarLog("erro",true,new Date(), dadosRota.rotaEntrada,"Metodo PUT ainda nao disponivel",dadosRota.tipoRest,false);
            case 'PATCH':
                return log.registrarLog("erro",true,new Date(), dadosRota.rotaEntrada,"Metodo PATCH ainda nao disponivel",dadosRota.tipoRest,false);
            case 'DELETE':
                return log.registrarLog("erro",true,new Date(), dadosRota.rotaEntrada,"Metodo DELETE ainda nao disponivel",dadosRota.tipoRest,false);
            case 'CONNECT':
                return log.registrarLog("erro",true,new Date(), dadosRota.rotaEntrada,"Metodo CONNECT ainda nao disponivel",dadosRota.tipoRest,false);
            case 'TRACE':
                return log.registrarLog("erro",true,new Date(), dadosRota.rotaEntrada,"Metodo TRACE ainda nao disponivel",dadosRota.tipoRest,false);
            default:
                return log.registrarLog("erro",true,new Date(), dadosRota.rotaEntrada,"Metodo de Rota nao identificada",dadosRota.tipoRest);
        }    
    }
}
console.log(chalk.blue('--- [/common/services/rotas.service.js] Rotas - Importando modulo - OK'));