const chalk = require('chalk');
console.log(chalk.blue('---- [/API/mapeador/mapeador.index.js] Mapeador - Importando modulo'));

exports.makePayloadFinal = function(payloadRecebido, wsdlInicio, wsdlFim,mapa){
    
    var arrayPayloadFinal=[];
    var log=true;
    
    Object.keys(mapa).forEach(function(nomeCampoMapa){
        arrayPayloadFinal[mapa[nomeCampoMapa]] = payloadRecebido[nomeCampoMapa];
    });    
    var payloadFinal = Object.assign({}, arrayPayloadFinal);

    if(log){
        console.log("\nPayload Recebido\n------------");
        Object.keys(payloadRecebido).forEach(function(nomeCampoPayload){
            console.log(nomeCampoPayload+ ' = '+payloadRecebido[nomeCampoPayload]);
        });
    
        console.log("\nWSDL - Inicio\n------------");
        Object.keys(wsdlInicio).forEach(function(nomeCampoWsdlInicio){
            console.log(nomeCampoWsdlInicio);
        });
    
        console.log("\nMapa\n------------");
        Object.keys(mapa).forEach(function(nomeCampoMapa){
            console.log(nomeCampoMapa+ ' = '+mapa[nomeCampoMapa]);
        });    
    
        console.log("\nWSDL - Fim\n------------");
        Object.keys(wsdlFim).forEach(function(nomeCampoWsdlFim){
            console.log(nomeCampoWsdlFim);
        });
        
        console.log("\nPayload Processado\n------------");
        Object.keys(payloadFinal).forEach(function(nomeCampoPayloadFinal){
            console.log(nomeCampoPayloadFinal+ ' = '+payloadFinal[nomeCampoPayloadFinal]);
        });  
    }

   return payloadFinal;
};

console.log(chalk.blue('---- [/API/mapeador/mapeador.index.js] Mapeador - Importando modulo - OK'));