// config/auth.js

// module.exports = {
//   twitterAuth: {
//     consumerKey: process.env.TWITTER_CONSUMER_KEY,
//     consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
//     callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback',
//   },
// };

// import session from 'express-session';
// import passport from 'passport';

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

// passport.use(
// 	new TwitterStrategy(
//   {
//     consumerKey: process.env.TWITTER_CONSUMER_KEY,
//     consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
//     callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback',
//   },
// 		(token, tokenSecret, profile, cb) => cb(null, profile),
// 	),
// );

// export default (app) => {
//   app.use(
// 		session({
//   secret: 'SessionSecret1',
//   resave: false,
//   saveUninitialized: true,
// }),
// 	); // not for production! (Did not use secure cookie)
//   app.use(passport.initialize());
//   app.use(passport.session());
// };
