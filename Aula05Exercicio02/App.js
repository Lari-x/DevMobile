
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList,
   StyleSheet } from "react-native";

   const App = () => {
    // Estado para o texto digitado pelo usuário
    const [text, setText] = useState('');
    const [items, setItems] = useState([
      { id: '1', name: 'Item 1' },
      { id: '2', name: 'Item 2' },
      { id: '3', name: 'Item 3' },
    ]);

    const handlePress = () => {
      alert('Botão pressionado!');
    };

     // Função para adicionar um novo item à lista
    const addItem = () => {
    setItems([...items, { id: Date.now(), name: text }]);
    setText(''); // Limpa o campo de texto após adicionar o item
    };
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} 
          style={styles.image}
          />
        </View>
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});