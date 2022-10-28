'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Handlers = require('./modules/handlers');

const app = express();

app.use(cors());

//ensures we are able to send and receive in json format
app.use(express.json());

const PORT = process.env.PORT || 3002;

//mongoose

// const { alignPropType } = require("react-bootstrap/esm/types");

//go to class repo and in the readme, htere are instructions on how to bring in mongoose
//connecting to mongoose database
mongoose.connect(process.env.MONGOCONNECT, {useNewUrlParser: true, useUnifiedTopology: true});

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

app.get('/books', Handlers.getBooks);

app.post('/books', Handlers.createBooks);

app.delete('/books/:id', Handlers.deleteBooks);



app.listen(PORT, () => console.log(`listening on ${PORT}`));
