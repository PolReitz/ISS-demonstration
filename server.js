const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static('./dist/angular-issdemo/'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/angular-issdemo/'});
});

// default Heroku port
app.listen(process.env.PORT || 8080);