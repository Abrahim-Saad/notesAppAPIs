const app = require('express').Router();
const signinFormInputValidator = require('../validators/signinFormValidator')
// const signInAuthenticator = require('../middleware/projectModules/signinAuthenticator')
const signInController = require('../controllers/signInController')



app.post('/login', signinFormInputValidator, signInController.logIn)



module.exports = app