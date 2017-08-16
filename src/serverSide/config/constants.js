'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var devConfig = {
  MONGO_URL: 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds141368.mlab.com:41368/votingapp',
  TWITTER_STRATEGY: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://127.0.0.1:3000/api/auth/twitter/callback',
    passReqToCallback: true
  }
};
var prodConfig = {
  MONGO_URL: 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds141368.mlab.com:41368/votingapp',
  TWITTER_STRATEGY: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: 'https://ddcs-votingapp.herokuapp.com/api/auth/twitter/callback',
    passReqToCallback: true
  }
};

var defaultConfig = {
  PORT: process.env.PORT || 3000,
  LOCAL_STRATEGY: {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    default:
      return prodConfig;
  }
}

exports.default = Object.assign({}, defaultConfig, envConfig(process.env.NODE_ENV));