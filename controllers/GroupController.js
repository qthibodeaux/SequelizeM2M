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

exports.getAllGroups = async (req, res) => {
    try {
        const results = await db.groups.findAll({
            attributes: ['id', 'groupName'],
        })

        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getGroup = async (req, res) => {
    const { groupId } = req.body

    try {
        const results = await db.groups.findAll({
            where: { id: groupId },
            attributes: ['id', 'groupName'],
            include: {
                model: db.users,
                as: 'users',
                attributes: ['id', 'userName', 'name']
            }
        })

        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}