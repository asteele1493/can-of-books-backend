'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

//connects to our mongoose db

mongoose.connect(process.env.MONGOCONNECT, { useNewUrlParser: true, useUnifiedTopology: true });

//this is where the connection happens
//obj relation that is representing that connection

const db = mongoose.connection;

//this is turning the db on and checking for any errors
db.on('error', console.error.bind(console, 'connection error:'));

//then, if my db is connected properly, I should see this console log after the listening on port 3001 console log.
db.once('open', function () {
  console.log('Mongoose is connected')
});

const Book = require('../models/book');

//create a function that seeds the database
//use built in mongoose methods ; don't know how long it'll take. use await and async

async function seed() {
  console.log('seeding database');
  await Book.create({
    title: 'To Kill a Mockingbird',
    description: 'Harper Lee',
    status: 'Lent to a friend',
    favorite: true,
    yearReleased: 1960,
    image: 'https://images.unsplash.com/photo-1624065935512-0f2e3b2f5c5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
  });

  await Book.create({
    title: 'Fight Club',
    description: 'Chuck Palahniuk',
    status: 'In my library',
    favorite: false,
    yearReleased: 1996,
    image: 'https://images.unsplash.com/photo-1586972246803-d2bdc4006378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  });

  await Book.create({
    title: 'Kitchen Confidential',
    description: 'Anthony Bourdain',
    status: 'Forever in my heart',
    favorite: true,
    yearReleased: 2000,
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  });

  console.log('Done seeding');
  mongoose.disconnect();
}

seed();
