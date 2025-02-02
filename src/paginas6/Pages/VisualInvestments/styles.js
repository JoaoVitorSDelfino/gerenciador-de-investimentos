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
  width: calc(40% - 80px);
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

// Título principal da página, com tamanho de fonte ajustado e espaçamento abaixo.
export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

// Contêiner para o título principal e botões de ação, distribuindo-os horizontalmente.
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

// Botão estilizado com fundo vermelho, transição suave e efeito hover.
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: rgb(214, 0, 0);

  &:hover {
    background-color: rgb(160, 0, 0);
  }
`;

// Descrição do conteúdo, com tamanho de fonte padrão e espaçamento abaixo.
export const Description = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;
`;

// Contêiner para exibir imagens, com altura fixa, fundo cinza e bordas arredondadas.
export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

// Texto para exibir o ano, com tamanho de fonte padrão e espaçamento abaixo.
export const Year = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;
`;

// Contêiner para conteúdo futuro, com altura fixa, fundo cinza e bordas arredondadas.
export const ContentContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;