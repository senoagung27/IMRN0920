import React, { Component, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { color } from 'react-native-reanimated';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { UserContext } from './userContext'

const Login =({navigation}) =>{
    const {value, setValue } = useContext(UserContext)
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={{alignSelf:'center',marginTop: 20 }}>
                    {/* <Image source = {require('./images/LeqLogo.png')} style={{width: 200, height:150}}/> */}
                    </View>
                <View style={styles.body}>
                    <Text style={styles.Welcome}>Welcome Back</Text>
                    <Text style={styles.subWelc}>Sign in to continue</Text>
                </View>
                <View style={styles.boxIsi}>
                    <Text style={styles.isiJudul}>Username</Text>
                        <TextInput 
                        style={{fontSize: 15, color: '#4C475A', marginVertical: 14, borderBottomWidth: 1, height: 40}}
                        onChangeText={(text)=> setValue(text)}
                        placeholder='e.g leq11'
                        />
                    <Text style={styles.isiJudul}>Password</Text>
                    <View style={{flexDirection: "row", borderBottomWidth: 1, height: 50, width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TextInput 
                        style={styles.isiSubjudul}
                        placeholder='***********'
                        secureTextEntry={true}
                        />
                        <TouchableOpacity>
                        {/* <MaterialCommunityIcons name='eye' size={20}/> */}
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                    <TouchableOpacity style={styles.regButton}>
                        <Text onPress={()=> navigation.navigate('MainApp')} style={styles.regText}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.or}>-OR-</Text>
                    <View style={styles.logins}>
                        <TouchableOpacity style={styles.loginchoice}>
                            {/* <MaterialCommunityIcons name='facebook-box' size={16} color='#3B5998' /> */}
                            <Text style={styles.choices}>    Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginchoice}>
                            {/* <Image source ={require('./images/003-search.png')} style={{height:16, width: 16}}/> */}
                            <Text style={styles.choices}>     Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
}
export default Login
const styles =StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#92d7ef'
    },
    clock:{
        fontSize:15,
        fontStyle: 'italic',
    },
    topIcons:{
        flexDirection:'row'
    },
    body:{
        flex: 1,
        marginTop: 30,
        marginHorizontal: 24,
    },
    Welcome:{
        fontSize: 40,
        fontWeight: "bold",
        color: '#ffffff'
    },
    subWelc:{
        fontSize: 16,
        color:'#ffffff',
    },
    boxIsi:{
        width: 366,
        height: 450,
        borderRadius: 11,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
        elevation: 2,
        alignSelf: "center",
        paddingHorizontal: 24,
        paddingTop: 30,
        marginTop: 31
    },
    isiJudul:{
        fontSize: 12,
        color: '#4D4D4D',
    },
    isiSubjudul:{
        fontSize: 15,
        color: '#4C475A',
        marginVertical: 14,
    },
    password:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    forgot:{
        fontSize: 12,
        color: '#0C0423',
        alignSelf: 'flex-end',
        paddingBottom: 50,
        fontWeight: 'bold'
    },
    regButton:{
        height: 50,
        backgroundColor: '#F77866',
        borderRadius: 6
    },
    regText:{
        fontSize: 14,
        color: '#ffffff',
        textAlign: "center",
        paddingVertical: 16
    },
    or:{
        fontSize: 15,
        color: '#4C475A',
        alignSelf: 'center',
        paddingVertical: 31,
        fontWeight: 'bold'
    },
    logins:{
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    loginchoice:{
        width: 149,
        height: 44,
        borderWidth: 1,
        borderColor: '#E6EAEE',
        borderRadius: 6,
        paddingVertical: 13,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: "flex-start"
    },
    choices:{
        color : '#4D4D4D',
        fontSize: 14,
        fontWeight: "bold"
    },
})
