const express = require('express');
const controller = require('../controllers/userController');
const localsHelper = require('./../middleware/localsHelper');


const router = express.Router();

router.use(localsHelper.setCurrentUser)

router.get('/register', controller.register);
router.post('/register', controller.registerUser);   

router.get('/login',   controller.login);

module.exports = router;