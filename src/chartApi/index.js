import generateGraphConfig from './middleware/generateGraph';
import axios from 'axios'; // Certifique-se de usar a importação correta

async function getChart(dados, nome) {
    try {
        const chartConfig = generateGraphConfig(dados, nome);

        const response = await axios.get('https://quickchart.io/chart', {
            params: {
                c: JSON.stringify(chartConfig), // Configuração do gráfico como string JSON
            },
        });

        const imageUrl = response.request.responseURL; // URL da imagem gerada
        console.log('Link da imagem gerada:', imageUrl);

        return imageUrl;
    } catch (error) {
        console.error('Erro ao gerar o gráfico:', error);
        throw error;
    }
}

export default getChart;