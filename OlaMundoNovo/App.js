import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente baseado em função
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

// Componente baseado em classe
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

// Componente principal App
const App = () => {
  return (
    <View style={styles.appContainer}>
      <OlaPerfilFuncao 
        nome="Guilherme Souza"
        endereco="Rua das jardineira, 354" 
        telefone="(11) 94329-9439" 
      />
      
      <OlaPerfilClasse 
        nome="Maria Helena"
        endereco="Avenida flor, 498" 
        telefone="(11) 93338-4452" 
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 16,
    margin: 10,
    borderRadius: 8,
  },
  funcaoContainer: {
    backgroundColor: '#e3f2fd',
  },
  classeContainer: {
    backgroundColor: '#bbdefb',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
});

export default App;