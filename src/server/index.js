// Require Express to run server and routes
const express = require('express')
const cors = require('cors');
const { read } = require('fs');
/* const { response } = require('express');
const { ValidationError } = require('webpack'); */


// Require mockAPI response
const mockAPIResponse = require('./mockAPI.js')

// Routers
const route = require('./route');

// Start up an instance of app
const app = express();

/* Middleware*/

// Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Initialize all route with a callback function
app.use('/', route);

// Setup Server
app.listen(process.env.PORT || 8083, () => {
    console.log('app is listening on port 8083!')
})

module.exports = app;

