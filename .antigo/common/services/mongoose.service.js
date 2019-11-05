console.log('------ [/common/services/mongoose.services.js] MongoDB - Importando modulo');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true,'------ [/common/services/mongoose.services.js] Username é requerido']
    },
    created: {
      type: Date,
      required: [true, '------ [/common/services/mongoose.services.js] Created date é requerido']
    }
  })

constUser = mongoose.model('user', userSchema, 'user');
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
    console.log('------ [/common/services/mongoose.services.js] MongoDB - Iniciando tentativa...');
    mongoose.connect(connectionString, options).then(()=>{
        console.log('------ [/common/services/mongoose.services.js] MongoDB - Conectado.')
    }).catch(err=>{
        console.log('------ [/common/services/mongoose.services.js] MongoDB - Falha de conexao ('+err+') ... tentando novamente em 5 segundos. Tentativa ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};

console.log('------ [/common/services/mongoose.services.js] MongoDB - Solicitando conexao');
connectWithRetry();
console.log('------ [/common/services/mongoose.services.js] MongoDB - Solicitando conexao - OK');

exports.mongoose = mongoose;

console.log('------ [/common/services/mongoose.services.js] MongoDB - Importando modulo - OK');
