import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"; // Importando o Link para navegação
import * as S from './styles'; // Importa tudo como um objeto "S"

import axios from "axios";
import { useParams } from "react-router-dom";
import { BiColor } from 'react-icons/bi';

const DataPage = () => {
    const { id } = useParams(); // Obtém o ID do investimento da URL
    const [investment, setInvestment] = useState(null);

    const fetchInvestmentDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/investmentApi/investments/getInvestmentId/${id}`);
            setInvestment(response.data.investimento.investment);
        } catch (error) {
            console.error("Erro ao buscar detalhes do investimento:", error);
        }
    };

    useEffect(() => {
        fetchInvestmentDetails();
    }, [id]);

    if (!investment) {
        return <div>Carregando detalhes do investimento...</div>
    }

    return (
        <S.Container>
            <S.WhiteBlock>
                {/* Título */}
                <S.TitleContainer>
                    <S.Title>{investment.nome}</S.Title>
                </S.TitleContainer>

                {/* Descrição */}
                <S.Description>
                    {investment.descricao}
                </S.Description>

                {/* Div para a Imagem */}
                <S.ImageContainer>
                    <img src={investment.graficoLinha} alt='graficoLinha' style={{ width: "100%" }} />
                </S.ImageContainer>
                <S.ImageContainer>
                    <img src={investment.graficoColuna} alt='graficoLinha' style={{ width: "100%" }} />
                </S.ImageContainer>

                {/* Ano */}
                <S.Year></S.Year>
                <div style={{ backgroundColor: "transparent" }}>
                    <Link to="/home"> {/* Link para a página Home */}
                        <S.Button className='voltar'>VOLTAR</S.Button>
                    </Link>
                </div>
            </S.WhiteBlock>
        </S.Container>
    );
};

export default DataPage;