const express = require("express");
const {
  getAllbook,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controller/bookController");
const router = express.Router();

// get all books
router.get("/", getAllbook);

//   get a book by id
router.get("/:bookId", getBookById);

// add  a book
router.post("/", addBook);

// update a book by id
router.patch("/:bookId", updateBook);

// delete a movie by id
router.delete("/:bookId", deleteBook);

module.exports = router;
