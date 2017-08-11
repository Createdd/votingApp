'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var AnswerSchema = new Schema({
  answer: {
    type: String,
    unique: true
  },
  votes: {
    type: Number,
    default: 0
  }
});

AnswerSchema.method('vote', function voting(vote, cb) {
  this.votes += 1;
  this.parent().save(cb);
});

var PollSchema = new Schema({
  question: {
    type: String,
    unique: true
  },
  answers: [AnswerSchema]
});

var Poll = _mongoose2.default.model('Poll', PollSchema);
exports.default = Poll;