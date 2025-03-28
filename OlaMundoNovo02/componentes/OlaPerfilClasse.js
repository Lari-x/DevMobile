// OlaPerfilClasse.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class OlaPerfilClasse extends Component {
  render() {
    const { nome, endereco, telefone } = this.props;
    return (
      <View style={[styles.container, styles.classeContainer]}>
        <Text style={styles.title}>Perfil (Componente Classe)</Text>
        <Text style={styles.text}>Nome: {nome}</Text>
        <Text style={styles.text}>Endereço: {endereco}</Text>
        <Text style={styles.text}>Telefone: {telefone}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { padding: 16, marginVertical: 10, borderRadius: 8 },
  classeContainer: { backgroundColor: '#bbdefb' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#333' },
  text: { fontSize: 16, marginBottom: 4, color: '#555' }
});

export default OlaPerfilClasse;