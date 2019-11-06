const chalk = require('chalk');
console.log(chalk.blue('----------------------------------------------------------------------\n- [/index.js] Iniciando aplicacao base..'));

const config = require('./common/config/env.config.js');
const app = require('./APP/app.index.js');
const api = require('./API/api.index.js');

const express = require('express');
const apiInstanciaExpress = express();
const appInstanciaExpress = express();

app.iniciarAPP(appInstanciaExpress,config);
api.iniciarAPI(apiInstanciaExpress,config);

console.log(chalk.blue('- [/index.js] Iniciando aplicacao base - OK\n----------------------------------------------------------------------'));