const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

//Cadastro de usuário
routes.post('/user', UserController.UserRegister);

//Listando todos os usuários
routes.get('/users', UserController.listUsers);

module.exports = routes;