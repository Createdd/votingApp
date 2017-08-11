'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (passport) {
  passport.serializeUser(function (user, done) {
    console.log('___SERIALIZE{user}+++' + user);
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    console.log('____DESERIALIZE' + id + '+++' + id);
    _user2.default.findById(id, function (err, user) {
      done(err, user);
    });
  });

  passport.use(new _passportTwitter.Strategy(_constants2.default.TWITTER_STRATEGY, function (req, token, tokenSecret, profile, done) {
    process.nextTick(function () {
      if (!req.user) {
        _user2.default.findOne({ 'twitter.id': profile.id }, function (err, user) {
          if (err) return done(err);
          if (user) {
            if (!user.twitter.token) {
              user.twitter.token = token;
              user.twitter.username = profile.username;
              user.twitter.displayName = profile.displayName;
              user.save(function () {
                if (err) return done(err);
                return done(null, user);
              });
            }
            return done(null, user);
          }

          // if no user is found create one
          var newUser = new _user2.default();

          newUser.twitter.id = profile.id;
          newUser.twitter.token = token;
          newUser.twitter.username = profile.username;
          newUser.twitter.displayName = profile.displayName;

          newUser.save(function () {
            if (err) return done(err);
            return done(null, newUser);
          });
        });
      } else {
        // when user already exists and is logged in
        var user = req.user;

        user.twitter.id = profile.id;
        user.twitter.token = token;
        user.twitter.username = profile.username;
        user.twitter.displayName = profile.displayName;

        user.save(function (err) {
          if (err) return done(err);
          return done(null, user);
        });
      }
    });
  }));

  //= ==========local signup===================

  passport.use('local-signup', new _passportLocal.Strategy(_constants2.default.LOCAL_STRATEGY, function (req, email, password, done) {
    if (email) {
      email = email.toLowerCase();
    }
    process.nextTick(function () {
      if (!req.user) {
        _user2.default.findOne({ 'local.email': email }, function (err, user) {
          if (err) return done(err);
          if (user) {
            return done(null, false, {
              message: 'You cannot sign up with this email because it is already taken!'
            });
          }
          // create the user
          var newUser = new _user2.default();
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.save(function () {
            if (err) return done(err);
            return done(null, newUser);
          });
        });
        // if the user is logged in with a provider
      } else if (!req.user.local.email) {
        _user2.default.findOne({ 'local.email': email }, function (err, user) {
          if (err) return done(err);
          if (user) {
            return done(null, false, {
              message: 'You cannot sign up with this email because it is already taken!'
            });
          }
          user = req.user;
          user.local.email = email;
          user.local.password = user.generateHash(password);
          user.save(function () {
            if (err) return done(err);
            return done(null, user);
          });
        });
      } else {
        // user is logged in
        return done(null, req.user);
      }
    });
  }));

  // =========== local login
  passport.use('local-login', new _passportLocal.Strategy(_constants2.default.LOCAL_STRATEGY, function (req, email, password, done) {
    if (email) email = email.toLowerCase();
    process.nextTick(function () {
      _user2.default.findOne({ 'local.email': email }, function (err, user) {
        if (err) return done(err);

        if (req.user) {
          return done(null, false, {
            message: 'You are already logged in as ' + req.user
          });
        }

        if (!user) {
          return done(null, false, {
            message: 'User cannot be found in DB!'
          });
        }

        if (!user.validPassword(password)) {
          return done(null, false, {
            message: 'Password is completely wrong! :D'
          });
        }
        return done(null, user);
      });
    });
  }));
};

var _passportTwitter = require('passport-twitter');

var _passportLocal = require('passport-local');

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign*/
// disabling eslint rule since no "reassign" happening ->  creating properties!
console.log(_constants2.default);