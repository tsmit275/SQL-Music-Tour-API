const { Stage, Event } = require('../models')

const getStageEvents = async (req, res) => {
    try {
        const stageName = req.params.name;
        const stage = await Stage.findOne({ where: { name: stageName } })
        if (!stage) {
            return res.status(404).json({ error: 'Stage not found' })
        }
        const events = await stage.getEvents()
        return res.json({ stage, events })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = { getStageEvents }
