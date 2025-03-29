import React from "react";
import { Text, StyleSheet } from "react-native";

const Titulo = ({ texto }) => {
  return <Text style={styles.titulo}>{texto}</Text>;
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
});

export default Titulo;
