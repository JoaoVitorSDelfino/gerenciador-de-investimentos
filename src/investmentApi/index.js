const express = require('express')
const app = express()
const cors = require('cors')

const port = 3001

app.use(cors()); // Adicionando o middleware CORS
app.use(express.json()); // Para processar JSON

app.get('/', (req, res) => {
    res.send('teste')
});

app.use('/', require('./operations/investmentApi'))

app.listen(port, function() {
    console.log('Server is running at port ' + port)
})