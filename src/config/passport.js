import { Strategy } from 'passport-twitter';

export default function (passport) {
  passport.use(
		new Strategy(
  {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback',
    passReqToCallback: true,
  },
			(req, token, tokenSecret, profile, cb) => cb(null, profile),
		),
	);

  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });
}
