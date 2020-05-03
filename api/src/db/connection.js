const mongoose = require('mongoose');

mongoose.Promise = global.Promise

module.exports = async () => {
  try {
    const options = {
      useNewUrlParser: true,
    }
    await mongoose.connect(process.env.MONGO, options)
  } catch (err) { console.log(err) }
}
