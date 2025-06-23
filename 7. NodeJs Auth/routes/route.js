const express = require('express');
const router = express.Router();
const {loginUser, registerUser}= require('../controllers/auth-controller')
const authMiddleware= require('../middleware/auth-middleware')

//Routes related to authorization and authentication

// That means when a POST request is made to /login, Express will call the loginUser function to handle it.
router.post('/register', registerUser)
router.post('/login', loginUser)
router.post("/change-password", loginUser)

module.exports=router
