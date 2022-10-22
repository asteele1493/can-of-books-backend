//Tells mongoose what to do

'use strict';

//need our book model

const Book = require('../models/book');

const getBooks = async(request, response, next) => {
  try{
  //books variable is going to hold all of our books in our database
  //passing in an empty object tells mongoose to get all the documents from the database.
  const books = await Book.find({});
  response.status(200).send(books);
  }
  catch(error) {
    console.log(error);
    next(error);
  }
}

module.exports = getBooks;