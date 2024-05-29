// config/sequelize.js
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('SQL-Music-Tour-API', 'postgres', 'Adl100902', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})

module.exports = sequelize
