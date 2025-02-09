// Função para gerar a configuração do gráfico
function generateGraphConfig(dados, nome) {
  const allDates = [];
  const allValues = [];
  const monthMap = {
      "janeiro": "01", "fevereiro": "02", "março": "03", "abril": "04", "maio": "05", "junho": "06", 
      "julho": "07", "agosto": "08", "setembro": "09", "outubro": "10", "novembro": "11", "dezembro": "12"
  };

  // Extraímos os dias e valores
  for (const year in dados) {
      for (const month in dados[year]) {
          const monthNumber = monthMap[month.toLowerCase()] || month;
          dados[year][month].forEach((entry) => {
              for (const day in entry.ValorDias) {
                  allDates.push(`${day}/${monthNumber}/${year}`);
                  allValues.push(entry.ValorDias[day]);
              }
          });
      }
  }

  const totalDays = allDates.length;
  let labels = [];
  let data = [];

  // Definindo o tipo de gráfico de acordo com as regras
  if (totalDays <= 14) {
      // Gráfico diário
      labels = allDates;
      data = allValues;
  } else if (totalDays >= 15 && totalDays <= 84) {
      // Gráfico semanal (7 dias por semana)
      const weeks = [];
      const weekValues = [];
    
      for (let i = 0; i < allDates.length; i += 7) {
          const weekLabel = `Semana ${Math.floor(i / 7) + 1}`;
          const weekData = allValues.slice(i, i + 7).reduce((sum, value) => sum + value, 0);
          weeks.push(weekLabel);
          weekValues.push(weekData);
      }

      labels = weeks;
      data = weekValues;
  } else if (totalDays >= 85) {
      // Gráfico mensal
      const months = [];
      const monthValues = [];
    
      // Agrupa os dados por mês
      allDates.forEach((date, idx) => {
          const [day, month, year] = date.split("/");
          const monthLabel = month;
          if (!months.includes(monthLabel)) {
              months.push(monthLabel);
              monthValues.push(allValues[idx]);
          } else {
              const monthIndex = months.indexOf(monthLabel);
              monthValues[monthIndex] += allValues[idx]; // Soma os valores para o mesmo mês
          }
      });

      labels = months;
      data = monthValues;
  }

  // Função para gerar uma cor aleatória para o gráfico
  const getRandomColor = () => {
      const randomColor = () => Math.floor(Math.random() * 256);
      return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  };

  // Cria e retorna a configuração do gráfico
  return {
      type: "line",
      data: {
          labels: labels,
          datasets: [
              {
                  label: nome,
                  backgroundColor: getRandomColor(),
                  borderColor: getRandomColor(),
                  data: data,
                  fill: false,
              },
          ],
      },
      options: {
          title: {
              display: true,
              text: nome,
          },
      },
  };
}

export default generateGraphConfig;