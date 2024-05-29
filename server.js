const express = require('express')
const bodyParser = require('body-parser')

const eventRoutes = require('./routes/events')
const stageRoutes = require('./routes/stages')

const app = express()


app.use(bodyParser.json())

app.use('/events', eventRoutes)
app.use('/stages', stageRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
