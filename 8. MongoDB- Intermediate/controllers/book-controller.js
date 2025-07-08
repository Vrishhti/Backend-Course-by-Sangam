const express= require('express')
const Book = require('../models/book')
const Author=  require('../models/author')

const createAuthor = async(req,res)=>{
    try{
        const author = new Author(req.body)
        await author.save();
        res.status(204).json({
            success:true,
            data:author
        })
    }
    catch(e){
        console.log(e);
        res.status(50).json({
            succes:false,
            message:"some error occurred"
        })
    }
}


const createBook = async(req,res)=>{
    try{
        const book = new Book(req.body)
        await book.save();
        res.status(204).json({
            success:true,
            data:book
        })
    }
    catch(e){
        console.log(e);
        res.status(50).json({
            succes:false,
            message:"some error occurred"
        })
    }
}

const getBooksWithAuthor= async(req,res)=>{
    try{
        const book = await Book.findById(req.params.id).populate('author')
        if(!book){
            return res.status(404).json({
                success:false,
                data: book
            })
        }

        return res.status(204).json({
            succesS:true,
            mess
        })
    }
    catch(e){
        console.log(e);
        res.status(50).json({
            succes:false,
            message:"some error occurred"
        })
    }
}

module.exports={createAuthor, createBook, getBooksWithAuthor}