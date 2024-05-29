const { Event, Stage, SetTime, MeetAndGreet } = require('../models')

const getEventSchedule = async (req, res) => {
    try {
        const eventName = req.params.name
        const event = await Event.findOne({
            where: { name: eventName },
            include: [
                {
                    model: Stage,
                    as: 'stages',
                    include: {
                        model: SetTime,
                        as: 'set_times',
                        attributes: { exclude: ['event_id', 'stage_id'] },
                        order: [['start_time', 'ASC']]
                    }
                },
                {
                    model: MeetAndGreet,
                    as: 'meet_and_greets',
                    attributes: { exclude: ['event_id'] },
                    order: [['start_time', 'ASC']]
                }
            ],
            order: [['date', 'ASC']]
        });

        if (!event) {
            return res.status(404).json({ error: 'Event not found' })
        }

        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getEventSchedule }
