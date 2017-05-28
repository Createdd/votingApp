// load the things we need
const mongoose = require('mongoose');

// define the schema for our user model
const userSchema = mongoose.Schema({
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String,
  },
});

module.exports = mongoose.model('User', userSchema);
