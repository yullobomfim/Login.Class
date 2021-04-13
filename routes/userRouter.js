const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', express.urlencoded({extended: true}), userController.register);

router.post('/login', express.urlencoded({extended: true}), userController.login);

module.exports = router;