const express = require('express')
const { createGroup, addUserGroup, getAllGroups, getGroup } = require('../controllers/GroupController.js')

const router = express.Router()

router.post('/createGroup', createGroup)
router.post('/addUsersGroups', addUserGroup)
router.get('/getAllGroups', getAllGroups)
router.get('/getGroup', getGroup)

module.exports = router