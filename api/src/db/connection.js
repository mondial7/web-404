const mongoose = require('mongoose');
const configs = require('../configs/configs');

mongoose.Promise = global.Promise

module.exports = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    await mongoose.connect(configs.mongo, options)
  } catch (err) { console.log(err) }
}
