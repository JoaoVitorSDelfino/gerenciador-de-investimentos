import styled from 'styled-components';

// Contêiner principal que envolve toda a página, centralizando o conteúdo e definindo o layout básico.
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(163, 163, 163);
  padding: 120px 40px 20px 40px;
`;

// Bloco branco que contém o conteúdo principal da página, com sombra, margens e responsividade.
export const WhiteBlock = styled.div`
  width: calc(100% - 80px);
  height: calc(100vh - 180px);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    height: calc(100vh - 160px);
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: calc(100% - 10px);
    height: calc(100vh - 130px);
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 15px;
  }
`;

// Contêiner para o título principal e botões de ação, distribuindo-os horizontalmente.
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

// Estilo para o título principal da página, removendo margens padrão e definindo o tamanho da fonte.
export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

// Contêiner para organizar as colunas de conteúdo (esquerda e direita), com espaçamento entre elas.
export const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

// Coluna esquerda, ocupando metade da largura disponível para exibir formulários ou informações.
export const LeftColumn = styled.div`
  flex: 1;
`;

// Coluna direita, ocupando metade da largura disponível, com fundo cinza e bordas arredondadas.
export const RightColumn = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Estilo para os rótulos dos campos de entrada, definindo o tamanho da fonte, cor e espaçamento.
export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
  color: #333;
`;

// Estilo para os campos de entrada de texto, com largura total, bordas arredondadas e efeito de foco.
export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

// Estilo para os campos de texto multilinha, com largura total, altura mínima e efeito de foco.
export const TextAreaField = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 200px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

// Contêiner para organizar o campo de valor e o botão "ADICIONAR VALOR", com espaçamento entre eles.
export const ValorContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

// Estilo para os botões, com variações de cores e tamanhos para diferentes tipos de ação.
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.voltar {
    background-color: rgb(214, 0, 0);

    &:hover {
      background-color: rgb(160, 0, 0);
    }
  }

  &.adicionarValor {
    background-color: #007bff;

    &:hover {
      background-color: #0056b3;
    }
  }

  &.adicionarInvestimento {
    background-color: #007bff;
    padding: 20px 20px;
    font-size: 1.5rem;

    &:hover {
      background-color: #0056b3;
    }
  }
`;