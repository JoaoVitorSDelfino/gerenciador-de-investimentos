import React from "react";
import * as C from "./styles"; // Importando o arquivo de estilos
import { Link } from "react-router-dom"; // Importação do Link
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsReception4 } from "react-icons/bs";

const Sobre = () => {
    return (
        <C.Container>
            {/* Bloco 1 */}
            <C.Bloco1>
                <C.TextWrapper>
                    <C.MainText>Um site prático e eficiente para organizar seus investimentos</C.MainText>
                    <C.SubText>Rápido, simples e fácil.</C.SubText>
                </C.TextWrapper>
                <C.Bloco1Button as={Link} to="/signin">Começar agora</C.Bloco1Button>
            </C.Bloco1>

            <C.Title>Quais funções oferecemos?</C.Title>

            {/* Blocos menores (cards) */}
            <C.CardsContainer>
                <C.Card1>
                    <h4>Registro de Investimentos</h4>
                    <p>Registre rapidamente o valor, a data e o nome de cada investimento em uma interface simples e intuitiva.</p>
                    <C.IconWrapper><RiMoneyDollarCircleLine /></C.IconWrapper>
                </C.Card1>

                <C.Card2>
                    <h4>Análise Gráfica</h4>
                    <p>Entenda melhor os seus investimentos com gráficos claros e objetivos que evidenciam sua evolução.</p>
                    <C.IconWrapper><BsGraphUpArrow /></C.IconWrapper>
                </C.Card2>

                <C.Card3>
                    <h4>Comparação de Investimentos</h4>
                    <p>Compare o desempenho de diferentes investimentos por meio de gráficos e informações detalhadas.</p>
                    <C.IconWrapper><BsReception4 /></C.IconWrapper>
                </C.Card3>

            </C.CardsContainer>

            {/* Bloco 2 */}
            <C.Bloco2>
                <C.Bloco2Content>
                    <C.MainText>Junte-se a nós!</C.MainText>
                    <C.SubText>Faça já o seu cadastro.</C.SubText>
                    <C.Bloco2Button as={Link} to="/signup">Registre-se</C.Bloco2Button>
                </C.Bloco2Content>
            </C.Bloco2>

        </C.Container>
    );
};

export default Sobre;
