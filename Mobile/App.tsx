import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Navigation from './src/navigation'

import Approach from './src/screens/Approach'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Approach />
    </>
    // <NavigationContainer>
    //   <Navigation />
    // </NavigationContainer>
  );
}
