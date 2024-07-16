const express = require("express");
const {
  getAllAuthor,
  getAuthorById,
  addAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controller/authorController");
const router = express.Router();

// get all books
router.get("/", getAllAuthor);

//   get a book by id
router.get("/:authorId", getAuthorById);
// add  a book
router.post("/", addAuthor);

// update a book by id
router.patch("/:authorId", updateAuthor);

// delete a movie by id
router.delete("/:authorId", deleteAuthor);

module.exports = router;
