import React from 'react';
import {
    View, Text, ScrollView, TextInput, StyleSheet, Button,
    TouchableOpacity
} from 'react-native';

export default function App( {navigation} ) {
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <Image source={require('../Tugas13/assets/logo.png')} /> */}
                <Text style={styles.logintext}>Login</Text>
                <View style={styles.forminput}>
                    <Text style={styles.formtext}>Username / Email</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.forminput}>
                    <Text style={styles.formtext}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} />
                </View>
                <View style={styles.kotaklogin}>
                    <TouchableOpacity style={styles.btlogin} 
                    onPress={ () => navigation.navigate('DrawerStackScreen') } >
                        <Text style={styles.textbt}>  Masuk </Text>
                    </TouchableOpacity>
                    <Text style={styles.atautext}>atau</Text>
                    <TouchableOpacity style={styles.btreg}
                    onPress={ () => navigation.navigate('RegisterScreen') } >
                        <Text style={styles.textbt}> Daftar ? </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1
    },
    logintext: {
        fontSize: 24,
        color: '#003366',
        textAlign: "center",
        marginVertical: 20
    },
    formtext: {
        color: '#003366',
    },
    atautext: {
        fontSize: 20,
        color: '#3EC6FF',
        textAlign: "center"
    },
    forminput: {
        marginHorizontal: 30,
        marginVertical: 5,
        alignContent: 'center',
        width: 294
    },
    input: {
        height: 40,
        borderColor: '#003366',
        borderWidth: 1
    },
    vbutton: {
        marginHorizontal: 90,
        borderRadius: 10,
        marginVertical: 10,
    },
    btlogin: {
        alignItems: "center",
        backgroundColor: "#3EC6FF",
        padding: 10,
        borderRadius: 16,
        marginHorizontal: 30,
        marginBottom: 10,
        width: 140
    },
    btreg: {
        alignItems: "center",
        backgroundColor: "#003366",
        textDecorationColor: '#000',
        padding: 10,
        borderRadius: 16,
        marginHorizontal: 30,
        marginTop: 10,
        width: 140
    },
    textbt: {
        color: 'white',
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },
    kotaklogin: {
        marginTop: 20,
        alignItems: 'center'
    },
});