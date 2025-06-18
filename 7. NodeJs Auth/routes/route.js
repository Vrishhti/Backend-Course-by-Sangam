const express = require('express');
const router = express.Router();
const {loginUser, registerUser}= require('../controllers/auth-controller')

//Routes related to authorization and authentication
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports=router
