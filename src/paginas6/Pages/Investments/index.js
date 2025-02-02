import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importando useNavigate
import * as S from './styles';

const Investments = () => {
    const [isAdding, setIsAdding] = useState(false); // Estado para controlar o clique
    const navigate = useNavigate(); // Usar o hook useNavigate para navegação

    const handleAddInvestment = () => {
        if (isAdding) return; // Impede múltiplos cliques

        setIsAdding(true); // Desabilita o botão durante o processo

        // Criar o novo bloco
        const newBlock = { id: Date.now(), title: "Novo Investimento", description: "Descrição do investimento." };

        // Recuperar os blocos existentes do localStorage
        const storedBlocks = JSON.parse(localStorage.getItem("investmentBlocks")) || [];
        const updatedBlocks = [...storedBlocks, newBlock];

        // Salvar os blocos atualizados no localStorage
        localStorage.setItem("investmentBlocks", JSON.stringify(updatedBlocks));

        // Redirecionar para a página Home após um pequeno delay
        setTimeout(() => {
            setIsAdding(false); // Reabilita o botão
            navigate("/home"); // Navega para a página Home
        }, 500); // Delay de 500ms para evitar cliques rápidos
    };

    return (
        <S.Container>
            <S.WhiteBlock>
                <S.TitleContainer>
                    <S.Title>Adicionando um novo investimento</S.Title>
                    <Link to="/home">
                        <S.Button className='voltar'>VOLTAR</S.Button>
                    </Link>
                </S.TitleContainer>
                <S.ContentContainer>
                    <S.LeftColumn>
                        <S.Label htmlFor="nome">Nome</S.Label>
                        <S.InputField type="text" id="nome" placeholder="Digite o nome" />
                        <S.Label htmlFor="descricao">Descrição</S.Label>
                        <S.TextAreaField id="descricao" placeholder="Digite a descrição" rows={4} />
                        <S.Label htmlFor="valor">Valor</S.Label>
                        <S.ValorContainer>
                            <S.InputField type="number" id="valor" placeholder="Digite o valor" />
                            <S.Button className='adicionarValor'>ADICIONAR VALOR</S.Button>
                        </S.ValorContainer>
                        {/* Botão ADICIONAR INVESTIMENTO */}
                        <S.Button
                            className='adicionarInvestimento'
                            onClick={handleAddInvestment}
                            disabled={isAdding} // Desabilita o botão enquanto isAdding for true
                        >
                            ADICIONAR INVESTIMENTO
                        </S.Button>
                    </S.LeftColumn>
                    <S.RightColumn>
                        <p>Imagem será adicionada aqui.</p>
                    </S.RightColumn>
                </S.ContentContainer>
            </S.WhiteBlock>
        </S.Container>
    );
};

export default Investments;