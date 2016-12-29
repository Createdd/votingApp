
'use strict';

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//----------Connect to DB
mongoose.connect('mongodb://test:test@ds141368.mlab.com:41368/votingapp');
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', () => {
  console.log('Connection to MongoDB successful!');
});

//----------Set other Router
const userRouter = require('./app/routes/user.routes')(express, app);

app.use('/api/users', userRouter);
app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port, function(){
  console.log(`Listening on: ${port}.`);
});
