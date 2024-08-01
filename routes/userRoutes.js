const express = require("express");
const {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const router = express.Router();

// get all books
router.get("/", getAllUser);

//   get a book by id
router.get("/:userId", getUserById);
// add  a book
router.post("/", addUser);

// update a book by id
router.patch("/:userId", updateUser);

// delete a movie by id
router.delete("/:userId", deleteUser);

module.exports = router;
