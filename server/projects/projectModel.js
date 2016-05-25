var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  task: String,
  description: String,
  startTime: String,
  endTime: String,
  details: String
});

module.exports = mongoose.model('Projects', projectSchema);