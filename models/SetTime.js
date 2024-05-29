const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const SetTime = sequelize.define('SetTime', {
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Events',
            key: 'id'
        }
    },
    stage_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Stages',
            key: 'id'
        }
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = SetTime
