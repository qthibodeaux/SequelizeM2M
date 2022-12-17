const db = require('../models')

exports.hey = async (req, res) => {
    res.status(500).send("yo")
}

exports.addUser = async (req, res) => {
    const { name, userName, mobileNum, address, posts } = req.body

    try {
        const results = await db.users.create({
            name,
            userName,
            userDetails: {
                mobileNum,
                address
            },
            posts
        }, {
            include: [{
                model: db.userDetails,
                as: 'userDetails',
            },{
                model: db.posts,
                as: 'posts',
            }]
        })

        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getUsers = async (req, res) => {
    try {
        const results = await db.users.findAll({
            include: [{
                model: db.userDetails,
                as: 'userDetails',
            },{
                model: db.posts,
                as: 'posts',
            }]
        })

        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateUser = async (req, res) => {
    console.log('body ', req.body)
    const { name, userName, mobileNum, address, userId } = req.body

    const updateUser = {
        name,
        userName
    }
    const updateUserDetails = {
        mobileNum,
        address
    }        

    try {
        const updatePromises = []
        const updateUsersPromise = db.users.update(
            updateUser,
            { where: { id: userId }}
        )
        updatePromises.push(updateUsersPromise)

        const updateUserDetailsPromise = db.userDetails.update(
            updateUserDetails,
            { where: { userId } },
        )
        updatePromises.push(updateUserDetailsPromise)

        await Promise.all(updatePromises)

        res.status(200).json({results: 'User records updated'})
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { userId } = req.body

        const results = await db.users.destroy({
            where: {
                id: userId,
            },
            cascade: true,
            include: [{
                model: db.userDetails,
                as: 'userDetails',
                cascade: true
            }]
        })

        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}