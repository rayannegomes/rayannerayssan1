
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Atendimento = sequelize.define('Atendimento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataAtendimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    horaAtendimento: {
        type: DataTypes.TIME,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'atendimentos',
    timestamps: true
});

module.exports = Atendimento;