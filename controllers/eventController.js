// controllers/eventController.js
const express = require('express')
const router = express.Router()
const { Event } = require('../models')

// Index route - get all events ordered by date
router.get('/', async (req, res) => {
    try {
        const events = await Event.findAll({
            order: [['date', 'ASC']]
        })
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Show route - get a single event by ID
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id)
        if (event) {
            res.status(200).json(event)
        } else {
            res.status(404).json({ message: 'Event not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Create route - create a new event
router.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Update route - update an existing event
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Event.update(req.body, {
            where: { id: req.params.id }
        })
        if (updated) {
            const updatedEvent = await Event.findByPk(req.params.id)
            res.status(200).json(updatedEvent)
        } else {
            res.status(404).json({ message: 'Event not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Delete route - delete an event
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Event.destroy({
            where: { id: req.params.id }
        })
        if (deleted) {
            res.status(204).json()
        } else {
            res.status(404).json({ message: 'Event not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
