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