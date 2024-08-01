const Author = require("../models/authorModel");
const Book = require("../models/bookModel");

const getAllAuthor = async (req, res) => {
  const authors = await Author.find({});
  res.json(authors);
};

const getAuthorById = async (req, res) => {
  const author = await Author.findById(req.params.authorId).exec();
  const books = await Book.find({ author: author._id });
  res.json({ author, books });
};

const addAuthor = async (req, res) => {
  const data = req.body;
  const author = new Author(data);
  await author.save();
  res.json(author);
};

const updateAuthor = async (req, res) => {
  const updatedAuthor = await Author.findByIdAndUpdate(
    req.params.authorId,
    req.body,
    { new: true }
  );
  res.json(updatedAuthor);
};

const deleteAuthor = async (req, res) => {
  await Author.findByIdAndDelete(req.params.authorId);
  res.send("Deleted");
};

module.exports = {
  getAllAuthor,
  getAuthorById,
  addAuthor,
  updateAuthor,
  deleteAuthor,
};
