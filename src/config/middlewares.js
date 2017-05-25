import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import routes from '../routes';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

export default (app) => {
  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

	// Middleware for handling routes and errors
  app.use('/', routes);
  app.use((reg, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  });
  app.use((err, reg, res, next) => {
    res.status(err.status || 500).json({
      error: {
        message: err.message,
      },
    });
    next(err);
  });
};
