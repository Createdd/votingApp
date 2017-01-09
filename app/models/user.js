'use strict';
const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const bcrypt = require('bcrypt');

//----------Validations
let usernameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3,50],
    message: 'Name should have between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
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
  lowercase_name: {
    type: String,
    unique: true,
    select: false
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

//----------Password Encryption
userSchema.pre('save', function(next) {
  let user = this;
  if(!user.isModified('username') || user.isNew){
    user.lowercase_name = user.username.toLowerCase();
  }
  if(!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err,hash) => {
      if(err) {
        return console.log('hashing error: '+err);
      }
      user.password = hash;
      next();
    });
  });
});
userSchema.methods.comparePassword = function(password) {
  let user = this;
  return bcrypt.compareSync(password, user.password);
};


let User = mongoose.model('User',userSchema);
module.exports = User;
