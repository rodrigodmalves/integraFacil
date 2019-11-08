const chalk = require('chalk');
console.log(chalk.blue('----- [/dados/integracoes/models/integracoes.model.js] Importando schema de integracoes'));
const mongoose = require('../../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const integracaoSchema = new Schema({
    descricao: String,
    ativo: Boolean,
    testando: Boolean,
    endpoint: String,
    tipoRest: String
});

integracaoSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
integracaoSchema.set('toJSON', {
    virtuals: true
});

integracaoSchema.findById = function (cb) {
    return this.model('Integracoes').find({id: this.id}, cb);
};
console.log(chalk.blue('------ [/dados/integracoes/models/integracoes.model.js] Definindo Schema'));

const Integracoes = mongoose.model('integracoes', integracaoSchema);

console.log(chalk.blue('------ [/dados/integracoes/models/integracoes.model.js] Definindo Schema - OK'));

exports.findByEmail = (email) => {
    return Integracoes.find({email: email});
};
exports.findById = (id) => {
    return Integracoes.findById(id)
        .then((result) => {
            /*
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;*/
            return result;
        });
};

exports.createConector = (conectorData) => {
    const integracoes = new Conector(conectorData);
    return integracoes.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Integracoes.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, integracoes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(integracoes);
                }
            })
    });
};

exports.patchConector = (id, conectorData) => {
    return new Promise((resolve, reject) => {
        Integracoes.findById(id, function (err, integracoes) {
            if (err) reject(err);
            for (let i in conectorData) {
                integracoes[i] = conectorData[i];
            }
            integracoes.save(function (err, updatedConector) {
                if (err) return reject(err);
                resolve(updatedConector);
            });
        });
    })

};

exports.removeById = (conectorId) => {
    return new Promise((resolve, reject) => {
        Conector.remove({_id: conectorId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

console.log(chalk.blue('----- [/dados/integracoes/models/integracoes.model.js] Importando schema de integracoes -- OK'));