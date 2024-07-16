const Book = require("../models/bookModel");

const getAllbook = async (req, res) => {
  const books = await Book.find({});
  res.json(books);
};

const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.bookId).exec();
  res.json(book);
};

const addBook = async (req, res) => {
  const data = req.body;
  const book = new Book(data);
  await book.save();
  res.json(book);
};

const updateBook = async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(
    req.params.bookId,
    req.body,
    { new: true }
  );
  res.json(updatedBook);
};

const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.bookId);
  res.send("Deleted");
};

module.exports = {
  getAllbook,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
