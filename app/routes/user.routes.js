'use strict';
var User = require('../models/user');

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
    console.warn('router works');
  });
  return router;
};
