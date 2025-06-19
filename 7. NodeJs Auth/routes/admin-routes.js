const express= require('express');
const router = express.Router()
const authMiddleware = require('../middleware/auth-middleware')
const isAdminUser= require('../middleware/auth-middleware')

//authmiddeware is just to check whther user exits or not
//isadminuser middleware is used to check the role specfication of the user. as in the admin route should only be netered if the role of the user is admin

router.get('/welcome', authMiddleware , isAdminUser,(req,res)=>{
    res.json({
        message:'welcome to admin page'
    })
})

module.exports= router