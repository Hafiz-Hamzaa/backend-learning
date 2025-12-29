// ------------- Database Queries Handle

const db = require('../utils/database'); // database connection pool

// CRUD Functions
// Get All Books
exports.getAllBooks = async () => {
    const [rows] = await db.query('SELECT * FROM books');
    return rows;
};

// Add new Book
exports.addBook = async (title, author, genre, price) => {
    await db.query(
        'INSERT INTO books (title, author, genre, price) VALUES (?, ?, ?, ?)',
        [title, author, genre, price]
    );
};

// Get Book by ID
exports.getBookById = async (id) => {
    const [rows] = await db.query('SELECT * FROM books WHERE id = ?', [id]);
    return rows[0];
};

// Update Book
exports.updateBook = async (id, title, author, genre, price) => {
    await db.query(
        'UPDATE books SET title = ?, author = ?, genre = ?, price = ? WHERE id = ?',
        [title, author, genre, price, id]
    );
};

// Delete Book
exports.deleteBook = async (id) => {
    await db.query('DELETE FROM books WHERE id = ?', [id]);
};
