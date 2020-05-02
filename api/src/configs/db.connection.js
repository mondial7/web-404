const mongoose = require('mongoose');
const DB = require('./db.js');

const connectDb = () => {
 return mongoose.connect(DB.address);
};

module.exports = connectDb;