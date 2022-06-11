const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/angular-issdemo'));$

// default Heroku port
app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res){
  const fullPath = path.join(__dirname + '/dist/angular-issdemo/index.html');
  console.log(" Fetching from.." + fullPath);
    res.sendFile(fullPath);
})
