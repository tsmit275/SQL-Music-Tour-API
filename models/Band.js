// models/Band.js
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Band = sequelize.define('Band', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Add other fields as necessary
});

module.exports = Band;
