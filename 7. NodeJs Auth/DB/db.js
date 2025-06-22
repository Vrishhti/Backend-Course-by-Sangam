
require('dotenv').config();

const mongoose = require('mongoose');
const connectToDB = async()=>{
    console.log("MONGO_URI:", process.env.MONGO_URI);

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