const express = require('express');
    const app = express();

    app.get("/", (req,res)=>{
        res.send("welcome to home")
    })

     app.get("/products", (req,res)=>{
        const products =[
            {
                id: 1,
                label: 'prod1'
            },
            {
                id: 2,
                label: 'prod2'
            },
            {
                id: 3,
                label: 'prod3'
            }
        ]
        res.json(products);
    })


    //dynamic route 
    app.get('/products/:id', (req,res)=>{
        const productId= parseInt (req.params.id)
        const products =[
            {
                id: 1,
                label: 'prod1'
            },
            {
                id: 2,
                label: 'prod2'
            },
            {
                id: 3,
                label: 'prod3'
            }
        ]
        
         const getSingProd = products.find(product=> product.id === productId)
         if(getSingProd){
        res.json(getSingProd)
    }
    else{
        res.status(400).send("prod not found!")
    }


    })

   

    const port = 3000;
    app.listen(port, ()=>{
        console.log("listening at", `${port}`)
    })