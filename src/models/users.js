const {Schema,model} = require('mongoose')

const userSchema = new Schema(
{
    Nombre: {
        userName:String,
        required:true,
        trim:true,
        unique:true
    },
    
},{timestamps})

model('users', userSchema)