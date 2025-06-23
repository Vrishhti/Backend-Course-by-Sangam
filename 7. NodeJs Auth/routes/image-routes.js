const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const uploadImageController = require('../controllers/image-controller')
const fetchImagesController = require('../controllers/image-controller')
const deleteImagesController = require('../controllers/image-controller')
const router = express.Router()

//Upload the image
router.post('/upload', authMiddleware, adminMiddleware, uploadMiddleware.single('image'), uploadImageController)
//authmiddleware returns the logged in user info as we had previosuly made it do so in auth section
//that userinfo is accessed by the uploadimagecontrolelr

//to get all images
router.get('/get', authMiddleware, fetchImagesController)

//delete image
router.delete(':id', authMiddleware, adminMiddleware, deleteImagesController)


module.exports = router