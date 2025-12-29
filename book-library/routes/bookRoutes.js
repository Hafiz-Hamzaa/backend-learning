// ----------- Express Routes Handle and Function Call

const express = require('express');
const router = express.Router();
const Book = require('../models/book'); // Model import

// --------- Routes Define
// Home Page → List all books
router.get('/', async (req, res) => {
    const books = await Book.getAllBooks();
    res.render('index', { books });
});

// Add Book Form
router.get('/add', (req, res) => {
    res.render('add');
});

// Add Book Submit
router.post('/add', async (req, res) => {
    const { title, author, genre, price } = req.body;
    await Book.addBook(title, author, genre, price);
    res.redirect('/');
});

// Edit Book Form
router.get('/edit/:id', async (req, res) => {
    const book = await Book.getBookById(req.params.id);
    res.render('edit', { book });
});

// Update Book Submit
router.post('/edit/:id', async (req, res) => {
    const { title, author, genre, price } = req.body;
    await Book.updateBook(req.params.id, title, author, genre, price);
    res.redirect('/');
});

// Delete Book
router.post('/delete/:id', async (req, res) => {
    await Book.deleteBook(req.params.id);
    res.redirect('/');
});


module.exports = router;
