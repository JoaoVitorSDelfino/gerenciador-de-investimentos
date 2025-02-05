import React from "react";
import { ModalOverlay, ModalContent, Title, ButtonGroup, Button, ImageContainer, DownloadButton, CloseButton } from "./CardStyle";
import { AiOutlineClose } from "react-icons/ai";

const Card = ({ title, layout, onClose, onCompareSideBySide, onCompareSameGraph, onDownload, image1, image2 }) => {
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <AiOutlineClose />
                </CloseButton>
                <Title>{title}</Title>
                <ButtonGroup>
                    <Button onClick={onCompareSideBySide}>Comparar Lado a Lado</Button>
                    <Button onClick={onCompareSameGraph}>Comparar no Mesmo Gráfico</Button>
                </ButtonGroup>
                <h3>{layout === "sideBySide" ? "Visualização Lado a Lado" : "Visualização no Mesmo Gráfico"}</h3>
                
                {/* Exibição das imagens recebidas */}
                <ImageContainer layout={layout}>
                    {layout === "sideBySide" ? (
                        <>
                            <img src={image1} alt="Investimento 1" style={{ width: "45%" }} />
                            <img src={image2} alt="Investimento 2" style={{ width: "45%" }} />
                        </>
                    ) : (
                        <img src={image1} alt="Investimentos sobrepostos" style={{ width: "90%" }} />
                    )}
                </ImageContainer>

                <DownloadButton onClick={onDownload}>Download</DownloadButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Card;
