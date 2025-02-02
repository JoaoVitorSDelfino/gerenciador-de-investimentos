const express = require('express')
const router = express.Router()

const Investment = require('../../controller/InvestmentControl')

const bodyParser = require('body-parser')
router.use(bodyParser.json())

router.get('/getInvestment/:nome', async (req, res) => {
  try {
      const investimento = await Investment.buscarPorNome(req.params.nome)

      // Valida se o investimento foi encontrado
      if (investimento.status) {
          res.status(201).json({ investimento: investimento })
      } else {
          res.status(400).json({ investimento: investimento })
      }
  } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'ERRO ao buscar o investimento' })
  }
})

router.get('/getInvestmentId/:id', async (req, res) => {
    try {
        const investimento = await Investment.buscarPorId(req.params.id)
  
        // Valida se o investimento foi encontrado
        if (investimento.status) {
            res.status(201).json({ investimento: investimento })
        } else {
            res.status(400).json({ investimento: investimento })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'ERRO ao buscar o investimento' })
    }
  })

// Listar lista de Investmentos cadastrados
router.get('/showInvestments', async (req, res) => {
  try {
      const listaPaginada = await Investment.listar()

      res.status(200).json(listaPaginada)
  } catch (error) {
      console.error(error)
      res.status(500).json({error: 'ERRO buscar lista de Investimentos'})
  }
})

router.post('/addInvestment', async (req, res) => {
  const novoInvestmento = await Investment.criar(req.body)

  if (novoInvestmento.status) {
    res.status(201).send({ message: "Investimento adicionado com sucesso!" })
  } else {
    res.status(300).send({ message: "ERRO" })
  }
})

// Alterar uma Investment pelo id
router.put('/editInvestment/:id', async (req, res) => {
  try {
      const InvestmentoExiste = await Investment.buscarPorId(req.params.id)

      if (!InvestmentoExiste.status) {
          res.status(200).json({status: false, mensagem: 'ERRO, Investimento não existe!'})
          return
      }

      InvestmentoAtualizado = await Investment.alterar(req.params.id, req.body)

      if (InvestmentoAtualizado.status) {
          res.status(200).json({atualizar: InvestmentoAtualizado})
      } else {
          res.status(200).json({atualizar: InvestmentoAtualizado})
      }
  } catch (error) {
      console.error(error)
      res.status(500).json({error: 'ERRO ao editar Investimento.'})
  }
})

// Deletar uma Investment pelo id
router.delete('/deleteInvestment/:id', async (req, res) => {
  try {
      const InvestmentoExiste = await Investment.buscarPorId(req.params.id)

      if (!InvestmentoExiste.status) {
          console.log('nao existe')
          res.status(200).json({status: false, mensagem: 'ERRO, Investimento não existe!'})
          return
      }
      const InvestmentExcluido = await Investment.deletar(req.params.id)

        if (InvestmentExcluido.status) {
            res.status(200).json({excluir: { InvestmentExcluido }})
        } else {
            res.status(200).json({excluir: InvestmentExcluido })
        }
  } catch (error) {
      console.error(error)
      res.status(500).json({error: 'ERRO ao deletar Investmento.'})
  }
})

// Deletar múltiplos investimentos pelo array de IDs
router.delete('/deleteInvestments', async (req, res) => {
    try {
        const { ids } = req.body; // Array de IDs vindo do frontend

        if (!ids || ids.length === 0) {
            return res.status(400).json({ status: false, mensagem: 'Nenhum investimento selecionado para exclusão.' });
        }

        let resultados = [];
        for (const id of ids) {
            const investmentoExiste = await Investment.buscarPorId(id);

            if (!investmentoExiste.status) {
                resultados.push({ id, status: false, mensagem: 'Investimento não encontrado' });
                continue;
            }

            const investmentExcluido = await Investment.deletar(id);
            resultados.push({ id, status: investmentExcluido.status, mensagem: investmentExcluido.status ? 'Excluído com sucesso' : 'Erro ao excluir' });
        }

        return res.status(200).json({ resultados });

    } catch (error) {
        console.error('Erro ao deletar investimentos:', error);
        return res.status(500).json({ error: 'Erro interno ao excluir investimentos.' });
    }
});

module.exports = router