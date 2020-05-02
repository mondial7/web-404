const Router = require('express').Router
const LightController = require('../controllers/Light.controller')

const router = new Router()

router.get('/', LightController.stats)
router.put('/light', LightController.update)

module.exports = router
