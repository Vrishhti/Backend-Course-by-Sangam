const cloudinary = require('../config/cloudinary');

const uploadToCloudinary = async(filePath)=>{
    try{
        const result = await cloudinary.uploader.upload(filePath);
        return {
            url: result.secure_url,
            publicid: result.public_id,

        }
    }
    catch(e){
        console.error('error while uploading file', error)
    }
}

module.exports= {uploadToCloudinary}