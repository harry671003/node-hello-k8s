'use strict';

const express = require('express');
const os = require( 'os' );


const networkInterfaces = os.networkInterfaces( );


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.json({
      messge: 'welcome',
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      host: os.hostname()
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
