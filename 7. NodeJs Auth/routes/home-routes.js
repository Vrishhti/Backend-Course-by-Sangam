const express= require('express');
const router = express.Router()
const authMiddelware = require('../middleware/auth-middleware')

//protect this route using middeware

// handler 1 is middleware 1
// handler 2 is middleware 2
// first u go to handler 1 and check if handler1 is successful or not, if its successfull then only handler2 is called and then only youll receive the welcome msg
router.get('/welcome', authMiddelware, (req,res)=>{
    const {username, userId, role}= req.userInfo
    res.json({
        message: 'Welcome to home Page',
        user:{
            _id:userId,
            username,
            role
     } 
    })
})

module.exports = router
