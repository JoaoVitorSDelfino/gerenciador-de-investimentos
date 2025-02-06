import styled from "styled-components";

// Container principal da página
export const Container = styled.div`
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 5%; 
`;

// Estilo base para os blocos (Bloco 1 e Bloco 2)
const BlocoBase = styled.div`
  width: 60vw;
  padding: 4%;
  background: url('/Images/default.jpg') no-repeat center center/cover;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  /*  border-radius: 20px;*/
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  color: white;
  min-height: 400px;
  margin-top: 120px;

  @media (min-width: 768px) {
    width: 80vw;
    height: 60vh;
  }

  @media (min-width: 1024px) {
    width: 70vw;
    height: 70vh;
  }
`;

// Estilo para o Bloco 1
export const Bloco1 = styled(BlocoBase)`
  background: url('/Images/1.jpg') no-repeat center center/cover; 
  margin-bottom: 30px;
  height: 100%;
  width: 100%;
`;

// Estilo para o Bloco 2
export const Bloco2 = styled(BlocoBase)`
  background: url('/Images/2.jpg') no-repeat center center/cover; 
  align-items: center;
  justify-content: center;
  text-align: center;
`;

// Estilo para TextWrapper
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Estilo para o texto grande
export const MainText = styled.h1`
  max-width: 60%;
  font-size: 2.5rem; 
  margin: 0; 
  color: white;


  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Estilo para o texto menor
export const SubText = styled.p`
  max-width: 60%;
  font-size: 1.5rem; 
  margin: 0; 
  color: white;

  @media (max-width: 768px) {
    font-size: 1.2rem; 
  }
`;

// Botão base para os dois blocos
export const ButtonBase = styled.button`
  background-color: transparent;
  color: white;
  border: 3px solid white;
  padding: 15px 25px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 28px;
  text-decoration: none;
  box-shadow: 0 2px 5px #0003;

  &:hover {
    background-color: white;
    color: black;
  }
`;

// Estilo para o botão no Bloco 1
export const Bloco1Button = styled(ButtonBase)`
  align-self: flex-end; 
  margin-top: auto;
`;

// Estilo para o botão no Bloco 2
export const Bloco2Button = styled(ButtonBase)`
  /* Se necessário, adicione estilos específicos para o Bloco 2 aqui */
`;

// Estilo para o conteúdo dentro do Bloco2
export const Bloco2Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  text-align: right; 
  gap: 20px;
  width: 100%; 
  padding-right: 6%; 
`;

//Frase
export const Title = styled.h1`
  font-size: 2.1rem; 
  font-weight: bold; 
  text-align: center; 
  color: white; 
  margin-bottom: 20px; 
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Estilo base para os Cards
const CardBase = styled.div`
  width: 55%; 
  min-height: 300px;
  padding: 3%;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  text-align: center;
  color: white;

  h4 {
    font-size: 20px;
    margin-bottom: 40px;
  }

  p {
    font-size: 16px;
    line-height: 1.5; 
  }

  @media (min-width: 768px) {
    width: 30%; 
    min-height: 250px;
  }
`;

// Estilo para os 3 Cards (blocos menores)
export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1000px; 
  flex-wrap: wrap; 

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

// Estilização dos ícones nos Cards
export const IconWrapper = styled.div`
  font-size: 50px;
  color: white;
  margin-top: 15px; 
  
  @media (max-width: 768px) {
    font-size: 70px; 
  }
`;


// Estilo para os Cards (blocos menores)
export const Card1 = styled(CardBase)``;
export const Card2 = styled(CardBase)``;
export const Card3 = styled(CardBase)``;
