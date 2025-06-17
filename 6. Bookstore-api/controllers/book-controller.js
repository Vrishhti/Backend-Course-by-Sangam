

const Book= require('../models/book')

const getAllBooks = async (req,res)=>{
    try{
        const allBooks= await Book.find({})
        if(allBooks){
            res.status(200).json({
                messgae:'book found ',
                success:true,
                data:allBooks
            })
        }
}
catch(e){
    console.log("error while finding books", e)
    res.status(500).json({
        message:"book not found",
        success:false,
        error:e.message

})

}

}
const getSingleBookById = async (req,res)=>{

     try{
        const currentBookId= req.params.id
        const singleBook = await Book.find(currentBookId)
        if(singleBook){
            res.status(200).json({
                messgae:'book found ',
                success:true,
                data:singleBook
            })
        }
}
catch(e){
    console.log("error while finding books", e)
    res.status(500).json({
        message:"book not found",
        success:false,
        error:e.message

})

}
    
}
const addNewBook = async (req,res)=>{
    try{
        const newBookFormData= req.body;
        const newCreatedBook = await Book.create(newBookFormData)
        if(newCreatedBook){
            res.status(200).json({
                messgae:'book successfully created',
                success:true,
                data:newBookFormData, newCreatedBook
            })
        }
}
catch(e){
    console.log("error while adding new book", e)
    res.status(500).json({
        message:"new book not added",
        success:false,
        error:e.message

})

}
    
}
const updateBook = async (req,res)=>{

     try{
        const currentBookId= req.params.id
        const updatedBookFormData= req.body
        const updatedBook = await Book.findByIdAndUpdate(currentBookId,updatedBookFormData,{
            new:true,
        })
        if(updatedBook){
            res.status(200).json({
                messgae:'book updated ',
                success:true,
                data:updatedBook
            })
        }
}
        catch(e){
    console.log("error while finding books", e)
    res.status(500).json({
        message:"book not updated",
        success:false,
        error:e.message

})

}
    
    
    
}
const deleteBook = async (req,res)=>{

     try{
        const currentBookId= req.params.id
        const singleBook = await Book.findByIdAndDelete(currentBookId)
        if(singleBook){
            res.status(200).json({
                messgae:'book deleted ',
                success:true,
            })
        }
}
        catch(e){
    console.log("error while finding books", e)
    res.status(500).json({
        message:"book not deleted",
        success:false,
        error:e.message

})

}
    
    
}

module.exports={getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook}