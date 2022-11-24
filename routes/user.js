const express = require('express');
const UserController = require('../controllers/user');

const api = express.Router();

api.get('/test', UserController.test);
api.get('/register', UserController.saveUser );

module.exports = api;