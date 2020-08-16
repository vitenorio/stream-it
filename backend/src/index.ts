import server from './server'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

server(typeDefs, resolvers)