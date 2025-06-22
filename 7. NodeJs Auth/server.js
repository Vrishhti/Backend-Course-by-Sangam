require('dotenv').config();

const express= require('express');
const connectToDB = require('./DB/db')
const authRoutes = require('./routes/route')
const homeRoutes= require('./routes/home-routes')
const adminRoutes = require('./routes/admin-routes')
const uplaodImageRoutes = require('./routes/image-routes')
const app = express();
connectToDB();


const PORT= process.env.PORT||3000;

//middlewares
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/home', homeRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/uploadimage', uplaodImageRoutes)


app.listen(PORT, ()=>{
    console.log('server is running on port', `${PORT}`)
})