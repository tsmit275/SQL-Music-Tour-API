const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const StageEvent = sequelize.define('StageEvent', {
    stage_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Stages',
            key: 'id'
        }
    },
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Events',
            key: 'id'
        }
    }
}, {
    timestamps: false
})

module.exports = StageEvent
