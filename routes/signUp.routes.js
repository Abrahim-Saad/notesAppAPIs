const app = require('express').Router();

const signupFormInputValidator = require('../validators/signUpFormValidator')
// const signupAuthenticator = require('../Middleware/projectModules/signupAuthenticator')
const signUpController = require('../controllers/signUpController')


app.post('/addNewAccount', signupFormInputValidator, signUpController.addNewAccount)


module.exports = app