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