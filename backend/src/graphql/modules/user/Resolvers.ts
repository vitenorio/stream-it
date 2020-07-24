import conn from '../../../database/connection'

export default {
    Query: {
        users: () => conn('users').select('*')
    },
    Mutation: {
        createUser: async (root: any, args: any) => {
    
            const { name, email, password } = args.input
            const user = { name, email, password }
     
            await conn('users').insert(user)

            return user    
        },
    }
}