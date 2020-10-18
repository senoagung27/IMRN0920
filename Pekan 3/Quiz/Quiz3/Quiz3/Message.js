import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const Message = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text>Halaman Message</Text>
    </View>
  );
};

export default Message
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});