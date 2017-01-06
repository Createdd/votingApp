'use strict';
//const config = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = function(req,res,next) {
  let token = req.body.token || req.param('token') || req.headers['x-access-token'];
  
};
