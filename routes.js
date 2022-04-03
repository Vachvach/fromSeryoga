const express = require('express');
const router = new express.Router;
const UserController = require('./User.controller')
const BookController = require('./Book.controller')

// user routes
router.post('/users', UserController.create)
router.get('/users', UserController.getAll)
router.get('/users/:id', UserController.getOne)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)
// book routes
router.post('/books/create/:id', BookController.createByOwner)
router.get('/books', BookController.getAll)
router.post('/books/addBook/:id', BookController.addBook)

module.exports = router;