/* eslint-disable no-param-reassign*/
import express from 'express';
import passport from 'passport';

import Poll from './models/poll';
import passportConfig from './config/passport';

passportConfig(passport);

const router = express.Router();

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    console.log(`|||||||||Logged in as ${req.user}|||||||`);
    return next();
  }
  return res.status(401).json({
    error: 'User not authenticated',
  });
};

// set router param
router.param('pID', (req, res, next, id) => {
  Poll.findById(id, (err, doc) => {
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

router.param('aID', (req, res, next, id) => {
  req.answer = req.poll.answers[id];
  if (!req.answer) {
    const err = new Error('Document cannot be found in DB');
    err.status = 404;
    return next(err);
  }
  return next();
});

// GET,POST, DELETE Routes
router.get('/api/polls', (req, res) => {
  Poll.find({}, (err, polls, next) => {
    if (err) return next(err);
    return res.status(200).json(polls);
  });
});

router.get('/api/polls/:pID', (req, res) => {
  res.json(req.poll);
});

router.post('/api/polls/new', isLoggedIn, (req, res, next) => {
  const poll = new Poll(req.body);
  poll.save((err, doc) => {
    if (err) return next(err);
    return res.status(201).json(doc);
  });
});

router.post('/api/polls/:pID/new', isLoggedIn, (req, res, next) => {
  req.poll.answers.push(req.body);
  req.poll.save((err, doc) => {
    if (err) return next(err);
    return res.status(201).json(doc);
  });
});

router.post('/api/polls/:pID/:aID/vote', (req, res, next) => {
  req.answer.vote(req.vote, (err, doc) => {
    if (err) return next(err);
    return res.json(doc);
  });
});

router.delete('/api/polls/:pID', isLoggedIn, (req, res, next) => {
  req.poll.remove(() => {
    req.poll.save((err, doc) => {
      if (err) return next(err);
      return res.json(doc);
    });
  });
});

// twitter authentication routes
router.get('/api/auth/twitter', passport.authenticate('twitter'));
router.get(
	'/api/auth/twitter/callback',
	passport.authenticate('twitter', {
  successRedirect: '/polls',
  failureRedirect: '/',
}),
);

router.get('/api/profile', (req, res) => {
  res.json({ user: req.user });
});

// local sign up
router.get('/api/signup', (req, res) => {
  res.json({ message: 'Signup GET' });
});

router.post('/api/signup', (req, res, next) => {
  passport.authenticate('local-signup', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({ message: info.message });
    }
    req.logIn(user, () => {
      if (err) {
        return next(err);
      }
      return res.redirect('/polls');
    });
    return false;
  })(req, res, next);
});

// local sign in
router.get('/api/login', (req, res) => {
  res.json({ message: 'Login GET' });
});

router.post('/api/login', (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({ message: info.message });
    }
    req.logIn(user, () => {
      if (err) {
        return next(err);
      }
      return res.redirect('/polls');
    });
    return false;
  })(req, res, next);
});

router.get('/api/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) next(err);
    res.redirect('/');
  });
});

router.get('/*', (req, res) => {
  const options = {
    root: `${__dirname}/../../public/`,
    dotfiles: 'deny',
  };
  res.sendFile('index.html', options);
});

export default router;
