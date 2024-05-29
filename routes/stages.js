const express = require('express')
const router = express.Router()
const { getStageEvents } = require('../controllers/stageController')

router.get('/:name', getStageEvents)

module.exports = router
