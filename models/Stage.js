// models/Stage.js

const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Stage = sequelize.define('Stage', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Stage
