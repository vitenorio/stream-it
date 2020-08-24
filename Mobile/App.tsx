import React from 'react'
import { ApolloProvider } from 'react-apollo'

import client from './src/apolloClient'

import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Navigation from './src/navigation'

import Approach from './src/screens/Approach'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" />
      <Approach />
    </ApolloProvider>
    // <NavigationContainer>
    //   <Navigation />
    // </NavigationContainer>
  );
}
