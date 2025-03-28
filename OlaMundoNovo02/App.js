// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';

const App = () => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dadosEnviados, setDadosEnviados] = useState(null);

  const handleEnviar = () => {
    if (nome && endereco && telefone) {
      setDadosEnviados({ nome, endereco, telefone });
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.header}>Cadastro de Perfil</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Digite seu endereço" value={endereco} onChangeText={setEndereco} />
      <TextInput style={styles.input} placeholder="Digite seu telefone" value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />
      <Button title="Enviar" onPress={handleEnviar} color="#6200ee" />
      {dadosEnviados && (
        <>
          <OlaPerfilFuncao nome={dadosEnviados.nome} endereco={dadosEnviados.endereco} telefone={dadosEnviados.telefone} />
          <OlaPerfilClasse nome={dadosEnviados.nome} endereco={dadosEnviados.endereco} telefone={dadosEnviados.telefone} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' },
  input: { height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, backgroundColor: '#fff', fontSize: 16 }
});

export default App;
