import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import Approach from './screens/Approach'
import Login from './screens/Login'
import Register from './screens/Register'

type RootStackParamList = {
    Approach: undefined
    Register: undefined
    Login: undefined
}

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Approach'>
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Approach'>

type Props = {
    route: LoginScreenRouteProp
    navigation: LoginScreenNavigationProp
}

const RootStack = createStackNavigator<RootStackParamList>()

const InitialNavigation = () => {
    return (
        <RootStack.Navigator initialRouteName="Approach" headerMode="none">
            <RootStack.Screen name="Approach" component={Approach} />
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Register" component={Register} />
        </RootStack.Navigator>
    )
}

export default InitialNavigation