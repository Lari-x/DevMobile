import React, { useState } from 'react';
import { 
    View, Text, Image, TextInput, Button, TouchableOpacity, ScrollView, 
    FlatList, SectionList, ActivityIndicator, 
    // Slider,
    Switch, ImageBackground, 
    StyleSheet 
} from 'react-native'; // Importa os componentes necessários do React Native

const App = () => {
    // Define estados para diferentes elementos da interface
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // const [sliderValue, setSliderValue] = useState(0);
    const [switchValue, setSwitchValue] = useState(false);

    // Dados para a FlatList
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ];

    // Dados organizados em seções para a SectionList
    const sections = [
        { title: 'Section 1', data: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] },
        { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }] }
    ];

    // Função chamada ao pressionar o botão, simulando um carregamento com ActivityIndicator
    const handlePress = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simula um tempo de carregamento de 2 segundos
    };

    return (
        <ScrollView style={styles.container}>
            {/* Imagem de fundo com um título */}
            <ImageBackground source={{ uri: 'https://via.placeholder.com/300' }} style={styles.imageBackground}>
                <Text style={styles.title}>Exemplo de Código React Native</Text>
            </ImageBackground>

            <View style={styles.content}>
                {/* Exibição de uma imagem */}
                <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />

                {/* Campo de entrada de texto */}
                <TextInput
                    style={styles.input}
                    placeholder="Digite algo"
                    value={text}
                    onChangeText={setText}
                />

                {/* Botão simples com ação de clique */}
                <Button title="Clique aqui" onPress={handlePress} />

                {/* Botão TouchableOpacity que exibe um alerta ao ser pressionado */}
                <TouchableOpacity style={styles.button} onPress={() => alert('TouchableOpacity pressionado!')}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                </TouchableOpacity>

                {/* Indicador de atividade que aparece durante o carregamento */}
                <ActivityIndicator animating={isLoading} />

                {/* Controle deslizante (Slider) para selecionar um valor
                <Slider
                    minimumValue={0}
                    maximumValue={100}
                    value={sliderValue}
                    onValueChange={setSliderValue}
                />
                <Text>Valor do Slider: {sliderValue}</Text> */}

                {/* Componente Switch (interruptor) */}
                <Switch value={switchValue} onValueChange={setSwitchValue} />
                <Text>Valor do Switch: {switchValue ? 'Ligado' : 'Desligado'}</Text>

                {/* Lista simples (FlatList) exibindo os itens de `data` */}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                />

                {/* Lista seccionada (SectionList) exibindo os itens organizados em categorias */}
                <SectionList
                    sections={sections}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                    renderSectionHeader={({ section: { title } }) => <Text style={styles.sectionHeader}>{title}</Text>}
                />
            </View>
        </ScrollView>
    );
};

// Estilos da aplicação
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    content: {
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
});

// Exporta o componente principal da aplicação
export default App;
