'use strict';
const mongoose = require('mongoose');
const validate = require('mongoose-validator');

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
