import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>Warna Merah</Text>
        <Text style={styles.bigBlue}>Warna Biru Ukuran Font Besar</Text>
        <Text style={[styles.bigBlue, styles.red]}>Warna Merah Ukuran Font Besar</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default App;
