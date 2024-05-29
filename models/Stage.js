const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')
const StageEvent = require('./StageEvent')
const Event = require('./Event')

const Stage = sequelize.define('Stage', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Stage


const defineStageAssociations = () => {
    Stage.belongsToMany(Event, { through: StageEvent, foreignKey: 'stage_id' })
}


module.exports.defineAssociations = defineStageAssociations



