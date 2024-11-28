import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function InvestmentDetails() {
  const { id } = useParams(); // Obtém o ID do investimento da URL
  const [investment, setInvestment] = useState(null);

  const fetchInvestmentDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/investmentApi/investments/getInvestmentId/${id}`);
      setInvestment(response.data.investimento.investment);
    } catch (error) {
      console.error("Erro ao buscar detalhes do investimento:", error);
    }
  };

  useEffect(() => {
    fetchInvestmentDetails();
  }, [id]);

  if (!investment) {
    return <div>Carregando detalhes do investimento...</div>;
  }

  return (
    <div style={styles.container}>
      <h1>{investment.nome}</h1>
      <p>{investment.descricao}</p>
      <pre style={styles.jsonPreview}>{JSON.stringify(investment.dados, null, 2)}</pre>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  jsonPreview: {
    backgroundColor: "#eee",
    padding: "10px",
    borderRadius: "5px",
    overflowX: "auto",
  },
};

export default InvestmentDetails;