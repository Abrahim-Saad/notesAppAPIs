const express = require('express');
const app = require('express').Router();
const crossOriginResourceSharing = require('cors')

// const path = require('path');

// app.use(express.static(path.join(__dirname, './Public')))
app.use(express.json())
app.use(crossOriginResourceSharing(
  // {origin: ['https://heroku.io', 'https://godaddy.com']}
))

app.use(require('../routes/signUp.routes'))
app.use(require('../routes/signIn.routes'))
app.use(require('../routes/homePage.routes'))
app.use(require('../routes/crudOperations.routes'))

app.get('*', (request, response) => {
  response.send("404 Page Not Found!!")
})

module.exports = app