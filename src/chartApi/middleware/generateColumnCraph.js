// Função para gerar a configuração do gráfico de colunas com percentuais de ganho
function generateColumnCraph(dados, nome) {
  const allDates = [];
  const allValues = [];

  // Extraímos os dias e valores
  for (const year in dados) {
    for (const month in dados[year]) {
      dados[year][month].forEach((entry) => {
        for (const day in entry.ValorDias) {
          allDates.push(`${day}/${month}/${year}`);
          allValues.push(entry.ValorDias[day]);
        }
      });
    }
  }
  const totalDays = allDates.length;
  let labels = [];
  let percentageChange = [];

  // Definir o valor inicial do investimento
  const initialInvestment = allValues.length > 0 ? allValues[0] : 1;

  // Agrupando os dados conforme a regra de categorização
  if (totalDays <= 14) {
    // Diário
    labels = allDates;
    percentageChange = allValues.map(value => ((value - initialInvestment) / initialInvestment) * 100);
  } else if (totalDays >= 15 && totalDays <= 84) {
    // Semanal
    const weeks = [];
    const weekPercentageChange = [];
    
    for (let i = 0; i < allDates.length; i += 7) {
      const weekLabel = `Semana ${Math.floor(i / 7) + 1}`;
      const weekData = allValues.slice(i, i + 7).reduce((sum, value) => sum + value, 0);
      weeks.push(weekLabel);
      weekPercentageChange.push(((weekData - initialInvestment) / initialInvestment) * 100);
    }

    labels = weeks;
    percentageChange = weekPercentageChange;
  } else {
    // Mensal
    const months = [];
    const monthPercentageChange = [];
    
    allDates.forEach((date, idx) => {
      const [day, month, year] = date.split("/");
      const monthLabel = month;
      if (!months.includes(monthLabel)) {
        months.push(monthLabel);
        monthPercentageChange.push(((allValues[idx] - initialInvestment) / initialInvestment) * 100);
      } else {
        const monthIndex = months.indexOf(monthLabel);
        monthPercentageChange[monthIndex] = ((allValues[idx] - initialInvestment) / initialInvestment) * 100;
      }
    });

    labels = months;
    percentageChange = monthPercentageChange;
  }

  console.log(percentageChange);

  return {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Variação Percentual (%)",
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          data: percentageChange,
          borderWidth: 1,
        }
      ],
    },
    options: {
      title: {
        display: true,
        text: `Variação Percentual do Investimento - ${nome}`,
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value.toFixed(2) + '%';
            }
          }
        }
      }
    }
  };
}

export default generateColumnCraph;