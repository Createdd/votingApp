'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _constants = require('./config/constants');

var _constants2 = _interopRequireDefault(_constants);

require('./config/database');

var _middlewares = require('./config/middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var app = (0, _express2.default)();
(0, _middlewares2.default)(app);

app.listen(_constants2.default.PORT, function (err) {
  if (err) {
    throw err;
  } else {
    console.log('\n    Server is running on port: ' + _constants2.default.PORT + '\n    ---\n    Running on ' + process.env.NODE_ENV + '\n    ');
  }
});