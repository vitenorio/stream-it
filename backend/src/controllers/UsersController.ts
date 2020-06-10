import conn from '../database/connection'
import { Request, Response } from 'express'
import { UserModel } from '../models/UserModel'

class UsersController {
    async createUser (request: Request, response: Response) {
        const {
            name,
            email,
            password,
            work,
            github
        } = request.body
                
        const user = {
            name,
            email,
            password,
            work,
            github
        }

        const userId = await conn('users').insert(user)

        return response.json({ id: userId[0], ...user })
    }

    async login (request:Request, response: Response) {
        const {
            email,
            password
        } = request.body

        const user = await conn('users').where({ email, password }).first().select('*')

        if(!user) {
            return response.status(400).json({ message: 'Usuário não encontrado!' })
        }

        return response.json({...user})
    }
}

export default UsersController