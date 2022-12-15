const express = require('express')
const { hey, addUser, getUsers, updateUser, deleteUser } = require('../controllers/Controller.js')

const router = express.Router()

router.get('/hey', hey)

router.get('/getUsers', getUsers)
router.post('/addUser', addUser)
router.put('/updateUser', updateUser)
router.delete('/deleteUser', deleteUser)

module.exports = router