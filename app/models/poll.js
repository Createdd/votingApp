'use strict';
const mongoose = require('mongoose');
const validate = require('mongoose-validator');

//----------Validations
let questionValidator = [
  validate({
    validator: 'isLength',
    arguments: [6,250],
    message: 'Question should have between {ARGS[0]} and {ARGS[1]} characters'
  })
];
let choicesValidator = [
  validate({
    validator: 'isLength',
    arguments: [2,30],
    message: 'The Range of Choices is between {ARGS[0]} and {ARGS[1]}'
  })
];


//----------User Schema
var pollSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
    validate: questionValidator
  },
  choices: {
    type: Object,
    required: true,
    validate: choicesValidator
  }
});
let Poll = mongoose.model('Poll', pollSchema);
module.exports = Poll;
