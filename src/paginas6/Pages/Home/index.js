import React, { useState, useEffect } from 'react';
import { Container, WhiteBlock, ButtonContainer, Button, MainTitle, SubTitle, GraySection, NewInvestmentBlock, SelectionIcon } from './styles';
import { Link } from 'react-router-dom';
import Card from './Card';

const Home = () => {
    const [showCard, setShowCard] = useState(false);
    const [layout, setLayout] = useState("sideBySide");
    const [investmentBlocks, setInvestmentBlocks] = useState([]);
    const [selectedBlocks, setSelectedBlocks] = useState([]); // Estado para rastrear blocos selecionados

    useEffect(() => {
        const storedBlocks = JSON.parse(localStorage.getItem("investmentBlocks")) || [];
        setInvestmentBlocks(storedBlocks);
    }, []);

    // Função para selecionar/deselecionar um bloco
    const handleSelectBlock = (id) => {
        if (selectedBlocks.includes(id)) {
            setSelectedBlocks(selectedBlocks.filter(blockId => blockId !== id)); // Deseleciona
        } else {
            setSelectedBlocks([...selectedBlocks, id]); // Seleciona
        }
    };

    return (
        <Container>
            <WhiteBlock>
                <MainTitle>Escolha uma ação para gerenciar os seus investimentos</MainTitle>
                <ButtonContainer>
                    <Link to="/investment">
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
                    <Button className="excluir">EXCLUIR</Button>
                </ButtonContainer>
                <SubTitle>Lista de todos os investimentos</SubTitle>
                <GraySection>
                    {/* Renderiza os blocos de investimento */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {investmentBlocks.map((block) => (
                            <NewInvestmentBlock key={block.id}>
                                {/* Ícone/Área de seleção */}
                                <SelectionIcon
                                    isSelected={selectedBlocks.includes(block.id)} // Verifica se o bloco está selecionado
                                    onClick={() => handleSelectBlock(block.id)} // Função para selecionar/deselecionar
                                >
                                    {selectedBlocks.includes(block.id) ? "✔" : "□"} {/* Ícone de seleção */}
                                </SelectionIcon>
                                <h3>{block.title}</h3>
                                <p>{block.description}</p>
                                <div className="image">Área para imagem</div>
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