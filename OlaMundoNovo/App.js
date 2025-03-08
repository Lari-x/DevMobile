import React from "react";
import ReactDOM from "react-dom/client";
import OlaPerfilFuncao from "./OlaPerfilFuncao";
import OlaPerfilClasse from "./OlaPerfilClasse";

const App = () => {
  return (
    <div>
      <h1>Olá Mundo Novo</h1>
      <OlaPerfilFuncao nome="Larissa" endereco="Rua Exemplo, 123" telefone="(11) 99999-9999" />
      <OlaPerfilClasse nome="Larissa" endereco="Rua Exemplo, 123" telefone="(11) 99999-9999" />
    </div>
  );
};

// Renderização correta no React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
