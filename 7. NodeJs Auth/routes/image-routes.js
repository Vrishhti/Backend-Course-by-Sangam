const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/auth-middleware')

const router = express.Router()

//Upload the image
router.post('/upload', authMiddleware, adminMiddleware)

//to get all images


module.exports = router