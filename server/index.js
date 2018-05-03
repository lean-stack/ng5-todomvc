
// Express Framework
const express = require('express');

// My API middleware
const tingoRest = require('tingo-rest');

// Node.js
const fs   = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

var app = express();

app.use('/api',tingoRest(dataDir));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('API server listening at http://%s:%s', host, port);

});

