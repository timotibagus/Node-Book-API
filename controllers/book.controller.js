const Book = require('../models/book.model');

// GET - get all books
const getBook = async (req, res) => {
	try {
		const books = await Book.find();
		res.json(books);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// GET - get book by id
const getBookById = async (req, res) => {
	const { id } = req.params;
	try {
		const book = await Book.findById(id);
		if (book == null) {
			return res.status(404).json({ message: 'Book not found' });
		}
		res.json(book);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// POST - create a new book
const createBook = async (req, res) => {
	const { title, author, year } = req.body;
	const book = new Book({
		title,
		author,
		year
	});
	try {
		const newBook = await book.save();
		res.status(201).json(newBook);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// PATCH - update book data
const updateBook = async (req, res) => {
	const { id } = req.params;
	const { title, author, year } = req.body;

	try {
		const updatedBook = await Book.findByIdAndUpdate(id, {
			title,
			author,
			year
		});
		res.json({ message: 'Updated', data: updateBook });
	} catch (error) {
		res.json({ message: error.message });
	}
};

// DELETE - remove book by id
const deleteBook = async (req, res) => {
	const { id } = req.params;
	try {
		await Book.findByIdAndDelete(id);
		res.json({ message: 'Deleted' });
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { getBook, createBook, getBookById, updateBook, deleteBook };
