import React, { useState, useEffect } from 'react'
import { Container, WhiteBlock, ButtonContainer, Button, MainTitle, SubTitle, GraySection, NewInvestmentBlock, SelectionIcon } from './styles'
import { Link } from 'react-router-dom'
import Card from './Card'

import axios from "axios"

const Home = () => {
    const [showCard, setShowCard] = useState(false);
    const [layout, setLayout] = useState("sideBySide");
    const [selectedBlocks, setSelectedBlocks] = useState([]); // Estado para rastrear blocos selecionados

    const [investimentos, setInvestimentos] = useState([]);
    
    // Função para buscar os investimentos cadastrados
    const fetchInvestments = async () => {
        try {
            const response = await axios.get("http://localhost:3001/investmentApi/investments/showInvestments");
            setInvestimentos(response.data); // Armazena os investimentos no estado
        } catch (error) {
            console.error("Erro ao buscar investimentos:", error);
        }
    };
    
    useEffect(() => {
        fetchInvestments();
    }, []);
    

    // Função para selecionar/deselecionar um bloco
    const handleSelectBlock = (id) => {
        if (selectedBlocks.includes(id)) {
            setSelectedBlocks(selectedBlocks.filter(blockId => blockId !== id)); // Deseleciona
        } else {
            setSelectedBlocks([...selectedBlocks, id]); // Seleciona
        }
    };

    const handleDeleteInvestments = async () => {
        if (selectedBlocks.length === 0) return; // Se nenhum investimento estiver selecionado, não faz nada
    
        try {
            await axios.delete("http://localhost:3001/investmentApi/investments/deleteInvestments", {
                data: { ids: selectedBlocks }, // Envia os IDs selecionados no corpo da requisição
            });
    
            // Remove os investimentos excluídos do estado
            setInvestimentos((prevInvestimentos) =>
                prevInvestimentos.filter((investimento) => !selectedBlocks.includes(investimento.id))
            );
    
            // Limpa os blocos selecionados após a exclusão
            setSelectedBlocks([]);
    
        } catch (error) {
            console.error("Erro ao excluir investimentos:", error);
        }
    };

    return (
        <Container>
            <WhiteBlock>
                <MainTitle>Escolha uma ação para gerenciar os seus investimentos</MainTitle>
                <ButtonContainer>
                    <Link to="/addInvestment">
                        <Button className='adicionar'>ADICIONAR</Button>
                    </Link>
                    <Button
                        className="comparar"
                        onClick={() => {
                            setLayout("sideBySide");
                            setShowCard(true);
                        }}
                    >
                        COMPARAR
                    </Button>
                    <Button className="excluir" onClick={handleDeleteInvestments} disabled={selectedBlocks.length === 0}>
                        EXCLUIR
                    </Button>
                </ButtonContainer>
                <SubTitle>Lista de todos os investimentos</SubTitle>
                <GraySection>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {investimentos.map((investimento) => (
                            <NewInvestmentBlock key={investimento.id}>
                                <Link 
                                        to={`/investments/${investimento.id}`} 
                                            style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                                            onClick={(e) => {
                                                // Impede que o clique no SelectionIcon redirecione
                                                if (e.target.closest('.selection-icon')) {
                                                    e.preventDefault();
                                                }
                                            }}
                                        >
                                        <SelectionIcon className="selection-icon"
                                            isSelected={selectedBlocks.includes(investimento.id)}
                                            onClick={(e) => {
                                            e.preventDefault(); // Impede que o Link seja acionado
                                            handleSelectBlock(investimento.id);
                                            }}
                                        >
                                        {selectedBlocks.includes(investimento.id) ? "✔" : "□"}
                                    </SelectionIcon>
                                    <h3>{investimento.nome}</h3>
                                    <p>{investimento.descricao}</p>
                                    <img src={investimento.graficoLinha} alt='graficoLinha' style={{width: "100%"}}/>
                                </Link>
                            </NewInvestmentBlock>
                        ))}
                    </div>
                </GraySection>
            </WhiteBlock>
            {showCard && (
                <Card
                    title="Comparação entre Investimento X e Investimento Y"
                    layout={layout}
                    onClose={() => setShowCard(false)}
                    onCompareSideBySide={() => setLayout("sideBySide")}
                    onCompareSameGraph={() => setLayout("sameGraph")}
                    onDownload={() => console.log("Download")}
                />
            )}
        </Container>
    );
};

export default Home;