import styled from "styled-components";

// Overlay do modal que cobre toda a tela com um fundo escuro semitransparente.
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

// Conteúdo principal do modal, com fundo branco, sombra e responsividade.
export const ModalContent = styled.div`
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 60%;
    height: 60%;
    min-width: 300px;
    text-align: center;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

// Botão de fechar no canto superior direito do modal, com efeito de hover.
export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #333;

    &:hover {
        color: red;
    }
`;

// Título do modal, com margem inferior para separar do conteúdo.
export const Title = styled.h2`
    margin-bottom: 15px;
`;

// Contêiner para agrupar botões, com espaçamento uniforme entre eles.
export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
`;

// Estilo base para os botões, com transição de cor e efeito de hover.
export const Button = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    color: white;

    background-color: #007bff;

    &:hover {
        background-color: #0056b3;
    }
`;

// Contêiner para imagens, com layout ajustável (lado a lado ou empilhado).
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${(props) => (props.layout === "sideBySide" ? "20px" : "0")};
    margin-bottom: 20px;

    .image {
        width: ${(props) => (props.layout === "sideBySide" ? "45%" : "100%")};
        height: 200px;
        background-color: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }
`;

// Botão de download, com estilo personalizado e efeito de hover distinto.
export const DownloadButton = styled(Button)`
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border: 1px solid white;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 18px;

    &:hover {
        background-color: rgb(235, 235, 235);
        color: black;
        border-color: rgb(0, 0, 0);
    }
`;