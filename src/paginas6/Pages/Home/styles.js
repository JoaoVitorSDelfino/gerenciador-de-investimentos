import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
`;

export const WhiteBlock = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 100px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
  color: white;
  margin-bottom: 40px;
  text-align: center;
  white-space: nowrap;
  margin-top: -20px;
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 25px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

export const GraySection = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  max-height: 460px; /* Define um limite de altura */
  overflow-y: auto; /* Ativa scroll apenas se necessário */
  background-color: white; /* ao colocar apenas para o específico, os outros não ferram */
`;


export const SelectionIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  background-color: ${({ isSelected }) => (isSelected ? "#f1c40f" : "#ccc")};
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 24px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    opacity: 0.8;
  }
`;

export const NewInvestmentBlock = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  .image {
    width: 100%;
    height: 150px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-top: 15px;
    text-align: center;
    line-height: 150px;
    color: white;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 50px;
  background: transparent;
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

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