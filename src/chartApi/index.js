const axios = require('axios')

import generateGraphConfig from './middleware/generateGraph';

async function getChart(nome) {
    const investimento = await axios.get("http://localhost:3001/investmentApi/investments/getInvestment" + nome);

    const chartConfig = generateGraphConfig(investimento)
      
    const response = axios.get('https://quickchart.io/chart', {
        params: {
        c: JSON.stringify(chartConfig), // Configuração do gráfico como string JSON
        },
    })
    .then((response) => {
        const imageUrl = response.request.responseURL; // URL da imagem gerada
        console.log('Link da imagem gerada:', imageUrl);
    })
    .catch((error) => {
        console.error(error);
    });
      
    return response
}

export default getChart