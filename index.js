'use strict';

const express = require('express');
const version = require('./version');

// Application
const app = express();
const port = process.env.PORT || 8080;

// Routes
app.get('/', (req, res) => {
  res.status(200).send(JSON.stringify({ name: version.getName(), version: version.getVersion() }));
});

// Start the server
app.listen(port, () => {
  console.log(`Express app up and running on http://localhost:${port}`);
})