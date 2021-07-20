import React, {useState, useEffect} from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const {width, height} = Dimensions.get('window')

const Details = ({route, navigation}) => {
    
    const { movieId } = route.params

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('https://wallpaperset.com/w/full/7/2/8/462752.jpg');
    const [year, setYear] = useState('');
    const [desc, setDesc] = useState('');
    const [rating, setRating] = useState('');
    const [genre, setGenre] = useState('')

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=2d37d616`)
        .then((data) => data.json())
        .then((data2) => {
            setTitle(data2.Title),
            setPoster(data2.Poster),
            setYear(data2.Year),
            setDesc(data2.Plot),
            setRating(data2.imdbRating),
            setGenre(data2.Genre)
        })
        .catch((error) => console.error(error))
    }, []); 

    return (
        <View style={styles.container}>
        <View style={styles.TopContainer}>
            <Image source={{uri: poster}} style={styles.image}/>
        </View>
        <View style={styles.BottomContainer}>
            <View style={[styles.flexRow]}>
                <Text style={[styles.textWhite]}>{year}</Text>
                <Text style={[styles.genres, styles.textWhite]}>{genre}</Text>
            </View>
            <View>
                <Text style={[styles.textWhite, styles.title]}>{title}</Text>
                <View style={[styles.flexRow]}>
                    <Text style={[styles.textWhite, styles.imdbScore]}>{rating}</Text>
                    <Text style={[styles.textWhite, styles.imdbScoreOverall]}>/10</Text>
                    <Text style={[styles.textWhite, styles.imdb]}>IMDB</Text>
                </View>
                <Text style={[styles.textWhite, styles.desc]} numberOfLines={5}>{desc}</Text>
            </View>
        </View>
        {/* <LinearGradient colors={['transparent', '#92d7ef50', '#92d7ef80', '#92d7ef90', '#92d7ef']} style={styles.linearGradient}/> */}
    </View>
)
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#000'},
    TopContainer: {height: (height - 100) / 2, width},
    image: {width, height: height - 100, position: 'absolute', top: 0, left: 0, zIndex: 5},
    BottomContainer: {flex: 1, paddingHorizontal: 25, position: 'relative', zIndex: 9},
    flexRow: {flexDirection: 'row'},
    textWhite: {color: '#ffffff'},
    genres: {marginLeft: 10, color:'#ffffff00'},
    linearGradient: {height: height / 2, width, position: 'absolute', bottom: 0, left: 0, zIndex: 6},
    flexEnd: {alignItems: 'flex-end'},
    imdbScore: {fontSize: 18},
    imdbScoreOverall: {fontSize: 15, color: '#ffffff80'},
    imdb: {fontSize: 18, marginLeft: 10, color:'#ffba00'},
    desc: {marginTop: 10},
    title: {fontSize: 40, textTransform: 'uppercase', lineHeight: 50, marginVertical: 20},
})

export default Details
