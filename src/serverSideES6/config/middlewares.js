// import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import express from 'express';

import passport from 'passport';
import passportConfig from './passport';
import db from './database';
import routes from '../routes';

const isProd = process.env.NODE_ENV === 'production';
passportConfig(passport);
const MongoConnect = MongoStore(session);

export default (app) => {
  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }

  app.use(express.static('public'));

	// app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

	// use sessions
  app.use(
		session({
  secret: 'SessionSecret1',
  name: 'Session',
  resave: true,
  saveUninitialized: true,
  store: new MongoConnect({
    mongooseConnection: db,
  }),
}),
	);

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/', routes);

	// -------!!!!!keep "next" to stay in middleware stack!!!!!
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      error: {
        message: err.message,
      },
    });
  });
};
