import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import EntradaTexto from "./componentes/EntradaTexto";
import BotaoLogin from "./componentes/BotaoLogin";
import Titulo from "./componentes/Titulo";

const App = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email && senha) {
      Alert.alert("Login realizado com sucesso!");
    } else {
      Alert.alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <View style={styles.container}>
      <Titulo texto="Tela de Login" />
      <EntradaTexto placeholder="Digite seu e-mail" value={email} onChangeText={setEmail} />
      <EntradaTexto placeholder="Digite sua senha" value={senha} onChangeText={setSenha} secureTextEntry />
      <BotaoLogin title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
});

export default App;
