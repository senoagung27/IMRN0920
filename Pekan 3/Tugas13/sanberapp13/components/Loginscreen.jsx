import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput, Button
} from 'react-native';
// import moduleName from './../images/logo.svg'
export default class App extends React.Component {
    onPressLearnMore() {
        console.log("App -> onPressLearnMore -> onPressLearnMore")
    }
    render() {
        return (
            <View style={style.container}>
                <Text>Login</Text>
                <Image source={require('./../images/sanber.png')} style={style.imgLogo} />
                <View style={{ flexDirection: 'row-reverse' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <TextInput
                            style={style.textInput}
                            value="Email"
                        />
                        <TextInput
                            style={style.textInput}
                            value="Password"
                        />

                    </View>
                </View>
                <View style={style.buttonSubmitView} >
                    <TouchableOpacity style={style.touchButtonSubmit}>
                        <Button
                            title="Login"
                            color="#0093B7"
                            onPress={() => this.onPressLearnMore()}//uji coba fungsi button
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </TouchableOpacity>

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
        width: 312,
        marginTop: 75,
        marginBottom: 211,
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
})
