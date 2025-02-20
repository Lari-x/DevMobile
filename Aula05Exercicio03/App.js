import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList, SectionList, StyleSheet } from 'react-native';

const App = () => {
  // Define o estado 'text' para armazenar o valor do TextInput
  const [text, setText] = useState('');

  // Define o estado 'items' com uma lista inicial de objetos
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);

  // Estrutura de dados para a SectionList, organizada em seções com títulos
  const sections = [
    {
      title: 'Seção 1',
      data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]
    },
    {
      title: 'Seção 2',
      data: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }]
    }
  ];

  // Função que exibe um alerta ao clicar nos botões
  const handlePress = () => {
    alert('Botão pressionado!');
  };

  return (
    // ScrollView permite a rolagem vertical quando o conteúdo ultrapassa a tela
    <ScrollView style={styles.container}>
      
      {/* View agrupa os elementos de forma organizada */}
      <View style={styles.view}>
        
        {/* Texto estático exibido na tela */}
        <Text style={styles.text}>Texto de exemplo</Text>

        {/* Imagem carregada a partir de uma URL */}
        <Image 
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} 
          style={styles.image} 
        />

        {/* Campo de entrada de texto com estado controlado */}
        <TextInput 
          style={styles.textInput}
          placeholder="Digite algo" // Texto de dica exibido no campo
          onChangeText={setText} // Atualiza o estado 'text' com o valor digitado
          value={text} // O valor do TextInput é controlado pelo estado 'text'
        />

        {/* Botão que chama a função 'handlePress' ao ser pressionado */}
        <Button title="Clique aqui" onPress={handlePress} />

        {/* Botão personalizado com TouchableOpacity, permitindo maior customização */}
        <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
          <Text style={styles.touchableOpacityText}>Toque aqui</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList para renderizar uma lista de itens de forma eficiente */}
      <FlatList 
        data={items} // Fonte de dados da lista
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item
        keyExtractor={(item) => item.id.toString()} // Gera uma chave única para cada item
      />

      {/* SectionList para exibir uma lista organizada em seções */}
      <SectionList 
        sections={sections} // Dados organizados por seções
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item da seção
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text> // Renderiza o título da seção
        )}
        keyExtractor={(item) => item.id.toString()} // Gera uma chave única para cada item
      />
    </ScrollView>
  );
};

// Estilização dos componentes usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    padding: 20, // Adiciona espaçamento interno
    marginBottom: 20, // Adiciona espaçamento na parte inferior
  },
  text: {
    fontSize: 20, // Tamanho da fonte do texto
    marginBottom: 10, // Espaçamento abaixo do texto
  },
  image: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    marginBottom: 10, // Espaçamento abaixo da imagem
  },
  textInput: {
    height: 40, // Altura do campo de entrada
    borderColor: 'gray', // Cor da borda
    borderWidth: 1, // Espessura da borda
    marginBottom: 10, // Espaçamento abaixo do campo
    paddingHorizontal: 10, // Espaçamento interno horizontal
  },
  touchableOpacity: {
    backgroundColor: 'blue', // Cor de fundo do botão
    padding: 10, // Espaçamento interno do botão
    borderRadius: 5, // Bordas arredondadas
    marginBottom: 20, // Espaçamento abaixo do botão
  },
  touchableOpacityText: {
    color: 'white', // Cor do texto dentro do botão
    textAlign: 'center', // Centraliza o texto horizontalmente
  },
  sectionHeader: {
    fontSize: 18, // Tamanho da fonte do título da seção
    fontWeight: 'bold', // Deixa o título em negrito
    marginTop: 20, // Espaçamento acima do título da seção
    marginBottom: 10, // Espaçamento abaixo do título da seção
  },
});

export default App; // Exporta o componente principal
