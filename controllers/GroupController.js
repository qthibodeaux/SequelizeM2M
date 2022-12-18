const db = require('../models')

exports.createGroup = async (req, res) => {
    const { groupName } = req.body

    try {
        const results = await db.groups.create({
            groupName
        })

        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.addUserGroup = async (req, res) => {
    const { userId, groupId } = req.body

    try {
        const results = await db.users_groups.create({
            userId,
            groupId
        })

        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.geGroups = async (req, res) => {
    try {
        const results = await db.group.findAll({
            attributes: ['id', 'groupName'],
        })

        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}