const{Router} = require('express')
const router = Router()
const{getBooks, addBook, getBook,deleteBook, updateBook} = require('../controllers/books.controllers')

router.route('/').get(getBooks)
.post(addBook)

router.route('/:id')
.get(getBook)
.delete(deleteBook)
.put(updateBook)


module.exports = router;