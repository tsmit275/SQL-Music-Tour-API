const express = require('express')
const router = express.Router()
const { Band } = require('../models')

// Index Route
router.get('/', async (req, res) => {
    try {
        const bands = await Band.findAll()
        res.status(200).json(bands)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Show Route
router.get('/:id', async (req, res) => {
    try {
        const band = await Band.findByPk(req.params.id)
        if (band) {
            res.status(200).json(band)
        } else {
            res.status(404).json({ message: 'Band not found' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// Create Route
router.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(201).json(newBand)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update Route
router.put('/:id', async (req, res) => {
    try {
        const updatedBand = await Band.update(req.body, {
            where: { id: req.params.id }
        })
        if (updatedBand[0]) {
            res.status(200).json({ message: 'Band updated successfully' })
        } else {
            res.status(404).json({ message: 'Band not found' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// Delete Route
router.delete('/:id', async (req, res) => {
    try {
        const deletedBand = await Band.destroy({
            where: { id: req.params.id }
        })
        if (deletedBand) {
            res.status(200).json({ message: 'Band deleted successfully' })
        } else {
            res.status(404).json({ message: 'Band not found' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
