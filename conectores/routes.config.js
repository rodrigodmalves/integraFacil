console.log('-- [/users/routes.config.js] Importando modulo de usuario');



console.log('--- [/authorization/routes.config.js] Importando modulo UsersController');
const UsersController = require('./controllers/users.controller');
console.log('--- [/authorization/routes.config.js] Importando modulo UsersController - OK');

console.log('--- [/authorization/routes.config.js] Importando modulo PermissionMiddleware');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
console.log('--- [/authorization/routes.config.js] Importando modulo PermissionMiddleware - OK');

console.log('--- [/authorization/routes.config.js] Importando modulo ValidationMiddleware');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
console.log('--- [/authorization/routes.config.js] Importando modulo ValidationMiddleware - OK');


const config = require('../common/config/env.config');

const ADMIN = config.permissionLevels.ADMIN;
const PAID = config.permissionLevels.PAID_USER;
const FREE = config.permissionLevels.NORMAL_USER;

exports.routesConfig = function (app) {
    console.log('--- [/users/routes.config.js] Configurando rotas nivel usuario');
    app.post('/users', [
        UsersController.insert
    ]);
    app.get('/users', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        UsersController.list
    ]);
    app.get('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(FREE),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.getById
    ]);
    app.patch('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(FREE),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.patchById
    ]);
    app.delete('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        UsersController.removeById
    ]);
    console.log('--- [/users/routes.config.js] Configurando rotas nivel usuario - OK');
};
console.log('-- [/users/routes.config.js] Importando modulo de usuario - OK');
