import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
    cache: new InMemoryCache,
    link: new HttpLink({
        uri: 'http://localhost:4000/graphql'
    })
})

export default client;