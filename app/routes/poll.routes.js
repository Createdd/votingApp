'use strict';
const Poll = require('../models/poll');
const User = require('../models/user');
const _ = require('underscore');
const authenticateRoute = require('../middleware/auth-middleware');


module.exports = function(express,app) {
  let router = express.Router();

  //----------Find all polls
  router.get('/', (req,res) => {
    Poll.find({}, (err,polls) => {
      if(err) {
        return res.status(500).send('Error in Request');
      } else {
        res.json(polls);
      }
    });
  });

  //----------Create poll
  router.post('/', authenticateRoute, (req,res) => {
    let validAttributes = {};
    let currentUser = req.decoded.username;
    if(typeof req.body.choices !== 'object' || req.body.choices.length < 2) {
      return res.status(400).send('A poll must have at least 2 options');
    } else if (typeof req.body.choices !== 'object' || req.body.choices.length > 30) {
      return res.status(400).send('A poll cannot exceed 30 options');
    } else if (typeof req.body.question !== 'string') {
      return res.status(400).send('A question must be a text');
    }
    validAttributes.question = req.body.question.trim();

    let choices = {};
    req.body.choices.forEach((choice) => {
      choices[choice] = 0;
    });
    validAttributes.choices = choices;

    let poll = new Poll(validAttributes);
    User.findOne({username: currentUser}, '_id', (err, user) => {
      if(err) {
        return res.status(500).send('Error in User request');
      } else if (!user) {
        return res.status(500).send('Response is not a user');
      }
      validAttributes.user_id = user._id;
      let poll = new Poll(validAttributes);
      poll.save((err) => {
        if(err){
          return res.status(500).send(err);
        }
        res.json(poll);
      });
    });
  });

  //----------Get single poll
  router.get('/:id', (req,res) => {
    let pollId = req.params.id;

    Poll.findById({_id: pollId}, (err,poll) => {
      if(err) {
        res.status(500).json({message: 'Error in Request'});
      }
      if(!poll) {
        res.status(404).json({message: 'There is no poll with that ID in the DB'});
      }
      res.json(poll);
    });
  });

  //----------Edit poll
  router.put('/:id', (req,res) => {
    let pollId = req.params.id;
    if(typeof req.body.choice !== 'string' || req.body.choice.trim().length !== 0) {
      return res.status(400).send('Invalid Choice');
    }
    Poll.findById(pollId, (err, poll) => {
      if(err) {
        res.status(500).json({message: 'Error in Request'});
      }
      if(!poll) {
        res.status(404).json({message: 'There is no poll with that ID in the DB'});
      }
      let choice = req.body.choice.trim();
      let newItem = true;
      Object.keys(poll.choices).forEach((propertyName) => {
        if(propertyName.toLowerCase() === choice.toLowerCase() && newItem) {
          poll.choices[propertyName] = poll.choices[propertyName] + 1;
          newItem = false;
        }
      });
      if(newItem) {
        poll.choices[choice] = 1;
      }
      Poll.update({_id: pollId}, poll, (err,obj) => {
        if(err || obj.n !== 1) {
          return res.status(500).json({message: 'Cannot update poll'});
        }
        res.json(poll);
      });
    });
  });

  //----------Delete poll
  router.delete('/:id', authenticateRoute, (req,res) => {
    let pollId = req.params.id;
    let currentUser = req.decoded.username;

    User.findOne({username: currentUser}, '_id', (err, user) => {
      if(err) {
        return res.status(500).send('Error in User request');
      } else if (!user) {
        return res.status(400).send('Response is not a user');
      }

      Poll.remove({_id: pollId}, (err, obj) => {
        if(err) {
          return res.status(500).json({message: 'Error in delete request'});
        }
        if(obj.result.n === 0) {
          return res.status(404).json({message: 'There is no poll with that ID in the DB'});
        }
        else {
          res.send('Poll has been deleted');
        }
      });
    });
  });

  return router;
};
