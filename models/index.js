const sequelize = require('../config/sequelize')

const Event = require('./Event')
const Stage = require('./Stage')
const StageEvent = require('./StageEvent')
const SetTime = require('./SetTime')
const MeetAndGreet = require('./MeetAndGreet')

// Define associations
Stage.belongsToMany(Event, { through: StageEvent, foreignKey: 'stage_id' })
Event.belongsToMany(Stage, { through: StageEvent, foreignKey: 'event_id' })

Event.hasMany(SetTime, { foreignKey: 'event_id' })
Event.hasMany(MeetAndGreet, { foreignKey: 'event_id' })

module.exports = {
    sequelize,
    Event,
    Stage,
    StageEvent,
    SetTime,
    MeetAndGreet
}
