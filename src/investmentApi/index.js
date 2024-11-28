const express = require('express')
const app = express()
const cors = require('cors')

const port = 3001

// Config do banco de dados
const db = require('../db/connection')

db.authenticate().then(() => {
    console.log("Conectou ao banco de dados com sucesso")
}).catch(err => {
    console.log("Ocorreu um erro ao conectar", err)
})

app.use(cors()); // Adicionando o middleware CORS
app.use(express.json()); // Para processar JSON

app.get('/', (req, res) => {
    res.send('teste')
});

app.use('/', require('./operations/api'))

app.listen(port, function() {
    console.log('Server is running at port ' + port)
})