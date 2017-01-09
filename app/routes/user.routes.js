'use strict';
const User = require('../models/user');
const Poll = require('../models/poll');
const _ = require('underscore');
const authenticateRoute = require('../middleware/auth-middleware');

module.exports = function(express,app) {
  let router = express.Router();

  //----------Find existing users
  router.get('/', authenticateRoute, (req, res) => {
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
        if(err.code === 11000) {
          if(/username/.test(err.message) || /lowercase_name/.test(err.message)) {
            return res.status(500).json({success: false, message: 'Name is taken :('});
          } else {
            return res.status(500).json({success: false, message: 'Mail is taken :('});
          }
        } else {
          return res.status(500).json({
            success: false,
            message: 'Error occured',
            error: err.message
          });
        }
      } else {
        let displayUser = _.pick(user, '_id', 'username', 'email');
        console.warn(displayUser);
        res.json(displayUser);
      }
    });
  });

  //----------Find existing user with id
  router.get('/:id', authenticateRoute, (req,res) => {
    let userId = req.params.id;
    User.findById({_id: userId}, (err, user) => {
      if(err) {
        res.status(500).send('Error in request');
      }else if(!user) {
        return res.status(404).send("User not found");
      }
      res.json(user);
    });
  });

  //----------update User
  router.put('/:id', authenticateRoute, (req,res) => {
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
          return res.status(500).send('Cannot update user');
        } else {
          return res.json({success:true, message: 'User updated'});
        }
      });
    });
  });

  //----------delete user
  router.delete('/:id', authenticateRoute, (req,res) => {
    let userId = req.params.id;
    User.remove({_id: userId}, (err, obj) => {
      if(err) {
        return res.status(500).send('Cannot delete user');
      }
      if(obj.result.n === 0) {
        return res.status(404).send('User not found');
      } else {
        return res.send('User deleted');
      }
    });
  });

  //----------Find polls of user
  router.get('/:username/polls', (req,res) => {
    let username = req.params.username;
    if(typeof username !== 'string') {
      return res.status(400).send('username has to be a string!');
    }
    User.findOne({
      lowercase_name: username.toLowerCase()},
      (err,user) => {
        if(err) {
          return res.status(500).send('error in request');
        } else if(!user){
          return res.status(401).send('User is not in DB');
        }
        Poll.find({
          user_id: user._id},
          (err,polls) => {
            if(err) {
              return res.status(500).send('error in request');
            }
            res.json(polls);
          }
        );
      }
    );
  });

  return router;
};
