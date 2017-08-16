'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectMongo = require('connect-mongo');

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passport3 = require('./passport');

var _passport4 = _interopRequireDefault(_passport3);

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import morgan from 'morgan';
var isProd = process.env.NODE_ENV === 'production';
(0, _passport4.default)(_passport2.default);
var MongoConnect = (0, _connectMongo2.default)(_expressSession2.default);

exports.default = function (app) {
  if (isProd) {
    app.use((0, _compression2.default)());
    app.use((0, _helmet2.default)());
  }

  app.use(_express2.default.static('public'));

  // app.use(morgan('dev'));
  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));

  // use sessions
  app.use((0, _expressSession2.default)({
    secret: 'SessionSecret1',
    name: 'Session',
    resave: true,
    saveUninitialized: true,
    store: new MongoConnect({
      mongooseConnection: _database2.default
    })
  }));

  app.use(_passport2.default.initialize());
  app.use(_passport2.default.session());

  app.use('/', _routes2.default);

  // -------!!!!!keep "next" to stay in middleware stack!!!!!
  app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
      error: {
        message: err.message
      }
    });
  });
};