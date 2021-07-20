import React, { Component, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

const Splash =({navigation}) =>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("Login")
        }, 1000)
    }, [])
        return(
            <View style={styles.container}>
                <View style={styles.bg}>
                {/* <Image source = {require('./images/LeqLogo.png')} style={{width: 200, height:150}}/> */}
                </View>
            </View>
        )
}
export default Splash
const styles =StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#92d7ef'
    },
    bg:{
        width: 300,
        height: 300,
        alignContent: 'center',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff70',
        borderRadius: 180
    }
})
