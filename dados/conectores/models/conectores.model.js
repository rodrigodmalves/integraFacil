const chalk = require('chalk');
console.log(chalk.blue('----- [/conectores/models/conectores.model.js] Importando schema de conectores'));
const mongoose = require('../../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const conectoresSchema = new Schema({
    descricao: String,
    ativo: Boolean,
    testando: Boolean,
    endpoint: String,
    tipoRest: String
});

conectoresSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
conectoresSchema.set('toJSON', {
    virtuals: true
});

conectoresSchema.findById = function (cb) {
    return this.model('Conectores').find();
};
console.log(chalk.blue('------ [/conectores/models/conectores.model.js] Definindo Schema'));

const Conectores = mongoose.model('conectores', conectoresSchema);

console.log(chalk.blue('------ [/conectores/models/conectores.model.js] Definindo Schema - OK'));

exports.findByEmail = (email) => {
    return Conectores.find({email: email});
};
exports.findById = (id) => {
    return Conectores.findById(id)
        .then((result) => {
            console.log(result);
            /*result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;*/
            return true;
        });
};

exports.createConector = (conectorData) => {
    const conectores = new Conector(conectorData);
    return conectores.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Conectores.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, conectores) {
                if (err) {
                    reject(err);
                } else {
                    resolve(conectores);
                }
            })
    });
};

exports.patchConector = (id, conectorData) => {
    return new Promise((resolve, reject) => {
        Conectores.findById(id, function (err, conectores) {
            if (err) reject(err);
            for (let i in conectorData) {
                conectores[i] = conectorData[i];
            }
            conectores.save(function (err, updatedConector) {
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

console.log(chalk.blue('----- [/conectores/models/conectores.model.js] Importando schema de conectores -- OK'));