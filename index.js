'use strict';

const express = require('express');
const path = require('path');
const packageDetails = require('./package.json');

// Application
const app = express();
const port = process.env.PORT || 8080;

// Routes
app.get('/', (req, res) => {
    res.status(200).send(JSON.stringify({name: packageDetails.name, version: packageDetails.version}));
});

// Start the server
app.listen(port, () => {
    console.log(`Express app up and running on http://localhost:${port}`);
})