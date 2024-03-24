const express = require("express");
const router = express.Router();
const {registration, login, isLoggedIn} = require('../controllers/userController');

// register route
router.post('/register', registration);
// login route
router.post('/login', login);
// isLOggedIn
router.get('/isloggedin', isLoggedIn)


  module.exports = router