console.log('---- [/common/middlewares/auth.validation.middleware.js] Carregando script de autenticacao');
const jwt = require('jsonwebtoken'),
    secret = require('../config/env.config.js').jwt_secret,
    crypto = require('crypto');

exports.verifyRefreshBodyField = (req, res, next) => {
    if (req.body && req.body.refresh_token) {
        return next();
    } else {
        return res.status(400).send({error: '---- [/common/middlewares/auth.validation.middleware.js] Need to pass refresh_token field'});
    }
};

exports.validRefreshNeeded = (req, res, next) => {
    let b = new Buffer(req.body.refresh_token, 'base64');
    let refresh_token = b.toString();
    let hash = crypto.createHmac('sha512', req.jwt.refreshKey).update(req.jwt.userId + secret).digest("base64");
    if (hash === refresh_token) {
        req.body = req.jwt;
        return next();
    } else {
        return res.status(400).send({error: '---- [/common/middlewares/auth.validation.middleware.js] Invalid refresh token'});
    }
};


exports.validJWTNeeded = (req, res, next) => {
    console.log('---- [/common/middlewares/auth.validation.middleware.js] Validando JWT.');
    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                console.log('---- [/common/middlewares/auth.validation.middleware.js] Usuário não autenticado.');
                return res.status(401).send();
            } else {
                req.jwt = jwt.verify(authorization[1], secret);
                console.log('---- [/common/middlewares/auth.validation.middleware.js] JWT Validado!');
                return next();
            }

        } catch (err) {
            return res.status(403).send();
        }
    } else {
        console.log('---- [/common/middlewares/auth.validation.middleware.js] JWT nao validado - informe dados de usuario.');
        return res.status(401).send();
    }
};
console.log('---- [/common/middlewares/auth.validation.middleware.js] Carregando script de autenticacao - OK');