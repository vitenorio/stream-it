import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import InitialNavigation from './src/InitialNavigation'

import Approach from './src/screens/Approach'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <InitialNavigation />
    </NavigationContainer>
    // <>
    //   <StatusBar barStyle="light-content" />
    //   <Approach />
    // </>
  );
}
