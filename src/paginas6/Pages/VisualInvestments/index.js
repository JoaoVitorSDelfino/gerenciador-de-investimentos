import React from "react";
import { Link } from "react-router-dom"; // Importando o Link para navegação
import * as S from './styles'; // Importa tudo como um objeto "S"

const DataPage = () => {
    return (
        <S.Container>
            <S.WhiteBlock>
                {/* Título */}
                <S.TitleContainer>
                    <S.Title>Detalhes do investimento</S.Title>
                    <Link to="/home"> {/* Link para a página Home */}
                        <S.Button className='voltar'>VOLTAR</S.Button>
                    </Link>
                </S.TitleContainer>

                {/* Descrição */}
                <S.Description>
                    Esta é uma descrição breve sobre o investimento carregado.
                </S.Description>

                {/* Div para a Imagem */}
                <S.ImageContainer>
                    <p>Imagem será carregada aqui.</p>
                </S.ImageContainer>

                {/* Ano */}
                <S.Year>Ano: 2023</S.Year>

                {/* Div para Conteúdo Futuro */}
                <S.ContentContainer>
                    <p>Conteúdo adicional será carregado aqui.</p>
                </S.ContentContainer>
            </S.WhiteBlock>
        </S.Container>
    );
};

export default DataPage;