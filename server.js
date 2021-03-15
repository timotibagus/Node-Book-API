const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./routes/book.route');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database Initialize
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to database'));

// Server route
app.use('/books', bookRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
