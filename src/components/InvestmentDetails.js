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

  const organizeData = (data) => {
    const organizedData = {};

    Object.keys(data).forEach((year) => {
      organizedData[year] = {};

      Object.keys(data[year]).forEach((month) => {
        const monthData = data[year][month][0];
        console.log(data[year][month][0])
        organizedData[year][month] = {
          ValorFinal: monthData.ValorFinal,
          Dias: Object.entries(monthData.ValorDias).map(([day, value]) => ({
            Dia: day,
            Valor: value,
          })),
        };
      });
    });

    return organizedData;
  };

  useEffect(() => {
    fetchInvestmentDetails();
  }, [id]);

  if (!investment) {
    return <div>Carregando detalhes do investimento...</div>
  }

    const investmentData = JSON.parse(investment.dados)
    const structuredData = organizeData(investmentData)

  return (
    <div style={styles.container}>
      <h1>{investment.nome}</h1>
      <p>{investment.descricao}</p>

      {Object.entries(structuredData).map(([year, months]) => (
        <div key={year} style={styles.yearContainer}>
          <h2>Ano: {year}</h2>
          {Object.entries(months).map(([month, details]) => (
            <div key={month} style={styles.monthContainer}>
              <h3>Mês: {month}</h3>
              <p>Valor Final: {details.ValorFinal}</p>
              <ul>
                {details.Dias.map((dayData) => (
                  <li key={dayData.Dia}>
                    Dia {dayData.Dia}: {dayData.Valor}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
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
  yearContainer: {
    marginBottom: "20px",
  },
  monthContainer: {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#eee",
    borderRadius: "5px",
  },
};

export default InvestmentDetails