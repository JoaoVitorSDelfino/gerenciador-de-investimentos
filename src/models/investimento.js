const Sequelize = require('sequelize')
const db = require('../db/connection')

const Investimento = db.define('investimento', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        unique: true, 
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
    },
    dados: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Investimento