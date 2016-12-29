'use strict';
var Poll = require('../models/poll');
const _ = require('underscore');

module.exports = function(express,app) {
  let router = express.Router();
  router.get('/', (req,res) => {
    res.send('Working');
  });
  return router;
};
