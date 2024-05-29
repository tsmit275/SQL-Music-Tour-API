const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const MeetAndGreet = sequelize.define('MeetAndGreet', {
    event_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Events',
            key: 'id'
        }
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    meet_location: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = MeetAndGreet
