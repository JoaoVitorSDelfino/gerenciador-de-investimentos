import React, { useEffect, useState } from "react"
import axios from "axios"

// Componente para exibir um card com prévia do investimento
function InvestmentList() {
  const [investimentos, setInvestimentos] = useState([]);

  // Função para buscar os investimentos cadastrados
  const fetchInvestments = async () => {
    try {
      const response = await axios.get("http://localhost:3001/investmentApi/investments/showInvestments");
      setInvestimentos(response.data); // Armazena os investimentos no estado
      console.log(investimentos)
    } catch (error) {
      console.error("Erro ao buscar investimentos:", error);
    }
  };

  useEffect(() => {
    fetchInvestments();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Lista de Investimentos</h2>
      <div style={styles.cardContainer}>
        {investimentos.map((investimento) => (
          <div key={investimento.id} style={styles.card}>
            <h3 style={styles.cardTitle}>{investimento.nome}</h3>
            <p style={styles.cardDescription}>{investimento.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Estilos inline para os componentes
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#ececec",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "1000px",
    backgroundColor: "#ececec",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#666",
  },
};

export default InvestmentList;