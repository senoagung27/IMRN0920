import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const Chart = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text>Halaman Chart</Text>
    </View>
  );
};

export default Chart
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});