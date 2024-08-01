const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  language: String,
  description: String,
  publisher: String,
  publishedDate: Date,
  author: {
    type: mongoose.ObjectId,
    ref: "Author",
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
