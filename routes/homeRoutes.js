const express = require('express');
const controller = require('../controllers/homeController');
const localsHelper = require('./../middleware/localsHelper');

const router = express.Router();

router.use(localsHelper.setCurrentUser)

router.get('/',  controller.home)
router.get('/list', controller.list)


module.exports = router;