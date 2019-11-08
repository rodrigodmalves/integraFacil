const chalk = require('chalk');
console.log(chalk.blue('--- [/dados/integracoes/controlles/integracoes.controller.js] Importando modulo de controle de integracoes'));
const IntegracaoModel = require('../models/integracoes.model.js');
const crypto = require('crypto');

exports.insert = (req, res) => {
    console.log('Feito post, realizando insert.');
    IntegracaoModel.createIntegracao(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};

exports.list = (req, res) => {
    
    //let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let = limit = 0;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    IntegracaoModel.list(limit, page)
        .then((result) => {
            console.log(result);
            res.status(200).send(result);
        })
};

exports.getById = (req, res) => {
    console.log('Feito get, realizando busca.');
    IntegracaoModel.findById(req.params.integracaoId)
        .then((result) => {
            res.status(200).send(result);
        });
};
exports.patchById = (req, res) => {
    console.log('Feito patch, realizando update.');
    if (req.body.password) {
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
        req.body.password = salt + "$" + hash;
    }

    IntegracaoModel.patchIntegracoes(req.params.integracaoId, req.body)
        .then((result) => {
            res.status(204).send({});
        });

};

exports.removeById = (req, res) => {
    console.log('Feito delete, realizando remoção.');
    IntegracaoModel.removeById(req.params.integracaoId)
        .then((result)=>{
            res.status(204).send({});
        });
};
console.log(chalk.blue('--- [/dados/integracoes/controlles/integracoes.controller.js] Importando modulo de controle de integracoes - OK'));