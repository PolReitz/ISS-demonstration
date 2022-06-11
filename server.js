//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist/angular-issdemo'));
/*app.use(express.static(path.join(__dirname, 'dist','angular-issdemo')));

app.get('/*', function(req,res) {
  //res.sendFile(path.join(__dirname+'/dist/angular-issdemo/index.html'));
  res.sendFile(path.join(__dirname,'dist','angular-issdemo','index.html'));
});*/

// Deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) =>
    // res.sendFile(path.resolve(__dirname, "../client", "public", "index.html"))
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API IS RUNNING.");
  });
}

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);