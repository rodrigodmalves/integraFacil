const chalk = require('chalk');
console.log(chalk.blue('--- [/common/services/rotas.service.js] Rotas - Importando modulo'));
const log = require('../../common/services/log.service.js');
const mapeador = require('../../API/mapeador/mapeador.index.js');
const request = require('request');

function enviaDadosGET(configs,response){

    log.registrarLog("sucesso",true, new Date(), configs.integracao, "Processando dados...", configs.method,false);
    configs.body = mapeador.makePayloadFinal(configs.request,configs.wsdlInicio,configs.wsdlFim,configs.mapa);
    log.registrarLog("sucesso",true, new Date(), configs.integracao, "Dados processados!", configs.method,false);
    request(configs, function(err, res, body){
        if (err){
            response.status('500').send({
                statusCode: res.statusCode,
                mensageErro: err,
                payloadEncaminhado:configs.body,
                payloadRetornado: body
            });
            return log.registrarLog("erro",true, new Date(), configs.integracao, "Erro na chamada do endpoint final", configs.method,JSON.stringify(retornoEndpoint));
        }
        else
            response.status('200').send({
                statusCode: res.statusCode,
                payloadEncaminhado:configs.body,
                payloadRetornado: body
            });
            return log.registrarLog("sucesso",true, new Date(), configs.integracao, "Chamada OK", configs.method,false);
    }); 
};

function enviaDadosPOST(configs,response){

    log.registrarLog("sucesso",true, new Date(), configs.integracao, "Processando dados...", configs.method,false);
    configs.body = mapeador.makePayloadFinal(configs.request,configs.wsdlInicio,configs.wsdlFim,configs.mapa);
    log.registrarLog("sucesso",true, new Date(), configs.integracao, "Dados processados!", configs.method,false);
    request(configs, function(err, res, body){
        if (err){
            response.status('500').send({
                statusCode: res.statusCode,
                mensageErro: err,
                payloadEncaminhado:configs.body,
                payloadRetornado: body
            });
            return log.registrarLog("erro",true, new Date(), configs.integracao, "Erro na chamada do endpoint final", configs.method,false);
        }
        else
            response.status('200').send({
                statusCode: res.statusCode,
                payloadEncaminhado:configs.body,
                payloadRetornado: body
            });
            return log.registrarLog("sucesso",true, new Date(), configs.integracao, "Chamada OK", configs.method,false);
    });
};

exports.ativarRota = function(instanciaExpress,dadosRota){
    
    if(dadosRota.tipoRest == 'APP'){
        instanciaExpress.get("/"+dadosRota.rotaEntrada, function(req, res) {
            console.log("-----------------------------------------------------------------");
            log.registrarLog("sucesso",true, new Date(), dadosRota.rotaEntrada, "Rota acessada", dadosRota.tipoRest,false)
            res.status(200).send(JSON.stringify(dadosRota.conteudoExtra));
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
            wsdlFim: dadosRota.wsdlSaida,
            mapa:dadosRota.mapa
        };

        switch(dadosRota.tipoRest){
            case 'GET':
                instanciaExpress.get("/"+dadosRota.rotaEntrada, function(req, res) {
                    console.log("-----------------------------------------------------------------");
                    configs.request = req.body;
                    configs.integracao = req.url;
                    configs.method = dadosRota.conector.tipoRest;
                    log.registrarLog("sucesso",true, new Date(), req.url, "Rota acessada", dadosRota.tipoRest,false);
                    enviaDadosGET(configs,res);
                    log.registrarLog("sucesso",true, new Date(), req.url, "Rota finalizada", dadosRota.tipoRest,false);
                });
                return log.registrarLog("sucesso",true, new Date(), dadosRota.rotaEntrada, "Rota liberada", dadosRota.tipoRest,false);
            
            case 'POST':
                instanciaExpress.post("/"+dadosRota.rotaEntrada, function(req, res) {
                    console.log("-----------------------------------------------------------------");
                    configs.request = req.body;
                    configs.integracao = req.url;
                    configs.method = dadosRota.conector.tipoRest;

                    log.registrarLog("sucesso",true, new Date(), req.url, "Rota acessada", dadosRota.tipoRest,false);
                    enviaDadosPOST(configs,res);
                    log.registrarLog("sucesso",true, new Date(), req.url, "Rota finalizada", dadosRota.tipoRest,false);
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