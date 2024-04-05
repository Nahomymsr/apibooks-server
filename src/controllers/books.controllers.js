const books = require('../models/books');
const booksModel = require('../models/books')

const booksCtrl = {}

booksCtrl.getBooks = (async (req,res) => { 
    try{
    const books = await booksModel.find();
    res.json(books)
}
catch(error){
    console.log(error)
}
})

booksCtrl.addBook = (async (req,res) =>{

    try{
    const {title , author} = req.body
   const newBook= new books({

            title: title,
            author:author

    })

    res.send(console.log(newBook))
    await newBook.save();
}
catch(error){
    console.log(error)
}

})

booksCtrl.getBook =(async (req,res)=>{
try{


    const bookId  = await books.findById(req.params.id)
    res.json(bookId)
}
catch(error){
    console.log(error)
}

})

booksCtrl.deleteBook = (async (req,res)=>{
    try{
    await books.findByIdAndDelete(req.params.id)
    res.json({message:'Libro borrado'})
}
catch(error){
    console.log(error)
}
})

booksCtrl.updateBook = (async (req,res)=>{

    try
    {
    const {title,author}= req.body
    const bookId  = await  books.findOneAndUpdate({_id:req.params.id},{title,author})
    res.json({message:'Libro actualizado'})
    }
    catch(error)
    {
    console.log(error)
    }

})


module.exports = booksCtrl