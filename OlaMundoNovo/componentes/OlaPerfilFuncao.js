import React from 'react';

const OlaPerfilFuncao = (props) => {
  return (
    <div>
      <h2>Perfil (Função)</h2>
      <p>
        <strong>Nome:</strong> {props.nome}
      </p>
      <p>
        <strong>Endereço:</strong> {props.endereco}
      </p>
      <p>
        <strong>Telefone:</strong> {props.telefone}
      </p>
    </div>
  );
};

export default OlaPerfilFuncao;
