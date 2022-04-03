const BookService = require('./Book.service')


class BookController {
    async createByOwner(req, res) {
        try {
            const newBook = await BookService.createByOwner(req.body, req.params.id)
            return res.json(newBook)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getAll(req, res) {
        try {
            const books = await BookService.getAllBooks()
            return res.json(books)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async addBook(req, res) {
        try {
            const addedBook = await BookService.addBook(req.body, req.params.id)
            return res.json(addedBook)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new BookController()