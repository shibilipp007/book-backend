const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  author: String,
  language: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
