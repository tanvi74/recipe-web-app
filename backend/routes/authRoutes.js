const apiV1 = require("express").Router();
const authController = require('./../controllers/authController');

apiV1.post('/signup', authController.signup);
apiV1.post('/login', authController.login)

module.exports = apiV1;