const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=>{
    console.log("auth middleware is called");
    const authHeader = req.headers["authorization"];
    console.log(authHeader)
    const token = authHeader && authHeader.split(" ")[1]


if(!token){
    return res.status(400).json({
        success:false,
        message:"Access denied, no token provided"
    })
}

//decode this token
try{
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY)
    console.log(decodedTokenInfo);

    req.userInfo = decodedTokenInfo
    next(); 
}
catch(e){
    return res.status(400).json({
        success:false,
        message:"Access denied, no token provided",e
    })
}
}


const isAdminUser= (req,res,next)=>{
    if(req.userInfo.role !=='admin'){
        return res.status(400).json({
            success: false,
            message: "user doesnt have admin rights"

        })
    }

    next()
}



module.exports= {authMiddleware, isAdminUser};