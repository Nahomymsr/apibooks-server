const {Schema,model} = require('mongoose')

const bookSchema = new Schema(
{
    title: {
        type:String,
        required:true
    },

    author: String,

},{timestamps:true})

module.exports = model('books', bookSchema)