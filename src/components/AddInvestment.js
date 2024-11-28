import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddPalestra() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dados, setDados] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoInvestimento = {
      nome,
      descricao,
      dados,
    };

    try {
      // Envia os dados para o backend (Express)
      const response = await axios.post("http://localhost:3001/investmentApi/investments/addInvestment", novoInvestimento);
      console.log(response.data);

      // Redireciona para uma página (por exemplo, lista de palestras)
      navigate("/");
    } catch (error) {
      console.error("Erro ao adicionar investimento:", error);
    }

    // Limpar os campos após o submit
    setNome("");
    setDescricao("");
    setDados("");
  };

  const redirect = () => {
    navigate('/');
  };

    return (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
        <h2>Adicionar Nova Palestra</h2>
        <form onSubmit={handleSubmit}>
          {/* Campos do formulário */}
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="descricao">Descrição:</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
              rows="4"
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            ></textarea>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="dados">Dados: </label>
            <input
              type="datetime-local"
              id="dados"
              value={dados}
              onChange={(e) => setDados(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Adicionar Investimento
          </button>
          <button onClick={redirect} style={{ margin:"10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Voltar
          </button>
        </form>
      </div>
    );
}

export default AddPalestra;