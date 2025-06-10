const express = require ('express');
const path = require('path');
const { title } = require('process');

const app= express();

//set view engine as ejs
app.set('view engine', 'ejs')

//set directory for views
app.set('views', path.join(__dirname, 'views'));

const product=[
    {
        id:1,
        title:'product1'
    },
    {
        id:2,
        title:'product2'
    },
    {
        id:3,
        title:'product3'
    }
]

app.get('/', (req,res)=>{
res.render('home', {title: 'Home', products:product});
})

app.get('/about', (req,res)=>{
    res.render('components/about', {title:'about'})
})


const port=3000
;app.listen(port, ()=>{
    console.log('running on', `${port}`)
})

