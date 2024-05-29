const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Event = sequelize.define('Event', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    // Add other relevant fields
})

module.exports = Event
