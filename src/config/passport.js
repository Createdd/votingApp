import { Strategy } from 'passport-twitter';

export default function (passport) {
  passport.use(
		new Strategy(
  {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://localhost:3000/auth/twitter',
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
