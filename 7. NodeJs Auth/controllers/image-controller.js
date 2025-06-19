const Image = require('../models/image')
const {uploadToCloudinary}= require('../helpers/cloudinaryHelpers')
const uploadImage= async(req,res)=>{
    try{
        //checkif file is missing in req obj
        if(!req.file){
            return res.status(400).json({
                sucess:false,
                message:'File is required, Please uplaod an image'
            })
        }

        //upload to cloudinary
        const {url, publicId}= await uploadToCloudinary(req.file.path)

        //store the img url and public id w the uploaded user id in the db
        const newUploadedImg= new Image({
            url,
            publicId,
            uploadedBy: req.userInfo.userId
        })
        await newUploadedImg.save()

        res.status(201).json({
            success:true,
            messgae:'Image uploaded successfully',
            image: newUploadedImg
        })
    }
    catch(e){
        console.error(e);
        res.status(500).json({
            message:'error whole uploading image, somthing went wrong!',
            success:false
        })
    }
}

module.exports={uploadImage}