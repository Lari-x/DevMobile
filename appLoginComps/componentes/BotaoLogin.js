import React from "react";
import { Button, StyleSheet, View } from "react-native";

const BotaoLogin = ({ onPress, title }) => {
  return (
    <View style={styles.container}>
      <Button title={title} onPress={onPress} color="#6200ee" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default BotaoLogin;
