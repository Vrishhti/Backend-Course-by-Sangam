const User = require("../models/user")
const bcrypt= require('bcryptjs')
const jwt = require("jsonwebtoken")
//register controller
const registerUser = async (req, res)=>{
    try{
        //extract user info from req.body
        const {username, email, password, role}= req.body

        //check if the user is already present in the db
        const checkExistingUser = await User.findOne({$or: [{username}, {email}]});
        if(checkExistingUser){
            return res.status(400).json({
                success:false,
                message:'user already exists'
            })
        }

        //hash user pw
        const salt=  await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //create a new user and save in your db
        const newUser = new User({
            username, 
            email, 
            password:hashedPassword, 
            role:role||'user'
        })

        await newUser.save();

        if(newUser){
            res.status(201).json({
                messgae: 'User created successfully',
                success:true
            })
        }
        else{
            res.status(400).json({
                message:'User not created successfully',
                success:false
            })
        }

    }
    catch(e){
        console.log(e);
        res.status.json({
            sucess:false,
            message: 'error occured', e
        })
    }
}


//login controller
const loginUser = async (req, res)=>{
    try{

        //token created that holds user email/pw
        //that token is valid for some mins, and expires after that
        //login controller->jwt->store jwt in cookie

        const {username, password}= req.body;
        //find if that username exists in db
        const user = await User.findOne({username})
           if(!user){
            return res.status.json({
                success:false,
                message:"User not found"
            })
           }

           //ofpw is correct
           const isPwMatch = await bcrypt.compare(password, user.password)
           if(!isPwMatch){
            return res.status.json({
                success:false,
                message:"Password is incorrect"
            })
           }

           //create user token
           const accessToken = jwt.sign({
            userId: user.id,
            username: user.username,
            role: user.role
            //this will create jwt in encrypted form which creates all this info
           }, process.env.JWT_SECRET_KEY, {
            expiresIn: '15m'
           })

           res.status(200).json({
            sucess:true,
            messgae:"logged in successfully",
            accessToken
           })
    }
    catch(e){
        console.log(e);
        res.status.json({
            sucess:false,
            message: 'error occured', e
        })
    }
}

module.exports = {loginUser, registerUser}
