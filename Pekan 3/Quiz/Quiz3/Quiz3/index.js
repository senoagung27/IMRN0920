import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Register from './Register';
import Splash from './Splash';
import Login from './Login';
import Home from './Home'
import Message from './Message'
import Product from './Product'
import Profile from './Profile'
import Chart from './Chart'



//const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



const index = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={Splash}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Message" component={Message} />
                <Stack.Screen name="Product" component={Product} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Chart" component={Chart} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index