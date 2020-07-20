import conn from '../../../database/connection'

export default {
    Query: {
        users: () => conn('users').select('*')
    },
    Mutation: {
        
    }
}