'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;


//keyword new tells us we are creating a new instance of a class
//this is our object relational mapping
const bookSchema = new Schema({
  title: String,
  description: String,
  status: String,
  favorite: Boolean,
  yearReleased: Number,
  image: String
});

//make a model of our schema, name it which will turn it into the name of the collection in Mongo.db w/ an s at the end. Pass it the shape of the data which will always be your schema.

const Book = mongoose.model('Book', bookSchema);

module.exports = Book; 