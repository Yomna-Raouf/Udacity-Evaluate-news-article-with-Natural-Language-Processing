// Express Module to use Express Router
const express = require('express');

const path = require('path');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

// API INFO
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const API_KEY = process.env.API_KEY;

// Express Router Module
const router = express.Router();

// ROUTES 
router.get('/', function (req, res) {
  res.status(200).sendFile(path.resolve('dist/index.html'));
});

//POST request
router.post('/test', async (req, res) => {
  urlEntry = req.body.url;
  const response = await fetch(`${baseUrl}${API_KEY}&of=json&txt&model=general&lang=en&url=${req.body.url}`);
  console.log('server response: ', response);
  const data = await response.json();
  console.log('server side: ', data);
  const projectData = {
     score_tag: data.score_tag,
     confidence: data.confidence,
     irony: data.irony,
     subjectivity: data.subjectivity,
   };
   res.send(projectData);
   console.log(projectData);
  });


module.exports = router;
