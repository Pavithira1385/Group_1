const mongoose = require('mongoose');

const Vehicle = mongoose.model('Vehicle', {
  name: String,
  type: String,
  capacity: Number
});

module.exports = Vehicle;
