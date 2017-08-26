'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// routes
const routesClients = require('./routes/clients')

// Post from evironment variables or 3000 by default
const port = process.env.PORT || 3000;

// Body parser to read json 
app.use( bodyParser.urlencoded( {extended:false} ) )

// Base routes
app.use('/api', routesClients);
//app.use("/policy", policiesRoute);

// Listen on port
app.listen(port, () => {
  console.log(`Server up in port ${port}`);
});