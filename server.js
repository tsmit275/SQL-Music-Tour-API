const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Require controllers
const eventController = require('./controllers/eventController')
const stageController = require('./controllers/stageController')

// Middleware
app.use(bodyParser.json())

// Use controllers
app.use('/events', eventController)
app.use('/stages', stageController)

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
