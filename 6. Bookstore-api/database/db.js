const mongoose = require ('mongoose');

const connectToDB= async()=>{
    try{
        await mongoose.connect('mongodb+srv://vrishhti:h9fp3Ztk0zis1X0m@cluster0.a8s3pi3.mongodb.net/')
        
        console.log(' mongoDB is connected successfully')
    }
    catch(error){
        console.log('error has occured in the mongoDB connection', error)
        process.exit(1)
    }
}

module.exports= connectToDB