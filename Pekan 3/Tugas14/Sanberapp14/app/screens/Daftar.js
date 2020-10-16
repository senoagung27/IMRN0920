import React from 'react';
import {
  View,
  Text,

  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

const Daftar = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Image source={require('../assets/logo.png')} /> */}
        <Text style={styles.logintext}>DAFTAR</Text>
        <View style={styles.formgrup}>
          <Text style={styles.teksform}>Username</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formgrup}>
          <Text style={styles.teksform}>Email</Text>
          <TextInput style={styles.input} textContentType={'emailAddress'} />
        </View>
        <View style={styles.formgrup}>
          <Text style={styles.teksform}>Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View style={styles.formgrup}>
          <Text style={styles.teksform}>Konfirmasi Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View style={styles.formgrup}>
          <Button style={styles.btndaftar} title="Daftar">
            <Text style={styles.textbt}> Daftar </Text>
          </Button>
          <Text style={styles.atau}>atau</Text>
          <Button style={styles.btnmasuk} title="Sudah punya akun">
            <Text style={styles.textbt}> Sudah Punya Akun </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 63,
    alignItems: 'center',
  },
  logintext: {
    fontSize: 24,
    color: '#003366',
    textAlign: 'center',
    marginVertical: 20,
  },
  teksform: {
    color: '#003366',
  },
  atau: {
    fontSize: 24,
    color: '#3EC6FF',
    textAlign: 'center',
  },
  formgrup: {
    marginHorizontal: 30,
    marginVertical: 5,
    alignContent: 'center',
    width: 294,
  },
  input: {
    height: 40,
    borderColor: '#003366',
    borderWidth: 1,
  },
  btnmasuk: {
    alignItems: 'center',
    backgroundColor: '#3EC6FF',
    padding: 10,
    borderRadius: 16,
    marginHorizontal: 30,
    marginTop: 10,
    width: 140,
  },
  btndaftar: {
    alignItems: 'center',
    backgroundColor: '#003366',
    textDecorationColor: '#000',
    padding: 10,
    borderRadius: 16,
    marginHorizontal: 30,
    marginBottom: 10,
    width: 140,
  },
  textbt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Daftar;