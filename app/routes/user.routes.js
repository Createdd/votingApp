'use strict';
var User = require('../models/user');
const _ = require('underscore');

module.exports = function(express,app) {
  let router = express.Router();

  //----------Find existing users
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

  //----------Create/save users
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

  //----------Find existing user with id
  router.get('/:id', (req,res) => {
    let userId = req.params.id;
    User.findById({_id: userId}, (err, user) => {
      if(err) {
        res.status(500).send('Error in Request');
        return console.error(err);
      } else {
        if(user){
          res.json(user);
        } else {
          res.status(404).send('User not found');
        }
      }
    });
  });

  //----------update User
  router.put('/:id', (req,res) => {
    let userId = req.params.id;
    let validAttributes = _.pick(req.body, 'username', 'email', 'password');
    User.findById({_id: userId}, (err, user) => {
      if(err) {
        console.log(err);
        return res.status(500).send('Error in Request');
      }
      if(user){
        if(validAttributes.username) user.username = validAttributes.username;
        if(validAttributes.email) user.email = validAttributes.email;
        if(validAttributes.password) user.password = validAttributes.password;
      } else {
        return res.status(404).send('Cannot find User');
      }
      user.save((err,user) => {
        if(err){
          console.log(err);
          res.status(500).send('Cannot update user');
        } else {
          res.json({success:true, message: 'User updated'});
        }
      });
    });
  });

  //----------delete user
  router.delete('/:id', (req,res) => {
    let userId = req.params.id;
    User.remove({_id: userId}, err => {
      if(err) {
        console.log(err);
        res.status(500).send('Cannot delete user');
      }
      res.send('User deleted');
    });
  });

  return router;
};
