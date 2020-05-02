const LightModel = require('../models/Light.model')

const DEFAULT_LIGHT = 'BedroomLight'
const ON = 'on'
const LightController = {}

/**
 * @param {String} status 
 */
const updateStatus = async (status) => {
  const updates = { status }
  if (status === ON) {
    updates.lastOff = new Date()
  }
  return await LightModel.update({
    name: DEFAULT_LIGHT
  }, {
    ...updates,
    $inc: { clicks: +1 },
  })
}

LightController.stats = async (req, res) => {
  try{
    await LightModel.find().sort('-dateAdded').exec((err, lights) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.json({ lights })
      }
    })
  } catch(err) {
    res.send(err)
  }
}

LightController.update = async (req, res) => {
  try{
    await updateStatus(req.params.status)
    res.status(200)
  } catch(err) {
    res.send(err)
  }
}

module.exports = LightController
