import styled from 'styled-components';

// Estilo do Container principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(209, 209, 209);
  padding: 120px 40px 20px 40px;
`;

// Estilo do WhiteBlock
export const WhiteBlock = styled.div`
  width: calc(100% - 80px);
  min-height: calc(100vh - 180px); 
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    min-height: calc(100vh - 160px);
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: calc(100% - 10px);
    min-height: calc(100vh - 130px);
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 15px;
  }
`;

// Contêiner para os botões de ação
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 50px;
`;

// Estilo dos botões de ação
export const Button = styled.button`
  padding: 20px 30px;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.adicionar {
    background-color: #007bff;

    &:hover {
      background-color:rgb(0, 62, 129);
    }
  }

  &.comparar {
    background-color: #28a745;

    &:hover {
      background-color:rgb(25, 109, 43);
    }
  }

  &.excluir {
    background-color:rgb(168, 0, 0);

    &:hover {
      background-color:rgb(75, 0, 0);
    }
  }
`;


// Componente para o título principal
export const MainTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #353535;
  text-align: center;
  margin-bottom: 20px;
`;

// Componente para o título secundário
export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  color: #353535;
  text-align: center;
`;

// Estilo do GraySection
export const GraySection = styled.div`
  width: 100%;
  background-color: rgb(200, 200, 200);
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Espaçamento entre os blocos */
`;

// Estilo do ícone/área de seleção
export const SelectionIcon = styled.div`
  position: absolute; 
  top: 10px;
  left: 10px;
  width: 24px;
  height: 24px;
  background-color: ${({ isSelected }) => (isSelected ? "#007bff" : "#ccc")}; /* Cor de fundo depende do estado */
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 24px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1; /* Garante que o ícone fique acima do conteúdo do bloco */

  &:hover {
    opacity: 0.8; /* Efeito ao passar o mouse */
  }
`;

// Estilo do bloco de investimento
export const NewInvestmentBlock = styled.div`
  position: relative;
  width: 300px; /* Largura fixa */
  min-width: 300px; /* Garante que o bloco não fique menor que 300px */
  max-width: 300px; /* Garante que o bloco não fique maior que 300px */
  height: 400px; /* Altura fixa */
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 auto;

  .image {
    width: 100%;
    height: 150px; /* Altura fixa para a área de imagem */
    background-color: #f0f0f0;
    border-radius: 10px;
    margin-top: 15px;
    text-align: center;
    line-height: 150px;
    color: #777;
  }

  @media (max-width: 768px) {
    width: 250px; /* Ajusta o tamanho para telas médias */
    min-width: 250px;
    max-width: 250px;
  }

  @media (max-width: 480px) {
    width: 200px; /* Ajusta o tamanho para telas pequenas */
    min-width: 200px;
    max-width: 200px;
  }
`;
