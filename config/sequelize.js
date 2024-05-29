const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'postgres',
    logging: false
})

console.log('Sequelize instance:', sequelize) 

module.exports = sequelize
