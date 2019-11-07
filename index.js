const chalk = require('chalk');
console.log(chalk.blue('----------------------------------------------------------------------\n- [/index.js] Iniciando aplicacao base..'));

const config = require('./common/config/env.config.js');
const app = require('./APP/app.index.js');
const api = require('./API/api.index.js');
const bodyParser = require('body-parser');

const express = require('express');
const apiInstanciaExpress = express();
const appInstanciaExpress = express();

appInstanciaExpress.use(bodyParser.urlencoded({ extended:true }));
appInstanciaExpress.use(bodyParser.json());
appInstanciaExpress.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});
app.iniciarAPP(appInstanciaExpress,config);

apiInstanciaExpress.use(bodyParser.urlencoded({ extended:true }));
apiInstanciaExpress.use(bodyParser.json());
apiInstanciaExpress.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});
api.iniciarAPI(apiInstanciaExpress,config);

console.log(chalk.blue('- [/index.js] Iniciando aplicacao base - OK\n----------------------------------------------------------------------'));