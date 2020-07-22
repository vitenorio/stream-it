import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import Home from './screens/Home'
import Profile from './screens/Profile'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                inactiveTintColor: '#C4C4C4',
                activeTintColor: '#E2A9A3',
                tabStyle: {
                    backgroundColor: '#403E5A',
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Início",
                    tabBarIcon: () => (
                        <Feather name="home" size={24} color="#C4C4C4" />
                    )
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    title: "Perfil",
                    tabBarIcon: () => (
                        <Feather name="user" size={24} color="#C4C4C4" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
