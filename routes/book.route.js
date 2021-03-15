const express = require('express');
const {
	getBook,
	createBook,
	getBookById,
	updateBook,
	deleteBook
} = require('../controllers/book.controller');
const router = express.Router();

// Get all book
router.get('/', getBook);

// Get one book
router.get('/:id', getBookById);

// Create one book
router.post('/', createBook);

// Update one book
router.patch('/:id', updateBook);

// Delete one book
router.delete('/:id', deleteBook);

module.exports = router;
