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

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 30px;
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

export const Label = styled.label`
  font-weight: 700;
  font-size: 28px;
  color: white;
  margin-bottom: 20px;
`;

export const Names = styled.label`
  font-weight: 500;
  font-size: 25px;
  color: white;
  align-self: flex-start;
  margin-bottom: 10px;
  margin-top:10px
`;

export const LabelSignin = styled.label`
  font-size: 14px;
  color: white;
  margin-top: 10px;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
  margin-top: 5px;
`;

export const Strong = styled.strong`
  cursor: pointer;
  color: #f1c40f;
  text-decoration: none;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 5%;
  left: 5%;
  padding: 10px 15px;
  background: #f1c40f;
  color: #0f2027;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #d4ac0d;
  }

  &:active {
    background: #b7950b;
  }
`;
