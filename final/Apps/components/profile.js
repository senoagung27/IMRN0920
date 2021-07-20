import React, { Component, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';;
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

import { UserContext } from './userContext'

const Profile =({navigation}) =>{
    const {value, setValue } = useContext(UserContext)
        return(
            <View style={styles.container}>
                <View style={{paddingHorizontal: 20, paddingVertical: 20, flexDirection:'row'}}>
                {/* <Image source={require('./images/habata.png')} style={{height: 100, width: 100}}/> */}
                <View>
                <Text style={{fontSize: 40, paddingHorizontal: 20}}>Hello</Text>
                <Text style={{fontSize: 40, paddingHorizontal: 20, paddingTop: 10, color: '#ffffff', fontStyle: 'italic'}}>{value}</Text>
                </View>
                </View>
                <View style={styles.box1}>
                    <Text style={styles.port}>Portofolio</Text>
                    <View style={styles.garishead}>
                    </View>
                    <View style={styles.applikasi}>
                        <View style={styles.icons}>
                        {/* <MaterialCommunityIcons name="gitlab" size={40} color="#3EC6FF" /> */}
                        <Text style={styles.iconTitle}>@{value}</Text>  
                        </View>
                        <View style={styles.icons}>
                        {/* <MaterialCommunityIcons name="github-circle" size={40} color="#3EC6FF" /> */}
                        <Text style={styles.iconTitle}>@{value}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.port}>Hubungi Saya</Text>
                    <View style={styles.garishead}>
                    </View>
                    <View style={styles.socmed}>
                        <View style={styles.icons2}>
                            {/* <MaterialCommunityIcons name="facebook-box" size={40} color="#3EC6FF" /> */}
                            <Text style={styles.iconTitle}>@{value}</Text>
                        </View>  
                        <View style={styles.icons2}>
                            {/* <MaterialCommunityIcons name="instagram" size={40} color="#3EC6FF" /> */}
                            <Text style={styles.iconTitle}>@{value}</Text>
                        </View>
                        <View style={styles.icons2}>
                            {/* <MaterialCommunityIcons name="twitter" size={40} color="#3EC6FF" /> */}
                            <Text style={styles.iconTitle}>@{value}</Text>
                        </View>
                        <View style={styles.icons2}>
                            {/* <MaterialCommunityIcons name="youtube" size={40} color="#3EC6FF" /> */}
                            <Text style={styles.iconTitle}>@{value}</Text>
                        </View>
                        <View style={styles.icons2}>
                            {/* <MaterialCommunityIcons name="twitch" size={40} color="#3EC6FF" /> */}
                            <Text style={styles.iconTitle}>@{value}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )

}
export default Profile
const styles =StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#92d7ef'
    },
    body:{
        flex: 1,
        justifyContent: 'center'
    },
    box1:{
        height: 140,
        width: 359,
        paddingHorizontal: 8,
        backgroundColor: '#EFEFEF',
        borderRadius: 16,
        marginHorizontal: 8,
        marginTop: 10
      },
      port:{
        fontSize: 18,
        color: '#003366',
        paddingTop: 5,
        paddingLeft: 8,
        paddingBottom: 8,
      },
      garishead:{
        borderWidth:1,
        borderColor: '#003366',
      },
      icons:{
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconTitle:{
        fontSize: 16,
        color: '#003366',
        padding: 10,
      },
      applikasi:{
        flexDirection: 'row',
        justifyContent: "space-around"
      },
      box2:{
        height: 350,
        width: 359,
        paddingHorizontal: 8,
        backgroundColor: '#EFEFEF',
        borderRadius: 16,
        marginTop: 25,
        marginHorizontal: 8
      },
      socmed:{
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      icons2:{
        paddingTop: 20,
        alignItems: "center",
        flexDirection: "row"
      },
})
