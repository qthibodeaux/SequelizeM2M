const db = require('../models')

exports.hey = async (req, res) => {
    res.status(500).send("yo")
}

exports.addMom = async (req, res) => {
    const { fName, lName, married } = req.body
    console.log(req.body)

    try {
        db.Mom.create({
            firstName: fName, lastName: lName, married
        }).then(Mom => {
            res.status(200).json(Mom)
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getMoms = async (req, res) => {
    try {
        let getMoms = await db.Mom.findAll()

        res.status(200).json(getMoms)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.addDad = async (req, res) => {
    const { fName, lName, married } = req.body

    try {
        db.Dad.create({
            firstName: fName, lastName: lName, married
        }).then(Dad => {
            res.status(200).json(Dad)
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getDads = async (req, res) => {
    try {
        let getDads = await db.Dad.findAll()

        res.status(200).json(getDads)
    } catch (error) {
        res.status(500).send(error)
    }
}