var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  task: String,
  description: String,
  startTime: Date,
  endTime: Date,
  details: String
});

module.exports = mongoose.model('Projects', projectSchema);