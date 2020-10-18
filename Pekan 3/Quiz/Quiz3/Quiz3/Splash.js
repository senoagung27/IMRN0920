import React, { useEffect } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Register")
        }, 3000)
    }, [])
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View style={styles.bunder} />
            {/* <Image style={styles.gambar} source={require('./images/logo.png')} /> */}
            <View style={styles.footer} />
        </View>

    )
}

export default Splash

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        width: 134,
        height: 5,
        bottom: 7,
        backgroundColor: '#000000',
        borderRadius: 5,
    },
    bunder: {
        position: "absolute",
        backgroundColor: '#211F65',
        //mix-blend-mode: normal,
        height: 298,
        width: 305,
        opacity: 0.1,
        borderRadius: 150,
    },
    text: {
        color: 'red',
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },
    gambar: {
        height: 133,
        width: 223,
    }
})
