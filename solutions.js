// *** solutions du travail pratique *** // 
// Nathan Bernard

/**
 * 
 * Run `npm install express body-parser`.
 * Create the request in POSTMAN: `POST localhost:3000/user`
 * Create a body with a Valid JSON.
 * Send the request. Should return 200 `{success: 'User created successfully'}`
 * Create a body with an invalid JSON.
 * Send the request. Should return 200 `{error: 'JSON is not valid'}`
 * 
 */

 const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();
 const PORT = 3000;
 
 /**
  * Set middlewares.
  * Here the order is important as seen.
  * We need bodyParser to modify the request before validating it is a validJson
  */ 
 app.use(headers);
 app.use(bodyParser.json({}));
 app.use(isValidJSON);
 
 app.get('/', (req, res) => {
     res.send({success: 'Hello root'});
 });
 
 // Create endpoint
 app.post('/user', (req, res) => {
     res.send({success: 'User created successfully'});
 });
 
 // Application port listener
 app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
 });
 
 /**
  * Set response contentType as JSON.
  * Seems to be not essential as Postman response contentType set to json even without this middleware
  * 
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */
 function headers(req, res, next) {
     res.contentType('json');
     next();
 }
 
 /**
  * Check if the body of the request has valid JSON format
  * @param {*} err 
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */
 function isValidJSON(err, req, res, next) {
     if (err) {
         /**
          * Basic check.
          * We could check for `err.type` if we would like more granularity to the error
          */
         res.status(401); // Just to set a custom status code for testing purpose
         res.send({error: 'JSON is not valid'});
     } else {
         next();
     }
 }
 
// Jean-Pierre Roy

const espress = require('express');
const app = espress();
const port = 3000;

app.listen(port, () => {
    console.log(`Écoute sur le port ${port}`);
})

app.get('/users', auth, (req, res) => {
    res.send('Voici les users...');
});

function auth(req, res, next){
    if(req.get('content-type') === 'application/json'){
        console.log('Access authorized');
        next();
    } else{
        res.end('auth failed');
    }
}

// Jézébel Assad 
const express = require('express');
const app = express();
const port = 3000;

app.post('/user', formatCheck, (req, res) =>
{
    console.log("Got to POST to /user");
    res.send("Got POST to /user");
});

function formatCheck(req, res, next)
{
    if(req.headers['content-type'] === 'application/json')
    {
        next();
    }
    else
    {
        res.end("Format needs to be JSON");
    }
}

app.listen(port, () =>
{
    console.log("Listening on port", port);
});

// Ismail el Hadaj 
const express = require("express");
const app = express();
const port = 8000;

app.use((req, res, next) => {
  res.setHeader("Content-type", "application/json");
  next();
});

app.post("/users", (req, res) => {
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Fehmi Derbali
const express = require('express');
const app = express();
const port = 3000;

app.post('/users', checkContentType, (req, res) => {
    console.log('Got POST request to /users');
    res.send('Got POST request to /users');
});

function checkContentType(req, res, next) {
    if (req.is('application/json')) {
        next()
    } else {
        res.status(415).end('Wrong content type !')
    }
}

app.listen(port, () => {
    console.log('Example app listening on port ' + port);
})

// Daniel 

const express = require("express");
const app = express();

app.post('/users', jsonProtect, (req, res, next) => {
    res.send('json reçu');
});

function jsonProtect(req, res, next) {

    if (req.headers['content-type'] === 'application/json') {
        next();
    } else {
        res.send('not allowed');
    }
}

app.listen(5000, () => {
    console.log("Server inicialized on port http://localhost:5000");
});