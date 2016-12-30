'use strict';
var Poll = require('../models/poll');
const _ = require('underscore');

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
  router.post('/', (req,res) => {
    let validAttributes = {};
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
    poll.save((err) => {
      if(err){
        res.status(500).send(err);
      }
      res.json(poll);
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
      if(poll.choices.hasOwnProperty(choice)) {
        poll.choices[choice] = poll.choices[choice] + 1;
      } else {
        poll.choices[choice] = 1;
      }
      Poll.update({_id: pollId}, poll, (err,obj) => {
        if(err || obj.n !== 1) {
          res.status(500).json({message: 'Cannot update poll'});
        }
        res.json(poll);
      });
    });
  });



  return router;
};//module export
