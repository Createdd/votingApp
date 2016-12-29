'use strict';
var User = require('../models/user');
const _ = require('underscore');

module.exports = function(express,app) {
  let router = express.Router();
  router.get('/', (req, res) => {
    User.find({}, (err,users) => {
      if(err) {
        return res.status(500).send('Error in Request');
      }
      if(users) {
        res.send(users);
      } else {
        res.status(404).send('No Users found');
      }
    });
  });
  /*router.get('/:id', (req,res) => {
    let userId = req.params.id;

  });*/
  router.post('/', (req,res) => {
    let validAttributes = _.pick(req.body, 'username', 'email', 'password');
    let newUser = new User (validAttributes);
    newUser.save((err,user) => {
      if(err){
        res.status(500).json({success: false, message: err});
      } else {
        res.json(user);
      }
    });
  });
  return router;
};
