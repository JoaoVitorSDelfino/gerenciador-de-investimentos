import React from "react";
import { ModalOverlay, ModalContent, Title, ButtonGroup, Button, ImageContainer, DownloadButton, CloseButton } from "./CardStyle";
import { AiOutlineClose } from "react-icons/ai";

const Card = ({ title, layout, onClose, onCompareSideBySide, onCompareSameGraph, onDownload }) => {
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
                <ImageContainer layout={layout}>
                    <div className="image">{layout === "sideBySide" && <p>Imagem 1</p>}</div>
                    <div className="image"><p>Imagem 2</p></div>
                </ImageContainer>
                <DownloadButton onClick={onDownload}>Download</DownloadButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Card;
