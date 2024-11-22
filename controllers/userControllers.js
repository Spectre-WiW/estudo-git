const userModel = require('../models/userModels');
const { successResponse } = require('../views/response');

const getUsers = async(request, reply) => {
    const users = userModel.getAllUsers();
    return successResponse(reply, users);
}

const getUsersById = async (request, reply) => {
    const {id} = request.params;
    const user = userModel.getUserById(id);
    if(user){
        return successResponse(reply, user);
    }

    reply.code(404).send({error:'Usuário não encontrado'});
};



const createUser = async (request, reply) => {
    const { name, age} = request.body;
    const newUser = userModel.createUser(name, age);
    return successResponse( reply, newUser, 201);
};


module.exports = { getUsers, createUser, getUsersById };