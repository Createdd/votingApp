'use strict';
const User = require('../models/user');
const Poll = require('../models/poll');
const _ = require('underscore');
const authenticateRoute = require('../middleware/auth-middleware');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

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
            return res.status(500).json({
              success: false,
              message: 'Name is taken :('});
          } else {
            return res.status(500).json({
              success: false,
              message: 'Mail is taken :(',
              error: err.message
            });
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
        if(user.username !== req.decoded.username) {
          return res.status(401).send('You cannot update other profiles');
        }
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
          let payload = {
            username: user.username,
            email: user.email
          };
          let token = jwt.sign(payload, config.privateKey,{ expiresIn: '7d'});
          res.cookie('auth_token', false, {maxAge: 1, path: "/"});
          res.clearCookie('auth_token', {path: "/"});
          res.cookie('auth_token', token, {maxAge: 60480000, path: "/"})
            .json({success: true, message: 'User has been updated'});
        }
      });
    });
  });

  //----------delete user
  router.delete('/:id', authenticateRoute, (req,res) => {
    let userId = req.params.id;
    User.findOne(
    {username: req.decoded.username},
    (err, user) => {
      if(err) {
        return res.status(500).send('Error in request');
      } else if(!user) {
        return res.status(404).send('User not found');
      } if(userId !== user._id) {
        return res.status(401).send('Cannot delete other account');
      }
      User.remove(
      {_id: userId},
      (err,obj) => {
        if(err || obj.n < 1) {
          return res.status(500).send('Error removing account');
        }
        Poll.remove(
        {_id: userId},
        (err,obj) => {
          if(err || obj.n >= 1) {
            return res.status(500).json({
              success:false,
              message: 'Could not delete poll'
            });
          }
          res.cookie('auth_token', false, {maxAge: 1, path: "/"});
          res.clearCookie('auth_token', {path: "/"});
          res.json({success: true, message: 'User has been deleted'});
        });//pollremove
      });//userremove
    });//userfindOne
  });//routerdelete

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
          return res.status(404).send('User is not in DB');
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

  //----------Find questions of polls of user
  router.get('/:username/polls', (req,res) => {
    let username = req.params.username;
    let question = req.params.question;
    User.findOne({
      lowercase_name: username.toLowerCase()},
      (err,user) => {
        if(err) {
          return res.status(500).send('error in request');
        } else if(!user){
          return res.status(404).send('User is not in DB');
        }
        let likeQuestion = new RegExp(question, 'i');

        Poll.findOne({
          question: likeQuestion,
          user_id: user._id},
          (err,poll) => {
            if(err) {
              return res.status(500).send('error in request');
            } else if(!poll){
              return res.status(404).send('Poll is not in DB');
            }
            res.json(poll);
          }
        );
      }
    );
  });

  return router;
};
