const mongoose = require('mongoose');
const Light = mongoose.model('User', new mongoose.Schema({
  status: {
    type: String
  },
  clicks: {
    type: Number,
  },
  lastOff: {
    type: Date,
  },
}));
module.exports = Light;