const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: String,
  thumbnail: String,
  nationality: String,
  description: String,
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
