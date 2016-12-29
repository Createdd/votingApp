'use strict';
const mongoose = require('mongoose');
const validate = require('mongoose-validator');
let emailRegex = new RegExp('^([a-z0-9-_\.\!\#\$\%\&\'\*\+\/\=\?\^\`\{\|\}\~]+@(?:[a-z0-9\-]+)(?:\.[0-9a-z\-]+)+)$', 'i');

//----------Validations
let usernameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3,50],
    message: 'Name should have between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphaNumeric',
    passIfEmpty: false,
    message: 'Name should only contain alphanumeric characters'
  })
];
let emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Invalid Email'
  })
];
let passwordValidator = [
  validate({
    validator: 'isLength',
    arguments: [6,32],
    message: 'Password should have between {ARGS[0]} and {ARGS[1]} characters'
  })
];


//----------User Schema
var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: {
      unique: true
    },
    validate: usernameValidator
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: emailValidator
  },
  password: {
    type: String,
    required: true,
    select: false,
    validate: passwordValidator
  }
});
let User = mongoose.model('User',userSchema);
module.exports = User;
