const chalk = require('chalk');
console.log(chalk.blue('---- [/API/mapeador/mapeador.index.js] Mapeador - Importando modulo'));

exports.makePayloadFinal = function(payload, wsdlInicio, wsdlFim,mapa){
    
    console.log('payload: '+JSON.stringify(payload));
    console.log('wsdlInicio: '+JSON.stringify(wsdlInicio));
    console.log('wsdlFim: '+JSON.stringify(wsdlFim));
    console.log('Mapa: '+JSON.stringify(mapa));
    var payloadFinal = {
        resultado: "ja passou pelo mapeador"
    };
    /*
    Object.keys(mapa).forEach(function(k){
        mapa[k] = 0;
    });
    */
    return payloadFinal;
};

console.log(chalk.blue('---- [/API/mapeador/mapeador.index.js] Mapeador - Importando modulo - OK'));