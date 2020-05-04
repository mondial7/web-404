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

LightController.update = async (req, res) => {
  try {
    await updateStatus(req.params.status)
    res.status(200).json(true)
  } catch (err) {
    res.send(err)
  }
}

LightController.stats = async (req, res) => {
  try {
    const lights = await LightModel.find()
    res.json({ lights })
  } catch (err) {
    res.send(err)
  }
}

/**
 * Note: currently using a single light on this demo app
 */
LightController.reset = async (req, res) => {
  const name = DEFAULT_LIGHT
  try {
    await LightModel.findOne({ name }).remove()
    await new LightModel({ name }).save()
    res.status(200).json(true)
  } catch (err) {
    res.send(err)
  }
}

module.exports = LightController
