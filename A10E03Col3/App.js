// App.js
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles"; // Importa os estilos definidos em styles.js

// Componente principal App
export default function App() {
  return (
    // View principal que serve como container, aplicando os estilos definidos em styles.container
    <View style={styles.container}>
      {/* View que representa uma caixa, aplicando os estilos definidos em styles.box */}
      <View style={styles.box}>
        {/* Texto dentro da caixa, aplicando os estilos definidos em styles.boxText */}
        <Text style={styles.boxText}>Texto 1</Text>
      </View>

      {/* Segunda caixa com os mesmos estilos */}
      <View style={styles.box}>
        <Text style={styles.boxText}>Texto 2</Text>
      </View>

      {/* Terceira caixa com os mesmos estilos */}
      <View style={styles.box}>
        <Text style={styles.boxText}>Texto 3</Text>
      </View>
    </View>
  );
}