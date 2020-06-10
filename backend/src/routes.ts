import express, { request, response } from 'express'
import UsersController from './controllers/UsersController'

const routes = express.Router()

const usersController = new UsersController()

routes.post('/create-user', usersController.createUser)
routes.post('/login', usersController.login)

export default routes