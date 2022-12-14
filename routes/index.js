const express = require('express')
const { hey, addMom, addDad, getMoms, getDads } = require('../controllers/Controller.js')

const router = express.Router()

router.get('/hey', hey)

router.post('/addMom', addMom)
router.post('/addDad', addDad)
router.get('/getMoms', getMoms)
router.get('/getDads', getDads)

module.exports = router