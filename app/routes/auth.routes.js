'use strict';
const User = require('../models/user');
const config = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = function(express,app) {
  let router = express.Router();

  router.post('/authenticate', (req,res) => {
    User.findOne({
      email: req.body.email.toLowerCase()})
      .select('username email password')
      .exec((err, user) => {
        console.log(user);
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
        res.json({
          success:true,
          message: 'successful login',
          token: token
        });
      });
  });
  return router;
};
