const isAdminUser= (req,res,next)=>{
    if(req.userInfo.role !=='admin'){
        return res.status(400).json({
            success: false,
            message: "user doesnt have admin rights"

        })
    }

    next()
}


module.exports=isAdminUser