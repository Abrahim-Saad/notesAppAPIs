const app = require('express').Router();
const tokenAuthenticator = require('../middleware/tokenAuthenticator')
const homePageController = require('../controllers/homePageController')

app.get('/home', tokenAuthenticator.signIn, homePageController.homePage)


module.exports = app