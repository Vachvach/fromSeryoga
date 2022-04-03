const Book = require('./Book.schema')
const User = require('./User.schema')

class BookService {
    async createByOwner (book, id) {
        const newBook = await Book.create({...book, ownerId: id})
        return newBook
    }
    async getAllBooks() {
        const books = await Book.find().populate('ownerId')
        return books
    }
    async addBook(book, id) {
        const {title} = book
        const foundBook = await Book.findOne({title:title})
        const user = await User.findOne({_id:id})
        if(!foundBook || !user) {
            throw new Error('Not found this book or user-id')
        }
        user.books.push(foundBook)
        await user.save()
        return user.books
    }
}

module.exports = new BookService()