'use strict';
const config = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = function(req,res,next) {
  let token = req.body.token || req.param('token') || req.headers['x-access-token'];

  if(token) {
    jwt.verify(token, config.privateKey, (err,decoded) => {
      if(err) {
        return res.status(401).send('Failed to authenticate token');
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({
      success: false,
      message: 'No token provided'
    });
  }
};
