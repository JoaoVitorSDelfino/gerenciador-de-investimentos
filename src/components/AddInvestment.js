import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Input from "../paginas6/Components/Input";
import Button from "../paginas6/Components/Button";
import { getLineChart, getColumnChart } from "../chartApi/index";

function AddInvestimento() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dados, setDados] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [valor, setValor] = useState("");
  const [graficoLinha, setGraficoLinha] = useState("");
  const [graficoColuna, setGraficoColuna] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAddValue = () => {
    if (!selectedDate || !valor) return;
    const date = new Date(selectedDate);
    const year = date.getFullYear().toString();
    const monthName = date.toLocaleString("default", { month: "long" }).toLowerCase();
    const day = date.getDate();

    setDados((prevDados) => {
      const updatedDados = { ...prevDados };
      if (!updatedDados[year]) updatedDados[year] = {};
      if (!updatedDados[year][monthName]) {
        updatedDados[year][monthName] = [{ ValorFinal: 0, ValorDias: {} }];
      }
      updatedDados[year][monthName][0].ValorDias[day] = parseFloat(valor);
      const dias = Object.keys(updatedDados[year][monthName][0].ValorDias).map(Number);
      const maiorDia = Math.max(...dias);
      updatedDados[year][monthName][0].ValorFinal = updatedDados[year][monthName][0].ValorDias[maiorDia];
      return updatedDados;
    });
    setValor("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const lineChartUrl = await getLineChart(dados, nome);
      const columnChartUrl = await getColumnChart(dados, nome);
      setGraficoLinha(lineChartUrl);
      setGraficoColuna(columnChartUrl);

      const novoInvestimento = { nome, descricao, dados, graficoLinha: lineChartUrl, graficoColuna: columnChartUrl };
      await axios.post("http://localhost:3001/investmentApi/investments/addInvestment", novoInvestimento);
      navigate("/");
    } catch (error) {
      setError("Erro ao adicionar investimento");
    }
  };

  const redirect = () => {
    navigate("/home");
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.label}>Adicionar Novo Investimento</h2>
        <label style={styles.names}>Nome:</label>
        <Input type="text" placeholder="Digite o nome do investimento" value={nome} onChange={(e) => setNome(e.target.value)} />
        <label style={styles.names}>Descrição:</label>
        <Input as="textarea" placeholder="Descreva o investimento" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        <label style={styles.names}>Calendário:</label>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
        {selectedDate && (
          <>
            <label style={styles.names}>Valor para o dia {new Date(selectedDate).toLocaleDateString()}:</label>
            <Input type="number" placeholder="Digite o valor" value={valor} onChange={(e) => setValor(e.target.value)} />
            <Button Text="Adicionar Valor" onClick={handleAddValue} />
          </>
        )}
        {error && <label style={styles.labelError}>{error}</label>}
        <Button Text="Adicionar Investimento" onClick={handleSubmit} />
        <button onClick={redirect} style={styles.backButton}>Voltar</button>
        <div style={styles.divJSON}>
          <h3 style={styles.label}>JSON Gerado:</h3>
          <pre style={styles.jsonDisplay}>{JSON.stringify(dados, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh", // Altura mínima da tela
    width: "100%",
    maxWidth: "2000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    padding: "20px 0", // Espaço extra para crescimento
  },
  content: {
    width: "100%",
    maxWidth: "600px",
    padding: "30px",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    color: "white",
    fontSize: "30px",
    marginBottom: "20px",
  },
  names: {
    color: "white",
    fontSize: "24px",
    margin: "10px",
    alignSelf: "flex-start",
  },
  labelError: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
  },
  backButton: {
    padding: "15px 15px",
    marginTop: "15px",
    marginBottom: "15px",
    fontSize: "16px",
    fontWeight: "bold",
    background: "#e74c3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "200px",
  },
  jsonDisplay: {
    color: "white",
    background: "#333",
    padding: "10px",
    borderRadius: "5px",
    width: "100%",
    overflowX: "auto",
  },
  divJSON: {
    backgroundColor: "transparent"
  }
};

export default AddInvestimento;
