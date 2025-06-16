const mongoose = require ('mongoose');

const connectToDB= async()=>{
    try{
        await mongoose.connect
        console.log(' mongoDB is connected successfully')
    }
    catch(error){
        console.log('error has occured in the mongoDB connection', error)
        process.exit(1)
    }
}

module.exports= connectToDB