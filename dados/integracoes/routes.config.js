const chalk = require('chalk');
console.log(chalk.blue('-- [/dados/integracoes/routes.config.js] Importando modulo de integracoes'));


console.log(chalk.blue('--- [/dados/integracoes/routes.config.js] Importando modulo integracoesController'));
const integracoesController = require('./controllers/integracoes.controller.js');
console.log(chalk.blue('--- [/dados/integracoes/routes.config.js] Importando modulo integracoesController - OK'));

exports.rotaIntegracoes = function (app) {
    console.log(chalk.blue('--- [/dados/integracoes/routes.config.js] Configurando rotas integracoes'));
    app.post('/integracoes', [
        integracoesController.insert
    ]);
    app.get('/integracoes', [
        integracoesController.list
    ]);
    app.get('/integracoes/:id', [
        integracoesController.getById
    ]);
    app.patch('/integracoes/:id', [
        integracoesController.patchById
    ]);
    app.delete('/integracoes/:id', [
        integracoesController.removeById
    ]);
    console.log(chalk.blue('--- [/dados/integracoes/routes.config.js] Configurando rotas integracoes - OK'));
};
console.log(chalk.blue('-- [/dados/integracoes/routes.config.js] Importando modulo de integracoes - OK'));
