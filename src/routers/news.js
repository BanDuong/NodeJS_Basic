const express = require('express')
const router = express.Router()
const newsController = require('../app/controllers/NewsController')

// NewsController.index()
router.use(newsController.index)

module.exports = router
