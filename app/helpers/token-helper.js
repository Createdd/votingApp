'use strict';
const config = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = function(req,token) {
  if(token) {
    jwt.verify(token, config.privateKey, (err,decoded) => {
      if(err) {
        return false;
      } else {
        return decoded;
      }
    });
  }
};
