const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  authors: { type: Array },
  description: { type: String },
  image: { type: String },
  link: { type: String },
});

const Books = mongoose.model("Books", BookSchema);
module.exports = Books;