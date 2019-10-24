const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Username is required']
    },
    created: {
      type: Date,
      required: [true, 'Created date is required']
    }
  })

constUser = mongoose.model('user', userSchema, 'user');
const connectionString ='mongodb+srv://integrafacil:flgb8409@cluster0-b9ios.gcp.mongodb.net/test?retryWrites=true&w=majority';
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
    console.log('MongoDB - conectando...');
    mongoose.connect(connectionString, options).then(()=>{
        console.log('MongoDB - conectado.')
    }).catch(err=>{
        console.log('MongoDB - Falha de conexao ('+err+') ... tentando novamente em 5 segundos. Tentativa ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;
