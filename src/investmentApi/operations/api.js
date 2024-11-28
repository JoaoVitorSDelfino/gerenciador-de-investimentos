const express = require('express')
const router = express.Router()

router.get('/investmentApi', async (req, res) => {
    try {
        res.status(200).json({status: true, mensagem: 'Você está na rota da Investment API!'})
    } catch (error) {
        console.error(error)
        res.status(200).json({error: 'ERRO ao acessar a rota Investment API'})
    }
})

router.use('/investmentApi/investments', require('./investments'))
router.use('/investmentApi/users', require('./users'))

module.exports = router