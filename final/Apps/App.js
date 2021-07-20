import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigate from './components'
import HomeScreen from './components/home'
import Splash from './components/splash'
import Profile from './components/profile'
import Login from './components/login'

export default class App extends Component {
  render(){
  return (
    <Navigate/>
    // <HomeScreen/>
    // <Splash/>
    // <Profile/>
    // <Login/>
  ); 
  }
}

;
