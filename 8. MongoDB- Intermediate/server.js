require('dotenv').config()

const express= require('express')
const mongoose = require('mongoose');
const productRoutes = require('./routes/product-routes')
const app = express();

//connect to out database
mongoose.connect(process.env.MONGOURI)
.then(()=> console.log("mongodb connected successfully"))
.catch((e)=> console.log(e));

//middlewares
app.use(express.json());

app.use('/products', productRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server is now running on port ${process.env.PORT}`)
});