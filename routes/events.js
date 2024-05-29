const express = require('express')
const router = express.Router()
const { getEventSchedule } = require('../controllers/eventController')

router.get('/:name', getEventSchedule)

module.exports = router
