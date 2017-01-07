'use strict';
const User = require('../models/user');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const authenticateRoute = require('../middleware/auth-middleware');


module.exports = function(express,app) {
  let router = express.Router();

  router.post('/authenticate', (req,res) => {
    if(!req.body.email || typeof req.body.email !== 'string') {
      res.status(400).send('Bad data request');
    }
    User.findOne({
      email: req.body.email.toLowerCase()})
      .select('username email password')
      .exec((err, user) => {
        if(err) {
          return res.status(500).send('An error while authenticating the user');
        } else if (!user) {
          return res.status(404).json({ success: false, message: 'User not found - authentication failed'});
        }
        let correctPassword = user.comparePassword(req.body.password);
        if(!correctPassword) {
          return res.json({success: false, message: 'Password incorrect - authentication failed'});
        }
        let payload = {
          username: user.username,
          email: user.email
        };
        let token = jwt.sign(payload, config.privateKey,{ expiresIn: '7d'});
        res.cookie('auth_token', token, {maxAge: 60480000, path: "/"})
          .json({success: true, message: 'Login successful'});
      });
  });
  router.delete('/authenticate', authenticateRoute, (req,res) => {
    if(req.decoded) {
      res.cookie('auth_token', false, {maxAge: 1, path: "/"});
      res.clearCookie('auth_token', {path: "/"});
      res.send('Logout successful');
    } else {
      res.status(400).send('No active session');
    }
  });
  return router;
};
