const express = require ('express');

const mongoose = require ('mongoose')
mongoose.connect(
"mongodb+srv://vrishhti:hOtQRl9fMvYNOlEn@cluster0.qakpfe5.mongodb.net/MongoDB-basics?retryWrites=true&w=majority"
).then(()=>
    console.log('db connected successfully'))
    .catch((e)=> console.log(e))

//Define Schema
    const UserSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number,
        isActive: Boolean,
        tags : [String],
        //if created at field is not given then by default the type will be the current data
        // else the date provided by user
        createdAt: {type :Date, default: Date.now}
    })

    //Create user model
    const User = mongoose.model('User', UserSchema)

    async function runQueryExample(){
        try{

            //create new user
            const newUser= await  User.create({
                name: 'Vrishhti',
                email: 'Vrishhti@gmail.com',
                age: '21',
                isActive: true,
                tags : ['Developer'],

            })

            console.log('user created', newUser)
        }
        catch(e){
            console.log('error', e)
        }
        finally{
            await mongoose.connection.close()
        }
    }

    runQueryExample()