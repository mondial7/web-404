const Router = require('express').Router
const LightController = require('../controllers/Light.controller')

const router = new Router()

router.get('/', LightController.stats)
router.get('/reset', LightController.reset)
router.get('/light/:status', LightController.update)

module.exports = router
