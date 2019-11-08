const chalk = require('chalk');
console.log(chalk.blue('--- [/users/controlles/users.controller.js] Importando modulo de controle de conectores'));
const UserModel = require('../models/conectores.model.js');
const crypto = require('crypto');

exports.insert = (req, res) => {
    console.log('Feito post, realizando insert.');
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
    req.body.password = salt + "$" + hash;
    req.body.permissionLevel = 1;
    UserModel.createUser(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};

exports.list = (req, res) => {
    console.log('Feito get, realizando list.');
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    UserModel.list(limit, page)
        .then((result) => {
            res.status(200).send(result);
        })
};

exports.getById = (req, res) => {
    console.log('Feito get, realizando busca.');
    UserModel.findById(req.params.userId)
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

    UserModel.patchUser(req.params.userId, req.body)
        .then((result) => {
            res.status(204).send({});
        });

};

exports.removeById = (req, res) => {
    console.log('Feito delete, realizando remoção.');
    UserModel.removeById(req.params.userId)
        .then((result)=>{
            res.status(204).send({});
        });
};
console.log(chalk.blue('--- [/users/controlles/users.controller.js] Importando modulo de controle de conectores - OK'));