/*

constate que irá armazenar o valor da porta. (EVITAR PORTAS COMUNS E PADRÃO DE TRAFEGO)
Declaração das dependências: 
- o middleware body-parser faz a interpretação do corpo(BODY)
da requisição; (https://www.npmjs.com/package/body-parser)
- express é o nosso framework web; (https://expressjs.com/pt-br/)

Criando servidor: atribuimos nossa variável 
“servidor” a uma instância do express();
*/

const porta = 3300;
const frameworkWeb = require('express');
const middleware = require('body-parser');
const servidor = frameworkWeb();


/*
Adicionando ao nosso servidor dois middlewares: 
todas as requisições que chegarem em nosso servidor 
irão passar em sequência pelos middlewares 
“bodyParser.urlencoded” que faz o parse das 
requisições via formulário e “bodyParser.json” 
das requisições via json.
*/
servidor.use(middleware.urlencoded({extend : true}));
servidor.use(middleware.json());


/*
Setando porta do nosso servidor e exportando módulo node. 
Obs: Se ocorrer algum erro relacionado a porta, exclua as 
linhas de códigos 10 a 12 e 
adicione “server.listen(port, function(){})”.
*/
servidor.listen(process.env.porta || porta, function (){
    console.log('Listening on');
})


module.exports = servidor;