import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const About = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.judul}>Tentang Saya</Text>
        <FontAwesome5
          name={'user-circle'}
          size={100}
          solid
          color="#EFEFEF"
          style={styles.icon}
        />
        <Text style={styles.nama}>Seno Agung Pradityo</Text>
        <Text style={styles.profesi}>Programmer</Text>
        <View style={styles.box}>
          <Text style={styles.judulbox}>Portfolio</Text>
          <View style={styles.boxmedsos}>
            <View>
              <FontAwesome5
                name="gitlab"
                size={40}
                color="#3EC6FF"
                style={styles.icon}
              />
              <Text style={styles.tekssosmed}>@blessseeker</Text>
            </View>
            <View>
              <FontAwesome5
                name="github"
                size={40}
                color="#3EC6FF"
                style={styles.icon}
              />
              <Text style={styles.tekssosmed}>@blessseeker</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxmedsos}>
          <Text style={styles.judulbox}>Hubungi Saya</Text>
          <View style={styles.boxmedsos2}>
            <View style={styles.boxmedsoseach}>
              <View>
                <FontAwesome5
                  name="facebook"
                  size={40}
                  color="#3EC6FF"
                  style={styles.icon}
                />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10}}>
                <Text style={styles.tekssosmed}>@blessseeker</Text>
              </View>
            </View>
            <View style={styles.boxmedsoseach}>
              <View>
                <FontAwesome5
                  name="instagram"
                  size={40}
                  color="#3EC6FF"
                  style={styles.icon}
                />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10}}>
                <Text style={styles.tekssosmed}>@blessseeker</Text>
              </View>
            </View>
            <View style={styles.boxmedsoseach}>
              <View>
                <FontAwesome5
                  name="twitter"
                  size={40}
                  color="#3EC6FF"
                  style={styles.icon}
                />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10}}>
                <Text style={styles.tekssosmed}>@blessseeker</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
  },
  judul: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  nama: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
  profesi: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3EC6FF',
    textAlign: 'center',
    marginBottom: 7,
  },
  box: {
    borderRadius: 10,
    borderColor: 'blue',
    borderBottomColor: '#000',
    padding: 5,
    backgroundColor: '#EFEFEF',
    marginBottom: 9,
  },
  boxmedsos: {
    borderTopWidth: 2,
    borderTopColor: '#003366',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxmedsos2: {
    borderTopWidth: 2,
    borderTopColor: '#003366',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  boxmedsoseach: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 2,
  },
  judulbox: {
    fontSize: 18,
    color: '#003366',
  },
  tekssosmed: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
  teksinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default About;