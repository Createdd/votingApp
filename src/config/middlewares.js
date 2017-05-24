import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

export default (app) => {
  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  if (isDev) {
    app.use(morgan('dev'));
  }
};
