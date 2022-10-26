//Tells mongoose what to do

'use strict';

//need our book model

const Book = require('../models/book');
const Handlers = {};

Handlers.getBooks = async(request, response, next) => {
  try{
  //books variable is going to hold all of our books in our database
  //passing in an empty object tells mongoose to get all the documents from the database.
  const books = await Book.find({});
  response.status(200).send(books);
  }
  catch(error) {
    error.customMessage = 'Could not get books: ';
    console.log(error.customMessage + error);
    next(error);
  }
}

Handlers.createBooks = async(request, response, next) => {
  try{
  const books = await Book.create(request.body);
  response.status(201).send(books);
  }
  catch(error) {
    error.customMessage = 'Could not create new book: ';
    console.log(error.customMessage + error);
    next(error);
  }
}

module.exports = Handlers;


//Notes to look up: check customMessage syntax. Do we need to declare?