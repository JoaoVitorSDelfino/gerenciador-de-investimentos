// Função para gerar a configuração do gráfico
function generateGraphConfig(investimento) {
    const dados = investimento.dados;
    const allDates = [];
    const allValues = [];
  
    // Extraímos os dias e valores
    for (const year in dados) {
      for (const month in dados[year]) {
        dados[year][month].forEach((entry) => {
          for (const day in entry.ValorDias) {
            allDates.push(new Date(`${month} ${day}, ${year}`));
            allValues.push(entry.ValorDias[day]);
          }
        });
      }
    }
  
    const totalDays = allDates.length;
    let labels = [];
    let data = [];
    let chartType = "line";
  
    // Definindo o tipo de gráfico de acordo com as regras
    if (totalDays <= 14) {
      // Gráfico diário
      labels = allDates.map(date => date.toLocaleDateString());
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
        const monthLabel = date.toLocaleString("default", { month: "long" });
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
            label: investimento.nome,
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
          text: investimento.nome,
        },
      },
    };
  }
  
  export default generateGraphConfig  