const mongoose = require('mongoose');
require ('dotenv').config();
const connectToDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected')
    }
    catch(e){
        console.log('error while connecting', e)
        process.exit(1);
    }
}

module.exports= connectToDB;