'use strict';
let config = {};
config.privateKey = "secret";
config.db = {};

config.db.user = 'voting_management';
config.db.password = 'votingapp';
config.db.connectString =
  'mongodb://' + config.db.user + ':' + config.db.password + '@ds141368.mlab.com:41368/votingapp';


module.exports = config;
