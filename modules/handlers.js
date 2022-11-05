//Tells mongoose what to do

'use strict';

//need our book model

const Book = require('../models/book');
const Handlers = {};


Handlers.getBooks = async(request, response, next) => {
  try{
  //books variable is going to hold all of our books in our database
  //passing in an empty object tells mongoose to get all the documents from the database.
  console.log(request.user.email);
  const books = await Book.find({ email : request.user.email });
  console.log(books);
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

  Handlers.deleteBooks = async(request, response, next) => {
    try{
      await Book.findByIdAndDelete(request.params.id);
      response.status(200).send('your book has been successfully deleted');
    }
    catch(error) {
      error.customMessage = 'Could not delete book: ';
      console.log(error.customMessage + error);
      next(error);
    }
}

Handlers.updateBook = async(request, response, next) => {
  try{
    const updatedBook = await Book.findByIdAndUpdate(request.params.id, request.body, { new: true });
    response.status(200).send(updatedBook);
  }
  catch(error) {
    error.customMessage = 'Could not updated book: ';
    console.log(error.customMessage + error);
    next(error);
  }
}

Handlers.getUsers = async(request, response) => {
  console.log('Getting the user.');
  response.send(request.user);
}

module.exports = Handlers;


