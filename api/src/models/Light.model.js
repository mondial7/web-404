const mongoose = require('mongoose');

module.exports = mongoose.model('Light', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'BedroomLight',
    unique: true,
  },
  status: {
    type: String,
    enum: ['on', 'off'],
    required: true,
    default: 'on',
  },
  clicks: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  lastOff: {
    type: Date,
    required: true,
    default: Date.now,
  },
}));
