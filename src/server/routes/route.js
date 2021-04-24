// Require Express to run server and routes
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();

// API INFO
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const API_KEY = process.env.API_KEY;

// Express Router Module
const router = express.Router();

// ROUTES 
router.get('/', function (_, res) {
  res.status(200).sendFile(path.resolve('dist/index.html'));
});

//POST request
router.post('/test', async (req, res) => {
  
  let ArticleUrl = req.body.url;
  try {

    // POST Request to proccess user's articles
    const response = await fetch(`${baseUrl}${API_KEY}&of=json&txt&model=general&lang=en&url=${ArticleUrl}`);
    const data = await response.json();

    // Formatting NLP result 
    const {
      score_tag,
      confidence,
      irony,
      subjectivity,
    } = data ;

    // Sending NLP result to client
    res.send({
      score_tag,
      confidence,
      irony,
      subjectivity,
    });
 
  } catch(error){
    console.log(error)
  }
});


module.exports = router;
