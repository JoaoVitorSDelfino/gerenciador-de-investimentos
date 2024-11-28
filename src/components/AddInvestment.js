import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import getChart from "../chartApi/index";

function AddInvestimento() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dados, setDados] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [valor, setValor] = useState("");
  const [grafico, setGrafico] = useState("");

  const navigate = useNavigate();

  // Adiciona ou atualiza o valor no JSON
  const handleAddValue = () => {
    if (!selectedDate || !valor) return;

    const date = new Date(selectedDate);
    const year = date.getFullYear().toString();
    const monthName = date.toLocaleString("default", { month: "long" }).toLowerCase();
    const day = date.getDate();

    setDados((prevDados) => {
      const updatedDados = { ...prevDados };

      // Inicializa o ano se não existir
      if (!updatedDados[year]) {
        updatedDados[year] = {};
      }

      // Inicializa o mês se não existir no ano
      if (!updatedDados[year][monthName]) {
        updatedDados[year][monthName] = [
          {
            ValorFinal: 0,
            ValorDias: {},
          },
        ];
      }

      // Atualiza o valor do dia no objeto ValorDias
      updatedDados[year][monthName][0].ValorDias[day] = parseFloat(valor);

      // Calcula o ValorFinal como o valor do maior dia registrado no mês
      const dias = Object.keys(updatedDados[year][monthName][0].ValorDias).map(Number);
      const maiorDia = Math.max(...dias);
      updatedDados[year][monthName][0].ValorFinal = updatedDados[year][monthName][0].ValorDias[maiorDia];

      return updatedDados;
    });

    setValor(""); // Limpa o campo de valor
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aguarda o gráfico ser gerado e armazena a URL na variável
      const imageUrl = await getChart(dados, nome);
  
      // Atualiza o estado do gráfico
      setGrafico(imageUrl);
  
      console.log('Link do gráfico:', imageUrl);
  
      // Cria o objeto com o link do gráfico diretamente
      const novoInvestimento = {
        nome,
        descricao,
        dados,
        grafico: imageUrl, // Usa a URL resolvida diretamente
      };
  
      console.log('Novo investimento:', novoInvestimento);
  
      // Envia o investimento para o backend
      await axios.post("http://localhost:3001/investmentApi/investments/addInvestment", novoInvestimento);
  
      navigate("/"); // Redireciona após sucesso
    } catch (error) {
      console.error("Erro ao adicionar investimento:", error);
    }
  };  

  const redirect = () => {
    navigate("/");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Adicionar Novo Investimento</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Calendário:</label>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            style={{ marginBottom: "15px" }}
          />
        </div>
        {selectedDate && (
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="valor">Valor para o dia {new Date(selectedDate).toLocaleDateString()}:</label>
            <input
              type="number"
              id="valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
            <button
              type="button"
              onClick={handleAddValue}
              style={{ marginTop: "10px", padding: "10px 15px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Adicionar Valor
            </button>
          </div>
        )}
        <button
          type="submit"
          style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Adicionar Investimento
        </button>
        <button
          onClick={redirect}
          style={{ margin: "10px", padding: "10px 15px", backgroundColor: "red", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Voltar
        </button>
      </form>
      <div>
        <h3>JSON Gerado:</h3>
        <pre>{JSON.stringify(dados, null, 2)}</pre>
      </div>
    </div>
  );
}

export default AddInvestimento;