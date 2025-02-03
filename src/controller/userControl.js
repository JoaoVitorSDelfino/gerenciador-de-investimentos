const User = require('../models/usuario')

module.exports = {
    criar: async (dados) => {
        const novoUsuario = await User.create(dados)

        return {status: true, mensagem: 'Sucesso ao criar User!', user: novoUsuario}
    },

    buscarPorId: async (id) => {
        const Usuario = await User.findOne({where: {id: id}})

        if (Usuario) {
            return {status: true, mensagem: 'Sucesso ao buscar Usuario!', user: Usuario}
        } else {
            return {status: false, mensagem: 'ERRO, Usuario não existe!'}
        }   
    },

    buscarPorEmail: async (email) => {
        const Usuario = await User.findOne({where: {email: email}})

        if (Usuario) {
            return {status: true, mensagem: 'Sucesso ao buscar Usuario!', Usuario: Usuario}
        } else {
            return {status: false, mensagem: 'ERRO, Usuario não existe!'}
        }  
    },

    deletar: async (id) => {
        const deletedUser = await User.findOne({where: {id: id}})

        await deletedUser.destroy({where: { id: id }})

        return {status: true, mensagem: 'Sucesso ao deletar Usuario!', UsuarioExcluido: deletedUser}
    },

    listar: async () => {
        return await User.findAll()
    },
}