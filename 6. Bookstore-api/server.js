require('dotenv').config()

const express = require('express');
const connectToDB= require('./database/db')
const bookRoutes= require('./routes/book-routes')
const app= express();
const PORT= process.env.PORT || 3000;


//connect to DB
connectToDB()

//middleware express.json
app.use(express.json())

//routes
// /api/books is the parent bookRoutes.route
//for eg for the delete thing to work the collective route would need to be
// /api/books/delete/:id
// where /delete/:id is the individual route
app.use('/api/books', bookRoutes)
app.listen(PORT, ()=>{
    console.log('server running on', `${PORT}`)
})
