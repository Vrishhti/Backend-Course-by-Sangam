const Image = require('../models/image')
const {uploadToCloudinary}= require('../helpers/cloudinaryHelpers')
const cloudinary = require('../config/cloudinary')
const uploadImage= async(req,res)=>{
    try{
        //checkif file is missing in req obj
        if(!req.file){
            return res.status(400).json({
                success:false,
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

const fetchImages= async(req,res)=>{
    try{

    }
    catch{
        
    }
}

const deleteImage= async(req,res)=>{
    try{
        const getIdOfImgToBeDeleted = req.params.id;

        //user can only delete images uploaded by him. so get current user trying to delete
        const userId = req.userInfo.id

        const image = await Image.findById(getIdOfImgToBeDeleted)

        if(!image){
            return res.status(400).json({
                success:false,
                message:"Can't find this image"
            })
        }

        //check if the image is uplaoded by the user who is trying to delete
        if(image.uploadedBy.toString() !== userId){
            return res.status(400).json({
                success:false,
                message:"You are not authorized to delete this image"
            })
        }


        //delete image form cloudinary storage
        await cloudinary.uploader.destroy(image.publicId)

        //delete  from mongodb db
        await Image.findByIdAndDelete(getIdOfImgToBeDeleted);

        res.status(200).json({
            sucess: true,
            message:'Image deleted successfully'
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

module.exports= {uploadImage, deleteImage}