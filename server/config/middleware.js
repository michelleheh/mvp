var morgan = require('morgan');
var path = require('path');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  // app.use(express.static(path.join(__dirname, '..', '..', 'client')));
};