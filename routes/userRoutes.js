const userController = require('../controllers/userControllers');

async function userRoutes( fastify, options){
    fastify.get('/', userController.getUsers);
    fastify.get('/:id', userController.getUsersById);
    fastify.post('/', userController.createUser);
}

module.exports  = userRoutes;