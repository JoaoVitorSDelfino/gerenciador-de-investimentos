import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LuCircleUser } from "react-icons/lu";

// Estilização do Header com Styled-Components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgb(0, 0, 0);
  color: white;
  position: fixed; /* Fixa o Header no topo */
  top: 0; /* Alinha o Header no topo da página */
  left: 0; /* Alinha o Header à esquerda */
  width: 100%; /* Ocupa toda a largura da página */
  z-index: 1000; /* Garante que o Header fique acima do conteúdo */
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const Button = styled(Link)`
  margin-right: 10px;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border: 1px solid white;
  border-color: rgb(255, 255, 255);
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center; /* Alinha o conteúdo verticalmente */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */

  &:hover {
    background-color: rgb(255, 255, 255);
    color: black;
  }
`;

const IconButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid black;
  border-radius: 100%;
  cursor: pointer;
  font-size: 2rem; /* Tamanho do ícone */
  padding: 5px; /* Menos padding para manter o mesmo tamanho vertical */
  display: flex;
  align-items: center; /* Centraliza o ícone verticalmente */
  justify-content: center; /* Centraliza o ícone horizontalmente */

  &:hover {
    background-color: rgb(255, 255, 255);
    color: black;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Controlador de Investimentos</h1>
      <Nav>
        <Button to="/sobre">Sobre</Button>
        <Button to="/home">Home</Button>
        <Button to="/signin">Entrar</Button>
        <Button to="/signup">Registrar</Button>
        {/* Ícone como botão */}
        <IconButton>
          <LuCircleUser /> {/* Ícone dentro do botão */}
        </IconButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
