const mongoose = require('mongoose')

console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI



mongoose.connect(URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

const connection = mongoose.connection;

connection.once('open', () => {console.log('Conexion con bbdd')});
