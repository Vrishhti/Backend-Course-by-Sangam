const express = require ('express');
const app = express();

//middleware
app.use(express.json())

let books =[
    {
        id:'1',
        title:'book 1'
    },
     {
        id:'2',
        title:'book 2'
    },

]


app.get('/', (req,res)=>{
    res.json({
        message:"welcome to our bookstore"
    })

    // res.send("welcomr to our bookstore")
})

app.get('/get', (req,res)=>{
    res.json(books)
})

app.get('/get/:id', (req,res)=>{
    const book = books.find(item=> item.id === req.params.id)
    if(book){
        res.status(200).json(book)
    }
    else{
        res.status(400).json({
            message:"book not found, please try with different book id"
        })
    }
    
})

//add a new book (post req)
app.post('/add', (req,res)=>{
    const newBook= {
        id:books.length+1,
        title: `book ${books.length + 1}`,
    }
    books.push(newBook)
    res.status(200).json( {
        data: books,
        message: "new book added successfully"
    })
})


//update a book
app.put('/update/:id', (req, res) => {
    const findCurrentBook = books.find(item => item.id === req.params.id);

    if (findCurrentBook) {
        findCurrentBook.title = req.body.title || findCurrentBook.title;

        res.status(200).json({
            message: `Book with id ${req.params.id} updated successfully`
        });
    } else {
        res.status(404).json({
            message: 'Book not found'
        });
    }
});

//delete req

app.delete('/delete/:id', (req, res) => {
    const index = books.findIndex(item => item.id === req.params.id);

    if (index !== -1) {
        const deletedBook = books.splice(index, 1); // remove only 1 book
        res.status(200).json({
            message: `Book with id ${req.params.id} successfully deleted`,
            data: deletedBook
        });
    } else {
        res.status(400).json({
            message: 'Book not found / could not be deleted'
        });
    }
});



const PORT=3000;
app.listen(PORT, ()=>{
        console.log("port is running on", `${PORT}`)
})