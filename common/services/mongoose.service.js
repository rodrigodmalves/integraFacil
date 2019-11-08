const chalk = require('chalk');
console.log(chalk.blue('------ [/common/services/mongoose.services.js] MongoDB - Importando modulo'));

const mongoose = require('mongoose');

const conectorSchema = new mongoose.Schema({
    descricao: {
      type: String,
      required: [true,'descricao eh requerido']
    },
    ativo: {
      type: Boolean,
      required: [true,'ativo eh requerido']
    },
    testado: {
      type: Boolean,
      required: [true,'testado eh requerido']
    },
    endpoint: {
      type: String,
      required: [true, 'endpoint eh requerido']
    },
    tipoRest: {
      type: String,
      required: [true, 'tipoRest eh requerido']
    }
  })

constConectores = mongoose.model('conector', conectorSchema, 'conector');
//const connectionString ='mongodb+srv://integrafacil:flgb8409@cluster0-b9ios.gcp.mongodb.net/test?retryWrites=true&w=majority';
const connectionString ="mongodb://localhost:27017/integrafacil";
let count = 0;

const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Retry up to 30 times
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectWithRetry = () => {
    console.log(chalk.blue('------ [/common/services/mongoose.services.js] MongoDB - Iniciando tentativa...'));  
    mongoose.connect(connectionString, options).then(()=>{
      console.log(chalk.green('------ [/common/services/mongoose.services.js] MongoDB - Conectado.'));    
    }).catch(err=>{
        console.log(chalk.red('------ [/common/services/mongoose.services.js] MongoDB - Falha de conexao ('+err+') ... tentando novamente em 5 segundos. Tentativa ',++count));    
        setTimeout(connectWithRetry, 5000)
    })
};
console.log(chalk.blue('------ [/common/services/mongoose.services.js] MongoDB - Solicitando conexao'));
connectWithRetry();
console.log(chalk.blue('------ [/common/services/mongoose.services.js] MongoDB - Solicitando conexao - OK'));

exports.mongoose = mongoose;

console.log(chalk.blue('------ [/common/services/mongoose.services.js] MongoDB - Importando modulo - OK'));
