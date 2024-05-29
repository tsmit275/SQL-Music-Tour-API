const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')
const SetTime = require('./SetTime')
const MeetAndGreet = require('./MeetAndGreet')
const StageEvent = require('./StageEvent')
const Stage = require('./Stage')

const Event = sequelize.define('Event', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

module.exports = Event


const defineEventAssociations = () => {
    Event.belongsToMany(Stage, { through: StageEvent, foreignKey: 'event_id' })
    Event.hasMany(SetTime, { foreignKey: 'event_id' });
    Event.hasMany(MeetAndGreet, { foreignKey: 'event_id' });
};


module.exports.defineAssociations = defineEventAssociations


