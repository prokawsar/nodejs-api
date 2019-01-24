const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app
const app = express();


app.listen(process.env.port || 1000, (port=1000) => {
  console.log('Server is up and running on port ' + port);
});