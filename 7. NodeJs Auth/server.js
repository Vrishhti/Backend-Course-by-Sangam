require('dotenv').config();

const express= require('express');
const connectToDB = require('./DB/db')
const app = express();
connectToDB();


const PORT= process.env.PORT||3000;

app.listen(PORT, ()=>{
    console.log('server is running on port', `${PORT}`)
})