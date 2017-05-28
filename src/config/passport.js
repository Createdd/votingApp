/* eslint no-param-reassign: ["error", { "props": false }]*/
// disabling eslint rule since no "reassign" happening ->  creating properties!
import { Strategy } from 'passport-twitter';

import constants from './constants';
import User from '../models/user';

export default function (passport) {
  passport.use(
		new Strategy(constants.TWITTER_STRATEGY, (req, token, tokenSecret, profile, cb) => {
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
}
