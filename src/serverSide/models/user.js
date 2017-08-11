'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = _mongoose2.default.Schema({
  local: {
    email: String,
    password: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  }
});

userSchema.methods.generateHash = function generateHash(password) {
  return _bcryptNodejs2.default.hashSync(password, _bcryptNodejs2.default.genSaltSync(8), null);
};

userSchema.methods.validPassword = function validPassword(password) {
  return _bcryptNodejs2.default.compareSync(password, this.local.password);
};

exports.default = _mongoose2.default.model('User', userSchema);