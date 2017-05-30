/* eslint no-param-reassign: ["error", { "props": false }]*/
// disabling eslint rule since no "reassign" happening ->  creating properties!
import { Strategy as TwitterStrategy } from 'passport-twitter';
import { Strategy as LocalStrategy } from 'passport-local';

import constants from './constants';
import User from '../models/user';

export default function (passport) {
  passport.use(
		new TwitterStrategy(constants.TWITTER_STRATEGY, (req, token, tokenSecret, profile, cb) => {
  process.nextTick(() => {
    if (!req.user) {
      User.findOne({ 'twitter.id': profile.id }, (err, user) => {
        if (err) return cb(err);
        if (user) {
          if (!user.twitter.token) {
            user.twitter.token = token;
            user.twitter.username = profile.username;
            user.twitter.displayName = profile.displayName;
            user.save(() => {
              if (err) return cb(err);
              return cb(null, user);
            });
          }
          return cb(null, user);
        }

						// if no user is found create one
        const newUser = new User();

        newUser.twitter.id = profile.id;
        newUser.twitter.token = token;
        newUser.twitter.username = profile.username;
        newUser.twitter.displayName = profile.displayName;

        newUser.save(() => {
          if (err) return cb(err);
          return cb(null, newUser);
        });
      });
    } else {
					// when user already exists and is logged in
      const user = req.user;

      user.twitter.id = profile.id;
      user.twitter.token = token;
      user.twitter.username = profile.username;
      user.twitter.displayName = profile.displayName;

      user.save((err) => {
        if (err) return cb(err);
        return cb(null, user);
      });
    }
  });
}),
	);

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findById(id, (err, user) => {
      cb(err, user);
    });
  });

	//= ==========local signup===================

  passport.use(
		'local-signup',
		new LocalStrategy(constants.LOCAL_STRATEGY, (req, email, password, cb) => {
  if (email) email = email.toLowerCase();
  process.nextTick(() => {
    if (!req.user) {
      User.findOne({ 'local.email': email }, (err, user) => {
        if (err) return cb(err);
        if (user) {
          return cb(null, false, req.send('The email is already taken.'));
        }
						// create user
        const newUser = new User();
        newUser.local.email = email;
        newUser.local.password = newUser.generateHash(password);

        newUser.save((err) => {
          if (err) return cb(err);
          return cb(null, newUser);
        });
      });
					// if the user is logged in but has no local account...
    } else if (!req.user.local.email) {
      User.findOne({ 'local.email': email }, (err, user) => {
        if (err) return cb(err);
        if (user) {
          return cb(
								null,
								false,
								req.send('That email is already taken. Login not possible'),
							);
        }
        user = req.user;
        user.local.email = email;
        user.local.password = user.generateHash(password);
        user.save((err) => {
          if (err) return cb(err);
          return cb(null, user);
        });
      });
    } else {
					// user is logged in and already has a local account
      return cb(null, req.user);
    }
  });
}),
	);
	// =========== local login
  passport.use(
		'local-login',
		new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true, // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  },
			(req, email, password, cb) => {
  if (email) email = email.toLowerCase();
  process.nextTick(() => {
    User.findOne({ 'local.email': email }, (err, user) => {
      if (err) return cb(err);
      if (!user) return cb(null, false, req.send('No user found'));

      if (!user.validPassword(password)) {
        return cb(null, false, req.send('Wrong password!!!!!'));
      }
      return cb(null, user);
    });
  });
},
		),
	);
}
