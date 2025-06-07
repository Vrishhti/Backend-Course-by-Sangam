const express= require('express')
const app= express();

app.set('view engine')

app.get('/', (req, res)=>{
    res.send("home")
})

app.post('/api/data' , (req,res)=>{
    res.json({
        messgae:'data recieved',
        data:req.vody
    })
})

app.use(err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send('internal server error')
}
