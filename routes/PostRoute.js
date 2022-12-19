const express = require('express')
const { createPost, readPost, deletePosts } = require('../controllers/PostController.js')

const router = express.Router()

router.post('/createPost', createPost)
router.get('/readPost', readPost)
router.delete('/deletePost', deletePosts)

module.exports = router