const app = require('express').Router();
const tokenAuthenticator = require('../middleware/tokenAuthenticator')
const crudOperationsController = require('../controllers/crudOperationsController')


app.post('/addNote', tokenAuthenticator.crudOperations, crudOperationsController.addNote)

app.delete('/deleteNote', tokenAuthenticator.crudOperations, crudOperationsController.deleteNote)

app.put('/editNote', tokenAuthenticator.crudOperations, crudOperationsController.editNote)


module.exports = app