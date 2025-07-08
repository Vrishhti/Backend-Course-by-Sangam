const Product = require('../models/product')

const insertSampleProducts = async(req,res)=>{
    try{
        const sampleProducts =
        [
            {
              name: "Wireless Mouse",
              category: "Electronics",
              price: 799,
              inStock: true,
              tags: ["computer", "accessory", "wireless"]
            },
            {
              name: "Yoga Mat",
              category: "Fitness",
              price: 1299,
              inStock: true,
              tags: ["exercise", "mat", "yoga"]
            },
            {
              name: "Ceramic Mug",
              category: "Kitchenware",
              price: 349,
              inStock: false,
              tags: ["mug", "ceramic", "coffee"]
            },
            {
              name: "Bluetooth Speaker",
              category: "Electronics",
              price: 2499,
              inStock: true,
              tags: ["music", "portable", "bluetooth"]
            },
            {
              name: "Notebook Set",
              category: "Stationery",
              price: 499,
              inStock: true,
              tags: ["writing", "notebook", "office"]
            },
            {
              name: "LED Desk Lamp",
              category: "Electronics",
              price: 1599,
              inStock: false,
              tags: ["lamp", "LED", "desk"]
            },
            {
              name: "Running Shoes",
              category: "Footwear",
              price: 2999,
              inStock: true,
              tags: ["shoes", "running", "sports"]
            }
          ]   
          const result= await Product.insertMany(sampleProducts)
          res.status(201).json({
            success:true,
            data:`Inserted $(result.length) sample products`,
          })
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}

const getProductStats = async(req,res)=>{
    try{
        //stage 1
        const result = await Product.aggregate([
            {
                $match:{
                    inStock:true,
                price:{
                    $gte:100
                }                    
                        }
            },

            //stage 2 : group documents
            //roups the filtered documents by the category field
             {
                $group:{
                    _id: "$category",
                    avgPrice:{
                        $avg: "$price"
                    },
                    count:{
                        $sum:1,                    }
                }
             }
        ])
        res.status(201).json({
            success:true,
            data:result
          })
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}

const getProductAnalysis = async(req,res)=>{
    try{
        const result = await Product.aggregate([
            {
                $match:{
                    category: 'Electronics'
                }
            },
            {
                $group:{
                    _id: null,
                    totalRevenue:{
                        $sum: "$price"
                    },
                    averagePrice:{
                        $avg:"$price"
                    },
                    maxProductPrice:{
                        $max:"$price"
                    },
                    minProductPrice:{
                        $min:"$price"
                    },
                }
            },
            {

                //0 is passed when you want to exclude the given field. 1 is passed when u want to inlcude it
                $project:{
                    _id:0,
                    totalRevenue:1,
                    averagePrice:1,
                    maxProductPrice:1,
                    minProductPrice:1,
                    priceRange:{
                        $substract:["$maxProductPrice", "$minProductPrice"]
                    }
                }
            }
            
        ])
        res.status(200).json({
            success:true,
            result:result
        })
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}

module.exports= {insertSampleProducts, getProductStats, getProductAnalysis}