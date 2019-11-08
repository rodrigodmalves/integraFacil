const chalk = require('chalk');
console.log(chalk.blue('--- [/conectores/controlles/conectores.controller.js] Importando modulo de controle de conectores'));
const ConectoresModel = require('../models/conectores.model.js');

exports.insert = (req, res) => {
    console.log('Feito post, realizando insert.');
    ConectoresModel.createConector(req.body)
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
    ConectoresModel.list(limit, page)
        .then((result) => {
            console.log(result);
            res.status(200).send(result);
        })
};

exports.getById = (req, res) => {
    console.log('Feito get, realizando busca.');
    ConectoresModel.findById(req.params.conectoresId)
        .then((result) => {
            res.status(200).send(result);
        });
};
exports.patchById = (req, res) => {
    console.log('Feito patch, realizando update.');
    ConectoresModel.patchConectores(req.params.conectoresId, req.body)
        .then((result) => {
            res.status(204).send({});
        });

};

exports.removeById = (req, res) => {
    console.log('Feito delete, realizando remoção.');
    ConectoresModel.removeById(req.params.conectoresId)
        .then((result)=>{
            res.status(204).send({});
        });
};
console.log(chalk.blue('--- [/conectores/controlles/conectores.controller.js] Importando modulo de controle de conectores - OK'));