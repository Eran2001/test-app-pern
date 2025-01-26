const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

// get all users
router.get('/users', usersController.getUsers);

// register a user
router.post('/register', usersController.registerUser);

module.exports = router;