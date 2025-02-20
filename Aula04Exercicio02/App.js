import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    // Define os estados para armazenar o nome digitado e a mensagem exibida
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    // Função chamada ao clicar no botão "Enviar"
    const lidarComClique = () => {
        if (nome) {
            // Define uma mensagem personalizada caso o nome seja preenchido
            setMensagem(`Olá, ${nome}!`);
        } else {
            // Exibe um aviso caso o campo esteja vazio
            setMensagem('Por favor, digite seu nome.');
        }
    };

    return (
        <View style={styles.container}>
            {/* Exibe uma imagem carregada via URL */}
            <Image
                source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
                style={styles.logo}
            />

            {/* Título do aplicativo */}
            <Text style={styles.titulo}>Exemplo de App Interativo</Text>

            {/* Campo de entrada de texto para o usuário digitar o nome */}
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                onChangeText={setNome} // Atualiza o estado 'nome' a cada alteração no campo
                value={nome} // O valor do input reflete o estado 'nome'
            />

            {/* Botão que chama a função 'lidarComClique' ao ser pressionado */}
            <Button title="Enviar" onPress={lidarComClique} />

            {/* Botão estilizado com TouchableOpacity, mas sem funcionalidade atribuída */}
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Clique Aqui</Text>
            </TouchableOpacity>

            {/* Exibe a mensagem gerada após o clique no botão */}
            <Text style={styles.mensagem}>{mensagem}</Text>
        </View>
    );
};

// Estilos do aplicativo usando StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa toda a tela
        justifyContent: 'center', // Centraliza os elementos verticalmente
        alignItems: 'center', // Centraliza os elementos horizontalmente
        padding: 10, // Adiciona um espaçamento interno
    },
    logo: {
        width: 150, // Largura da imagem
        height: 150, // Altura da imagem
        marginBottom: 20, // Espaço abaixo da imagem
    },
    titulo: {
        fontSize: 20, // Tamanho da fonte
        fontWeight: 'bold', // Deixa o texto em negrito
        marginBottom: 20, // Espaço abaixo do título
    },
    input: {
        width: '100%', // Ocupa toda a largura disponível
        padding: 10, // Adiciona preenchimento interno
        borderWidth: 1, // Borda de 1 pixel
        borderColor: 'gray', // Cor da borda
        marginBottom: 20, // Espaço abaixo do input
        borderRadius: 5, // Bordas arredondadas
    },
    botao: {
        backgroundColor: 'blue', // Cor de fundo do botão
        padding: 10, // Adiciona preenchimento interno
        borderRadius: 5, // Bordas arredondadas
    },
    textoBotao: {
        color: 'white', // Cor do texto do botão
        fontWeight: 'bold', // Deixa o texto em negrito
    },
    mensagem: {
        marginTop: 20, // Espaço acima da mensagem
        fontSize: 16, // Tamanho da fonte da mensagem
    },
});

export default App;
