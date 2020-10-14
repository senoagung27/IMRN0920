import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput, Button, Dimensions
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import moduleName from './../images/logo.svg'
//bbjirr fullwidth aja susah https://stackoverflow.com/questions/39631895/how-to-set-image-width-to-be-100-and-height-to-be-auto-in-react-native
const win = Dimensions.get('window');
const ratio = win.width / 541;
export default class App extends React.Component {
    onPressLearnMore() {
        console.log("App -> onPressLearnMore -> onPressLearnMore")
    }
    render() {
        return (
            <View style={style.container}>
                <Image source={require('./../images/sanber.png')} style={style.imgLogo} />
                <Text style={{ fontSize: 24, marginBottom: 8, fontWeight: "bold" }}>About Me</Text>
                <Image source={require('./../images/eren.jpg')} style={style.imgProfil} />
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Danang TP</Text>
                <Text style={{ fontSize: 16, color: '#005F89', marginBottom: 16 }}>Otw Flutter Developer</Text>
                <View style={style.textWithLogo}>
                    <FontAwesome name="instagram" size={24} color="#005F89" />
                    <Text>@danang_tp</Text>
                </View>
                <View style={style.textWithLogo}>
                    <AntDesign name="github" size={24} color="#005F89" />
                    <Text>rudiwawa</Text>
                </View>



            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        padding: 16,
        // backgroundColor: 'gray',
        flex: 1,
        flexDirection: 'column',
        // flexDirection: 'row',
    },
    imgLogo: {
        // position: 'absolute',
        // flex:'start',
        // width: 165,
        height: 40,
        marginLeft: -20,
        marginTop: 26,
        marginBottom: 35,
        // left: 14
    },
    textInput: {
        height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 8,
        marginBottom: 16,
        width: 273,
    },
    buttonSubmitView: {
        marginTop: 124,
        // width: 143,
        // flex: 1,

        flexDirection: 'row-reverse',
    },
    touchButtonSubmit: {
        height: 100, width: 143,
        borderRadius: 8
    },
    imgProfil: {
        width: win.width - 16 * 2,
        height: 362 * ratio,
        marginBottom: 64
    },
    textWithLogo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 16,
        color: 'black'
    }
})
