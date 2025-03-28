// OlaPerfilFuncao.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OlaPerfilFuncao = ({ nome, endereco, telefone }) => {
  return (
    <View style={[styles.container, styles.funcaoContainer]}>
      <Text style={styles.title}>Perfil (Componente Função)</Text>
      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>Endereço: {endereco}</Text>
      <Text style={styles.text}>Telefone: {telefone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, marginVertical: 10, borderRadius: 8 },
  funcaoContainer: { backgroundColor: '#e3f2fd' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#333' },
  text: { fontSize: 16, marginBottom: 4, color: '#555' }
});

export default OlaPerfilFuncao;