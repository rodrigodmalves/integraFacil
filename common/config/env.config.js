const chalk = require('chalk');
console.log(chalk.blue('-- [/commom/config/env.config.js] Definindo configuracoes do servico'));
module.exports = {
    "portaApp": process.env.PORT,
    "portaApi": 3000,
    "appEndpoint": "http://localhost:80/",
    "apiEndpoint": "http://localhost:9000/"
};
console.log(chalk.blue('-- [/commom/config/env.config.js] Definindo configuracoes do servico - OK'));
