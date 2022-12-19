const db = require('../models')

exports.createPost = async (req, res) => {
    const { userId, title } = req.body
    
    try {
        const results = await db.posts.create({
            userId,
            title
        })

        res.status(200).send(results)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.readPost = async (req, res) => {
    const { userId } = req.body

    try {
        const results = await db.posts.findAll({
            where: { userId },
            attributes: ['title', 'userId'],
            include: {
                model: db.users,
                as: 'users',
                attributes: ['userName', 'name'],
            }
        })

        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deletePosts = async (req, res) => {
    const { postId } = req.body

    try {
        const results = await db.posts.destroy({
            where: { id: postId }
        })

        res.status(200).json(results)
    } catch (error) {
        res.status(500).send(error)
    }
}