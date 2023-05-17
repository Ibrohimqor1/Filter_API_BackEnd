const { timeStamp } = require("console");
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    default: 1,
  },
  count: {
    type: String,
    required: true,
    default: 1,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  oldPrice: {
    type: String,
    trim: true,
  },
},
{ timeStamp : true }
);
module.exports = mongoose.model("Todo", todoSchema)
