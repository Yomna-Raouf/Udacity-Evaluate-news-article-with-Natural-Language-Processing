// Require Express to run server and routes
const express = require('express')
const cors = require('cors');

// Routers
const route = require('./routes/route');

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

module.exports = app;

