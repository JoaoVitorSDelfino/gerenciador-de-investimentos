const Investment = require('../models/investimento')

module.exports = {
    criar: async (dados) => {
        console.log(dados)

        const novoInvestimento = await Investment.create(dados)

        return {status: true, mensagem: 'Sucesso ao criar Investment!', investment: novoInvestimento}
    },

    buscarPorId: async (id) => {
        const Investimento = await Investment.findOne({where: {id: id}})

        if (Investimento) {
            return {status: true, mensagem: 'Sucesso ao buscar Investimento!', investment: Investimento}
        } else {
            return {status: false, mensagem: 'ERRO, Investimento não existe!'}
        }   
    },

    buscarPorNome: async (nome) => {
        const investimento = await Investment.findOne({where: {nome: nome}})

        if (investimento) {
            return {status: true, mensagem: 'Sucesso ao buscar investimento!', investimento: investimento}
        } else {
            return {status: false, mensagem: 'ERRO, investimento não existe!'}
        }  
    },

    alterar: async (id, novosDados) => {
        await Investment.update(
            novosDados, 
            {where: {id: id}}
        )

        InvestimentoAtualizado = await Investment.findOne({
            where: {id: id}
        })    

        return {status: true, mensagem: 'Sucesso ao alterar Investimento!', InvestimentoAtualizado: InvestimentoAtualizado}
    },

    deletar: async (id) => {
        const Investment = await Investment.findOne({where: {id: id}})

        await Investment.destroy({where: { id: id }})

        return {status: true, mensagem: 'Sucesso ao deletar Investimento!', InvestimentoExcluido: Investment}
    },

    listar: async () => {
        return await Investment.findAll()
    },
}