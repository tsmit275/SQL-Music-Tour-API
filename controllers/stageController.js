// controllers/stageController.js

const express = require('express')
const router = express.Router()
const { Stage } = require('../models')

router.get('/', async (req, res) => {
    try {
        const stages = await Stage.findAll()
        res.status(200).json(stages)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Show route - get a single stage by ID
router.get('/:id', async (req, res) => {
    try {
        const stage = await Stage.findByPk(req.params.id)
        if (stage) {
            res.status(200).json(stage)
        } else {
            res.status(404).json({ message: 'Stage not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Create route - create a new stage
router.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(201).json(newStage)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Update route - update an existing stage
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Stage.update(req.body, {
            where: { id: req.params.id }
        })
        if (updated) {
            const updatedStage = await Stage.findByPk(req.params.id)
            res.status(200).json(updatedStage)
        } else {
            res.status(404).json({ message: 'Stage not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Delete route - delete a stage
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Stage.destroy({
            where: { id: req.params.id }
        })
        if (deleted) {
            res.status(204).json()
        } else {
            res.status(404).json({ message: 'Stage not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
