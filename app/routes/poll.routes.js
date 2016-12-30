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




  return router;
};//module export
