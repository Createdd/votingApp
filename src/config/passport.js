/* eslint-disable no-param-reassign*/
// disabling eslint rule since no "reassign" happening ->  creating properties!
import { Strategy as TwitterStrategy } from 'passport-twitter';
import { Strategy as LocalStrategy } from 'passport-local';

import constants from './constants';
import User from '../models/user';

console.log(constants);

export default function (passport) {
  passport.serializeUser((user, done) => {
    console.log(`___SERIALIZE{user}+++${user}`);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log(`____DESERIALIZE${id}+++${id}`);
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(
		new TwitterStrategy(constants.TWITTER_STRATEGY, (req, token, tokenSecret, profile, done) => {
  process.nextTick(() => {
    if (!req.user) {
      User.findOne({ 'twitter.id': profile.id }, (err, user) => {
        if (err) return done(err);
        if (user) {
          if (!user.twitter.token) {
            user.twitter.token = token;
            user.twitter.username = profile.username;
            user.twitter.displayName = profile.displayName;
            user.save(() => {
              if (err) return done(err);
              return done(null, user);
            });
          }
          return done(null, user);
        }

						// if no user is found create one
        const newUser = new User();

        newUser.twitter.id = profile.id;
        newUser.twitter.token = token;
        newUser.twitter.username = profile.username;
        newUser.twitter.displayName = profile.displayName;

        newUser.save(() => {
          if (err) return done(err);
          return done(null, newUser);
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
        if (err) return done(err);
        return done(null, user);
      });
    }
  });
}),
	);

	//= ==========local signup===================

  passport.use(
		'local-signup',
		new LocalStrategy(constants.LOCAL_STRATEGY, (req, email, password, done) => {
  if (email) {
    email = email.toLowerCase();
  }
  process.nextTick(() => {
    if (!req.user) {
      User.findOne({ 'local.email': email }, (err, user) => {
        if (err) return done(err);
        if (user) {
          return done(null, false, {
            message: 'You cannot sign up with this email because it is already taken!',
          });
        }
						// create the user
        const newUser = new User();
        newUser.local.email = email;
        newUser.local.password = newUser.generateHash(password);
        newUser.save(() => {
          if (err) return done(err);
          return done(null, newUser);
        });
      });
					// if the user is logged in with a provider
    } else if (!req.user.local.email) {
      User.findOne({ 'local.email': email }, (err, user) => {
        if (err) return done(err);
        if (user) {
          return done(null, false, {
            message: 'You cannot sign up with this email because it is already taken!',
          });
        }
        user = req.user;
        user.local.email = email;
        user.local.password = user.generateHash(password);
        user.save(() => {
          if (err) return done(err);
          return done(null, user);
        });
      });
    } else {
					// user is logged in
      return done(null, req.user);
    }
  });
}),
	);

	// =========== local login
  passport.use(
		'local-login',
		new LocalStrategy(constants.LOCAL_STRATEGY, (req, email, password, done) => {
  if (email) email = email.toLowerCase();
  process.nextTick(() => {
    User.findOne({ 'local.email': email }, (err, user) => {
      if (err) return done(err);

      if (req.user) {
        return done(null, false, {
          message: `You are already logged in as ${req.user}`,
        });
      }

      if (!user) {
        return done(null, false, {
          message: 'User cannot be found in DB!',
        });
      }

      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Password is completely wrong! :D',
        });
      }
      return done(null, user);
    });
  });
}),
	);
}
