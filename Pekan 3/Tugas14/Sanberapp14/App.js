/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import Login from './app/screens/Login';
import About from './app/screens/About';
import Daftar from './app/screens/Daftar';
import Skill from './app/screens/Skill';

const App = () => {
  const state = 'isLoggedIn';
  return (
    <>
      <View style={styles.container}>
        {state == 'isNotLoggedIn' && <Login />}
        {state == 'register' && <Daftar />}
        {state == 'isLoggedIn' && <Skill />}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
