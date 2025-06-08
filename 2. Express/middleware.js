const express= require('express');
const app=express();

const Middleware=(req,res,next)=>{
    console.log('middleware ran');
    next();
};

app.use(Middleware)


app.get('/', (req,res)=>{
    res.send('home')
})
app.get('/about', (req,res)=>{
    res.send('about')
})


const port=3000
app.listen(port, ()=>{
    console.log('running')
})
