const express = require('express')
const router = express.Router()

const User = require('../../controller/UserControl')

const bodyParser = require('body-parser')
router.use(bodyParser.json())

router.get('/getUser/:nome', async (req, res) => {
  try {
      const usuario = await User.buscarPorNome(req.params.nome)

      // Valida se o usuario foi encontrado
      if (usuario.status) {
          res.status(201).json({ usuario: usuario })
      } else {
          res.status(400).json({ usuario: usuario })
      }
  } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'ERRO ao buscar o usuario' })
  }
  
  router.get('/getUserId/:id', async (req, res) => {
    try {
        const usuario = await User.buscarPorId(req.params.id)
  
        // Valida se o usuario foi encontrado
        if (usuario.status) {
            res.status(201).json({ usuario: usuario })
        } else {
            res.status(400).json({ usuario: usuario })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'ERRO ao buscar o usuario' })
    }
  })

  router.post('/addUser', async (req, res) => {
    const novoUsuario = await User.criar(req.body)
  
    if (novoUsuario.status) {
      res.status(201).send({ message: "Usuário adicionado com sucesso!" })
    } else {
      res.status(300).send({ message: "ERRO" })
    }
  })
})

module.exports = router