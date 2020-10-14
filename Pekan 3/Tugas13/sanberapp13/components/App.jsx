import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import LoginScreen from './Components/LoginScreen'
import AboutScreen from './Components/AboutScreen'


export default class App extends Component {
    render() {
        return (
            <>
                {/* <LoginScreen /> */}
                <AboutScreen />
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black'
    },

});
