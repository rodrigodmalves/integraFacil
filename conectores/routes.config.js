const chalk = require('chalk');
console.log(chalk.blue('-- [/conectores/routes.config.js] Importando modulo de conectores'));


console.log(chalk.blue('--- [/conectores/routes.config.js] Importando modulo conectoresController'));
const conectoresController = require('./controllers/conectores.controller.js');
console.log(chalk.blue('--- [/conectores/routes.config.js] Importando modulo conectoresController - OK'));

exports.rotaConectores = function (app) {
    console.log(chalk.blue('--- [/conectores/routes.config.js] Configurando rotas conectores'));
    app.post('/conectores', [
        conectoresController.insert
    ]);
    app.get('/conectores', [
        conectoresController.list
    ]);
    app.get('/conectores/:id', [
        conectoresController.getById
    ]);
    app.patch('/conectores/:id', [
        conectoresController.patchById
    ]);
    app.delete('/conectores/:id', [
        conectoresController.removeById
    ]);
    console.log(chalk.blue('--- [/conectores/routes.config.js] Configurando rotas conectores - OK'));
};
console.log(chalk.blue('-- [/conectores/routes.config.js] Importando modulo de conectores - OK'));
