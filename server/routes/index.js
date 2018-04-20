const router = require('express').Router()
module.exports = router

router.use('/api/v2', require('./api'))
router.use('/auth', require('./auth'))
