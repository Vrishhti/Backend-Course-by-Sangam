const express = require('express');
const app= express();

const requestTimeStamplogger= (req,res,next)=>{
    const timeStamp= new Date().toISOString();

    console.log(`${timeStamp} from ${req.method} to ${req.url}1` )
        // next();

};

app.use(requestTimeStamplogger);

app.get('/', (req,res)=>{
    res.send("hello world")
})

const port= 3000;
app.listen(port,()=>{
    console.log("sever running on port" , port)
})
