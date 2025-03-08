import React, { Component } from "react";

class OlaPerfilClasse extends Component {
  render() {
    return (
      <div>
        <h2>Perfil (Classe)</h2>
        <p><strong>Nome:</strong> {this.props.nome}</p>
        <p><strong>Endereço:</strong> {this.props.endereco}</p>
        <p><strong>Telefone:</strong> {this.props.telefone}</p>
      </div>
    );
  }
}

export default OlaPerfilClasse;
