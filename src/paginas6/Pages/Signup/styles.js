import styled from "styled-components";

// Botão de retorno posicionado no canto superior direito, com estilo e transições para hover e clique.
export const BackButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003f7f;
  }
`;

// Contêiner principal que ocupa toda a altura da tela, centralizando o conteúdo vertical e horizontalmente.
export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgb(209, 209, 209);
`;

// Bloco de conteúdo centralizado, com fundo branco, sombra e layout responsivo para exibir formulários ou informações.
export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 1px 2px #0003;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  min-height: 400px; 
`;

// Rótulo principal com estilo em negrito e tamanho grande para títulos ou cabeçalhos.
export const Label = styled.label`
  font-weight: 600;
  font-size: 36px;
  color: #353535;
`;

// Rótulo secundário com estilo mais leve e alinhamento à esquerda para exibir nomes ou descrições.
export const Names = styled.label`
  font-weight: 200;
  font-size: 22px;
  color: #353535;
  text-align: left; 
  width: 100%; 
  display: block; 
`;

// Rótulo para texto de login ou instruções, com tamanho médio e cor neutra.
export const LabelSignin = styled.label`
  font-size: 16px;
  color: #353535;
`;

// Rótulo para mensagens de erro, com cor vermelha para destacar problemas ou avisos.
export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

// Texto em negrito com estilo interativo (cursor de ponteiro) para links ou ações importantes.
export const Strong = styled.strong`
  cursor: pointer;
  color: #353535;
  text-decoration: none;
`;