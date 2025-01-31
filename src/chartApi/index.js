import generateLineGraphConfig from './middleware/generateGraph'
import generateColumnCraph from './middleware/generateColumnCraph';
import axios from 'axios'; // Certifique-se de usar a importação correta

async function getLineChart(dados, nome) {
    try {
        const lineChartConfig = generateLineGraphConfig(dados, nome);

        const response = await axios.get('https://quickchart.io/chart', {
            params: {
                c: JSON.stringify(lineChartConfig), // Configuração do gráfico como string JSON
            },
        });

        const imageUrl = response.request.responseURL; // URL da imagem gerada
        console.log('Link da imagem gerada:', imageUrl);

        return imageUrl;
    } catch (error) {
        console.error('Erro ao gerar o gráfico de linhas:', error);
        throw error;
    }
}

async function getColumnChart(dados, nome) {
    try {
        const columnChartConfig = generateColumnCraph(dados, nome);

        const response = await axios.get('https://quickchart.io/chart', {
            params: {
                c: JSON.stringify(columnChartConfig), // Configuração do gráfico como string JSON
            },
        });

        const imageUrl = response.request.responseURL; // URL da imagem gerada
        console.log('Link da imagem gerada:', imageUrl);

        return imageUrl;
    } catch (error) {
        console.error('Erro ao gerar o gráfico de colunas:', error);
        throw error;
    }
}

export {getLineChart, getColumnChart};