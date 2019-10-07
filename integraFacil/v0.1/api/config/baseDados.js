/*
É um mapeamento de dados, sendo esses objetos JavaScript. 
O Mongoose é uma biblioteca que faz a tradução dos dados do 
Mongodb(documentos) para objetos JavaScript, proporcionando 
fácil modelagem e consultas dos dados da aplicação.
*/

const bancoDados = require('mongoose');
module.exports = bancoDados.connect('mongodb://localhost:27017/myDataBase',{
    useNewUrlParser: true
});