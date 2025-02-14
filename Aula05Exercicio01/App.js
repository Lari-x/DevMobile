// Importa os componentes essenciais do React Native
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  // useState cria estados para armazenar o nome digitado e a mensagem gerada
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    // Função chamada ao clicar no botão "Enviar"
    const lidarComClique = () => {
        if (nome) { // Se o usuário digitou um nome, exibe a saudação
            setMensagem(`Olá, ${nome}!`);
        }
    };

    return (
      // ScrollView permite rolagem quando o conteúdo execede a tela
        <ScrollView style={styles.container}>

             {/* Exibe a imagem e o texto */}
            <View style={styles.view}>
                <Image 
                    source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} 
                    style={styles.image} 
                />
                <Text style={styles.text}>
                    Exemplo de elementos gráficos interativos em React Native
                </Text>
            </View>
            {/* Capturar o nome do usuário */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    onChangeText={setNome}
                />
                <Button title="Enviar" onPress={lidarComClique} />
            </View>
             {/* Exibe a mensagem se o usuário tiver digitado algo */}
            {mensagem ? (
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>{mensagem}</Text>
                </View>
            ) : null}

            {/* Botão estilizado com TouchableOpacity */}
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Botão personalizado</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

// Estilos para os componentes 
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa toda a tela
        padding: 20,
    },
    view: {
        alignItems: 'center', // Centraliza os elementos
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
    messageContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    message: {
        fontSize: 18,
        color: 'green',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default App;