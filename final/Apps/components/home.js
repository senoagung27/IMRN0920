import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button,Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen =({navigation}) =>{
    var movie1={
        title : 'Don Jon',
        image : 'https://m.media-amazon.com/images/M/MV5BN2ZhY2IzMWQtMGU4MC00ODg2LThkNWMtNWMzYmM2OTc5ZDMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        id : 'tt2229499'
    }
    var movie2={
        title : 'Frozen',
        image : 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg',
        id : 'tt2294629'
    }
    var movie3={
        title : 'Wreck It Ralph',
        image : 'https://m.media-amazon.com/images/M/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA@@._V1_SX300.jpg',
        id : 'tt1772341'
    }
    var movie4={
        title : 'Iron Man',
        image : 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
        id : 'tt0371746'
    }
    var movie5={
        title : 'Pokémon Detective Pikachu',
        image : 'https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SX300.jpg',
        id : 'tt5884052'
    }
    var movie6={
        title : 'Transformers: Age of Extinction',
        image : 'https://m.media-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@._V1_SX300.jpg',
        id : 'tt2109248'
    }
    var movie7={
        title : 'Molulo 2: Jodohku yang Mana?',
        image : 'https://m.media-amazon.com/images/M/MV5BYmU5YTA5YmMtOGU1My00ZWZjLWIyOWMtZThjNzBiZDcyMTM5XkEyXkFqcGdeQXVyNzY4NDQzNTg@._V1_SX300.jpg',
        id : 'tt11828456'
    }
    var movie8={
        title : 'The Avengers',
        image : 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        id : 'tt0848228'
    }
    
    let movieArr = []
    movieArr.push(movie1)
    movieArr.push(movie2)
    movieArr.push(movie3)
    movieArr.push(movie4)
    movieArr.push(movie5)
    movieArr.push(movie6)
    movieArr.push(movie7)
    movieArr.push(movie8)
    
    const _movieCard = ({item, index})=>{
        return(
            <View style={styles.moviecardBox}>
                <TouchableOpacity onPress={()=> navigation.push('Details', { movieId: item.id})}>
                    <Image style={styles.poster} source={{uri: item.image}}/>
                </TouchableOpacity>
                    <Text style={{alignSelf: 'center', fontSize:17, fontStyle:'italic'}}>{item.title}</Text>
            </View>
        )
    }    
    return(
        <View style={styles.container}>
        <FlatList
            data={movieArr} 
            numColumns={2}
            renderItem={this, _movieCard}
            keyExtractor = {(item,index)=> index.toString()}/>
        </View>
    )
    
}

export default HomeScreen
const styles =StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor:'#92d7ef'
    },
    moviecardBox:{
        justifyContent: "center",
        alignSelf:'center'
    },
    poster:{
        height: 300,
        width: 185,
        margin: 5
    }
})
