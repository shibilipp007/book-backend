const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  Name: String,
  nationality: String,
});

const Author = mongoose.model("author", authorSchema);

module.exports = Author;
