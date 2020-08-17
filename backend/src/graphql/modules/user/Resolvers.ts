import connection from '../../../database/connection'
import createUser from '../../../useCases/users/createUser'

export default {
    Query: {
        users: () => connection('users').select('*'),
        // @ts-ignore types for _ and args 
        login: async (_, { email, password }) => { 
            const user =  await connection('users').where({ 'email': email, 'password': password }).first()
            return !!user
        },
    },
    Mutation: {
        // @ts-ignore types for _ and args 
        createUser: async (_, args) => createUser(_, args),
    }
} 