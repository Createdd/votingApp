'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _poll = require('./models/poll');

var _poll2 = _interopRequireDefault(_poll);

var _passport3 = require('./config/passport');

var _passport4 = _interopRequireDefault(_passport3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign*/
(0, _passport4.default)(_passport2.default);

var router = _express2.default.Router();

var isLoggedIn = function isLoggedIn(req, res, next) {
  if (req.user) {
    console.log('|||||||||Logged in as ' + req.user + '|||||||');
    return next();
  }
  return res.status(401).json({
    error: 'User not authenticated'
  });
};

// set router param
router.param('pID', function (req, res, next, id) {
  _poll2.default.findById(id, function (err, doc) {
    if (err) return next(err);
    if (!doc) {
      err = new Error('Document cannot be found in DB');
      err.status = 404;
      return next(err);
    }
    req.poll = doc;
    return next();
  });
});

router.param('aID', function (req, res, next, id) {
  req.answer = req.poll.answers[id];
  if (!req.answer) {
    var err = new Error('Document cannot be found in DB');
    err.status = 404;
    return next(err);
  }
  return next();
});

// GET,POST, DELETE Routes
router.get('/api/polls', function (req, res) {
  _poll2.default.find({}, function (err, polls, next) {
    if (err) return next(err);
    return res.status(200).json(polls);
  });
});

router.get('/api/polls/:pID', function (req, res) {
  res.json(req.poll);
});

router.post('/api/polls/new', isLoggedIn, function (req, res, next) {
  var poll = new _poll2.default(req.body);
  poll.save(function (err, doc) {
    if (err) return next(err);
    return res.status(201).json(doc);
  });
});

router.post('/api/polls/:pID/new', isLoggedIn, function (req, res, next) {
  req.poll.answers.push(req.body);
  req.poll.save(function (err, doc) {
    if (err) return next(err);
    return res.status(201).json(doc);
  });
});

router.post('/api/polls/:pID/:aID/vote', function (req, res, next) {
  req.answer.vote(req.vote, function (err, doc) {
    if (err) return next(err);
    return res.json(doc);
  });
});

router.delete('/api/polls/:pID', isLoggedIn, function (req, res, next) {
  req.poll.remove(function () {
    req.poll.save(function (err, doc) {
      if (err) return next(err);
      return res.json(doc);
    });
  });
});

// twitter authentication routes
router.get('/api/auth/twitter', _passport2.default.authenticate('twitter'));
router.get('/api/auth/twitter/callback', _passport2.default.authenticate('twitter', {
  successRedirect: '/polls',
  failureRedirect: '/'
}));

router.get('/api/profile', function (req, res) {
  res.json({ user: req.user });
});

// local sign up
router.get('/api/signup', function (req, res) {
  res.json({ message: 'Signup GET' });
});

router.post('/api/signup', function (req, res, next) {
  _passport2.default.authenticate('local-signup', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({ message: info.message });
    }
    req.logIn(user, function () {
      if (err) {
        return next(err);
      }
      return res.redirect('/polls');
    });
    return false;
  })(req, res, next);
});

// local sign in
router.get('/api/login', function (req, res) {
  res.json({ message: 'Login GET' });
});

router.post('/api/login', function (req, res, next) {
  _passport2.default.authenticate('local-login', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({ message: info.message });
    }
    req.logIn(user, function () {
      if (err) {
        return next(err);
      }
      return res.redirect('/polls');
    });
    return false;
  })(req, res, next);
});

router.get('/api/logout', function (req, res, next) {
  req.session.destroy(function (err) {
    if (err) next(err);
    res.redirect('/');
  });
});

router.get('/*', function (req, res) {
  var options = {
    root: __dirname + '/../../public/',
    dotfiles: 'deny'
  };
  res.sendFile('index.html', options);
});

exports.default = router;