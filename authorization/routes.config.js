console.log('-- [/authorization/routes.config.js] Importando modulo de autenticacao');

console.log('--- [/authorization/routes.config.js] Importando modulo VerifyUserMiddleware');
const VerifyUserMiddleware = require('./middlewares/verify.user.middleware');
console.log('--- [/authorization/routes.config.js] Importando modulo VerifyUserMiddleware - OK');

console.log('--- [/authorization/routes.config.js] Importando modulo AuthorizationController');
const AuthorizationController = require('./controllers/authorization.controller');
console.log('--- [/authorization/routes.config.js] Importando modulo AuthorizationController- OK');

console.log('--- [/authorization/routes.config.js] Importando modulo AuthValidationMiddleware');
const AuthValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
console.log('--- [/authorization/routes.config.js] Importando modulo AuthValidationMiddleware - OK');

exports.routesConfig = function (app) {
    console.log('-- [/authorization/routes.config.js] Configurando Rotas Nivel Autenticacao');
    app.post('/auth', [
        VerifyUserMiddleware.hasAuthValidFields,
        VerifyUserMiddleware.isPasswordAndUserMatch,
        AuthorizationController.login
    ]);

    app.post('/auth/refresh', [
        AuthValidationMiddleware.validJWTNeeded,
        AuthValidationMiddleware.verifyRefreshBodyField,
        AuthValidationMiddleware.validRefreshNeeded,
        AuthorizationController.login
    ]);
    console.log('-- [/authorization/routes.config.js] Configurando Rotas Nivel Autenticacao - OK');
};
console.log('-- [/authorization/routes.config.js] Importando modulo de autenticacao - OK');