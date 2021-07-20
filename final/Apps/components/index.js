import React, { useState } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from './home'
import Login from './login'
import Splash from './splash'
import Profile from './profile'
import Details from './detail'
import { UserContext } from './userContext'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const index = () => {
    const [value, setValue ] = useState('Username')
    return (
        <NavigationContainer >
            <UserContext.Provider value={{ value, setValue }}>
            <Stack.Navigator initialRouteName={Splash}>
                <Stack.Screen name="Welcome" component={Splash}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={Details}/>
                <Stack.Screen name="MainApp" component={MainApp}/>
            </Stack.Navigator>
            </UserContext.Provider>
        </NavigationContainer>
    )
}

const MainApp = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

export default index
