import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';

import Home from './screens/Home'
import Profile from './screens/Profile'

const icons = {
    Home: {
        lib: Feather,
        name: 'home'
    },
    Profile: {
        lib: Feather,
        name: 'user'
    }
}

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { lib: Icon, name } = icons[route.name]
                    return <Icon name={name} size={size} color={color} />
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Início",
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    title: "Perfil"
                }}
            />
        </Tab.Navigator>
    )
}
