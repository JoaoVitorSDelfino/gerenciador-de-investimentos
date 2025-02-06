import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  padding: 40px;
  color: white;
`;

export const WhiteBlock = styled.div`
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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background-color: transparent;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const Description = styled.p`
  font-size: 16px;
  text-align: center;
  color: light-grey;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  width: 125%;
  height: 250px;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Garante que a imagem se ajuste sem cortar */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  background-color: rgb(214, 0, 0);

  &:hover {
    background-color: rgb(160, 0, 0);
    transform: scale(1.05);
  }
`;

export const Year = styled.p`
  font-size: 14px;
  color: #f0f0f0;
  margin-top: 10px;
  text-align: center;
`;
