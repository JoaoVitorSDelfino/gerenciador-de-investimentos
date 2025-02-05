function generateComparisonGraphConfig(dados1, nome1, dados2, nome2) {
    const extractData = (dados) => {
      const allDates = [];
      const allValues = [];
      
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
      return { allDates, allValues };
    };
  
    const { allDates: dates1, allValues: values1 } = extractData(JSON.parse(dados1));
    const { allDates: dates2, allValues: values2 } = extractData(JSON.parse(dados2));
  
    const allDates = [...new Set([...dates1, ...dates2])].sort((a, b) => a - b);
    const totalDays = allDates.length;
    let labels = [];
    let data1 = new Array(totalDays).fill(null);
    let data2 = new Array(totalDays).fill(null);
  
    if (totalDays <= 14) {
      labels = allDates.map(date => date.toLocaleDateString());
      dates1.forEach((date, idx) => {
        const labelIndex = labels.indexOf(date.toLocaleDateString());
        data1[labelIndex] = values1[idx];
      });
      dates2.forEach((date, idx) => {
        const labelIndex = labels.indexOf(date.toLocaleDateString());
        data2[labelIndex] = values2[idx];
      });
    } else if (totalDays >= 15 && totalDays <= 84) {
      const weeks = [];
      const weekValues1 = [];
      const weekValues2 = [];
      
      for (let i = 0; i < allDates.length; i += 7) {
        const weekLabel = `Semana ${Math.floor(i / 7) + 1}`;
        weeks.push(weekLabel);
        weekValues1.push(values1.slice(i, i + 7).reduce((sum, v) => sum + (v || 0), 0));
        weekValues2.push(values2.slice(i, i + 7).reduce((sum, v) => sum + (v || 0), 0));
      }
  
      labels = weeks;
      data1 = weekValues1;
      data2 = weekValues2;
    } else {
      const months = [];
      const monthValues1 = [];
      const monthValues2 = [];
      
      allDates.forEach((date, idx) => {
        const monthLabel = date.toLocaleString("default", { month: "long" });
        if (!months.includes(monthLabel)) {
          months.push(monthLabel);
          monthValues1.push(values1[idx] || 0);
          monthValues2.push(values2[idx] || 0);
        } else {
          const monthIndex = months.indexOf(monthLabel);
          monthValues1[monthIndex] += values1[idx] || 0;
          monthValues2[monthIndex] += values2[idx] || 0;
        }
      });
  
      labels = months;
      data1 = monthValues1;
      data2 = monthValues2;
    }
  
    const getRandomColor = () => {
      const randomColor = () => Math.floor(Math.random() * 256);
      return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    };
  
    return {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: nome1,
            backgroundColor: getRandomColor(),
            borderColor: getRandomColor(),
            data: data1,
            fill: false,
          },
          {
            label: nome2,
            backgroundColor: getRandomColor(),
            borderColor: getRandomColor(),
            data: data2,
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: `${nome1} vs ${nome2}`,
        },
      },
    };
  }
  
  export default generateComparisonGraphConfig;
  