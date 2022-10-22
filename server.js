'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./modules/handlers');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

//mongoose

// const { alignPropType } = require("react-bootstrap/esm/types");

//go to class repo and in the readme, htere are instructions on how to bring in mongoose
//connecting to mongoose database
mongoose.connect('mongodb://localhost:27017/books-database', {useNewUrlParser: true, useUnifiedTopology: true});

//this is where the connection happens
//obj relation that is representing that connection

const db = mongoose.connection;

//this is turning the db on and checking for any errors
db.on('error', console.error.bind(console, 'connection error:'));

//then, if my db is connected properly, I should see this console log after the listening on port 3001 console log.
db.once('open', function() {
  console.log('Mongoose is connected')
});


app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/books', getBooks);



app.listen(PORT, () => console.log(`listening on ${PORT}`));
