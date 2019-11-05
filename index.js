const config = require('./common/config/env.config.js');
const express = require('express');
const app = express();

console.log('- [/index.js] Iniciando aplicacao - OK');
app.listen(config.port, function () {
    console.log('- [/index.js] APP executando. Ouvindo na porta %s', config.port);
});
app.get('/', function(req, resp) {
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> oi oi </h1>
                </body>
            </html>
        `
    );
});
